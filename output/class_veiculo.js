"use strict";
{
    class Veiculo {
        constructor(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }
    }
    class Carro extends Veiculo {
        constructor(n_portas, marca, modelo) {
            super(marca, modelo);
            this.n_portas = n_portas;
        }
        exibir_info() {
            return `Marca: ${this.marca}\nModelo: ${this.modelo}\nPortas: ${this.n_portas}`;
        }
    }
    class Moto extends Veiculo {
        constructor(cilindradas, marca, modelo) {
            super(marca, modelo);
            this.cilindradas = cilindradas;
        }
        exibir_info() {
            return `Marca: ${this.marca}\nModelo: ${this.modelo}\nClilindradas: ${this.cilindradas}`;
        }
    }
    const civic = new Carro(4, "Honda", "Civic SI");
    console.log(civic.exibir_info());
    const Hornet500 = new Moto(471, "Honda", "Hornet 500");
    console.log(Hornet500.exibir_info());
}
//# sourceMappingURL=class_veiculo.js.map