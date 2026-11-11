import { initEquipmentModal } from './equipment-modal.js';
import { initBookingModal } from './booking-modal.js';
import { initMethodModal } from './method-modal.js';

const html = await fetch('./modal.html').then(r => r.text());
document.getElementById('modal-root').innerHTML = html;

let bookingController;
let activeModalController;

// Инициализация модалки оборудования
const equipmentController = initEquipmentModal((title, image, instanceInfo) => {
  activeModalController = equipmentController;
  bookingController.open(title, image, instanceInfo);
});

// Инициализация модалки методичек
const methodController = initMethodModal((title, image, instanceInfo) => {
  activeModalController = methodController;
  bookingController.open(title, image, instanceInfo);
});

// Инициализация модалки бронирования
bookingController = initBookingModal(() => {
  if (activeModalController) {
    activeModalController.show();
  }
});

// Делегирование кликов по карточкам
document.addEventListener('click', (e) => {
  const equipmentBtn = e.target.closest('.book-btn');
  if (equipmentBtn) {
    const key = equipmentBtn.dataset.equipment;
    if (key) equipmentController.openWith(key);
  }

  const methodBtn = e.target.closest('.method-btn');
  if (methodBtn) {
    const key = methodBtn.dataset.method;
    if (key) methodController.openWith(key);
  }
});