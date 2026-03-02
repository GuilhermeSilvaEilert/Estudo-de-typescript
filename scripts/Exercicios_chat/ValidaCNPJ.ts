import { CalculosCPFCNPJ } from "./CalculosValidacaoCPFCNPJ/Calculos";
import { Soma } from "./CalculosValidacaoCPFCNPJ/Calculos";

    //V1
    export class ValidaCNPJ{
        static MULTIPLICADORES = "6543298765432";
        
        validadorCNPJ(cnpj:string){
            let acumulador:number = 0;
            let acumulador2:number = 0;
            let digitoVerificador1:number = 0;
            let digitoVerificador2:number = 0
            for(let i:number = 0 + 1; i<ValidaCNPJ.MULTIPLICADORES.length;i++){
                acumulador += Number(ValidaCNPJ.MULTIPLICADORES[i]) * Number(cnpj[i - 1]);
            }

            for(let j:number = 0; j<ValidaCNPJ.MULTIPLICADORES.length;j++){
                acumulador2 += Number(ValidaCNPJ.MULTIPLICADORES[j]) * Number(cnpj[j - 0]);
            }

            if(acumulador % 11 < 2){
                digitoVerificador1 = 0;
            }else{
                digitoVerificador1 = 11 - (acumulador % 11);
            }

             if(acumulador2 % 11 < 2){
                digitoVerificador2 = 0;
            }else{
                digitoVerificador2 = 11 - (acumulador2 % 11);
            }

            if(digitoVerificador1 === Number(cnpj[12]) && digitoVerificador2 === Number(cnpj[13])){
                return true;
            }else{
                return false;
            }
        }
    }    


/*{

    abstract class Calculos{
        abstract calculo(a:number, b:number):number;
    }

   class CalculoAcumulador{

        constructor(
            public soma:Calculos
        ){}
        Acumulador(cnpj:string, ajuste:number){
            
            let MULTITPLICADORES = "6543298765432";
            let acumulador:number = 0;
            for(let i:number = 0 + ajuste; i<MULTITPLICADORES.length;i++){
                // console.log(`${Number(MULTITPLICADORES[i])} * ${Number(cnpj[CalculosCPFCNPJ.subtracao(i, ajuste)])} = ${Number(MULTITPLICADORES[i]) * Number(cnpj[i - ajuste])}`);
                acumulador = this.soma.calculo(CalculosCPFCNPJ.multiplicacao(Number(MULTITPLICADORES[i]), Number(cnpj[CalculosCPFCNPJ.subtracao(i, ajuste)])), acumulador);
            }
            console.log(`${acumulador} % 11 = ${acumulador % 11}`);
            if(acumulador % 11 < 2){
                return 0;
            }else{
                console.log(11 - (acumulador % 11));
                return 11 - (acumulador % 11);
            }
        }
    }

    export default class ValidaCNPJ{
        
        constructor(
            private calculoAcumulador:CalculoAcumulador,
        ){}
        
        validaCNPJ(cnpj:string,){
            
            if(this.calculoAcumulador.Acumulador(cnpj, 1) === Number(cnpj[12])&&this.calculoAcumulador.Acumulador(cnpj, 0) === Number(cnpj[13])){
                return true;
            }else{
                return false;
            }
        }
    }

    const validarCNPJ = new ValidaCNPJ(new CalculoAcumulador(new Soma()));
 
    
    console.log(validarCNPJ.validaCNPJ("58577114000189"));
   
}*/