/**
 * @desc 快速排序法
 * @param arr
 * @returns {Array}
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const baseIndex = Math.floor(arr.length / 2);
  const baseValue = arr.splice(baseIndex, 1)[0];
  const left = [];
  const right = [];
  const len = arr.length;

  for (let i = 0; i < len; i += 1) {
    const el = arr[i];
    if (el < baseValue) {
      left.push(el);
    } else {
      right.push(el);
    }
  }

  return quickSort(left).concat([baseValue], quickSort(right));
}

module.exports = quickSort;
