export function initModal() {
  const modal = document.getElementById('modal-w');
  const rows = document.querySelectorAll('.equipment tbody tr');
  const picked = document.getElementById('picked-info');
  const msg = document.getElementById('book-message');

  document.getElementById('close-window').onclick = () => modal.close();

  // закрытие по клику на фон
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  rows.forEach((row) => {
    const btn = row.querySelector('.choose');
    if (!btn) return;

    btn.onclick = () => {
      if (row.dataset.status !== 'free') return;

      rows.forEach((r) => {
        const on = r === row;
        r.classList.toggle('selected', on);
        const b = r.querySelector('.choose');
        if (b) {
          b.classList.toggle('current', on);
          b.textContent = on ? 'Выбран ✓' : 'Выбрать';
        }
      });

      picked.textContent = `Выбран экземпляр № ${row.dataset.id} · ${row.dataset.state.toLowerCase()} состояние`;
      msg.hidden = true;
    };
  });

  document.getElementById('book-button').onclick = () => { msg.hidden = false; };

  return modal; // вернём, чтобы потом открывать
}