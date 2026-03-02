"use strict";
class EmailNotification {
    notificar(mensagem) {
        console.log("Email", mensagem);
    }
}
class SMSNotfication {
    notificar(mensagem) {
        console.log("SMS", mensagem);
    }
}
class PushNotification {
    notificar(mensagem) {
        console.log("PUSH: ", mensagem);
    }
}
class AlertaService {
    constructor(notificacao) {
        this.notificacao = notificacao;
    }
    alertar(mensagem) {
        return this.notificacao.notificar(mensagem);
    }
}
const alertaEmail = new AlertaService(new EmailNotification());
const alertaSMS = new AlertaService(new SMSNotfication());
const alertaPush = new AlertaService(new PushNotification());
alertaEmail.alertar("Ta pegando fogo");
alertaSMS.alertar("Ta resolvido");
alertaPush.alertar("Fogo apagado com sucesso");
//# sourceMappingURL=Simulando_dependencia.js.map