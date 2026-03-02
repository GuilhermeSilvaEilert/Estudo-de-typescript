"use strict";
class UsuarioBasico {
    constructor(email, nome) {
        this.email = email;
        this.nome = nome;
    }
    login() {
        console.log(`Usuario: ${this.nome}\nLogin: ${this.email}\nLogado`);
    }
}
const guilherme2 = new UsuarioBasico("gui.eilert@gmail.com", "Guilherme");
guilherme2.login();
//# sourceMappingURL=contrato_usuario.js.map