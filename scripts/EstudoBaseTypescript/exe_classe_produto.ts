{

    class Produto{

        public nome:string;
        public preco:number;
        public quantidade:number

        constructor(nome:string, preco:number, quantidade:number){
            this.nome = nome;
            this.preco = preco;
            this.quantidade = quantidade;
        }

        public exibir_Detalhes(){
            return `Nome: ${this.nome}\nPreço: ${this.preco}\nQuantidade: ${this.quantidade}`
        }

        calcular_Total(){
            return `Receita total: ${this.preco * this.quantidade}`;
        }
    }
    
    let celular = new Produto("Galaxy s21", 5000, 300);

    console.log(celular.exibir_Detalhes());

    console.log(celular.calcular_Total());

}    