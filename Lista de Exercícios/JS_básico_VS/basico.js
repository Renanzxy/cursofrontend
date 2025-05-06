const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function perguntar(pergunta) {
    return new Promise(resolve => {
        readline.question(pergunta, resposta => {
            resolve(resposta);
        });
    });
}

async function main() {
    // 1. Configuração do Ambiente
    console.log("Ambiente configurado com sucesso!");

    // 2. Trabalhando com Variáveis e Tipos de Dados
    // Exercício 2.1 - Criando Variáveis
    let nome = "Seu Nome";
    let idade = 30;
    let altura = 1.75;
    let programador = true;

    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Altura:", altura);
    console.log("É programador?", programador);

    // Exercício 2.2 - Conversão de Tipos
    let anoNascimento = 1995;
    let anoNascimentoString = String(anoNascimento);
    console.log("Ano de Nascimento (String):", anoNascimentoString, typeof anoNascimentoString);

    let pesoString = "80.5";
    let pesoNumero = Number(pesoString);
    console.log("Peso (Número):", pesoNumero, typeof pesoNumero);

    // Exercício 2.3 - Operações Matemáticas
    const num1Str = await perguntar("Digite o primeiro número: ");
    const num2Str = await perguntar("Digite o segundo número: ");
    const numero1 = Number(num1Str);
    const numero2 = Number(num2Str);

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    console.log("Soma:", soma);
    console.log("Subtração:", subtracao);
    console.log("Multiplicação:", multiplicacao);
    console.log("Divisão:", divisao);

    // 3. Estruturas Condicionais
    // Exercício 3.1 - Verificando Par ou Ímpar
    const parImparStr = await perguntar("Digite um número para verificar se é par ou ímpar: ");
    const numeroParImpar = Number(parImparStr);

    if (numeroParImpar % 2 === 0) {
        console.log(`O número ${numeroParImpar} é par`);
    } else {
        console.log(`O número ${numeroParImpar} é ímpar`);
    }

    // Exercício 3.2 - Idade e Permissão
    const idadeUsuarioStr = await perguntar("Digite sua idade: ");
    const idadeUsuario = Number(idadeUsuarioStr);

    if (idadeUsuario < 16) {
        console.log("Não pode votar.");
    } else if (idadeUsuario >= 16 && idadeUsuario <= 17) {
        console.log("Voto opcional.");
    } else {
        console.log("Voto obrigatório e pode tirar CNH.");
    }

    // 4. Estruturas de Repetição
    // Exercício 4.1 - Contador de 1 a 10
    console.log("Contador de 1 a 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    // Exercício 4.2 - Tabuada
    const numeroTabuadaStr = await perguntar("Digite um número para ver a tabuada: ");
    const numeroTabuada = Number(numeroTabuadaStr);
    console.log(`Tabuada do ${numeroTabuada}:`);
    for (let i = 1; i <= 100; i++) {
        console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
    }

    // Exercício 4.3 - Contagem Regressiva
    console.log("Contagem Regressiva:");
    let contador = 10;
    while (contador >= 1) {
        console.log(contador);
        contador--;
    }
    console.log("Feliz Ano Novo!");

    // 5. Funções
    // Exercício 5.1 - Criando uma Função Simples
    function boasVindas(nome) {
        return `Olá, ${nome}! Seja bem-vindo(a)!`;
    }

    console.log(boasVindas("Lucas"));

    // Exercício 5.2 - Calculadora
    function calculadora(num1, num2, operacao) {
        switch (operacao) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 === 0) {
                    return "Erro! Divisão por zero.";
                }
                return num1 / num2;
            default:
                return "Operação inválida.";
        }
    }

    console.log(calculadora(10, 5, "+"));
    console.log(calculadora(9, 3, "/"));

    // Exercício 5.3 - Média de Notas
    function calcularMedia(nota1, nota2, nota3) {
        let media = (nota1 + nota2 + nota3) / 3;
        if (media >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }

    console.log(calcularMedia(8, 7, 9));
    console.log(calcularMedia(5, 6, 4));

    // 6. Desafios Extras
    // Exercício 6.1 - Jogo de Adivinhação
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    const palpiteStr = await perguntar("Tente adivinhar o número entre 1 e 10: ");
    const palpite = Number(palpiteStr);

    if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou. O número era ${numeroAleatorio}.`);
    } else {
        console.log(`Que pena! Você não acertou. O número era ${numeroAleatorio}.`);
    }

    // Exercício 6.2 - Calculadora de IMC
    const pesoStr = await perguntar("Digite seu peso em kg: ");
    const alturaStr = await perguntar("Digite sua altura em metros: ");
    const peso = Number(pesoStr);
    if (alturaStr) {
        altura = Number(alturaStr);
        let imc = peso / (altura * altura);

        console.log(`Seu IMC é: ${imc.toFixed(2)}`);

        if (imc < 18.5) {
            console.log("Categoria: Abaixo do peso");
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("Categoria: Peso normal");
        } else if (imc >= 25 && imc <= 29.9) {
            console.log("Categoria: Sobrepeso");
        } else {
            console.log("Categoria: Obesidade");
        }
    } else {
        console.log("Altura não informada.");
    }

    readline.close();
}

main();
// Executa a função principal
