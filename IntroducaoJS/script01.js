//tipo de operações

//operadores aritmeticos (+.-,*,/,%)
var a = 10;
var b = 3;
console.log("Soma:"+ (a+b));//13
console.log("subtração:"+ (a-b));//7
console.log("multiplicação:"+ (a*b));//30
console.log("divisão:"+ (a/b));//3.333
console.log("resto:"+ (a%b));//1

//operadores relacionais (>,>=,<=,==,===)
// retorna true ou false
var a = 10;
var b =  20;
var c ="10";

console.log("Relacionais: "+ (a>b)); //false
console.log("Relacionais: "+ (a==c)); //true
console.log("Relacionais: "+ (a===c)); //false

//operadores lógicos (&& - E, || -OU, ! - Não)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação:" + nota1>7 && nota2>7); //false
console.log("Aprovação:" + nota1>7 || nota2>7); //true
console.log(!false); //true




