const plumber = require('gulp-plumber'),
  pug = require('gulp-pug'),
  pugInheritance = require('gulp-pug-inheritance'),
  changed = require('gulp-changed'),
  cached = require('gulp-cached'),
  gulpif = require('gulp-if'),
  filter = require('gulp-filter');

const sourceDir = 'app/pug/';
const source = 'app/pug/**/*.pug';
const dest = 'dist'; 

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src(source)
      .pipe(plumber())
      .pipe(changed(dest, {
        extension: '.html'
      }))
      .pipe(gulpif(global.isWatching, cached('pug')))
      .pipe(pugInheritance({
        basedir: sourceDir,
        skip: 'node_modules'
      }))
      .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe(pug({
        pretty: true
      }))
      .pipe(plumber.stop())
      .pipe($.gulp.dest(dest))
      .on('end', $.browserSync.reload);
  });
};