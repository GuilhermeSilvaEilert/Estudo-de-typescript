"use strict";
class PagamentoCartao {
    pagar(valor) {
        return `Executando pagamento...
        Conectando servidor
        Conectando tef
        valor pago ${valor}`;
    }
}
class PagamentoBoleto {
    pagar(valor) {
        return `Executando pagamento...
        Conectando servidor
        Conectando tef
        valor pago ${valor}
        boleto demora até 3 dias uteis para ser contabilizado`;
    }
}
class ServicoDeCompra {
    constructor(pagamentoBoleto, pagamentoCartao) {
        this.pagamentoBoleto = pagamentoBoleto;
        this.pagamentoCartao = pagamentoCartao;
    }
    pagarBoleto(valor) {
        return this.pagamentoBoleto.pagar(valor);
    }
    pagarCartao(valor) {
        return this.pagamentoCartao.pagar(valor);
    }
}
const pagamento = new ServicoDeCompra(new PagamentoBoleto, new PagamentoCartao);
console.log(pagamento.pagarCartao(2200));
console.log(pagamento.pagarBoleto(2200));
//# sourceMappingURL=Systema_pagamento.js.map