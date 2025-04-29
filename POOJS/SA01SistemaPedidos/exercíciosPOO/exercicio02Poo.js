// Classe Veiculo
class Veiculo {
    #marca;
    #modelo;
    #ano;

    constructor(marca, modelo, ano) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }
    exibirInfo(){
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Ano: ${this.#ano}`);
    }

}
// Subclasse Carro
class Carro extends Veiculo {
    #quantidadePortas;

    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano); // chama o construtor da superclasse
        this.#quantidadePortas = quantidadePortas;
    }

    exibirInfo() {

        console.log(`Portas: ${this.#quantidadePortas}`);
    }
}


// Teste da subclasse Carro - instanciar um objeto
let carro1 = new Carro("Toyota", "Corolla", 2022, 4);
carro1.exibirInfo();