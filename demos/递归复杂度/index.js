"use strict";
function factorial1(n) {
  if (n === 1) return 1;
  return n * factorial1(n - 1);
}

//调用栈将会有5个factorial，复杂度O(n)
//Uncaught RangeError: Maximum call stack size exceeded
// console.log(factorial1(70000));

//使用尾递归
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

//调用栈只有一个，复杂度O(1)
console.log(factorial(70000, 1))
