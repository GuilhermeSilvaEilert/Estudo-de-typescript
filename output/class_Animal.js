"use strict";
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}
class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
    }
    fazer_Som() {
        return "Au au, chupa meu bilau";
    }
}
class Gato extends Animal {
    constructor(nome) {
        super(nome);
    }
    fazer_Som() {
        return "Miauuuuu pega no meu pauuu";
    }
}
const viraLata = new Cachorro("Kiara");
console.log(viraLata.fazer_Som());
const malhado = new Gato("Camilo");
console.log(malhado.fazer_Som());
//# sourceMappingURL=class_Animal.js.map