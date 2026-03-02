"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}.`;
    }
    mediaNotas(...notas) {
        let somatorioNotas = notas.reduce((notaTotal, notaAtual) => notaTotal + notaAtual, 0);
        return somatorioNotas / notas.length;
    }
}
const glaucio = new Professor("Glaucio Daniel", 45, "Sociologia");
console.log(glaucio.seApresentar());
console.log(glaucio.mediaNotas(20, 20, 20, 2123, 21, 22, 21, 21));
//# sourceMappingURL=classe_metodo.js.map