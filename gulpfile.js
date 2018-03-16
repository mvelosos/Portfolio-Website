var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//Sass
gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//Watch Sass task
gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss', ['sass'])
});

//Compress Images
gulp.task('imagemin', function(){
  gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
});
