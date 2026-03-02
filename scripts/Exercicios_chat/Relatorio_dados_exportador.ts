interface IValidador{
    validar(dado:string):boolean;
}

interface IRepositorio {
    salvar(dado:string):void;
}

class Validador implements IValidador{
    validar(dado:string):boolean {
        if(dado.length < 10 && typeof dado == "string"){
            return true;
        }else{
            console.log("Não é string ou é maior que 10 caracteres");
            return false;
        }
    }
    
}

class Repositorio implements IRepositorio{

    public listaDados:string[] = []; 

    salvar(dado: string): void {
       this.listaDados.push(dado);
       console.log(this.listaDados);
    }
}

class CadastroService {
    constructor( 
        private validaDados:IValidador,
        private repositorio:IRepositorio,
    ){}

    salvar(dado:string):any{
        if(this.validaDados.validar(dado)){
            this.repositorio.salvar(dado);
        }
    }
}

const cadastro = new CadastroService(new Validador, new Repositorio);

cadastro.salvar("Guilherme");
cadastro.salvar("Ming");
cadastro.salvar("Gamela");



