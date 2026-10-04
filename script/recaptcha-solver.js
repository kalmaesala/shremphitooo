(function () {
  'use strict';

  window.__tyagrey_RECAPTCHA_LOADED = true;
  const _0x3c641a = window.location.href.includes("google.com/recaptcha") || window.location.href.includes("recaptcha.net") || window.location.href.includes("gstatic.com/recaptcha");
  if (!_0x3c641a) {
    return;
  }
  let _0x30b214 = true;
  let _0x529c7b = true;
  let _0x3c5a5d = 800;
  let _0x359a4c = null;
  let _0x16261e = false;
  function _0x5a23fc() {
    if (typeof grecaptcha !== "undefined" && grecaptcha.getResponse) {
      try {
        const _0x3c95fe = document.querySelectorAll(".g-recaptcha, [data-sitekey]");
        return _0x3c95fe;
      } catch (_0x472918) {}
    }
    return [];
  }
  function _0x145e96() {
    if (!_0x30b214 || !_0x529c7b) {
      return;
    }
    try {
      if (typeof grecaptcha !== "undefined" && grecaptcha.execute) {
        const _0x4d2736 = document.querySelectorAll("[data-callback]");
        _0x4d2736.forEach(function (_0x20d34d) {
          const _0xcb766b = _0x20d34d.getAttribute("data-sitekey");
          if (_0xcb766b && !_0x16261e) {
            _0x16261e = true;
            grecaptcha.execute(_0xcb766b);
          }
        });
      }
    } catch (_0x382537) {}
  }
  function _0xa7d8a4() {
    if (!_0x30b214) {
      return false;
    }
    const _0x16fbf0 = document.querySelectorAll(".recaptcha-checkbox-border, .recaptcha-checkbox-checkmark, .rc-anchor-checkbox");
    if (_0x16fbf0.length > 0 && !_0x16261e) {
      try {
        _0x16fbf0[0].click();
        _0x16261e = true;
        return true;
      } catch (_0x395a1e) {}
    }
    const _0x4f5e4b = document.querySelectorAll(".rc-anchor-content, .rc-anchor");
    if (_0x4f5e4b.length > 0 && !_0x16261e) {
      try {
        _0x4f5e4b[0].click();
        _0x16261e = true;
        return true;
      } catch (_0x51540a) {}
    }
    return false;
  }
  function _0x147f26() {
    try {
      const _0x2044e9 = grecaptcha.getResponse();
      return _0x2044e9 && _0x2044e9.length > 0;
    } catch (_0x656bb9) {
      const _0x2f174f = document.querySelectorAll(".recaptcha-checkbox-checked, .rc-anchor-checkbox-checked");
      return _0x2f174f.length > 0;
    }
  }
  function _0x2d125d() {
    if (!_0x30b214 || !_0x529c7b) {
      return;
    }
    setTimeout(function () {
      if (!_0x147f26()) {
        _0xa7d8a4();
      }
    }, _0x3c5a5d);
    setTimeout(function () {
      if (!_0x147f26()) {
        _0xa7d8a4();
      }
    }, _0x3c5a5d + 500);
    setTimeout(function () {
      if (!_0x147f26()) {
        _0x145e96();
      }
    }, _0x3c5a5d + 1000);
    _0x359a4c = setInterval(function () {
      if (_0x147f26()) {
        clearInterval(_0x359a4c);
        _0x359a4c = null;
        return;
      }
      if (!_0x16261e) {
        _0xa7d8a4();
      }
    }, 800);
    setTimeout(function () {
      if (_0x359a4c) {
        clearInterval(_0x359a4c);
        _0x359a4c = null;
      }
    }, 45000);
  }
  function _0x479553(_0x3cb440) {
    _0x30b214 = _0x3cb440.enabled !== false;
    _0x529c7b = _0x3cb440.autoSolve !== false;
    _0x3c5a5d = _0x3cb440.clickDelay || 800;
    if (_0x30b214 && _0x529c7b) {
      _0x16261e = false;
      _0x2d125d();
    }
  }
  window.addEventListener("message", function (_0x37a0eb) {
    if (_0x37a0eb.data && _0x37a0eb.data.type === "tyagrey_RECAPTCHA_SETTINGS") {
      _0x479553(_0x37a0eb.data);
    }
  });
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener(function (_0x1a2863, _0x24a5eb, _0x28f32f) {
      if (_0x1a2863 && _0x1a2863.type === "tyagrey_RECAPTCHA_SETTINGS") {
        _0x479553(_0x1a2863);
        if (_0x28f32f) {
          _0x28f32f({
            success: true
          });
        }
      }
      return true;
    });
  }
  try {
    const _0x334130 = localStorage.getItem("tyagrey_recaptcha_settings");
    if (_0x334130) {
      const _0x1f47f3 = JSON.parse(_0x334130);
      if (_0x1f47f3.enabled && _0x1f47f3.autoSolve) {
        _0x30b214 = true;
        _0x529c7b = true;
        _0x2d125d();
      }
    }
  } catch (_0x45a850) {}
})();
