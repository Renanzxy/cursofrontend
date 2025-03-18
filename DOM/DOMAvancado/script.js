// adicionar elementos avançados com DOM
//construir um cabeçalho com DOM (Header)

let header = document.createElement("header"); //criou o elementos
header.style.backgroundColor = "black";
header.style.height = "8vh";
document.body.appendChild(header); //adicionando o header como elementos filho do body
document.body.style.margin = "0"; // retirando a margin do body

//adicionar elementos no header
let divNav = document.createElement("div");
divNav.style.display = "flex"
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue"
divNav.style.height = "100%";
divNav.style.allignItems = "center"
divNav.style.fontSize = "5vh"
divNav.style.fontFamily = "Comic Sans MS";

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"];
//adicionar itens na Nav
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);
});