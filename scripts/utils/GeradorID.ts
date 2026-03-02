export default class GeradorID {

    static CONTADOR:number = 0;
    constructor(){
        GeradorID.CONTADOR = GeradorID.CONTADOR + 1;
    }

    static gerar(): string{
        return Math.random.toString().substr(2, 9);
    }

}
