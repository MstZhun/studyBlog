/**
   main.js webpack入口文件

   1.运行指令
   开发环境：webpack ./src/index.js -o ./dist/built.js --mode=development
   整体打包环境是开发环境

   生产环境：开发环境：webpack ./src/index.js -o ./dist/built.js --mode=production

   1.webpack只能处理js / json，不能处理css，img等
   2.生产环境开发环境会把es6模块化编译成浏览器能识别的模块
   3.生产环境比开发环境会多个自动压缩js代码
 */
import data from './data.json'
console.log(data)
 function add(x, y){
     return x + y
 }
 console.log(add(5,3))