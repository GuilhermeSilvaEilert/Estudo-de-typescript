{
    interface IProduto {
        nome:string;
        preco:number;
    }

    const motorolaMotoEdge:IProduto = ({
        nome: "Motorola Moto Edge",
        preco: 1350,
    });

    
    interface IProdutoRepository{
        salvar(produto:IProduto):void;
    }

    class ProdutoEmMemoriaRepository implements IProdutoRepository{
        private repositorioProdutos:IProduto[] = [];

        salvar(produto: IProduto): void {
           this.repositorioProdutos.push(produto);
           console.log(this.repositorioProdutos);
        }
    }

    class ProdutoService {
        constructor(private repositorio: IProdutoRepository){}

        cadastrarProduto(produto:IProduto):void{
            try{
                this.repositorio.salvar(produto);
                console.log(`Produto ${produto.nome}, cadastrado com sucesso`);
            }
            catch(e){
                console.error("Não foi possivel cadastrar o produto");
            }
        }
    }

    const cadastro = new ProdutoService(new ProdutoEmMemoriaRepository());
    cadastro.cadastrarProduto(motorolaMotoEdge);

    class ProdutoFakeRepository implements IProdutoRepository{
        salvar(produto: IProduto): void {
           console.log(`[Fake] Produto ${produto.nome} recebido no repositório fake.`);
        }
    }
    const cadastroTeste = new ProdutoService(new ProdutoFakeRepository());
    cadastroTeste.cadastrarProduto(motorolaMotoEdge);
        
    
}