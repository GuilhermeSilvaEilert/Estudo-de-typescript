"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
let contador = 0;
let arrayGlobal = [1, 2, 3,];
function incrementaContador() {
    contador++;
    return contador;
}
console.log(incrementaContador());
function exibirMensagem(mensagem) {
    console.log(mensagem);
}
exibirMensagem("Gases");
function adicionarItem(...item) {
    for (let Index = 0; Index <= item.length; Index++) {
        arrayGlobal.push(item[Index]);
    }
    return arrayGlobal.length;
}
console.log(adicionarItem(1, 2, 3, 4, 5, "papa", "popop", "1234"));
function pegarDataAtual() {
    return new Date();
}
console.log(pegarDataAtual());
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function testedeinput(input) {
    return new Promise((resolve) => {
        rl.question(input, (resposta) => {
            resolve(resposta);
        });
    });
}
const pergunta = (nome, sobrenome) => {
    return new Promise((resolve) => {
        rl.question(nome, (resposta) => {
            resolve(resposta);
        });
    });
};
function somando(a, b) {
    return a + b;
}
(async () => {
    try {
        const a = await testedeinput('Qual é o valor a ? ');
        const b = await testedeinput('Qual é o valor b ? ');
        console.log(somando(a, b));
    }
    catch (error) {
        console.error('Erro ao capturar o input:', error);
    }
    finally {
        rl.close();
    }
})();
//# sourceMappingURL=Funcoes_Impuras.js.map