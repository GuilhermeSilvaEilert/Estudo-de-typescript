interface IProduto {
    nome?: string|null;
    preco?: number;
    descricao?: string;
    dataValidade?: Date;
}

const produtoDados: IProduto = {
    nome: "Galaxy s24",
    preco: 5000,
    descricao: "8gb de ram e 256gb de armazenamento",
    dataValidade: new Date(2029, 4, 7)
};

console.log(produtoDados.nome);
console.log(produtoDados.preco);
console.log(produtoDados.descricao);
console.log(produtoDados.dataValidade);