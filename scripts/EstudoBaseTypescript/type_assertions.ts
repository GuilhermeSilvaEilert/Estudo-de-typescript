const site1: any = 1;//"https://www.youtube.com.br";
const site2: any = "https://www.youtube.com.br";
const site3 = 1;
const site4 = "1";
const site5: unknown = "https://www.youtube.com.br";
let site6: unknown = 1;

site6 = "kkkk";

let sitesFavoritos: string[] = [];

sitesFavoritos.push(site1);

sitesFavoritos.push(site2);

sitesFavoritos.push(site3.toString());

sitesFavoritos.push(site4);

sitesFavoritos.push(site5 as string);

sitesFavoritos.push(<string>site6);

console.log(sitesFavoritos);