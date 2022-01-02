'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var purgecss = require('gulp-purgecss');


// Clean output directory
gulp.task('clean', function () {
  return del(['docs']);
});

// Gulp task to minify CSS files
gulp.task('minifyCss', function () {
    return gulp.src('./src/assets/css/**/*')
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({}))
      // Minify the file
      .pipe(csso({
        restructure: false
      }))
      // Output
      .pipe(gulp.dest('./docs/assets/css'))
  });

// Gulp task to minify JavaScript files
gulp.task('minifyJs', function () {
    return gulp.src('./src/assets/js/**/*.js')
      // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest('./docs/assets/js'))
  });

// Gulp task to minify HTML files
gulp.task('htmlMinify', function () {
    return gulp.src(['./src/*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./docs'));
  });

// Gulp task to minify images
gulp.task('images', function () {
    return gulp.src('./src/assets/images/**/*')
     .pipe(imagemin())
     .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('purgecss', () => {
  return gulp.src('./src/assets/css/*.css')
  .pipe(purgecss({
    content: ['./src/*.html']
  }))
  .pipe(gulp.dest('./src/docs/assets/css'))
}
)
gulp.task('copySEOfiles', function () {
  return gulp.src(['CNAME', './src/robots.txt', './src/sitemap.xml'])
   .pipe(gulp.dest('./docs'));
});

gulp.task('copy-fonts', function () {
  return gulp.src('./src/assets/fonts/**/*')
    .pipe(gulp.dest('./docs/assets/fonts'));
});

gulp.task('default', gulp.series('clean', 'purgecss', 'images', 'htmlMinify', 'minifyJs', 'minifyCss', 'copy-fonts', 'copySEOfiles'))