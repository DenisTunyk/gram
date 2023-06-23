"use strict";

// переменные для обработки клика по интпут
//const inpFlagElem = document.querySelector(".js-input-group");
const iconArrowElem = document.querySelector(".js-icon-down");
const inputGroupElem = document.querySelector(".js-input-group");
const menuContainerElem = document.querySelector(".js-menu-container");

const menuItemAll = document.querySelectorAll(".MenuItem");
const inputNumberElem = document.querySelector(".js-input-number");
const inputCountryElem = document.querySelector(".js-form-control");

console.log(menuItemAll)


inputGroupElem.addEventListener("click", () => {
    
    if (iconArrowElem.classList.contains('open')) {
        iconArrowElem.classList.remove('open');
    } else {
        iconArrowElem.classList.add('open');
    }

    if (inputGroupElem.classList.contains('focus')) {
        inputGroupElem.classList.remove('focus');
    } else {
        inputGroupElem.classList.add('focus');
    }

    if (menuContainerElem.classList.contains('open')) {
        menuContainerElem.classList.remove('open');
    } else {
        menuContainerElem.classList.add('open');
    }

    if (menuContainerElem.classList.contains('shown')) {
        menuContainerElem.classList.remove('shown');
    } else {
        menuContainerElem.classList.add('shown');
    }
});

// Прячет меню при нажатии в любом месте документа
document.addEventListener('click', (e) => {
    // console.log(e);
    const click = e.composedPath().includes(inputGroupElem);
    if (!click) {
        iconArrowElem.classList.remove('open');
        inputGroupElem.classList.remove('focus');
        menuContainerElem.classList.remove('open');
        menuContainerElem.classList.remove('shown');
    }
});

//Перевіряємо на якому з списків був клік, та відпрацьовуємо цей елемент
menuItemAll.forEach(item => {
    item.addEventListener('click', e => {
    //e.target.classList.add('active');

        // Працюємо з полем input номер телефону
        inputNumberElem.firstElementChild.value = item.lastElementChild.textContent + " ";
        inputNumberElem.classList.add('touched');
        inputNumberElem.firstElementChild.focus();

        // Працюємо з полем input Країна
        inputCountryElem.value = item.children[1].textContent;
        //inputGroupElem.children[1].textContent = "";
        inputGroupElem.classList.add('touched');
        //inputCountryElem.classList.add('focus');
        //console.log(inputNumberElem.elementChild[1]);
  });
});

// подсчет символов в input
// let msg
// inputNumberElem.addEventListener('focusout', event=>{
//     let length = inputNumberElem.value.length;
//     if (length > 12) msg = 'Количество символов не должно превышать 12!';
//     else if (length < 11) msg = 'Количество символов не должно быть меньше 11!';
//     alert(length);
// })


// Виставляємо по Дефолту значення країни та телефона
// Номер телефону

inputNumberElem.firstElementChild.value = "+7 ";
inputNumberElem.classList.add('touched');
inputNumberElem.firstElementChild.focus();

// Працюємо з полем input Країна
inputCountryElem.value = "Russian Federation";
inputGroupElem.classList.add('touched');


// для input-group with-label js-input-number добавлять калсс touched , тогда label не будет перекрывать input

// *****************************Auth.html***************************************************

// const inpCodeElem = document.querySelector(".js-inp-block");
// const inpElem = document.querySelector(".js-input");
// console.log(inpElem.value);

// inpElem.addEventListener("input", onInputChange);


// отработка клика вне поля input
// document.addEventListener('click', (e) => {
//     // console.log(e);
//     const click = e.composedPath().includes(inpCodeElem);
//     if (!click) {
//         // iconArrowElem.classList.remove('open');
//         // inputGroupElem.classList.remove('focus');
//         // menuContainerElem.classList.remove('open');
//         // menuContainerElem.classList.remove('shown');
//         if (inpElem.value !== "") {
//             inpCodeElem.classList.add("touched");
//         } else {
//             inpCodeElem.classList.remove("touched");
//         }
//     }
// });




// inpElem.addEventListener('change', (e) => {
//     console.log("1");
// });
