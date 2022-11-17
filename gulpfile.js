import gulp from 'gulp';
import markdown from 'gulp-markdown';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import slugify from 'slugify';

function markup() {
    return gulp
        .src('./src/*.md')
        .pipe(markdown())
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(
            rename(function (path) {
                path.basename = slugify(path.basename, { lower: true });
            })
        )
        .pipe(gulp.dest('./public'));
}

gulp.task('default', gulp.series(markup));
