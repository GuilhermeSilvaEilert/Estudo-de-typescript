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