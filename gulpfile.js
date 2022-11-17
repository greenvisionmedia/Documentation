import gulp from 'gulp';
import markdown from 'gulp-markdown';
import htmlmin from 'gulp-htmlmin';

function markup() {
    return gulp
        .src('./src/*.md')
        .pipe(markdown())
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest('./public'));
}

gulp.task('default', gulp.series(markup));
