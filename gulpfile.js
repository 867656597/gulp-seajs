var gulp = require('gulp');
	gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),//自动加载所有gulp插件;
	requireDir = require('require-dir');// 引入所有task;
//引入有task；
requireDir('./gulp/tasks');

gulp.task('default',['htmlmin','scssmin','jsmin','dev-server'],function(){
	
})	