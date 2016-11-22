/**
 * 函数curry是将一个接受多个参数的函数转变为一组支持链式调用的函数链，其中每个函数仅有一个入参。
 * 例如，函数add(1,2,3)在经过科里化后调用方式将变为add(1)(2)(3)
 */
const slice = Array.prototype.slice;

const curry1 = (fn) => {
    return function f1() {
        if(arguments.length === 0) {
            return f1;
        } else {
            return fn.apply(this, arguments);
        }
    }
}

const arr = [1,2,3,4,5];
const add = a => b => a + b;
const sum = arr => arr.map(add(0)).reduce((pre, cur) => cur + pre);
console.log(sum(arr));
