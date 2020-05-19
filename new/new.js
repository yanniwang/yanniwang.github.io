function news(func) {
    var target = {};//生成新对象
    target.__proto__ = func.prototype;//实例的__proto__指向原型，构造函数的prototype也指向原型（链接到原型）
    var res = func.call(target);//把函数的this绑定在了新生成的对象中
    if (typeof (res) == "object" || typeof (res) == "function") {
        return res;//如果传入的函数(构造函数)有自己的返回值，则返回该值
    }
    return target;//如果传入的函数(构造函数)没有自己的返回值，则返回新对象
}

