window.__tyagrey_OFFSCREEN_LOADED = true;
let customPreviewAudio = null;
let backgroundMusicAudio = null;
function playSuccessSound() {
  try {
    const _0x370a2d = document.getElementById("hitSound");
    if (_0x370a2d) {
      _0x370a2d.currentTime = 0;
      _0x370a2d.volume = 0.5;
      _0x370a2d.play().catch(_0x19fc25 => {
        playFallbackSound();
      });
    } else {
      playFallbackSound();
    }
  } catch (_0x2b4ca3) {
    playFallbackSound();
  }
}
function playBackgroundMusic(_0x1b9325, _0x5e1742) {
  if (!_0x1b9325) {
    return;
  }
  try {
    stopBackgroundMusic();
    backgroundMusicAudio = new Audio(_0x1b9325);
    backgroundMusicAudio.loop = true;
    backgroundMusicAudio.volume = _0x5e1742 || 0.5;
    backgroundMusicAudio.play().catch(_0x2b4364 => {});
  } catch (_0x40c64a) {}
}
function stopBackgroundMusic() {
  try {
    if (backgroundMusicAudio) {
      backgroundMusicAudio.pause();
      backgroundMusicAudio.currentTime = 0;
      backgroundMusicAudio = null;
    }
  } catch (_0x2df3af) {}
}
function playCustomPreview(_0x431957) {
  if (!_0x431957) {
    return;
  }
  try {
    if (customPreviewAudio) {
      customPreviewAudio.pause();
      customPreviewAudio = null;
    }
    customPreviewAudio = new Audio(_0x431957);
    customPreviewAudio.volume = 0.5;
    customPreviewAudio.play().catch(_0xa986b8 => {});
  } catch (_0x402c4b) {}
}
function stopCustomPreview() {
  try {
    if (customPreviewAudio) {
      customPreviewAudio.pause();
      customPreviewAudio.currentTime = 0;
      customPreviewAudio = null;
    }
  } catch (_0x1a927b) {}
}
function playFallbackSound() {
  try {
    const _0x491eef = new (window.AudioContext || window.webkitAudioContext)();
    const _0x5dd189 = (_0x43f577, _0x2fb486, _0x402e72) => {
      const _0x5cd684 = _0x491eef.createOscillator();
      const _0x2aa645 = _0x491eef.createGain();
      _0x5cd684.connect(_0x2aa645);
      _0x2aa645.connect(_0x491eef.destination);
      _0x5cd684.frequency.value = _0x43f577;
      _0x5cd684.type = "sine";
      _0x2aa645.gain.setValueAtTime(0.3, _0x2fb486);
      _0x2aa645.gain.exponentialRampToValueAtTime(0.01, _0x2fb486 + _0x402e72);
      _0x5cd684.start(_0x2fb486);
      _0x5cd684.stop(_0x2fb486 + _0x402e72);
    };
    const _0x4fa1e6 = _0x491eef.currentTime;
    _0x5dd189(523.25, _0x4fa1e6, 0.15);
    _0x5dd189(659.25, _0x4fa1e6 + 0.12, 0.15);
    _0x5dd189(783.99, _0x4fa1e6 + 0.24, 0.15);
    _0x5dd189(1046.5, _0x4fa1e6 + 0.36, 0.3);
  } catch (_0x4387ac) {}
}
async function copyToClipboard(_0xb4faba) {
  try {
    const _0x2520b9 = document.getElementById("imageCanvas");
    const _0x1d596c = _0x2520b9.getContext("2d");
    const _0x182899 = new Image();
    _0x182899.crossOrigin = "anonymous";
    _0x182899.onload = async () => {
      _0x2520b9.width = _0x182899.width;
      _0x2520b9.height = _0x182899.height;
      _0x1d596c.drawImage(_0x182899, 0, 0);
      _0x2520b9.toBlob(async _0x8e9b61 => {
        try {
          await navigator.clipboard.write([new ClipboardItem({
            "image/png": _0x8e9b61
          })]);
        } catch (_0x239f93) {}
      }, "image/png");
    };
    _0x182899.src = _0xb4faba;
  } catch (_0x43c780) {}
}
chrome.runtime.onMessage.addListener((_0x138174, _0xf365d, _0xfdebe3) => {
  if (_0x138174.type === "PLAY_SUCCESS_SOUND") {
    playSuccessSound();
    _0xfdebe3({
      success: true
    });
  } else if (_0x138174.type === "PLAY_BACKGROUND_MUSIC") {
    playBackgroundMusic(_0x138174.audioData, _0x138174.volume);
    _0xfdebe3({
      success: true
    });
  } else if (_0x138174.type === "STOP_BACKGROUND_MUSIC") {
    stopBackgroundMusic();
    _0xfdebe3({
      success: true
    });
  } else if (_0x138174.type === "PLAY_CUSTOM_PREVIEW") {
    playCustomPreview(_0x138174.audioData);
    _0xfdebe3({
      success: true
    });
  } else if (_0x138174.type === "STOP_CUSTOM_PREVIEW") {
    stopCustomPreview();
    _0xfdebe3({
      success: true
    });
  } else if (_0x138174.type === "COPY_TO_CLIPBOARD") {
    copyToClipboard(_0x138174.dataUrl);
    _0xfdebe3({
      success: true
    });
  }
  return true;
});
document.addEventListener("DOMContentLoaded", () => {
  const _0x541ce2 = document.getElementById("hitSound");
  if (_0x541ce2) {
    _0x541ce2.load();
  }
});
