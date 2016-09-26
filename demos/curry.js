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
