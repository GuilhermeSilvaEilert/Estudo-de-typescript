"use strict";
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(somarRenda(250, 780, 695, 2000, 6500));
//# sourceMappingURL=rest_paremeters.js.map