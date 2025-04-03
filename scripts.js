let botaomenu = document.querySelector("header .botaoMenu");
botaomenu.addEventListener("click", abrirmenu);

let menu = document.querySelector("header nav");

let botaofecharmenu = document.querySelector(".fecharMenu");
botaofecharmenu.addEventListener("click", fecharmenu);

function abrirmenu() {
    menu.style.right = "0";
}

function fecharmenu() {
    menu.style.right = "-100%";
}