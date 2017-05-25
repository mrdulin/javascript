import * as moduleA from './a';
import * as moduleB from './b';

console.log('---------- module a ----------');

console.log(moduleA);
console.log(moduleA.fnA());
console.log(moduleA.fnB());
console.log(moduleA.fnC());
console.log(moduleA.default());

console.log('---------- module b ----------');

console.log(moduleB);
console.log(moduleB.fnA());
console.log(moduleB.fnB());
console.log(moduleB.fnC());
console.log(moduleB.default());
