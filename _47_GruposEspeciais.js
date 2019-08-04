const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

//Positive lookahead - Faz um match na frente e pega o que está atras
//no caso, acha um virgula e pega o padrão anterior [\wÀ-ú]+
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))

console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))