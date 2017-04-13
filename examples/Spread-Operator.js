//
console.log('1. 调用函数时，不使用apply');
const doSomething = (x, y, z) => {
    console.log(x, y, z);
};

const args = [1, 2, 3];
doSomething(...args);

//
console.log('2. 拼接数组');
const result = [];
const arr1 = [1, 2, 3, 4];
const arr2 = [6, 7, 6];
result.push(...arr1);
result.unshift(...arr2)
console.log(result);

//
console.log('3. 克隆数组');
const a = [1, 2, 3];
const b = [...a];
console.log(a, b, a === b);

//
console.log('4. 使用Math方法');
const numbers = [9, 4, 2, 1];
console.log(Math.min(...numbers));


// ../node_modules/.bin/babel-node Spread-Operator.js
// 对于React中很多的解构赋值，当父组件传递了很多props给子组件时，子组件可能只需要部分props(x, y)，剩余的(z)可以继续往子组件传递
console.log('5. 解构赋值');
let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
console.log(x, y, z);

// 6. 转换arguments或者NodeList等类数组为数组

// [...document.querySelectorAll('div')]
// var myFn = function(...args) {
//  //args现在为数组类型
// }