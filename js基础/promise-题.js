// 1
// new Promise((resolve,reject)=>{
//     console.log('1')
//     resolve()
// }).then(res=>{
//     console.log('2')
//     return new Error('我错了')
// }).then(res=>{
//     console.log('4')
// }).catch(err=>{
//     console.log(err,'3')
// })

// 2
// Promise.resolve('foo').then(Promise.resolve('bar')).then(function(res){
//     console.log(res) // 'foo'
// })
 
//3
// Promise.resolve('foo').then(()=>{
//     console.log('999--')
// }).then(function(res){
//     console.log(res,88)
// })

//4
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(new Error('fail')), 3000)
//   })
  
//   const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
//   })
 
//   p2
//     .then(result => console.log(result,'-----999'))
//     .catch(error => console.log(error))

//5
new Promise((resolve,reject)=>{
    console.log('1')
    // resolve('888')
    reject()
    // console.log('44')
    throw new Error('我错了')
    
}).then(res=>{
    console.log('2')
    return 'ttt'
},err=>{
 console.log('999999')
 return '999'
}).catch(err=>{
    console.log('0000')
    return 'hahhaha'
}).then(res=>{
    console.log(res,'uuuu')
})