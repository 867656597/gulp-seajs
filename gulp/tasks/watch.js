var gulp = require('gulp');
var config    = require('./../config');   //配置文件

/* watch 文件 */
gulp.task('watch', function() {
    const jsFiles = config.dev.moduleJs.concat(config.dev.appJs);
    const jadeFiles = config.dev.watchJade;
    // 看守所有.jade
    gulp.watch(jadeFiles, ['htmlmin'])
    // 看守所有.scss文件
    gulp.watch(config.dev.scss, ['scssmin'])
    // 看守所有.js文件
    gulp.watch(jsFiles, ['jsmin'])
});