// JS ДЛЯ ОКНА С МЕТОДИЧКАМИ. ОКНО НЕ ПОДКЛЮЧЕНО НИКУДА
import { METHODS } from './opisanie.js';

export function initMethodModal(onBookClick) {
  const modal = document.getElementById('method-modal');
  const closeBtn = document.getElementById('close-method');
  const bookBtn = document.getElementById('method-book-btn');
  
  document.getElementById('close-method').onclick = () => modal.close();
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  function fillMethod(key) {
    const item = METHODS[key];
    if (!item) return;

    document.getElementById('method-title').textContent = item.title;
    document.getElementById('method-authors').textContent = item.authors;
    document.getElementById('method-desc').textContent = item.description;
    
    const coverImg = document.getElementById('method-cover');
    coverImg.src = item.cover || '';
    coverImg.alt = item.title;

    document.getElementById('method-status').textContent = item.available;

    // Заполняем таблицу характеристик
    const specsTable = document.getElementById('method-specs');
    specsTable.innerHTML = '';
    for (const [name, value] of Object.entries(item.specs || {})) {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.textContent = name;
      const td = document.createElement('td');
      td.textContent = value;
      tr.append(th, td);
      specsTable.appendChild(tr);
    }

    // Настраиваем кнопку скачивания
    const downloadLink = document.getElementById('method-download');
    downloadLink.href = item.pdfFile || '#';
    document.getElementById('method-pdf-size').textContent = `PDF · ${item.pdfSize || ''}`;
  }

  // Обработка кнопки "Забронировать"
  bookBtn.onclick = () => {
    const title = document.getElementById('method-title').textContent;
    const image = document.getElementById('method-cover').src;
    
    // Формируем текст для окна бронирования
    const instanceInfo = "Печатный экземпляр (методичка)";

    modal.close();
    
    if (onBookClick) {
      onBookClick(title, image, instanceInfo);
    }
  };

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