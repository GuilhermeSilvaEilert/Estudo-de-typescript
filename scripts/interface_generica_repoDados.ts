{
    
    interface IProduto{
        nome:string,
        preco:number
    }

    interface IUsuario {
        nome:string,
        email:string
    }

    interface Repositorio<T>{
        adicionar(item:T):void,
        listar(): T[]
    }

    class RepositorioMemoria<T> implements Repositorio<T>{
        
        public lista: T[] = [];

        adicionar(item: T): void {
            this.lista.push(item);
        }
        listar(): T[] {
            return this.lista;
        }

    }

    interface IPedido extends IProduto, IUsuario{

    }

    let item:IPedido = {
        nome: "Opala 92",
        preco: 30000,
        email: "gui.eilert@gmail.com"
    };
    let item2:IPedido = {
        nome: "Plymount superbirdy",
        preco: 100000,
        email: "gui.eilert@gmail.com"
    };
    let item3:IPedido = {
        nome: "Galaxy s21",
        preco: 50000,
        email: "gui.eilert@gmail.com"
    };
    let item4:IPedido = {
        nome: "Peral export double bass",
        preco: 20000,
        email: "gui.eilert@gmail.com"
    };

    const repositorio = new RepositorioMemoria();

    repositorio.adicionar(item);
    repositorio.adicionar(item2);
    repositorio.adicionar(item3);
    repositorio.adicionar(item4);

    console.log(repositorio.listar());
}