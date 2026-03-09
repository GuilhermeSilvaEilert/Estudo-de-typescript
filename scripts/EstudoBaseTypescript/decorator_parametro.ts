
import "reflect-metadata";
function logParametro(
    target:any,
    propertyKey:string,
    parameterIndex:number,
){
    console.log(target);
    console.log(parameterIndex);
    console.log(propertyKey);

    const chave = `${target.constructor.name}_${propertyKey}`;
    console.log(chave);

    return Reflect.getMetadata("design:paramtypes", target, propertyKey).map(
        item => console.log(item[parameterIndex])
    );
}


const parametrosDecorados = new Map<string, number[]>();

function DecoradorParametro(target: any, propertyKey: string, parameterIndex: number) {
  const chave = `${target.constructor.name}_${propertyKey}`;
  if (!parametrosDecorados.has(chave)) {
    parametrosDecorados.set(chave, []);
  }
  parametrosDecorados.get(chave)!.push(parameterIndex);
}

function DecoradorMetodo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const chave = `${target.constructor.name}_${propertyKey}`;
    const indices = parametrosDecorados.get(chave) || [];

    for (const index of indices) {
      console.log(`Decorator capturou o parâmetro [${index}]:`, args[index]);
    }

    return metodoOriginal.apply(this, args);
  };
}

class Transferencia {
    @DecoradorMetodo
    transferir(@DecoradorParametro ...valor:number[]):number[]{
        return valor;
    }
}

const transferindo = new Transferencia();

transferindo.transferir(2000, 2000, 3,);