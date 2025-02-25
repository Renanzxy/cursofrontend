//funções de data e hora
let agora = new Date();

console.log(agora);

console.log(agora.toDateString()); // Retorna a data no formato abreviado (ex: "Wed Feb 07 2025")

console.log(agora.toLocaleTimeString()); // Retorna apenas a hora formatada

//get
console.log(agora.getFullYear(2030));


//set 

agora.setFullYear(2030);
console.log(agora.toLocalDateString());

//operacoes de data e hora

let data1 =new Date("2025-02-04");
let data2 =new Date("2025-12-17");

let diferenca =data2-data1;

console.log(diferenca/(1000*60*60*24));// calcular em dias a 





