class Pedido{

    private id:number = 1234;

    constructor(
        public produto:string, 
        protected valotTotal:number, 
        protected endereco:string,
        public previsaoEntrega: Date,
     ){ }
}

const meuPedido = new Pedido(

    "Galaxy S5",
    2500,
    "Travessa Argentina 36",
    new Date("2025-05-30"),

);

meuPedido

console.log(meuPedido);