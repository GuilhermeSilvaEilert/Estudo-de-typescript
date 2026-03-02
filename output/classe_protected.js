"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return "Interfone tocado!";
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone("Alou ??");
    }
}
const casaDoHomer = new Casa("Azul", { cidade: "Springfield" });
console.log(casaDoHomer.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map