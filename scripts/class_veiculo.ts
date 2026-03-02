
{

    class Veiculo{
        constructor(
            public marca:string,
            public modelo:string,
        ){}
    }

    class Carro extends Veiculo {
        constructor(
            public n_portas:number,
            marca:string, modelo:string
        ){
            super(marca, modelo);
        }

        exibir_info(){
             return `Marca: ${this.marca}\nModelo: ${this.modelo}\nPortas: ${this.n_portas}`;
        }
    }

    class Moto extends Veiculo {
        constructor(
            public cilindradas:number,
            marca:string, modelo:string,
        ){
            super(marca, modelo);
        }

        exibir_info(){
            return `Marca: ${this.marca}\nModelo: ${this.modelo}\nClilindradas: ${this.cilindradas}`;
        }
    }


    const civic = new Carro(4, "Honda", "Civic SI");
    console.log(civic.exibir_info());

    const Hornet500 = new  Moto(471, "Honda", "Hornet 500");
    console.log(Hornet500.exibir_info());
} 