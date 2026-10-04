(function () {
  'use strict';

  window.__tyagrey_STORAGE_LOADED = true;
  var _0x1bb6e0 = {
    TOKEN: "tyagrey_token",
    USER_ID: "tyagrey_user_id",
    CHAT_ID: "tyagrey_chat_id",
    FIRST_NAME: "tyagrey_first_name",
    SAVED_BINS: "tyagrey_saved_bins",
    PANEL_QUICK_BINS: "tyagrey_panel_quick_bins",
    SAVED_ID: "tyagrey_saved_id",
    CUSTOM_NAME: "tyagrey_custom_name",
    CUSTOM_EMAIL: "tyagrey_custom_email",
    BG_COLOR: "tyagrey_bg_color",
    HAS_CUSTOM_COLOR: "tyagrey_has_custom_color",
    BG_ENABLED: "tyagrey_bg_enabled",
    PAGE_BG_COLOR: "tyagrey_page_bg_color",
    PAGE_HAS_CUSTOM: "tyagrey_page_has_custom_color",
    TOGGLE_HIT_SOUND: "tyagrey_toggle_hit_sound",
    TOGGLE_AUTO_SS: "tyagrey_toggle_auto_ss",
    TOGGLE_TG_FORWARD: "tyagrey_toggle_tg_forward",
    LOGS: "tyagrey_logs",
    LOGS_CLEARED_AT: "tyagrey_logs_cleared_at",
    PROXY_ENABLED: "tyagrey_proxy_enabled",
    PROXY_STRING: "tyagrey_proxy_string",
    PROXY_INFO: "tyagrey_proxy_info",
    PROXY_LIST: "tyagrey_proxy_list",
    PROXY_ROTATE: "tyagrey_proxy_rotate",
    COUNTRY_REGION_SETTINGS: "tyagrey_country_region_settings",
    MUSIC_NAME: "tyagrey_music_name",
    MUSIC_DATA: "tyagrey_music_data",
    LAST_SEEN_BIN_TIME: "tyagrey_last_seen_bin_time",
    CARD_HISTORY: "tyagrey_card_history",
    HIT_DELAY_MS: "tyagrey_hit_delay_ms",
    CUSTOM_CHECKOUT_SETTINGS: "tyagrey_custom_checkout_settings",
    CC_LIST: "tyagrey_cc_list_data",
    CC_STARTED: "tyagrey_cc_started",
    CC_MODE: "tyagrey_cc_mode"
  };
  window.tyagreyKeys = _0x1bb6e0;
  window.tyagreyStorage = window.tyagreyStorage || {};
  var _0x2f58c3 = window.tyagreyStorage;
  var _0x30eb2d = {
    tyagreyUserToken: _0x1bb6e0.TOKEN,
    tyagrey_token: _0x1bb6e0.TOKEN,
    tyagreyUserId: _0x1bb6e0.USER_ID,
    tyagrey_userId: _0x1bb6e0.USER_ID,
    cardGenerator_ID: _0x1bb6e0.USER_ID,
    tyagreyUserFirstName: _0x1bb6e0.FIRST_NAME,
    tyagrey_firstName: _0x1bb6e0.FIRST_NAME,
    tyagrey_userFirstName: _0x1bb6e0.FIRST_NAME,
    tyagreySavedBINs: _0x1bb6e0.SAVED_BINS,
    cardGenerator_BINs: _0x1bb6e0.SAVED_BINS,
    tyagreySavedId: _0x1bb6e0.SAVED_ID,
    tyagreyCustomName: _0x1bb6e0.CUSTOM_NAME,
    tyagrey_customName: _0x1bb6e0.CUSTOM_NAME,
    tyagreyCustomEmail: _0x1bb6e0.CUSTOM_EMAIL,
    tyagrey_customEmail: _0x1bb6e0.CUSTOM_EMAIL,
    tyagreyBackgroundColor: _0x1bb6e0.BG_COLOR,
    tyagreyUserHasSetColor: _0x1bb6e0.HAS_CUSTOM_COLOR,
    tyagrey_bgColorEnabled: _0x1bb6e0.BG_ENABLED,
    tyagrey_pageBgColor: _0x1bb6e0.PAGE_BG_COLOR,
    tyagrey_hasCustomColor: _0x1bb6e0.PAGE_HAS_CUSTOM,
    tyagreyToggle_hitSound: _0x1bb6e0.TOGGLE_HIT_SOUND,
    hitSoundEnabled: _0x1bb6e0.TOGGLE_HIT_SOUND,
    tyagreyToggle_autoSS: _0x1bb6e0.TOGGLE_AUTO_SS,
    autoSSEnabled: _0x1bb6e0.TOGGLE_AUTO_SS,
    tyagreyToggle_tgForward: _0x1bb6e0.TOGGLE_TG_FORWARD,
    tgForwardEnabled: _0x1bb6e0.TOGGLE_TG_FORWARD,
    tyagrey_tgForward: _0x1bb6e0.TOGGLE_TG_FORWARD,
    tyagrey_logs: _0x1bb6e0.LOGS,
    tyagrey_logsClearedAt: _0x1bb6e0.LOGS_CLEARED_AT,
    tyagrey_proxyEnabled: _0x1bb6e0.PROXY_ENABLED,
    tyagrey_proxyString: _0x1bb6e0.PROXY_STRING,
    tyagrey_proxyInfo: _0x1bb6e0.PROXY_INFO,
    tyagrey_customMusicName: _0x1bb6e0.MUSIC_NAME,
    tyagreyCustomMusicData: _0x1bb6e0.MUSIC_DATA,
    tyagrey_lastSeenBinTime: _0x1bb6e0.LAST_SEEN_BIN_TIME,
    tyagreyCardHistory: _0x1bb6e0.CARD_HISTORY,
    tyagreyProxyString: _0x1bb6e0.PROXY_STRING,
    tyagreyProxyEnabled: _0x1bb6e0.PROXY_ENABLED
  };
  var _0x41bdbc = 0;
  var _0x26d69c = new Map();
  function _0x868199(_0x2ab25b, _0x26d7ed) {
    _0x26d7ed = _0x26d7ed || {};
    return new Promise(function (_0x1aea4f) {
      var _0x1c4f6e = "storage_" + ++_0x41bdbc + "_" + Date.now();
      function _0x1a6a5b(_0x58faa8) {
        if (_0x58faa8.data && _0x58faa8.data.type === "tyagrey_STORAGE_RESPONSE" && _0x58faa8.data.requestId === _0x1c4f6e) {
          window.removeEventListener("message", _0x1a6a5b);
          _0x26d69c.delete(_0x1c4f6e);
          _0x1aea4f(_0x58faa8.data.result);
        }
      }
      _0x26d69c.set(_0x1c4f6e, _0x1a6a5b);
      window.addEventListener("message", _0x1a6a5b);
      window.postMessage({
        type: "tyagrey_STORAGE_REQUEST",
        requestId: _0x1c4f6e,
        action: _0x2ab25b,
        data: _0x26d7ed
      }, "*");
      setTimeout(function () {
        if (_0x26d69c.has(_0x1c4f6e)) {
          window.removeEventListener("message", _0x1a6a5b);
          _0x26d69c.delete(_0x1c4f6e);
          _0x1aea4f(null);
        }
      }, 3000);
    });
  }
  _0x2f58c3.runMigration = function (_0x5d7d43) {
    var _0x5c08db = Object.keys(_0x30eb2d);
    _0x868199("GET", {
      keys: _0x5c08db
    }).then(function (_0x55e836) {
      _0x55e836 = _0x55e836 || {};
      var _0x31b671 = {};
      var _0x26c5e0 = [];
      for (var _0x114806 = 0; _0x114806 < _0x5c08db.length; _0x114806++) {
        var _0x53654e = _0x5c08db[_0x114806];
        var _0x1dc4bc = _0x30eb2d[_0x53654e];
        var _0x1c0e64 = _0x55e836[_0x53654e];
        if (_0x1c0e64 !== undefined && _0x1c0e64 !== null && _0x1c0e64 !== "") {
          if (_0x31b671[_0x1dc4bc] === undefined) {
            _0x31b671[_0x1dc4bc] = _0x1c0e64;
          }
          _0x26c5e0.push(_0x53654e);
        }
      }
      var _0xaab811 = ["tyagrey_token", "tyagrey_userId", "tyagrey_userFirstName", "tyagrey_customName", "tyagrey_customEmail", "tyagrey_tgForward", "tyagrey_logs", "tyagrey_logsClearedAt", "tyagrey_proxyEnabled", "tyagrey_proxyString", "tyagrey_proxyInfo", "tyagrey_customMusicName", "tyagrey_bgColorEnabled", "tyagrey_pageBgColor", "tyagrey_hasCustomColor", "tyagrey_lastSeenBinTime", "cardGenerator_BINs", "cardGenerator_BIN", "cardGenerator_ID"];
      for (var _0x172712 = 0; _0x172712 < _0xaab811.length; _0x172712++) {
        var _0x496ce6 = _0xaab811[_0x172712];
        var _0x59cd30 = _0x30eb2d[_0x496ce6];
        if (_0x59cd30) {
          var _0x1b59a4 = localStorage.getItem(_0x496ce6);
          if (_0x1b59a4 !== null) {
            localStorage.setItem(_0x59cd30, _0x1b59a4);
            localStorage.removeItem(_0x496ce6);
          }
        }
      }
      var _0x1bce50 = Object.keys(_0x31b671).length > 0;
      if (_0x1bce50) {
        _0x868199("SET", _0x31b671).then(function () {
          if (_0x26c5e0.length > 0) {
            _0x868199("REMOVE", {
              keys: _0x26c5e0
            }).then(function () {
              if (_0x5d7d43) {
                _0x5d7d43();
              }
            });
          } else if (_0x5d7d43) {
            _0x5d7d43();
          }
        });
      } else if (_0x5d7d43) {
        _0x5d7d43();
      }
    });
  };
  var _0x3f1c0b = ["#1a1a2e", "#16213e", "#0f3460", "#1b262c", "#2c3e50", "#1f1f38", "#2d2d44", "#1e3a5f", "#2b2b52", "#1c1c3c"];
  _0x2f58c3.getRandomBgColor = function () {
    return _0x3f1c0b[Math.floor(Math.random() * _0x3f1c0b.length)];
  };
  _0x2f58c3.loadBackgroundColor = function (_0x1361f9) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.BG_COLOR, _0x1bb6e0.HAS_CUSTOM_COLOR]
    }).then(function (_0x113fe7) {
      _0x113fe7 = _0x113fe7 || {};
      var _0x35b009 = _0x113fe7[_0x1bb6e0.BG_COLOR] || _0x2f58c3.getRandomBgColor();
      var _0x5af978 = _0x113fe7[_0x1bb6e0.HAS_CUSTOM_COLOR] || false;
      _0x1361f9(_0x35b009, _0x5af978);
    });
  };
  _0x2f58c3.saveBackgroundColor = function (_0x18a7e3, _0x566b15) {
    var _0x203bcb = {
      [_0x1bb6e0.BG_COLOR]: _0x18a7e3,
      [_0x1bb6e0.HAS_CUSTOM_COLOR]: _0x566b15 !== false
    };
    _0x868199("SET", _0x203bcb);
  };
  _0x2f58c3.loadCustomNameEmail = function (_0x3923ba) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.CUSTOM_NAME, _0x1bb6e0.CUSTOM_EMAIL]
    }).then(function (_0x296271) {
      _0x296271 = _0x296271 || {};
      _0x3923ba(_0x296271[_0x1bb6e0.CUSTOM_NAME] || "", _0x296271[_0x1bb6e0.CUSTOM_EMAIL] || "");
    });
  };
  _0x2f58c3.saveCustomName = function (_0xc92b71) {
    var _0x45ba25 = {
      [_0x1bb6e0.CUSTOM_NAME]: _0xc92b71
    };
    _0x868199("SET", _0x45ba25);
  };
  _0x2f58c3.saveCustomEmail = function (_0x147b78) {
    var _0x5c2b69 = {
      [_0x1bb6e0.CUSTOM_EMAIL]: _0x147b78
    };
    _0x868199("SET", _0x5c2b69);
  };
  _0x2f58c3.loadCardHistory = function (_0x4e3800) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.CARD_HISTORY]
    }).then(function (_0x181089) {
      _0x181089 = _0x181089 || {};
      var _0x26dc33 = _0x181089[_0x1bb6e0.CARD_HISTORY] || [];
      _0x4e3800(Array.isArray(_0x26dc33) ? _0x26dc33 : []);
    });
  };
  _0x2f58c3.saveCardHistory = function (_0x4d70e6) {
    var _0x4ed412 = {};
    _0x4ed412[_0x1bb6e0.CARD_HISTORY] = _0x4d70e6.slice(-100);
    _0x868199("SET", _0x4ed412);
  };
  _0x2f58c3.addToCardHistory = function (_0x4bd43a, _0x3173a1) {
    _0x2f58c3.loadCardHistory(function (_0x11f56f) {
      _0x11f56f.push(_0x4bd43a);
      _0x2f58c3.saveCardHistory(_0x11f56f);
      if (_0x3173a1) {
        _0x3173a1(_0x11f56f);
      }
    });
  };
  _0x2f58c3.loadSavedBINs = function (_0x3d3b47) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.SAVED_BINS]
    }).then(function (_0x4d1edd) {
      _0x4d1edd = _0x4d1edd || {};
      var _0x5ab1cd = _0x4d1edd[_0x1bb6e0.SAVED_BINS] || [];
      _0x3d3b47(Array.isArray(_0x5ab1cd) ? _0x5ab1cd : []);
    });
  };
  _0x2f58c3.saveBINs = function (_0x562995) {
    var _0x5ee258 = {
      [_0x1bb6e0.SAVED_BINS]: _0x562995
    };
    _0x868199("SET", _0x5ee258);
  };
  _0x2f58c3.loadPanelQuickBins = function (_0x493a8a) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.PANEL_QUICK_BINS]
    }).then(function (_0x30223b) {
      _0x30223b = _0x30223b || {};
      _0x493a8a(_0x30223b[_0x1bb6e0.PANEL_QUICK_BINS]);
    });
  };
  _0x2f58c3.savePanelQuickBins = function (_0x5f3175) {
    var _0x9fee7e = {};
    _0x9fee7e[_0x1bb6e0.PANEL_QUICK_BINS] = Array.isArray(_0x5f3175) ? _0x5f3175 : [];
    _0x868199("SET", _0x9fee7e);
  };
  _0x2f58c3.removePanelQuickBins = function () {
    var _0x5d5774 = {
      [_0x1bb6e0.PANEL_QUICK_BINS]: []
    };
    _0x868199("SET", _0x5d5774);
  };
  _0x2f58c3.loadBinStores = function (_0x363452) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.SAVED_BINS, _0x1bb6e0.PANEL_QUICK_BINS]
    }).then(function (_0x4395ac) {
      _0x4395ac = _0x4395ac || {};
      _0x363452({
        cloudBins: Array.isArray(_0x4395ac[_0x1bb6e0.SAVED_BINS]) ? _0x4395ac[_0x1bb6e0.SAVED_BINS] : [],
        panelBins: _0x4395ac[_0x1bb6e0.PANEL_QUICK_BINS]
      });
    });
  };
  _0x2f58c3.loadToggleState = function (_0x277930, _0x3c55ad) {
    var _0x19a4f4 = {
      hitSound: _0x1bb6e0.TOGGLE_HIT_SOUND,
      autoSS: _0x1bb6e0.TOGGLE_AUTO_SS,
      tgForward: _0x1bb6e0.TOGGLE_TG_FORWARD
    };
    var _0x99a2b6 = _0x19a4f4[_0x277930] || "tyagrey_toggle_" + _0x277930;
    _0x868199("GET", {
      keys: [_0x99a2b6]
    }).then(function (_0x3e84e9) {
      _0x3e84e9 = _0x3e84e9 || {};
      _0x3c55ad(_0x3e84e9[_0x99a2b6] !== undefined ? _0x3e84e9[_0x99a2b6] : true);
    });
  };
  _0x2f58c3.saveToggleState = function (_0x323a8c, _0x3e43aa) {
    var _0x239cfa = {
      hitSound: _0x1bb6e0.TOGGLE_HIT_SOUND,
      autoSS: _0x1bb6e0.TOGGLE_AUTO_SS,
      tgForward: _0x1bb6e0.TOGGLE_TG_FORWARD
    };
    var _0x10c659 = _0x239cfa[_0x323a8c] || "tyagrey_toggle_" + _0x323a8c;
    var _0x26e2b2 = {
      [_0x10c659]: _0x3e43aa
    };
    _0x868199("SET", _0x26e2b2);
  };
  _0x2f58c3.loadUserSession = function (_0x2be3cd) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.TOKEN, _0x1bb6e0.USER_ID, _0x1bb6e0.FIRST_NAME]
    }).then(function (_0x10eb17) {
      _0x10eb17 = _0x10eb17 || {};
      _0x2be3cd({
        token: _0x10eb17[_0x1bb6e0.TOKEN] || "",
        userId: _0x10eb17[_0x1bb6e0.USER_ID] || "",
        firstName: _0x10eb17[_0x1bb6e0.FIRST_NAME] || ""
      });
    });
  };
  _0x2f58c3.saveUserSession = function (_0x896d52, _0x111d68, _0x254f00) {
    var _0x54e0fd = {
      [_0x1bb6e0.TOKEN]: _0x896d52,
      [_0x1bb6e0.USER_ID]: _0x111d68,
      [_0x1bb6e0.FIRST_NAME]: _0x254f00
    };
    _0x868199("SET", _0x54e0fd);
  };
  _0x2f58c3.clearUserSession = function () {
    _0x868199("REMOVE", {
      keys: [_0x1bb6e0.TOKEN, _0x1bb6e0.USER_ID, _0x1bb6e0.FIRST_NAME, _0x1bb6e0.SAVED_BINS, _0x1bb6e0.PANEL_QUICK_BINS, _0x1bb6e0.CARD_HISTORY]
    });
  };
  _0x2f58c3.loadSavedId = function (_0x22d79c) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.SAVED_ID]
    }).then(function (_0x42e5b3) {
      _0x42e5b3 = _0x42e5b3 || {};
      _0x22d79c(_0x42e5b3[_0x1bb6e0.SAVED_ID] || "");
    });
  };
  _0x2f58c3.saveId = function (_0x51a362) {
    var _0x15b9d4 = {
      [_0x1bb6e0.SAVED_ID]: _0x51a362
    };
    _0x868199("SET", _0x15b9d4);
  };
  _0x2f58c3.loadAllData = function (_0x47e795) {
    var _0x19c176 = [];
    var _0x4e6e85 = Object.keys(_0x1bb6e0);
    for (var _0x138eb3 = 0; _0x138eb3 < _0x4e6e85.length; _0x138eb3++) {
      _0x19c176.push(_0x1bb6e0[_0x4e6e85[_0x138eb3]]);
    }
    _0x868199("GET", {
      keys: _0x19c176
    }).then(function (_0x4b8740) {
      _0x4b8740 = _0x4b8740 || {};
      _0x47e795(_0x4b8740);
    });
  };
  _0x2f58c3.loadProxySettings = function (_0x48fde3) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.PROXY_STRING, _0x1bb6e0.PROXY_ENABLED]
    }).then(function (_0x4f0677) {
      _0x4f0677 = _0x4f0677 || {};
      _0x48fde3({
        proxyString: _0x4f0677[_0x1bb6e0.PROXY_STRING] || "",
        proxyEnabled: _0x4f0677[_0x1bb6e0.PROXY_ENABLED] || false
      });
    });
  };
  _0x2f58c3.saveProxySettings = function (_0x1d5a57, _0x328f22) {
    var _0x309c1e = {
      [_0x1bb6e0.PROXY_STRING]: _0x1d5a57,
      [_0x1bb6e0.PROXY_ENABLED]: _0x328f22
    };
    _0x868199("SET", _0x309c1e);
  };
  _0x2f58c3.loadCountryRegionSettings = function (_0x167bfd) {
    _0x868199("GET", {
      keys: [_0x1bb6e0.COUNTRY_REGION_SETTINGS]
    }).then(function (_0x286d04) {
      _0x286d04 = _0x286d04 || {};
      _0x167bfd(_0x286d04[_0x1bb6e0.COUNTRY_REGION_SETTINGS] || {
        enabled: true,
        countryCode: "US",
        countryName: "United States"
      });
    });
  };
  _0x2f58c3.saveCountryRegionSettings = function (_0x339978) {
    _0x339978 = _0x339978 || {};
    var _0x1b43be = {
      [_0x1bb6e0.COUNTRY_REGION_SETTINGS]: {
        enabled: !!_0x339978.enabled,
        countryCode: _0x339978.countryCode || "US",
        countryName: _0x339978.countryName || "United States"
      }
    };
    _0x868199("SET", _0x1b43be);
  };
  (function _0x1dc8ea() {
    _0x868199("GET", {
      keys: ["tyagrey_migration_done"]
    }).then(function (_0x288026) {
      if (_0x288026 && _0x288026.tyagrey_migration_done) {
        return;
      }
      _0x2f58c3.runMigration(function () {
        _0x868199("SET", {
          tyagrey_migration_done: true
        });
      });
    });
  })();
})();
