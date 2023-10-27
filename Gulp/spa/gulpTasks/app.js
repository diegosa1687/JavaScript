const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify  =require('gulp-uglify')
const uglifycss  =require('gulp-uglifycss')
const sass  =require('gulp-sass')(require('sass'))
const concat  =require('gulp-concat')
const htmlmin  =require('gulp-htmlmin')

// função carrega os html
function appHTML () {
    return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true })) // tira espaços em branco
    .pipe(gulp.dest('build'))
}

// função carrega o css
function appCSS () {
    return gulp.src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "ugliComments": false }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}

// função carrega o js
function appJS () {
    return gulp.src('src/assets/js/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'))
}

// função carrega as imgs
function appIMG () {
    return gulp.src('src/assets/imgs/**/*.*')
    .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appHTML)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}