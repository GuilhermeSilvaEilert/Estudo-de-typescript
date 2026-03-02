"use strict";
function reverter(...lista) {
    let tamanho = lista.length;
    let novalista = [];
    console.log(tamanho);
    for (let i = tamanho - 1; i >= 0; i--) {
        console.log(i);
        novalista.push(lista[i]);
    }
    return novalista;
}
class teste23 {
    constructor(nome) {
        this.nome = nome;
    }
}
class teste21 {
    constructor(nome) {
        this.nome = nome;
    }
}
class teste22 {
    constructor(nome) {
        this.nome = nome;
    }
}
class teste24 {
    constructor(nome) {
        this.nome = nome;
    }
}
const nome1 = new teste23("Guilherme");
const nome2 = new teste21("Tania");
const nome3 = new teste22("Tania");
const nome4 = new teste24("Aurélio");
console.log(reverter(nome1, nome2, nome3, nome4));
//# sourceMappingURL=ReverteArray.js.map