interface IPagamento {
    pagar(valor:number);
}

class PagamentoCartao implements IPagamento{
    pagar(valor:number){
        return `Executando pagamento...
        Conectando servidor
        Conectando tef
        valor pago ${valor}`;
    }
}

class PagamentoBoleto implements IPagamento{
    pagar(valor:number){
        return `Executando pagamento...
        Conectando servidor
        Conectando tef
        valor pago ${valor}
        boleto demora até 3 dias uteis para ser contabilizado`;
    }
}

class ServicoDeCompra{
    constructor(
        private pagamentoBoleto:IPagamento,
        private pagamentoCartao:IPagamento,
    ){}

    pagarBoleto(valor:number):number{
        return this.pagamentoBoleto.pagar(valor);
    }

    pagarCartao(valor:number):number{
        return this.pagamentoCartao.pagar(valor);
    }
}

const pagamento = new ServicoDeCompra(
    new PagamentoBoleto,
    new PagamentoCartao,
);


console.log(pagamento.pagarCartao(2200));
console.log(pagamento.pagarBoleto(2200));