interface ICurso{
    readonly titulo: string;
    descricao?: string;
    readonly preco: number;
    cargaHoraria: number;
    classficacao: number;
}

let curso: ICurso = {
    titulo: "Typescript",
    preco: 5000,
    cargaHoraria: 10,
    classficacao: 5,
}

curso = {
    titulo: "Typescript",
    preco: 4000,
    cargaHoraria: 10,
    classficacao: 5,
}