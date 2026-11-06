import { initModal } from './a.js';

const root = document.getElementById('modal-root');

if (root) {
  try {
    const html = await fetch('./modal.html').then(r => r.text());
    root.innerHTML = html;

    const modal = initModal();

    // Открытие по клику на любую кнопку .book-btn
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.book-btn');
      if (btn && modal) {
        modal.showModal();
      }
    });
  } catch (err) {
    console.error('Не удалось загрузить модалку:', err);
  }
}