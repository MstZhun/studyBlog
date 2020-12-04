
// 手机号截取 ****
var a = '13954785909'

// substr 方法
function g(str){
    let temp  = str.substr(0,3) + '****' + str.substr(7)
    return temp
}
// console.log(g(a))

// 正则
var reg = /(\d{3})\d{4}(\d+)/

// var phone = a.replace(reg,"$1****$2")
var phone = a.replace(reg,function($1,$2,$3){
    console.log($1,$2,$3)
    return $2 + '****' + $3
})
// console.log(phone)

