
// Exercício 6: Arrays multidimensionais
let tabuleiro = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];
console.log(tabuleiro[1][2]); // Acessando a segunda linha, terceira coluna
tabuleiro.forEach(linha => linha.forEach(elemento => console.log(elemento)));
