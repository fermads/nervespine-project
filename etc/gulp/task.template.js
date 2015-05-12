var path = require('path');
var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('./config');
//var concat = require('gulp-concat');

gulp.task('template', function() {
  gulp.src(['src/**/*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
        namespace: 'app.template',
        noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('tpl.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.template));

  // gulp.src(['src/partial/**/*.hbs'])
  //     .pipe(handlebars())
  //     .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
  //         imports: {
  //             processPartialName: function(fileName) {
  //                 return JSON.stringify(path.basename(fileName, '.js'));
  //             }
  //         }
  //     }))
  //     .pipe(concat('app-mobile-partial.js'))
  //     .pipe(uglify())
  //     .pipe(gulp.dest(config.build.template));
});
