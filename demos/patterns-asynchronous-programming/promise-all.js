const asyncConsole = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(new Date().getTime());
      if(value > 2) {
        reject('something bad happened');
      }
      resolve(value);
    }, 1000);
  });
};

const values = [1, 2, 3, 4];
// 有一个promise reject不会导致整个promise.all reject
const asyncOperators = values.map((val) => asyncConsole(val).catch(err => console.log(err)));

Promise.all(asyncOperators).then((results) => {
  console.log(results);
});
