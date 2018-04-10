function insertArrayToArray(src, dest, idx, howmany) {
  const clone = src.slice();
  clone.splice(idx, howmany, ...dest);
  return clone;
}

module.exports = insertArrayToArray;
