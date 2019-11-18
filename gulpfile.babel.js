import gulp from 'gulp'
import sass from 'gulp-sass'
import bs from 'browser-sync'

const srcDir = 'src/';
const docsDir = 'docs/';
const sassFiles = srcDir + '**.scss';

// development watch mode with local server and auto-reloading browsers
gulp.task('dev', () => {
  var browserSync = bs.create();
  browserSync.init({
    notify: false,
    startPath: docsDir,
    server: './',
    open: true,
  });
  gulp.watch(sassFiles, gulp.parallel("sass"));
  gulp.watch([
    docsDir + '**',
    srcDir + '*.css'
  ]).on('change', browserSync.reload);
});

// compile sass to css
gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(file => file.base));
});