"use strict";
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.email}...`);
        return true;
    }
}
class SMS extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.telefone}...`);
        return true;
    }
}
class Android extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.idAndroid}...`);
        return true;
    }
}
new Email().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone: "51991343726",
});
new SMS().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone: "51991343726",
});
new Android().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone: "51991343726",
    idAndroid: "dasd323dsad!",
});
//# sourceMappingURL=classe_abstrata.js.map