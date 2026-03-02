"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.idade = idade;
        this.nome = nome;
        Pessoa.CONTADOR = 1 + Pessoa.CONTADOR;
    }
    static exibir_contador() {
        return Pessoa.CONTADOR;
    }
}
Pessoa.CONTADOR = 0;
const talia = new Pessoa("Talia", 24);
const guilherme = new Pessoa("guilherme", 24);
const matheus = new Pessoa("matheus", 24);
const julia = new Pessoa("matheus", 24);
console.log(Pessoa.exibir_contador());
//# sourceMappingURL=class_pessoa.js.map