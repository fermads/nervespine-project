var gulp = require('gulp');
var log = require('gulp/node_modules/gulp-util').log;
var jip = require('/Projects/fermads/node/jimp');

require('./task.script');
require('./task.style');
require('./task.markup');
require('./task.template');
require('./task.content');
require('./task.image');


log('Using environment: '+ (process.env.ENVIRONMENT || 'production'));

gulp.task('default', function() {
  gulp.start('script');
  gulp.start('style');
  gulp.start('markup');
  gulp.start('template');
  //gulp.start('content');
  gulp.start('watch');
});

gulp.task('test', function() {
  gulp.src('web/app.js')
    .pipe(jip({
      src: 'web/app.js',
      lib: ['web/lib.js', 'web/tpl.js'],
      runner:'test/spec/runner.html',
      phantom: {
        bin: 'test/bin/phantomjs.exe'
      }
    }));
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

