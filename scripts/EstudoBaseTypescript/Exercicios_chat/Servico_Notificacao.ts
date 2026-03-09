{
    abstract class Notificador{
       abstract enviar(mensagem:string):void;
    }

    class NotificadorEmail extends Notificador{
        enviar(mensagem: string): void {
            console.log(`Notificando Email: ${mensagem}`);
        }
    }

    class NotificadorSMS extends Notificador{
        enviar(mensagem: string): void {
            console.log(`Notificando SMS: ${mensagem}`);
        }
    }

    class ServicoAlerta {
        constructor(private notificador:Notificador){}

        envia(mensagem:string){
            return this.notificador.enviar(mensagem);
        }
    }

    const NotificacaoSMS = new ServicoAlerta(new NotificadorSMS());
    const NotificacaoEmail = new ServicoAlerta(new NotificadorEmail());

    NotificacaoEmail.envia("Ultra peidogan");
    NotificacaoSMS.envia("Ultra peidogan");
}