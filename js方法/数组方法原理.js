
        // 实现reduce
   //      Array.prototype.my_reduce = function(callback,initVal){
   //      	if(!Array.isArray(this) || !this.length || typeof callback !== 'function'){
   //      		return []
   //      	}else{
   //      		let flag = initVal !== undefined
   //      		let pre = flag ? initVal : this[0]
   //      		for (let i = flag ? 0 : 1; i < this.length; i++) {
   //      			let cur = this[i]
   //      			pre = callback(pre,cur,i,this)
   //      		}
   //      		return pre
   //      	}
   //      }
   //      let arr = [1,2,3]
   //      let sum = arr.my_reduce((pre,cur)=>{
   //      	return pre + cur
   //      })
   //      console.log(sum)

   //      // 实现map

   //      Array.prototype.my_map = function(callback){
   //      	let newArr = []
   //      	for (let i = 0; i < this.length; i++) {
   //      		newArr.push(callback(this[i],i,this))
   //      	}
   //      	return newArr
   //      }

 		// let map = arr.my_map((ele,index)=>{
 		// 	return ele*ele
 		// })

 		// console.log(map)
 		// let arr = [1,2,3]
 		// let map = arr.map(function(ele,index){
 		// 	console.log(this)
 		// 	return ele * ele
 		// },[555])
 		// console.log(map)


 		// let arr = [1,2,3]
 		// Array.prototype.my_filter = function(fn,thisVal){

 		// 	let flag = thisVal !== undefined

 		// 	let newArr = []
 		// 	for (let i = 0; i < this.length; i++) {

 		// 		fn.call( flag ? thisVal : window, this[i],i,this) && newArr.push(this[i])
 		// 	}
 		// 	return newArr
 		// }

 		// let value = arr.my_filter(function(ele,index,arry){
 		// 	console.log('this',this)

 		// 	console.log(ele,index,arry)
 		// 	return ele < 3
 		// })

 		// console.log(value)


//  		let car = {}
// let val = 3000
// Object.defineProperty(car, 'price', {
//   enumerable: true,
//   configurable: true,
//   get(){
//     console.log('price属性被读取了')
//     return val
//   },
//   set(newVal){
//     console.log('price属性被修改了')
//     val = newVal
//   }
// })