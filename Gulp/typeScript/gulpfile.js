// nesta aula vamos aprender a pegar uma linguagem não interpretada pelos navegadores e
// converte-la para javascript e subir seus arquivos pelo próprio gulp

const { series } = require('gulp')
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

// transofrmação de arquivo TypeScript
function transformationTs () {
    return tsProject.src()
    .pipe(tsProject()) // faz a transformação de código ts para js
    .pipe(uglify()) // coloca tudo em uma linha
    .pipe(concat('app.min.js')) // agora junta tudo em um só arquivo
    .pipe(gulp.dest('build'))
}

exports.default = series(transformationTs)