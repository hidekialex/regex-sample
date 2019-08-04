const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta'

console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi)) // por default guarda
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: nao guarda valor 

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi)) // o segundo grupo é opcional (mente)
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')); // troca a expressao regular pelo segundo retrovisor (mente)