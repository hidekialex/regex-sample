const texto = 'Romário era um excelente jogador, mas hoje é um politico questionador'

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi));
console.log(texto.match(/r$/gi));
console.log(texto.match(/^r.*r$/gi)); //problema do dotall