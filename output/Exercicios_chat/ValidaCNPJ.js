"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidaCNPJ = void 0;
class ValidaCNPJ {
    validadorCNPJ(cnpj) {
        let acumulador = 0;
        let acumulador2 = 0;
        let digitoVerificador1 = 0;
        let digitoVerificador2 = 0;
        for (let i = 0 + 1; i < ValidaCNPJ.MULTIPLICADORES.length; i++) {
            acumulador += Number(ValidaCNPJ.MULTIPLICADORES[i]) * Number(cnpj[i - 1]);
        }
        for (let j = 0; j < ValidaCNPJ.MULTIPLICADORES.length; j++) {
            acumulador2 += Number(ValidaCNPJ.MULTIPLICADORES[j]) * Number(cnpj[j - 0]);
        }
        if (acumulador % 11 < 2) {
            digitoVerificador1 = 0;
        }
        else {
            digitoVerificador1 = 11 - (acumulador % 11);
        }
        if (acumulador2 % 11 < 2) {
            digitoVerificador2 = 0;
        }
        else {
            digitoVerificador2 = 11 - (acumulador2 % 11);
        }
        if (digitoVerificador1 === Number(cnpj[12]) && digitoVerificador2 === Number(cnpj[13])) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.ValidaCNPJ = ValidaCNPJ;
ValidaCNPJ.MULTIPLICADORES = "6543298765432";
//# sourceMappingURL=ValidaCNPJ.js.map