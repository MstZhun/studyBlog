let a = [1,2,3,3]
let b = [2,3,4,5]

// 并集 （去掉两个数组重复的）
let union = [...new Set([...a,...b])]
console.log(union)  // [ 1, 2, 3, 4, 5 ]

// 交集 （取重复的元素）
let inter = [...new Set(a)].filter(ele=>new Set(b).has(ele))
console.log(inter) //[ 2, 3 ]

// 差集
let diff = [...new Set(a)].filter(ele=>!new Set(b).has(ele))
console.log(diff) // [ 1 ]
