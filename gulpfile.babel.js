import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import sass from 'gulp-sass'
import rename from 'gulp-rename'
import bs from 'browser-sync'

const sassFiles = './src/*.scss';
const distRoot = './dist/';

// development watch mode with local server and auto-reloading browsers
gulp.task('default', () => {
  var browserSync = bs.create();
  browserSync.init({
    notify: false,
    server: {
      baseDir: distRoot
    }
  });
  gulp.watch(sassFiles, ['sass']);
  gulp.watch(['**/*.html', '**/*.css'], {cwd: distRoot}).on('change', browserSync.reload);
});

// compile sass + autoprefixer
gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(distRoot));
});