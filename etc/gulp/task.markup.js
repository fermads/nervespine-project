var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var config = require('./config');

gulp.task('markup', function() {
  return gulp.src('src/index.html')
    .pipe(handlebars(config))
    .pipe(gulp.dest(config.build.markup));
});

