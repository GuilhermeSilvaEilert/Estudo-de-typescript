    interface IGeradorDeRelatorio {
        gerar(dados:string[]):void;
    }

    class RelatorioPDF implements IGeradorDeRelatorio{
        gerar(dados: string[]): void {
            console.log(`PDF: ${dados}`)
        }

    }

    class RelatorioCSV implements IGeradorDeRelatorio{
        gerar(dados: string[]): void {
            console.log(`CSV: ${dados}`)
        }

    }

    class RelatorioService{
        constructor(
            private PDF:IGeradorDeRelatorio,
            private CSV:IGeradorDeRelatorio,
        ){}

        geraPDF(dados:string[]){
            return this.PDF.gerar(dados);
        }

        geraCSV(dados:string[]){
            return this.CSV.gerar(dados);
        }
    }

    const geradorRelatorio = new RelatorioService(
        new RelatorioPDF, 
        new RelatorioCSV
    );

geradorRelatorio.geraPDF(["Teste", "teste", "teste", "teste",]);
geradorRelatorio.geraCSV(["Teste", "teste", "teste", "teste",]);