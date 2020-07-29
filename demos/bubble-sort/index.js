const swap = require("../swap");
/**
 * @desc 冒泡排序
 * @param arr
 * @returns {Array}
 */
function bubbleSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  let arrClone = arr.concat([]);

  for (let i = 0; i < len; i += 1) {
    const rest = len - 1 - i;

    for (let j = 0; j < rest; j += 1) {
      if (arrClone[j] > arrClone[j + 1]) {
        arrClone = swap(arrClone, j, j + 1);
      }
    }
  }
  return arrClone;
}

// [4, 3, 2, 1]

// round 1
// i = 0, j = 0, rest = 3 -> [3, 4, 2, 1]
// i = 0, j = 1, rest = 3 -> [3, 2, 4, 1]
// i = 0, j = 2, rest = 3 -> [3, 2, 1, 4]

// round 2
// i = 1, j = 0, rest = 2 -> [2, 3, 1, 4]
// i = 1, j = 1, rest = 2 -> [2, 1, 3, 4]

// round 3
// i = 2, j = 0, rest = 1 -> [1, 2, 3, 4]

module.exports = bubbleSort;
