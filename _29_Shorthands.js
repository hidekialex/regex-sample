const texto = '1,2,3,4,5,6,a.b c!d?e[fABS';

console.log(texto.match(/\s/g)); //espaços
console.log(texto.match(/\w/g)); // a-zA-Z0-9
console.log(texto.match(/\d/g)); //0-9