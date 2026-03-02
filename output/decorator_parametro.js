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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function logParametro(target, propertyKey, parameterIndex) {
    console.log(target);
    console.log(parameterIndex);
    console.log(propertyKey);
    const chave = `${target.constructor.name}_${propertyKey}`;
    console.log(chave);
    return Reflect.getMetadata("design:paramtypes", target, propertyKey).map(item => console.log(item[parameterIndex]));
}
const parametrosDecorados = new Map();
function DecoradorParametro(target, propertyKey, parameterIndex) {
    const chave = `${target.constructor.name}_${propertyKey}`;
    if (!parametrosDecorados.has(chave)) {
        parametrosDecorados.set(chave, []);
    }
    parametrosDecorados.get(chave).push(parameterIndex);
}
function DecoradorMetodo(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const chave = `${target.constructor.name}_${propertyKey}`;
        const indices = parametrosDecorados.get(chave) || [];
        for (const index of indices) {
            console.log(`Decorator capturou o parâmetro [${index}]:`, args[index]);
        }
        return metodoOriginal.apply(this, args);
    };
}
class Transferencia {
    transferir(...valor) {
        return valor;
    }
}
__decorate([
    DecoradorMetodo,
    __param(0, DecoradorParametro),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Array)
], Transferencia.prototype, "transferir", null);
const transferindo = new Transferencia();
transferindo.transferir(2000, 2000, 3);
//# sourceMappingURL=decorator_parametro.js.map