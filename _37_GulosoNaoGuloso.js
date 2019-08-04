const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//quantificadores SAO gulosos ...

console.log(texto.match(/<div>.+<\/div>/g))       //pega o texto todo
console.log(texto.match(/<div>.*<\/div>/g))       //pega o texto todo
console.log(texto.match(/<div>.{0,100}<\/div>/g)) //pega o texto todo

//quantificadores NAO gulosos

console.log(texto.match(/<div>.+?<\/div>/g))       //pega o texto dividido
console.log(texto.match(/<div>.*?<\/div>/g))       //pega o texto dividido
console.log(texto.match(/<div>.{0,100}?<\/div>/g)) //pega o texto dividido