var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('./config');

gulp.task('content', function() {
  return gulp.src('src/etc/content/*.json')
    .pipe(flatten())
    .pipe(gulp.dest(config.build.content));
});

