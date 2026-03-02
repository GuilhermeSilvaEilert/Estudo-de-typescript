"use strict";
function validaPlacaRegex(placa) {
    const regexNacional = /^[A-Z]{3}\d{4}$/;
    const regexMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;
    if (placa.length !== 7)
        return { valido: false, padrao: null };
    if (regexNacional.test(placa))
        return { valido: true, padrao: "ANTIGO" };
    if (regexMercosul.test(placa))
        return { valido: true, padrao: "MERCOSUL" };
    return { valido: false, padrao: null };
}
console.log(validaPlacaRegex("BRA2E19"));
console.log(validaPlacaRegex("ABC-1234"));
console.log(validaPlacaRegex("ABC12345"));
//# sourceMappingURL=Geradorplacacarro.js.map