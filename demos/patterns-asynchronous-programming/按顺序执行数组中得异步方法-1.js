const execAsyncSequence = (asyncs, cb) => {
  let count = 0;
  const result = [];
  const { length: len } = asyncs;

  for (let async of asyncs) {
    async((value) => {
      count++;
      result.push(value);
      if (count === len) {
        cb(result);
      }
    });
  }
};

module.exports = execAsyncSequence;


