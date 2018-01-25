// 存放未编译的文件夹
const ROOT_DEV ='src';
// 存放编译过后的文件夹
const ROOT_BUILD ='dist';
// 存放打包后的文件夹    
const ROOT_ZIP ='zip';
// 打包后文件的名字
const ROOT_ZIP_FILE = 'AJIMS';

module.exports = {
	rootDev: ROOT_DEV,
    rootBuild: ROOT_BUILD,
    rootZip: ROOT_ZIP,
    ROOT_ZIP_FILE: ROOT_ZIP_FILE,
    server: {
        port: '8081'
    },
    dev: {
        watchJade : [ROOT_DEV + '/**/*.jade' ],
    	jade      : [ROOT_DEV + '/home/**/*.jade',ROOT_DEV + '/index.jade'],
        scss      : [ROOT_DEV + '/assets/scss/index.scss'],
        image     : [ROOT_DEV + 'assets/img/**/*.*'],
        //业务模块代码
        moduleJs  : [ROOT_DEV + '/assets/js/**/*.js',ROOT_DEV + '/config/*.js',ROOT_DEV + '/api/*.js'],
        //页面代码（入口文件）
        appJs     : [ROOT_DEV + '/home/**/*.js'],
    },
        // 编译过后的路径
    build: {
        html : ROOT_BUILD + '',
        css: ROOT_BUILD + '/css',
        image: ROOT_BUILD + '/img',
        moduleJs: ROOT_BUILD + '/js',
        appJs: ROOT_BUILD + '/js/page',
    }
}