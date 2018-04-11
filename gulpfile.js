let gulp = require ('gulp'),
    postcss = require('gulp-postcss'),
    precss = require('precss'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    uglify = require('gulp-uglifyjs'),
    autoprefixer = require('autoprefixer'),
    concat = require('gulp-concat');

let processors = [
    precss(),
    autoprefixer({
        browsers: ['last 10 versions']
    }),
    cssnano()
];

let jsFiles = [
    'bower_components/jquery-3.3.1/index.js',
    'bower_components/owl.carousel.js/index.js',
    'src/js/main.js'
];

let cssFiles = [
    'bower_components/normalize-css/index.css',
    'bower_components/owl.carousel.css/index.css',
    'src/css/main.sass.css'
];

gulp.task('css',function () {
    return gulp.src(cssFiles)
        .pipe(postcss(processors))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('assets/css/'))
});

gulp.task('js',function () {
    return gulp.src(jsFiles)
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('assets/js/'))
});

gulp.task('fonts',function () {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('assets/fonts/'))
});

gulp.task('img',function () {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('assets/img/'))
});

gulp.task('clear', function() {
    return del.sync('assets');
});


gulp.task('build',['clear','css','js','img','fonts']);

gulp.task('watch',['build'],function () {
    gulp.watch('src/css/*.css',['css']);
    gulp.watch('src/js/*.js',['js']);
});