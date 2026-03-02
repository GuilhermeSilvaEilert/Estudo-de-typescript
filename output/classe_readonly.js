"use strict";
class Usuario {
    constructor() {
        this.id = "154564564";
        this.nome = "Gui";
        this.senha = "121231231";
        this.dataCadastro = new Date("2021-01-01");
    }
    soma() {
        return 1;
    }
}
class PessoaFisica extends Usuario {
    constructor() {
        super(...arguments);
        this.cpf = 848596544;
    }
}
const usuario = new Usuario();
const pessoa = new PessoaFisica();
console.log(usuario.id);
//# sourceMappingURL=classe_readonly.js.map