function EventEmitter() {
    //创建一个监听器的数组
    this.listener = {};
    //     listener: {
    //         'event1' : [fn1, fn2. fn3],
    //         'event2' : [fn3, fn4],
    //     }
}

//为事件注册监听器
//event为事件，fn是回调函数
EventEmitter.prototype.on = function (event, fn) {
    var listener = this.listener;

    //如果listener中含有这个事件的，直接push回调函数fn
    if (listener[event] && listener[event].length > 0) {
        listener[event].push(fn);
    }
    listener[event] = [];
}

//遍历执行监听器中的回调函数
EventEmitter.prototype.emit = function (event) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    this.listener[event].forEach(cb => {
        cb.apply(null, args);
    });
}

//删除事件监听器上某一个回调函数
EventEmitter.prototype.removeListener = function (event, fn) {
    var listeners = this.listener[event];
    var i = listeners.indexOf(fn);
    listeners.slpit(i, 1);
}

//删除事件上所有的回调函数
EventEmitter.prototype.removeAllListenner = function (event) {
    this.listener[event] = [];
}