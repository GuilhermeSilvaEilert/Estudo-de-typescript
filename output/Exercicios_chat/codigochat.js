"use strict";
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11)
        return false;
    if (/^(\d)\1+$/.test(cpf))
        return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        console.log(`${cpf[i]}*${10 - i} = ${parseInt(cpf[i]) * (10 - i)}`);
        soma += parseInt(cpf[i]) * (10 - i);
    }
    console.log(soma);
    let resto = soma % 11;
    let dv1 = resto < 2 ? 0 : 11 - resto;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        console.log(`${cpf[i]}*${10 - i} = ${parseInt(cpf[i]) * (11 - i)}`);
        soma += parseInt(cpf[i]) * (11 - i);
    }
    console.log(soma);
    resto = soma % 11;
    let dv2 = resto < 2 ? 0 : 11 - resto;
    return dv1 === parseInt(cpf[9]) && dv2 === parseInt(cpf[10]);
}
console.log(validarCPF("746.824.890-74"));
console.log(validarCPF("123.456.789-00"));
console.log(validarCPF("111.111.111-11"));
//# sourceMappingURL=codigochat.js.map