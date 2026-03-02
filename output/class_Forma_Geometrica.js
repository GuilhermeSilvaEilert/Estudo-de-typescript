"use strict";
class Forma {
    calcular_area() { }
}
class Retangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcular_area() {
        return this.base * this.altura;
    }
}
class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcular_area() {
        return Math.PI * (this.raio * this.raio);
    }
}
const circulo = new Circulo(10);
const retangulo = new Retangulo(10, 10);
console.log(circulo.calcular_area());
console.log(retangulo.calcular_area());
//# sourceMappingURL=class_Forma_Geometrica.js.map