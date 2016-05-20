var gulp = require('gulp');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');

gulp.task('sass:dev', function() {
  gulp.src('./scss/*.scss') //
  // .pipe(maps.init())
  .pipe(sass().on('error', sass.logError))
  // .pipe(minifyCss())
  // .pipe(maps.write('./maps'))
  .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', function() {
  gulp.src(['./*.html', './js/*.js'])
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('watch', function() {
  gulp.watch(['./**/*.scss', './*.html', './**/*.js'], ['sass:dev', 'static:dev']);
});

gulp.task('default', ['sass:dev', 'static:dev']);
