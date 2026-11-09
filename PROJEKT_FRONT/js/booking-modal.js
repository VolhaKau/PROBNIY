export function initBookingModal(onCloseCallback) {
  const bookingModal = document.getElementById('booking-modal');
  const closeBooking = document.getElementById('close-booking');
  const cancelBooking = document.getElementById('cancel-booking');
  const confirmBooking = document.getElementById('confirm-booking');
  const instanceText = document.getElementById('booking-instance-text');
  const agreeCheckbox = document.getElementById('agree-rules');
  const calendarGrid = document.getElementById('calendar-days');
  const dateStartInput = document.getElementById('date-start');
  const dateEndInput = document.getElementById('date-end');
  const dateDuration = document.getElementById('date-duration');

  const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
  const calTitle = document.getElementById('cal-title');
  const calPrev = document.getElementById('cal-prev');
  const calNext = document.getElementById('cal-next');

  const today = new Date();
  let curMonth = today.getMonth();
  let curYear = today.getFullYear();
  let startDate = null;
  let endDate = null;

  function dateVal(dt) { return dt.y * 10000 + dt.m * 100 + dt.d; }

  function formatDate(dt) {
    return `${dt.d} ${monthNames[dt.m].toLowerCase()} ${dt.y}`;
  }

  function renderCalendar() {
    calTitle.textContent = `${monthNames[curMonth]} ${curYear}`;

    while (calendarGrid.children.length > 7) {
      calendarGrid.removeChild(calendarGrid.lastChild);
    }

    const firstDay = new Date(curYear, curMonth, 1).getDay();
    const offset = (firstDay + 6) % 7;
    const daysInMonth = new Date(curYear, curMonth + 1, 0).getDate();

    for (let i = 0; i < offset; i++) {
      calendarGrid.appendChild(document.createElement('div'));
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cal-day';
      btn.textContent = d;

      const thisDate = { d, m: curMonth, y: curYear };
      const v = dateVal(thisDate);

      if (startDate && v === dateVal(startDate)) btn.classList.add('selected');
      if (endDate && v === dateVal(endDate)) btn.classList.add('selected');
      if (startDate && endDate && v > dateVal(startDate) && v < dateVal(endDate)) {
        btn.classList.add('in-range');
      }

      btn.onclick = () => handleDayClick(thisDate);
      calendarGrid.appendChild(btn);
    }
  }

  function handleDayClick(date) {
    if (!startDate || (startDate && endDate)) {
      startDate = date;
      endDate = null;
    } else if (dateVal(date) < dateVal(startDate)) {
      startDate = date;
    } else {
      endDate = date;
    }
    renderCalendar();
    updateUI();
  }

  function updateUI() {
    if (startDate && endDate) {
      dateStartInput.value = formatDate(startDate);
      dateEndInput.value = formatDate(endDate);

      const days = Math.round(
        (new Date(endDate.y, endDate.m, endDate.d) - new Date(startDate.y, startDate.m, startDate.d)) / 86400000
      ) + 1;
      dateDuration.textContent = `${startDate.d}-${endDate.d} · ${days} дн.`;
    } else if (startDate) {
      dateStartInput.value = formatDate(startDate);
      dateEndInput.value = '';
      dateDuration.textContent = 'Выберите дату возврата';
    } else {
      dateStartInput.value = '';
      dateEndInput.value = '';
      dateDuration.textContent = 'Даты не выбраны';
    }
    checkButton();
  }

  function resetCalendar() {
    startDate = null;
    endDate = null;

    const now = new Date();
    curMonth = now.getMonth();
    curYear = now.getFullYear();
  
    agreeCheckbox.checked = false;
    renderCalendar();
    updateUI();
    renderCalendar();
    updateUI();
  }

  calPrev.onclick = () => {
    curMonth--;
    if (curMonth < 0) { curMonth = 11; curYear--; }
    renderCalendar();
  };

  calNext.onclick = () => {
    curMonth++;
    if (curMonth > 11) { curMonth = 0; curYear++; }
    renderCalendar();
  };

  agreeCheckbox.onchange = checkButton;

  function checkButton() {
    confirmBooking.disabled = !(startDate && endDate && agreeCheckbox.checked);
  }

  confirmBooking.onclick = () => {
    alert(`Успешно! Забронировано с ${formatDate(startDate)} по ${formatDate(endDate)}.`);
    bookingModal.close();
  };

  function closeWindow() {
    bookingModal.close();
    // Вызываем коллбэк, чтобы вернуть окно с оборудованием
    if (onCloseCallback) {
      onCloseCallback();
    }
  }

  closeBooking.onclick = closeWindow;
  cancelBooking.onclick = closeWindow;
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeWindow();
  });

  return {
    open(title, image, instanceInfo) {
      document.getElementById('booking-title').textContent = title;
      document.getElementById('booking-image').src = image;
      document.getElementById('booking-image').alt = title;
      instanceText.textContent = instanceInfo;
      
      resetCalendar();
      bookingModal.showModal();
    }
  };
}