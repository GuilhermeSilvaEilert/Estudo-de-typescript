function decoratorAttr(
    target:unknown,
    nomePropriedade:string,
){

    const novoNome = `_${nomePropriedade}`;

    Object.defineProperty(target, nomePropriedade, {
        get(){
            return this[novoNome].toUpperCase();
        },
        set(novoValor) {
            this[novoNome] = novoValor.split('').reverse().join('');
        }
    });
}

class Animals {

    @decoratorAttr
    nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

}

const cachorro = new Animals("Pluto");

cachorro.nome = "Snoopy";

console.log(cachorro.nome);