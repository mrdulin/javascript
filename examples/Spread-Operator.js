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


//
console.log('5. 解构赋值');