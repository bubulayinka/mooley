var menuList = document.querySelector(".menu-list");
var bars = document.querySelector(".bars");
var theme = document.querySelector(".theme");
var hea = document.querySelector(".header");

function openMenu(){
    bars.addEventListener("click", ()=> {
        menuList.classList.toggle("menu-list-open");
        theme.classList.toggle("themecolor")

    });
    menuList.addEventListener("click", ()=> {
        menuList.classList.remove("menu-list-open");
    })
}
openMenu()


