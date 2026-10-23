import { initModal } from './a.js';

// Грузим HTML модалки и вставляем в DOM
const html = await fetch('./modal.html').then(r => r.text());
document.getElementById('modal-root').innerHTML = html;

// Инициализируем логику модалки
const modal = initModal();

// Вешаем открытие на все кнопки
document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', () => modal.showModal());
});