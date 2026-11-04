//START OF TRANSLATION BLOCK
const translations = {
  ru: {
    search_placeholder: "Поиск оборудования",
    profile_name: "Алексей",
    location_title: "Получение на кафедре",
    location_desc: "Расположение и режим работы уточните у ответственного",
    location_link: "Контакты кафедры ↗",
    catalog_title: "Каталог",
    tab_equipment: "Оборудование",
    tab_materials: "Методические материалы",
    filter_peripherals: "Периферия и датчики",
    filter_microcontrollers: "Микроконтроллеры и отладочные платы",
    filter_multimedia: "Мультимедиа и оптика",
    filter_tools: "Инструменты и монтаж",
    filter_network: "Сетевое оборудование",
    popular_title: "Популярное оборудование",
    popular_count: "5 моделей",
    request_title: "Не нашли нужное оборудование?",
    request_desc: "Расскажите о своей задаче — оставьте запрос в Google-форме.",
    footer_text: "&#169; 2026 ГГТУ",
    btn_book: "Забронировать",
  },
  en: {
    search_placeholder: "Search equipment",
    profile_name: "Alexey",
    location_title: "Pick up at the department",
    location_desc: "Please check the location and working hours with the responsible person",
    location_link: "Department contacts ↗",
    catalog_title: "Catalog",
    tab_equipment: "Equipment",
    tab_materials: "Methodical materials",
    filter_peripherals: "Peripherals and sensors",
    filter_microcontrollers: "Microcontrollers and dev boards",
    filter_multimedia: "Multimedia and optics",
    filter_tools: "Tools and installation",
    filter_network: "Network equipment",
    popular_title: "Popular equipment",
    popular_count: "5 models",
    request_title: "Didn't find what you were looking for?",
    request_desc: "Tell us about your task — leave a request in the form.",
    footer_text: "&#169; 2026 GSTU",
    btn_book: "Book",
  },
be: {
    search_placeholder: "Пошук абсталявання",
    profile_name: "Эрэн",
    location_title: "Атрыманне на кафедры",
    location_desc: "Месцазнаходжанне і рэжым працы ўдакладніце ў адказнага",
    location_link: "Кантакты кафедры ↗",
    catalog_title: "Каталог",
    tab_equipment: "Абсталяванне",
    tab_materials: "Метадычныя матэрыялы",
    filter_peripherals: "Перыферыя і датчыкі",
    filter_microcontrollers: "Мікракантролеры і адладкавыя платы",
    filter_multimedia: "Мультымедыя і оптыка",
    filter_tools: "Інструменты і мантаж",
    filter_network: "Сеткавае абсталяванне",
    popular_title: "Папулярнае абсталяванне",
    popular_count: "5 мадэляў",
    request_title: "Не знайшлі патрэбнае абсталяванне?",
    request_desc: "Раскажыце пра сваю задачу — пакіньце запыт у форме.",
    footer_text: "© 2026 ГДТУ",
    btn_book: "Забраніраваць",
},
fr: {
    search_placeholder: "Rechercher du matériel",
    profile_name: "Alexis",
    location_title: "Retrait au département",
    location_desc: "Veuillez vérifier l'emplacement et les heures d'ouverture auprès du responsable",
    location_link: "Contacts du département ↗",
    catalog_title: "Catalogue",
    tab_equipment: "Matériel",
    tab_materials: "Supports méthodologiques",
    filter_peripherals: "Périphériques et capteurs",
    filter_microcontrollers: "Microcontrôleurs et cartes de développement",
    filter_multimedia: "Multimédia et optique",
    filter_tools: "Outils et installation",
    filter_network: "Matériel réseau",
    popular_title: "Matériel populaire",
    popular_count: "5 modèles",
    request_title: "Vous n'avez pas trouvé ce que vous cherchiez ?",
    request_desc: "Parlez-nous de votre tâche — laissez une demande dans le formulaire.",
    footer_text: "© 2026 GGTU",
    btn_book: "Réserver",

  }
};

function translatePage(lang) {
  var dict = translations[lang];

  // 1. Переводим обычный текст (h2, span, p, button и т.д.)
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  // 2. Переводим плейсхолдеры (текст внутри input)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      element.setAttribute('placeholder', dict[key]);
    }
  });

  // 3. Переводим атрибуты alt у картинок (для доступности)
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const key = element.getAttribute('data-i18n-alt');
    if (dict[key]) {
      element.setAttribute('alt', dict[key]);
    }
  });

  // 4. Сохраняем выбор в localStorage, чтобы при перезагрузке язык остался
  localStorage.setItem('selectedLanguage', lang);
  
  // 5. Обновляем атрибут lang у тега <html>
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Блок работы с выпадающим меню ---
  const dropdown = document.getElementById('languageDropdown');
  const currentLangBtn = document.getElementById('currentLangBtn');
  const langMenu = document.getElementById('langMenu');
  const currentFlag = currentLangBtn ? currentLangBtn.querySelector('.flag') : null;

  // Если меню есть на странице, вешаем обработчики
  if (dropdown && currentLangBtn && langMenu) {
    
    // 1. Открытие/закрытие по клику на кнопку
    currentLangBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Останавливаем всплытие, чтобы меню сразу не закрылось
      langMenu.classList.toggle('show');
      
      const isExpanded = langMenu.classList.contains('show');
      currentLangBtn.setAttribute('aria-expanded', isExpanded);
    });

    // 2. Клик по конкретному языку в меню
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        const selectedLang = option.getAttribute('data-lang');
        const selectedFlagSrc = option.querySelector('.flag').src;
        
        // Меняем флаг на главной кнопке
        if (currentFlag) currentFlag.src = selectedFlagSrc;
        
        // Закрываем меню
        langMenu.classList.remove('show');
        currentLangBtn.setAttribute('aria-expanded', 'false');

        // ВЫЗЫВАЕМ ПЕРЕВОД СТРАНИЦЫ
        translatePage(selectedLang);
      });
    });

    // 3. Клик в любом другом месте страницы закрывает меню
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        langMenu.classList.remove('show');
        currentLangBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Блок инициализации языка при загрузке ---
  // Проверяем, сохранял ли пользователь язык ранее. Если нет — ставим русский.
  const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
  
  // Применяем перевод
  translatePage(savedLang);

  // Обновляем иконку флага на кнопке, чтобы она соответствовала сохраненному языку
  if (currentFlag && savedLang !== 'ru') {
    const savedFlagOption = document.querySelector(`.lang-option[data-lang="${savedLang}"] .flag`);
    if (savedFlagOption) {
      currentFlag.src = savedFlagOption.src;
    }
  }
});
//END OF THE TRANSLATION BLOCK

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
      <button class="book-btn" data-i18n="btn_book" data-modal-open="modal-w" data-id="${card.id}">Забронировать</button>
    `;

    // добавление готовой карточки в контейнер на странице
    cardsContainer.appendChild(cardElement);
  });

  const currentLang = localStorage.getItem('selectedLanguage') || 'ru';
  translatePage(currentLang);
}

// рендер при загруке страницы
renderCards(equipmentCards);
