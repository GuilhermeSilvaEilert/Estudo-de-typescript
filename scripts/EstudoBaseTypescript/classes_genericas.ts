interface ICadastroPadrao {
    readonly id:number;
    readonly created_at:Date;
    readonly updated_at:Date;
}

interface ICadastroUsuario extends ICadastroPadrao{
    nome:string;
    email:string;
    senha:string;
}

interface ICadastroCategoria extends ICadastroPadrao{
    nome:string;
}

class CadastroBase<InterfaceBasica>{

    criar(dados: InterfaceBasica):InterfaceBasica{
        console.log("Criando novo registro");
        return dados;
    }
    selecionar(id:number): InterfaceBasica{
        console.log("Dados do registro de ID " + id);
        return {} as InterfaceBasica;
    }
    editar(id:number, dadosAtualizacao: InterfaceBasica){
        console.log("Editando dados do ID: " + id);
        return dadosAtualizacao;
    }
    excluir(id:number){
        console.log("Excluindo registro do ID: "+id);
        return true;
    }

}

class UsuarioModelo extends CadastroBase<ICadastroUsuario>{}

const novoUsuario = new UsuarioModelo();

console.log(novoUsuario.criar({
    id: 1,
    nome: "Glaucio",
    email: "glaucio@gmail.com",
    senha: "asdasdas",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-06-25"),
}));

class CategoriaModelo extends CadastroBase<ICadastroCategoria>{}

const novaCategoria = new CategoriaModelo();

novaCategoria.criar({
    id: 1,
    nome: "Glaucio",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-06-25"),
});