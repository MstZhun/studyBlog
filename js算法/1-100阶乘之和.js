// 1-100的阶乘之和
// 1*1 + 2*1 + 3*2*1 + 4*3*2*1 + ...
function factorialSum(n) {
    let pre = 1,
        sum = 0;
    for (let i = 1; i <= n; i++) {
        pre = i * pre
        sum += pre
    }
    return sum
}
console.log(factorialSum(100)) 


function factorialSum2(n){
    let i = 1,
        pre = 1,
        sum = 0;
    while(i <= n){
        pre = i*pre
        sum += pre
        i++
    }
    return sum
}

console.log(factorialSum2(100)) 