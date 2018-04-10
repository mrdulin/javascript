/**
 * 数组差集
 *
 * @author dulin
 * @param {Array} a1
 * @param {Array} a2
 * @returns
 */
function diff(a1, a2) {
  return a1.concat(a2).filter((val, index, arr) => {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

/**
 * 数组差集-v2
 *
 * @author dulin
 * @param {any} a1
 * @param {any} a2
 * @returns
 */
function diff2(a1, a2) {
  return a1.filter(val => {
    return a2.indexOf(val) === -1;
  });
}

exports.diff = diff;
exports.diff2 = diff2;
