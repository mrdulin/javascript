const gulp = require('gulp');
const webserver = require('gulp-webserver');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');

gulp.task('webserver', function () {
  gulp.src('demos')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      open: true,
      path: '/'
    }));
});

gulp.task('mvc:build', () => {
  const src = './demos/MVC/src/index.js';
  const dist = './demos/MVC/dist';
  gulp.src(dist, { read: false })
    .pipe(clean());

  return browserify({
    entries: src,
    debug: true
  })
    .transform('babelify')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(gulp.dest(dist));
});

gulp.task('mvc:watch', ['mvc:build'], () => {
  gulp.watch('./demos/MVC/src/**/*.js', ['mvc:build']);
});
