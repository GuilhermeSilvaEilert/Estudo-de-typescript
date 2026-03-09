import applyMixins from "./applyMixins";

class ProdutoFinal{

    vender(quantidade:number) {
        return `Foram vendidos ${quantidade} de itens`
    }

    comprar(quantidade:number){
        return `Foram comprados ${quantidade} de itens deste produto`;
    }

}

class Movel {

    sentar(){
        return "Você sentou";
    }

    empurrar(metros:number){

        return `O movel foi movido por ${metros}m.`;

    }

}

class Sofa  {
    constructor(
        public nome:string
    ){}
}

interface Sofa extends ProdutoFinal, Movel{} 

applyMixins(Sofa, [ProdutoFinal, Movel]);

const produto = new Sofa("Meu sofá");

produto.vender(10);