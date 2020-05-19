Function.prototype.bind2 = function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this

    //这里的arguments是bind函数从第二个到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1)


    var fNop = function () {
    }

    var fBound = function () {
        //这里的arhuments是返回的函数传递的参数
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fNop ? this : context, args.concat(bindArgs))
    }

    fNop.prototype = this.prototype

    fBound.prototype = new fNop()
    return fBound
}








