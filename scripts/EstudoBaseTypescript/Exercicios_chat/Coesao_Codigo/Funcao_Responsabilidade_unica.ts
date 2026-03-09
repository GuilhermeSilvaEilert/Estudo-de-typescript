//Problema

function processarPedido(produto: string, preco: number): void {
  console.log(`Produto: ${produto}`);
  console.log(`Preço: R$${preco}`);
  console.log("Salvando no banco...");
  console.log("Enviando e-mail de confirmação...");
}

//Solução
interface IPedido {
    produto:string,
    preco:number
}

const iphone:IPedido = ({
    produto:"Iphone pro max",
    preco: 10000,
});
function salvarPedido(pedido:IPedido):void{
    console.log(`Pedido ${pedido.produto} Salvo com Sucesso`);
}

function exibirPedido (pedido:IPedido):void{
    console.log (`O seu pedido de um ${pedido.produto}, custa ${pedido.preco}`);
}

function enviaEmail(pedido:IPedido):void{
    console.log(`Email de Pedido de ${pedido.produto}, enviado com sucesso`);
}

function processaPedido(pedido:IPedido){
    salvarPedido(pedido);
    enviaEmail(pedido);
    exibirPedido(pedido);
}

processaPedido(iphone);