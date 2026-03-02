class Cadastro{

    nome:string;
    nascimento:Date;

    constructor(nome:string, nascimento:Date){
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro{

    email: string;
    empresa: string;

    constructor(nome:string, nascimento:Date, email:string, empresa:string,){

        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    
    }

}

const joao = new Cliente("João", new Date("2000-02-06"), "gui.eilert@gmail.com", "Schalter");

console.log(joao);