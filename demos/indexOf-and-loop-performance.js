const arr = [];
const len = 10000000;

for(let i = 0; i < len; i++) {
    arr.push(i);
}

const someValue = Math.floor(Math.random() * 1000000);
console.log(someValue);

console.time('array indexOf index');
const idx = arr.indexOf(someValue);
console.log('array indexOf index:', idx);
console.timeEnd('array indexOf index');

console.time('for-loop index');
let index;
for(let i = 0; i < len; i ++) {
    if(someValue === i) {
        index = i;
        break;
    }
}
console.log('for-loop index: ', index);
console.timeEnd('for-loop index');