"use strict";
class PessoaH {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString() {
        return `
            Nome: ${this.nome}, 
            Idade: ${this.idade}, 
            Altura${this.altura}`;
    }
}
const ronaldo = new PessoaH("Ronaldo", 19, 1.85);
const marcus = new PessoaH("Marcus", 33, 1.70);
console.log("Pessoa1: " + ronaldo.toString());
console.log(marcus.toString());
//# sourceMappingURL=primeira_classe.js.map