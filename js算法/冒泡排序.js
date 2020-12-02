var arr = [2,3,4,1,7]

function bubbleSort(arr){
    let len = arr.length
    for(let i = 0; i < len - 1; i++){
        for(let j = i; j < len -1 -i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))