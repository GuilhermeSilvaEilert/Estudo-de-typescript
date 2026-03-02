interface INotification{
    notificar(mensagem:string):void;
}

class EmailNotification implements INotification{
   
    notificar(mensagem: string): void {
        console.log("Email", mensagem);
    }
}

class SMSNotfication implements INotification{
    notificar(mensagem: string): void {
        console.log("SMS", mensagem);
    }
}

class PushNotification implements INotification{
    notificar(mensagem: string): void {
        console.log("PUSH: ", mensagem);
    }
}

class AlertaService{
    constructor(private notificacao:INotification){}
    alertar(mensagem:string){
        return this.notificacao.notificar(mensagem);
    }
}

const alertaEmail = new AlertaService(new EmailNotification());
const alertaSMS = new AlertaService(new SMSNotfication());
const alertaPush = new AlertaService(new PushNotification());

alertaEmail.alertar("Ta pegando fogo");
alertaSMS.alertar("Ta resolvido");
alertaPush.alertar("Fogo apagado com sucesso");