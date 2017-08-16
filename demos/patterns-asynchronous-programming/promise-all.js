const asyncConsole = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(new Date().getTime());
      if (value > 2) {
        reject('something bad happened');
      }
      resolve(value);
    }, 1000);
  });
};

const values = [1, 2, 3, 4];
// 有一个promise reject，不会导致整个promise.all reject
const asyncOperators = values.map(
  (val) => asyncConsole(val)
    .catch(err => {
      console.log(err);
      //catch返回的值是undefined，最后通过promise.all得到的结果是undefined.
      //可以在catch中返回一些值，作为异步操作失败后回退的结果
      return 'fallback value';
    })
    // .then(val => val + 'aaaa')
);

Promise.all(asyncOperators).then((results) => {
  console.log('demo-1 results: ', results);
}).catch(err => console.log('demo-1 error: ', err));

//有一个promise reject，会导致整个promise.all reject
const asyncOperatorsWithoutErrorCatch = values.map(asyncConsole);
Promise.all(asyncOperatorsWithoutErrorCatch).then((results) => {
  console.log('demo-2 results: ', results);
}).catch(err => console.log('demo-2 error: ', err));
