function showTab(tabId) {

    // Отримуємо всі блоки з таблицями
    const tabs = document.querySelectorAll('.tab-content');

    // Приховуємо всі таблиці
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Показуємо вибрану таблицю
    document.getElementById(tabId).classList.add('active');
}