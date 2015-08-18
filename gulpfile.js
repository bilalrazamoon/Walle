var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var uglify = require('gulp-uglifyjs');
var sh = require('shelljs');

var paths = {
    sass: ['./scss/**/*.scss'],
    css: [
        './www/lib/kendo-ui-core/styles/kendo.common-material.core.min.css',
        './www/lib/kendo-ui-core/styles/kendo.materialblack.min.css'
    ],
    js: [
        './www/js/**/*.js',
        '!./www/js/vendors*.js',
        '!./www/js/app.production*.js'
    ],
    lib: [
        './www/lib/jquery/dist/jquery.min.js',
        './www/lib/ionic/release/js/ionic.bundle.js',
        './www/lib/ngCordova/dist/ng-cordova.js',
        './www/lib/angular-ui-mask/dist/mask.js',
        './www/lib/kendo-ui-core/js/kendo.core.min.js',
        './www/lib/kendo-ui-core/js/kendo.angular.min.js',
        './www/lib/kendo-ui-core/js/kendo.calendar.min.js',
        './www/lib/kendo-ui-core/js/kendo.fx.min.js'
    ]
};

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function (done) {
    gulp.src('./scss/app.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('buildCss', function (done) {
    gulp.src(paths.css)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('buildJs', function (done) {
    gulp.src(paths.js)
        .pipe(concat('app.production.js'))
        .pipe(gulp.dest('./www/js/'))
        .pipe(uglify('app.production.min.js'))
        .pipe(gulp.dest('./www/js/'))
        .on('end', done);
});

gulp.task('buildVendors', function (done) {
    gulp.src(paths.lib)
        .pipe(concat('vendors.js'))
        .pipe(replace(/"use strict";/g, ''))
        .pipe(gulp.dest('./www/js/'))
        .pipe(uglify('vendors.min.js'))
        .pipe(replace(/"use strict";/g, ''))
        .pipe(gulp.dest('./www/js/'))
        .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
