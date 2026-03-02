function arrays(){
    const filmesCategorias: (string | number)[]= 

    ["comedia", "romance", "horror", "terror", "aventura", 10];
    
    filmesCategorias.push("Drama");
    filmesCategorias.push(32123123123);
    
    const filmesAnos: Array<number | string> = [];
    
    for(let ano = 2000; ano <= new Date().getFullYear(); ano++){
        filmesAnos.push(ano);
    }
    console.log(filmesAnos);
    console.log(filmesCategorias);

    //const testeArray: number [] | String [] = [1,1,1,1,"1"];
    const testeArray: (number | string)[] = [];

}

function booleans(){

    let admin: boolean = true;

    admin  =  false;
    admin = true;

    admin = Boolean("0");
    console.log(admin);

    let senha = "1234dasdasdasdasd";
    let senhaSegura: boolean;

    senhaSegura = senha.length > 8;

    console.log(senhaSegura);
    
}

//booleans();

function enums(){
    enum Permission {
        ADMIN = 1,
        USER = 3,
        READONLY,
    }
    
    console.log(Permission.ADMIN);
    console.log(Permission["USER"]);
    console.log(Permission[1]);
    console.log(Permission["READONLY"]);
    console.log(Permission[4]);
}

class Teste{
    meucu(){

    }
}

const meuCu = () =>{};

function nevers(){

    let teste: never = 1 as never;

    function showError(message: string): never{
        throw new Error(message);
    }
    teste = teste as never + teste as never;
    //console.log(showError("Deu Ruim"));
    console.log(teste);
    let n = 0;

    function mostraNunca(): never{
        return 1 as never;
    }
    /*function loopInfinito(): never {
        while(true){
            console.log(n++);
        }
    }*/
    
    //loopInfinito();

    console.log(mostraNunca());
    
}

//nevers();

function null_undefineds(){
    let valor: null;

    valor = null;

    //let meuelemento: HTMLHeadingElement | null = document.querySelector("h2");

    let db: string | null = "mysql, 127.0.0.1, password";

    db = null;

    let minhaVariavel: string | undefined;

    if(new Date().getDate() === 28){
        minhaVariavel = "Hoje é dia 28";
    }
    console.log(minhaVariavel);
    
}

//null_undefineds();

function numbers(){

    let ano: number;
    let ano2: number;
    let ano3: number;
    let ano4: number;
    let ano5: number;
    let ano6: bigint = 2021n;
    let ano7: number;
    //let ano8: number = "2022" as number;

    ano = 2021;
    ano2 = Number("2021");
    ano3 = +"2021";
    ano4 = parseInt("2021.06");
    ano5 = parseFloat("2021.06");
    ano6 = 2021n;
    ano7 = 23.1

    console.log(ano);
    console.log(ano2);
    console.log(ano3);
    console.log(ano4);
    console.log(ano5);
    console.log(ano6);
    
}
function objects(){
    let configuracaoServidor: object = {
        servidor: "Microsoft Azure",
        ip: "127.0.0.1",
        senha: "852369",
    }
    
    console.log(configuracaoServidor);
    
    configuracaoServidor = {
        servidor: "AWS",
        ip: "127.1.1.1",
        senha: "123456",
    }
    
    console.log(configuracaoServidor);
    
    configuracaoServidor = {
        servidor: "Google cloud",
        ip: "127.0.1.1",
        senha: "741258",
    }
    
    console.log(configuracaoServidor);
}
function strings(){
    let empresa: string;

    empresa = "Hcode";

    let teste = new String("Treinamentos");

    let teste1 = new String(1);

    console.log(empresa + teste + 1);
}

//strings();
function tuples(){
    let superset: [string, number, string];

    superset = ["TypeScript", 2011, "Anders"];

    let superset1: [string, number, string];

    superset1 = superset;

    superset.push('peidei');

    superset.push('peidei');

    console.log(superset);
}

//tuples();
function type_assertions(){
    const site1: any = 1;//"https://www.youtube.com.br";
    const site2: any = "https://www.youtube.com.br";
    const site3 = 1;
    const site4 = "1";
    const site5: unknown = "https://www.youtube.com.br";
    let site6: unknown = 1;

    site6 = "kkkk";

    let sitesFavoritos: string[] = [];

    sitesFavoritos.push(site1);

    sitesFavoritos.push(site2);

    sitesFavoritos.push(site3.toString());

    sitesFavoritos.push(site4);

    sitesFavoritos.push(site5 as string);

    sitesFavoritos.push(<string>site6);

    console.log(sitesFavoritos);
}
function type_inferences(){
    let linguagem = "javascript";

console.log(linguagem);

//linguagem = 2002;

//console.log(linguagem.toFixed());

console.log(linguagem.toUpperCase());

const usuarioInfo = [1, "Rafael", new Date(), true, [1,1,1,1], ['1','1']];

usuarioInfo.push(2);

usuarioInfo.push("Ant");

usuarioInfo.push(false);

usuarioInfo.push(new Date(2021, 10, 5));

usuarioInfo.push([1,1,1,1,1]);
}
function union_types(){

    let chavePix: string | number;

    chavePix = "p";

    console.log(chavePix);

    chavePix = 861959556015;

    console.log(chavePix)
    
}
function unknows(){
    let resultado: unknown;

    resultado  = {
    sucesso: true
    };

    resultado =  "Deu certo";

    resultado = 200;

    console.log("___________________");

    const informacao: any = 150;
    const informacaoDeconhecida: unknown = 205;

    const primeriNumero: number = informacao;
//const segundoNumero: number = informacaoDeconhecida;

const terceiroNumero: unknown = informacaoDeconhecida;
}
function voids(){
    const meuConsole: void = 1 as unknown as void; //console.log("Hello Word");

    function retornaVoid(a: string, b: string): void{
        console.log("Peidei 2");
    return a as unknown as void + b as unknown as void;
    }

    function retornaVoid1(): void{
        console.log("Peidei 2");
    return meuConsole;
    }

    let meuConsole1: void;

    console.log(retornaVoid(1 as unknown as string, 1 as unknown as string));
    console.log(retornaVoid1());
}

function anys(){
    let teste2: any;

    teste2 = 2000;

    teste2 = "kkkk";

    let despesaFixa: unknown;
    let despesaVariavel: number;

    despesaFixa = "150"; //("150" as unknown);
    despesaVariavel = 300;

    console.log(despesaFixa as number + despesaVariavel);

    console.log(typeof valor);
}
