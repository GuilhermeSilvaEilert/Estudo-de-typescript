"use strict";
{
    class CadastraUsuario {
        cadastrar(nome) {
            console.log(`Salvando usuário: ${nome}`);
        }
    }
    class EmailConfirmacaoCadastroDeUsuario {
        enviaEmail(email) {
            console.log(`Cadastrado com sucesso no email ${email}`);
        }
    }
    class GeraRelatoriosUsuarios {
        geradorDeRelatorioUsuario() {
            console.log(`Gerando relatório de cadastro`);
        }
    }
    class GeraRelatoriosLogins {
        geradorDeRelatoriolLogin() {
            console.log(`Gerando relatório de login`);
        }
    }
    class Sistema {
        constructor(cadastraUsuario, enviaEmail, geraRelatorioCadastro, geraRelatorioLogin) {
            this.cadastraUsuario = cadastraUsuario;
            this.enviaEmail = enviaEmail;
            this.geraRelatorioCadastro = geraRelatorioCadastro;
            this.geraRelatorioLogin = geraRelatorioLogin;
        }
        registrarUsuario(nome, email) {
            this.cadastraUsuario.cadastrar(nome);
            this.enviaEmail.enviaEmail(email);
            this.geraRelatorioCadastro.geradorDeRelatorioUsuario();
            this.geraRelatorioLogin.geradorDeRelatoriolLogin();
        }
    }
    const sistema = new Sistema(new CadastraUsuario(), new EmailConfirmacaoCadastroDeUsuario(), new GeraRelatoriosUsuarios(), new GeraRelatoriosLogins());
    sistema.registrarUsuario("João", "joao@email.com");
}
//# sourceMappingURL=Reduzindo_acpl_aumentando_coes%C3%A3o.js.map