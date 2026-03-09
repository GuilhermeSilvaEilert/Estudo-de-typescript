import { Android, Email, SMS } from "./Classes/MeiosDeNotificacao";

new Email().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone:"51991343726", 
});

new SMS().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone:"51991343726", 
});

new Android().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone:"51991343726", 
    idAndroid:"dasd323dsad!",
});