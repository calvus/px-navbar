'use strict';
const path = require('path');
const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');
const sassdoc = require('sassdoc');
const importOnce = require('node-sass-import-once');
const stylemod = require('gulp-style-modules');
const sassdocOptions = {
  dest: 'docs',
  verbose: true,
  display: {
    access: ['public', 'private'],
    alias: true,
    watermark: true,
  },
  groups: {
    'undefined': 'Ungrouped'
  }
};

const sassOptions = {
  importer: importOnce,
  importOnce: {
    index: true,
    bower: true
  }
};


gulp.task('clean', function() {
  return gulp.src(['.tmp', 'css'], {
    read: false
  }).pipe($.clean());
});

//const stylemod = require('gulp-style-modules');
gulp.task('poly-styles', function() {
  gulp.src(`./css/${pkg.name}.css`)
    .pipe(stylemod({
      // All files will be named 'styles.html'
      filename: 'styles',
      // Use '-css' suffix instead of '-styles' for module ids
      moduleId: function(file) {
        return path.basename(file.path, path.extname(file.path)) + '-css';
      }
    }))
    .pipe($.rename(`${pkg.name}-styles.html`))
    .pipe(gulp.dest('.'));
});

gulp.task('sassdoc', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sassdoc(sassdocOptions));
});



gulp.task('sass', function() {
  return gulp.src(`./sass/${pkg.name}-sketch.scss`)
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.size())
    .pipe(gulp.dest('./css/noprefix'));
});

gulp.task('autoprefixer', function() {
  return gulp.src('css/noprefix/*.css')
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.size())
    .pipe($.rename(`${pkg.name}.css`))
    .pipe(gulp.dest('css'));
});

gulp.task('css', function() {
  return gulp.src('css/**/*.css')
    .pipe($.sourcemaps.init())
    .pipe($.cssmin())
    .pipe($.concat(pkg.name + '.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.size())
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('autoprefixer:watch', function() {
  gulp.watch('./css/**/*.css', ['autoprefixer']);
});


gulp.task('styles', gulpSequence('clean', 'sass', 'autoprefixer', 'poly-styles'));

gulp.task('watch', ['sass:watch', 'autoprefixer:watch']);

gulp.task('default', gulpSequence('clean', 'sass', 'autoprefixer', 'css', 'sassdoc', 'poly-styles'));
