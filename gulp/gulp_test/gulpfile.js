/**
 * gulp4.0练习
 */

const {src, dest, series, parallel,watch} = require('gulp')

const $ = require('gulp-load-plugins')() // 引入自己需要的gulp-*插件
// console.log($)
// const concat = require('gulp-concat') // 合并文件
// const uglify = require('gulp-uglify') // 压缩js文件
// const rename = require('gulp-rename') // 命名文件
// const less = require('gulp-less') // 编译less
// const cleanCss = require('gulp-clean-css') // 压缩css
// const htmlmin = require('gulp-htmlmin') // 压缩html
// const livereload = require('gulp-livereload') // 监听文件改变，实时改变dist文件
// const connect = require('gulp-connect') // 页面实时加载
const open = require('open') // 打开localhost页面

/**
 * 合并不冲突的js文件
 */
const js = ()=>{
    return src(['js/*.js','!js/*.min.js'])
    .pipe($.concat('bulid.js'))
    .pipe(dest('dist/js'))
    .pipe($.uglify())
    .pipe($.rename({'suffix':'.min'}))
    .pipe(dest('dist/js'))
    .pipe($.livereload())
    .pipe($.connect.reload())
}


 /**
  * 复制合并css
  */

  const css = ()=>{
    return src('css/less/*.less')
    .pipe($.less())
    .pipe($.concat('build.css'))
    .pipe($.cleanCss({compatibility:'ie8'}))
    .pipe($.rename({suffix:'.min'}))
    .pipe(dest('dist/css'))
    .pipe($.livereload())
    .pipe($.connect.reload())
  }

  /**
   * 压缩html
   */

   const html = ()=>{
       return src('*.html')
       .pipe($.htmlmin({collapseWhitespace:true}))
       .pipe(dest('dist/'))
       .pipe($.livereload())
       .pipe($.connect.reload())
   }

   /**
    * 监听文件实时刷新文件
    */

    const watchTask = ()=>{
        $.livereload.listen()
        watch(['js/*.js'],parallel(js))
        watch(['css/less/*.less'],parallel(css))
        watch(['*.html'],parallel(html))
    }

    /**
     * 实时加载刷新页面
     */

     const server = ()=>{
         $.connect.server({
             root:'dist/',
             livereload:true,
             port:8888
         })
         open('http://localhost:8888/')
         watch(['js/*.js'],parallel(js))
         watch(['css/less/*.less'],parallel(css))
         watch(['*.html'],parallel(html))
     }

     /**
      * 默认任务
      */
     const defaults = ()=>{
        parallel(js,css,html)
     }
// exports.js = js

exports.default = parallel(js,css,html)
exports.server = server