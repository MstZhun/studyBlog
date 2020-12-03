// var arr = [1, 2, 3];  //现实数组的全排列
// function fn(arr) {
//     var result = [];
//     if (arr.length == 1) {
//         result.push(arr);
//         return result;
//     }
  
//     // [2,3]
//     for (var i = 0; i < arr.length; i++) {
//         var temp = [];
//         temp.push(arr[i]); //取任意一项放到temp的第一项 [1] [2]
    

//         var remain = arr.slice(0);//深复制原数组到remain
//         remain.splice(i, 1); //去掉那一项 [2,3] [3]
        
      
//         var temp2 = fn(remain); //剩下的项全排列,返回[[1,2],[1,3]]这样的数据
       
//         for (var j = 0; j < temp2.length; j++) {
//             console.log(temp2[j],'--01')
//             temp2[j].unshift(temp[0]); // [[5,1,2],[5,1,3]]这样的数据
//             console.log(temp2[j],'--02')
//             result.push(temp2[j]);
//         }
//     }
//     return result;
// }
// console.log(fn(arr))


function swap(arr,i,j) { 
    if(i!=j) {          
        var temp=arr[i]; 
        arr[i]=arr[j]; 
        arr[j]=temp; 
    } 
} 
var count=0; 
function show(arr) { 
    document.write("P<sub>"+ ++count+"</sub>: "+arr+"<br />"); 
} 
//此方法最主要是交换的思路
function perm(arr) {   
     (function fn(n) { //为第n个位置选择元素 
        for(var i=n;i<arr.length;i++) { 
            swap(arr,i,n); 
             if(n+1<arr.length-1) //根据下标a(b+1) 不是最后一项，判断数组中剩余的待全排列的元素是否大于1个 
                 fn(n+1); //从第n+1个下标进行全排列 
             else
                 show(arr); //显示一组结果 
             swap(arr,i,n); 
         } 
     })(0); 
 } 
 perm(["e1","e2","e3"]); 