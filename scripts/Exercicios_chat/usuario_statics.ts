{
    class Usuario{

        public nome:string;

        static totalUsuarios;
        constructor(
           nome:string,
        ){
            this.nome = nome;
            Usuario.totalUsuarios = 1 + Usuario.totalUsuarios;
        }

        static mostraTotal(){
            console.log(Usuario.totalUsuarios);
        }
    }

    const guilherme = new Usuario("Guilherme");
    const talia = new Usuario("Talia");
    const tania = new Usuario("Tania");
    const helena = new Usuario("Helena");

    Usuario.mostraTotal();
}