class Conta_Bancaria{
    constructor(
        public titular:string,
        private saldo:number,
    ){}

    set depositar(valor:number){
        this.saldo += valor; 
    }

    set sacar(valor:number){
        if((this.saldo - valor < -1000)){
        throw new Error("O saque compromete o valor do cheque especial")
        }
        this.saldo -= valor;
    }

    get exibir_saldo(){
        return `Boa tarde sr ${this.titular} \nSeu saldo total é: ${this.saldo}`
    }
}

const bradesco = new Conta_Bancaria(
    "Guilherme", 10000,
); 

bradesco.depositar = 3000;

console.log(bradesco.exibir_saldo);

bradesco.sacar = 14000;

console.log(bradesco.exibir_saldo);

