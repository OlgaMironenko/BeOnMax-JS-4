/*Практическое задание
1) Скачать и распаковать архив, прикрепленный к уроку (hometask5.zip). Внутри папки создать еще одну, где и выполнить это задание (чтобы не перемешивались)
2) Используя только файл скрипта (html руками не трогать) выполнить такие действия:
- Восстановить порядок в меню, добавить пятый пункт
- Заменить картинку заднего фона на другую из папки img
- Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
- Удалить рекламу со страницы - Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
3) Проверить, чтобы все работало и не было ошибок в консоли*/

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');


menu.insertBefore(menuItem[2], menuItem[1]); //Меняем местами элементы

menuItemLi.classList.add('menu-item'); //добавляем пятый элемент li с классом и текстом
menuItemLi.textContent ='Пятый элемент';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // Заменить задний фон картинки

adv.remove(); // Удаление рекламы

title.textContent = "Мы продаем только подлинную технику Apple";    // Заменить текст

let yourOpinion = prompt('Ваше отношение к технике apple?'); //Отношение к технике
promptforApple.textContent = yourOpinion;