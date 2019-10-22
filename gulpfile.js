const gulp = require('gulp');
const browserSync = require('browser-sync').create();


// Development server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      // baseDir: "./src"
    }
  });
  gulp.watch('**/*.{png,gif,jpg,svg,html}').on('change', browserSync.reload);
});


// Build it all
gulp.task('default', gulp.series(
  'browser-sync'
));

// Alias for default
gulp.task('dev', gulp.series(
  'browser-sync'
));
