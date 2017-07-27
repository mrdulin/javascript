const asyncConsole = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(new Date().getTime());
      resolve(value);
    }, 1000);
  });
};

/**
 * 异步并行执行
 *
 * @param {any} values
 * @param {any} asyncOperator
 * @returns
 */
function parallelAsyncSequentialSync(values, asyncOperator) {
  const operators = values.map(asyncOperator);

  return Promise.all(operators).then((newValues) => {
    newValues = newValues.map((value) => value * 100);
    return newValues;
  });
}

const values = [1, 2, 3, 4];
parallelAsyncSequentialSync(values, asyncConsole).then((newValues) => {
  console.log(newValues);
});
