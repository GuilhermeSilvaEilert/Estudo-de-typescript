"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidaCNPJ_1 = require("./ValidaCNPJ");
const validaCNPJ = new ValidaCNPJ_1.ValidaCNPJ();
class GeraCNPJ {
    gerador() {
        const multiplicadores = "6543298765432";
        let cnpj = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');
        ;
        let acumulador1 = 0;
        let acumulador2 = 0;
        for (let i = 0; i <= cnpj.length - 1; i++) {
            console.log(`${Number(cnpj[i])} * ${Number(multiplicadores[i + 1])} = ${Number(cnpj[i]) * Number(multiplicadores[i + 1])}`);
            acumulador1 += Number(cnpj[i]) * Number(multiplicadores[i + 1]);
        }
        if (acumulador1 % 11 < 2) {
            cnpj += "0";
        }
        else {
            cnpj += (11 - (acumulador1 % 11));
        }
        console.log(acumulador1);
        for (let j = 0; j <= cnpj.length - 1; j++) {
            console.log(`${Number(cnpj[j])} * ${Number(multiplicadores[j])} = ${Number(cnpj[j]) * Number(multiplicadores[j])}`);
            acumulador2 += Number(cnpj[j]) * Number(multiplicadores[j]);
        }
        if (acumulador2 % 11 < 2) {
            cnpj += "0";
        }
        else {
            cnpj += `${11 - ((acumulador2 % 11))}`;
        }
        console.log(acumulador2);
        return cnpj;
    }
}
const geraCNPJ = new GeraCNPJ();
let cnpjGerado = geraCNPJ.gerador();
console.log(cnpjGerado);
console.log(validaCNPJ.validadorCNPJ(cnpjGerado));
//# sourceMappingURL=GeradorCNPJ.js.map