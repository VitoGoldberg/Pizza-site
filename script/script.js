//Скрипт для изменения выделения красной чертой элементов меню
let menuItems = document.querySelectorAll('.menu_a');//собираем элементы меню в массив

for (let item of menuItems) {
    item.addEventListener('click', function () {
        for (let menuItem of menuItems) {
            menuItem.classList.remove('active');//сначала удаляем .active у всех элементов массива
        }
        item.classList.add('active');//добавляему кликнутому элементу .active
        //console.log(menuItems);
    })
}