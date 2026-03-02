"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeradorID {
    constructor() {
        GeradorID.CONTADOR = GeradorID.CONTADOR + 1;
    }
    static gerar() {
        return Math.random.toString().substr(2, 9);
    }
}
exports.default = GeradorID;
GeradorID.CONTADOR = 0;
//# sourceMappingURL=GeradorID.js.map