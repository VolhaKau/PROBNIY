import { MANUALS } from '../data/manuals.js';

export function initMethodModal(onBookClick) {
  const modal = document.getElementById('method-modal');
  
  // Закрытие по крестику и клику на затемненную область
  document.getElementById('close-method').onclick = () => modal.close();
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  // Функция заполнения окна данными
  function fillMethod(key) {
    const item = MANUALS[key];
    if (!item) return;

    document.getElementById('method-category').textContent = 'Каталог / Методические материалы / ' + item.category;
    document.getElementById('method-title').textContent = item.title;
    document.getElementById('method-authors').textContent = item.author;
    document.getElementById('method-desc').textContent = `Учебное издание: ${item.university}, ${item.publication} г.`;
    
    // Устанавливаем картинку обложки
    const coverImg = document.getElementById('method-cover');
    coverImg.src = item.image;
    coverImg.alt = item.title;

    document.getElementById('method-status').textContent = "Доступно для скачивания";

    // Строим таблицу характеристик
    const specsTable = document.getElementById('method-specs');
    specsTable.innerHTML = '';
    
    const specsData = {
      "Автор": item.author,
      "ВУЗ": item.university,
      "Год издания": item.publication,
      "Категория": item.category
    };

    // Рендерим строки таблицы
    for (const [name, value] of Object.entries(specsData)) {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.textContent = name;
      const td = document.createElement('td');
      td.textContent = value;
      tr.append(th, td);
      specsTable.appendChild(tr);
    }

    // Подставляем ссылку для скачивания файла
    const downloadLink = document.getElementById('method-download');
    downloadLink.href = item.link || '#';
    document.getElementById('method-pdf-size').textContent = `Скачать PDF`;
  }

  const bookBtn = document.getElementById('method-book-btn');
  bookBtn.onclick = () => {
    // Собираем данные для передачи в окно бронирования
    const title = document.getElementById('method-title').textContent;
    const image = document.getElementById('method-cover').src;
    const instanceInfo = "Печатный экземпляр (методичка)";

    modal.close();
    
    if (onBookClick) {
      onBookClick(title, image, instanceInfo);
    }
  };

  // Экспортируем методы для управления окном из основного скрипта
  return {
    openWith(key) {
      fillMethod(key);
      modal.showModal();
    },
    show() {
      modal.showModal();
    }
  };
}