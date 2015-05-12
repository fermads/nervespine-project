var gulp = require('gulp');
var log = require('gulp/node_modules/gulp-util').log;

require('./task.script');
require('./task.style');
require('./task.markup');
require('./task.template');
require('./task.content');
require('./task.image');

log('Using environment: '+ process.env.ENVIRONMENT || 'prod');

gulp.task('default', function() {
  gulp.start('script');
  gulp.start('style');
  gulp.start('markup');
  gulp.start('template');
  //gulp.start('content');
  gulp.start('watch');
});

gulp.task('build', function() {
  gulp.start('script');
  gulp.start('style');
  gulp.start('markup');
  gulp.start('template');
  gulp.start('image');
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['script']);
  gulp.watch('src/**/*.less', ['style']);
  gulp.watch('src/**/*.hbs', ['template']);
  gulp.watch('src/index.html', ['markup']);
  log('Watching files...');
});

