'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var env = require('gulp-env');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function(done) {
  gulp.src('./scss/gravity-payments.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});
