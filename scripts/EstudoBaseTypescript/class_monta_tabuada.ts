function tempoExecucao (
    target:unknown,
    propertykey:string,
    descriptor:PropertyDescriptor
){

const metodoOriginal = descriptor.value;

descriptor.value = function (...args: any[]) {

    const resultado = `Interceptado: ${metodoOriginal.apply(this, args)}`

    descriptor.value = metodoOriginal;

     console.time("Tempo de execução do método");
    // Simulação de uma operação demorada
    for (let i = 0; i < 1e7; i++) {}
            
    console.timeEnd("Tempo de execução do método");

     return resultado;
};


    
}
class Tabuada {
    constructor(
        public valorA:number,
        public valorB:number,
    ){}
    @tempoExecucao
    montaTabuada(){
        for(let i:number = 1; i <= this.valorA; i++){
            for(let j:number = 1; j <= this.valorB; j++){
                console.log(`${i} x ${j} = ${i * j}`)
            }
        }
    }
}

const tabuada = new Tabuada(10,10);

tabuada.montaTabuada();