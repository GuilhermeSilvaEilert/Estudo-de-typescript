"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aplicacao_1 = require("./Aplicacao");
{
}
{
    const cb300 = new Aplicacao_1.Aplicacao.Modelos.Moto();
    const opala = new Aplicacao_1.Aplicacao.Modelos.Carro(2, "Chevrolet", "opala 92");
    console.log(cb300.exibir_detalhes({
        cilindradas: 300,
        marca: "Honda",
        modelo: "cb300",
        torque: 10,
    }));
    console.log(opala.exibir_detalhes());
    console.log(opala.localizar(opala.modelo));
}
//# sourceMappingURL=main.js.map