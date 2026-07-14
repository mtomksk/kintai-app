// ===== 画面切替 =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== タブ切替 =====
function switchTab(btn, tabId) {
  const parent = btn.closest('.screen');
  parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// ===== 時計 =====
function updateClock() {
  const now = new Date();
  const time = now.toTimeString().slice(0, 8);
  const el1 = document.getElementById('clock');
  const el2 = document.getElementById('clock2');
  if (el1) el1.textContent = time;
  if (el2) el2.textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

// ===== シフト選択 =====
function selectShift(btn, type) {
  document.querySelectorAll('.btn-shift').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// ===== 出勤処理（デモ） =====
function clockIn() {
  const selected = document.querySelector('.btn-shift.selected');
  if (!selected) {
    alert('出勤パターンを選択してください');
    return;
  }
  const statusEl = document.querySelector('#screen-w01 .status-badge');
  statusEl.textContent = 'ステータス: 勤務中';
  statusEl.className = 'status-badge status-on';

  document.getElementById('btn-clockout').classList.remove('btn-disabled');
  document.getElementById('btn-site-start').classList.remove('btn-disabled');
  document.getElementById('btn-site-start').onclick = function() { showScreen('screen-w02'); };

  const now = new Date().toTimeString().slice(0, 5);
  document.getElementById('log-entries').textContent = now + ' 出勤（' + selected.textContent.split('\n')[0] + '）';
}
