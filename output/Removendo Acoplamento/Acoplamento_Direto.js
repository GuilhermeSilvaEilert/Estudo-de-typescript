"use strict";
class EmailService {
    enviar(msg) {
        console.log("Enviando email:", msg);
    }
}
class UsuarioService {
    constructor() {
        this.email = new EmailService();
    }
    enviarBoasVindas() {
        this.email.enviar("Bem-vindo!");
    }
}
{
    class EmailService {
        enviar(msg) {
            console.log("Enviando email:", msg);
        }
    }
    class UsuarioService {
        constructor(email) {
            this.email = email;
        }
        enviarBoasVindas() {
            this.email.enviar("Bem-vindo!");
        }
    }
    let email = new UsuarioService(new EmailService());
    email.enviarBoasVindas();
    class EmailServiceFake {
        enviar(msg) {
            console.log("[FAKE] Email enviado:", msg);
        }
    }
    const usuarioFake = new UsuarioService(new EmailServiceFake());
    usuarioFake.enviarBoasVindas();
}
//# sourceMappingURL=Acoplamento_Direto.js.map