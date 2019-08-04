const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com habib
`

console.log(texto.match(/\n/g));
console.log(texto.match(/^(\w).+\1$/gi)); // nao pega porque o ultimo caracter de cada linha é um \n
console.log(texto.match(/^(\w).+\1$/gim)); // flag 'm' considera cada linha individualmente