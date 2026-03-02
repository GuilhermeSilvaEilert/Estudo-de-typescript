//Código que o chat passou para resolver
/*class Sistema {
  registrarUsuario(nome: string, email: string) {
    console.log(`Salvando usuário: ${nome}`);
    console.log(`Enviando email para: ${email}`);
    console.log(`Gerando relatório de cadastro`);
  }
}

const sistema = new Sistema();
sistema.registrarUsuario("João", "joao@email.com");
*/
//Solução
{
   
    class CadastraUsuario {
        cadastrar(nome:string) {
            console.log(`Salvando usuário: ${nome}`);
        }
    }

    class EmailConfirmacaoCadastroDeUsuario{
        enviaEmail(email:string){
            console.log(`Cadastrado com sucesso no email ${email}`);
        }
    }


    class GeraRelatoriosUsuarios{
        geradorDeRelatorioUsuario(){
            console.log(`Gerando relatório de cadastro`);
        }
    }

    class GeraRelatoriosLogins{
        geradorDeRelatoriolLogin(){
            console.log(`Gerando relatório de login`);
        }
    }

    class Sistema {
        constructor(
            private cadastraUsuario:CadastraUsuario,
            private enviaEmail:EmailConfirmacaoCadastroDeUsuario,
            private geraRelatorioCadastro: GeraRelatoriosUsuarios,
            private geraRelatorioLogin:GeraRelatoriosLogins,
        ){}
        registrarUsuario(nome: string, email: string) {
            this.cadastraUsuario.cadastrar(nome);
            this.enviaEmail.enviaEmail(email);
            this.geraRelatorioCadastro.geradorDeRelatorioUsuario();
            this.geraRelatorioLogin.geradorDeRelatoriolLogin();
        }
    }

    const sistema = new Sistema(
                        new CadastraUsuario(), 
                        new EmailConfirmacaoCadastroDeUsuario(), 
                        new GeraRelatoriosUsuarios(),
                        new GeraRelatoriosLogins());
    sistema.registrarUsuario("João", "joao@email.com");
}