(function () {
  'use strict';

  window.__tyagrey_HCAPTCHA_LOADED = true;
  const _0x4a8fe1 = window.location.href.includes("hcaptcha.com") || window.location.href.includes("hcaptcha") || window.location.href.includes("newassets.hcaptcha.com");
  if (!_0x4a8fe1) {
    return;
  }
  const _0x1b9e43 = "#checkbox";
  const _0x3addec = "data-checked";
  let _0x11b89d = false;
  let _0x2414e7 = null;
  function _0x465ca9() {
    const _0x5c4a9a = document.querySelector(_0x1b9e43);
    if (!_0x5c4a9a) {
      return false;
    }
    const _0x4355e2 = _0x5c4a9a.getAttribute(_0x3addec);
    if (_0x4355e2 === "true") {
      if (_0x2414e7) {
        clearInterval(_0x2414e7);
        _0x2414e7 = null;
      }
      return true;
    }
    if (_0x4355e2 !== "true" && !_0x11b89d) {
      try {
        _0x5c4a9a.click();
        _0x11b89d = true;
        setTimeout(() => {
          const _0x35cc67 = _0x5c4a9a.getAttribute(_0x3addec);
          if (_0x35cc67 === "true") {
            if (_0x2414e7) {
              clearInterval(_0x2414e7);
              _0x2414e7 = null;
            }
          }
        }, 500);
        return true;
      } catch (_0x584b2d) {
        return false;
      }
    }
    return false;
  }
  setTimeout(_0x465ca9, 100);
  setTimeout(_0x465ca9, 500);
  setTimeout(_0x465ca9, 1000);
  _0x2414e7 = setInterval(function () {
    if (!_0x11b89d) {
      _0x465ca9();
    }
  }, 500);
  setTimeout(() => {
    if (_0x2414e7) {
      clearInterval(_0x2414e7);
      _0x2414e7 = null;
    }
  }, 30000);
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener(function (_0x56798c, _0x3167cb, _0x3f0e8f) {
      if (_0x56798c && _0x56798c.type === "tyagrey_HCAPTCHA_SETTINGS") {
        if (_0x56798c.enabled === false) {
          if (_0x2414e7) {
            clearInterval(_0x2414e7);
            _0x2414e7 = null;
          }
        } else {
          _0x11b89d = false;
          _0x465ca9();
          if (!_0x2414e7) {
            _0x2414e7 = setInterval(function () {
              if (!_0x11b89d) {
                _0x465ca9();
              }
            }, 500);
          }
        }
        if (_0x3f0e8f) {
          _0x3f0e8f({
            success: true
          });
        }
      }
      return true;
    });
  }
})();
