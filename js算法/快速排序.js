

let arr = [4,5,2,3,7,3,6]

function quickSort(arr){
console.log('ARR', arr)
let base_num = arr[0],
    right = [],
    left = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < base_num){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    if(left.length >= 2) left = quickSort(left)

    if(right.length >= 2) right = quickSort(right)

    return [...left,base_num,...right]
}
console.log(quickSort(arr))