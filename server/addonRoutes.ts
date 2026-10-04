import { Express, Request, Response } from "express";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const ADDON_DIR = path.resolve(process.cwd(), "special-robot-main", "data");
if (!fs.existsSync(ADDON_DIR)) fs.mkdirSync(ADDON_DIR, { recursive: true });

const CODES_FILE = path.join(ADDON_DIR, "addon_codes.json");
const USERS_FILE = path.join(ADDON_DIR, "addon_users.json");

function readJsonFile(filePath: string): Record<string, any> {
  try {
    if (!fs.existsSync(filePath)) return {};
    const raw = fs.readFileSync(filePath, "utf-8");
    if (!raw.trim()) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error("readJsonFile error", e);
    return {};
  }
}

function writeJsonFile(filePath: string, obj: any) {
  fs.writeFileSync(filePath, JSON.stringify(obj, null, 2), "utf-8");
}

function genCode(length = 6): string {
  return crypto.randomInt(0, 10 ** length).toString().padStart(length, "0");
}

function getBotToken(): string {
  return process.env.TELEGRAM_BOT_TOKEN || "";
}

async function sendTelegramMessage(chatId: string | number, text: string) {
  const token = getBotToken();
  if (!token) return { ok: false, message: "missing-bot-token" };

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: String(chatId), text, parse_mode: "HTML" }),
    });
    return await res.json();
  } catch (e) {
    console.error("sendTelegramMessage error", e);
    return { ok: false, message: String(e) };
  }
}

async function sendTelegramPhoto(chatId: string | number, base64Data: string, filename = "shot.jpg", caption?: string) {
  const token = getBotToken();
  if (!token) return { ok: false, message: "missing-bot-token" };
  const match = base64Data.match(/^data:.+;base64,(.+)$/);
  const b64 = match ? match[1] : base64Data;
  const buffer = Buffer.from(b64, "base64");

  try {
    const form = new FormData();
    form.append("chat_id", String(chatId));
    // Node 18+ supports Blob; in older Node use form-data package
    // @ts-ignore
    const blob = new Blob([buffer]);
    form.append("photo", blob, filename);
    if (caption) form.append("caption", caption);
    const url = `https://api.telegram.org/bot${token}/sendPhoto`;
    const res = await fetch(url, { method: "POST", body: form as any });
    return await res.json();
  } catch (e) {
    console.error("sendTelegramPhoto error", e);
    return { ok: false, message: String(e) };
  }
}

export function registerAddonRoutes(app: Express) {
  // ensure addon dir exists
  if (!fs.existsSync(ADDON_DIR)) fs.mkdirSync(ADDON_DIR, { recursive: true });

  app.post("/api/addon/request-activation", async (req: Request, res: Response) => {
    const { telegram_id } = req.body || {};
    if (!telegram_id) return res.status(400).json({ error: "telegram_id required" });

    const codes = readJsonFile(CODES_FILE);
    const code = genCode(6);
    const expiresAt = Date.now() + 1000 * 60 * 60 * 24; // 24 hours

    codes[code] = { telegram_id: String(telegram_id), createdAt: Date.now(), expiresAt, used: false };
    writeJsonFile(CODES_FILE, codes);

    const text = `رمز التفعيل للإضافة: <b>${code}</b>\nصالِح لمدة 24 ساعة.\nادخله في الإضافة لتفعيل حسابك.`;
    await sendTelegramMessage(telegram_id, text);

    return res.json({ success: true, message: "code-sent" });
  });

  app.post("/api/addon/verify-activation", (req: Request, res: Response) => {
    const { telegram_id, code } = req.body || {};
    if (!telegram_id || !code) return res.status(400).json({ error: "telegram_id and code required" });

    const codes = readJsonFile(CODES_FILE);
    const entry = codes[code];
    if (!entry) return res.status(400).json({ error: "invalid-code" });
    if (entry.used) return res.status(400).json({ error: "code-already-used" });
    if (entry.telegram_id !== String(telegram_id)) return res.status(400).json({ error: "mismatch" });
    if (entry.expiresAt < Date.now()) return res.status(400).json({ error: "expired" });

    entry.used = true;
    entry.usedAt = Date.now();
    writeJsonFile(CODES_FILE, codes);

    const users = readJsonFile(USERS_FILE);
    users[String(telegram_id)] = { activatedAt: Date.now(), viaCode: code };
    writeJsonFile(USERS_FILE, users);

    return res.json({ success: true });
  });

  app.post("/api/addon/report-hit", async (req: Request, res: Response) => {
    const { telegram_id, code, resultText, screenshotBase64 } = req.body || {};
    if (!telegram_id || !code || !resultText) return res.status(400).json({ error: "telegram_id, code, resultText required" });

    const users = readJsonFile(USERS_FILE);
    if (!users[String(telegram_id)]) return res.status(403).json({ error: "not-activated" });

    const userChatId = telegram_id;
    const groupId = process.env.TELEGRAM_GROUP_ID;
    const caption = `📣 Hit Report\nFrom: ${telegram_id}\nCode: ${code}\n\n${resultText}`;

    try {
      await sendTelegramMessage(userChatId, caption);
      if (groupId) await sendTelegramMessage(groupId, caption);

      if (screenshotBase64) {
        if (groupId) await sendTelegramPhoto(groupId, screenshotBase64, `hit-${Date.now()}.jpg`, `Screenshot — ${telegram_id}`);
        await sendTelegramPhoto(userChatId, screenshotBase64, `hit-${Date.now()}.jpg`, `Your screenshot`);
      }
    } catch (err) {
      console.error("Failed to forward hit:", err);
    }

    return res.json({ success: true });
  });

  app.get("/api/addon/admin/codes", (req: Request, res: Response) => {
    if (!req.session?.isAdmin) return res.status(403).json({ error: "forbidden" });
    const codes = readJsonFile(CODES_FILE);
    return res.json({ codes });
  });

  app.post("/api/addon/admin/create-code", (req: Request, res: Response) => {
    if (!req.session?.isAdmin) return res.status(403).json({ error: "forbidden" });
    const { telegram_id, expiresHours } = req.body || {};
    const codes = readJsonFile(CODES_FILE);
    const code = genCode(6);
    const expiresAt = Date.now() + 1000 * 60 * 60 * (expiresHours || 24);
    codes[code] = { telegram_id: telegram_id ? String(telegram_id) : null, createdAt: Date.now(), expiresAt, used: false };
    writeJsonFile(CODES_FILE, codes);
    return res.json({ success: true, code });
  });
}
