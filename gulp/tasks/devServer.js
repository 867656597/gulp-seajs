var gulp        = require('gulp');
var browserSync = require('browser-sync');
var gutil       = require('gulp-util'); // 打印日志 log
var config      = require('./../config');   //配置文件


/* server 服务器 */
gulp.task('dev-server', function() {

    gutil.log(gutil.colors.green('启动本地服务器'));

    browserSync.init({ // 初始化 BrowserSync
        injectChanges: true, // 插入更改
        server: {
            baseDir: config.rootBuild, // 目录位置
        },
        ghostMode: { // 是否开启多端同步
            click: false, // 同步点击    
            scroll: false // 同步滚动
        },
        logPrefix: 'browserSync in gulp', // 在控制台打印前缀
        browser: ["chrome"], //运行后自动打开的；浏览器 （不填默认则是系统设置的默认浏览器）
        open: true, //       自动打开浏览器
        port: config.server.port   // 使用端口
    });
    // 监听watch
    gulp.start('watch');

});