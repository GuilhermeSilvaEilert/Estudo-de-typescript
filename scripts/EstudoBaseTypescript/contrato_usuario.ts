interface IContrato{
    nome:string,
    email:string,
    login():void,
}

class UsuarioBasico implements IContrato{

    constructor(
        public email: string,
        public nome: string,
    ){
    }
    
    login(): void {
        console.log(`Usuario: ${this.nome}\nLogin: ${this.email}\nLogado`);
    }
}

const guilherme2 = new UsuarioBasico("gui.eilert@gmail.com", "Guilherme");

guilherme2.login();