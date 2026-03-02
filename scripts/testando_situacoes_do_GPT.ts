abstract class teste123{
    constructor(
        public nome:string = "Guilherme"
    ){}
    testador():string|undefined{
        return this.nome;
    }
}

/*interface teste123 {
   
    nome:string
    
    testador():void;
}*/

class TesteImplements implements teste123{
    constructor(
        public nome:string
    ){
        
    }
    testador(): string | undefined {
        throw new Error("Method not implemented.");
    }
}    

const testeImplements = new TesteImplements("Guilherme");

console.log(testeImplements.testador());
