(function () {
  'use strict';

  window.__tyagrey_PROXY_LOADED = true;
  let _0x4eb981 = false;
  let _0x2232c4 = "";
  let _0x48304e = [];
  let _0x38b756 = false;
  let _0x41eab1 = {
    ip: "",
    response_time_ms: 0,
    country_name: "",
    country_code: "",
    ip_type: ""
  };
  let _0x204d0c = false;
  function _0x4dd2b1(_0x4988db) {
    return new Promise((_0x500efc, _0x2a7a77) => {
      const _0x5bcbac = Math.random().toString(36).substring(2);
      const _0x11ca71 = _0x2cb6bb => {
        if (_0x2cb6bb.data && _0x2cb6bb.data.type === "tyagrey_FROM_BACKGROUND" && _0x2cb6bb.data.requestId === _0x5bcbac) {
          window.removeEventListener("message", _0x11ca71);
          _0x500efc(_0x2cb6bb.data.response);
        }
      };
      window.addEventListener("message", _0x11ca71);
      window.postMessage({
        type: "tyagrey_TO_BACKGROUND",
        requestId: _0x5bcbac,
        payload: _0x4988db
      }, "*");
      setTimeout(() => {
        window.removeEventListener("message", _0x11ca71);
        _0x2a7a77(new Error("Background request timeout"));
      }, 60000);
    });
  }
  async function _0x53a270(_0x293aff) {
    if (!_0x293aff || !_0x293aff.trim()) {
      return {
        success: false,
        error: "Proxy string is empty"
      };
    }
    const _0x5e852a = _0x293aff.trim().split(":");
    if (_0x5e852a.length < 4) {
      if (_0x293aff.includes("@")) {
        const _0x135dd7 = _0x293aff.lastIndexOf("@");
        const _0x4b1811 = _0x293aff.substring(0, _0x135dd7);
        const _0xbf48bd = _0x293aff.substring(_0x135dd7 + 1);
        const _0x5cd27b = _0x4b1811.split(":");
        const _0x35f8b6 = _0xbf48bd.split(":");
        if (_0x5cd27b.length >= 2 && _0x35f8b6.length >= 2) {
          _0x293aff = _0x35f8b6[0] + ":" + _0x35f8b6[1] + ":" + _0x5cd27b[0] + ":" + _0x5cd27b.slice(1).join(":");
        } else {
          return {
            success: false,
            error: "Invalid proxy format. Use: host:port OR host:port:user:pass OR user:pass@host:port"
          };
        }
      } else {
        return {
          success: false,
          error: "Invalid proxy format. Use: host:port OR host:port:user:pass OR user:pass@host:port"
        };
      }
    }
    try {
      const _0xa95916 = await _0x4a6048(_0x293aff);
      if (_0xa95916 && _0xa95916.success) {
        return _0xa95916;
      }
    } catch (_0x13bf54) {}
    try {
      return await _0x4dd2b1({
        type: "CHECK_PROXY_LIVE",
        proxy: _0x293aff
      });
    } catch (_0x7f92cc) {
      return {
        success: false,
        error: "Background proxy check failed: " + (_0x7f92cc && _0x7f92cc.message ? _0x7f92cc.message : "timeout"),
        status: "fail"
      };
    }
  }
  async function _0x4a6048(_0x555901) {
    try {
      const _0x5ecc52 = "https://tyagry.cloud/proxy_check.php";
      const _0x1f7f8d = new AbortController();
      const _0x276dee = setTimeout(() => _0x1f7f8d.abort(), 30000);
      const _0x20cef9 = await fetch(_0x5ecc52, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          proxy: _0x555901
        }),
        signal: _0x1f7f8d.signal
      });
      clearTimeout(_0x276dee);
      if (!_0x20cef9.ok) {
        return null;
      }
      const _0x36c3e0 = await _0x20cef9.json();
      if (_0x36c3e0.success) {
        return {
          success: true,
          proxy_ip: _0x36c3e0.proxy_ip || "",
          response_time_ms: _0x36c3e0.response_time_ms || 0,
          country_name: _0x36c3e0.country_name || "",
          country_code: _0x36c3e0.country_code || "",
          ip_type: _0x36c3e0.ip_type || "",
          types: _0x36c3e0.types || ["HTTP"],
          proxy_host: _0x36c3e0.proxy_host || "",
          proxy_port: _0x36c3e0.proxy_port || ""
        };
      } else {
        return {
          success: false,
          error: _0x36c3e0.error || "Proxy check failed"
        };
      }
    } catch (_0x43b908) {
      return null;
    }
  }
  async function _0x1ac68a(_0xf26eec, _0x145417) {
    let _0x5e1dbf = [];
    for (const _0xca9811 of _0xf26eec) {
      if (!_0xca9811 || !_0xca9811.trim()) {
        continue;
      }
      const _0x5b8d9f = await _0x53a270(_0xca9811);
      if (_0x5b8d9f && _0x5b8d9f.success) {
        _0x5e1dbf.push({
          string: _0xca9811.trim(),
          info: {
            ip: _0x5b8d9f.proxy_ip || "",
            response_time_ms: _0x5b8d9f.response_time_ms || 0,
            country_name: _0x5b8d9f.country_name || "",
            country_code: _0x5b8d9f.country_code || "",
            ip_type: _0x5b8d9f.ip_type || ""
          }
        });
      }
      if (_0x145417) {
        _0x145417(_0xca9811.trim(), _0x5b8d9f && _0x5b8d9f.success);
      }
    }
    return _0x5e1dbf;
  }
  async function _0x441912(_0x162647) {
    if (!_0x38b756 || !_0x48304e || _0x48304e.length <= 1) {
      return false;
    }
    let _0x4b3acc = _0x48304e.findIndex(_0x22cc48 => _0x22cc48.string === _0x2232c4);
    let _0x3cdca1 = (_0x4b3acc + 1) % _0x48304e.length;
    let _0x223e82 = _0x48304e[_0x3cdca1];
    window.postMessage({
      type: "CLEAR_PROXY"
    }, "*");
    _0x2232c4 = _0x223e82.string;
    _0x41eab1 = _0x223e82.info;
    _0x4eb981 = true;
    _0x12ed0d();
    window.postMessage({
      type: "APPLY_PROXY",
      proxy: _0x2232c4
    }, "*");
    if (_0x162647) {
      _0x162647(_0x41eab1.ip, true);
    }
    return true;
  }
  function _0x190556(_0x231bb7) {
    if (!_0x231bb7) {
      return null;
    }
    _0x231bb7 = _0x231bb7.trim();
    const _0x516a11 = {
      user: null,
      password: null,
      host: null,
      port: null,
      raw: _0x231bb7
    };
    try {
      if (_0x231bb7.includes("@")) {
        const _0xaf341a = _0x231bb7.lastIndexOf("@");
        const _0x4c2f55 = _0x231bb7.substring(0, _0xaf341a);
        const _0x2a871e = _0x231bb7.substring(_0xaf341a + 1);
        const _0x25d00c = _0x4c2f55.indexOf(":");
        if (_0x25d00c > 0) {
          _0x516a11.user = _0x4c2f55.substring(0, _0x25d00c);
          _0x516a11.password = _0x4c2f55.substring(_0x25d00c + 1);
        }
        const _0xdaa1a3 = _0x2a871e.lastIndexOf(":");
        if (_0xdaa1a3 > 0) {
          _0x516a11.host = _0x2a871e.substring(0, _0xdaa1a3);
          _0x516a11.port = parseInt(_0x2a871e.substring(_0xdaa1a3 + 1));
        }
      } else {
        const _0x36666f = _0x231bb7.split(":");
        if (_0x36666f.length >= 4) {
          const _0x4492a8 = _0x36666f[0].includes(".") || /^\d+$/.test(_0x36666f[0]);
          if (_0x4492a8) {
            _0x516a11.host = _0x36666f[0];
            _0x516a11.port = parseInt(_0x36666f[1]);
            _0x516a11.user = _0x36666f[2];
            _0x516a11.password = _0x36666f.slice(3).join(":");
          } else {
            _0x516a11.user = _0x36666f[0];
            _0x516a11.password = _0x36666f.slice(1, -2).join(":");
            _0x516a11.host = _0x36666f[_0x36666f.length - 2];
            _0x516a11.port = parseInt(_0x36666f[_0x36666f.length - 1]);
          }
        }
      }
    } catch (_0x5b0f5e) {
      return null;
    }
    if (!_0x516a11.host || !_0x516a11.port || isNaN(_0x516a11.port)) {
      return null;
    }
    return _0x516a11;
  }
  function _0x190835(_0x4ea21a) {
    if (!_0x4ea21a) {
      return "Not set";
    }
    const _0x34d6fe = _0x190556(_0x4ea21a);
    if (!_0x34d6fe) {
      return "Invalid";
    }
    let _0x3b91b0 = _0x34d6fe.host + ":" + _0x34d6fe.port;
    if (_0x34d6fe.user) {
      _0x3b91b0 = _0x34d6fe.user.substring(0, 3) + "***@" + _0x3b91b0;
    }
    return _0x3b91b0;
  }
  var _0x26a38d = window.tyagreyKeys || {};
  function _0xc8b6ba() {
    return new Promise(_0x2c9c97 => {
      chrome.storage.local.get([_0x26a38d.PROXY_ENABLED, _0x26a38d.PROXY_STRING, _0x26a38d.PROXY_ROTATE, _0x26a38d.PROXY_LIST, _0x26a38d.PROXY_INFO], _0x112393 => {
        if (_0x112393 && Object.keys(_0x112393).length > 0) {
          _0x4eb981 = _0x112393[_0x26a38d.PROXY_ENABLED] === true || _0x112393[_0x26a38d.PROXY_ENABLED] === "true";
          _0x2232c4 = _0x112393[_0x26a38d.PROXY_STRING] || localStorage.getItem(_0x26a38d.PROXY_STRING) || "";
          _0x38b756 = _0x112393[_0x26a38d.PROXY_ROTATE] === true || _0x112393[_0x26a38d.PROXY_ROTATE] === "true";
          const _0x1e032b = _0x112393[_0x26a38d.PROXY_LIST] || localStorage.getItem(_0x26a38d.PROXY_LIST);
          if (_0x1e032b) {
            try {
              _0x48304e = typeof _0x1e032b === "string" ? JSON.parse(_0x1e032b) : _0x1e032b;
            } catch (_0x336aaa) {
              _0x48304e = Array.isArray(_0x1e032b) ? _0x1e032b : [];
            }
          } else {
            _0x48304e = [];
          }
          const _0x1dbc1c = _0x112393[_0x26a38d.PROXY_INFO] || localStorage.getItem(_0x26a38d.PROXY_INFO);
          if (_0x1dbc1c) {
            try {
              _0x41eab1 = typeof _0x1dbc1c === "string" ? JSON.parse(_0x1dbc1c) : _0x1dbc1c;
            } catch (_0x1da341) {
              _0x41eab1 = {
                ip: "",
                response_time_ms: 0,
                country_name: "",
                country_code: "",
                ip_type: ""
              };
            }
          } else {
            _0x41eab1 = {
              ip: "",
              response_time_ms: 0,
              country_name: "",
              country_code: "",
              ip_type: ""
            };
          }
        } else {
          _0x4eb981 = localStorage.getItem(_0x26a38d.PROXY_ENABLED) === "true";
          _0x2232c4 = localStorage.getItem(_0x26a38d.PROXY_STRING) || "";
          _0x38b756 = localStorage.getItem(_0x26a38d.PROXY_ROTATE) === "true";
          const _0x176f26 = localStorage.getItem(_0x26a38d.PROXY_LIST);
          if (_0x176f26) {
            try {
              _0x48304e = JSON.parse(_0x176f26);
            } catch (_0x555c4c) {
              _0x48304e = [];
            }
          } else {
            _0x48304e = [];
          }
          const _0x388b42 = localStorage.getItem(_0x26a38d.PROXY_INFO);
          if (_0x388b42) {
            try {
              _0x41eab1 = JSON.parse(_0x388b42);
            } catch (_0x521d79) {
              _0x41eab1 = {
                ip: "",
                response_time_ms: 0,
                country_name: "",
                country_code: "",
                ip_type: ""
              };
            }
          } else {
            _0x41eab1 = {
              ip: "",
              response_time_ms: 0,
              country_name: "",
              country_code: "",
              ip_type: ""
            };
          }
        }
        localStorage.setItem(_0x26a38d.PROXY_ENABLED, _0x4eb981 ? "true" : "false");
        localStorage.setItem(_0x26a38d.PROXY_STRING, _0x2232c4);
        localStorage.setItem(_0x26a38d.PROXY_ROTATE, _0x38b756 ? "true" : "false");
        localStorage.setItem(_0x26a38d.PROXY_LIST, JSON.stringify(_0x48304e));
        localStorage.setItem(_0x26a38d.PROXY_INFO, JSON.stringify(_0x41eab1));
        _0x2c9c97();
      });
    });
  }
  function _0x12ed0d() {
    localStorage.setItem(_0x26a38d.PROXY_ENABLED, _0x4eb981 ? "true" : "false");
    localStorage.setItem(_0x26a38d.PROXY_STRING, _0x2232c4);
    localStorage.setItem(_0x26a38d.PROXY_INFO, JSON.stringify(_0x41eab1));
    localStorage.setItem(_0x26a38d.PROXY_ROTATE, _0x38b756 ? "true" : "false");
    localStorage.setItem(_0x26a38d.PROXY_LIST, JSON.stringify(_0x48304e));
    var _0x5a94cc = {
      [_0x26a38d.PROXY_ENABLED]: _0x4eb981,
      [_0x26a38d.PROXY_STRING]: _0x2232c4,
      [_0x26a38d.PROXY_INFO]: _0x41eab1,
      [_0x26a38d.PROXY_ROTATE]: _0x38b756
    };
    _0x5a94cc[_0x26a38d.PROXY_LIST] = JSON.stringify(_0x48304e);
    window.postMessage({
      type: "tyagrey_STORAGE_REQUEST",
      requestId: "proxy_" + Date.now(),
      action: "SET",
      data: _0x5a94cc
    }, "*");
  }
  function _0x27e64b(_0x8d4b94, _0x1d9ad1, _0x2bc4cf, _0x73a0d1) {
    const _0x333a93 = _0x2232c4;
    _0x2232c4 = "";
    _0x4eb981 = false;
    _0x41eab1 = {
      ip: "",
      response_time_ms: 0,
      country_name: "",
      country_code: "",
      ip_type: ""
    };
    _0x12ed0d();
    window.postMessage({
      type: "CLEAR_PROXY"
    }, "*");
    const _0x1dcefe = document.getElementById("proxyViewBtn");
    if (_0x1dcefe) {
      _0x1dcefe.textContent = "Set";
    }
    if (_0x2bc4cf) {
      _0x2bc4cf("", false);
    }
    if (_0x73a0d1) {
      _0x73a0d1();
    }
    const _0x523ddb = _0x190835(_0x333a93);
    if (_0x1d9ad1) {
      _0x1d9ad1("🗑️ Saved proxy removed\n" + _0x523ddb + "\nReason: " + _0x8d4b94, "error");
    }
  }
  function _0x30719c(_0x1f46a3, _0x43eceb, _0x175ac7) {
    _0x2232c4 = "";
    _0x4eb981 = false;
    _0x41eab1 = {
      ip: "",
      response_time_ms: 0,
      country_name: "",
      country_code: "",
      ip_type: ""
    };
    _0x12ed0d();
    window.postMessage({
      type: "CLEAR_PROXY"
    }, "*");
    const _0x13f819 = document.getElementById("proxyViewBtn");
    if (_0x13f819) {
      _0x13f819.textContent = "Set";
    }
    if (_0x43eceb) {
      _0x43eceb("", false);
    }
    if (_0x175ac7) {
      _0x175ac7();
    }
  }
  async function _0x43ee36(_0x1772a9, _0x5b5462) {
    if (_0x204d0c) {
      return;
    }
    _0x204d0c = true;
    window.postMessage({
      type: "CLEAR_PROXY"
    }, "*");
    await _0xc8b6ba();
    if (!_0x2232c4 || !_0x4eb981) {
      if (_0x1772a9) {
        _0x1772a9("", false);
      }
      if (_0x5b5462) {
        _0x5b5462();
      }
      return;
    }
    const _0x446c00 = document.getElementById("ipBarProxyStatus");
    if (_0x446c00) {
      _0x446c00.textContent = "• Checking...";
      _0x446c00.className = "ip-bar-value status-checking";
    }
    try {
      const _0x5c5be4 = await _0x53a270(_0x2232c4);
      if (_0x5c5be4 && _0x5c5be4.success === true) {
        _0x41eab1 = {
          ip: _0x5c5be4.proxy_ip || "",
          response_time_ms: _0x5c5be4.response_time_ms || 0,
          country_name: _0x5c5be4.country_name || "",
          country_code: _0x5c5be4.country_code || "",
          ip_type: _0x5c5be4.ip_type || ""
        };
        _0x12ed0d();
        window.postMessage({
          type: "APPLY_PROXY",
          proxy: _0x2232c4
        }, "*");
        const _0x1840e3 = await new Promise(_0x3014a1 => {
          const _0x593154 = _0xe4ed39 => {
            if (_0xe4ed39.data && _0xe4ed39.data.type === "PROXY_RESULT" && _0xe4ed39.data.action === "apply") {
              window.removeEventListener("message", _0x593154);
              _0x3014a1(_0xe4ed39.data);
            }
          };
          window.addEventListener("message", _0x593154);
          setTimeout(() => {
            window.removeEventListener("message", _0x593154);
            _0x3014a1({
              success: true
            });
          }, 10000);
        });
        const _0x5ec690 = document.getElementById("proxyViewBtn");
        if (_0x5ec690) {
          _0x5ec690.textContent = _0x2232c4 ? "View" : "Set";
        }
        if (_0x1772a9) {
          _0x1772a9(_0x5c5be4.proxy_ip, true);
        }
      } else {
        window.postMessage({
          type: "CLEAR_PROXY"
        }, "*");
        _0x30719c(_0x5c5be4?.error || "Proxy connection failed", _0x1772a9, _0x5b5462);
      }
    } catch (_0x5011b9) {
      window.postMessage({
        type: "CLEAR_PROXY"
      }, "*");
      _0x30719c(_0x5011b9.message || "Proxy verification error", _0x1772a9, _0x5b5462);
    }
  }
  _0xc8b6ba();
  window.tyagreyProxy = {
    get enabled() {
      return _0x4eb981;
    },
    set enabled(_0xcb54a4) {
      _0x4eb981 = _0xcb54a4;
    },
    get string() {
      return _0x2232c4;
    },
    set string(_0x1f1c5c) {
      _0x2232c4 = _0x1f1c5c;
    },
    get info() {
      return _0x41eab1;
    },
    set info(_0x124ec1) {
      _0x41eab1 = _0x124ec1;
    },
    get list() {
      return _0x48304e;
    },
    set list(_0x10fb15) {
      _0x48304e = _0x10fb15;
    },
    get autoRotate() {
      return _0x38b756;
    },
    set autoRotate(_0xf75aa1) {
      _0x38b756 = _0xf75aa1;
    },
    checkProxyLive: _0x53a270,
    checkMultipleProxies: _0x1ac68a,
    rotateToNextProxy: _0x441912,
    checkProxyViaAPI: _0x4a6048,
    parseProxyFormat: _0x190556,
    obfuscateProxy: _0x190835,
    loadProxySettings: _0xc8b6ba,
    saveProxySettings: _0x12ed0d,
    clearSavedProxy: _0x27e64b,
    clearSavedProxyQuiet: _0x30719c,
    autoLoadAndVerifyProxy: _0x43ee36
  };
})();
