"use strict";
class teste123 {
    constructor(nome = "Guilherme") {
        this.nome = nome;
    }
    testador() {
        return this.nome;
    }
}
class TesteImplements {
    constructor(nome) {
        this.nome = nome;
    }
    testador() {
        throw new Error("Method not implemented.");
    }
}
const testeImplements = new TesteImplements("Guilherme");
console.log(testeImplements.testador());
//# sourceMappingURL=testando_situacoes_do_GPT.js.map