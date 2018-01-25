var gulp      = require('gulp');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin')

var config    = require('./../config');   //配置文件
var envOption = require('./../env');      //区分生产和开发环境


gulp.task('imagemin', function () {
    gulp.src(config.dev.image)
        .pipe(imagemin())
        .pipe(gulp.dest(config.build.image));
});