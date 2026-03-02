"use strict";
let endereco1;
endereco1 = {
    logradouro: "Av. Paulista",
    numero: 1000,
    bairro: "Morumbi",
    cidade: "Porto Alegre"
};
const produtoDados1 = {
    nome: "Galaxy s24",
    preco: 5000,
    descricao: "8gb de ram e 256gb de armazenamento",
    dataValidade: new Date(2029, 4, 7)
};
console.log(produtoDados.nome);
console.log(produtoDados.preco);
console.log(produtoDados.descricao);
console.log(produtoDados.dataValidade);
let curso1 = {
    titulo: "Typescript",
    preco: 5000,
    cargaHoraria: 10,
    classficacao: 5,
};
curso1 = {
    titulo: " ",
    preco: 4000,
    cargaHoraria: 10,
    classficacao: 5,
};
{
    let primeiraSoma;
    primeiraSoma = (numero1, numero2) => {
        return numero1 + numero2;
    };
    let calculadora;
    function multiplicar(a, b) {
        return a * b;
    }
    const subtrair1 = (n1, n2) => n1 - n2;
    calculadora = {
        dividir: (numero1, numero2) => {
            return numero1 / numero2;
        },
        somar: (numero1, numero2) => {
            return numero1 + numero2;
        },
        multiplicar,
        subtrair: subtrair1
    };
    console.log(calculadora.multiplicar(2, 2));
    console.log(calculadora.subtrair(2, 2));
}
{
    const frontEnd = {
        nome: "Front-End",
        id: 1
    };
    const backEnd = {
        nome: "Back-End",
        id: 1
    };
    let menu = {
        categorias: [frontEnd, backEnd],
    };
    console.log(menu.categorias);
    let minhasTarefas;
    minhasTarefas = ["Estudar guitarr", "Estudar bateria", "Estudar TypeScript"];
}
{
    let CadastraUsuario = {
        nome: "Joao",
        email: "Joao@gmail.com",
        idade: 21,
        id: 123,
        senha: "asjdkasdjkasjdk",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
    };
}
//# sourceMappingURL=intensivo_interfaces.js.map