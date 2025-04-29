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

// Inclusão do ano dinamicamente

// Capturar o span que receberá a informação
let spanAno = document.querySelector('#anoAtual');

//Nova instância de um objeto do tipo Data.
let novadata = new Date();

//Captura da instância o ano de 4 dígitos.
let ano = novadata.getFullYear();

//Injetar o ano atual no span.
spanAno.innerHTML = ano;