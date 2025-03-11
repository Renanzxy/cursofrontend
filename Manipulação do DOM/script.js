// exercicio - DOM

// parte 1
let titulo = document.getElementById("titulo");
console.log(titulo);

let paragrafo = document.querySelector("p");
    console.log(paragrafo);

// parte 2 - mudar texto

//listener
document.getElementById("btn") .addEventListener(
    "click", MudarElementos
)

function MudarElementos() {
    titulo.innerText = "Novo Titulo";
    paragrafo.innerText = "Novo Exemplo de Parágrafo";

}
// parte 3

document.getElementById("btnFundo").addEventListener(
    "click", MudarFundo
);

function MudarFundo(){
    document.body.style.backgroundColor = "blue";
}

// parte 4 - adicionar classe

titulo.classList.add("descricao");

document.querySelector(".descricao").style.color