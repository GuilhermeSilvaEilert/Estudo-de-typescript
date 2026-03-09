//V1
class GeraCPF {
    geradorCPf():string{
        let cpf:string = Date.now().toString().substring(4, 13);
        let acumulador:number = 0;
        let multiplicador:number = 11;
        let resto1:number;
        let resto2:number;

        console.log(cpf);
        for(let i:number = 0; i<=cpf.length - 1;i++){
            acumulador += Number(cpf[i])*(10 - i);
        }

        resto1 = (acumulador * 10)%11;
        
        cpf += resto1;

        acumulador = 0;
        
        for(let i:number = 0; i<=cpf.length - 1;i++){
            acumulador += Number(cpf[i])*(11 - i);
        }
            
        resto2 = (acumulador * 10)%11;

        cpf += resto2;
            
        return cpf;
    }
}

const gerarCPF = new GeraCPF();

console.log(gerarCPF.geradorCPf());

//V2
{

    class MathCPF{ 
        static soma(valor1:number, valor2:number):number{
            return valor1 + valor2;
        }
   
        static subtracao(valor1:number, valor2:number):number{
            return valor1 - valor2;
        }
    
        static resto(valor1: number, valor2: number){
        if(valor1 % valor2 < 2){
            console.log("Resto menor que 2: " + valor1 % valor2);
            return 0;
        }else {
            console.log("Resto maior que 2: " + (11 - (valor1 % 11)));
            return 11 - (valor1 % valor2);
        }
    }

        static multiplicacao(valor1:number, valor2:number):number{
            return valor1 * valor2;
        }
    }

    class ValorBaseDigitosVerificadores {
        geraValorBase(cpf:string, offsetMultiplicador:number, contador:number){
            let acumulador:number = 0;
            for(let i:number = 0; i < contador ;i++){
            console.log(`${10 + offsetMultiplicador - i}*${cpf[i]} = ${(10 + offsetMultiplicador - i)*Number(cpf[i])}`);
            acumulador += (10 + offsetMultiplicador - i)*Number(cpf[i]);
            //acumulador = CalculosCPF.soma(CalculosCPF.multiplicacao(Number(cpf[i]), CalculosCPF.subtracao(multiplicador, i, offsetMultiplicador)), acumulador);
        }
        console.log(acumulador);
        return acumulador;
        }
    }

    class GeraCPF {

        constructor(
            private valorBaseDigitoVerificador: ValorBaseDigitosVerificadores,
        ){}
        geradorCPf():string{
            let cpf:string = "861959560"//Array.from({length: 9}, () => Math.floor(Math.random() * 10)).join('');
            let resto1:number;
            let resto2:number;

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