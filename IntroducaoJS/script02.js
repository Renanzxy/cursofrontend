// Estrutura de Dados

//condicionais(if else/ switch case) 
//if
var precoProduto = 150;
if(precoProduto>=100){
    console.log("Valor a Pagar:"
        +(precoProduto*0.9)
    );
} else {
    console.log("Valor a Pagar:"
        +(precoProduto)
    );
}

//switch case
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    
        case 2:
        console.log("Fevereiro")
        break;
        
        case 3:
        console.log("Março")
        break;
        
        case 4:
        console.log("Abril")
        break;

}

// Estruturas de repeticão

// for (contáveis)

for (let i = 0; i<=100; i++){
    console.log(i);
}

// while (Incontáveis)
var continuar = true; //condição de parada
// a parada acontece quando continuar for false
var numeroEscolhido = 3;
var contador =0;
while(continuar){
    contador++; 
    let numeroSorteado = Math.round(Math.random()*10);
    if(numeroEscolhido== numeroSorteado){
        continuar = false;
        console.log("Acertou miserável")
    }

    console.log("Tentativas:" +contador)
}

// funcões (Ação específica ) podendo ser chamada a qualquer momento
// momento dentro do código

function ola (nome){ //function return
    return "Olá"+nome;
}

function hello (nome){ //function void
    console.log("Hello, "+nome);
}
console.log(ola("Diogo"));

hello ("Diogo");