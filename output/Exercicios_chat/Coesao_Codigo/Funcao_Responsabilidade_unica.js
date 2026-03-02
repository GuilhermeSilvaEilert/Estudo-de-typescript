"use strict";
function processarPedido(produto, preco) {
    console.log(`Produto: ${produto}`);
    console.log(`Preço: R$${preco}`);
    console.log("Salvando no banco...");
    console.log("Enviando e-mail de confirmação...");
}
const iphone = ({
    produto: "Iphone pro max",
    preco: 10000,
});
function salvarPedido(pedido) {
    console.log(`Pedido ${pedido.produto} Salvo com Sucesso`);
}
function exibirPedido(pedido) {
    console.log(`O seu pedido de um ${pedido.produto}, custa ${pedido.preco}`);
}
function enviaEmail(pedido) {
    console.log(`Email de Pedido de ${pedido.produto}, enviado com sucesso`);
}
function processaPedido(pedido) {
    salvarPedido(pedido);
    enviaEmail(pedido);
    exibirPedido(pedido);
}
processaPedido(iphone);
//# sourceMappingURL=Funcao_Responsabilidade_unica.js.map