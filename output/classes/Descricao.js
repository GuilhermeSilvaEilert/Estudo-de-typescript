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
function minimoCaracter(target, nomePropriedade) {
    let menorQue5Caracteres;
    Object.defineProperty(target, nomePropriedade, {
        get() {
            return menorQue5Caracteres;
        },
        set(propriedade) {
            if (propriedade.length < 5) {
                menorQue5Caracteres = "Propriedades com menos de 5 caracteres";
            }
            else {
                menorQue5Caracteres = propriedade;
                console.log(propriedade);
            }
        }
    });
}
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
    }
    apresentaDescricap() {
        return this.descricao;
    }
}
__decorate([
    minimoCaracter,
    __metadata("design:type", String)
], Tarefa.prototype, "descricao", void 0);
const descricaoTarefa = new Tarefa("Fa");
descricaoTarefa.descricao = "Lavar louça";
console.log(descricaoTarefa.descricao);
//# sourceMappingURL=Descricao.js.map