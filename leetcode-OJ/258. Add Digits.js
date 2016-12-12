/**
 * 
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var numArr = num.toString().split('');
    var result = numArr.map(function(n) {
        return parseInt(n, 10);
    }).reduce(function(prev, curr) {
        return prev + curr;
    })
    if(result.toString().length !== 1) {
        return addDigits(result);
    } else {
        return result;
    }
};

console.log(addDigits(19));