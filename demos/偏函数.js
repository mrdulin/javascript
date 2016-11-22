/**
 * 偏函数应用是指将一个拥有多个参数的原函数包裹，随后返回一个接受少量参数的新函数。
 */
var multiply = function multiply(x, y) {
    return x * y;
}

var partial = function partial(fn) {
    var args = [].slice.call(arguments, 1);

    return function() {
        var combineArgs = args.concat([].slice.call(arguments, 0));

        return fn.apply(this, combineArgs);
    }
}

var double = partial(multiply, 2);

console.log(double(4));