{
    function decoratorNomeClasse(classe:unknown){
        console.log(classe);
    }

    @decoratorNomeClasse
    class Cliente{
        constructor(
            public nome:string,
            public email:string,
        ){}
    }

    @decoratorNomeClasse
    class Pedido{
        constructor(
            public numero_pedido:number,
            public cliente:string,
            public itens:string[],
        ){}

        exibir_pedido(){
            return `Numero do pedido: ${this.numero_pedido}\nCliente: ${this.cliente}\nItens do pedido: ${this.itens}`;
        }
    }

    const Pedro = new Cliente(
        "Pedro",
        "Pedro@gmail.com"
    );

    const GrandePedido = new Pedido(123454, Pedro.nome, ["Chave", "Caneca", "Balão"]);

    
    console.log(GrandePedido.exibir_pedido());
}


