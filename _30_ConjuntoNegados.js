const texto = '1,2,3,4,5,6,a.b c!d?e[f';

console.log(texto.match(/\D/g)); //pega tudo que não for 0-9
console.log(texto.match(/[^0-9]/g)) //pega tudo que nao for 0-9
console.log(texto.match(/\s/g));

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g)) //negando intervalo entre ! e /, : e @ e espaços em branco