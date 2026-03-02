import { BancoDeDados } from "./classes/BancoDeDados";

const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_SQLSERVER,
    ip: BancoDeDados.LOCAL,
    senha:"1564564987",
    usuario:"root", 
});

console.log(conexaoBanco);