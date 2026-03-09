import { ValidarCartao } from "./ValidaCartao";

let validaCartao = new ValidarCartao();
//5330–5179–2737–6254
//5330 5179 2737 6254
class GeraNumeroCartao{
    gerador():string{

        let numeroCartao:string = Array.from({length: 15}, () => Math.floor(Math.random() * 10)).join('');
        let somadores1:String = "";
        let acumulador:number = 0;
        let acumulador2:number = 0;

        for(let i:number = 14; i >= 0; i = i - 2){
            somadores1 = (Number(numeroCartao[i])*2).toString();
            if(Number(somadores1) >= 10){
                somadores1 = (Number(somadores1[0]) + Number(somadores1[1])).toString(); 
            }
            acumulador += Number(somadores1);
        }

        for(let k:number = 13; k>=1;k = k - 2){
            console.log(numeroCartao[k]);
            acumulador2 += Number(numeroCartao[k]);
        }

        console.log(acumulador);
        console.log(acumulador2);
        acumulador = (acumulador + acumulador2)%10;
        acumulador = 10 - acumulador; 
        return numeroCartao + `${acumulador}`;   
    }
}

const geraNumeroCartao = new GeraNumeroCartao();

let numeroCartao = geraNumeroCartao.gerador();
console.log(validaCartao.validador(numeroCartao));
console.log(numeroCartao);
