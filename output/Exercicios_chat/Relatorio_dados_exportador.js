"use strict";
class Validador {
    validar(dado) {
        if (dado.length < 10 && typeof dado == "string") {
            return true;
        }
        else {
            console.log("Não é string ou é maior que 10 caracteres");
            return false;
        }
    }
}
class Repositorio {
    constructor() {
        this.listaDados = [];
    }
    salvar(dado) {
        this.listaDados.push(dado);
        console.log(this.listaDados);
    }
}
class CadastroService {
    constructor(validaDados, repositorio) {
        this.validaDados = validaDados;
        this.repositorio = repositorio;
    }
    salvar(dado) {
        if (this.validaDados.validar(dado)) {
            this.repositorio.salvar(dado);
        }
    }
}
const cadastro = new CadastroService(new Validador, new Repositorio);
cadastro.salvar("Guilherme");
cadastro.salvar("Ming");
cadastro.salvar("Gamela");
//# sourceMappingURL=Relatorio_dados_exportador.js.map