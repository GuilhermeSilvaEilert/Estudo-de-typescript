"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidarCartao = void 0;
class Operacoes {
    static somarDigitos(a, b) {
        return a + b;
    }
}
class ValidarCartao {
    validador(ncartao) {
        let acumuladorString = "";
        let acumuladorNumero = 0;
        let acumuladorNumero2 = 0;
        if (ncartao.length === 16) {
            for (let i = 14; i >= 0; i = i - 2) {
                acumuladorString += (Number(ncartao[i]) * 2).toString();
            }
            for (let j = 0; j <= acumuladorString.length - 1; j++) {
                acumuladorNumero = Operacoes.somarDigitos(Number(acumuladorString[j]), acumuladorNumero);
            }
            for (let k = 15; k >= 1; k = k - 2) {
                acumuladorNumero2 = Operacoes.somarDigitos(Number(ncartao[k]), acumuladorNumero2);
            }
            if ((Operacoes.somarDigitos(acumuladorNumero, acumuladorNumero2)) % 10 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
exports.ValidarCartao = ValidarCartao;
//# sourceMappingURL=ValidaCartao.js.map