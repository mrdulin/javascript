const swap = require('../swap');

/**
 * 选择排序
 *
 * @author dulin
 * @param {Array} arr
 * @returns
 */
function selectSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  const arrClone = arr.concat([]);
  let min;

  for (let i = 0; i < len; i += 1) {
    min = i;

    for (let j = i + 1; j < len; j += 1) {
      if (arrClone[j] < arrClone[min]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(arrClone, i, min);
    }
  }

  return arrClone;
}

module.exports = selectSort;
