// var name = 'my window'
// var obj = {
//     name:'第一层',
//     fn1:()=>{
//         return this.name
//     },
//     fn2:function(){
//         return this.name
//     },
//     prop:{
//         name:'第二层',
//         pfn1:()=>{
//             return this.name
//         },
//         pfn2:function(){
//             return this.name
//         },
//         prop:{
//             name:'第三层',
//             pfn1:()=>{
//                 return this.name
//             },
//             pfn2:function(){
//                 return this.name
//             },
//         }
//     }
// }

// console.log(obj.fn1()) // 'my window'
// console.log(obj.fn2()) // '第一层'

// console.log(obj.prop.pfn1()) // 'my window'

// console.log(obj.prop.pfn2()) // '第二层' => 如果prop里面没有name，则返回undefined

// console.log(obj.prop.prop.pfn1()) // 'my window'

// console.log(obj.prop.prop.pfn2()) // '第三层' => 如果prop里面没有name，则返回undefined

// var a = {
//     name:'我是另一个对象'
// }
// a.fn = obj.prop.pfn2
// console.log(a.fn()) 

// function aa(){
//     console.log(this,'---')
// }
// aa()

var b = '999'
function a() {
    let b = 'liao'
    return ()=>{
        console.log(this.b)
    }
}
  console.log(a()())  // window

//不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定
// let a = {}
// let fn = function () { console.log(this) }
// fn.bind().bind(a)() // => // window

// var arr = [5, 6, [1, 2]];
// console.log(Array.prototype.concat.call([], arr));
// console.log(Array.prototype.concat.apply([], arr));

// var g = [1,2,3,null,4,'',5]
// var h = g.map((ele,index,arr)=> {
//     arr.push(8)
//     return ele
// })
// console.log(g)
// console.log(h)

// g.forEach((num, index) => {
//     g[index] = num * 2;
// });
// console.log(g)
