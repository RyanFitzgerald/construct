var gulp = require('gulp');
var wait = require('gulp-wait');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    return gulp.src('./scss/construct.scss')
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['styles'], function() {
    gulp.watch('scss/*.scss', ['styles']);
});