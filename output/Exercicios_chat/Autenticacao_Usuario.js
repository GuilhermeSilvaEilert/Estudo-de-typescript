"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class AutenticadorJWT {
    autenticar(usuario, senha) {
        return usuario === "Guilherme" && senha === "Sch@3546";
    }
}
class AutenticadorSenhaHash {
    autenticar(usuario, senha) {
        return crypto_1.createHash("md5").update(`${usuario}${senha}`).digest("hex") === "aac72da1a28cb73a691992ce5febe9bc";
    }
}
class LoginService {
    constructor(autenticarJWT, autenticarSenhaHash) {
        this.autenticarJWT = autenticarJWT;
        this.autenticarSenhaHash = autenticarSenhaHash;
    }
    autenticacao(usuario, senha) {
        if (this.autenticarJWT.autenticar(usuario, senha) && this.autenticarSenhaHash.autenticar(usuario, senha)) {
            return "Logado com sucesso";
        }
        else {
            return "Senha ou usuario incorretos";
        }
    }
}
const login = new LoginService(new AutenticadorJWT, new AutenticadorSenhaHash);
console.log(login.autenticacao("Guilherme", "Sch@3546"));
//# sourceMappingURL=Autenticacao_Usuario.js.map