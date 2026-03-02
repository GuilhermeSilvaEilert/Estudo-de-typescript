import GeradorID from "../utils/GeradorID";
import Veiculos from "./class_veiculo";
import Rastreamento from "../utils/Rastreamento";
import applyMixins from "../mixins/applyMixins";

export class Moto {
    constructor(
        public cilindras: number,
        public marca:string,
        public modelo:string,
    ){}

    public ligar(): string {
        return "pa, papapapapapapaaaaaaaaa";
    }

    public exibir_detalhes(): string {
        return `Id: ${GeradorID.gerar()}\nMarca: ${this.marca}, \nModelo: ${this.modelo}, \nCilindradas: ${this.cilindras}`;
    }

}



export interface Moto extends Veiculos, Rastreamento {}

applyMixins(Moto, [Veiculos, Rastreamento]);



