var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('watch', function () {
  // Endless stream mode
  return watch('./less/**/*.less', { ignoreInitial: false })
    .pipe(less())
    .pipe(gulp.dest('less'));
});