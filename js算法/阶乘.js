function jiecheng(num){
    if(num === 0) return 1
    return jiecheng(num -1) * num
}



// 递归优化
// 混杂模式（严格模式调用arguments.callee()会报错）

function jiecheng2(num){
    if(num === 0) return 1
    return arguments.callee(num - 1) * num
}

// 最佳模式(严格模式也适用)

var jiecheng3 = function fn(num){
    if(num === 0) return 1
    return fn(num - 1) * num
}