"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
{
    function decoratorNomeClasse(classe) {
        console.log(classe);
    }
    let Cliente = class Cliente {
        constructor(nome, email) {
            this.nome = nome;
            this.email = email;
        }
    };
    Cliente = __decorate([
        decoratorNomeClasse,
        __metadata("design:paramtypes", [String, String])
    ], Cliente);
    let Pedido = class Pedido {
        constructor(numero_pedido, cliente, itens) {
            this.numero_pedido = numero_pedido;
            this.cliente = cliente;
            this.itens = itens;
        }
        exibir_pedido() {
            return `Numero do pedido: ${this.numero_pedido}\nCliente: ${this.cliente}\nItens do pedido: ${this.itens}`;
        }
    };
    Pedido = __decorate([
        decoratorNomeClasse,
        __metadata("design:paramtypes", [Number, String, Array])
    ], Pedido);
    const Pedro = new Cliente("Pedro", "Pedro@gmail.com");
    const GrandePedido = new Pedido(123454, Pedro.nome, ["Chave", "Caneca", "Balão"]);
    console.log(GrandePedido.exibir_pedido());
}
//# sourceMappingURL=class_cliente.js.map