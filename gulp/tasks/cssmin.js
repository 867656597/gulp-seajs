var gulp      = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifycss     = require('gulp-minify-css'); // 压缩css一行


var config    = require('./../config');   //配置文件
var envOption = require('./../env');      //区分生产和开发环境

var autoOption = {
    browsers: [
    	'last 6 version',
        'ie >= 6',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.0',
        'bb >= 10'
    ],
    cascade: true, //是否美化属性值 默认：true 像这样：
    //-webkit-transform: rotate(45deg);
    //        transform: rotate(45deg);
    remove:true //是否去掉不必要的前缀 默认：true 
}



gulp.task('cssmin',['scssmin','libCssMin'],function(){
		
})
//scss融合
gulp.task('scssmin',function(){
	return gulp.src(config.dev.scss)
		.pipe(sass().on('error', sass.logError))
        .pipe(rename('main.css'))
        .pipe(gulp.dest(config.build.css))
		.pipe(minifycss())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(config.build.css))	
})

//第三方插件合并
gulp.task('libCssMin',function(){
	
})