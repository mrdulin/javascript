/**
 * @desc 颠倒一个字符串中所有元音字母的顺序
 * Write a function that takes a string as input and reverse only the vowels of a string.
 * Example 1:
    Given s = "hello", return "holle".

    Example 2:
    Given s = "leetcode", return "leotcede".

    Note:
    The vowels does not include the letter "y".

 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowelsLowerCase = ['a', 'e', 'i', 'o', 'u'];
    var vowelsUpperCase = ['A', 'E', 'I', 'O', 'U'];
    var sArr = s.split('');
    var vArr = [], idxs = [];
    sArr.forEach(function(el, index) {
        if(vowelsLowerCase.indexOf(el) !== -1 || vowelsUpperCase.indexOf(el) !== -1) {
            vArr.push(el);
            idxs.push(index);
        }
    });
    vArr.reverse().forEach(function(el, index) {
        sArr[idxs[index]] = el;
    });
    
    return sArr.join('');
};

console.log(reverseVowels('fuckyou,HEHE')); //feckyeu,hohu