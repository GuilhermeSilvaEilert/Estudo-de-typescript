import  Veiculos  from "./class_veiculo";
import GeradorID from "../utils/GeradorID";
import Rastreamento from "../utils/Rastreamento";
import applyMixins from "../mixins/applyMixins";

export class Carro  {
    constructor(
        public quantidadeDePortas: number,
        public marca:string,
        public modelo:string,
    ){}

    public ligar(): string {
        return "Vrum, vrummmmm";
    }

    public exibir_detalhes(): string {
        return `Id: ${GeradorID.gerar()}
        \nMarca: ${this.marca}, 
        \nModelo: ${this.modelo}, 
        \nPortas: ${this.quantidadeDePortas}`;
    }
}

export interface Carro extends Veiculos, Rastreamento{}

applyMixins(Carro, [Veiculos, Rastreamento]);