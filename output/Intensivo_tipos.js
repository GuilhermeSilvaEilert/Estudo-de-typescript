"use strict";
function arrays() {
    const filmesCategorias = ["comedia", "romance", "horror", "terror", "aventura", 10];
    filmesCategorias.push("Drama");
    filmesCategorias.push(32123123123);
    const filmesAnos = [];
    for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
        filmesAnos.push(ano);
    }
    console.log(filmesAnos);
    console.log(filmesCategorias);
    const testeArray = [];
}
function booleans() {
    let admin = true;
    admin = false;
    admin = true;
    admin = Boolean("0");
    console.log(admin);
    let senha = "1234dasdasdasdasd";
    let senhaSegura;
    senhaSegura = senha.length > 8;
    console.log(senhaSegura);
}
function enums() {
    let Permission;
    (function (Permission) {
        Permission[Permission["ADMIN"] = 1] = "ADMIN";
        Permission[Permission["USER"] = 3] = "USER";
        Permission[Permission["READONLY"] = 4] = "READONLY";
    })(Permission || (Permission = {}));
    console.log(Permission.ADMIN);
    console.log(Permission["USER"]);
    console.log(Permission[1]);
    console.log(Permission["READONLY"]);
    console.log(Permission[4]);
}
class Teste {
    meucu() {
    }
}
const meuCu = () => { };
function nevers() {
    let teste = 1;
    function showError(message) {
        throw new Error(message);
    }
    teste = teste + teste;
    console.log(teste);
    let n = 0;
    function mostraNunca() {
        return 1;
    }
    console.log(mostraNunca());
}
function null_undefineds() {
    let valor;
    valor = null;
    let db = "mysql, 127.0.0.1, password";
    db = null;
    let minhaVariavel;
    if (new Date().getDate() === 28) {
        minhaVariavel = "Hoje é dia 28";
    }
    console.log(minhaVariavel);
}
function numbers() {
    let ano;
    let ano2;
    let ano3;
    let ano4;
    let ano5;
    let ano6 = 2021n;
    let ano7;
    ano = 2021;
    ano2 = Number("2021");
    ano3 = +"2021";
    ano4 = parseInt("2021.06");
    ano5 = parseFloat("2021.06");
    ano6 = 2021n;
    ano7 = 23.1;
    console.log(ano);
    console.log(ano2);
    console.log(ano3);
    console.log(ano4);
    console.log(ano5);
    console.log(ano6);
}
function objects() {
    let configuracaoServidor = {
        servidor: "Microsoft Azure",
        ip: "127.0.0.1",
        senha: "852369",
    };
    console.log(configuracaoServidor);
    configuracaoServidor = {
        servidor: "AWS",
        ip: "127.1.1.1",
        senha: "123456",
    };
    console.log(configuracaoServidor);
    configuracaoServidor = {
        servidor: "Google cloud",
        ip: "127.0.1.1",
        senha: "741258",
    };
    console.log(configuracaoServidor);
}
function strings() {
    let empresa;
    empresa = "Hcode";
    let teste = new String("Treinamentos");
    let teste1 = new String(1);
    console.log(empresa + teste + 1);
}
function tuples() {
    let superset;
    superset = ["TypeScript", 2011, "Anders"];
    let superset1;
    superset1 = superset;
    superset.push('peidei');
    superset.push('peidei');
    console.log(superset);
}
function type_assertions() {
    const site1 = 1;
    const site2 = "https://www.youtube.com.br";
    const site3 = 1;
    const site4 = "1";
    const site5 = "https://www.youtube.com.br";
    let site6 = 1;
    site6 = "kkkk";
    let sitesFavoritos = [];
    sitesFavoritos.push(site1);
    sitesFavoritos.push(site2);
    sitesFavoritos.push(site3.toString());
    sitesFavoritos.push(site4);
    sitesFavoritos.push(site5);
    sitesFavoritos.push(site6);
    console.log(sitesFavoritos);
}
function type_inferences() {
    let linguagem = "javascript";
    console.log(linguagem);
    console.log(linguagem.toUpperCase());
    const usuarioInfo = [1, "Rafael", new Date(), true, [1, 1, 1, 1], ['1', '1']];
    usuarioInfo.push(2);
    usuarioInfo.push("Ant");
    usuarioInfo.push(false);
    usuarioInfo.push(new Date(2021, 10, 5));
    usuarioInfo.push([1, 1, 1, 1, 1]);
}
function union_types() {
    let chavePix;
    chavePix = "p";
    console.log(chavePix);
    chavePix = 861959556015;
    console.log(chavePix);
}
function unknows() {
    let resultado;
    resultado = {
        sucesso: true
    };
    resultado = "Deu certo";
    resultado = 200;
    console.log("___________________");
    const informacao = 150;
    const informacaoDeconhecida = 205;
    const primeriNumero = informacao;
    const terceiroNumero = informacaoDeconhecida;
}
function voids() {
    const meuConsole = 1;
    function retornaVoid(a, b) {
        console.log("Peidei 2");
        return a + b;
    }
    function retornaVoid1() {
        console.log("Peidei 2");
        return meuConsole;
    }
    let meuConsole1;
    console.log(retornaVoid(1, 1));
    console.log(retornaVoid1());
}
function anys() {
    let teste2;
    teste2 = 2000;
    teste2 = "kkkk";
    let despesaFixa;
    let despesaVariavel;
    despesaFixa = "150";
    despesaVariavel = 300;
    console.log(despesaFixa + despesaVariavel);
    console.log(typeof valor);
}
//# sourceMappingURL=Intensivo_tipos.js.map