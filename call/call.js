// Function.prototype.myCall = function (context) {
//     if (typeof this !== 'function') {
//         throw new TypeError('Error')
//     }
//     context = context || window
//     context.fn = this
//     const args = [...arguments].slice(1)
//     const result = context.fn(...args)
//     delete context.fn
//     return result
// }

Function.prototype.call2 = function (context) {
    context.fn = this
    var args = []
    for (let i = 1 ; i < arguments.length ; i ++) {
       args.push('arguments[' + i + ']')
    }

    var result = eval('context.fn(' + args + ')')
    delete context.fn
    return result
}


var obj = {
    value: 1
}

function fun(name, age) {
    console.log(this.value)
    console.log(name)
    console.log(age)
}

fun.call2(obj, 'Dive', 45)


// var value = 2;
//
// var obj = {
//     value: 1
// }
//
// function bar(name, age) {
//     return {
//         value: this.value,
//         name: name,
//         age: age
//     }
// }
//
// debugger
// bar.call(null);
//
// console.log(bar.call(obj, 'kevin', 18));







