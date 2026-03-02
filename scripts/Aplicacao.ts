export namespace Aplicacao {

    interface IModelo{
        
        marca:string,
        modelo:string,
        cilindradas:number,

    }

    interface ICarro extends IModelo{
    
        qtdPortas:number,       
    }
    interface IMoto extends IModelo{
        torque:number, 
    }

    export namespace Comportamento{
        export class Rastreamento{
            localizar(veiculo:string){
                return `Seu ${veiculo}, está na Travessa Argentina 36, Alvorada`;
            }
        }
    }

    export namespace Modelos{
        export class Moto extends Aplicacao.Comportamento.Rastreamento {
            constructor(
            ){
                super();
            }
        
            public ligar(): string {
                return "pa, papapapapapapaaaaaaaaa";
            }
        
            public exibir_detalhes(Dados: IMoto): string {
                return `Id: ${Utilitarios.GeradorID.gerar()}
                \nMarca: ${Dados.marca}, 
                \nModelo: ${Dados.modelo}, 
                \nCilindradas: ${Dados.cilindradas},
                \nTorque: ${Dados.torque}`;
            }
        
        }

        export class Carro extends Aplicacao.Comportamento.Rastreamento {
            
            constructor(
                public quantidadeDePortas: number,
                public marca:string,
                public modelo:string,
            ){
                super();
            }
        
            public ligar(): string {
                return "Vrum, vrummmmm";
            }
            
            localizar(veiculo: string): string {
                return "Localizado por GPS";
            }

            public exibir_detalhes(): string {
                return `Id: ${Utilitarios.GeradorID.gerar()}
                \nMarca: ${this.marca}, 
                \nModelo: ${this.modelo}, 
                \nPortas: ${this.quantidadeDePortas}`;
            }
        }
        
    }

   export namespace Utilitarios {
        export class GeradorID {

            static CONTADOR:number = 0;
            constructor(){
                GeradorID.CONTADOR = GeradorID.CONTADOR + 1;
            }

            static gerar(): string{
                return Math.random.toString().substr(2, 9);
            }

        }   
    }

}