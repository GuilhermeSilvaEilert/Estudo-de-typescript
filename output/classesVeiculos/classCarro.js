"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_veiculo_1 = require("../classesAbstratasExercicio/class_veiculo");
class Carro extends class_veiculo_1.Veiculos {
    constructor(quantidadeDePortas, marca, modelo) {
        super(marca, modelo);
        this.quantidadeDePortas = quantidadeDePortas;
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        return "Vrum, vrummmmm";
    }
    exibir_detalhes() {
        return `Id: ${class_veiculo_1.GeradorID.gerar()}\nMarca: ${this.marca}, \nModelo: ${this.modelo}, \nPortas: ${this.quantidadeDePortas}`;
    }
}
class Moto extends class_veiculo_1.Veiculos {
    constructor(cilindras, marca, modelo) {
        super(marca, modelo);
        this.cilindras = cilindras;
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        return "pa, papapapapapapaaaaaaaaa";
    }
    exibir_detalhes() {
        return `Id: ${class_veiculo_1.GeradorID.gerar()}\nMarca: ${this.marca}, \nModelo: ${this.modelo}, \nCilindradas: ${this.cilindras}`;
    }
}
let accord = new Carro(4, "Honda", "Accord");
let cb300 = new Moto(300, "Honda", "cb300");
console.log(cb300.exibir_detalhes());
console.log(accord.exibir_detalhes());
//# sourceMappingURL=classCarro.js.map