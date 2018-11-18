const browserSync = require('browser-sync').create();
const del = require('del');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const cssmin = require('gulp-cssmin');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

// Concat and minify SASS in CSS
gulp.task('styles', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(concatCss('bundle.css'))
        .pipe(cssmin())
        .pipe(rename({  suffix: '.min' }))
        .pipe(gulp.dest('app/min'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Concat and minify JavaScript files
gulp.task('scripts', () => {
    return gulp.src('app/js/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(rename({  suffix: '.min' }))
        .pipe(gulp.dest('app/min'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Remove all files in min/ folder
gulp.task('clean', (done) => {
    del.sync('app/min');
    done();
});

// Run all the tasks
gulp.task('default', gulp.series('clean', 'styles','scripts'));

// Spin up a web server, watch and reload the browser for changes
gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch('app/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('app/js/**/*.js', gulp.series('scripts'), browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload); 
});