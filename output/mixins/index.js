"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = __importDefault(require("./applyMixins"));
class ProdutoFinal {
    vender(quantidade) {
        return `Foram vendidos ${quantidade} de itens`;
    }
    comprar(quantidade) {
        return `Foram comprados ${quantidade} de itens deste produto`;
    }
}
class Movel {
    sentar() {
        return "Você sentou";
    }
    empurrar(metros) {
        return `O movel foi movido por ${metros}m.`;
    }
}
class Sofa {
    constructor(nome) {
        this.nome = nome;
    }
}
applyMixins_1.default(Sofa, [ProdutoFinal, Movel]);
const produto = new Sofa("Meu sofá");
produto.vender(10);
//# sourceMappingURL=index.js.map