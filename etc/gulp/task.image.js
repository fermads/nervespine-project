var gulp = require('gulp');
var config = require('./config');

gulp.task('image', function() {
  return gulp.src('src/image/*')
    .pipe(gulp.dest(config.build.image));
});
