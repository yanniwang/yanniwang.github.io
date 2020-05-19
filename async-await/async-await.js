// async返回的是一个promise对象
// function getNum(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num + 1)
//         }, 1000)
//     })
// }
// function asyncFun(func) {
//     var gen = func()
//     function next(data) {
//         var result = gen.next(data)
//         if (result.done) return result.value
//         result.value.then(function (data) {
//             next(data)
//         })
//     }
//     next()
// }
// var func = function *() {
//     var f1 = yield getNum(1)
//     var f2 = yield getNum(f1)
//
//     console.log(f2)
// }
// asyncFun(func)

function getNum(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num + 1)
        }, 0)
    })
}

function asyncFun(func) {
    var gen = func()

    function next(data) {
        var result = gen.next(data)
        if (result.done) return result.value
        result.value.then(function (data) {
            next(data)
        })
    }

    next()
}


var func = function* () {
    var f1 = yield getNum(1)
    var f2 = yield getNum(f1)

    console.log(f2)
}


debugger
asyncFun(func)
