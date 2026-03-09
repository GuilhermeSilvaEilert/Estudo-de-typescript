import { Aplicacao } from "./Aplicacao";
import {Carro} from "./veiculos/class_Carro";
import {Moto} from "./veiculos/class_Moto";


{

/*const cb300 = new Moto(300, "Honda", "Cb300");
const opala =  new Carro(2,"Chevrolet", "Opala 92");

console.log(cb300.exibir_detalhes());
console.log(opala.exibir_detalhes());
console.log(cb300.localizar(cb300.modelo));
console.log(opala.localizar(opala.modelo));*/

}

{

   const cb300 = new Aplicacao.Modelos.Moto(); 
   const opala = new Aplicacao.Modelos.Carro(2, "Chevrolet", "opala 92"); 

   console.log(cb300.exibir_detalhes({
    cilindradas: 300,
    marca:"Honda",
    modelo:"cb300",
    torque:10,
   }));
   console.log(opala.exibir_detalhes());
  // console.log(cb300.localizar(cb300.modelo));
   console.log(opala.localizar(opala.modelo));


}