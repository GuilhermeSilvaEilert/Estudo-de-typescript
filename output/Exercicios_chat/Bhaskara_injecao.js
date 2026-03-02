"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class CalculoBase {
}
class Soma extends CalculoBase {
    calculo(a, b) {
        return a + b;
    }
}
class Subtracao extends CalculoBase {
    calculo(a, b) {
        return a - b;
    }
}
class Multiplicacao extends CalculoBase {
    calculo(a = 1, b = 1, c = 1) {
        return a * b * c;
    }
}
class Divisao extends CalculoBase {
    calculo(a, b) {
        return a / b;
    }
}
class Potencia extends CalculoBase {
    calculo(a) {
        return Math.pow(a, 2);
    }
}
class Raiz extends CalculoBase {
    calculo(a) {
        return Math.sqrt(a);
    }
}
class Delta extends CalculoBase {
    constructor(subtracao, multiplicacao, raiz, potencia) {
        super();
        this.subtracao = subtracao;
        this.multiplicacao = multiplicacao;
        this.raiz = raiz;
        this.potencia = potencia;
    }
    calculo(a, b, c) {
        return this.raiz.calculo(this.subtracao.calculo(this.potencia.calculo(b), this.multiplicacao.calculo(-4 * a * c)));
    }
}
class Bhaskara {
    constructor(divisao, soma, subtracao, multiplicacao, delta) {
        this.divisao = divisao;
        this.soma = soma;
        this.subtracao = subtracao;
        this.multiplicacao = multiplicacao;
        this.delta = delta;
    }
    calculoRaiz1(a, b, c) {
        return this.divisao.calculo((this.soma.calculo(-b, this.delta.calculo(a, b, c))), this.multiplicacao.calculo(2, a));
    }
    calculoRaiz2(a, b, c) {
        return this.divisao.calculo((this.subtracao.calculo(-b, this.delta.calculo(a, b, c))), this.multiplicacao.calculo(2, a));
        ;
    }
}
const bhaskara = new Bhaskara(new Divisao(), new Soma(), new Subtracao(), new Multiplicacao(), new Delta(new Soma(), new Multiplicacao(), new Raiz(), new Potencia()));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function testedeinput(input) {
    return new Promise((resolve) => {
        rl.question(input, (resposta) => {
            resolve(resposta);
        });
    });
}
(async () => {
    try {
        const a = await testedeinput('Qual é o valor a ? ');
        const b = await testedeinput('Qual é o valor b ? ');
        const c = await testedeinput('Qual é o valor c ? ');
        console.log(`Raiz 1: ${bhaskara.calculoRaiz1(a, b, c)}`);
        console.log(`Raiz 2: ${bhaskara.calculoRaiz2(a, b, c)}`);
    }
    catch (error) {
        console.error('Erro ao capturar o input:', error);
    }
    finally {
        rl.close();
    }
})();
//# sourceMappingURL=Bhaskara_injecao.js.map