"use strict";
const inpCodeElem = document.querySelector(".js-inp-block");
const inpElem = document.querySelector(".js-input");
const bElem = document.querySelector(".js-button");
inpElem.addEventListener("input", onInputChange);


// отработка клика вне поля input
document.addEventListener('click', (e) => {
    // console.log(e);
    const click = e.composedPath().includes(inpCodeElem);
    if (!click) {
        // iconArrowElem.classList.remove('open');
        // inputGroupElem.classList.remove('focus');
        // menuContainerElem.classList.remove('open');
        // menuContainerElem.classList.remove('shown');
        if (inpElem.value !== "") {
            inpCodeElem.classList.add("touched");
        } else {
            inpCodeElem.classList.remove("touched");
        }
    }
});

function onInputChange(event) {
    //refs.outputEl.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
    // if (event.currentTarget.value === "") {
    //     refs.outputEl.textContent = "Anonymous";
    // }
    if (event.currentTarget.value.length === 5) {
        bElem.classList.remove("disabled")
    } else {
        bElem.classList.add("disabled");
    }
}

// inpElem.addEventListener('change', (e) => {
//     console.log("1");
// });

