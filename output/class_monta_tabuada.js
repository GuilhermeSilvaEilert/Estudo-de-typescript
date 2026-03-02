"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function tempoExecucao(target, propertykey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const resultado = `Interceptado: ${metodoOriginal.apply(this, args)}`;
        descriptor.value = metodoOriginal;
        console.time("Tempo de execução do método");
        for (let i = 0; i < 1e7; i++) { }
        console.timeEnd("Tempo de execução do método");
        return resultado;
    };
}
class Tabuada {
    constructor(valorA, valorB) {
        this.valorA = valorA;
        this.valorB = valorB;
    }
    montaTabuada() {
        for (let i = 1; i <= this.valorA; i++) {
            for (let j = 1; j <= this.valorB; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
        }
    }
}
__decorate([
    tempoExecucao,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tabuada.prototype, "montaTabuada", null);
const tabuada = new Tabuada(10, 10);
tabuada.montaTabuada();
//# sourceMappingURL=class_monta_tabuada.js.map