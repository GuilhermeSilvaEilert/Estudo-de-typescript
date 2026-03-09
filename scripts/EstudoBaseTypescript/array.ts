/*const filmesCategorias: string[] | number[] | boolean[] = 

[123, "peidei", true, 2.2, "adventure"];*/

const filmesCategorias: (string | number)[]= 

["comedia", "romance", "horror", "terror", "aventura", 10];

filmesCategorias.push("Drama");
//filmesCategorias.push(32123123123);

const filmesAnos: Array<number | string> = [];

for(let ano = 2000; ano <= new Date().getFullYear(); ano++){
    filmesAnos.push(ano);
}
console.log(filmesAnos);
console.log(filmesCategorias);