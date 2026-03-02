"use strict";
{
    class ValidaCPF {
        validador(cpf) {
            let multiplicador = 11;
            let acumulador = 0;
            let resto1 = 0;
            let resto2 = 0;
            for (let i = 0; i <= cpf.length - 3; i++) {
                acumulador += Number(cpf[i]) * (multiplicador - 1 - i);
            }
            resto1 = (acumulador * 10) % 11;
            if (resto1 == Number(cpf[9]) || resto1 == 10) {
                acumulador = 0;
                for (let i = 0; i <= cpf.length - 2; i++) {
                    acumulador += Number(cpf[i]) * (multiplicador - i);
                }
                resto2 = (acumulador * 10) % 11;
                if (resto2 === Number(cpf[10])) {
                    console.log("CPF valido");
                }
                else {
                    console.log("CPF invalido");
                }
            }
            else {
                console.log("CPF invalido");
            }
        }
    }
    const validaCPF = new ValidaCPF();
    validaCPF.validador("52998224725");
}
class CalculosCPF {
    static soma(valor1, valor2) {
        return valor1 + valor2;
    }
    static multiplicacao(valor1, valor2) {
        return valor1 * valor2;
    }
    static subtracao(valor1 = 0, valor2 = 0, valor3 = 0) {
        return valor1 - valor2 - valor3;
    }
    static resto(valor1, valor2) {
        if (valor1 % valor2 < 2) {
            console.log("Resto menor que 2: " + valor1 % 11);
            return 0;
        }
        else {
            console.log("Resto maior que 2: " + (11 - (valor1 % 11)));
            return 11 - (valor1 % valor2);
        }
    }
}
class ValidaDigitoVerificador {
    static validaCPF(valor1, valor2) {
        if (valor1 === valor2) {
            return true;
        }
        else {
            return false;
        }
    }
}
class MultiplicadorAcumulativo {
    multiplicandoAcumulativoDigito(cpf, offsetMultiplicador, contador) {
        let acumulador = 0;
        for (let i = 0; i < contador; i++) {
            console.log(`${10 + offsetMultiplicador - i}*${cpf[i]} = ${(10 - i) * Number(cpf[i])}`);
            acumulador += (10 + offsetMultiplicador - i) * Number(cpf[i]);
        }
        console.log(acumulador);
        return acumulador;
    }
}
class ValidaCPF {
    constructor(multiplicadorAcumulativo) {
        this.multiplicadorAcumulativo = multiplicadorAcumulativo;
    }
    validador(cpf) {
        if (cpf.length === 11 &&
            !/^@\d{11}$/.test(cpf) &&
            ValidaDigitoVerificador.validaCPF(CalculosCPF.resto(this.multiplicadorAcumulativo.multiplicandoAcumulativoDigito(cpf, 0, 9), 11), Number(cpf[9])) &&
            ValidaDigitoVerificador.validaCPF(CalculosCPF.resto(this.multiplicadorAcumulativo.multiplicandoAcumulativoDigito(cpf, 1, 10), 11), Number(cpf[10]))) {
            console.log("CPF valido");
            return true;
        }
        else {
            console.log("CPF invalido");
            return false;
        }
    }
}
const validaCPF = new ValidaCPF(new MultiplicadorAcumulativo());
validaCPF.validador("86195956015");
//# sourceMappingURL=ValidaCPF.js.map