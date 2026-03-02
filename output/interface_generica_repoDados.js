"use strict";
{
    class RepositorioMemoria {
        constructor() {
            this.lista = [];
        }
        adicionar(item) {
            this.lista.push(item);
        }
        listar() {
            return this.lista;
        }
    }
    let item = {
        nome: "Opala 92",
        preco: 30000,
        email: "gui.eilert@gmail.com"
    };
    let item2 = {
        nome: "Plymount superbirdy",
        preco: 100000,
        email: "gui.eilert@gmail.com"
    };
    let item3 = {
        nome: "Galaxy s21",
        preco: 50000,
        email: "gui.eilert@gmail.com"
    };
    let item4 = {
        nome: "Peral export double bass",
        preco: 20000,
        email: "gui.eilert@gmail.com"
    };
    const repositorio = new RepositorioMemoria();
    repositorio.adicionar(item);
    repositorio.adicionar(item2);
    repositorio.adicionar(item3);
    repositorio.adicionar(item4);
    console.log(repositorio.listar());
}
//# sourceMappingURL=interface_generica_repoDados.js.map