"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeiosDeNotificacao_1 = require("./Classes/MeiosDeNotificacao");
new MeiosDeNotificacao_1.Email().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone: "51991343726",
});
new MeiosDeNotificacao_1.SMS().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone: "51991343726",
});
new MeiosDeNotificacao_1.Android().enviar({
    nome: "Jao",
    email: "joa@gmail.com",
    telefone: "51991343726",
    idAndroid: "dasd323dsad!",
});
//# sourceMappingURL=index.js.map