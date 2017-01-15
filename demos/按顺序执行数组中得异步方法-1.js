const fnNames = ['a', 'b', 'c'];

const asyncGenerator = (names = []) => names.map(name => {
    return cb => {
        setTimeout(() => {
            cb(name + new Date().getTime());
        }, 2000);
    }
});

const asyncArrs = asyncGenerator(fnNames);

const execAsyncSequence = (asyncs, cb) => {
    let count = 0;
    const result = [];
    const {length: len} = asyncs;

    for(let async of asyncs) {
        async((value) => {
            count++;
            result.push(value);
            if(count === len) {
                cb(result);
            }
        });
    }
}

execAsyncSequence(asyncArrs, (result) => {
    console.log(result);
});
