const gulp = require("gulp"); //gulp
const gulpSass = require("gulp-sass"); //编译sass
const concat = require("gulp-concat"); //合并
const minCss = require("gulp-clean-css"); //压缩

//const gulpBabel = require("gulp-babel"); //编译js
const uglify = require("gulp-uglify"); //压缩js

const webserver = require("gulp-webserver"); //服务器

console.log(webserver);

//css
gulp.task("devCss", () => {
        return gulp.src("./src/scss/*.scss")
            .pipe(gulpSass())
            .pipe(minCss())
            .pipe(gulp.dest("./src/css"));
    })
    //js
gulp.task("devJs", () => {
        return gulp.src("./src/js/*.js")
            .pipe(uglify())
            .pipe(concat())
            .pipe(gulp.dest("./src/javascripts"));
    })
    //监听
gulp.task("watch", () => {
        gulp.watch("./src/scss/*.scss", gulp.series("devCss"))
        gulp.watch("./src/js/*.js", gulp.series("devJs"))
    })
    //服务器
gulp.task("default", () => {
    gulp.src("./src")
        .pipe(webserver({
            port: 4000,
            livereload: true,
            middleware: (req, res, next) => {
                res.end("aaa")
            }
        }))
})
gulp.task("go", gulp.parallel("watch", "default"));