var gulp = require('gulp');
	gutil = require('gulp-util');
	coffee = require('gulp-coffee');
// gulp.task('log', function() {
// 	gutil.log('Workflows are awesome');
// });

//allows you to add multiple coffee files
var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});