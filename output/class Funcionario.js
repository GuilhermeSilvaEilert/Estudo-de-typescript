"use strict";
class Funcionario {
    constructor(nome) {
        this.nome = nome;
    }
    calcular_salario(vendas) { }
}
class Gerente extends Funcionario {
    constructor(nome) {
        super(nome);
        this.nome = nome;
    }
    calcular_salario() {
        return 5000;
    }
}
class Vendedor extends Funcionario {
    constructor(nome) {
        super(nome);
        this.nome = nome;
    }
    calcular_salario(vendas) {
        return 1800 + (vendas * 0.05);
    }
}
const gerente = new Gerente("guilherme");
const peao = new Vendedor("guilherme");
console.log(peao.calcular_salario(10000));
console.log(gerente.calcular_salario());
//# sourceMappingURL=class%20Funcionario.js.map