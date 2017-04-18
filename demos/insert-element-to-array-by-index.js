/**
 * 需求：a = [1,1,1] b = [0,0,0], 给定一个插入规则c = [2,3,6]，将b中元素按照规则c插入到a，且插入完成后得到的数组中，
 * b元素的索引 + 1组成的数组形式上等于c，且不改变a,b,c数组的引用和数组中的元素。
 */

function clone(arr) {
  return arr.slice();
}

function insertElementToArrayByIndex(src, dest, rules) {
  //TODO 参数校验
  if (!src.length || !dest.length || !rules || !rules.length) return src.concat(dest);

  const idxArr = clone(rules).map(el => el - 1);
  const tempArray = src.concat(dest);
  const destClone = clone(dest);
  const srcClone = clone(src);

  return tempArray.reduce((acc, val, idx) => {
    const findIdx = idxArr.indexOf(idx) !== -1;

    if (findIdx) {
      if(destClone.length) {
        acc[idx] = destClone.shift();
      } else {
        acc = acc.concat(srcClone);
      }
    } else {
      if(srcClone.length) {
        acc[idx] = srcClone.shift();
      }
    }

    return acc;
  }, []);
}

module.exports = insertElementToArrayByIndex;

