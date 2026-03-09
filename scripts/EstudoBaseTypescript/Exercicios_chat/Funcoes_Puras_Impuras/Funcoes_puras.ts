function soma(a, b): number{
    return a + b;
}

function saudacao(nome): string{
    return `Olá, ${nome}`;
}

function duplicaArray(...arr:number[]):string[]{
    let duplicados: string[] = [];
    for(let item in arr){
        duplicados.push(item, item);
    }
    return duplicados;
}

function calcularArea(base, altura):number{
    return base*altura;
}

function paraMaiusculo(texto:string):string{
    return texto.toLocaleUpperCase();
}

console.log(paraMaiusculo("Torpedo"));
console.log(soma(1,1));
console.log(saudacao("Guilherme"));
console.log(duplicaArray(0,1,2,3,4,5,6,7,8,9));
console.log(calcularArea(12,15));