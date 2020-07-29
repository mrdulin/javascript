/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Array}
 */
var narcissistic = function (min, max) {
  var numArr = [],
    i = min,
    sum,
    result = [];
  for (; i < max; ++i) {
    sum = 0;
    numArr = i.toString().split("");
    numArr.forEach(function (num) {
      num = parseInt(num, 10);
      sum += Math.pow(num, 3);
    });

    if (i === sum) {
      result.push(i);
    }
  }
  return result;
};

console.log(narcissistic(100, 999));
