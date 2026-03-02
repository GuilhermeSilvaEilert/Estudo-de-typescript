"use strict";
{
    class Produto {
        constructor(nome, preco, quantidade) {
            this.nome = nome;
            this.preco = preco;
            this.quantidade = quantidade;
        }
        exibir_Detalhes() {
            return `Nome: ${this.nome}\nPreço: ${this.preco}\nQuantidade: ${this.quantidade}`;
        }
        calcular_Total() {
            return `Receita total: ${this.preco * this.quantidade}`;
        }
    }
    let celular = new Produto("Galaxy s21", 5000, 300);
    console.log(celular.exibir_Detalhes());
    console.log(celular.calcular_Total());
}
//# sourceMappingURL=exe_classe_produto.js.map