"use strict";
class GeraCPF {
    geradorCPf() {
        let cpf = Date.now().toString().substring(4, 13);
        let acumulador = 0;
        let multiplicador = 11;
        let resto1;
        let resto2;
        console.log(cpf);
        for (let i = 0; i <= cpf.length - 1; i++) {
            acumulador += Number(cpf[i]) * (10 - i);
        }
        resto1 = (acumulador * 10) % 11;
        cpf += resto1;
        acumulador = 0;
        for (let i = 0; i <= cpf.length - 1; i++) {
            acumulador += Number(cpf[i]) * (11 - i);
        }
        resto2 = (acumulador * 10) % 11;
        cpf += resto2;
        return cpf;
    }
}
const gerarCPF = new GeraCPF();
console.log(gerarCPF.geradorCPf());
{
    class MathCPF {
        static soma(valor1, valor2) {
            return valor1 + valor2;
        }
        static subtracao(valor1, valor2) {
            return valor1 - valor2;
        }
        static resto(valor1, valor2) {
            if (valor1 % valor2 < 2) {
                console.log("Resto menor que 2: " + valor1 % valor2);
                return 0;
            }
            else {
                console.log("Resto maior que 2: " + (11 - (valor1 % 11)));
                return 11 - (valor1 % valor2);
            }
        }
        static multiplicacao(valor1, valor2) {
            return valor1 * valor2;
        }
    }
    class ValorBaseDigitosVerificadores {
        geraValorBase(cpf, offsetMultiplicador, contador) {
            let acumulador = 0;
            for (let i = 0; i < contador; i++) {
                console.log(`${10 + offsetMultiplicador - i}*${cpf[i]} = ${(10 + offsetMultiplicador - i) * Number(cpf[i])}`);
                acumulador += (10 + offsetMultiplicador - i) * Number(cpf[i]);
            }
            console.log(acumulador);
            return acumulador;
        }
    }
    class GeraCPF {
        constructor(valorBaseDigitoVerificador) {
            this.valorBaseDigitoVerificador = valorBaseDigitoVerificador;
        }
        geradorCPf() {
            let cpf = "861959560";
            let resto1;
            let resto2;
            resto1 = MathCPF.resto((this.valorBaseDigitoVerificador.geraValorBase(cpf, 0, 9)), 11);
            cpf += resto1;
            resto2 = MathCPF.resto((this.valorBaseDigitoVerificador.geraValorBase(cpf, 1, 10)), 11);
            cpf += resto2;
            return cpf;
        }
    }
    const gerarCPF = new GeraCPF(new ValorBaseDigitosVerificadores());
    console.log(gerarCPF.geradorCPf());
}
//# sourceMappingURL=CriaCPF.js.map