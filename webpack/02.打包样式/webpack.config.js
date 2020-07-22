/***
   作用：运行webpack指令时，回加载里面的配置

   所有构建工具都是基于nodejs平台运行的，模块化默认commonjs。
 */

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
        ]
    },
    plugins:[
        //详细plugins配置
    ],
    //模式
    mode:'development',
    // mode:'production'
 }