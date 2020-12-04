var arr = [1, 2, 3];  //现实数组的全排列
function fn(arr) {
    var result = [];
    if (arr.length == 1) {
        result.push(arr);
        return result;
    }
  
    // [2,3]
    for (var i = 0; i < arr.length; i++) {
        var temp = [arr[i]]; //取任意一项放到temp的第一项 [1] [2]

        var remain = arr.slice(0);//深复制原数组到remain
        remain.splice(i, 1); //去掉那一项 [2,3] [3]
        
        var temp2 = fn(remain); //剩下的项全排列,返回[[1,2],[1,3]]这样的数据

        for (var j = 0; j < temp2.length; j++) {
            temp2[j].unshift(temp[0]); // [[5,1,2],[5,1,3]]这样的数据
            result.push(temp2[j]);
        }
    }
    return result;
}
console.log(fn(arr))

// var a = [[3]]
// var tep = [1]
// for (var j = 0; j < a.length; j++) {
//     console.log(a[j],'--01')
//     a[j].unshift(tep[0]); // [[5,1,2],[5,1,3]]这样的数据
// }
// console.log(a)

var a = function(){setTimeout("console.log()",2000,'liao')}
a()
clearTimeout(a)
a()