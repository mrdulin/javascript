function swap(arr, p1, p2) {
  const tmp = arr[p1];
  const arrClone = arr.slice();
  arrClone[p1] = arr[p2];
  arrClone[p2] = tmp;
  return arrClone;
}
module.exports = swap;
