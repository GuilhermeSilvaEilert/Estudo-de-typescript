"use strict";
{
    class Usuario {
        constructor(nome, senha) {
            this.nome = nome;
            this.senha = senha;
        }
        salvar() {
            console.log("Salvando no banco...");
        }
        autenticar() {
            return this.senha === "123456";
        }
    }
}
{
    class Usuario {
        constructor(nome, senha) {
            this.nome = nome;
            this.senha = senha;
        }
    }
    class saveData extends Usuario {
        constructor(nome, senha) {
            super(nome, senha);
            this.nome = nome;
            this.senha = senha;
        }
        salvar() {
            console.log("Usuario cadastrado");
        }
    }
    class authentication extends Usuario {
        constructor(nome, senha) {
            super(nome, senha);
            this.nome = nome;
            this.senha = senha;
        }
        autenticar() {
            return this.senha === "123456";
        }
    }
}
{
    class Usuario {
        constructor(nome, senha) {
            this.nome = nome;
            this.senha = senha;
        }
    }
    class UsuarioService {
        salvar(usuario) {
            console.log(`Usuário ${usuario.nome} cadastrado`);
        }
        autenticar(usuario) {
            return usuario.senha === "123456";
        }
    }
}
//# sourceMappingURL=Separar_responsabilidade.js.map