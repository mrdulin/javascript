function insertArrayToArray(src, dest, idx, howmany) {
  const srcClone = src.slice();
  srcClone.splice.apply(srcClone, [idx, howmany].concat(dest));
  return srcClone;
}

module.exports = insertArrayToArray;
