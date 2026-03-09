interface ProdutoLiteral{
    id:number,
    nome:string,
    preco:number,
}

function exibirproduto(produto:ProdutoLiteral):ProdutoLiteral{
    return produto;
}

console.log(exibirproduto({
    id:456456,
    nome:"Chiclete babalu",
    preco:1.5,
}));