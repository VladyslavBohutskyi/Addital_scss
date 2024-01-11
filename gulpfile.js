const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

function compileSCSS() {
  return gulp
    .src('assets/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'));
}

function watchSCSS() {
  gulp.watch('assets/scss/**/*.scss', compileSCSS);
}

exports.default = gulp.series(compileSCSS, watchSCSS);
