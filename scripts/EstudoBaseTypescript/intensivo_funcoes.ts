//Função comum

function mostrarMensagem1(texto: string|boolean|number): boolean | number {

    console.log(texto);
    
    return true;

}

console.log(mostrarMensagem1("TST"));

//Arrow functions

const show1 = (codigo:number) : number | Date | object => {
    return new Date();
}

//Parametros padrão e opcionais

function enviarEmail1(
    para?: string, 
    assunto?: string,
    remetente?: string,
): void{
    console.log({
        para,
        assunto,
        remetente,
    });
}

enviarEmail("gui.eilert@gmail.com", "joao@gmail.com");

//Rest Parameter

function somarRenda1(...meses: number[]): number{
    return meses.reduce((rendaTotal: number, rendaAtual: number) => rendaTotal + rendaAtual, 0);
}

console.log(somarRenda(250, 780, 695, 2000, 6500));