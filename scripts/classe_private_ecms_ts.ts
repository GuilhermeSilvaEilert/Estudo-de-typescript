class Documento {

    private valor:string = "1236544789-01"; //TS
    #numero: number = 35; //EcmaScript
    

    /*constructor(numero:number){
        this.#numero = numero;
    }*/
    mostrarDocumento():number{

        return this.#numero

    }
}

class CNPJ extends Documento{
    //private valor: string = "145649871-01";
    #numero: number = 50;

    mostrarCNPJ():number{
        return this.#numero;
    }
    
}

const rg = new Documento();

const cnpj = new CNPJ();

console.log(cnpj.mostrarCNPJ());

console.log(rg.mostrarDocumento());

/*console.log("RG:" + rg.valor);
console.log("RG:" + rg.#numero);*/

