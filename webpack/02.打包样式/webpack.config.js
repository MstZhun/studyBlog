/***
   作用：运行webpack指令时，回加载里面的配置

   所有构建工具都是基于nodejs平台运行的，模块化默认commonjs。
 */

 const {resolve} = require('path')

 module.exports = {
     // 入口起点
    entry:'./src/index.js',
    //输出
    output:{
        //输出文件名
        filename:'built.js',
        //输出路径
        //__dirname nodejs变量，代表当前文件目录绝对路径
        path:resolve(__dirname,'dist')
    },
    //loader
    module:{
        rules:[
            // 详细loader配置
            //不同文件必须配置不同loader处理
            {
                //匹配哪些文件
                test:/\.css$/,
                // 使用哪些loader
                use:[
                    // use数组中loader执行顺序，从右往左，从下往上
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    //将less编译成css文件
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[
        //详细plugins配置
    ],
    //模式
    mode:'development',
    // mode:'production'
 }