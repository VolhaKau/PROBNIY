export function initModal() {
  const modal = document.getElementById('modal-w');
  if (!modal) return null;

  // Ищем строго внутри модалки
  const rows = modal.querySelectorAll('.equipment tbody tr');
  const picked = modal.querySelector('#picked-info');
  const msg = modal.querySelector('#book-message');
  const closeBtn = modal.querySelector('#close-window');
  const bookBtn = modal.querySelector('#book-button');

  // Закрытие по кнопке
  if (closeBtn) {
    closeBtn.onclick = () => modal.close();
  }

  // Закрытие по клику на фон
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  // Выбор экземпляра
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

      if (picked) {
        picked.textContent =
          `Выбран экземпляр № ${row.dataset.id} · ${row.dataset.state.toLowerCase()} состояние`;
      }
      if (msg) msg.hidden = true;
    };
  });

  // Кнопка "Забронировать"
  if (bookBtn && msg) {
    bookBtn.onclick = () => { msg.hidden = false; };
  }

  return modal;
}