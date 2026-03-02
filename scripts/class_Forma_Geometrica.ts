class Forma {
    calcular_area(){}
}

class Retangulo extends Forma{
    constructor(
        public base: number,
        public altura: number,
    ){
        super();
    }
    calcular_area(): number {
        return this.base * this.altura;
    }
}

class Circulo extends Forma{
    constructor(
        public raio:number,
    ){
        super();
    }

    calcular_area(): number {
        return Math.PI*(this.raio*this.raio);
    }
}

const circulo = new Circulo(10);

const retangulo = new Retangulo(10, 10);

console.log(circulo.calcular_area());
console.log(retangulo.calcular_area());