"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Android = exports.SMS = exports.Email = void 0;
const Notificacao_1 = __importDefault(require("./Notificacao"));
class Email extends Notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.email}...`);
        return true;
    }
}
exports.Email = Email;
class SMS extends Notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.telefone}...`);
        return true;
    }
}
exports.SMS = SMS;
class Android extends Notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.idAndroid}...`);
        return true;
    }
}
exports.Android = Android;
//# sourceMappingURL=MeiosDeNotificacao.js.map