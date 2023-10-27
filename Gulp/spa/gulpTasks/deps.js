const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

// funções que carregam todas as dependências
// font-awesome.css
function depsCSS () {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(uglifycss({ uglyComments: false }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}

// font-awesome/fonts
function depsFonts () {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCSS,
    depsFonts
}