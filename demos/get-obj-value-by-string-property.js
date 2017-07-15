/**
 * let obj = {
 *   pet: {
 *     name: 'cat'
 *   }
 * };
 *
 * let s = 'obj.pet.name';
 * let s1 = 'pet.name';
 *
 * 通过s，获取到obj.pet.name的值'cat'
 *
 * @param obj
 * @param str
 * @returns {*}
 */
function getObjValueByStringProperty(obj, str) {
  if(!isObject(obj)) return obj;

  const strArr = str.split('.');
  const objKeys = Object.keys(obj);

  const rootKey = findFirstSameElement(objKeys, strArr);

  const idx = strArr.indexOf(rootKey);

  const rootValue = obj[rootKey];

  const subStr = strArr.slice(idx).join('.');

  return getObjValueByStringProperty(rootValue, subStr);

}


/**
 * 找到两个数组第一个相同的元素
 * @param a {Array}
 * @param b {Array}
 */
function findFirstSameElement(a, b) {
  let el;
  for (const aEl of a) {
    const idx = b.indexOf(aEl);
    if (idx !== -1) {
      el = aEl;
      break;
    }
  }
  return el;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

exports.getObjValueByStringProperty = getObjValueByStringProperty;
exports.findFirstSameElement = findFirstSameElement;
