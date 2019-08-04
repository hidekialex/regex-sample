const texto = '.$+*?-'

//dentro de conjuntos nao precisa escapar caracteres especiais
console.log(texto.match(/[+.?*$]/g))
console.log(texto.match(/[$-?]/g)) //isso é um intervalo
console.log(texto.match(/[$\-?]/g)) //escapando o traço ( - )