// Основной JavaScript файл
console.log('Проект запущен!');

// DOM загружен
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM готов к работе');

  // Обработчик кнопки теста
  const testButton = document.getElementById('test-button');

  if (testButton) {
    testButton.addEventListener('click', function () {
      alert('Тесты будут здесь!');
    });
  }

  // Проверка загрузки данных
  loadTestData();
});

// Функция загрузки тестовых данных
async function loadTestData() {
  try {
    console.log('Попытка загрузки данных...');
    // Пока пусто, но здесь будет логика загрузки
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
}
