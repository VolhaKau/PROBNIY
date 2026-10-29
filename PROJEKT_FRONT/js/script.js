// СВЕТЛАЯ/ТЕМНАЯ ТЕМА
// Находим наш переключатель
const toggle = document.getElementById('themeToggle');

// Когда по нему кликают
toggle.onclick = function() {
  // Переключаем класс "dark" (добавляем, если нет, и убираем, если есть)
  this.classList.toggle('dark');
  
  // А это бонус: добавляем класс на body, чтобы фон сайта тоже менялся
  document.body.classList.toggle('dark-theme');
};

// СЕРЫЕ КНОПКИ С ОБОРУДОВАНИЕМ
// Функция для показа/скрытия фильтров
function toggleFilters() {
  const filtersPanel = document.getElementById('filters-panel');
  
  // Если фильтры скрыты - показываем с анимацией
  if (filtersPanel.classList.contains('hidden-filters')) {
    filtersPanel.classList.remove('hidden-filters');
    
    // Добавляем класс анимации. 
    // Убираем его через 400мс (длительность анимации), чтобы при повторном клике она срабатывала заново.
    filtersPanel.classList.add('show-animation');
    setTimeout(() => {
      filtersPanel.classList.remove('show-animation');
    }, 400);
    
  } else {
    // Если фильтры видны - скрываем
    filtersPanel.classList.add('hidden-filters');
  }
}

// Находим кнопку "Оборудование" и блок фильтров
const btnEquipment = document.getElementById('btn-equipment');
const filtersPanel = document.getElementById('filters-panel');

// Вешаем событие клика на кнопку
btnEquipment.addEventListener('click', () => {
  // Если фильтры скрыты - показываем
  if (filtersPanel.classList.contains('hidden-filters')) {
    filtersPanel.classList.remove('hidden-filters');
    
    // Добавляем анимацию
    filtersPanel.classList.add('show-animation');
    setTimeout(() => {
      filtersPanel.classList.remove('show-animation');
    }, 400);
    
  } else {
    // Если видны - скрываем
    filtersPanel.classList.add('hidden-filters');
  }
});

// КАРТОЧКИ С ОБРУДОВАНИЕМ ДЛЯ БРОНИ
// контейнер, куда будут помещаться карточки
const cardsContainer = document.getElementById('cards-container');

// функция с карточками оборудования
function EquipmentCard(id, image, type, name, description, numberOfAvailable, statusClass = "green") {
  return {
    id,
    image,
    type,
    name,
    description,
    numberOfAvailable,
    statusClass
  }
}

// массив со всеми карточками
let equipmentCards = [];
equipmentCards.push(EquipmentCard(1, "#", "Микроконтроллеры", "Arduino Uno R3", "Arduino Uno R3 — это компактная плата-микроконтроллер для обучения электронике и создания прототипов электронных устройств.", "● 2 из 5 доступны", "green"));
equipmentCards.push(EquipmentCard(2, "#", "Микроконтроллеры", "Arduino Mega 2560", "Arduino Mega 2560 — это более мощная версия платы Arduino Uno, созданная для сложных и масштабных проектов.", "● 1 из 3 доступен", "green"));
equipmentCards.push(EquipmentCard(3, "#", "Микроконтроллеры", "NodeMCU ESP8266", "NodeMCU ESP8266 — это платформа для создания устройств интернета вещей (IoT), основанная на микроконтроллере ESP8266.", "● Доступен с 6 октября", "orange"));
equipmentCards.push(EquipmentCard(4, "#", "Микроконтроллеры", "STM32 Nucleo F401RE", "STM32 Nucleo F401RE — это отладочная плата на 32-разрядном ARM-процессоре представляющая собой гибкую платформу.", "● 3 из 4 доступны", "green"));
equipmentCards.push(EquipmentCard(5, "#", "Микроконтроллеры", "STM32 Nucleo F401RE", "STM32 Nucleo F401RE — это отладочная плата на 32-разрядном ARM-процессоре представляющая собой гибкую платформу.", "● 3 из 4 доступны", "green"));

// функция отрисовки карточек
function renderCards(cardsArray) {
  // очистка контейнера перед отрисовкой (чтобы не дублировалось при фильтрации)
  cardsContainer.innerHTML = '';

  // создание div-элемента для карточек
  cardsArray.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

  // заполнение хтмл кодом
  cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.name}" class="card-img">
      <p class="card-category">${card.type}</p>
      <h4>${card.name}</h4>
      <p class="card-desc">${card.description}</p>
      <p class="status ${card.statusClass}">${card.numberOfAvailable}</p>
      <button class="book-btn" data-modal-open="modal-w" data-id="${card.id}">Забронировать</button>
    `;

    // добавление готовой карточки в контейнер на странице
    cardsContainer.appendChild(cardElement);
  });
}

// рендер при загруке страницы
renderCards(equipmentCards);