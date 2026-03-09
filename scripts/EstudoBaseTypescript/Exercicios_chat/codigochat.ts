function validarCPF(cpf: string): boolean {
    // 1️⃣ Remover caracteres que não sejam números
    cpf = cpf.replace(/\D/g, "");

    // 2️⃣ Verificar se tem exatamente 11 dígitos
    if (cpf.length !== 11) return false;

    // 3️⃣ Bloquear CPFs com todos os dígitos iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    // 4️⃣ Calcular o primeiro dígito verificador (DV1)
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        console.log(`${cpf[i]}*${10 - i} = ${parseInt(cpf[i]) * (10 - i)}`)
        soma += parseInt(cpf[i]) * (10 - i);
    }
    console.log(soma);
    let resto = soma % 11;
    let dv1 = resto < 2 ? 0 : 11 - resto;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        console.log(`${cpf[i]}*${10 - i} = ${parseInt(cpf[i]) * (11 - i)}`)
        soma += parseInt(cpf[i]) * (11 - i);
    }
    console.log(soma);
    resto = soma % 11;
    let dv2 = resto < 2 ? 0 : 11 - resto;

    // 6️⃣ Comparar os dois dígitos calculados com os do CPF original
    return dv1 === parseInt(cpf[9]) && dv2 === parseInt(cpf[10]);
}

// 🔹 Testes
console.log(validarCPF("746.824.890-74")); // true
console.log(validarCPF("123.456.789-00")); // false
console.log(validarCPF("111.111.111-11")); // false