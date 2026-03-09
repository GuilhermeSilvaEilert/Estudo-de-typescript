abstract class Animal{
    
    constructor(
        public nome:string
    ){}
    abstract fazer_Som():string;
}

class Cachorro extends Animal{
    constructor(nome:string){
        super(nome);
    }
    fazer_Som(): string {
        return "Au au, chupa meu bilau";
    }
}

class Gato extends Animal{
    constructor(nome:string){
        super(nome);
    }
    fazer_Som():string{
        return "Miauuuuu pega no meu pauuu";
    }
}

const viraLata = new Cachorro("Kiara");

console.log(viraLata.fazer_Som());

const malhado = new Gato("Camilo");

console.log(malhado.fazer_Som());