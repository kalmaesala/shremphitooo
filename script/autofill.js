(function () {
  'use strict';

  window.__tyagrey_AUTOFILL_LOADED = true;
  window.tyagreyAutofill = window.tyagreyAutofill || {};
  tyagreyAutofill.CARD_FIELD_SELECTORS = ["#cardNumber", "[name=\"cardNumber\"]", "[autocomplete=\"cc-number\"]", "[data-elements-stable-field-name=\"cardNumber\"]", "input[placeholder*=\"Card number\"]", "input[placeholder*=\"card number\"]", "input[aria-label*=\"Card number\"]", "[class*=\"CardNumberInput\"] input", "[class*=\"cardNumber\"] input", "input[name=\"number\"]", "input[id*=\"card-number\"]", "input[name*=\"card_number\"]", "input[placeholder*=\"0000\"]", "input[placeholder*=\"1234\"]"];
  tyagreyAutofill.EXPIRY_FIELD_SELECTORS = ["#cardExpiry", "[name=\"cardExpiry\"]", "[autocomplete=\"cc-exp\"]", "[data-elements-stable-field-name=\"cardExpiry\"]", "input[placeholder*=\"MM / YY\"]", "input[placeholder*=\"MM/YY\"]", "input[placeholder*=\"MM\"]", "input[aria-label*=\"expir\"]", "[class*=\"CardExpiry\"] input", "[class*=\"expiry\"] input", "input[name=\"expiry\"]", "input[name=\"exp\"]"];
  tyagreyAutofill.CVC_FIELD_SELECTORS = ["#cardCvc", "[name=\"cardCvc\"]", "[autocomplete=\"cc-csc\"]", "[data-elements-stable-field-name=\"cardCvc\"]", "input[placeholder*=\"CVC\"]", "input[placeholder*=\"CVV\"]", "input[aria-label*=\"CVC\"]", "input[aria-label*=\"CVV\"]", "input[aria-label*=\"security code\"]", "input[aria-label*=\"Security code\"]", "[class*=\"CardCvc\"] input", "[class*=\"cvc\"] input", "input[name=\"cvc\"]", "input[name=\"cvv\"]"];
  tyagreyAutofill.NAME_FIELD_SELECTORS = ["#billingName", "[name=\"billingName\"]", "[autocomplete=\"cc-name\"]", "[autocomplete=\"name\"]", "input[placeholder*=\"Name on card\"]", "input[placeholder*=\"name on card\"]", "input[aria-label*=\"Name\"]", "[class*=\"billingName\"] input", "input[name=\"name\"]"];
  tyagreyAutofill.EMAIL_FIELD_SELECTORS = ["input[type=\"email\"]", "input[name*=\"email\"]", "input[autocomplete=\"email\"]", "input[id*=\"email\"]", "input[placeholder*=\"email\"]", "input[placeholder*=\"Email\"]", "[class*=\"email\"] input", "input[aria-label*=\"email\"]"];
  tyagreyAutofill.ADDRESS_FIELD_SELECTORS = ["#billingAddressLine1", "[name=\"billingAddressLine1\"]", "[autocomplete=\"address-line1\"]"];
  tyagreyAutofill.CITY_FIELD_SELECTORS = ["#billingLocality", "[name=\"billingLocality\"]", "[autocomplete=\"address-level2\"]"];
  tyagreyAutofill.POSTAL_FIELD_SELECTORS = ["#billingPostalCode", "[name=\"billingPostalCode\"]", "[autocomplete=\"postal-code\"]"];
  tyagreyAutofill.COUNTRY_FIELD_SELECTORS = ["#billingCountry", "[name=\"billingCountry\"]", "[autocomplete=\"country\"]"];
  tyagreyAutofill.SUBMIT_BUTTON_SELECTORS = [".SubmitButton", "[class*=\"SubmitButton\"]", "button[type=\"submit\"]", "[data-testid*=\"submit\"]", "[data-testid*=\"pay\"]"];
  tyagreyAutofill.wait = function (_0x252162) {
    return new Promise(_0x592104 => setTimeout(_0x592104, _0x252162));
  };
  tyagreyAutofill.hasCardFields = function () {
    for (const _0x513259 of tyagreyAutofill.CARD_FIELD_SELECTORS) {
      if (document.querySelector(_0x513259)) {
        return true;
      }
    }
    if (document.querySelector("[class*=\"StripeElement\"], [class*=\"CardElement\"]")) {
      return true;
    }
    return false;
  };
  tyagreyAutofill.hasSubmitButton = function () {
    for (const _0x389c09 of tyagreyAutofill.SUBMIT_BUTTON_SELECTORS) {
      try {
        if (document.querySelector(_0x389c09)) {
          return true;
        }
      } catch (_0x3d8a85) {}
    }
    return false;
  };
  tyagreyAutofill.findField = function (_0x444846) {
    for (const _0x11833e of _0x444846) {
      try {
        const _0x1b0846 = document.querySelector(_0x11833e);
        if (_0x1b0846) {
          return _0x1b0846;
        }
      } catch (_0x4b4d51) {}
    }
    return null;
  };
  tyagreyAutofill.findAndClickField = async function (_0x462e06, _0x144198) {
    for (const _0x4d86bc of _0x462e06) {
      try {
        const _0x5dfac2 = document.querySelectorAll(_0x4d86bc);
        for (const _0x491e31 of _0x5dfac2) {
          const _0x33ec0e = _0x491e31.getBoundingClientRect();
          if (_0x33ec0e.width > 0 && _0x33ec0e.height > 0) {
            _0x491e31.click();
            _0x491e31.focus?.();
            await tyagreyAutofill.wait(50);
            return true;
          }
        }
      } catch (_0x1368c7) {}
    }
    return false;
  };
  tyagreyAutofill.simulateInput = function (_0x48bf99, _0x2ca7ab) {
    if (!_0x48bf99) {
      return;
    }
    const _0x3503fa = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    const _0x3958b3 = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set;
    if (_0x48bf99.tagName === "INPUT" && _0x3503fa) {
      _0x3503fa.call(_0x48bf99, _0x2ca7ab);
    } else if (_0x48bf99.tagName === "TEXTAREA" && _0x3958b3) {
      _0x3958b3.call(_0x48bf99, _0x2ca7ab);
    } else {
      _0x48bf99.value = _0x2ca7ab;
    }
    _0x48bf99.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    _0x48bf99.dispatchEvent(new Event("change", {
      bubbles: true
    }));
    _0x48bf99.dispatchEvent(new Event("blur", {
      bubbles: true
    }));
  };
  tyagreyAutofill.simulateSelectChange = function (_0x46fa05, _0x518e05) {
    if (!_0x46fa05) {
      return;
    }
    _0x46fa05.value = _0x518e05;
    _0x46fa05.dispatchEvent(new Event("change", {
      bubbles: true
    }));
    _0x46fa05.dispatchEvent(new Event("input", {
      bubbles: true
    }));
  };
  tyagreyAutofill.typeText = async function (_0x2e6c05, _0x2c1e78 = 10) {
    for (const _0x222faa of _0x2e6c05) {
      const _0x1cfd93 = new KeyboardEvent("keydown", {
        key: _0x222faa,
        code: "Key" + _0x222faa.toUpperCase(),
        charCode: _0x222faa.charCodeAt(0),
        keyCode: _0x222faa.charCodeAt(0),
        which: _0x222faa.charCodeAt(0),
        bubbles: true,
        cancelable: true
      });
      const _0x12b3f0 = new KeyboardEvent("keypress", {
        key: _0x222faa,
        code: "Key" + _0x222faa.toUpperCase(),
        charCode: _0x222faa.charCodeAt(0),
        keyCode: _0x222faa.charCodeAt(0),
        which: _0x222faa.charCodeAt(0),
        bubbles: true,
        cancelable: true
      });
      const _0x9bb143 = new InputEvent("input", {
        data: _0x222faa,
        inputType: "insertText",
        bubbles: true,
        cancelable: true
      });
      const _0xf93156 = new KeyboardEvent("keyup", {
        key: _0x222faa,
        code: "Key" + _0x222faa.toUpperCase(),
        charCode: _0x222faa.charCodeAt(0),
        keyCode: _0x222faa.charCodeAt(0),
        which: _0x222faa.charCodeAt(0),
        bubbles: true,
        cancelable: true
      });
      document.activeElement?.dispatchEvent(_0x1cfd93);
      document.activeElement?.dispatchEvent(_0x12b3f0);
      document.activeElement?.dispatchEvent(_0x9bb143);
      document.activeElement?.dispatchEvent(_0xf93156);
      await tyagreyAutofill.wait(_0x2c1e78);
    }
  };
  tyagreyAutofill.pressTab = async function () {
    const _0x4ef717 = new KeyboardEvent("keydown", {
      key: "Tab",
      code: "Tab",
      keyCode: 9,
      which: 9,
      bubbles: true
    });
    const _0x5a9367 = new KeyboardEvent("keyup", {
      key: "Tab",
      code: "Tab",
      keyCode: 9,
      which: 9,
      bubbles: true
    });
    document.activeElement?.dispatchEvent(_0x4ef717);
    document.activeElement?.dispatchEvent(_0x5a9367);
    await tyagreyAutofill.wait(50);
  };
  tyagreyAutofill.isInvoiceStripePage = function () {
    const _0x81f37 = window.location.href;
    return _0x81f37.includes("invoice.stripe.com") || _0x81f37.includes("/invoice/");
  };
  tyagreyAutofill.isCheckoutStripePage = function () {
    const _0x41d513 = window.location.href;
    return _0x41d513.includes("checkout.stripe.com");
  };
  tyagreyAutofill.isPaymentPage = function () {
    const _0xd2d14f = window.location.href;
    if (_0xd2d14f.includes("checkout.stripe.com") || _0xd2d14f.includes("invoice.stripe.com")) {
      return true;
    }
    if (tyagreyAutofill.hasCardFields()) {
      return true;
    }
    if (document.querySelector("[class*=\"StripeElement\"], [class*=\"PaymentElement\"]")) {
      return true;
    }
    return false;
  };
  tyagreyAutofill.simulateStripeElementsInput = async function (_0x353788, _0x28bb55, _0x1ae1c4, _0x32231d) {
    const _0x4b51fa = ["[class*=\"CardNumberElement\"]", "[class*=\"cardNumber\"]", "[data-field=\"number\"]", "iframe[title*=\"card number\" i]", "iframe[name*=\"cardNumber\"]", "input[placeholder*=\"0000\"]", "input[placeholder*=\"1234\"]", "input[autocomplete=\"cc-number\"]", "[class*=\"CardNumber\"] input", "[class*=\"card-number\"] input"];
    let _0x3ddae3 = await tyagreyAutofill.findAndClickField(_0x4b51fa, "card number");
    if (!_0x3ddae3) {
      const _0x5b305c = document.querySelectorAll("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"]");
      for (const _0x53cf49 of _0x5b305c) {
        const _0x733fc0 = _0x53cf49.getBoundingClientRect();
        if (_0x733fc0.width > 100 && _0x733fc0.height > 20) {
          _0x53cf49.click();
          await tyagreyAutofill.wait(80);
          _0x3ddae3 = true;
          break;
        }
      }
    }
    if (!_0x3ddae3) {
      const _0x3f1d32 = document.querySelector("[class*=\"payment\"], [class*=\"Payment\"], [class*=\"card\"], [class*=\"Card\"], form");
      if (_0x3f1d32) {
        const _0x228054 = _0x3f1d32.querySelector("input[type=\"text\"], input:not([type]), [contenteditable]");
        if (_0x228054) {
          _0x228054.click();
          _0x228054.focus?.();
          await tyagreyAutofill.wait(50);
          _0x3ddae3 = true;
        }
      }
    }
    if (_0x3ddae3) {
      await tyagreyAutofill.typeText(_0x353788, 8);
      await tyagreyAutofill.wait(80);
      await tyagreyAutofill.pressTab();
      await tyagreyAutofill.typeText(_0x28bb55 + _0x1ae1c4, 8);
      await tyagreyAutofill.wait(80);
      await tyagreyAutofill.pressTab();
      await tyagreyAutofill.typeText(_0x32231d, 8);
      await tyagreyAutofill.wait(80);
    }
  };
  tyagreyAutofill.fillStripeElementsIframes = async function (_0x2fb38a, _0x4e54e3, _0x446694, _0x3e6cc2) {
    const _0x32aa76 = document.querySelectorAll("iframe[name*=\"__privateStripeFrame\"], iframe[title*=\"Secure\"], iframe[src*=\"stripe\"]");
    for (const _0x31d2c6 of _0x32aa76) {
      try {
        const _0x399231 = _0x31d2c6.getBoundingClientRect();
        if (_0x399231.width > 0 && _0x399231.height > 0) {
          _0x31d2c6.click();
          await tyagreyAutofill.wait(30);
        }
      } catch (_0x3f5b4f) {}
    }
    const _0x564e6c = document.querySelectorAll("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"]");
    for (const _0x43039c of _0x564e6c) {
      const _0x5b24a6 = _0x43039c.getBoundingClientRect();
      if (_0x5b24a6.width > 0 && _0x5b24a6.height > 0) {
        _0x43039c.click();
        await tyagreyAutofill.wait(30);
      }
    }
    if (tyagreyAutofill.isInvoiceStripePage()) {
      await tyagreyAutofill.simulateStripeElementsInput(_0x2fb38a, _0x4e54e3, _0x446694, _0x3e6cc2);
    }
  };
  tyagreyAutofill.randomHumanNames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Dorothy", "Tyaberly", "Emily", "Donna", "Michelle", "Alex", "Chris", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Quinn", "Avery", "Cameron"];
  tyagreyAutofill.getRandomName = function () {
    return tyagreyAutofill.randomHumanNames[Math.floor(Math.random() * tyagreyAutofill.randomHumanNames.length)];
  };
  tyagreyAutofill.getRandomEmail = function () {
    const _0xafa9a2 = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"];
    const _0xebbd2f = tyagreyAutofill.randomHumanNames[Math.floor(Math.random() * tyagreyAutofill.randomHumanNames.length)].toLowerCase();
    const _0x128a38 = Math.floor(Math.random() * 9999);
    const _0x104fe7 = _0xafa9a2[Math.floor(Math.random() * _0xafa9a2.length)];
    return _0xebbd2f + _0x128a38 + "@" + _0x104fe7;
  };
  tyagreyAutofill.getRandomStreet = function () {
    const _0x20d63c = ["Main Street", "Oak Road", "Park Avenue", "Maple Drive", "Cedar Lane", "Pine Street", "Lake Drive", "Forest Avenue"];
    const _0x463960 = Math.floor(Math.random() * 999) + 1;
    return _0x463960 + " " + _0x20d63c[Math.floor(Math.random() * _0x20d63c.length)];
  };
})();
