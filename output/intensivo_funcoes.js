"use strict";
function mostrarMensagem1(texto) {
    console.log(texto);
    return true;
}
console.log(mostrarMensagem1("TST"));
const show1 = (codigo) => {
    return new Date();
};
function enviarEmail1(para, assunto, remetente) {
    console.log({
        para,
        assunto,
        remetente,
    });
}
enviarEmail("gui.eilert@gmail.com", "joao@gmail.com");
function somarRenda1(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(somarRenda(250, 780, 695, 2000, 6500));
//# sourceMappingURL=intensivo_funcoes.js.map