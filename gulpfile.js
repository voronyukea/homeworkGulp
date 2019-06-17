'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');




gulp.task('sass-compile', function() {

  gulp.src('./assets/scss/main.scss')
      .pipe(sass())
    // return gulp.src('.assets/scss/*.scss')
    // .pipe (sourcemaps.init())
    .pipe (sass().on('error', sass.logError))
    // .pipe (sourcemaps.write('./'))
      .pipe (gulp.dest('./assets/css/'))
});
