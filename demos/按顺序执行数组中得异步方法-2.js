const fnNames = ['a:2000', 'b:1000', 'c:3000'];

const asyncGenerator = (fnNameArr) => {
    return fnNameArr.map(el => {
        const name = el.split(':')[0];
        const time = Number.parseInt(el.split(':')[1], 10);
        console.log(name, time);
        return () => {
           return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(name + ' ' + Date.now())
                    resolve();
                }, time);
            });
        }
    })
}

const asyncFuncs = asyncGenerator(fnNames);
console.log(asyncFuncs);

const runAsyncSequence = (asyncFns) => {
    let p = Promise.resolve();
    asyncFns.forEach(asyncFn => {
        p = p.then(() => asyncFn());
    });
    return p;
}

runAsyncSequence(asyncFuncs);


