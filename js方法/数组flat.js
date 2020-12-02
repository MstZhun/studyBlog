Array.prototype.myFlat = function(dep = 1){
    if(typeof dep !== 'number') {
        throw new TypeError('参数必须为数字类型')
    }
    if(dep === 0) return this

    return this.reduce((pre, cur) => {
        if(Array.isArray(cur) && dep > 1) {
            return pre.concat(cur.myFlat(--dep))
        } else {
            return pre.concat(cur)
        }
    }, []);
    // let result = []
    // this.forEach(item=>{
    //     if(Array.isArray(item)){
    //         dep--;
    //         if(dep < 0){
    //             let newArr = result.push(item)
    //             return newArr
    //         }
    //         result.push(...item.myFlat(dep))
    //     }else{
    //         result.push(item)
    //     }
    // })
    // return result
}

var a = [1,2,3,4,5,[6,7,[8,9,[10,11,[12,[13]]]]]]
console.log(a.myFlat())