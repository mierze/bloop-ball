var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

var paths = {
  'sass': './app/**/*.scss'
};
gulp.task('clean', function() {
    return del([
        'app/**/*.css'
      ]);
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'));
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});
