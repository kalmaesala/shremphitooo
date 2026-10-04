window.__tyagrey_CONTENT_LOADED = true;
const K = {
  TOKEN: "tyagrey_token",
  USER_ID: "tyagrey_user_id",
  CHAT_ID: "tyagrey_chat_id",
  FIRST_NAME: "tyagrey_first_name",
  SAVED_BINS: "tyagrey_saved_bins",
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
  MUSIC_NAME: "tyagrey_music_name",
  MUSIC_DATA: "tyagrey_music_data",
  LAST_SEEN_BIN_TIME: "tyagrey_last_seen_bin_time",
  CARD_HISTORY: "tyagrey_card_history",
  COUNTRY_REGION_SETTINGS: "tyagrey_country_region_settings"
};
const _pendingWrites = new Set();
let _writeTimeout = null;
function markOwnWrite(_0x3fca69) {
  _0x3fca69.forEach(_0x46355c => _pendingWrites.add(_0x46355c));
  clearTimeout(_writeTimeout);
  _writeTimeout = setTimeout(() => _pendingWrites.clear(), 2000);
}
if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.onChanged) {
  chrome.storage.onChanged.addListener((_0x97ec93, _0x126c3a) => {
    if (_0x126c3a === "local") {
      const _0x45d85f = {};
      let _0x50660 = false;
      for (const [_0x21b228, {
        newValue: _0x424885
      }] of Object.entries(_0x97ec93)) {
        if (_pendingWrites.has(_0x21b228)) {
          continue;
        }
        _0x45d85f[_0x21b228] = _0x424885 !== undefined ? _0x424885 : null;
        _0x50660 = true;
      }
      if (_0x50660) {
        window.postMessage({
          type: "tyagrey_STORAGE_CHANGED",
          changes: _0x45d85f
        }, "*");
      }
    }
  });
}
window.addEventListener("message", async _0x296699 => {
  if (_0x296699.source !== window) {
    return;
  }
  if (_0x296699.data && _0x296699.data.type === "tyagrey_STORAGE_REQUEST") {
    const {
      requestId: _0x3640f7,
      action: _0x4b4e5d,
      data: _0x184e43
    } = _0x296699.data;
    try {
      if (!isExtensionValid()) {
        window.postMessage({
          type: "tyagrey_STORAGE_RESPONSE",
          requestId: _0x3640f7,
          result: null
        }, "*");
        return;
      }
      if (_0x4b4e5d === "GET") {
        const _0x713233 = _0x184e43 && Array.isArray(_0x184e43.keys) ? _0x184e43.keys : [];
        const _0x155e0d = new Set([K.COUNTRY_REGION_SETTINGS, K.CUSTOM_NAME, K.CUSTOM_EMAIL, K.TOGGLE_TG_FORWARD, K.TOGGLE_HIT_SOUND, K.TOGGLE_AUTO_SS, K.BG_COLOR, K.HAS_CUSTOM_COLOR, K.BG_ENABLED, K.PAGE_BG_COLOR, K.PAGE_HAS_CUSTOM, K.USER_ID, K.CHAT_ID, K.FIRST_NAME]);
        const _0x30bb09 = _0x713233.length > 0 && _0x713233.every(_0x13f981 => _0x155e0d.has(_0x13f981));
        if (!_0x30bb09 && !(await isLoggedIn())) {
          window.postMessage({
            type: "tyagrey_STORAGE_RESPONSE",
            requestId: _0x3640f7,
            result: {
              error: "Not logged in"
            }
          }, "*");
          return;
        }
        chrome.storage.local.get(_0x713233, _0x3e8223 => {
          window.postMessage({
            type: "tyagrey_STORAGE_RESPONSE",
            requestId: _0x3640f7,
            result: _0x3e8223 || {}
          }, "*");
        });
        return;
      } else if (_0x4b4e5d === "SET") {
        markOwnWrite(Object.keys(_0x184e43));
        chrome.storage.local.set(_0x184e43, () => {
          window.postMessage({
            type: "tyagrey_STORAGE_RESPONSE",
            requestId: _0x3640f7,
            result: {
              success: true
            }
          }, "*");
        });
      } else if (_0x4b4e5d === "REMOVE") {
        markOwnWrite(_0x184e43.keys);
        chrome.storage.local.remove(_0x184e43.keys, () => {
          window.postMessage({
            type: "tyagrey_STORAGE_RESPONSE",
            requestId: _0x3640f7,
            result: {
              success: true
            }
          }, "*");
        });
      }
    } catch (_0x3f42aa) {
      window.postMessage({
        type: "tyagrey_STORAGE_RESPONSE",
        requestId: _0x3640f7,
        result: null
      }, "*");
    }
    return;
  }
});
window.addEventListener("message", async _0x1f1552 => {
  if (_0x1f1552.data && _0x1f1552.data.type === "tyagrey_TO_BACKGROUND" && _0x1f1552.data.requestId) {
    try {
      const _0x505a5b = await chrome.runtime.sendMessage(_0x1f1552.data.payload);
      window.postMessage({
        type: "tyagrey_FROM_BACKGROUND",
        requestId: _0x1f1552.data.requestId,
        response: _0x505a5b || {
          success: true
        }
      }, "*");
    } catch (_0x2e1194) {
      const _0x34ed02 = _0x2e1194.message || "";
      if (_0x34ed02.includes("asynchronous response") || _0x34ed02.includes("message port closed")) {
        window.postMessage({
          type: "tyagrey_FROM_BACKGROUND",
          requestId: _0x1f1552.data.requestId,
          response: {
            success: false,
            error: _0x34ed02 || "Background connection closed"
          }
        }, "*");
        return;
      }
      window.postMessage({
        type: "tyagrey_FROM_BACKGROUND",
        requestId: _0x1f1552.data.requestId,
        response: {
          success: false,
          error: _0x34ed02
        }
      }, "*");
    }
  }
});
if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
  chrome.runtime.onMessage.addListener(function (_0x1a49d5, _0x763087, _0x15f3c0) {
    if (_0x1a49d5.action === "clearProxyStorage") {
      localStorage.removeItem(K.PROXY_STRING);
      localStorage.removeItem(K.PROXY_ENABLED);
      window.postMessage({
        type: "PROXY_CLEARED_FROM_POPUP"
      }, "*");
      _0x15f3c0({
        success: true
      });
    }
    if (_0x1a49d5.type === "OPEN_PROXY_MODAL_FROM_POPUP") {
      window.postMessage({
        type: "OPEN_PROXY_MODAL_FROM_POPUP"
      }, "*");
      _0x15f3c0({
        success: true
      });
    }
    if (_0x1a49d5.type === "CUSTOM_CHECKOUT_START_INJECT") {
      const _0x38c88a = {
        type: "CUSTOM_CHECKOUT_START_INJECT",
        settings: _0x1a49d5.settings || {},
        bin: _0x1a49d5.bin || "",
        ccList: _0x1a49d5.ccList || [],
        mode: _0x1a49d5.mode || "bin"
      };
      injectScript();
      window.postMessage(_0x38c88a, "*");
      setTimeout(() => window.postMessage(_0x38c88a, "*"), 600);
      setTimeout(() => window.postMessage(_0x38c88a, "*"), 1600);
      _0x15f3c0({
        success: true
      });
    }
    if (_0x1a49d5.type === "CUSTOM_CHECKOUT_STOP_INJECT") {
      injectScript();
      window.postMessage({
        type: "CUSTOM_CHECKOUT_STOP_INJECT"
      }, "*");
      _0x15f3c0({
        success: true
      });
    }
    return true;
  });
}
function simulateTyping(_0x49db04, _0x509ffb) {
  _0x49db04.focus();
  const _0x50ebe8 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
  _0x50ebe8.call(_0x49db04, _0x509ffb);
  _0x49db04.dispatchEvent(new Event("input", {
    bubbles: true
  }));
  _0x49db04.dispatchEvent(new Event("change", {
    bubbles: true
  }));
  _0x49db04.dispatchEvent(new KeyboardEvent("keyup", {
    bubbles: true
  }));
  _0x49db04.blur();
}
function simulateSelect(_0x38dbcd, _0x5c9526) {
  _0x38dbcd.focus();
  _0x38dbcd.value = _0x5c9526;
  _0x38dbcd.dispatchEvent(new Event("input", {
    bubbles: true
  }));
  _0x38dbcd.dispatchEvent(new Event("change", {
    bubbles: true
  }));
  _0x38dbcd.dispatchEvent(new CustomEvent("select:change", {
    bubbles: true,
    detail: {
      value: _0x5c9526
    }
  }));
  _0x38dbcd.blur();
}
const randomNames = ["tyagrey"];
const countryAddressData = {
  US: {
    streets: ["Main Street", "Oak Road", "Park Avenue", "Maple Drive", "Cedar Lane", "Pine Street", "Lake Drive", "Forest Avenue", "River Road", "Hill Street"],
    locations: [{
      zip: "10001",
      city: "New York"
    }, {
      zip: "10016",
      city: "New York"
    }, {
      zip: "10036",
      city: "New York"
    }, {
      zip: "02101",
      city: "Boston"
    }, {
      zip: "02108",
      city: "Boston"
    }, {
      zip: "02115",
      city: "Boston"
    }, {
      zip: "60601",
      city: "Chicago"
    }, {
      zip: "60602",
      city: "Chicago"
    }, {
      zip: "60614",
      city: "Chicago"
    }, {
      zip: "90001",
      city: "Los Angeles"
    }, {
      zip: "90015",
      city: "Los Angeles"
    }, {
      zip: "90028",
      city: "Los Angeles"
    }, {
      zip: "94102",
      city: "San Francisco"
    }, {
      zip: "94105",
      city: "San Francisco"
    }, {
      zip: "94107",
      city: "San Francisco"
    }, {
      zip: "20001",
      city: "Washington"
    }, {
      zip: "20003",
      city: "Washington"
    }, {
      zip: "20009",
      city: "Washington"
    }, {
      zip: "30301",
      city: "Atlanta"
    }, {
      zip: "30303",
      city: "Atlanta"
    }, {
      zip: "30308",
      city: "Atlanta"
    }, {
      zip: "33101",
      city: "Miami"
    }, {
      zip: "33109",
      city: "Miami"
    }, {
      zip: "33125",
      city: "Miami"
    }, {
      zip: "75201",
      city: "Dallas"
    }, {
      zip: "75202",
      city: "Dallas"
    }, {
      zip: "75219",
      city: "Dallas"
    }, {
      zip: "98101",
      city: "Seattle"
    }, {
      zip: "98104",
      city: "Seattle"
    }, {
      zip: "98109",
      city: "Seattle"
    }, {
      zip: "85001",
      city: "Phoenix"
    }, {
      zip: "85003",
      city: "Phoenix"
    }, {
      zip: "85008",
      city: "Phoenix"
    }, {
      zip: "19101",
      city: "Philadelphia"
    }, {
      zip: "19103",
      city: "Philadelphia"
    }, {
      zip: "19107",
      city: "Philadelphia"
    }, {
      zip: "78201",
      city: "San Antonio"
    }, {
      zip: "78205",
      city: "San Antonio"
    }, {
      zip: "78210",
      city: "San Antonio"
    }, {
      zip: "80201",
      city: "Denver"
    }, {
      zip: "80203",
      city: "Denver"
    }, {
      zip: "80205",
      city: "Denver"
    }, {
      zip: "97201",
      city: "Portland"
    }, {
      zip: "97204",
      city: "Portland"
    }, {
      zip: "97209",
      city: "Portland"
    }, {
      zip: "55101",
      city: "Saint Paul"
    }, {
      zip: "55103",
      city: "Saint Paul"
    }, {
      zip: "55105",
      city: "Saint Paul"
    }, {
      zip: "43201",
      city: "Columbus"
    }, {
      zip: "43203",
      city: "Columbus"
    }, {
      zip: "43215",
      city: "Columbus"
    }, {
      zip: "40201",
      city: "Louisville"
    }, {
      zip: "40203",
      city: "Louisville"
    }, {
      zip: "40208",
      city: "Louisville"
    }]
  },
  GB: {
    streets: ["High Street", "King Road", "Queen Street", "Church Lane", "Park Lane", "Victoria Road", "George Street", "Station Road", "Mill Lane", "London Road"],
    locations: [{
      zip: "E1 6AN",
      city: "London"
    }, {
      zip: "E1 6BB",
      city: "London"
    }, {
      zip: "SW1A 1AA",
      city: "London"
    }, {
      zip: "M1 1AA",
      city: "Manchester"
    }, {
      zip: "M2 1AA",
      city: "Manchester"
    }, {
      zip: "M3 1AA",
      city: "Manchester"
    }, {
      zip: "B1 1AA",
      city: "Birmingham"
    }, {
      zip: "B2 1AA",
      city: "Birmingham"
    }, {
      zip: "B3 1AA",
      city: "Birmingham"
    }, {
      zip: "G1 1AA",
      city: "Glasgow"
    }, {
      zip: "G2 1AA",
      city: "Glasgow"
    }, {
      zip: "G3 1AA",
      city: "Glasgow"
    }, {
      zip: "EH1 1AA",
      city: "Edinburgh"
    }, {
      zip: "EH2 1AA",
      city: "Edinburgh"
    }, {
      zip: "EH3 1AA",
      city: "Edinburgh"
    }, {
      zip: "L1 1AA",
      city: "Liverpool"
    }, {
      zip: "L2 1AA",
      city: "Liverpool"
    }, {
      zip: "L3 1AA",
      city: "Liverpool"
    }, {
      zip: "BS1 1AA",
      city: "Bristol"
    }, {
      zip: "BS2 1AA",
      city: "Bristol"
    }, {
      zip: "BS3 1AA",
      city: "Bristol"
    }]
  },
  CA: {
    streets: ["Main Street", "King Street", "Queen Street", "Yonge Street", "Bay Street", "Wellington Street", "Dundas Street", "Church Street", "Park Avenue", "River Road"],
    locations: [{
      zip: "M5A 1A1",
      city: "Toronto"
    }, {
      zip: "M5B 1A1",
      city: "Toronto"
    }, {
      zip: "M5C 1A1",
      city: "Toronto"
    }, {
      zip: "H2X 1A1",
      city: "Montreal"
    }, {
      zip: "H2Y 1A1",
      city: "Montreal"
    }, {
      zip: "H2Z 1A1",
      city: "Montreal"
    }, {
      zip: "V6A 1A1",
      city: "Vancouver"
    }, {
      zip: "V6B 1A1",
      city: "Vancouver"
    }, {
      zip: "V6C 1A1",
      city: "Vancouver"
    }, {
      zip: "T2A 1A1",
      city: "Calgary"
    }, {
      zip: "T2B 1A1",
      city: "Calgary"
    }, {
      zip: "T2C 1A1",
      city: "Calgary"
    }, {
      zip: "K1A 1A1",
      city: "Ottawa"
    }, {
      zip: "K1B 1A1",
      city: "Ottawa"
    }, {
      zip: "K1C 1A1",
      city: "Ottawa"
    }]
  },
  DE: {
    streets: ["Hauptstrasse", "Bahnhofstrasse", "Berliner Strasse", "Muenchner Strasse", "Schillerstrasse", "Goethestrasse", "Gartenstrasse", "Kirchstrasse", "Waldstrasse", "Bergstrasse"],
    locations: [{
      zip: "10115",
      city: "Berlin"
    }, {
      zip: "10117",
      city: "Berlin"
    }, {
      zip: "10119",
      city: "Berlin"
    }, {
      zip: "80331",
      city: "Muenchen"
    }, {
      zip: "80333",
      city: "Muenchen"
    }, {
      zip: "80335",
      city: "Muenchen"
    }, {
      zip: "20095",
      city: "Hamburg"
    }, {
      zip: "20097",
      city: "Hamburg"
    }, {
      zip: "20099",
      city: "Hamburg"
    }, {
      zip: "60311",
      city: "Frankfurt"
    }, {
      zip: "60313",
      city: "Frankfurt"
    }, {
      zip: "60315",
      city: "Frankfurt"
    }]
  },
  FR: {
    streets: ["Rue de la Paix", "Avenue des Champs", "Boulevard Saint Germain", "Rue de Rivoli", "Avenue de la Republique", "Rue du Faubourg", "Boulevard Haussmann", "Rue Saint Honore", "Avenue Victor Hugo", "Rue de la Liberte"],
    locations: [{
      zip: "75001",
      city: "Paris"
    }, {
      zip: "75002",
      city: "Paris"
    }, {
      zip: "75003",
      city: "Paris"
    }, {
      zip: "13001",
      city: "Marseille"
    }, {
      zip: "13002",
      city: "Marseille"
    }, {
      zip: "13003",
      city: "Marseille"
    }, {
      zip: "69001",
      city: "Lyon"
    }, {
      zip: "69002",
      city: "Lyon"
    }, {
      zip: "69003",
      city: "Lyon"
    }]
  },
  AU: {
    streets: ["Collins Street", "Bourke Street", "Elizabeth Street", "King Street", "Queen Street", "George Street", "Pitt Street", "York Street", "Clarence Street", "Market Street"],
    locations: [{
      zip: "2000",
      city: "Sydney"
    }, {
      zip: "2001",
      city: "Sydney"
    }, {
      zip: "2002",
      city: "Sydney"
    }, {
      zip: "3000",
      city: "Melbourne"
    }, {
      zip: "3001",
      city: "Melbourne"
    }, {
      zip: "3002",
      city: "Melbourne"
    }, {
      zip: "4000",
      city: "Brisbane"
    }, {
      zip: "4001",
      city: "Brisbane"
    }, {
      zip: "4002",
      city: "Brisbane"
    }]
  },
  JP: {
    streets: ["Chuo-dori", "Sakura-dori", "Meiji-dori", "Yasukuni-dori", "Showa-dori", "Heiwa-dori", "Sakae-dori", "Nishi-dori", "Higashi-dori", "Kita-dori"],
    locations: [{
      zip: "100-0001",
      city: "Tokyo"
    }, {
      zip: "100-0002",
      city: "Tokyo"
    }, {
      zip: "100-0003",
      city: "Tokyo"
    }, {
      zip: "530-0001",
      city: "Osaka"
    }, {
      zip: "530-0002",
      city: "Osaka"
    }, {
      zip: "530-0003",
      city: "Osaka"
    }]
  },
  IN: {
    streets: ["MG Road", "Station Road", "Park Street", "Church Road", "Lake Road", "Garden Road", "Market Road", "Civil Lines", "Jawahar Road", "Nehru Road"],
    locations: [{
      zip: "110001",
      city: "New Delhi"
    }, {
      zip: "110002",
      city: "New Delhi"
    }, {
      zip: "110003",
      city: "New Delhi"
    }, {
      zip: "400001",
      city: "Mumbai"
    }, {
      zip: "400002",
      city: "Mumbai"
    }, {
      zip: "400003",
      city: "Mumbai"
    }, {
      zip: "700001",
      city: "Kolkata"
    }, {
      zip: "700002",
      city: "Kolkata"
    }, {
      zip: "700003",
      city: "Kolkata"
    }]
  },
  BD: {
    streets: ["Road 1", "Road 2", "Road 3", "Avenue 1", "Avenue 2", "Avenue 3", "Lane 1", "Lane 2", "Lane 3", "Street 1"],
    locations: [{
      zip: "1000",
      city: "Dhaka"
    }, {
      zip: "1100",
      city: "Dhaka"
    }, {
      zip: "1200",
      city: "Dhaka"
    }, {
      zip: "3000",
      city: "Chittagong"
    }, {
      zip: "3100",
      city: "Chittagong"
    }, {
      zip: "3200",
      city: "Chittagong"
    }, {
      zip: "6000",
      city: "Rajshahi"
    }, {
      zip: "6100",
      city: "Rajshahi"
    }, {
      zip: "6200",
      city: "Rajshahi"
    }, {
      zip: "7000",
      city: "Khulna"
    }, {
      zip: "7100",
      city: "Khulna"
    }, {
      zip: "7200",
      city: "Khulna"
    }, {
      zip: "8000",
      city: "Sylhet"
    }, {
      zip: "8100",
      city: "Sylhet"
    }, {
      zip: "8200",
      city: "Sylhet"
    }]
  },
  SG: {
    streets: ["Orchard Road", "Tanjong Pagar", "Robinson Road", "Raffles Place", "Shenton Way", "Marina Boulevard", "Temple Street", "Smith Street", "New Bridge Road", "South Bridge Road"],
    locations: [{
      zip: "018956",
      city: "Singapore"
    }, {
      zip: "018955",
      city: "Singapore"
    }, {
      zip: "018954",
      city: "Singapore"
    }, {
      zip: "048582",
      city: "Singapore"
    }, {
      zip: "048583",
      city: "Singapore"
    }, {
      zip: "048584",
      city: "Singapore"
    }, {
      zip: "238801",
      city: "Singapore"
    }, {
      zip: "238802",
      city: "Singapore"
    }, {
      zip: "238803",
      city: "Singapore"
    }]
  },
  HK: {
    streets: ["Nathan Road", "Des Voeux Road", "Hennessy Road", "King's Road", "Queen's Road", "Hollywood Road", "Staunton Street", "Caine Road", "Robinson Road", "Garden Road"],
    locations: [{
      zip: "000000",
      city: "Hong Kong"
    }, {
      zip: "000001",
      city: "Hong Kong"
    }, {
      zip: "000002",
      city: "Hong Kong"
    }, {
      zip: "000003",
      city: "Kowloon"
    }, {
      zip: "000004",
      city: "Kowloon"
    }, {
      zip: "000005",
      city: "Kowloon"
    }]
  },
  NL: {
    streets: ["Hoofdstraat", "Kerkstraat", "Dorpsstraat", "Stationsstraat", "Marktstraat", "Molenstraat", "Schoolstraat", "Parkweg", "Bosweg", "Kanaalweg"],
    locations: [{
      zip: "1011",
      city: "Amsterdam"
    }, {
      zip: "1012",
      city: "Amsterdam"
    }, {
      zip: "1013",
      city: "Amsterdam"
    }, {
      zip: "3011",
      city: "Rotterdam"
    }, {
      zip: "3012",
      city: "Rotterdam"
    }, {
      zip: "3013",
      city: "Rotterdam"
    }]
  },
  SE: {
    streets: ["Storgatan", "Kyrkogatan", "Skolgatan", "Stationsgatan", "Marknadsgatan", "Kungsgatan", "Drottninggatan", "Vasagatan", "Odengatan", "Gustavsgatan"],
    locations: [{
      zip: "111 22",
      city: "Stockholm"
    }, {
      zip: "111 23",
      city: "Stockholm"
    }, {
      zip: "111 24",
      city: "Stockholm"
    }, {
      zip: "211 11",
      city: "Malmo"
    }, {
      zip: "211 12",
      city: "Malmo"
    }, {
      zip: "211 13",
      city: "Malmo"
    }]
  },
  BR: {
    streets: ["Rua Principal", "Avenida Brasil", "Rua das Flores", "Rua Sao Paulo", "Avenida Paulista", "Rua do Comercio", "Rua da Liberdade", "Avenida Rio Branco", "Rua da Paz", "Rua do Sol"],
    locations: [{
      zip: "01001-000",
      city: "Sao Paulo"
    }, {
      zip: "01002-000",
      city: "Sao Paulo"
    }, {
      zip: "01003-000",
      city: "Sao Paulo"
    }, {
      zip: "20001-000",
      city: "Rio de Janeiro"
    }, {
      zip: "20002-000",
      city: "Rio de Janeiro"
    }, {
      zip: "20003-000",
      city: "Rio de Janeiro"
    }]
  },
  IT: {
    streets: ["Via Roma", "Via Garibaldi", "Corso Italia", "Via Mazzini", "Via Cavour", "Corso Vittorio", "Via Dante", "Via Manzoni", "Corso Buenos Aires", "Via Montenapoleone"],
    locations: [{
      zip: "00100",
      city: "Roma"
    }, {
      zip: "00121",
      city: "Roma"
    }, {
      zip: "00142",
      city: "Roma"
    }, {
      zip: "20121",
      city: "Milano"
    }, {
      zip: "20122",
      city: "Milano"
    }, {
      zip: "20123",
      city: "Milano"
    }]
  },
  ES: {
    streets: ["Calle Mayor", "Calle Gran Via", "Paseo de la Castellana", "Calle Alcala", "Calle Fuencarral", "Calle Preciados", "Calle Arenal", "Calle Mayor", "Paseo del Prado", "Calle Serrano"],
    locations: [{
      zip: "28001",
      city: "Madrid"
    }, {
      zip: "28002",
      city: "Madrid"
    }, {
      zip: "28003",
      city: "Madrid"
    }, {
      zip: "08001",
      city: "Barcelona"
    }, {
      zip: "08002",
      city: "Barcelona"
    }, {
      zip: "08003",
      city: "Barcelona"
    }]
  }
};
function getRandomName() {
  return randomNames[Math.floor(Math.random() * randomNames.length)];
}
function getRandomAddress(_0x2d8fea) {
  const _0x196bff = countryAddressData[_0x2d8fea] || countryAddressData.US;
  const _0x4b4e8e = _0x196bff.locations[Math.floor(Math.random() * _0x196bff.locations.length)];
  const _0x31a07c = _0x196bff.streets[Math.floor(Math.random() * _0x196bff.streets.length)];
  const _0x509a31 = Math.floor(Math.random() * 999) + 1;
  return {
    address: _0x509a31 + " " + _0x31a07c,
    city: _0x4b4e8e.city,
    zip: _0x4b4e8e.zip
  };
}
async function checkAndFillFields() {
  let _0x230d40 = true;
  let _0x294b78 = "US";
  try {
    const _0x171c65 = await new Promise(_0x434d9f => {
      chrome.storage.local.get([K.COUNTRY_REGION_SETTINGS], _0x847623 => _0x434d9f(_0x847623));
    });
    const _0x313424 = _0x171c65[K.COUNTRY_REGION_SETTINGS] || {};
    _0x230d40 = _0x313424.enabled !== false;
    _0x294b78 = _0x313424.countryCode || "US";
  } catch (_0xfda419) {}
  const _0x38163b = {
    cardNumber: {
      selector: "#cardNumber, [name=\"cardNumber\"], [autocomplete=\"cc-number\"]",
      value: "4242424242424242"
    },
    cardExpiry: {
      selector: "#cardExpiry, [name=\"cardExpiry\"], [autocomplete=\"cc-exp\"]",
      value: "01/32"
    },
    cardCvc: {
      selector: "#cardCvc, [name=\"cardCvc\"], [autocomplete=\"cc-csc\"]",
      value: "000"
    },
    billingName: {
      selector: "#billingName, [name=\"billingName\"], [autocomplete=\"cc-name\"]",
      value: "TYAgrey"
    }
  };
  for (let [_0x5c3407, _0x5c8639] of Object.entries(_0x38163b)) {
    const _0x396b67 = document.querySelector(_0x5c8639.selector);
    if (_0x396b67) {
      if (_0x396b67.tagName.toLowerCase() === "select") {
        simulateSelect(_0x396b67, _0x5c8639.value);
      } else {
        simulateTyping(_0x396b67, _0x5c8639.value);
      }
      await new Promise(_0x29bc3c => setTimeout(_0x29bc3c, 100));
    }
  }
  if (_0x230d40) {
    const _0x5101ec = document.querySelector("#billingCountry, [name=\"billingCountry\"]");
    if (_0x5101ec) {
      simulateSelect(_0x5101ec, _0x294b78);
      await new Promise(_0x50c089 => setTimeout(_0x50c089, 500));
    }
    const _0x9fa2f7 = getRandomAddress(_0x294b78);
    const _0x2f058b = {
      billingPostalCode: {
        selector: "#billingPostalCode, [name=\"billingPostalCode\"], [autocomplete=\"postal-code\"]",
        value: _0x9fa2f7.zip
      },
      billingAddress: {
        selector: "#billingAddressLine1, [name=\"billingAddressLine1\"]",
        value: _0x9fa2f7.address
      }
    };
    for (let [_0x586025, _0x4a47e4] of Object.entries(_0x2f058b)) {
      const _0x5c8a9a = document.querySelector(_0x4a47e4.selector);
      if (_0x5c8a9a) {
        simulateTyping(_0x5c8a9a, _0x4a47e4.value);
        await new Promise(_0x229671 => setTimeout(_0x229671, 100));
      }
    }
  }
  await new Promise(_0x50eaba => setTimeout(_0x50eaba, 1000));
  const _0x30d96f = document.querySelector(".SubmitButton-IconContainer, .SubmitButton-Button, button[type=\"submit\"]");
  if (_0x30d96f) {
    const _0x5a91e0 = _0x30d96f.closest("button") || _0x30d96f;
    _0x5a91e0.click();
  }
}
let port = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
function isExtensionValid() {
  try {
    return !!chrome.runtime && !!chrome.runtime.id;
  } catch (_0x3eebec) {
    return false;
  }
}
function safeStorageSet(_0x40e1c6) {
  try {
    if (isExtensionValid()) {
      markOwnWrite(Object.keys(_0x40e1c6));
      chrome.storage.local.set(_0x40e1c6);
    }
  } catch (_0xb947d9) {}
}
function safeStorageGet(_0x44648f, _0x2901b9) {
  try {
    if (isExtensionValid()) {
      chrome.storage.local.get(_0x44648f, _0x2901b9);
    }
  } catch (_0x24bdb3) {}
}
function safeStorageRemove(_0x27f668) {
  try {
    if (isExtensionValid()) {
      markOwnWrite(Array.isArray(_0x27f668) ? _0x27f668 : [_0x27f668]);
      chrome.storage.local.remove(_0x27f668);
    }
  } catch (_0x12042c) {}
}
function connectPort() {
  try {
    if (!isExtensionValid()) {
      return;
    }
    port = chrome.runtime.connect({
      name: "tyagrey-content"
    });
    reconnectAttempts = 0;
    port.onMessage.addListener(_0x4231b3 => {
      if (_0x4231b3.type === "PING") {}
    });
    port.onDisconnect.addListener(() => {
      port = null;
      if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        reconnectAttempts++;
        setTimeout(connectPort, reconnectAttempts * 1000);
      }
    });
  } catch (_0x339137) {
    port = null;
  }
}
connectPort();
setInterval(() => {
  if (!port && isExtensionValid()) {
    connectPort();
  }
}, 30000);
async function safeSendMessage(_0x2c1f1a, _0x4315f4 = 3) {
  for (let _0x1b8e2f = 0; _0x1b8e2f < _0x4315f4; _0x1b8e2f++) {
    try {
      if (!isExtensionValid()) {
        throw new Error("Extension context invalidated");
      }
      const _0x5d9885 = await chrome.runtime.sendMessage(_0x2c1f1a);
      return _0x5d9885;
    } catch (_0x4c41a7) {
      const _0x4b3510 = _0x4c41a7.message.includes("Extension context invalidated") || _0x4c41a7.message.includes("disconnected") || _0x4c41a7.message.includes("Receiving end does not exist") || _0x4c41a7.message.includes("Could not establish connection");
      if (_0x4b3510) {
        connectPort();
        if (_0x1b8e2f < _0x4315f4 - 1) {
          await new Promise(_0x2eed4c => setTimeout(_0x2eed4c, (_0x1b8e2f + 1) * 500));
          continue;
        }
        return {
          success: false,
          error: "Connection lost. Retrying..."
        };
      }
      throw _0x4c41a7;
    }
  }
  return {
    success: false,
    error: "Failed after retries"
  };
}
window.addEventListener("message", async function (_0x573c72) {
  if (_0x573c72.source !== window) {
    return;
  }
  if (!isExtensionValid()) {
    return;
  }
  switch (_0x573c72.data.type) {
    case "API_REQUEST":
      const {
        requestId: _0x18394c,
        endpoint: _0x2bee68,
        payload: _0x5ab8b1
      } = _0x573c72.data;
      try {
        const _0x58691e = await safeSendMessage({
          type: "API_REQUEST",
          endpoint: _0x2bee68,
          payload: _0x5ab8b1
        });
        window.postMessage({
          type: "API_RESPONSE",
          requestId: _0x18394c,
          data: _0x58691e || {
            success: false,
            error: "No response"
          }
        }, "*");
      } catch (_0x3d4e71) {
        window.postMessage({
          type: "API_RESPONSE",
          requestId: _0x18394c,
          data: {
            success: false,
            error: _0x3d4e71.message
          }
        }, "*");
      }
      break;
    case "AUTOFILL_FIELDS":
      checkAndFillFields();
      break;
    case "GET_SAVED_BIN":
      safeStorageGet([K.SAVED_BINS], function (_0x1b295a) {
        var _0x6541c3 = _0x1b295a[K.SAVED_BINS];
        var _0x1072e6 = Array.isArray(_0x6541c3) ? _0x6541c3[0] || "" : _0x6541c3 || "";
        window.postMessage({
          type: "UPDATE_SAVED_BIN",
          bin: _0x1072e6
        }, "*");
      });
      break;
    case "GET_SAVED_ID":
      safeStorageGet([K.SAVED_ID], function (_0x169d28) {
        window.postMessage({
          type: "UPDATE_SAVED_ID",
          id: _0x169d28[K.SAVED_ID] || ""
        }, "*");
      });
      break;
    case "PLAY_SUCCESS_SOUND":
      safeSendMessage({
        type: "PLAY_SUCCESS_SOUND_OFFSCREEN"
      }).catch(() => {});
      break;
    case "PLAY_HIT_SOUND":
      safeSendMessage({
        type: "PLAY_SUCCESS_SOUND_OFFSCREEN"
      }).catch(() => {});
      break;
    case "CAPTURE_SCREENSHOT_REQUEST":
      safeSendMessage({
        type: "CAPTURE_SCREENSHOT"
      }).then(_0x4749f3 => {
        if (_0x4749f3 && _0x4749f3.dataUrl) {
          window.postMessage({
            type: "SCREENSHOT_RESULT",
            dataUrl: _0x4749f3.dataUrl
          }, "*");
        } else {
          window.postMessage({
            type: "SCREENSHOT_ERROR",
            error: "Failed to capture"
          }, "*");
        }
      }).catch(_0xd662f3 => {
        window.postMessage({
          type: "SCREENSHOT_ERROR",
          error: _0xd662f3.message
        }, "*");
      });
      break;
    case "PLAY_CUSTOM_PREVIEW":
      safeSendMessage({
        type: "PLAY_CUSTOM_PREVIEW"
      }).catch(() => {});
      break;
    case "STOP_CUSTOM_PREVIEW":
      safeSendMessage({
        type: "STOP_CUSTOM_PREVIEW"
      }).catch(() => {});
      break;
    case "PLAY_BACKGROUND_MUSIC":
      safeSendMessage({
        type: "PLAY_BACKGROUND_MUSIC",
        volume: _0x573c72.data.volume
      }).catch(() => {});
      break;
    case "STOP_BACKGROUND_MUSIC":
      safeSendMessage({
        type: "STOP_BACKGROUND_MUSIC"
      }).catch(() => {});
      break;
    case "SAVE_CUSTOM_MUSIC":
      try {
        if (isExtensionValid()) {
          var _0x23aaea = {
            [K.MUSIC_DATA]: _0x573c72.data.audioData
          };
          chrome.storage.local.set(_0x23aaea, () => {
            window.postMessage({
              type: "CUSTOM_MUSIC_SAVED",
              success: true
            }, "*");
          });
        }
      } catch (_0x7579fe) {}
      break;
    case "REMOVE_CUSTOM_MUSIC":
      try {
        if (isExtensionValid()) {
          chrome.storage.local.remove([K.MUSIC_DATA]);
        }
      } catch (_0x77e208) {}
      break;
    case "SAVE_TOGGLE_STATE":
      var _0x3b97c2 = _0x573c72.data.toggleType;
      var _0x9f2373 = _0x573c72.data.value;
      var _0x43a619 = {};
      if (_0x3b97c2 === "hitSound") {
        _0x43a619[K.TOGGLE_HIT_SOUND] = _0x9f2373;
      } else if (_0x3b97c2 === "autoSS") {
        _0x43a619[K.TOGGLE_AUTO_SS] = _0x9f2373;
      } else if (_0x3b97c2 === "tgForward") {
        _0x43a619[K.TOGGLE_TG_FORWARD] = _0x9f2373;
      }
      if (Object.keys(_0x43a619).length) {
        safeStorageSet(_0x43a619);
      }
      break;
    case "GET_TOGGLE_STATES":
      safeStorageGet([K.TOGGLE_HIT_SOUND, K.TOGGLE_AUTO_SS, K.TOGGLE_TG_FORWARD], function (_0x554a76) {
        window.postMessage({
          type: "UPDATE_TOGGLE_STATES",
          hitSoundEnabled: _0x554a76[K.TOGGLE_HIT_SOUND] !== false,
          autoSSEnabled: _0x554a76[K.TOGGLE_AUTO_SS] !== false,
          tgForwardEnabled: _0x554a76[K.TOGGLE_TG_FORWARD] || false
        }, "*");
      });
      break;
    case "SAVE_ID":
      var _0x1819f3 = {
        [K.SAVED_ID]: _0x573c72.data.id
      };
      safeStorageSet(_0x1819f3);
      break;
    case "SAVE_BIN":
      if (Array.isArray(_0x573c72.data.bins)) {
        var _0x4637ea = {
          [K.SAVED_BINS]: _0x573c72.data.bins
        };
        safeStorageSet(_0x4637ea);
      } else {
        var _0x1e3755 = {
          [K.SAVED_BINS]: [_0x573c72.data.bin]
        };
        safeStorageSet(_0x1e3755);
      }
      break;
    case "SAVE_LOGIN_STATE":
      if (_0x573c72.data.token) {
        safeStorageGet([K.TOKEN], function (_0x57610c) {
          var _0x152943 = _0x57610c && _0x57610c[K.TOKEN] ? String(_0x57610c[K.TOKEN]) : "";
          var _0x48b4c5 = String(_0x573c72.data.token || "");
          var _0xa8081c = !!_0x152943 && _0x152943 !== _0x48b4c5;
          if (_0xa8081c) {
            safeStorageRemove(["tyagrey_my_hits_cache", "tya_local_history", "tya_local_hits", "tya_local_attempts", "tyagrey_pending_hits", "tyagrey_uploaded_hit_keys", "tyagrey_last_notification_sync"]);
          }
          var _0x191b0e = {
            [K.TOKEN]: _0x48b4c5,
            [K.USER_ID]: _0x573c72.data.userId || "",
            [K.FIRST_NAME]: _0x573c72.data.firstName || ""
          };
          safeStorageSet(_0x191b0e);
        });
      } else {
        safeStorageRemove([K.TOKEN, K.USER_ID, K.FIRST_NAME, "tyagrey_my_hits_cache", "tya_local_history", "tya_local_hits", "tya_local_attempts", "tyagrey_pending_hits", "tyagrey_uploaded_hit_keys", "tyagrey_last_notification_sync"]);
      }
      break;
    case "GET_LOGIN_STATE":
      safeStorageGet([K.TOKEN, K.USER_ID, K.FIRST_NAME], function (_0x59f8fb) {
        window.postMessage({
          type: "UPDATE_LOGIN_STATE",
          token: _0x59f8fb[K.TOKEN] || "",
          userId: _0x59f8fb[K.USER_ID] || "",
          firstName: _0x59f8fb[K.FIRST_NAME] || ""
        }, "*");
      });
      break;
    case "SEND_TELEGRAM_NOTIFICATION":
      console.log("[TYAgrey][Content] Forwarding SEND_TELEGRAM_NOTIFICATION to background");
      safeSendMessage({
        type: "SEND_TELEGRAM_NOTIFICATION",
        data: _0x573c72.data.data
      }).then(_0x36c98a => {
        console.log("[TYAgrey][Content] Notification forwarded, response:", _0x36c98a);
      }).catch(_0x51bd8e => {
        console.error("[TYAgrey][Content] Failed to forward notification:", _0x51bd8e);
      });
      break;
    case "GET_MUSIC_URL":
      try {
        if (isExtensionValid()) {
          const _0x61159 = chrome.runtime.getURL("sounds/music.mp3");
          window.postMessage({
            type: "MUSIC_URL",
            url: _0x61159
          }, "*");
        }
      } catch (_0xf5a876) {}
      break;
    case "COPY_TO_CLIPBOARD_TEXT":
      if (_0x573c72.data.text) {
        navigator.clipboard.writeText(_0x573c72.data.text).catch(() => {
          const _0x562755 = document.createElement("textarea");
          _0x562755.value = _0x573c72.data.text;
          _0x562755.style.position = "fixed";
          _0x562755.style.left = "-9999px";
          document.body.appendChild(_0x562755);
          _0x562755.select();
          document.execCommand("copy");
          document.body.removeChild(_0x562755);
        });
      }
      break;
    case "APPLY_PROXY":
      safeSendMessage({
        type: "APPLY_PROXY",
        proxy: _0x573c72.data.proxy
      }).then(_0x66fc60 => {
        window.postMessage({
          type: "PROXY_RESULT",
          action: "apply",
          success: _0x66fc60 && _0x66fc60.success,
          error: _0x66fc60 && _0x66fc60.error
        }, "*");
      }).catch(_0x220f74 => {
        window.postMessage({
          type: "PROXY_RESULT",
          action: "apply",
          success: false,
          error: _0x220f74.message
        }, "*");
      });
      break;
    case "CLEAR_PROXY":
      safeSendMessage({
        type: "CLEAR_PROXY"
      }).then(_0x263d40 => {
        window.postMessage({
          type: "PROXY_RESULT",
          action: "clear",
          success: _0x263d40 && _0x263d40.success
        }, "*");
      }).catch(() => {
        window.postMessage({
          type: "PROXY_RESULT",
          action: "clear",
          success: true
        }, "*");
      });
      break;
  }
});
function isPaymentPage() {
  const _0x1a63b4 = window.location.href.toLowerCase();
  const _0x2543e6 = window.location.hostname.toLowerCase();
  const _0x225675 = window.location.pathname.toLowerCase();
  const _0x595bfe = ["billing.gamma.app", "secure.aftershoot.com", "pay.openai.com", "pay.openai.com", "checkout.stripe.com", "chatgpt.com", "pay.krea.ai", "buy.stripe.com"];
  for (const _0x441a4a of _0x595bfe) {
    if (_0x2543e6 === _0x441a4a || _0x2543e6.endsWith("." + _0x441a4a)) {
      return true;
    }
  }
  if (_0x2543e6.endsWith(".stripe.com") || _0x2543e6 === "stripe.com") {
    return true;
  }
  if (_0x2543e6.startsWith("checkout.")) {
    return true;
  }
  if (_0x1a63b4.includes("/c/pay/cs_live")) {
    return true;
  }
  if (_0x1a63b4.includes("/c/pay/cs_test")) {
    return true;
  }
  if (_0x1a63b4.includes("cs_live_")) {
    return true;
  }
  if (_0x1a63b4.includes("cs_test_")) {
    return true;
  }
  if (_0x1a63b4.includes("/checkout/openai_llc/cs_live_")) {
    return true;
  }
  if (_0x1a63b4.includes("checkout.stripe.com/c/pay")) {
    return true;
  }
  if (_0x1a63b4.includes("secure.aftershoot.com/c/pay")) {
    return true;
  }
  if (_0x1a63b4.includes("secure.aftershoot.com/checkout")) {
    return true;
  }
  if (_0x1a63b4.includes("secure.aftershoot.com/c/pay/cs_live")) {
    return true;
  }
  if (_0x1a63b4.includes("secure.aftershoot.com/c/pay/cs_live_")) {
    return true;
  }
  if (_0x1a63b4.includes("/p/session/")) {
    return true;
  }
  if (_0x1a63b4.includes("chatgpt.com/checkout")) {
    return true;
  }
  if (_0x1a63b4.includes("chatgpt.com/checkout/openai_llc/cs_live")) {
    return true;
  }
  if (_0x1a63b4.includes("pay.krea.ai/c/pay")) {
    return true;
  }
  if (_0x1a63b4.includes("get.hotspotshield.com/trial")) {
    return true;
  }
  if (_0x1a63b4.includes("buy.stripe.com/5kQcN60zyeb8gng2k9csI0k")) {
    return true;
  }
  if (_0x1a63b4.includes("payments.spotify.com/checkout")) {
    return true;
  }
  if (_0x1a63b4.includes("account.proton.me/refer-a-friend/signup")) {
    return true;
  }
  if (_0x225675.includes("/checkout")) {
    return true;
  }
  if (_0x225675.includes("/c/pay/")) {
    return true;
  }
  return false;
}
function hasStripeElements() {
  const _0x10b938 = window.location.href.toLowerCase();
  const _0xdd8960 = window.location.hostname.toLowerCase();
  if (_0x10b938.includes("cs_live") || _0x10b938.includes("cs_test")) {
    return true;
  }
  if (_0xdd8960.startsWith("checkout.")) {
    return true;
  }
  if (!_0xdd8960.includes("stripe") && !_0xdd8960.includes("pay") && !_0xdd8960.includes("checkout") && !_0xdd8960.includes("billing") && !_0xdd8960.includes("gamma") && !_0xdd8960.includes("aftershoot") && !_0xdd8960.includes("openai") && !_0xdd8960.includes("krea") && !_0xdd8960.includes("hotspotshield") && !_0xdd8960.includes("spotify") && !_0xdd8960.includes("proton") && !_0xdd8960.includes("expressvpn")) {
    return false;
  }
  if (document.querySelector("iframe[src*=\"stripe\"]")) {
    return true;
  }
  if (document.querySelector("iframe[name*=\"stripe\"]")) {
    return true;
  }
  if (document.querySelector("[class*=\"SubmitButton\"]")) {
    return true;
  }
  if (document.querySelector("#cardNumber")) {
    return true;
  }
  return false;
}
function injectStyles() {
  if (!isExtensionValid()) {
    return;
  }
  if (document.getElementById("luisHitterStyles")) {
    return;
  }
  try {
    const _0x50345a = document.createElement("link");
    _0x50345a.id = "luisHitterStyles";
    _0x50345a.rel = "stylesheet";
    _0x50345a.href = chrome.runtime.getURL("design/styles.css");
    (document.head || document.documentElement).appendChild(_0x50345a);
  } catch (_0x2011a9) {}
}
function injectScript() {
  if (!isExtensionValid()) {
    return;
  }
  if (window !== window.top) {
    return;
  }
  if (window.__luisHitterInjected) {
    return;
  }
  window.__luisHitterInjected = true;
  if (document.querySelector("script[data-luis-hitter]")) {
    return;
  }
  injectStyles();
  try {
    const _0x2433dc = document.createElement("meta");
    _0x2433dc.name = "tyagrey-default-pfp";
    _0x2433dc.content = chrome.runtime.getURL("icons/icon128.png");
    document.head.appendChild(_0x2433dc);
  } catch (_0x22d6ef) {}
  const _0x405bbc = ["script/storage.js", "script/autofill.js", "script/proxyhandler.js"];
  try {
    let _0x1fe483 = 0;
    const _0x1ff50d = _0x405bbc.length;
    function _0x1d602e() {
      const _0x498a04 = document.createElement("script");
      _0x498a04.src = chrome.runtime.getURL("script/inject.js");
      _0x498a04.setAttribute("data-icon-url", chrome.runtime.getURL("icons/icon128.png"));
      _0x498a04.setAttribute("data-luis-hitter", "true");
      _0x498a04.onload = function () {
        this.remove();
      };
      (document.head || document.documentElement).appendChild(_0x498a04);
    }
    _0x405bbc.forEach(_0x3589e6 => {
      const _0x1163ed = document.createElement("script");
      _0x1163ed.src = chrome.runtime.getURL(_0x3589e6);
      _0x1163ed.onload = function () {
        _0x1fe483++;
        if (_0x1fe483 === _0x1ff50d) {
          setTimeout(_0x1d602e, 50);
        }
        this.remove();
      };
      _0x1163ed.onerror = function () {
        _0x1fe483++;
        if (_0x1fe483 === _0x1ff50d) {
          setTimeout(_0x1d602e, 50);
        }
      };
      (document.head || document.documentElement).appendChild(_0x1163ed);
    });
    setTimeout(() => {
      if (_0x1fe483 < _0x1ff50d) {
        _0x1d602e();
      }
    }, 2000);
  } catch (_0x13c17f) {}
}
function checkAndInject() {
  if (isPaymentPage() || hasStripeElements()) {
    injectScript();
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkAndInject);
} else {
  checkAndInject();
}
setTimeout(checkAndInject, 1000);
setTimeout(checkAndInject, 3000);
const observer = new MutationObserver(() => {
  if (!window.__luisHitterInjected && (isPaymentPage() || hasStripeElements())) {
    injectScript();
    observer.disconnect();
  }
});
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});
setTimeout(() => observer.disconnect(), 10000);
