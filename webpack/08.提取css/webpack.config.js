const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'dist')
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //创建style标签，将样式放入
                    // 'style-loader',
                    //取代style-loader，提取js中的css到单独的css文件中
                    MiniCssExtractPlugin.loader,
                    //将css文件整合到js中
                    'css-loader'
                ]
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            //将css重命名
            filename:'css/main.css'
        })
    ]
}