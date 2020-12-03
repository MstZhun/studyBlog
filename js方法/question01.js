 //1.事件循环，宏任务，微任务，promise catch finally
 // catch，finally 后面的then会继续执行，
 // event loop : http://www.ruanyifeng.com/blog/2014/10/event-loop.html

//  console.log('start')
//  setTimeout(_ => {
//      console.log('--setTimeout')
//  })
//  new Promise((resolve, reject) => {
//      console.log('--promise')
//      // resolve()
//      reject()
//      // console.log(9999)
//  }).then(_ => {
//      console.log('--promise_then_1')
//  }).catch(err => {
//      // finally
//      console.log('--err')
//  }).then(_ => {
//      console.log('--promise_then_2')
//  })
//  console.log('end')

//2.[0,2,4,5,0,0] => [2,4,5,0,0,0]
// const arr = [0,2,4,5,0,0]
// function test(arr){
//     let one = [],
//     two = [];
//     arr.forEach(ele => {
//         if(ele ===  0 ){
//             one.push(ele)
//         }else{
//             two.push(ele)
//         }
//     });
//     return [...two,...one]
// }
// console.log(test(arr))

//3.函数柯里化（参数复用，提前确认判断，延迟执行）
// 延迟执行 1.防抖节流 2.柯里化
// 柯里化函数的特点如上注释所示：
// 复用第一个参数
// 返回新函数
// 收集剩余参数
// 返回结果

// var obj = {
//     toString: function() {
//         console.log('调用了 obj.toString');
//         return {};
//     },
//     valueOf: function() {
//         console.log('调用了 obj.valueOf')
//         return '110';
//     }
// }
// alert(obj)

//利用toString ， valueOf
// function add(){
//     let _args = [...arguments]  // Array.prototype.slice.call(arguments)  Array.from(arguments)
//     let _adder = function(){
//         _args.push(...arguments)
//         return _adder
//     }
//     _adder.toString = function(){
//         return _args.reduce((pre,cur)=>pre + cur)
//     }
//     return _adder
// }
// console.log(add(1)(2,3,4,5)) 

// function add(){
//     let _args = [...arguments]
//     let _add = function(){
//        console.log([...arguments])
//         if(arguments.length === 0){
//             return _args.reduce((pre,cur)=>pre + cur)
//         }else{
//             // [].push.apply(_args, arguments)
//             _args.push(...arguments)
//             return _add
//         }
//     }
//     console.log('8888')
//     return _add
// }
// console.log(add(1)(2)(3)(4)())

//不用每次都判断if else 了，减少判断
// const whichEvent = (function(){
//     if(window.addEventListener){
//         return function(element,type,listener,useCapture){
//             element.addEventListener(type,function(e){
//                 listener.call(element,e)
//             },useCapture)
//         }
//     }else if(window.attachEvent){
//         return function(element,type,handler){
//             element.attachEvent('on' + type,function(e){
//                 handler.call(element,e)
//             })
//         }
//     }
// })()

// console.log(whichEvent)

// function hi(name,age,school){
//     return `您好！我是${name},${age}岁，毕业于${school}`
// }
// function curry(fn){
//     const len = fn.length
//     console.log(len)
//     return function inner(){
//         let _arg = [...arguments]
//         console.log(_arg,len)
//         if(_arg.length >= len){
//             return fn(..._arg)
//         }else{
//             return function(){
//                 return inner(..._arg,...arguments)
//             }
//         }
//     }
// }
// let c =  curry(hi)
// console.log(c('小明')('20')('清华'))


// let a = new Promise((rev,rej)=>{
//     console.log('star')
//     rej('999')
//     console.log('end')
// })
// a.then(r=>{
//     console.log('--1')
// },err=>{
//     console.log(err)
// }).catch(err=>{
//     console.log('999' + err)
// })

// class A {
//     c() {
//       return 2;
//     }
//   }
  
//   class B extends A {
//     constructor() {
//       super();
//       console.log(super.c()); // 2
//     }
//     c(){
//         return 3
//     }
//   }
//   let b = new B();

// class A {
//     constructor() {
//       this.x = 1;
//     }
//   }
  
//   class B extends A {
//     constructor() {
//       super();
//       this.x = 2;
//       super.x = 3;
//       console.log(super.x); // undefined
//       console.log(this.x); // 3
//     }
//   }
  
//   let b = new B();
  
var arr = [0,2,4,6,8];
var str = arr.map(function(item,index,arr2){
console.log(item);arr.push(1)
return item/2;});
console.log(str);
console.log(arr)