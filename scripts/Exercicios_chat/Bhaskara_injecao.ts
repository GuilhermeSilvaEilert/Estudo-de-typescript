import * as readline from 'readline';

abstract class CalculoBase {
    
    abstract calculo(a:number, b?:number, c?:number):number;
}

class Soma extends CalculoBase{
    calculo(a:number, b:number):number{
        return a + b;
    }
}

class Subtracao extends CalculoBase{
    calculo(a:number, b:number):number{
        return a - b;
    }
}

class Multiplicacao extends CalculoBase{
    calculo(a:number = 1, b:number = 1, c:number = 1):number{
        return a * b * c;
    }
}

class Divisao extends CalculoBase{
    calculo(a:number, b:number):number{
        return a / b;
    }
}

class Potencia extends CalculoBase{
    calculo(a:number):number{
        return Math.pow(a,2);
    }
}

class Raiz extends CalculoBase{
    calculo(a:number):number{
        return Math.sqrt(a);
    }
}

class Delta extends CalculoBase{
    constructor(
        private subtracao:CalculoBase,
        private multiplicacao:CalculoBase,
        private raiz:CalculoBase,
        private potencia:CalculoBase,
    ){
        super();
    }

    calculo(a:number, b:number, c:number):number{
        return this.raiz.calculo(
                    this.subtracao.calculo(
                        this.potencia.calculo(b),this.multiplicacao.calculo(-4*a*c)
                    )
                );
    }
}

class Bhaskara {
    constructor(
       private divisao:CalculoBase,
       private soma:CalculoBase,
       private subtracao:CalculoBase,
       private multiplicacao:CalculoBase,
       private delta:CalculoBase,
    ){}

    calculoRaiz1(a:number, b:number, c:number):number{
        return this.divisao.calculo((this.soma.calculo(-b, this.delta.calculo(a, b, c))),this.multiplicacao.calculo(2, a));
    }

    calculoRaiz2(a:number, b:number, c:number):number{
        
        return this.divisao.calculo(
                (this.subtracao.calculo(
                    -b, this.delta.calculo(a, b, c))),this.multiplicacao.calculo(2, a));;
    }
}

const bhaskara = new Bhaskara(
    new Divisao(),
    new Soma(),
    new Subtracao(),
    new Multiplicacao(),
    new Delta(
        new Soma(),
        new Multiplicacao(), 
        new Raiz(),
        new Potencia(),
    ),
);

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function testedeinput(input:string){
    return new Promise((resolve) => {
        rl.question(input,(resposta) => {   
            resolve(resposta);
        });
    });
}

(async () => {
  try {
    const a = await testedeinput('Qual é o valor a ? ');
    const b = await testedeinput('Qual é o valor b ? ');
    const c = await testedeinput('Qual é o valor c ? ');
    console.log(`Raiz 1: ${bhaskara.calculoRaiz1(a as number, b as number, c as number)}`);
    console.log(`Raiz 2: ${bhaskara.calculoRaiz2(a as number, b as number, c as number)}`);
  } catch (error) {
    console.error('Erro ao capturar o input:', error);
  } finally {
    rl.close(); // Fecha a interface após o uso
  }
})();

//console.log(bhaskara.calculoRaiz1(2, -7, 3));
//console.log(bhaskara.calculoRaiz2(2, -7, 3));