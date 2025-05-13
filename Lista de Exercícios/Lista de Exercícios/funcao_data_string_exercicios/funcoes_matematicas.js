
// Função para gerar número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Número aleatório entre 1 e 100:', randomNumber);

// Função para calcular a raiz quadrada de um número
function raizQuadrada(numero) {
  return Math.sqrt(numero);
}
console.log('Raiz quadrada de 16:', raizQuadrada(16));

// Função para encontrar o maior número usando Math.max
function maiorNumero(a, b) {
  return Math.max(a, b);
}
console.log('Maior número entre 5 e 10:', maiorNumero(5, 10));

// Função para arredondar números
function arredondarNumero(numero) {
  console.log('Arredondado para cima:', Math.ceil(numero));
  console.log('Arredondado para baixo:', Math.floor(numero));
  console.log('Arredondado para o inteiro mais próximo:', Math.round(numero));
}
arredondarNumero(7.6);
