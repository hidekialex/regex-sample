const texto = '1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = new RegExp('9');
console.log('Metodos do regex...');
console.log(regexNove.test(texto));
console.log(regexNove.exec(texto));

const regexLetras = /[a-f]/g;
console.log('Metodos da string...');
console.log(texto.match(regexLetras));
console.log(texto.search(regexLetras));
console.log(texto.replace(regexLetras, 'penis'));
console.log(texto.split(regexLetras));