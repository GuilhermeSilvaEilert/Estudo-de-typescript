"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const class_veiculo_1 = __importDefault(require("./class_veiculo"));
const GeradorID_1 = __importDefault(require("../utils/GeradorID"));
const Rastreamento_1 = __importDefault(require("../utils/Rastreamento"));
const applyMixins_1 = __importDefault(require("../mixins/applyMixins"));
class Carro {
    constructor(quantidadeDePortas, marca, modelo) {
        this.quantidadeDePortas = quantidadeDePortas;
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        return "Vrum, vrummmmm";
    }
    exibir_detalhes() {
        return `Id: ${GeradorID_1.default.gerar()}
        \nMarca: ${this.marca}, 
        \nModelo: ${this.modelo}, 
        \nPortas: ${this.quantidadeDePortas}`;
    }
}
exports.Carro = Carro;
applyMixins_1.default(Carro, [class_veiculo_1.default, Rastreamento_1.default]);
//# sourceMappingURL=class_Carro.js.map