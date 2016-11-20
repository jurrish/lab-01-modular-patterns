'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('mocha');

//use gulp to lint all the shits
gulp.task('lint all the things', function(){
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint());
});

//use gulp task to automate testing
gulp.task('run all the mochas', function(){
  gulp.src('./test/*.js')
  .pipe(mocha());
});

//use gulp to watch files, lint urrthang, and run tests
gulp.task('watch files, lint, run things', function() {
  gulp.watch(['**/*.js', '!node_modules/**'], ['lint all the things', 'run all the mochas']);
});
//use gulp to default in whatever my favorite task is (maybe test?)
gulp.task('default', ['lint al the things']);
