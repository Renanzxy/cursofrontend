
// Exercício 3: Manipulação de strings com arrays
let palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];
console.log(palavras.join(" ")); // Transformando em frase
palavras.splice(3, 0, "muito"); // Adicionando "muito"
console.log(palavras.join(" "));
