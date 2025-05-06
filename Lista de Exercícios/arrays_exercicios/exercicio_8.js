
// Exercício 8: Função para calcular média
function media(numeros) {
    let soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}
let numeros = [10, 20, 30, 40, 50];
console.log(media(numeros));
