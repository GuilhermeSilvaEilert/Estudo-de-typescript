"use strict";
{
    class Notificador {
    }
    class NotificadorEmail extends Notificador {
        enviar(mensagem) {
            console.log(`Notificando Email: ${mensagem}`);
        }
    }
    class NotificadorSMS extends Notificador {
        enviar(mensagem) {
            console.log(`Notificando SMS: ${mensagem}`);
        }
    }
    class ServicoAlerta {
        constructor(notificador) {
            this.notificador = notificador;
        }
        envia(mensagem) {
            return this.notificador.enviar(mensagem);
        }
    }
    const NotificacaoSMS = new ServicoAlerta(new NotificadorSMS());
    const NotificacaoEmail = new ServicoAlerta(new NotificadorEmail());
    NotificacaoEmail.envia("Ultra peidogan");
    NotificacaoSMS.envia("Ultra peidogan");
}
//# sourceMappingURL=Servico_Notificacao.js.map