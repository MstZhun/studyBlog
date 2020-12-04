var name = 'my window'
var obj = {
    name:'第一层',
    fn1:()=>{
        return this.name
    },
    fn2:function(){
        return this.name
    },
    prop:{
        name:'第二层',
        pfn1:()=>{
            return this.name
        },
        pfn2:function(){
            return this.name
        },
        prop:{
            name:'第三层',
            pfn1:()=>{
                return this.name
            },
            pfn2:function(){
                return this.name
            },
        }
    }
}

console.log(obj.fn1()) // 'my window'
console.log(obj.fn2()) // '第一层'

console.log(obj.prop.pfn1()) // 'my window'

console.log(obj.prop.pfn2()) // '第二层' => 如果prop里面没有name，则返回undefined

console.log(obj.prop.prop.pfn1()) // 'my window'

console.log(obj.prop.prop.pfn2()) // '第三层' => 如果prop里面没有name，则返回undefined

var a = {
    name:'我是另一个对象'
}
a.fn = obj.prop.pfn2
console.log(a.fn()) 

// function aa(){
//     console.log(this,'---')
// }
// aa()

var b = [1,2,3]
b.forEach((ele,index,arr)=>{
    arr[index] * 2
})
console.log(b)