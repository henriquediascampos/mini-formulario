const gulp = require('gulp');
const fileinclude = require('gulp-file-include')


gulp.task('fileinclude', function () {
    gulp.src(['src/view/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./view'));
});

gulp.task('default', gulp.series('fileinclude'));
// /home/henrique/Git/electron/mini-formulario/src/view/index.html