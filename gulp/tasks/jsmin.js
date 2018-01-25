var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var transport   = require('gulp-seajs-transport');
var gulpif      = require('gulp-if'); // 条件判断
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var mergeStream = require('merge-stream'); // 合并多个 stream

var config    = require('./../config');   //配置文件
var envOption = require('./../env');      //区分生产和开发环境

//scss融合
gulp.task('jsmin',function(){
	var moduleJs = gulp.src(config.dev.moduleJs,{base:"./src"})
        .pipe(transport({}))
        .pipe(concat('common.js')) 
		.pipe(gulpif(envOption.env === 'production', uglify()))
        .pipe(gulp.dest(config.build.moduleJs))
    gulp.src(config.dev.appJs)
        .pipe(gulpif(envOption.env === 'production', uglify()))
        .pipe(rename(function(path){
            var basename = path.dirname === '.'?'index':path.dirname.split("\\").join('')
            path.basename = basename;
            path.extname = ".js"; 
        }))
        .pipe(rename({dirname: 'page'})) 
        .pipe(gulp.dest(config.build.moduleJs))
    return mergeStream(moduleJs);
})