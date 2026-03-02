"use strict";
class Empresa {
    prestarServico() {
        return "Empresa prestadora de serviço";
    }
}
class Padaria extends Empresa {
    prestarServico() {
        return "Vende Pão";
    }
}
class Mercearia extends Empresa {
    prestarServico() {
        return "Vendendo produtos alimenticios";
    }
}
console.log(new Empresa().prestarServico());
console.log(new Padaria().prestarServico());
console.log(new Mercearia().prestarServico());
//# sourceMappingURL=classe_polimorfismo.js.map