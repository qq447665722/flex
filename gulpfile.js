var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    stylus  = require('gulp-stylus');

// stylus
gulp.task('stylus', function() {
  return gulp.src( 'src/*.styl' )
  .pipe( plumber() )
  .pipe( stylus({
    compress: true,
    linenos: false
  }) )
  .pipe( gulp.dest('dist/') );
});

// watch
gulp.task('default', function() {
  gulp.watch(['src/*.styl'], ['stylus']);
});