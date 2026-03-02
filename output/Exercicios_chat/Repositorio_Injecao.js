"use strict";
{
    const motorolaMotoEdge = ({
        nome: "Motorola Moto Edge",
        preco: 1350,
    });
    class ProdutoEmMemoriaRepository {
        constructor() {
            this.repositorioProdutos = [];
        }
        salvar(produto) {
            this.repositorioProdutos.push(produto);
            console.log(this.repositorioProdutos);
        }
    }
    class ProdutoService {
        constructor(repositorio) {
            this.repositorio = repositorio;
        }
        cadastrarProduto(produto) {
            try {
                this.repositorio.salvar(produto);
                console.log(`Produto ${produto.nome}, cadastrado com sucesso`);
            }
            catch (e) {
                console.error("Não foi possivel cadastrar o produto");
            }
        }
    }
    const cadastro = new ProdutoService(new ProdutoEmMemoriaRepository());
    cadastro.cadastrarProduto(motorolaMotoEdge);
    class ProdutoFakeRepository {
        salvar(produto) {
            console.log(`[Fake] Produto ${produto.nome} recebido no repositório fake.`);
        }
    }
    const cadastroTeste = new ProdutoService(new ProdutoFakeRepository());
    cadastroTeste.cadastrarProduto(motorolaMotoEdge);
}
//# sourceMappingURL=Repositorio_Injecao.js.map