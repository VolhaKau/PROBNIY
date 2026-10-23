// Находим наш переключатель
const toggle = document.getElementById('themeToggle');

// Когда по нему кликают...
toggle.onclick = function() {
  // Переключаем класс "dark" (добавляем, если нет, и убираем, если есть)
  this.classList.toggle('dark');
  
  // А это бонус: добавляем класс на body, чтобы фон сайта тоже менялся
  document.body.classList.toggle('dark-theme');
};