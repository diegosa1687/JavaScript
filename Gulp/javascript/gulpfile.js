const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

// transformação de JavaScript
function transformationJs () {
    return gulp.src('src/**/*.js')
    .pipe(babel({
        // comments: false - não quero que os arquivos de comentários sejam transmitidos para o arquivo final
        comments: false,
        // presets: ["env"] - usar o javascript mais novo e converter para o mais antigo (mais compatível)
        presets: ["env"]

    }))
    // uglify - vai colocar tudo em uma linha só
    .pipe(uglify())
    // captura algum erro que ocorra durante o processo
    .on('error', err => console.log(err))
    // concat - vai colocar tudo em um arquivo só (codigo.min.js)
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
}

exports.default = series(transformationJs)