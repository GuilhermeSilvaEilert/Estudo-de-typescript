"use strict";
class Relatorio {
    gerarRelatorio() {
        console.log("Coletando dados...");
        console.log("Formatando em PDF...");
        console.log("Enviando e-mail...");
    }
}
{
    class ColetaDados {
        coletar(titulo, conteudo) {
            console.log("Coletando dados...");
        }
    }
    class FormataEmPDF {
        converter(titulo, conteudo) {
            console.log(`Formatando em PDF...`);
            console.log(`=== Relatório de ${titulo} ===`);
            for (let i = 0; i <= conteudo.length - 1; i++) {
                console.log(`- Produto ${conteudo[i]} vendido`);
            }
        }
    }
    class EnviaEmail {
        enviar(titulo, conteudo) {
            console.log("Enviando e-mail:");
            console.log(`=== Relatório de ${titulo} ===`);
            for (let i = 0; i <= conteudo.length - 1; i++) {
                console.log(`- Produto ${conteudo[i]} vendido`);
            }
        }
    }
    class Relatorio {
        constructor(coletaDados, formataPDF, enviaEmail) {
            this.coletaDados = coletaDados;
            this.formataPDF = formataPDF;
            this.enviaEmail = enviaEmail;
        }
        gerarRelatorio(titulo, conteudo) {
            this.coletaDados.coletar(titulo, conteudo);
            this.formataPDF.converter(titulo, conteudo);
            this.enviaEmail.enviar(titulo, conteudo);
        }
    }
    const relatorio = new Relatorio(new ColetaDados(), new FormataEmPDF(), new EnviaEmail());
    relatorio.gerarRelatorio("Carros", ["Civic SI", "Opala 79", "Maverick"]);
}
//# sourceMappingURL=GeraRelatorio.js.map