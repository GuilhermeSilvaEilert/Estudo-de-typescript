import { ValidaCNPJ } from "./ValidaCNPJ";

const validaCNPJ = new ValidaCNPJ();
//58577114000189
class GeraCNPJ{
   
    gerador():string{
        const multiplicadores:string = "6543298765432";
        let cnpj:string = Array.from({length: 12}, () => Math.floor(Math.random() * 10)).join('');;
        let acumulador1:number = 0;
        let acumulador2:number = 0;
        for(let i:number = 0; i <= cnpj.length -1; i++){
            console.log(`${Number(cnpj[i])} * ${Number(multiplicadores[i + 1])} = ${Number(cnpj[i]) * Number(multiplicadores[i + 1])}`);
            acumulador1 += Number(cnpj[i]) * Number(multiplicadores[i + 1]);
        }
        if(acumulador1 % 11 < 2){
            cnpj += "0";
        }else{
            cnpj += (11-(acumulador1 % 11));
        }

        console.log(acumulador1);

        for(let j:number = 0; j <= cnpj.length -1; j++){
            console.log(`${Number(cnpj[j])} * ${Number(multiplicadores[j])} = ${Number(cnpj[j]) * Number(multiplicadores[j])}`);
            acumulador2 += Number(cnpj[j]) * Number(multiplicadores[j]);
        }
        if(acumulador2 % 11 < 2){
            cnpj += "0";
        }else{
            cnpj += `${11-((acumulador2 % 11))}`;
        }
        console.log(acumulador2);
        return cnpj;
    }    
}

const geraCNPJ = new GeraCNPJ();
let cnpjGerado = geraCNPJ.gerador();
console.log(cnpjGerado);
console.log(validaCNPJ.validadorCNPJ(cnpjGerado));