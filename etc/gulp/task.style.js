var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var handlebars = require('gulp-compile-handlebars');
var config = require('./config');
//var sourcemaps = require('gulp-sourcemaps')

gulp.task('style', function() {
  return gulp.src('src/**/*.less')
    .pipe(handlebars(config))
    .pipe(concat('app.less'))
    .pipe(less())
    .pipe(concat('app.css'))
    .pipe(minify({keepBreaks:true}))
    .pipe(gulp.dest(config.build.style));
});

