"use strict";
let FprimeiraSoma;
FprimeiraSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
let calculadora;
function multiplicar(a, b) {
    return a + b;
}
const subtrair = (n1, n2) => n1 - n2;
calculadora = {
    dividir: (numero1, numero2) => {
        return numero1 / numero2;
    },
    somar: (numero1, numero2) => {
        return numero1 + numero2;
    },
    multiplicar,
    subtrair
};
console.log(calculadora.multiplicar(2, 2));
console.log(calculadora.subtrair(2, 2));
//# sourceMappingURL=interface_funcoes.js.map