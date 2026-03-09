function decoratorMetodo(
    target: unknown,
    propertykey: string,
    descriptor: PropertyDescriptor,
) {

    descriptor.value = (...args: unknown[]) => {

        return args.map(item => {
            return (<string>item).toUpperCase();
        });

    };

}

class TratarMensagem {

    @decoratorMetodo
    dizerMensagem(...mensagens:string[]){

        return mensagens;

    }

}

const instancia = new TratarMensagem();

console.log(instancia.dizerMensagem("Seja bem vindo", "Ao curso", "De typescript"));