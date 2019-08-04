const texto = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(texto.match(/^r[\s\S]*r$/gi)); //shorthand \s -pega espaço, \S- pega tudo que nao é espeço