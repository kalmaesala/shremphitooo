(function () {
  'use strict';

  window.__tyagrey_AUTO_CLICKER_LOADED = true;
  let _0x27df0d = false;
  let _0x4ae63c = 500;
  let _0x14930a = "";
  let _0x2f5c0b = null;
  let _0x3a3463 = false;
  function _0x5c543f() {
    if (_0x14930a) {
      return document.querySelectorAll(_0x14930a);
    }
    const _0x14608c = ["button[type=\"submit\"]", "input[type=\"submit\"]", "[role=\"button\"]", ".btn-primary", ".btn-submit", ".submit", ".pay-button", ".payment-button", ".checkout-button", ".purchase-button", ".complete-order", ".place-order", "[data-testid=\"submit\"]", "[data-testid=\"pay-button\"]"];
    const _0x595819 = [];
    _0x14608c.forEach(function (_0x57b5bb) {
      try {
        var _0x8941c1 = document.querySelectorAll(_0x57b5bb);
        for (var _0x14020a = 0; _0x14020a < _0x8941c1.length; _0x14020a++) {
          var _0x1b1071 = _0x8941c1[_0x14020a].getBoundingClientRect();
          if (_0x1b1071.width > 0 && _0x1b1071.height > 0 && _0x8941c1[_0x14020a].offsetParent !== null) {
            _0x595819.push(_0x8941c1[_0x14020a]);
          }
        }
      } catch (_0x937d32) {}
    });
    return _0x595819;
  }
  function _0x5bb2a8() {
    if (!_0x27df0d || !_0x3a3463) {
      return;
    }
    const _0x40e265 = _0x5c543f();
    _0x40e265.forEach(function (_0x3cfaa2) {
      try {
        const _0x3074f6 = _0x3cfaa2.getBoundingClientRect();
        if (_0x3074f6.width > 0 && _0x3074f6.height > 0) {
          _0x3cfaa2.click();
          ["mousedown", "mouseup", "click"].forEach(function (_0x342c47) {
            const _0x5ca435 = new MouseEvent(_0x342c47, {
              bubbles: true,
              cancelable: true,
              view: window,
              clientX: _0x3074f6.left + _0x3074f6.width / 2,
              clientY: _0x3074f6.top + _0x3074f6.height / 2
            });
            _0x3cfaa2.dispatchEvent(_0x5ca435);
          });
        }
      } catch (_0x1a2e49) {}
    });
  }
  function _0x2e7400() {
    if (_0x3a3463) {
      return;
    }
    _0x3a3463 = true;
    if (_0x2f5c0b) {
      clearInterval(_0x2f5c0b);
    }
    _0x2f5c0b = setInterval(_0x5bb2a8, _0x4ae63c);
    console.log("[TYAgrey] Auto-clicker started, interval:", _0x4ae63c + "ms");
  }
  function _0x35feff() {
    _0x3a3463 = false;
    if (_0x2f5c0b) {
      clearInterval(_0x2f5c0b);
      _0x2f5c0b = null;
    }
    console.log("[TYAgrey] Auto-clicker stopped");
  }
  const _0x40ec4f = new MutationObserver(function () {
    if (_0x27df0d && _0x3a3463) {}
  });
  if (document.body) {
    _0x40ec4f.observe(document.body, {
      childList: true,
      subtree: true
    });
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.body) {
        _0x40ec4f.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    });
  }
  function _0x49a560(_0x581ed2) {
    _0x27df0d = _0x581ed2.enabled === true;
    _0x4ae63c = _0x581ed2.intervalMs || 500;
    _0x14930a = _0x581ed2.selector || "";
    if (_0x27df0d) {
      _0x2e7400();
    } else {
      _0x35feff();
    }
  }
  window.addEventListener("message", function (_0x1f741a) {
    if (_0x1f741a.data && _0x1f741a.data.type === "tyagrey_AUTO_CLICKER_SETTINGS") {
      _0x49a560(_0x1f741a.data);
    }
  });
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener(function (_0x2be0b8, _0x4b1d7e, _0x57a9bb) {
      if (_0x2be0b8 && _0x2be0b8.type === "tyagrey_AUTO_CLICKER_SETTINGS") {
        _0x49a560(_0x2be0b8);
        if (_0x57a9bb) {
          _0x57a9bb({
            success: true
          });
        }
      }
      return true;
    });
  }
  try {
    const _0x672d00 = localStorage.getItem("tyagrey_auto_clicker_settings");
    if (_0x672d00) {
      const _0x316994 = JSON.parse(_0x672d00);
      if (_0x316994.enabled) {
        _0x27df0d = true;
        _0x4ae63c = _0x316994.intervalMs || 500;
        _0x14930a = _0x316994.selector || "";
        _0x2e7400();
      }
    }
  } catch (_0x495655) {}
})();
