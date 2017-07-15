/**
 * Created by dulin on 2017/6/20.
 */
//使用数组结构，交换两个变量的值
let x = 2, y = 1;
[y, x] = [x, y];

console.log('x: ', x, ' y: ',  y);


//数组结构忽略元素
const [a, , ...rest] = [1,2,3,4];
console.log(a, rest);
