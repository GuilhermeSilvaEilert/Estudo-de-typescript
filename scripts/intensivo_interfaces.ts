//Interface Comum

interface  IEndereco {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
}

let endereco1: IEndereco;

endereco1 = {
    logradouro: "Av. Paulista",
    numero: 1000,
    bairro: "Morumbi",
    cidade: "Porto Alegre"
};

//Propriedades opcionais na interface

interface IProduto {
    nome?: string|null;
    preco?: number;
    descricao?: string;
    dataValidade?: Date;
}

const produtoDados1: IProduto = {
    nome: "Galaxy s24",
    preco: 5000,
    descricao: "8gb de ram e 256gb de armazenamento",
    dataValidade: new Date(2029, 4, 7)
};

console.log(produtoDados.nome);
console.log(produtoDados.preco);
console.log(produtoDados.descricao);
console.log(produtoDados.dataValidade);

//Propriedades readOnly

interface ICurso{
    readonly titulo: string;
    descricao?: string;
    readonly preco: number;
    cargaHoraria: number;
    classficacao: number;
}

let curso1: ICurso = {
    titulo: "Typescript",
    preco: 5000,
    cargaHoraria: 10,
    classficacao: 5,
}
//curso1.titulo = "Javascript";

curso1 = {
    titulo: " ",
    preco: 4000,
    cargaHoraria: 10,
    classficacao: 5,
}

//Funções em interfaces


{
    interface ISoma {
     (num1: number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1: number, numero2: number): number=> {
     return numero1 + numero2;
}

interface ICalculos {
     somar(a: number, b:number): number;
     subtrair(a: number, b:number): number;
     multiplicar(a: number, b:number): number;
     dividir(a: number, b:number): number;
}

let calculadora: ICalculos;

function multiplicar(a:number, b:number): number{
     return a * b;
}

const subtrair1 = (n1:number, n2:number) => n1 - n2;

calculadora = {
     dividir: (numero1:number, numero2: number) => {
          return numero1 / numero2;
     },
     somar: (numero1:number, numero2: number) => {
          return numero1 + numero2;
     },
     multiplicar,
     subtrair:subtrair1

}


    console.log(calculadora.multiplicar(2,2));
    console.log(calculadora.subtrair(2,2));

}

//Arrays em interfaces

{

    interface ICategoria {
    nome:string;
    id: number;
    categoriaPai?: ICategoria;
}

const frontEnd: ICategoria = {
    nome: "Front-End",
    id: 1
}

const backEnd: ICategoria = {
    nome: "Back-End",
    id: 1
}

interface IMenu {
    categorias: ICategoria[];
}

let menu: IMenu = {
    categorias: [frontEnd, backEnd],
};

console.log(menu.categorias);

interface ITodo{
    [indice: number]:string;//Qual a moral de poder escolher o tipo do indice, se só pode ser number ?
}

let minhasTarefas: ITodo;

minhasTarefas = ["Estudar guitarr", "Estudar bateria", "Estudar TypeScript"]

}

//Estendendo interfaces

{

    interface IModelo {
    id:number;
    created_at: number;
    updated_at: number;
}   

interface IPessoa extends IModelo{
    nome: string;
    idade: number;
}

interface IUsuario extends IPessoa {
    email: string;
    senha: string;
}

let CadastraUsuario:IUsuario = {
    nome: "Joao",
    email: "Joao@gmail.com",
    idade: 21,
    id: 123,
    senha:"asjdkasdjkasjdk",
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
}

}