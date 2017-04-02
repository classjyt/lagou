//引入模块
var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //引入方便的模块 其他gulp模块 可以直接用$引用 不用再声明b变量            
var browserSync = require('browser-sync').create();

//创建一个全局变量，用来定义目录路径
var app = {
	srcPath: 'src/', //本地开发环境
	prdPath: 'dist/' //生成部署环境
};

//bower下载的第三方依赖，copy过来
gulp.task('lib', function() {
	gulp.src('lib/**/*.js')
		.pipe(gulp.dest(app.prdPath + 'vendor'))
		.pipe(browserSync.stream()); //浏览器同步更新
});

//LESS编译、压缩
gulp.task('less', function() {
	gulp.src([app.srcPath + 'css/*.less', '!' + app.srcPath + 'css/_*.less'])
		.pipe($.less())
		.pipe($.cssnano())
		.pipe(gulp.dest(app.prdPath + 'css'))
		.pipe(browserSync.stream());
});

//JS合并、压缩混淆
gulp.task('js', function() {
	gulp.src(app.srcPath + 'js/**/*.js')
		.pipe($.concat('all.js'))
		// .pipe($.uglify())
		.pipe(gulp.dest(app.prdPath + 'js'))
		.pipe(browserSync.stream());
});

//image复制
gulp.task('image', function() {
	gulp.src(app.srcPath + 'images/*.*')
		.pipe(gulp.dest(app.prdPath + 'images'))
		.pipe(browserSync.stream());
});

//html压缩、复制
gulp.task('html', function() {
	gulp.src(app.srcPath + '**/*.html')
		// .pipe($.htmlmin({
		// 	collapseWhitespace: true,
		// 	removeComments: true,
		// 	collapseBooleanAttributes: true,
		// 	removeAttributeQuotes: true,
		// }))
		.pipe(gulp.dest(app.prdPath))
		.pipe(browserSync.stream());
});

// json
gulp.task('json', function() {
	gulp.src(app.srcPath + 'data/*.json')
		.pipe(gulp.dest(app.prdPath + 'data'))
		.pipe(browserSync.stream());
});

// 清空
gulp.task('clear', function() {
	gulp.src(app.prdPath)
		.pipe($.clean());
});

//浏览器同步：当项目文件被修改时浏览器自动同步刷新
gulp.task('serve', ['lib', 'less', 'js', 'image', 'html', 'json'], function() {
	browserSync.init({
		server: {
			baseDir: app.prdPath
		}
	});

	gulp.watch('lib/**/*', ['lib']);
	gulp.watch(app.srcPath + 'css/*.less', ['less']);
	gulp.watch(app.srcPath + 'js/**/*.js', ['js']);
	gulp.watch(app.srcPath + 'images/*.*', ['image']);
	gulp.watch(app.srcPath + '**/*.html', ['html']);
	gulp.watch(app.srcPath + 'data/*.json', ['json']);
});

gulp.task('default', ['serve']);