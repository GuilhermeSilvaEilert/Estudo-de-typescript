function reverter<T>(...lista:T[]): T[]{

    let tamanho = lista.length;
    let novalista:T[] = [];

    console.log(tamanho);

    for(let i:number = tamanho-1; i>=0;i--){
        console.log(i);
        novalista.push(lista[i]);
    }
    return novalista;
}


class teste23{
    constructor(
        public nome:string
    ){}
}

class teste21{
    constructor(
        public nome:string
    ){}
}

class teste22{
    constructor(
        public nome:string
    ){}
}

class teste24{
    constructor(
        public nome:string
    ){}
}

const nome1 = new teste23("Guilherme");
const nome2 = new teste21("Tania");
const nome3 = new teste22("Tania");
const nome4 = new teste24("Aurélio");

console.log(reverter(nome1, nome2, nome3, nome4));
