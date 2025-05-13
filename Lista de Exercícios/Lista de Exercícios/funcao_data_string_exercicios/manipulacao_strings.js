
// Exibir quantidade de caracteres do nome
function contarCaracteres(nome) {
  console.log('Quantidade de caracteres:', nome.length);
}
contarCaracteres("João");

// Função para transformar texto em maiúsculas
function transformarMaiusculas(frase) {
  return frase.toUpperCase();
}
console.log(transformarMaiusculas("aprendendo JavaScript"));

// Função para substituir palavras
function substituirPalavra(frase, palavraAntiga, palavraNova) {
  return frase.replace(new RegExp(palavraAntiga, 'g'), palavraNova);
}
console.log(substituirPalavra("Eu gosto de JavaScript", "JavaScript", "JS"));

// Função para retornar o primeiro nome
function primeiroNome(nomeCompleto) {
  return nomeCompleto.split(' ')[0];
}
console.log(primeiroNome("João Silva"));

// Função para transformar texto em array de palavras
function transformarEmArray(texto) {
  return texto.split(',');
}
console.log(transformarEmArray("maçã,banana,laranja"));

// Função para validar e-mail
function validarEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
console.log(validarEmail("teste@exemplo.com"));
