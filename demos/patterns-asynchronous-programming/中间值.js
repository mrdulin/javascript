// 有 3 个异步函数在顺序上存在依赖关系
// 函数 A 返回 Promise，而调用函数 B 需要那个值，然后函数 C 需要从函数 A 和函数 B 的 Promise 中带回来的值。

const A = () => new Promise((resolve, reject) => setTimeout(resolve, 1000, 'A'));
const B = (a) => new Promise((resolve, reject) => setTimeout(resolve, 1000, `${a}, B`));
const C = (a, b) => new Promise((resolve, reject) => setTimeout(resolve, 1000, `${a}, ${b}, C`));

// 方法1: then嵌套
function asyncTask1() {
  return A()
    .then(a => {
      return B(a)
        .then(b => {
          return C(a, b);
        });
    });
}

asyncTask1().then((val) => console.log('asyncTask1: ', val));


// 不能让方法1的then扁平化，拿不到a
function asyncTask2() {
  return A()
    .then(a => B(a))
    .then(b => C(b))
}

asyncTask2().then(val => console.log('asyncTask2: ', val))

// 方法2: 在asyncTask3函数作用域中声明临时变量，用来保存a的值
function asyncTask3() {
  let a;
  return A()
    .then(v => {
      a = v;
      return B(a);
    })
    .then(b => {
      return C(a, b);
    });
}

asyncTask3().then(val => console.log('asyncTask3: ', val));

// 方法3：使用promise.all
function asyncTask4() {
  return A()
    .then(a => {
      return Promise.all([a, B(a)]);
    })
    .then(([a, b]) => {
      return C(a, b);
    });
}

asyncTask4().then(val => console.log('asyncTask4: ', val));

// 方法4： 写一个辅助函数
const converge = (...promises) => (...args) => {
  let [head, ...tail] = promises;
  if (tail.length) {
    return head(...args)
      .then((value) => converge(...tail)(...args.concat([value])));
  } else {
    return head(...args);
  }
}

function asyncTask5() {
  return A()
    .then(a => converge(B, C)(a));
}

asyncTask5().then((val) => console.log('asyncTask5: ', val));

// 方法5： async/await
async function asyncTask6() {
  const a = await A();
  const b = await B(a);
  return C(a, b);
}

asyncTask6().then(val => console.log('asyncTask6: ', val));


