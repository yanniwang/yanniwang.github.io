//数组柯里化
function curry(func) {
  var l = func.length;
  return function curried() {
    var args = [].slice.call(arguments);
    if(args.length < l) {
      return function() {
        var argsInner = [].slice.call(arguments)
        return curried.apply(this, args.concat(argsInner))
      }
    } else {
      return func.apply(this, args)
    }
  }
}

var f = function(a,b,c) {
  return console.log([a,b,c])
}
var curried = curry(f);
curried(1)(2)(3)

