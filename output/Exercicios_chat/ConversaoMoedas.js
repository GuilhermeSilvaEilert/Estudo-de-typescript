"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsonAPI_1 = require("./JsonAPI");
const ComunicaAPI = new JsonAPI_1.ChamaAPI();
class TaxaFixa {
    obterTaxa(moedaOrigem, moedaDestino) {
        if (moedaOrigem === "real" && moedaDestino === "dolar") {
            console.log("taxa de 50c de real para cada dolar");
            return 1.05;
        }
        else if (moedaOrigem === "Real" && moedaDestino === "Peso") {
            console.log("taxa de 10c de dolar para cada real");
            return 1.01;
        }
        else {
            throw new Error("Conversão invalida");
        }
    }
}
class TaxaExterna {
    obterTaxa(moedaOrigem, moedaDestino) {
        if (moedaOrigem === "real" && moedaDestino === "dolar") {
            console.log("Taxa externa de 0,10 centavos de real");
            return 1.01;
        }
        else if (moedaOrigem === "real" && moedaDestino === "peso") {
            console.log("Taxa externa de 0,05 centavos de dolar");
            return 1.05;
        }
        else {
            throw new Error("Conversão invalida");
        }
    }
}
class ConversorMoeda {
    constructor(taxaFixa, taxaExterna) {
        this.taxaFixa = taxaFixa;
        this.taxaExterna = taxaExterna;
    }
    async conversorMoedas(QtdCompra, moeda) {
        let valorBase = await ComunicaAPI.buscaValoresConvertidosReal(moeda);
        let valorTotal = (Number(valorBase) * QtdCompra) * this.taxaFixa.obterTaxa("real", moeda);
        return valorTotal.toFixed(2);
    }
}
const conversor = new ConversorMoeda(new TaxaFixa, new TaxaExterna);
conversor.conversorMoedas(10, "dolar").then((data) => console.log(data));
//# sourceMappingURL=ConversaoMoedas.js.map