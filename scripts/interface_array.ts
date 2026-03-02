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
    [indice: number]:string;
}

let minhasTarefas: ITodo;

minhasTarefas = ["Estudar guitarr", "Estudar bateria", "Estudar TypeScript"]