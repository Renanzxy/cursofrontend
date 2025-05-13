
// Exercício 9: Desafios Práticos
// Desafio 1: Contagem de Ocorrências
let cores = ["azul", "vermelho", "verde", "azul", "amarelo", "verde", "azul"];
let contagem = {};
cores.forEach(cor => contagem[cor] = (contagem[cor] || 0) + 1);
console.log(contagem);

// Desafio 2: FizzBuzz com Arrays
let numeros = [];
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        numeros.push("FizzBuzz");
    } else if (i % 3 === 0) {
        numeros.push("Fizz");
    } else if (i % 5 === 0) {
        numeros.push("Buzz");
    } else {
        numeros.push(i);
    }
}
console.log(numeros);
