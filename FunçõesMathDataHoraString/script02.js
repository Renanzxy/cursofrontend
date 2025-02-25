//manipulaçõa de string (Cadeia de Caracteres)

const { log } = require("console");

let texto = "Aula de JavaScript";

// contar quantos caracteres tem essa variavel
console.log(texto.length); //18 caracteres


//maiusculas e minisculas 
console.log(texto.toUpperCase()); //MAIÚSCULAS
console.log(texto.toLowerCase()); // minúsculas

//partes de uma string
console.log(texto.substring(0,4)); //Aula
console.log(texto.slice(-10)); //javascript

//substituição
let texto2 = texto.replace("Java", "Type");
console.log(texto);

// tesoura(trim)
let texto3 = "  javaScript  "
console.log(texto3); // "  JavaScript  "
console.log(texto3.trim()); //"JavaScript"

// separação de string

let linguagens ="JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

//desafio
//contar a quantidade de caracteres sem espaço

let desafio = "Bom dia com Muita Alegria";
let solucaoDesafio = desafio.replaceAll("","");
console.log(desafio);
console.log(solucaoDesafio);
console.log(desafio.length);
console.log(solucaoDesafio.length);

