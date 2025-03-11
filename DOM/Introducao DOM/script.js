//script de manipulação DOM

//getElementById -> variável simples
let titulo = document.getElementById("titulo"); //html -> id
console.log(titulo);
titulo.innerText = "Outro titulo"; //modificar o conteudo da id

// getElementsByTagName ->variavel Vetor(Array)
let paragrafo = document.getElementsByTagName("p"); //html -> p
//modificar elemento
paragrafo[0].innerText = "Exemplo de paragrafo modificado por DOM";
//modificar style do elemento
paragrafo[1].style.color = "red";

// getElementByClassNAme -> variavel Vetor(Array)
let descricao = document.getElementsByClassName("descricao");
//modificar elementos do Array
for(let i = 0; i<descricao.length; i++){
    descricao[i].style.color = "blue";
};

//query selector -> variavel simples -> seleciona apenas 1
let p = document.querySelector("p");
//modificação de fonte
p.style.fontWeight = "bold";

//querySelectorAll -> variavel Vetor(array) -> Seleciona
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => {
    element.style.fontWeight = "bold";
});

//eventos listener (ouvinte)

function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

// chamando direto no script o ouvinte
document.getElementById("btnColor").addEventListener(
    "click",OutraCor
)

function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";

}
