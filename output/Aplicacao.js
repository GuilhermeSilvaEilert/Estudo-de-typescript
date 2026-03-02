"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplicacao = void 0;
var Aplicacao;
(function (Aplicacao) {
    let Comportamento;
    (function (Comportamento) {
        class Rastreamento {
            localizar(veiculo) {
                return `Seu ${veiculo}, está na Travessa Argentina 36, Alvorada`;
            }
        }
        Comportamento.Rastreamento = Rastreamento;
    })(Comportamento = Aplicacao.Comportamento || (Aplicacao.Comportamento = {}));
    let Modelos;
    (function (Modelos) {
        class Moto extends Aplicacao.Comportamento.Rastreamento {
            constructor() {
                super();
            }
            ligar() {
                return "pa, papapapapapapaaaaaaaaa";
            }
            exibir_detalhes(Dados) {
                return `Id: ${Utilitarios.GeradorID.gerar()}
                \nMarca: ${Dados.marca}, 
                \nModelo: ${Dados.modelo}, 
                \nCilindradas: ${Dados.cilindradas},
                \nTorque: ${Dados.torque}`;
            }
        }
        Modelos.Moto = Moto;
        class Carro extends Aplicacao.Comportamento.Rastreamento {
            constructor(quantidadeDePortas, marca, modelo) {
                super();
                this.quantidadeDePortas = quantidadeDePortas;
                this.marca = marca;
                this.modelo = modelo;
            }
            ligar() {
                return "Vrum, vrummmmm";
            }
            localizar(veiculo) {
                return "Localizado por GPS";
            }
            exibir_detalhes() {
                return `Id: ${Utilitarios.GeradorID.gerar()}
                \nMarca: ${this.marca}, 
                \nModelo: ${this.modelo}, 
                \nPortas: ${this.quantidadeDePortas}`;
            }
        }
        Modelos.Carro = Carro;
    })(Modelos = Aplicacao.Modelos || (Aplicacao.Modelos = {}));
    let Utilitarios;
    (function (Utilitarios) {
        class GeradorID {
            constructor() {
                GeradorID.CONTADOR = GeradorID.CONTADOR + 1;
            }
            static gerar() {
                return Math.random.toString().substr(2, 9);
            }
        }
        GeradorID.CONTADOR = 0;
        Utilitarios.GeradorID = GeradorID;
    })(Utilitarios = Aplicacao.Utilitarios || (Aplicacao.Utilitarios = {}));
})(Aplicacao = exports.Aplicacao || (exports.Aplicacao = {}));
//# sourceMappingURL=Aplicacao.js.map