"use strict";
class Conversor {
    static dolar_para_real(valor_em_dolar) {
        return valor_em_dolar * this.TAXAFIXAREALPARADOLAR;
    }
    static real_para_dolar(valor_em_real) {
        return valor_em_real / this.TAXAFIXAREALPARADOLAR;
    }
}
Conversor.TAXAFIXAREALPARADOLAR = 6.00;
console.log(`Dolar para real: ${Conversor.dolar_para_real(12)}`);
console.log(`Real para dolar: ${Conversor.real_para_dolar(12)}`);
//# sourceMappingURL=class_Conversor.js.map