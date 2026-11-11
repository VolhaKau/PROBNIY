// Переменная-переключатель (1 - динозавр, 0 - alert)
export let Block = 1; 

export function initDinoAnimation() {
    // 1. Создаем контейнер для динозавра (один раз при загрузке)
    let dinoContainer = document.getElementById('dino-container');
    if (!dinoContainer) {
        dinoContainer = document.createElement('div');
        dinoContainer.id = 'dino-container';
        
        const dinoImg = document.createElement('img');
        // ВАЖНО: Путь к вашей гифке
        dinoImg.src = 'image/animation/Dino.gif'; 
        dinoImg.alt = 'Динозавр';
        
        dinoContainer.appendChild(dinoImg);
        document.body.appendChild(dinoContainer);
    }

    // 2. Слушаем клик по кнопке "Подтвердить бронирование"
    document.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'confirm-booking') {
            
            const bookingModal = document.getElementById('booking-modal');
            
            // ЛОГИКА ВЫБОРА
            if (Block === 0) {
                // Если Block = 0, просто показываем alert и закрываем окно
                alert('Успешно! Бронирование подтверждено.');
                bookingModal.close();
            } 
            else if (Block === 1) {
                // Если Block = 1, запускаем динозавра
                playDinoAnimation(bookingModal);
            }
        }
    });
}

function playDinoAnimation(modal) {
    const dino = document.getElementById('dino-container');
    if (!dino || !modal) return;

    // 1. СБРОС
    dino.classList.add('reset-instant');
    dino.classList.remove('run-right');
    modal.classList.remove('pushed-out');
    modal.style.transform = ''; 
    void dino.offsetWidth; 
    dino.classList.remove('reset-instant');

    // 2. ПОДГОТОВКА ОКНА (центрируем его и ставим ниже динозавра по слою)
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.margin = '0';
    modal.style.transform = 'translate(-50%, -50%)'; 
    modal.style.zIndex = '100'; 

    // 3. РАСЧЕТ ВРЕМЕНИ
    // Динозавр бежит 5 секунд (по CSS). Ему нужно примерно 2 секунды, чтобы добежать до окна.
    const timeToReach = 1620; 
    
    // 4. ДИНОЗАВР БЕЖИТ
    dino.classList.add('run-right');

    // 5. ОКНО НАЧИНАЕТ ЕХАТЬ ВМЕСТЕ С ДИНОЗАВРОМ
    setTimeout(() => {
        // Когда динозавр добежал, мы начинаем двигать окно.
        // ВАЖНО: мы не используем класс, а напрямую меняем transform, сохраняя центрирование (-50%, -50%)
        // и добавляя сдвиг вправо.
        
        // Чтобы окно и динозавр двигались синхронно, мы можем просто добавить класс
        // но чтобы окно не "прыгало", мы зададим ему плавность прямо здесь:
        modal.style.transition = 'transform 6s linear'; // 3 секунды на выезд
        modal.style.transform = 'translate(calc(150vw - 50%), -50%)'; 
        
    }, timeToReach);

    // 6. ЗАВЕРШЕНИЕ
    setTimeout(() => {
        modal.close();
        
        // Возвращаем всё в исходное состояние
        modal.style.position = '';
        modal.style.top = '';
        modal.style.left = '';
        modal.style.transform = '';
        modal.style.margin = '';
        modal.style.zIndex = '';
        modal.style.transition = ''; 
        
        // Прячем динозавра (мгновенно)
        dino.classList.add('reset-instant');
        dino.classList.remove('run-right');
        setTimeout(() => dino.classList.remove('reset-instant'), 50);
        
    }, 5200); // 5 секунд на анимацию + запас
} 