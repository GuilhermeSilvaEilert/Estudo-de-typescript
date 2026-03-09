interface  IEndereco {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
}

let endereco: IEndereco;

endereco = {
    logradouro: "Av. Paulista",
    numero: 1000,
    bairro: "Morumbi",
    cidade: "Porto Alegre"
};

let endereco2: IEndereco;

endereco2 = {
    logradouro: "Av. Assis Brasil",
    numero: 1000,
    bairro: "Morumbi",
    cidade: "Porto Alegre"
};

console.log(endereco);
console.log(endereco2);
