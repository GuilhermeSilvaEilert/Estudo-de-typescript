//Código com alto acoplamento
class EmailService {
  enviar(msg: string): void {
    console.log("Enviando email:", msg);
  }
}

class UsuarioService {
  private email = new EmailService();

  enviarBoasVindas(): void {
    this.email.enviar("Bem-vindo!");
  }
}

//Código com injeção de dependencia e baixo acoplamento

{

    class EmailService {
        enviar(msg: string): void {
            console.log("Enviando email:", msg);
        }
    }

    class UsuarioService {

        constructor(private email:EmailService){}

        enviarBoasVindas(): void {
            this.email.enviar("Bem-vindo!");
        }
    }

    let email = new UsuarioService(new EmailService());  
    email.enviarBoasVindas();

    class EmailServiceFake {
        enviar(msg: string): void {
            console.log("[FAKE] Email enviado:", msg);
        }
    }

    const usuarioFake = new UsuarioService(new EmailServiceFake());
    usuarioFake.enviarBoasVindas();
}