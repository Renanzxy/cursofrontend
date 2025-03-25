//script para as perguntas do quiz

let perguntas = [];
let perguntasatual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

//carregar as perguntas do Arquivo Json
fetch("perguntas.json").then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar perguntas", error));

//criar a função para carregar as Perguntas no html
function carregarPerguntas(){
    
}