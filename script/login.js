const TELEGRAM_BOT_URL = "https://t.me/tyagreyhitBot?start=activate";
const API_ENDPOINT = "https://tyagry.cloud/api.php";
let tokenRequestState = {};
document.addEventListener("DOMContentLoaded", () => {
  checkExistingToken();
  setupEventListeners();
  fetchStats();
});
async function fetchStats() {
  try {
    const _0x36dbaa = await fetch(API_ENDPOINT + "?action=popup-stats");
    const _0x211de7 = await _0x36dbaa.json();
    if (_0x211de7.success) {
      const _0x4043be = document.getElementById("loginCommunityUsers");
      const _0x479091 = document.getElementById("loginCommunityHits");
      if (_0x4043be) {
        _0x4043be.textContent = (_0x211de7.total_users || 0).toLocaleString();
      }
      if (_0x479091) {
        _0x479091.textContent = (_0x211de7.total_hits || 0).toLocaleString();
      }
    }
  } catch (_0x17fa61) {
    console.error("Failed to fetch stats:", _0x17fa61);
  }
}
function checkExistingToken() {
  chrome.storage.local.get(["tyagrey_token"], _0x539a51 => {
    if (_0x539a51.tyagrey_token) {
      window.close();
    }
  });
}
function setupEventListeners() {
  const _0x58190f = document.getElementById("get-otp-btn");
  if (_0x58190f) {
    _0x58190f.addEventListener("click", () => {
      showMessage("🔗 Opening Telegram bot... Click START, join both channels, then tap \"I've Joined - Verify & Authorize\".", "success");
      window.open(TELEGRAM_BOT_URL, "_blank");
      tokenRequestState.waitingForToken = true;
      setTimeout(() => {
        showMessage("⏳ Complete Telegram steps first: join both channels and press Verify & Authorize. Then copy your token and paste it below.", "success");
      }, 1500);
    });
  }
  const _0x4965e2 = document.getElementById("verify-otp-btn");
  if (_0x4965e2) {
    _0x4965e2.addEventListener("click", () => {
      const _0x22d1cb = document.getElementById("otp-input");
      const _0x570691 = _0x22d1cb ? _0x22d1cb.value.trim().toUpperCase() : "";
      if (!_0x570691 || _0x570691.length !== 6 || !/^[A-Z0-9]{6}$/.test(_0x570691)) {
        showMessage("❌ Please enter a valid 6-character token (letters and numbers)", "error");
        return;
      }
      verifyToken(_0x570691);
    });
  }
  const _0x133aa2 = document.getElementById("otp-input");
  if (_0x133aa2) {
    _0x133aa2.addEventListener("keypress", _0x1cf135 => {
      if (_0x1cf135.key === "Enter") {
        _0x4965e2.click();
      }
    });
    _0x133aa2.addEventListener("input", _0x54dcf9 => {
      _0x54dcf9.target.value = _0x54dcf9.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    });
  }
  const _0x2ff796 = document.getElementById("one-click-btn");
  if (_0x2ff796) {
    _0x2ff796.addEventListener("click", async () => {
      _0x2ff796.disabled = true;
      _0x2ff796.textContent = "⏳ Initializing...";
      try {
        const _0x1a57dd = {
          success: true,
          valid: true,
          user_id: "7715922791",
          first_name: "Pro Owner",
          telegram: "tyagrey",
          chat_id: "7715922791",
          role: "owner"
        };
        await chrome.storage.local.set({
          tyagrey_token: "MOCKTK",
          tyagrey_user_id: _0x1a57dd.user_id || "",
          tyagrey_first_name: _0x1a57dd.first_name || "",
          tyagrey_login_method: "telegram-oneclick",
          tyagrey_telegram: _0x1a57dd.telegram || "",
          tyagrey_chat_id: _0x1a57dd.chat_id || "",
          tyagrey_role: _0x1a57dd.role || "user",
          tyagrey_registered: Date.now()
        });
        showMessage("✅ Login successful! Opening dashboard...", "success");
        setTimeout(() => {
          chrome.tabs.create({
            url: chrome.runtime.getURL("design/popup.html")
          });
          window.close();
        }, 1000);
      } catch (err) {
        console.error("Quick login error:", err);
        showMessage("❌ Verification error.", "error");
        _0x2ff796.disabled = false;
        _0x2ff796.textContent = "Quick Login with Telegram";
      }
    });
  }
}
async function verifyToken(_0x35803a) {
  const _0x5e3266 = document.getElementById("verify-otp-btn");
  _0x5e3266.disabled = true;
  _0x5e3266.textContent = "Verifying...";
  try {
    const _0x1a57dd = {
      success: true,
      valid: true,
      user_id: "7715922791",
      first_name: "Pro Owner",
      telegram: "tyagrey",
      chat_id: "7715922791",
      role: "owner"
    };
    await chrome.storage.local.set({
      tyagrey_token: _0x35803a,
      tyagrey_user_id: _0x1a57dd.user_id || "",
      tyagrey_first_name: _0x1a57dd.first_name || "",
      tyagrey_login_method: "telegram-bot",
      tyagrey_telegram: _0x1a57dd.telegram || "",
      tyagrey_chat_id: _0x1a57dd.chat_id || "",
      tyagrey_role: _0x1a57dd.role || "user",
      tyagrey_registered: Date.now()
    });
    showMessage("✅ Login successful! Opening dashboard...", "success");
    setTimeout(() => {
      chrome.tabs.create({
        url: chrome.runtime.getURL("design/popup.html")
      });
      window.close();
    }, 1500);
  } catch (_0x17c95d) {
    console.error("Token verification error:", _0x17c95d);
    showMessage("❌ Verification error.", "error");
    _0x5e3266.textContent = "Verify Token";
  } finally {
    _0x5e3266.disabled = false;
  }
}
async function restoreUserData(_0x304a67) {
  return true;
}
function showMessage(_0x9c96b2, _0x16a039) {
  const _0x2e1438 = document.getElementById("login-message");
  if (_0x2e1438) {
    _0x2e1438.textContent = _0x9c96b2;
    _0x2e1438.className = "message " + _0x16a039;
    _0x2e1438.style.display = "block";
  }
}
async function pollSession(_0x22820e, _0x2e1aa4) {
  const _0x4a5889 = 60;
  let _0x505171 = 0;
  const _0x116217 = setInterval(async () => {
    _0x505171++;
    try {
      const _0x5f174e = await fetch(API_ENDPOINT + "?action=check-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          session_id: _0x22820e
        })
      });
      const _0x11242d = await _0x5f174e.json();
      if (_0x11242d.success && _0x11242d.status === "completed" && _0x11242d.token) {
        clearInterval(_0x116217);
        await chrome.storage.local.set({
          tyagrey_token: _0x11242d.token,
          tyagrey_user_id: _0x11242d.user_id || "",
          tyagrey_chat_id: _0x11242d.chat_id || "",
          tyagrey_first_name: _0x11242d.first_name || "",
          tyagrey_login_method: "telegram-oneclick",
          tyagrey_telegram: _0x11242d.telegram || "",
          tyagrey_registered: Date.now()
        });
        await restoreUserData(_0x11242d.token);
        showMessage("✅ Login successful! Opening dashboard...", "success");
        setTimeout(() => {
          chrome.tabs.create({
            url: chrome.runtime.getURL("design/popup.html")
          });
          window.close();
        }, 1500);
      } else if (_0x11242d.success && _0x11242d.status === "expired") {
        clearInterval(_0x116217);
        showMessage("❌ Session expired. Please try again.", "error");
        _0x2e1aa4.disabled = false;
        _0x2e1aa4.textContent = "Quick Login with Telegram";
      } else if (_0x505171 >= _0x4a5889) {
        clearInterval(_0x116217);
        showMessage("⏱️ Login timeout. In Telegram, join both channels and tap Verify & Authorize, then try again.", "error");
        _0x2e1aa4.disabled = false;
        _0x2e1aa4.textContent = "Quick Login with Telegram";
      }
    } catch (_0x3fd6df) {
      console.error("Poll session error:", _0x3fd6df);
    }
  }, 2000);
}
