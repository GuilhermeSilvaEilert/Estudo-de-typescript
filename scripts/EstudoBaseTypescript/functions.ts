import  mostrarMensagem  from "./EstudoBaseTypescript/Funcoes/mostraMensagem"; 

console.log(mostrarMensagem("TST")); 

//Arrow functions

const show = (codigo:number) : number | Date | object => {
    return new Date();
}



