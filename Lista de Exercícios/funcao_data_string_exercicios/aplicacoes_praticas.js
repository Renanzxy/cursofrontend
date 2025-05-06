
// Sorteio de um participante
const participantes = ["João", "Maria", "Pedro", "Ana", "Lucas", "Carla", "Felipe", "Rita", "Fernando", "Juliana"];
const vencedor = participantes[Math.floor(Math.random() * participantes.length)];
console.log('Vencedor do sorteio:', vencedor);

// Calcular dias para o próximo vencimento
function diasParaVencimento(dataVencimento) {
  const hoje = new Date();
  const vencimento = new Date(dataVencimento);
  const diffTime = vencimento - hoje;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
console.log('Dias para vencimento:', diasParaVencimento("2025-12-01"));

// Função para remover caracteres do CPF
function removerPontosCPF(cpf) {
  return cpf.replace(/[.-]/g, '');
}
console.log(removerPontosCPF("123.456.789-00"));

// Sistema de agendamento de eventos
function agendarEvento(evento, dataEvento) {
  const eventoData = new Date(dataEvento);
  const hoje = new Date();
  const diffTime = eventoData - hoje;
  const diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `O evento "${evento}" ocorrerá em ${diasRestantes} dias.`;
}
console.log(agendarEvento("Reunião de Projeto", "2025-07-01"));

// Jogo de adivinhação
function jogoAdivinhacao() {
  const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
  let tentativa = null;
  while (tentativa !== numeroAleatorio) {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 50"));
    if (tentativa < numeroAleatorio) {
      console.log("Muito baixo");
    } else if (tentativa > numeroAleatorio) {
      console.log("Muito alto");
    } else {
      console.log("Você acertou!");
    }
  }
}
jogoAdivinhacao();
