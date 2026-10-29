import { initModal } from './a.js';

// Грузим HTML модалки и вставляем в DOM
const html = await fetch('./modal.html').then(r => r.text());
document.getElementById('modal-root').innerHTML = html;

// Инициализируем логику модалки
const modal = initModal();

// Вешаем открытие на весь документ
document.addEventListener('click', (e) => {
  // Проверяем, если клик был по кнопке (или внутри кнопки)
  const btn = e.target.closest('.book-btn');
  if (btn) {
    modal.showModal();
  }
});