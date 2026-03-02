import { IBancoDeDados } from "../Interfaces/IBancoDeDados";

export class BancoDeDados {

    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQL SERVER";

    constructor(
        private ip:string,
        private usuario:string,
        private senha:string,
        private tipoBanco:string,
    ){}

    static factory( parametro: IBancoDeDados) {

        if(![BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametro.tipoBanco)){
            throw new Error("Tipo de banco incorreto")
        }

        return new BancoDeDados(
            parametro.ip,
            parametro.usuario,
            parametro.senha,
            parametro.tipoBanco,
        );

    }

}
