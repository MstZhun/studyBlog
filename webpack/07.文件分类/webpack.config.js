const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8 * 1024,
                    name:'[hash:8].[ext]',
                    outputPath:'img'
                }

            },
            {
                test:/\.html$/,
                //处理html里面的图片资源，负责引入img，从而能是url-loader处理
                loader:'html-loader',

            },
            {
                exclude:/\.(html|css|less|js|jpg|png|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:8].[ext]',
                    outputPath:'media'
                }
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    devServer:{
        contentBase:resolve(__dirname,'dist'),
        compress:true,
        port:3000,
        open:true
    }
}