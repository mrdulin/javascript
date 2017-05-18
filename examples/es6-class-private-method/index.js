import MyFxxkClass, {_getBookName} from './MyFxxkClass';

const fxxkInstance = new MyFxxkClass();

console.log(fxxkInstance.status());

// _say方法是私有的，实例访问不到
// console.log(fxxkInstance._say('emilie'));
// console.log(fxxkInstance._isBeautifull('emilie'));

console.log(fxxkInstance.isBeautifull('emilie'));

//Symbol也不是完全能创建私有方法，如果将Sybmol赋值的变量导入，然后类似如下这种调用方式，依旧可以访问到该方法
console.log(fxxkInstance[_getBookName]());
