var arr = [2,3,4,1,7]

function insertSort(arr){
    let newArr = []
    newArr.push(arr[0])
    
    //i从数组第二项开始比较
    for(let i = 1; i < arr.length; i++){
        //拿出一个值
        let A = arr[i]
        //从后往前比较
        for(let j = newArr.length-1; j >= 0; j--){
            //和新数组值开始比较
            let B = newArr[j]
            if(A > B){
                //把A放到B的后面
                newArr.splice(j+1,0,A)
                //跳出循环
                break;
            }
            //比到第一项直接放在数组第一项
            if(j === 0){
                newArr.unshift(A)
            }
        }
    }
    return newArr
}
console.log(insertSort(arr))