import gulp from 'gulp';
import markdown from 'gulp-markdown';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import slugify from 'slugify';
import header from 'gulp-header';
import footer from 'gulp-footer';
//import filter from 'gulp-filter';
import fs from 'fs';

function markup() {
    return gulp
        .src('./src/*.md')
        .pipe(markdown())  
        .pipe(header(fs.readFileSync('./src/header.html', 'utf8')))
        .pipe(footer(fs.readFileSync('./src/footer.html', 'utf8')))
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(
            rename(function (path) {
                path.basename = slugify(path.basename, { lower: true });
            })
        )
        .pipe(gulp.dest('./public'));
}

gulp.task('default', gulp.series(markup));
