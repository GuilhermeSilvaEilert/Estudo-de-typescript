abstract class Funcionario{
    constructor(
        public nome:string,
    ){}
    public calcular_salario(vendas:number){}
}

class Gerente extends Funcionario{
    constructor(public nome:string){
        super(nome)
    }
    public calcular_salario(): number {
        return 5000;
    }
}

class Vendedor extends Funcionario{
    constructor(public nome:string){
        super(nome)
    }
    public calcular_salario(vendas:number): number {
        return 1800 + (vendas * 0.05);
    }
}

const gerente = new Gerente("guilherme");

const peao = new Vendedor("guilherme");

console.log(peao.calcular_salario(10000));
console.log(gerente.calcular_salario());