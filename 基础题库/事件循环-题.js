
// (function(){
//     console.log(1)
//     setTimeout(function(){console.log(2)},2000)
//     setTimeout(function(){console.log(3)},0)
//     console.log(4)
// })();
// 1 4 3 2

// try {
//     console.log(1)
//     setTimeout(()=>{
//         console.log(2)
//         throw new Error(3)
//     }) 
// } catch (error) {
//     console.log(error)
// }

// 1
// 2
// Uncaught Error: 3

