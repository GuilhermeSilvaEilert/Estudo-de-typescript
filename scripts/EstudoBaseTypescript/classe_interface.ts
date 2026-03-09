interface IEmailV2{
    nome:string;
    email:string;
}

interface ITelefoneV2{
    numero:string;
}

interface INotificacaoV2{
    enviar():boolean;
}

interface IMeuUsuarioV2{
    nome:string;
    email:string;
    telefone:string;
    idAndroid?:string;
}

abstract class NotificacaoV2 {
    abstract enviar(usuario: IMeuUsuarioV2): boolean;

}

class EmailV2 extends NotificacaoV2 implements IEmailV2, INotificacaoV2{

    nome: string;
    email: string;
    
    constructor(usuario: IMeuUsuarioV2){
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }

    enviar(): boolean {

        console.log(`Enviando e-mail para o usuario ${this.email}...`);

        return true;
    }
}

class SMSV2 extends NotificacaoV2 implements INotificacaoV2, ITelefoneV2{
    numero: string;
    
    constructor(usuario: IMeuUsuarioV2){
        super();
        this.numero = usuario.telefone;
    }
    enviar(): boolean {

        console.log(`Enviando e-mail para o usuario ${this.numero}...`);

        return true;
    }
}



new EmailV2({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone:"51991343726", 
}).enviar();

new SMSV2({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone:"51991343726", 
}).enviar();

