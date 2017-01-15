const P = {};
P.all = items => new Promise((resolve, reject) => {
    let count = 0, values = [];
    for(let item of items) {
        let index = count;
        Promise.resolve(item)
            .then(value => {
                count --;
                values[index] = value;
                if(count === 0) {
                    resolve(values);
                }
            }, reject);
        count ++;
    }
});

var test1 = [1, Promise.reject(new Error('Something bad happened!'))];
var test2 = [1, 2, 3, 4];

P.all(test2).then(results => {
    console.log(results);
}).catch(e => {
    console.error(e.message);
})

Promise.all(test1).then(results => {
    console.log(results);
}).catch(e => {
    console.error(e.message);
})