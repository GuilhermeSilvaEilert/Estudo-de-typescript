interface IProcessamento<Generico> {
    valor: Generico;//Generico;
    realizarProcessamento(arg: Generico): Generico;
}

const string:IProcessamento<string> = {
    valor:"Hcode",
    realizarProcessamento(argumento: string):string{
        return argumento.toLocaleUpperCase();
    }
}

console.log(string.valor);
console.log(string.realizarProcessamento("dsdjasdasdas"));

const numero:IProcessamento<number> = {
    valor:10,
    realizarProcessamento(v:number) {
        return v*v;
    },
}

console.log(numero.realizarProcessamento(numero.valor));