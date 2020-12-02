function Merger(a, b){
    var n = a && a.length;
    var m = b && b.length;
    var c = [];
     var i = 0, j = 0;

    while (i < n && j < m)
     {
        
         if (a[i] < b[j])
             c.push(a[i++]);
         else
             c.push(b[j++]); 
     }

     while (i < n)
         c.push(a[i++]);

     while (j < m)
         c.push(b[j++]); 

    // console.log("将数组",a,'和',b,'合并为',c)
    return c;
}
function merge_sort(arr){
    // console.log(arr)
    if(arr.length == 1)
        return arr

    var mid = Math.floor(arr.length/2)
    var left = arr.slice(0,mid)
    var right = arr.slice(mid)
    // console.log(Merger(merge_sort(left),merge_sort(right)))
    return Merger(merge_sort(left),merge_sort(right)); //合并左右部分
}
var arr = [2,1,7,5,6]
merge_sort(arr)
console.log(merge_sort(arr))
