class PessoaH {

    nome: string;
    idade:number;
    altura:number;

    constructor(nome: string, idade: number, altura: number){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    toString():string {
        return `
            Nome: ${this.nome}, 
            Idade: ${this.idade}, 
            Altura${this.altura}`;
    }


}


const ronaldo:object =  new PessoaH("Ronaldo", 19, 1.85);

const marcus = new PessoaH("Marcus", 33, 1.70);

console.log("Pessoa1: " + ronaldo.toString());

console.log(marcus.toString());