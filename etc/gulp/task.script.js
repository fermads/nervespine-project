var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('./config');

gulp.task('script', function() {
  gulp.src([
    'src/common/common.js',
    'src/**/*.js'])
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.script));

  gulp.src([
      'lib/jquery/*.min.js',
      'lib/handlebars/*.min.js',
      'lib/**/*.min.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(config.build.script));
});

