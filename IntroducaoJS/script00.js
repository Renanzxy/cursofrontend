// introdução JavaScript

//Tipo de Dados(escopo, tipagem)

// tipo string -

var nome = "João"; // variavel de escopo global
nome = "José"; //redefinir valor
var nome = "Pedro"; //redeclarar da var

//tipo number -

let idade = 25; //variavel de escopo local
idade = 26; //redefinir valor - ok
// let idade = 30; //erro ao declarar

//tipo number -

const PI = 3.1415; //constante
// PI = 3.9876; // erro não pode redefinir
// const PI = 4.7493; //erro - não pode redeclarar

//tipo boolean
var aprovado = true;

//tipo undefined
var media;

// tipo null

var info = null;



console.log("Nome: " +nome);
console.log("Idade:" +idade);
console.log("PI:" +PI);
console.log( "aprovação:" +aprovado);
console.log( "media:" +media);
console.log( "informções:" +info);


