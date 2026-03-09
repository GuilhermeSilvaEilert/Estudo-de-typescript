//Codigo Chat
class Relatorio {
  gerarRelatorio(): void {
    console.log("Coletando dados...");
    console.log("Formatando em PDF...");
    console.log("Enviando e-mail...");
  }
}

//Solução
{
    class ColetaDados{
        coletar(titulo:string, conteudo:string[]){
            console.log("Coletando dados...");
        }
    }

    class FormataEmPDF{
        converter(titulo:string, conteudo:string[]){
            console.log(`Formatando em PDF...`);
            console.log(`=== Relatório de ${titulo} ===`);
            for(let i:number = 0; i <= conteudo.length -1;i++){
                console.log(`- Produto ${conteudo[i]} vendido`);
            }
            
        }
    }

    class EnviaEmail{
        enviar(titulo:string, conteudo:string[]){
            console.log("Enviando e-mail:");
            console.log(`=== Relatório de ${titulo} ===`);
            for(let i:number = 0; i <= conteudo.length -1;i++){
                console.log(`- Produto ${conteudo[i]} vendido`);
            }
        }
    }
    
    class Relatorio {
        constructor(
            private coletaDados: ColetaDados,
            private formataPDF: FormataEmPDF,
            private enviaEmail: EnviaEmail,
        ){}
        gerarRelatorio(titulo:string, conteudo:string[]): void {
            this.coletaDados.coletar(titulo, conteudo);
            this.formataPDF.converter(titulo, conteudo);
            this.enviaEmail.enviar(titulo, conteudo);
        }
    }

    const relatorio = new Relatorio(
        new ColetaDados(),
        new FormataEmPDF(),
        new EnviaEmail(),
    );

    relatorio.gerarRelatorio("Carros", ["Civic SI", "Opala 79", "Maverick"]);
}