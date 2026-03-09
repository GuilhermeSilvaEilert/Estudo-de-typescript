class Banco{

    private cofreQtd: number = 10000;

    private debitarCofre(quantidade: number): number | string{

        if(quantidade <= this.cofreQtd){

            this.cofreQtd -= quantidade;

            return this.cofreQtd;

        }else{

            return "O Cofre não possui esse valor";

        }

    }

    protected sacarDoCaixa(quantidade: number){
        return this.debitarCofre(quantidade);
    }

    public sacarDoCaixaEletronico(quantidade:number) {
        return this.debitarCofre(quantidade);
    }

}

class Banco24Horas extends Banco{
    sacar(qtd:number){

        return this.sacarDoCaixa(qtd)

    }
}

const nubank = new Banco();
const banco24Horas = new Banco24Horas();

nubank.sacarDoCaixaEletronico(1000);
banco24Horas.sacar(2500);

console.log()