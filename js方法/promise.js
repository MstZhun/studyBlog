class MyPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(executor) {
        this.status = MyPromise.PENDING
        this.value = null

        // 捕获执行时错误,执行reject()
        try {
            //更改函数resolve，reject的this指向
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }

    }
    resolve(value) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.FULFILLED
            this.value = value
        }
    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECTED
            this.value = reason
        }
    }
    then(onFul,onRej){
        if(typeof onFul !== 'function'){
            onFul = ()=>{}
        }
        if(typeof onRej !== 'function'){
            onRej = ()=>{}
        }
        if(this.status === MyPromise.FULFILLED){
            setTimeout(()=>{
                try {
                    onFul(this.value)
                } catch (error) {
                    onRej(error)
                }
            })
        }
        if(this.status === MyPromise.REJECTED){
            setTimeout(()=>{
                try {
                    onRej(this.value)
                } catch (error) {
                    onRej(error)
                }
            })
        }
    }
}

// promise all

function promiseAll(arr){
    if(!Array.isArray(arr)){
        throw new Error("parmas must be an array!")
    }
    return new Promise((resolve,reject)=>{
        let total = arr.length,
            currentToal = 0,
            values = new Array(total);
        for(let i = 0; i < total; i++){
           Promise.resolve(arr[i]).then(res=>{
            values[i] = values
            currentToal++
            if(currentToal === total){
                return resolve(values)
            }
           },err=>{
                return reject(err)
           })
        }
    })
}

// promise race

function promiseRace(arr){
    if(!Array.isArray(arr)){
        throw new Error("parmas must be an array!")
    }
    return new Promise((resolve,reject)=>{
        arr.forEach(ele=>{
            Promise.resolve(ele).then(res=>{
                resolve(res)
            },err=>{
                reject(err)
            })
        })
    })
}