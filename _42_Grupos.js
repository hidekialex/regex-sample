const texto1 = 'José Simão é muito engraçado... hahahahahaha';

console.log(texto1.match(/(ha)+?/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))