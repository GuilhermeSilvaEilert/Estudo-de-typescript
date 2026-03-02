"use strict";
class RelatorioPDF {
    gerar(dados) {
        console.log(`PDF: ${dados}`);
    }
}
class RelatorioCSV {
    gerar(dados) {
        console.log(`CSV: ${dados}`);
    }
}
class RelatorioService {
    constructor(PDF, CSV) {
        this.PDF = PDF;
        this.CSV = CSV;
    }
    geraPDF(dados) {
        return this.PDF.gerar(dados);
    }
    geraCSV(dados) {
        return this.CSV.gerar(dados);
    }
}
const geradorRelatorio = new RelatorioService(new RelatorioPDF, new RelatorioCSV);
geradorRelatorio.geraPDF(["Teste", "teste", "teste", "teste",]);
geradorRelatorio.geraCSV(["Teste", "teste", "teste", "teste",]);
//# sourceMappingURL=Geracao_Relat%C3%B3rio.js.map