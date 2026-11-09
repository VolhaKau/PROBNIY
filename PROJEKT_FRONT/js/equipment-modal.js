import { EQUIPMENT } from './opisanie.js';

export function initEquipmentModal(onBookClick) {
  const modal = document.getElementById('modal-w');
  const picked = document.getElementById('picked-info');
  const bookBtn = document.getElementById('book-button');
  const msg = document.getElementById('book-message');

  const cameraImage = modal.querySelector('.viewer img');
  const prevImage = modal.querySelector('.arrow.prev');
  const nextImage = modal.querySelector('.arrow.next');
  const dotsContainer = modal.querySelector('.dots');

  let photos = [];
  let currentPhoto = 0;

  function showPhoto(index) {
    if (!photos.length) return;
    currentPhoto = (index + photos.length) % photos.length;
    cameraImage.src = photos[currentPhoto];
    dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentPhoto);
    });
  }

  prevImage.onclick = () => showPhoto(currentPhoto - 1);
  nextImage.onclick = () => showPhoto(currentPhoto + 1);

  document.getElementById('close-window').onclick = () => modal.close();
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  function selectInstance(row) {
    row.parentElement.querySelectorAll('tr').forEach(r => {
      r.classList.toggle('selected', r === row);
      const b = r.querySelector('.choose');
      if (b) b.textContent = r === row ? 'Выбран ✓' : 'Выбрать';
    });

    picked.textContent = `Выбран экземпляр № ${row.dataset.id} · ${row.dataset.state.toLowerCase()} состояние`;
    msg.hidden = true;
  }

  function buildInstances(equipmentKey) {
    const tbody = document.getElementById('modal-instances');
    tbody.innerHTML = '';

    const index = Object.keys(EQUIPMENT).indexOf(equipmentKey);
    const baseId = 400000 + index * 100;

    const instances = [
      { id: baseId + 1, state: 'Отличное',   status: 'free'   },
      { id: baseId + 2, state: 'Потёртости', status: 'free'   },
      { id: baseId + 3, state: 'Ремонт',     status: 'repair' }
    ];

    const labels = {
      free:   { text: 'Свободен',     cls: 'free'   },
      repair: { text: 'Недоступен',   cls: 'repair' },
      hand:   { text: 'На руках',     cls: 'hand'   },
      booked: { text: 'Забронирован', cls: 'booked' }
    };

    instances.forEach(inst => {
      const tr = document.createElement('tr');
      tr.dataset.id = inst.id;
      tr.dataset.state = inst.state;
      tr.dataset.status = inst.status;

      const info = labels[inst.status];
      tr.innerHTML = `
        <td>${inst.id}</td>
        <td>${inst.state}</td>
        <td><span class="status ${info.cls}">${info.text}</span></td>
        <td></td>
      `;

      const lastCell = tr.lastElementChild;
      if (inst.status === 'free') {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'choose';
        btn.textContent = 'Выбрать';
        btn.onclick = () => selectInstance(tr);
        lastCell.appendChild(btn);
      } else {
        lastCell.textContent = '—';
      }
      tbody.appendChild(tr);
    });

    const firstFree = tbody.querySelector('tr[data-status="free"]');
    if (firstFree) {
      selectInstance(firstFree);
    } else {
      picked.textContent = 'Нет свободных экземпляров';
      msg.hidden = true;
    }
  }

  function fillEquipment(key) {
    const item = EQUIPMENT[key];
    if (!item) return;

    document.getElementById('modal-category').textContent = 'Каталог / ' + item.category;
    document.getElementById('modal-title').textContent = item.title;

    photos = item.images || [];
    currentPhoto = 0;

    dotsContainer.innerHTML = '';
    photos.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot';
      dot.onclick = () => showPhoto(i);
      dotsContainer.appendChild(dot);
    });
    showPhoto(0);
    cameraImage.alt = item.title;

    document.getElementById('modal-desc').textContent = item.description || '';

    const specsTable = document.getElementById('modal-specs');
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

    buildInstances(key);
  }

  bookBtn.onclick = () => {
    const selectedRow = document.querySelector('.equipment tr.selected');
    if (!selectedRow) {
      msg.textContent = 'Сначала выберите свободный экземпляр';
      msg.hidden = false;
      return;
    }

    const title = document.getElementById('modal-title').textContent;
    const image = photos[0] || '';
    const instanceInfo = `Экземпляр № ${selectedRow.dataset.id} · ${selectedRow.dataset.state.toLowerCase()} состояние`;

    modal.close();
    
    // Вызываем переданный коллбэк, чтобы открыть второе окно
    if (onBookClick) {
      onBookClick(title, image, instanceInfo);
    }
  };

  return {
    openWith(key) {
      fillEquipment(key);
      modal.showModal();
    },
    // Метод нужен, чтобы вернуть это окно обратно (после закрытия окна брони)
    show() {
      modal.showModal();
    }
  };
}