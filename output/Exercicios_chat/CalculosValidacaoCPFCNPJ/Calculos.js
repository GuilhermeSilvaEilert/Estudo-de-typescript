"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soma = exports.CalculosCPFCNPJ = void 0;
class CalculosCPFCNPJ {
    static soma(valor1, valor2) {
        return valor1 + valor2;
    }
    static multiplicacao(valor1, valor2) {
        return valor1 * valor2;
    }
    static subtracao(valor1 = 0, valor2 = 0, valor3 = 0) {
        return valor1 - valor2 - valor3;
    }
    static resto(valor1, valor2) {
        if (valor1 % valor2 < 2) {
            console.log("Resto menor que 2: " + valor1 % 11);
            return 0;
        }
        else {
            console.log("Resto maior que 2: " + (11 - (valor1 % 11)));
            return 11 - (valor1 % valor2);
        }
    }
}
exports.CalculosCPFCNPJ = CalculosCPFCNPJ;
class Soma {
    calculo(a, b) {
        return a + b;
    }
}
exports.Soma = Soma;
//# sourceMappingURL=Calculos.js.map