class Operacoes{
    static somarDigitos(a:number, b:number){
        return a + b;
    }
}

export class ValidarCartao{
    validador(ncartao:string):boolean{
        let acumuladorString:string = "";
        let acumuladorNumero:number = 0;
        let acumuladorNumero2:number = 0;

        if(ncartao.length === 16){
            for(let i:number = 14; i >= 0;i = i - 2){
                acumuladorString += (Number(ncartao[i]) * 2).toString();
            }
            
            for(let j:number = 0; j<=acumuladorString.length-1; j++){
                acumuladorNumero = Operacoes.somarDigitos(Number(acumuladorString[j]), acumuladorNumero)
            }
        
            for (let k = 15; k >= 1; k = k - 2) {
                acumuladorNumero2 = Operacoes.somarDigitos(Number(ncartao[k]), acumuladorNumero2);
            }

            if((Operacoes.somarDigitos(acumuladorNumero, acumuladorNumero2)) % 10 == 0){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        } 
    }
}


