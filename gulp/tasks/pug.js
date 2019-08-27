let plumber = require('gulp-plumber'),
  pug = require('gulp-pug'),
  pugInheritance = require('gulp-pug-inheritance'),
  changed = require('gulp-changed'),
  cached = require('gulp-cached'),
  gulpif = require('gulp-if'),
  filter = require('gulp-filter');

const SOURCE_DIR = 'app/pug';
const SOURCE = 'app/pug/**/*.pug';
const DESTINATION = 'dist'; 

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src(SOURCE)
      .pipe(plumber())
      .pipe(changed(DESTINATION, {
        extension: '.html'
      }))
      .pipe(gulpif(global.isWatching, cached('pug')))
      .pipe(pugInheritance({
        basedir: SOURCE_DIR,
        skip: 'node_modules'
      }))
      .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe(pug({
        pretty: true
      }))
      .pipe(plumber.stop())
      .pipe($.gulp.dest(DESTINATION))
      .on('end', $.browserSync.reload);
  });
};