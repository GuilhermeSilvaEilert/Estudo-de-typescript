"use strict";
const filmesCategorias = ["comedia", "romance", "horror", "terror", "aventura", 10];
filmesCategorias.push("Drama");
const filmesAnos = [];
for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}
console.log(filmesAnos);
console.log(filmesCategorias);
//# sourceMappingURL=array.js.map