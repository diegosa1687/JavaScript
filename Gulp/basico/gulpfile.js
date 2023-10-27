// +---+---+---+---+---+---+
// + .../Gulp/basico$ gulp +
// +---+---+---+---+---+---+



const gulp = require('gulp')
const { series, parallel } = require('gulp') // [ essa e a de baixo fazem a mesma coisa ]
// const series = gulp.series

const antes1 = callback => {
    console.log('Tarefa antes 1!')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa antes 2!')
    return callback()
}

// transformação .txt "genérica"
// callback - precisa ser chamada quando termina uma tarefa, para o gulp saber que a tarefa terminou
function copiar (callback) {

    // src - seleciona os arquivos de entrada
    // pipe - aplica as transformações nos arquivos de entrada
    // gulp.dest - define o destino dos arquivos de entrada depois de suas transformações

    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    // .pipe(transofrmacaoA())
    // .pipe(transofrmacaoB())
    // .pipe(transofrmacaoC())
    .pipe(gulp.dest('pastaB'))
    return callback()
}

const fim = callback => {
    console.log('Tarefa fim!')
    return callback()
}

module.exports.default = series(parallel(antes1, antes2), copiar, fim)