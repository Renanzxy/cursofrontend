
// Exercício 10: Gerenciamento de Estoque
let estoque = [
    { produto: "Arroz", quantidade: 10, preco: 5.0 },
    { produto: "Feijão", quantidade: 20, preco: 7.5 },
    { produto: "Macarrão", quantidade: 15, preco: 4.0 }
];

function adicionarProduto(produto, quantidade, preco) {
    estoque.push({ produto, quantidade, preco });
}

function atualizarQuantidade(produto, novaQuantidade) {
    let item = estoque.find(item => item.produto === produto);
    if (item) item.quantidade = novaQuantidade;
}

function calcularValorTotal() {
    return estoque.reduce((acc, item) => acc + item.quantidade * item.preco, 0);
}

console.log(estoque);
adicionarProduto("Café", 30, 6.0);
console.log(estoque);
atualizarQuantidade("Arroz", 12);
console.log(estoque);
console.log("Valor total do estoque:", calcularValorTotal());
