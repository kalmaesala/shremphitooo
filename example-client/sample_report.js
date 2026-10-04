// Example: send a hit report from Node or browser (fetch compatible)
// Usage (node): node sample_report.js

const fetch = globalThis.fetch || (await import('node-fetch')).default;

async function sendHit(apiUrl, telegramId, code, resultText) {
  const res = await fetch(apiUrl + '/api/addon/report-hit', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ telegram_id: telegramId, code, resultText })
  });
  return res.json();
}

if (require.main === module) {
  const apiUrl = 'http://localhost:5000';
  const telegramId = process.argv[2] || 'YOUR_TG_ID';
  const code = process.argv[3] || '123456';
  const resultText = process.argv[4] || 'Sample hit from script';
  sendHit(apiUrl, telegramId, code, resultText).then(console.log).catch(console.error);
}
