class Professor{
    nome:string;
    idade: number;
    materia:string;

    constructor(nome:string, idade:number, materia:string, ){
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    
    }

    seApresentar():string {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}.`;
    }

    mediaNotas(...notas:number[]):number{
        let somatorioNotas = notas.reduce((notaTotal:number, notaAtual:number) => notaTotal + notaAtual, 0);
        return somatorioNotas / notas.length;
    }

}

const glaucio = new Professor("Glaucio Daniel", 45, "Sociologia",);


console.log(glaucio.seApresentar());
console.log(glaucio.mediaNotas(20,20,20,2123,21,22,21,21));