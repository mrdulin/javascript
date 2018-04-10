function getElementCountOfArray(arr) {
  const countObj = {};
  arr.forEach(element => {
    if (countObj[element]) {
      let num = countObj[element];
      num += 1;
      countObj[element] = num;
    } else {
      countObj[element] = 1;
    }
  });

  return countObj;
}

module.exports = getElementCountOfArray;
