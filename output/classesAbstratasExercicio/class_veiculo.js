"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorID = exports.Veiculos = void 0;
class Veiculos {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() { }
    exibir_detalhes() { }
}
exports.Veiculos = Veiculos;
class GeradorID {
    constructor() {
        GeradorID.CONTADOR = GeradorID.CONTADOR + 1;
    }
    static gerar() {
        return Math.random.toString().substr(2, 9);
    }
}
exports.GeradorID = GeradorID;
GeradorID.CONTADOR = 0;
//# sourceMappingURL=class_veiculo.js.map