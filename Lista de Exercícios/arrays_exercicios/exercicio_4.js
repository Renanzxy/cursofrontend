
// Exercício 4: Utilizando métodos avançados
let numeros = [15, 8, 22, 5, 19, 30];
console.log(numeros.sort((a, b) => a - b)); // Ordenando em ordem crescente
let maioresQueDez = numeros.filter(num => num > 10);
console.log(maioresQueDez);
let soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma);
