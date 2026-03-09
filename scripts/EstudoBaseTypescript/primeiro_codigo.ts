console.log('peidei');

console.log("================");

const nome = "Jão";

console.log("Ola" + nome + ", Tudo bem ?");

class Produto{

    nome: string;
    valor: number;
    constructor(produtoNome: string, produtoValor: number){
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
}

const playstation5 = new Produto("Playstation 5", 5000);

console.log("================");

const elemento = document.querySelector('div');
