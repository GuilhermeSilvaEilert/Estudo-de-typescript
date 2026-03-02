"use strict";
class Banco {
    constructor() {
        this.cofreQtd = 10000;
    }
    debitarCofre(quantidade) {
        if (quantidade <= this.cofreQtd) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return "O Cofre não possui esse valor";
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24Horas extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const nubank = new Banco();
const banco24Horas = new Banco24Horas();
nubank.sacarDoCaixaEletronico(1000);
banco24Horas.sacar(2500);
console.log();
//# sourceMappingURL=classe_private.js.map