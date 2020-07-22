
/**
    loader  1.下载  2.使用（配置loader）
    plugins 1.下载  2.引入   3.使用
 */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'dist')
    },
    module:{
        rules:[

        ]
    },
    plugins:[
        //功能：默认创建一个空的html文件，自动引入打包输出的所有资源（css，js）
        new HtmlWebpackPlugin({
            //复制./src/index.html文件，并自动引入打包输出的所有资源（css，js）
            template:'./src/index.html'
        })
    ],
    mode:'development'
}