(function () {
  'use strict';

  window.__tyagrey_ANTI_DETECT_LOADED = true;
  let _0x47a52b = false;
  let _0x145588 = true;
  let _0x1bced2 = true;
  let _0x32e2e0 = true;
  let _0x52165e = true;
  let _0x52ff40 = true;
  let _0x29b091 = true;
  let _0x53f412 = true;
  let _0x9c1fbe = true;
  let _0x2b9666 = true;
  const _0x369ca9 = Math.random().toString(36).substring(2) + Date.now().toString(36);
  function _0x193f40(_0xc7e9ba) {
    let _0x5087bc = 0;
    for (let _0x3f70f7 = 0; _0x3f70f7 < _0xc7e9ba.length; _0x3f70f7++) {
      _0x5087bc = (_0x5087bc << 5) - _0x5087bc + _0xc7e9ba.charCodeAt(_0x3f70f7);
    }
    _0x5087bc = Math.abs(_0x5087bc);
    return function () {
      _0x5087bc = (_0x5087bc * 16807 + 0) % 2147483647;
      return (_0x5087bc - 1) / 2147483646;
    };
  }
  const _0x679400 = _0x193f40(_0x369ca9);
  function _0x4b8c11(_0x260529, _0x136159) {
    return Math.floor(_0x679400() * (_0x136159 - _0x260529 + 1)) + _0x260529;
  }
  function _0xa2a807(_0x2b6313) {
    return _0x2b6313[Math.floor(_0x679400() * _0x2b6313.length)];
  }
  const _0x5e79b1 = ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Madrid", "Europe/Rome", "Asia/Tokyo", "Asia/Shanghai", "Asia/Singapore", "Asia/Dubai", "Asia/Hong_Kong", "Australia/Sydney", "Pacific/Auckland", "America/Toronto", "America/Vancouver"];
  const _0x45dad7 = ["en-US", "en-GB", "en-CA", "fr-FR", "de-DE", "es-ES", "it-IT", "pt-BR", "ja-JP", "zh-CN", "zh-TW", "ko-KR", "nl-NL", "sv-SE", "pl-PL", "tr-TR", "ar-SA", "ru-RU"];
  const _0x49bdde = _0xa2a807(_0x5e79b1);
  const _0x3f8595 = _0xa2a807(_0x45dad7);
  const _0x1f327e = [{
    vendor: "Google Inc. (NVIDIA)",
    renderer: "ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 Direct3D11 vs_5_0 ps_5_0, D3D11)"
  }, {
    vendor: "Google Inc. (NVIDIA)",
    renderer: "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)"
  }, {
    vendor: "Google Inc. (Intel)",
    renderer: "ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)"
  }, {
    vendor: "Google Inc. (AMD)",
    renderer: "ANGLE (AMD, AMD Radeon RX 580 Direct3D11 vs_5_0 ps_5_0, D3D11)"
  }, {
    vendor: "Apple Inc.",
    renderer: "Apple M1"
  }, {
    vendor: "Google Inc. (NVIDIA)",
    renderer: "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11)"
  }];
  const _0x330a70 = _0xa2a807(_0x1f327e);
  const _0x355348 = {
    charging: _0x679400() > 0.5,
    level: parseFloat((0.2 + _0x679400() * 0.75).toFixed(2)),
    chargingTime: _0x679400() > 0.7 ? Infinity : _0x4b8c11(600, 7200),
    dischargingTime: _0x4b8c11(3600, 18000)
  };
  const _0xa4f4b6 = [4, 8, 16, 32, 64];
  const _0x19ffa8 = _0xa2a807(_0xa4f4b6);
  const _0x5acaa2 = [{
    name: "Chrome PDF Plugin",
    filename: "internal-pdf-viewer",
    description: "Portable Document Format"
  }, {
    name: "Native Client",
    filename: "internal-nacl-plugin",
    description: ""
  }];
  function _0x21c6c5() {
    if (_0x32e2e0) {
      const _0x1b32b9 = Date;
      const _0x28bd71 = Date.prototype.toLocaleString;
      const _0x2b8df0 = Date.prototype.toLocaleDateString;
      const _0x9ed23e = Date.prototype.toLocaleTimeString;
      Date.prototype.toLocaleString = function (_0x1eb42d, _0x154786) {
        return _0x28bd71.call(this, _0x3f8595, _0x154786);
      };
      Date.prototype.toLocaleDateString = function (_0x3dff01, _0x1a79ec) {
        return _0x2b8df0.call(this, _0x3f8595, _0x1a79ec);
      };
      Date.prototype.toLocaleTimeString = function (_0x1e53f2, _0x36857e) {
        return _0x9ed23e.call(this, _0x3f8595, _0x36857e);
      };
      try {
        Object.defineProperty(Intl.DateTimeFormat.prototype, "resolvedOptions", {
          value: function () {
            const _0x27d9d7 = Intl.DateTimeFormat.prototype.resolvedOptions.call(this);
            _0x27d9d7.timeZone = _0x49bdde;
            return _0x27d9d7;
          }
        });
      } catch (_0x579b0b) {}
      try {
        Object.defineProperty(Intl.DateTimeFormat, "supportedLocalesOf", {
          value: function () {
            return [_0x3f8595];
          }
        });
      } catch (_0x5a7ef9) {}
    }
    if (_0x52165e) {
      try {
        Object.defineProperty(navigator, "language", {
          get: function () {
            return _0x3f8595;
          }
        });
        Object.defineProperty(navigator, "languages", {
          get: function () {
            return [_0x3f8595, "en-US"];
          }
        });
      } catch (_0x39c984) {}
    }
    if (_0x145588) {
      const _0x4f9cfd = WebGLRenderingContext.prototype.getParameter;
      const _0x1b1b40 = WebGL2RenderingContext.prototype.getParameter;
      WebGLRenderingContext.prototype.getParameter = function (_0x45e70c) {
        if (_0x45e70c === 37445) {
          return _0x330a70.vendor;
        }
        if (_0x45e70c === 37446) {
          return _0x330a70.renderer;
        }
        return _0x4f9cfd.call(this, _0x45e70c);
      };
      WebGL2RenderingContext.prototype.getParameter = function (_0x1fc86c) {
        if (_0x1fc86c === 37445) {
          return _0x330a70.vendor;
        }
        if (_0x1fc86c === 37446) {
          return _0x330a70.renderer;
        }
        return _0x1b1b40.call(this, _0x1fc86c);
      };
      const _0x296657 = WebGLRenderingContext.prototype.getShaderPrecisionFormat;
      if (_0x296657) {
        WebGLRenderingContext.prototype.getShaderPrecisionFormat = function () {
          return {
            precision: 23,
            rangeMin: 127,
            rangeMax: 127
          };
        };
      }
    }
    if (_0x1bced2) {
      try {
        const _0x48f7e3 = window.AudioContext || window.webkitAudioContext;
        if (_0x48f7e3) {
          const _0x49aa03 = _0x48f7e3.prototype.createAnalyser;
          _0x48f7e3.prototype.createAnalyser = function () {
            const _0x94233a = _0x49aa03.call(this);
            const _0x400857 = _0x94233a.getFloatFrequencyData;
            _0x94233a.getFloatFrequencyData = function (_0x5bf944) {
              _0x400857.call(this, _0x5bf944);
              for (let _0x209e83 = 0; _0x209e83 < _0x5bf944.length; _0x209e83++) {
                _0x5bf944[_0x209e83] += (_0x679400() - 0.5) * 0.001;
              }
            };
            return _0x94233a;
          };
          Object.defineProperty(_0x48f7e3.prototype, "sampleRate", {
            get: function () {
              const _0x6944ea = [44100, 48000, 96000];
              return _0xa2a807(_0x6944ea);
            }
          });
          Object.defineProperty(_0x48f7e3.prototype, "baseLatency", {
            get: function () {
              return parseFloat((0.005 + _0x679400() * 0.01).toFixed(4));
            }
          });
        }
      } catch (_0x36755c) {}
    }
    if (_0x52ff40) {
      const _0xef5862 = CanvasRenderingContext2D.prototype.getImageData;
      CanvasRenderingContext2D.prototype.getImageData = function () {
        const _0x5d9307 = _0xef5862.apply(this, arguments);
        const _0x304bb7 = _0x5d9307.data;
        for (let _0x17449e = 0; _0x17449e < _0x304bb7.length; _0x17449e += 4) {
          _0x304bb7[_0x17449e] = Math.max(0, Math.min(255, _0x304bb7[_0x17449e] + _0x4b8c11(-2, 2)));
          _0x304bb7[_0x17449e + 1] = Math.max(0, Math.min(255, _0x304bb7[_0x17449e + 1] + _0x4b8c11(-2, 2)));
          _0x304bb7[_0x17449e + 2] = Math.max(0, Math.min(255, _0x304bb7[_0x17449e + 2] + _0x4b8c11(-2, 2)));
        }
        return _0x5d9307;
      };
      const _0x2cb96d = HTMLCanvasElement.prototype.toDataURL;
      const _0x5d2e44 = HTMLCanvasElement.prototype.toBlob;
    }
    if (_0x9c1fbe) {
      try {
        Object.defineProperty(navigator, "getBattery", {
          value: function () {
            return Promise.resolve(_0x355348);
          }
        });
      } catch (_0x38fc6d) {}
    }
    if (_0x53f412) {
      try {
        Object.defineProperty(navigator, "deviceMemory", {
          get: function () {
            return _0x19ffa8;
          }
        });
        Object.defineProperty(navigator, "hardwareConcurrency", {
          get: function () {
            return _0x4b8c11(2, 16);
          }
        });
      } catch (_0x19e477) {}
    }
    if (_0x2b9666) {
      try {
        Object.defineProperty(navigator, "plugins", {
          get: function () {
            const _0x7f86bc = [];
            _0x5acaa2.forEach(function (_0x538d7f) {
              _0x7f86bc.push(_0x538d7f);
            });
            _0x7f86bc.length = _0x5acaa2.length;
            _0x7f86bc.item = function (_0x584024) {
              return _0x5acaa2[_0x584024];
            };
            _0x7f86bc.namedItem = function (_0x23e200) {
              for (let _0x3f8e79 = 0; _0x3f8e79 < _0x5acaa2.length; _0x3f8e79++) {
                if (_0x5acaa2[_0x3f8e79].name === _0x23e200) {
                  return _0x5acaa2[_0x3f8e79];
                }
              }
              return null;
            };
            return _0x7f86bc;
          }
        });
      } catch (_0x1a4cdf) {}
    }
    if (_0x679400() > 0.5) {
      try {
        const _0x4db7b5 = [1366, 1440, 1536, 1680, 1920, 2560];
        const _0x342194 = [768, 900, 864, 1050, 1080, 1440];
        const _0x3d51ae = _0x4b8c11(0, _0x4db7b5.length - 1);
        Object.defineProperty(screen, "width", {
          get: function () {
            return _0x4db7b5[_0x3d51ae];
          }
        });
        Object.defineProperty(screen, "height", {
          get: function () {
            return _0x342194[_0x3d51ae];
          }
        });
        Object.defineProperty(screen, "availWidth", {
          get: function () {
            return _0x4db7b5[_0x3d51ae];
          }
        });
        Object.defineProperty(screen, "availHeight", {
          get: function () {
            return _0x342194[_0x3d51ae] - 40;
          }
        });
        Object.defineProperty(screen, "colorDepth", {
          get: function () {
            return 24;
          }
        });
        Object.defineProperty(screen, "pixelDepth", {
          get: function () {
            return 24;
          }
        });
      } catch (_0x4148c5) {}
    }
    try {
      Object.defineProperty(history, "length", {
        get: function () {
          return _0x4b8c11(2, 15);
        }
      });
    } catch (_0x107f51) {}
  }
  function _0x329d10(_0x600c12) {
    _0x47a52b = _0x600c12.enabled;
    _0x145588 = _0x600c12.webGL !== false;
    _0x1bced2 = _0x600c12.audio !== false;
    _0x32e2e0 = _0x600c12.timezone !== false;
    _0x52165e = _0x600c12.locale !== false;
    _0x52ff40 = _0x600c12.canvas !== false;
    _0x29b091 = _0x600c12.fonts !== false;
    _0x53f412 = _0x600c12.memory !== false;
    _0x9c1fbe = _0x600c12.battery !== false;
    _0x2b9666 = _0x600c12.plugins !== false;
    if (_0x47a52b) {
      _0x21c6c5();
      console.log("[TYAgrey] Anti-Detect applied. Timezone:", _0x49bdde, "Locale:", _0x3f8595, "GPU:", _0x330a70.renderer);
    }
  }
  window.addEventListener("message", function (_0x2a6080) {
    if (_0x2a6080.data && _0x2a6080.data.type === "tyagrey_ANTI_DETECT_SETTINGS") {
      _0x329d10(_0x2a6080.data);
    }
  });
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener(function (_0x26fb8c, _0x351fb9, _0x45283c) {
      if (_0x26fb8c && _0x26fb8c.type === "tyagrey_ANTI_DETECT_SETTINGS") {
        _0x329d10(_0x26fb8c);
        if (_0x45283c) {
          _0x45283c({
            success: true
          });
        }
      }
      return true;
    });
  }
  try {
    const _0x56b859 = localStorage.getItem("tyagrey_anti_detect_settings");
    if (_0x56b859) {
      const _0x314b7c = JSON.parse(_0x56b859);
      if (_0x314b7c.enabled) {
        _0x47a52b = true;
        _0x21c6c5();
        console.log("[TYAgrey] Anti-Detect auto-applied from saved settings.");
      }
    }
  } catch (_0x3108e4) {}
})();
