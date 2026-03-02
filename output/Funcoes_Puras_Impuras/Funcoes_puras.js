"use strict";
function soma(a, b) {
    return a + b;
}
function saudacao(nome) {
    return `Olá, ${nome}`;
}
function duplicaArray(...arr) {
    let duplicados = [];
    for (let item in arr) {
        duplicados.push(item, item);
    }
    return duplicados;
}
function calcularArea(base, altura) {
    return base * altura;
}
function paraMaiusculo(texto) {
    return texto.toLocaleUpperCase();
}
console.log(paraMaiusculo("Torpedo"));
console.log(soma(1, 1));
console.log(saudacao("Guilherme"));
console.log(duplicaArray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(calcularArea(12, 15));
//# sourceMappingURL=Funcoes_puras.js.map