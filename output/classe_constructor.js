"use strict";
class Pedido {
    constructor(produto, valotTotal, endereco, previsaoEntrega) {
        this.produto = produto;
        this.valotTotal = valotTotal;
        this.endereco = endereco;
        this.previsaoEntrega = previsaoEntrega;
        this.id = 1234;
    }
}
const meuPedido = new Pedido("Galaxy S5", 2500, "Travessa Argentina 36", new Date("2025-05-30"));
meuPedido;
console.log(meuPedido);
//# sourceMappingURL=classe_constructor.js.map