//selectmenue
const selectmenueButton = document.getElementById("selectmenue-btn-open");
const selectmenueButton2 = document.getElementById("selectmenue-btn-close");
const selectmenueButtonSubmit = document.getElementById("selectmenue-btn-submit")
const selectmenu = document.getElementById("selectmenue");

document.addEventListener('click', openCloseSelect);
function openCloseSelect(event) {
    if (event.target.closest("#selectmenue-btn-open") && !selectmenu.classList.contains("selectmenue--active")) {
        selectmenu.classList.add("selectmenue--active");
    } else if (event.target === selectmenueButton2 || event.target === selectmenueButtonSubmit) {
        selectmenu.classList.remove("selectmenue--active");
    }
}


//burgermenue
const burgerButton = document.getElementById("burgermenu-button");
const burgerMenu = document.getElementById("burgermenu-nav");

document.addEventListener('click', openCloseBurger);
function openCloseBurger(event) {
    if (event.target.closest("#burgermenu-button")) {
        burgerMenu.classList.toggle("navigation--active");
    } 
    else if (event.target !== burgerButton || event.target.closest(".nav__item")) {
        burgerMenu.classList.remove("navigation--active");
    }
}




