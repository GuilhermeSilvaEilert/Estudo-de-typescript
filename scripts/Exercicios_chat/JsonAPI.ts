import axios from "axios";

interface IMoeda {
    moeda: string,
    nome: string,
    compra: number,
    venda: number,
    fechoAnterior: number,
    dataAtualizacao: string,
}

export class ChamaAPI{
    async  buscaValoresConvertidosReal(moeda:string) {
    
        let valorCorrente:IMoeda;

        if(moeda === "dolar"){
            valorCorrente = await ((await axios.get("https://br.dolarapi.com/v1/cotacoes/usd")).data);
            return valorCorrente;
        }else if(moeda === "euro"){
            valorCorrente = await ((await axios.get("https://br.dolarapi.com/v1/cotacoes/eur")).data);
            return valorCorrente.venda;
        }else if(moeda === "peso"){
            valorCorrente = (await ((await axios.get("https://br.dolarapi.com/v1/cotacoes/ars")).data));
            return valorCorrente.venda;
        }


    }
}

const chamaAPI = new ChamaAPI();

chamaAPI.buscaValoresConvertidosReal("dolar").then((data) => console.log(data));

//buscaValoresConvertidosReal("dolar");

/*async function teste(){
    console.log((await axios.get("https://economia.awesomeapi.com.br/last/USD-BRL")).data);
}

teste();
*/