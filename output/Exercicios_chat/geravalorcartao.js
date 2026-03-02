"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidaCartao_1 = require("./ValidaCartao");
let validaCartao = new ValidaCartao_1.ValidarCartao();
class GeraNumeroCartao {
    gerador() {
        let numeroCartao = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
        let acumuladorSring = "";
        let acumuladorNumero = 0;
        let acumuladorNumero2 = 0;
        for (let i = 0; i <= numeroCartao.length - 1; i = i + 2) {
            acumuladorSring += (Number(numeroCartao[i]) * 2).toString();
        }
        for (let j = 0; j <= acumuladorSring.length - 1; j++) {
            acumuladorNumero = Number(acumuladorSring[j]) + acumuladorNumero;
        }
        for (let k = 1; k <= numeroCartao.length - 1; k = k + 2) {
            acumuladorNumero2 += Number(numeroCartao[k]);
        }
        console.log(10 - ((acumuladorNumero2 + acumuladorNumero) % 10));
        numeroCartao = numeroCartao + (10 - ((acumuladorNumero2 + acumuladorNumero) % 10));
        console.log(validaCartao.validador(numeroCartao));
        return numeroCartao;
    }
}
const geraNumeroCartao = new GeraNumeroCartao();
console.log(geraNumeroCartao.gerador());
//# sourceMappingURL=geravalorcartao.js.map