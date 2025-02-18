 // desafio 1 - idade
 var prompt = require("prompt-sync")();

 var idade = prompt("Informe sua idade: ");

 if(idade<18){
    console.log("Menor de Idade");
 } else if(idade<60){
    console.log("Adulto");
 }else{
    console.log("Idoso")
 }
 
 
//desafio 2 - tabuada do 5

for(let i= 0; i<=20 ; i++){
    console.log(numero+" x "+ i +" = " (i*numero))
}

//desafio 3 - numeros pares

console.log("Números pares até 20")
for(let i = 1 ; i<=20 ; i++){
    //imprimir numeros pares
    let resto = i/2;
    if (resto == 0){
        console.log(i);
    }
}