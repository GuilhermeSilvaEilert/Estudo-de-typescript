"use strict";
class Permisscao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(novoNome) {
        if (novoNome.length <= 5) {
            throw new Error(" O novo nome da permissão deve conter no mínimo 5 letras");
        }
        this._nome = novoNome;
    }
}
const permissao = new Permisscao("Administrador", 1);
console.log(permissao.nome);
try {
    permissao.nome = "adm";
}
catch (e) {
    console.log(e);
}
console.log(permissao.nome);
//# sourceMappingURL=classe_getters_setters.js.map