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