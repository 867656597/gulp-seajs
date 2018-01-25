var gulp      = require('gulp');
var htmlmin   = require('gulp-htmlmin');  // 压缩html
var changed   = require('gulp-changed');
var gulpif    = require('gulp-if');
var jade      = require('gulp-jade');
var rename    = require('gulp-rename');
var minimist  = require('minimist');
var through   = require('through2');
var htmlreplace = require('gulp-html-replace');
var plumber     = require('gulp-plumber');

var config    = require('./../config');   //配置文件
var envOption = require('./../env');      //区分生产和开发环境

var htmlminConifg = {
    removeComments: true,                //清除HTML注释
    collapseWhitespace: true,            //压缩HTML
    collapseBooleanAttributes: true,     //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,         //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,    //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true,                      //压缩页面JS
    minifyCSS: true                      //压缩页面CSS
};


gulp.task('htmlmin',[], function() {
    return gulp.src(config.dev.jade)
    .pipe(plumber())
  	.pipe(changed(config.rootBuild))
	.pipe(jade({pretty: true}))
    .pipe(gulpif(envOption.options.env === 'production',htmlmin(htmlminConifg)))
    .pipe(rename(function(path){
        var basename = path.dirname === '.'?'index':path.dirname.split("\\").join('')
        path.basename = basename;
        path.extname = ".html"; 
    }))
    .pipe(htmlreplace({
        js: {
            src: 'js/page/',
            tpl: '<script src="%s%f.js"></script>'
        }
    }, {
        keepUnassigned: true,
        keepBlockTags: true,
        resolvePaths: true
    }))
    .pipe(rename({dirname: ''})) 
    .pipe(gulp.dest(config.build.html))
});
