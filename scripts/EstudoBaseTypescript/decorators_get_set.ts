function decoratorGetSet(permitirVisibilidade:boolean){
    return function(
        target:unknown, 
        propertyKey:string,
        descriptor: PropertyDescriptor,
    ){
        descriptor.enumerable = permitirVisibilidade;
    }
}

class Login {
    constructor(
        private _usuario:string,
        private _senha:string,
    ){}

    @decoratorGetSet(true)
    get usuario(){
        return this._usuario;
    }

    @decoratorGetSet(false)
    get senha(){
        return this._senha;
    }
}

const login = new Login("antony@hcode.com.br", "02020202");

console.log(login);

for(let chave in login){
    console.log("Chave", chave);
    console.log("Valor", login[chave]);
}