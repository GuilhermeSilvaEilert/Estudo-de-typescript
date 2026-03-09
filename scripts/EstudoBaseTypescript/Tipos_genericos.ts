function obterPrimeiraPosicao<Generic>(meuArray: Array<Generic>):
Generic | undefined{

    return meuArray.pop();

}

console.log(obterPrimeiraPosicao(["Glaucio", "joão", "rafael", "ronaldo"]));