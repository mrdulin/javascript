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

module.exports = P;
