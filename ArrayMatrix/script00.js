// declaração de uma array "[]"
let array = []; //array dinâmico

let arrayNumeros = [1,2,3,4,5,6,7,8,9];
let arraytexto = ["Sapato", "caixa", "Meia"];
let arrayMisto = [1, "José",true];

// tamanho de uma Array (length)
console.log(arrayNumeros.length); //9

// acessar um elemento do array (index)
console.log(arraytexto[1]); // posiçao -1

//adicionar elementos em um array

// no começo (unshift)

arraytexto.unshift("tênis")
console.log(arraytexto);
// no fim (push)
arraytexto.push("Chinelo");
console.log(arraytexto);

// trocar um valor
arraytexto[2] = "Sacola";
console.log(arraytexto);

//remover elementos do array
//no começo (shift)
arraytexto.shift();
console.log(arraytexto);
//no fim  (pop)
arraytexto.pop();
console.log(arraytexto);

//percorrer um array (laço de repetição)
//percorrer um array - for
for(let i =0;i<arrayNumeros.length;i++){
    console.log("indice["+i+"]="+[arrayNumeros[1]])
}

//forEach
arraytexto.forEach(elemento => {
    console.log(elemento)
});

// metodos uteis 
// indexOf
console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 (elementos inexistente)

//splice (remover o elemento da posição)
arrayMisto.splice(2,1);
console.log (arrayMisto);

//operações avançadas de Arrays
//Map - novos valores
let valores = [10,20,30,40,50];
let valoresdobro = valores.map(x => x*2);
console.log(valoresdobro);

// filter - comparação
let valoresfilter = valores.filter(x => x>25);
console.log(valoresfilter);
//desafio (filtro x<35) && (x*3) = 30,60,90


let valoresDesafio = valores.filter(x=>x<35).
map(x=>x*3);
console.log(valoresDesafio);

//reduce ([] -> let x)
let soma = valores.reduce((x,y) => x+y);
console.log(soma);


//sort (organizar)
let aleatorio = [7,4,2,9,1,5,8,3,6];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);
