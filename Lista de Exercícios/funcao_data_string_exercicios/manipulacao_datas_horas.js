
// Exibe a data e a hora atuais
function exibirDataHora() {
  const hoje = new Date();
  const data = hoje.getDate().toString().padStart(2, '0') + '/' + (hoje.getMonth() + 1).toString().padStart(2, '0') + '/' + hoje.getFullYear();
  const hora = hoje.getHours().toString().padStart(2, '0') + ':' + hoje.getMinutes().toString().padStart(2, '0') + ':' + hoje.getSeconds().toString().padStart(2, '0');
  console.log(`Hoje é ${data} e agora são ${hora}`);
}
exibirDataHora();

// Função para calcular idade
function calcularIdade(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}
console.log('Idade:', calcularIdade("2000-05-01"));

// Função para retornar o dia da semana
function obterDiaSemana(data) {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const date = new Date(data);
  return dias[date.getDay()];
}
console.log('Dia da semana:', obterDiaSemana("2025-05-01"));

// Função para calcular a diferença entre duas datas em dias
function diferencaEmDias(data1, data2) {
  const d1 = new Date(data1);
  const d2 = new Date(data2);
  const diffTime = Math.abs(d2 - d1);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
console.log('Diferença em dias:', diferencaEmDias("2025-12-25", "2025-05-01"));
