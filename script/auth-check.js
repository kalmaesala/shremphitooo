document.addEventListener("DOMContentLoaded", () => {
  checkAuthentication();
});
function checkAuthentication() {
  chrome.storage.local.get(["tyagrey_token"], _0x1a86fb => {
    if (_0x1a86fb.tyagrey_token) {
      window.location.href = "popup.html";
    } else {
      chrome.tabs.create({
        url: chrome.runtime.getURL("design/login.html")
      });
      window.close();
    }
  });
}
