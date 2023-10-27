const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformationHtml () {
    return gulp.src('src/index.html')
    // .pipe(uglify()) // não esytá rodando
    .pipe(gulp.dest('build'))
}

function transofrmationCss () {
    return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

exports.default = series(transofrmationCss, transformationHtml)