var name = 'aaa bbb ccc';
//  var uw = name.replace(/\b\w+\b/g, function(word){
//     console.log(word)
//     return word.substring(0,1).toUpperCase()+word.substring(1);}
//   );
//   console.log(uw)
var up = name.replace(/\b\w+\b/g, function (str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1)
})
console.log(up)

// toLowerCase() // 转小写
var nameSub = name.split('')
nameSub[0] = nameSub[0].toUpperCase()
let end = nameSub.lastIndexOf(' '),
    start = nameSub.indexOf(' ');
console.log(start,end)
for (let i = start + 1; i <= end + 1; i++) {
    if (nameSub[i - 1] === ' ') {
        nameSub[i] = nameSub[i].toUpperCase()
    }
}
console.log(nameSub.join(''))