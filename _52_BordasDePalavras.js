const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial';

// \w = [a-zA-Z_0-9]
// \b é nao \w = [^a-zA-Z_0-9]
console.log(texto1.match(/\bdia\w+/gi)) //pega tudo que inicia com dia + caracteres nenhum ou muitos
console.log(texto1.match(/\w+dia\b/gi)) //pega tudo que inicia com \w e finaliza com dia
console.log(texto1.match(/\w+dia\w+/gi)); //pega tudo que comeca com \w com dia no meio e finaliza com \w

const texto2 = 'dia diatônicao diafragma, média wikipédia bom-dia melodia radial'

console.log(texto2.match(/\bdia\b/gi)) // pega o média ('é' e espaço é borda), wikipédia e bom-dia (- é borda)
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a vírgula entra ! (do diafragma,)
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))