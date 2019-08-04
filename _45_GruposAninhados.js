const texto = 'supermercado hipermercado minimercado mercado';

console.log(texto.match(/(super|hiper|mini)?mercado/gi))
console.log(texto.match(/((su|hi)per|mini)?mercado/gi))
console.log(texto.replace(/((su|hi)per|mini)?mercado/gi, '$2')) // o numero avança do grupo pai para os grupos aninhados