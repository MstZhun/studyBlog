// 防抖

function debounce(fn,wait){
    let timer
    return function(){
        let _this = this,
            _arg = arguments
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(_this,_arg)
        },wait)
    }
}

// 节流

function throttle(fn,wait){
    let timer
    return function(){
        let _this = this,
            _arg = arguments;
        if(!timer){
            timer = setTimeout(()=>{
                fn.apply(_this,_arg)
                timer = null
            },wait)
        }

    }
}

var arr = [5, 6, [1, 2], [3, 4, 5]]
console.log(Array.prototype.concat.call([], arr));
console.log(Array.prototype.concat.apply([], arr));