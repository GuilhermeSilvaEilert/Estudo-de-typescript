"use strict";
class Conta_Bancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    set depositar(valor) {
        this.saldo += valor;
    }
    set sacar(valor) {
        if ((this.saldo - valor < -1000)) {
            throw new Error("O saque compromete o valor do cheque especial");
        }
        this.saldo -= valor;
    }
    get exibir_saldo() {
        return `Boa tarde sr ${this.titular} \nSeu saldo total é: ${this.saldo}`;
    }
}
const bradesco = new Conta_Bancaria("Guilherme", 10000);
bradesco.depositar = 3000;
console.log(bradesco.exibir_saldo);
bradesco.sacar = 14000;
console.log(bradesco.exibir_saldo);
//# sourceMappingURL=class_conta_bancaria.js.map