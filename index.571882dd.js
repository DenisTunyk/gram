!function(){"use strict";var s=document.querySelector(".js-icon-down"),e=document.querySelector(".js-input-group"),t=document.querySelector(".js-menu-container"),o=document.querySelectorAll(".MenuItem"),c=document.querySelector(".js-input-number"),n=document.querySelector(".js-form-control");console.log(o),e.addEventListener("click",(function(){s.classList.contains("open")?s.classList.remove("open"):s.classList.add("open"),e.classList.contains("focus")?e.classList.remove("focus"):e.classList.add("focus"),t.classList.contains("open")?t.classList.remove("open"):t.classList.add("open"),t.classList.contains("shown")?t.classList.remove("shown"):t.classList.add("shown")})),document.addEventListener("click",(function(o){o.composedPath().includes(e)||(s.classList.remove("open"),e.classList.remove("focus"),t.classList.remove("open"),t.classList.remove("shown"))})),o.forEach((function(s){s.addEventListener("click",(function(t){c.firstElementChild.value=s.lastElementChild.textContent+" ",c.classList.add("touched"),c.firstElementChild.focus(),n.value=s.children[1].textContent,e.classList.add("touched")}))})),c.firstElementChild.value="+7 ",c.classList.add("touched"),c.firstElementChild.focus(),n.value="Russian Federation",e.classList.add("touched")}();
//# sourceMappingURL=index.571882dd.js.map