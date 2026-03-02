export class CalculosCPFCNPJ {
    static soma(valor1: number, valor2: number){
        return valor1 + valor2;
    }
    static multiplicacao(valor1: number, valor2: number){
        return valor1 * valor2;
    }
    static subtracao(valor1: number = 0, valor2: number = 0, valor3:number = 0){
        return valor1 - valor2 - valor3;
    }
    static resto(valor1: number, valor2: number){
        if(valor1 % valor2 < 2){
            console.log("Resto menor que 2: " + valor1 % 11);
            return 0;
        }else {
            console.log("Resto maior que 2: " + (11 - (valor1 % 11)));
            return 11 - (valor1 % valor2);
        }
    }
}

export class Soma{
    calculo(a, b){
        return a+b;
    }
}
