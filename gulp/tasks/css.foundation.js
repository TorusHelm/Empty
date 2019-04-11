'use strict';

module.exports = function() {
  $.gulp.task('css:foundation', function() {
    return $.gulp.src($.path.cssFoundation)
      .pipe($.gp.concatCss('libs.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/public/css'))
  })
};