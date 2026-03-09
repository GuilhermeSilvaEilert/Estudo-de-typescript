import { ChamaAPI } from "./JsonAPI";



interface ITaxaCambio{
    obterTaxa(moedaOrigem: string, moedaDestino:string): number;
}

const ComunicaAPI = new ChamaAPI();

class TaxaFixa implements ITaxaCambio{
    obterTaxa(moedaOrigem: string, moedaDestino: string): number {
        if(moedaOrigem === "real" && moedaDestino === "dolar"){
            console.log("taxa de 50c de real para cada dolar")
            return 1.05;
        }else if(moedaOrigem === "Real" && moedaDestino === "Peso"){
            console.log("taxa de 10c de dolar para cada real")
            return 1.01;
        }else{
            throw new Error("Conversão invalida");
        }
    }

}

class TaxaExterna implements ITaxaCambio {
    obterTaxa(moedaOrigem: string, moedaDestino: string) :number{
       if(moedaOrigem === "real" && moedaDestino === "dolar"){
            console.log("Taxa externa de 0,10 centavos de real")
            return 1.01
        }else if(moedaOrigem === "real" && moedaDestino === "peso"){
            console.log("Taxa externa de 0,05 centavos de dolar")
            return 1.05;
        }else{
            throw new Error("Conversão invalida");
        }
    }
}

class ConversorMoeda {
    constructor(
        public taxaFixa: ITaxaCambio,
        public taxaExterna:ITaxaCambio,
    ){}

    public async conversorMoedas(QtdCompra:number, moeda:string){
        let valorBase = await ComunicaAPI.buscaValoresConvertidosReal(moeda);
        let valorTotal = (Number(valorBase) * QtdCompra)*this.taxaFixa.obterTaxa("real", moeda);
        return valorTotal.toFixed(2);
    }
}

const conversor = new ConversorMoeda(new TaxaFixa, new TaxaExterna);

conversor.conversorMoedas(10, "dolar").then((data) => console.log(data));

/*Objetivo: Simular um conversor de moedas com baixo acoplamento.

Descrição:

Crie uma interface ITaxaCambio que define o método obterTaxa(moedaOrigem: string, moedaDestino: string): number.

Crie duas implementações:

TaxaFixa (retorna uma taxa fixa entre moedas);

TaxaExterna (simula uma chamada a API externa — use um método mockado).

Crie a classe ConversorMoeda que injeta a dependência ITaxaCambio e usa os valores para converter montantes.

Desafio extra: permitir que ConversorMoeda troque a implementação da taxa sem mudar código interno.*/