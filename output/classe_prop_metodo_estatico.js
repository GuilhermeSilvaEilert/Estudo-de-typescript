"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BancoDeDados_1 = require("./classes/BancoDeDados");
const conexaoBanco = BancoDeDados_1.BancoDeDados.factory({
    tipoBanco: BancoDeDados_1.BancoDeDados.TIPO_SQLSERVER,
    ip: BancoDeDados_1.BancoDeDados.LOCAL,
    senha: "1564564987",
    usuario: "root",
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico.js.map