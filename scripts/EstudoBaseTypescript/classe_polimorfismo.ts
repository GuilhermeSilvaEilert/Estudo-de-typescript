class Empresa{

    public prestarServico():string {
        return "Empresa prestadora de serviço";
    }

}

class Padaria extends Empresa{

    public prestarServico(): string {
        return "Vende Pão";
    }

}

class Mercearia extends Empresa {
    public prestarServico(): string {
        
        return "Vendendo produtos alimenticios";

    }
}

console.log(new Empresa().prestarServico());
console.log(new Padaria().prestarServico());
console.log(new Mercearia().prestarServico());