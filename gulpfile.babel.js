import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import sass from 'gulp-sass'
import bs from 'browser-sync'

const srcDir = './src/';
const docsDir = './docs/';
const sassMainFile = srcDir + 'flexbox.scss';

// development watch mode with local server and auto-reloading browsers
gulp.task('default', () => {
  var browserSync = bs.create();
  browserSync.init({
    notify: false,
    startPath: docsDir,
    server: './'
  });
  gulp.watch(sassMainFile, ['sass']);
  gulp.watch([
    docsDir + '**',
    srcDir + '*.css'
  ]).on('change', browserSync.reload);
});

// compile sass + autoprefixer
gulp.task('sass', function () {
  return gulp.src(sassMainFile)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(gulp.dest(file => file.base));
});