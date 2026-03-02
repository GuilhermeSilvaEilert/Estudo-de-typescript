"use strict";
const string = {
    valor: "Hcode",
    realizarProcessamento(argumento) {
        return argumento.toLocaleUpperCase();
    }
};
console.log(string.valor);
console.log(string.realizarProcessamento("dsdjasdasdas"));
const numero = {
    valor: 10,
    realizarProcessamento(v) {
        return v * v;
    },
};
console.log(numero.realizarProcessamento(numero.valor));
//# sourceMappingURL=interfaces_genericas.js.map