"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const joao = new Cliente("João", new Date("2000-02-06"), "gui.eilert@gmail.com", "Schalter");
console.log(joao);
//# sourceMappingURL=classe_herenca.js.map