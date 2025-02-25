//Criar um programa várias notas e calcule a média

const prompt = require("prompt-sync")();

let vetornotas = [];

let contador = 0;
let continuar = true;
while (continuar) {
    console.log("1. Digitar nova nota");
    console.log("2. Calcular média");
    console.log("3. Sair");
    let operacao = prompt("Escolha a opção desejada:")
    switch (operacao) {
        case "1":
            let nota = Number(prompt("Digite a nota do aluno" +contador+ ":"));
            vetornotas.push(nota);    
            break;
        case "2":
            let media = vetornotas.reduce((x,y) => x+y,0)/
            vetornotas.length;
            console.log("A média é" +media)
            break;
        case"3":
            continuar = false;
            console.log("Saindo");
            break;
    }

}