import { createHash } from 'crypto';

interface IAutenticador {
    autenticar(usuario:string, senha:string):boolean;
}

class AutenticadorJWT implements IAutenticador{
    autenticar(usuario: string, senha: string): boolean {
        return usuario === "Guilherme" && senha === "Sch@3546";
    }

}

class AutenticadorSenhaHash implements IAutenticador{
    autenticar(usuario: string, senha: string): boolean {
        return createHash("md5").update(`${usuario}${senha}`).digest("hex") === "aac72da1a28cb73a691992ce5febe9bc";
    }

}

class LoginService {
    constructor(
        private autenticarJWT:IAutenticador,
        private autenticarSenhaHash:IAutenticador
    ){}

    autenticacao(usuario:string, senha:string): string{
        if(this.autenticarJWT.autenticar(usuario, senha) && this.autenticarSenhaHash.autenticar(usuario, senha)){
            return "Logado com sucesso";
        }else{
            return "Senha ou usuario incorretos"
        }
    }

}
 const login = new LoginService(new AutenticadorJWT, new AutenticadorSenhaHash);

 console.log(login.autenticacao("Guilherme", "Sch@3546"));