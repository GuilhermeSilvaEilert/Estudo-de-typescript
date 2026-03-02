function minimoCaracter(
    target:unknown,
    nomePropriedade:string,
    
){

    let menorQue5Caracteres:string;

    Object.defineProperty(target, nomePropriedade,{
        
        get() {
            return menorQue5Caracteres; 
        },
        set(propriedade){
            if(propriedade.length < 5){
                menorQue5Caracteres = "Propriedades com menos de 5 caracteres";
            }else{
                menorQue5Caracteres = propriedade;
                console.log(propriedade);
            }
        } 
    });
}

class Tarefa{

    @minimoCaracter
    descricao:string;

    constructor(descricao:string){
        this.descricao = descricao;
    }

    apresentaDescricap():string {
        return this.descricao;
    }
}

const descricaoTarefa = new Tarefa("Fa");

descricaoTarefa.descricao = "Lavar louça"

console.log(descricaoTarefa.descricao);
