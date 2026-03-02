const meuConsole: void = 1 as unknown as void; //console.log("Hello Word");

function retornaVoid(a: string, b: string): void{
    console.log("Peidei 2");
 return a as unknown as void + b as unknown as void;
}

function retornaVoid1(): void{
    console.log("Peidei 2");
 return meuConsole;
}

let meuConsole1: void;

console.log(retornaVoid(1 as unknown as string, 1 as unknown as string));
console.log(retornaVoid1());