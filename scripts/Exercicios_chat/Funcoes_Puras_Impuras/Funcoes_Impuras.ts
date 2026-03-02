import * as readline from 'readline';

let contador: number = 0;
let arrayGlobal:(string|number)[] = [1,2,3,];

function incrementaContador():number{
    contador++
    return contador;
}

console.log(incrementaContador());

function exibirMensagem(mensagem: string):void{
    console.log(mensagem);
}
exibirMensagem("Gases");

function adicionarItem(...item:(string|number)[]):number{
    for(let Index = 0; Index<=item.length; Index++){
        arrayGlobal.push(item[Index]);
    }
    
    return arrayGlobal.length;
}

console.log(adicionarItem(1,2,3,4,5,"papa", "popop", "1234"));

function pegarDataAtual():Date{
    return new Date();
}

console.log(pegarDataAtual());

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function testedeinput(input:string){
    return new Promise((resolve) => {
        rl.question(input,(resposta) => {   
            resolve(resposta);
        });
    });
}

/*const pergunta = (nome:string, sobrenome:string):Promise<string> => {
    return new Promise((resolve) => {
        rl.question(nome,(resposta) => {   
            resolve(resposta);
        });
    });
};*/

function somando(a:number, b:number):number{
    return a as number + b as number;
}

(async () => {
  try {
    const a = await testedeinput('Qual é o valor a ? ');
    const b = await testedeinput('Qual é o valor b ? ');
    console.log(somando(a as number, b as number));
  } catch (error) {
    console.error('Erro ao capturar o input:', error);
  } finally {
    rl.close(); // Fecha a interface após o uso
  }
})();