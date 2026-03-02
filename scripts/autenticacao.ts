/// <reference path="./autenticacao/index.ts" />

const novoRegistro = new Autencaticao.LoginRegistro();

const resultadoRegistro = novoRegistro.registro({
    nome: "Guilherme",
    dataNascimento: new Date("2000-06-02"),
    email: "gui.eilert@gmail.com",
    senha: "adsasdasdas",
});

console.log(resultadoRegistro)