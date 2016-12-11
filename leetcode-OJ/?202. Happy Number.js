
/**
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var nArr = n.toString().split('');
    if(!isHappy.resultString) {
        isHappy.resultString = '';
        isHappy.count = 0;
    }
    var result = nArr.map(function(num) {
        return parseInt(num, 10);
    }).reduce(function(prev, curr) {
        return Math.pow(prev, 2) + Math.pow(curr, 2);
    });
    var resultString = result.toString();
    if(resultString.length !== 1) {
        if(isHappy.resultString.indexOf(resultString) !== -1) {
            isHappy.count ++;
            if(isHappy.count > 2) {
                return false;
            } else {
                isHappy.count = 0;
                isHappy.resultString += resultString;
                return isHappy(result);
            }
        } else {
            isHappy.count = 0;
            isHappy.resultString += resultString;
            return isHappy(result);
        }
    } else {
        return result === 1;
    }
};

/**
 * 输入123，无限循环，堆栈溢出，应该返回false，而不是堆栈溢出
 * 
.
.
.
40
16
37
58
89
145
314
116
40
16
37
58
89
145
314
116
.
.
.
 */
// console.log(isHappy(123));
// console.log(isHappy(99));  
console.log(isHappy(7));