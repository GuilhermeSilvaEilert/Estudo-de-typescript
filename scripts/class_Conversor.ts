class Conversor{

    static TAXAFIXAREALPARADOLAR = 6.00;

    static dolar_para_real(valor_em_dolar:number){
        return valor_em_dolar * this.TAXAFIXAREALPARADOLAR;
    }

    static real_para_dolar(valor_em_real:number){
        return valor_em_real/this.TAXAFIXAREALPARADOLAR;
    }
    
}

console.log(`Dolar para real: ${Conversor.dolar_para_real(12)}`);
console.log(`Real para dolar: ${Conversor.real_para_dolar(12)}`);