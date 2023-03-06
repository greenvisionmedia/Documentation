import gulp from 'gulp';
import markdown from 'gulp-markdown';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import header from 'gulp-header';
import footer from 'gulp-footer';
import fs from 'fs';

function markup() {
    return gulp
        .src('./src/*.md')
        .pipe(markdown())  
        .pipe(header(fs.readFileSync('./src/header.html', 'utf8')))
        .pipe(footer(fs.readFileSync('./src/footer.html', 'utf8')))
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest('./public'));
}

gulp.task('default', gulp.series(markup));
