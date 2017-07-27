//终端中运行../node_modules/.bin/babel-node 按顺序执行数组中得异步方法-3.js

const fnNames = ['a:2000', 'b:1000', 'c:3000'];

const asyncGenerator = (fnNameArr) => {
    return fnNameArr.map(el => {
        const name = el.split(':')[0];
        const time = Number.parseInt(el.split(':')[1], 10);
        return () => {
           return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(name + ' ' + Date.now())
                    resolve(name + ' ' + Date.now());
                }, time);
            });
        }
    })
}

const asyncFuncs = asyncGenerator(fnNames);
console.log(asyncFuncs);

const runAsyncSequence = async (asyncFns) => {
    const [a, b, c] = asyncFns;
    var ap = await a();
    var bp = await b();
    var cp = await c();
    return [ap, bp, cp];
}

runAsyncSequence(asyncFuncs).then((promises) => {
    console.log(promises);
})
