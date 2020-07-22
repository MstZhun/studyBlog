

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
            {
                test:/\.less$/,
                //使用多个loader
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                //问题：默认处理不了html里面的图片
                test:/\.(jpg|png|gif)$/,
                //使用一个loader
                //下载url-loader，依赖file-loader
                loader:'url-loader',
                options:{
                    //图片大小小于8kb，会被base64处理
                    //优点：减少请求次数，减轻服务器压力
                    //缺点：图片体积变得更大，文件请求速度变慢
                    limit:8 * 1024,
                    //给图片重命名
                    //[hash:10] 取hash前十位
                    //[ext] 取文件原来的扩展名
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                //处理html里面的图片资源，负责引入img，从而能是url-loader处理
                loader:'html-loader',

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}