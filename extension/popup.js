document.getElementById('request').addEventListener('click', async ()=>{
  const telegramId = document.getElementById('telegramId').value;
  if(!telegramId){ alert('ادخل Telegram ID'); return; }
  const res = await fetch('/api/addon/request-activation', {
    method: 'POST', headers: {'content-type':'application/json'},
    body: JSON.stringify({ telegram_id: telegramId })
  });
  const j = await res.json();
  alert(JSON.stringify(j));
});

document.getElementById('verify').addEventListener('click', async ()=>{
  const telegramId = document.getElementById('telegramId').value;
  const code = document.getElementById('code').value;
  if(!telegramId||!code){ alert('ادخل Telegram ID والكود'); return; }
  const res = await fetch('/api/addon/verify-activation', {
    method: 'POST', headers: {'content-type':'application/json'},
    body: JSON.stringify({ telegram_id: telegramId, code })
  });
  const j = await res.json();
  alert(JSON.stringify(j));
});

document.getElementById('sendHit').addEventListener('click', async ()=>{
  const telegramId = document.getElementById('telegramId').value;
  const code = document.getElementById('code').value;
  const resultText = document.getElementById('resultText').value || 'No text';
  if(!telegramId||!code){ alert('ادخل Telegram ID والكود'); return; }
  const payload = { telegram_id: telegramId, code, resultText };
  const res = await fetch('/api/addon/report-hit', {
    method: 'POST', headers: {'content-type':'application/json'},
    body: JSON.stringify(payload)
  });
  const j = await res.json();
  alert(JSON.stringify(j));
});
