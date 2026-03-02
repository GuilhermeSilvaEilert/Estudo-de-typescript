"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidaCartao_1 = require("./ValidaCartao");
let validaCartao = new ValidaCartao_1.ValidarCartao();
class GeraNumeroCartao {
    gerador() {
        let numeroCartao = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
        let somadores1 = "";
        let acumulador = 0;
        let acumulador2 = 0;
        for (let i = 14; i >= 0; i = i - 2) {
            somadores1 = (Number(numeroCartao[i]) * 2).toString();
            if (Number(somadores1) >= 10) {
                somadores1 = (Number(somadores1[0]) + Number(somadores1[1])).toString();
            }
            acumulador += Number(somadores1);
        }
        for (let k = 13; k >= 1; k = k - 2) {
            console.log(numeroCartao[k]);
            acumulador2 += Number(numeroCartao[k]);
        }
        console.log(acumulador);
        console.log(acumulador2);
        acumulador = (acumulador + acumulador2) % 10;
        acumulador = 10 - acumulador;
        return numeroCartao + `${acumulador}`;
    }
}
const geraNumeroCartao = new GeraNumeroCartao();
let numeroCartao = geraNumeroCartao.gerador();
console.log(validaCartao.validador(numeroCartao));
console.log(numeroCartao);
//# sourceMappingURL=GeradorCartao.js.map