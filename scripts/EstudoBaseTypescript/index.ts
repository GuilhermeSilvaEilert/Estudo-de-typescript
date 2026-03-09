namespace Autencaticao {

    interface IUsuario {
        email:string;
        senha:string;
    }

    interface ICadastro{
        nome:string;
        email:string;
        senha:string;
        dataNascimento: Date;
    }

    export class LoginRegistro{
        login(usuario:IUsuario){
            return usuario;
        }
        registro(novoUsuario: ICadastro){
            return novoUsuario;
        }
    }

    export class Recuperacao{

        recuperarSenha(){
            return "Enviando email de recuperação de senha";
        }
        recuperarUsuario(){
            return "Enviando email de recuperação de usuario";
        }

    }

}