"use strict";
var Autencaticao;
(function (Autencaticao) {
    class LoginRegistro {
        login(usuario) {
            return usuario;
        }
        registro(novoUsuario) {
            return novoUsuario;
        }
    }
    Autencaticao.LoginRegistro = LoginRegistro;
    class Recuperacao {
        recuperarSenha() {
            return "Enviando email de recuperação de senha";
        }
        recuperarUsuario() {
            return "Enviando email de recuperação de usuario";
        }
    }
    Autencaticao.Recuperacao = Recuperacao;
})(Autencaticao || (Autencaticao = {}));
//# sourceMappingURL=index.js.map