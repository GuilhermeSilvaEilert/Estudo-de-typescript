"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChamaAPI = void 0;
const axios_1 = __importDefault(require("axios"));
class ChamaAPI {
    async buscaValoresConvertidosReal(moeda) {
        let valorCorrente;
        if (moeda === "dolar") {
            valorCorrente = await ((await axios_1.default.get("https://br.dolarapi.com/v1/cotacoes/usd")).data);
            return valorCorrente;
        }
        else if (moeda === "euro") {
            valorCorrente = await ((await axios_1.default.get("https://br.dolarapi.com/v1/cotacoes/eur")).data);
            return valorCorrente.venda;
        }
        else if (moeda === "peso") {
            valorCorrente = (await ((await axios_1.default.get("https://br.dolarapi.com/v1/cotacoes/ars")).data));
            return valorCorrente.venda;
        }
    }
}
exports.ChamaAPI = ChamaAPI;
const chamaAPI = new ChamaAPI();
chamaAPI.buscaValoresConvertidosReal("dolar").then((data) => console.log(data));
//# sourceMappingURL=JsonAPI.js.map