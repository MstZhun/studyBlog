

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
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
 
            {
                exclude:/\.(css|html|js|jpg|png|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',

    //开发服务器devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    //特点：只会在内存中打包编译，不会有任何输出
    //启动指令：npx webpack-dev-server
    devServer:{
        //项目构建后的路径
        contentBase:resolve(__dirname,'dist'),
        //启用gzip压缩
        compress:true,
        //自动打开浏览器
        open:true,
        //端口号
        port:3000

    }
}