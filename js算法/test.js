// var a = {
//     name:'laio',
//     age:25,
//     sex:'nan'
// }
// for (let key in a) {
//     console.log(key); 
//   }

// for(let key of a.keys()){
//     console.log(key,'---2')
// }


let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };



for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
