class Usuario {

    readonly id: string = "154564564";
    nome: string = "Gui";
    private senha: string = "121231231";
    readonly dataCadastro: Date = new Date("2021-01-01");

    private soma():number{
        return 1;
    }

}


class PessoaFisica extends Usuario{
    cpf:number = 848596544;
}

const usuario = new Usuario();

//usuario.senha = "2121231";

const pessoa = new PessoaFisica();

//usuario.id = "123";

console.log(usuario.id);