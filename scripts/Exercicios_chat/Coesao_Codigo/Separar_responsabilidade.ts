
{

    class Usuario {
    nome: string;
    senha: string;

    constructor(nome: string, senha: string) {
        this.nome = nome;
        this.senha = senha;
    }

    salvar(): void {
        console.log("Salvando no banco...");
    }

    autenticar(): boolean {
        return this.senha === "123456";
    }
    } 


}

{
//Minha resolução
    abstract class Usuario {
        nome: string;
        senha: string;

        constructor(nome: string, senha: string) {
            this.nome = nome;
            this.senha = senha;
        }
    }

    class saveData extends Usuario{
        constructor(public nome:string, public senha:string){
            super(nome, senha);
        }

        salvar():void{
            console.log("Usuario cadastrado");
        }
    }

    class authentication extends Usuario{
        constructor(public nome:string, public senha:string){
            super(nome, senha);
        }

        autenticar():boolean{
            return this.senha === "123456";
        }
    }

}

//Solução do chat
{class Usuario {
  constructor(public nome: string, public senha: string) {}
}

class UsuarioService {
  salvar(usuario: Usuario): void {
    console.log(`Usuário ${usuario.nome} cadastrado`);
  }

  autenticar(usuario: Usuario): boolean {
    return usuario.senha === "123456";
  }
}}
