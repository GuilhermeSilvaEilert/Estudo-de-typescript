"use strict";
class Documento {
    constructor() {
        this.valor = "1236544789-01";
        this.#numero = 35;
    }
    #numero;
    mostrarDocumento() {
        return this.#numero;
    }
}
class CNPJ extends Documento {
    constructor() {
        super(...arguments);
        this.#numero = 50;
    }
    #numero;
    mostrarCNPJ() {
        return this.#numero;
    }
}
const rg = new Documento();
const cnpj = new CNPJ();
console.log(cnpj.mostrarCNPJ());
console.log(rg.mostrarDocumento());
//# sourceMappingURL=classe_private_ecms_ts.js.map