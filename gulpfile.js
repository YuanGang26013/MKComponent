
var gulp = require('gulp');
var typescript = require('gulp-typescript');
var typescriptConfig = require('./typescript.config');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

gulp.task('compile_react_source', function () {
    gulp.src('src/**/*.tsx')
        .pipe(typescript({
            "module": "commonjs",
            "jsx": "react",
            "target": "es5"
        }))
        .pipe(gulp.dest('build'))
});