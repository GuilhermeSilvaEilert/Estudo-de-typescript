interface IHcode{
    length: number;
}

function mostrarQuantidadeTotal<Hcode extends IHcode>(valor: Hcode):Hcode{
    
    console.log(`Total: ${valor.length}`);

    return valor;
}

console.log(mostrarQuantidadeTotal([12, 12]));
console.log(mostrarQuantidadeTotal({nome:"Ronaldo", length:1}));