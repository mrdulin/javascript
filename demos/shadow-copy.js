require("core-js/fn/object/values");
//浅拷贝

function arrClone(arr) {
  return arr.slice();
}

function arrClone2(arr) {
  return arr.concat();
}

function arrClone3(arr) {
  return Object.values(arr);
}

function _isArray(source) {
  return Object.prototype.toString.call(source) === "[object Array]";
}

function shadowClone(source) {
  let target = {};
  if (_isArray(source)) {
    target = source.slice();
  } else {
    for (let key of Object.keys(source)) {
      target[key] = source[key];
    }
  }
  return target;
}

function shadowClone2(source) {
  let target = {};
  if (_isArray(source)) {
    target = source.slice();
  } else {
    target = Object.assign({}, source);
  }
  return target;
}

module.exports = {
  arrClone,
  arrClone2,
  arrClone3,
  shadowClone,
  shadowClone2,
};
