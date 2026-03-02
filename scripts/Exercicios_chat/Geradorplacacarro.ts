function validaPlacaRegex(placa:string):{ valido: boolean; padrao?: "MERCOSUL" | "ANTIGO" | null } {
    const regexNacional = /^[A-Z]{3}\d{4}$/;
    const regexMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;

    if (placa.length !== 7) return { valido: false, padrao: null };
    if(regexNacional.test(placa)) return {valido:true, padrao: "ANTIGO"};
    if(regexMercosul.test(placa)) return {valido:true, padrao: "MERCOSUL"};
    return { valido: false, padrao: null };

}



// Exemplos
console.log(validaPlacaRegex("BRA2E19"));    // { valido: true, padrao: 'MERCOSUL' }
console.log(validaPlacaRegex("ABC-1234"));   // { valido: true, padrao: 'ANTIGO' }
console.log(validaPlacaRegex("ABC12345"));   // { valido: false, padrao: null }