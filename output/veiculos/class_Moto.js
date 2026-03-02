"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const GeradorID_1 = __importDefault(require("../utils/GeradorID"));
const class_veiculo_1 = __importDefault(require("./class_veiculo"));
const Rastreamento_1 = __importDefault(require("../utils/Rastreamento"));
const applyMixins_1 = __importDefault(require("../mixins/applyMixins"));
class Moto {
    constructor(cilindras, marca, modelo) {
        this.cilindras = cilindras;
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        return "pa, papapapapapapaaaaaaaaa";
    }
    exibir_detalhes() {
        return `Id: ${GeradorID_1.default.gerar()}\nMarca: ${this.marca}, \nModelo: ${this.modelo}, \nCilindradas: ${this.cilindras}`;
    }
}
exports.Moto = Moto;
applyMixins_1.default(Moto, [class_veiculo_1.default, Rastreamento_1.default]);
//# sourceMappingURL=class_Moto.js.map