/**
 * https://leetcode.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var r = true, index = 0;
    ransomNote.split('').forEach(function(s, idx) {
        if(r) {
            console.log(magazine.split('').splice(index, 1), s, index)
            if(magazine.split('').splice(index, 1).indexOf(s) === -1) {
                r = false;
            } else {
                index = idx;
            }
        }
        
    })
    return r;
};

// console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('fihjjjjei', "hjibagacbhadfaefdjaeaebgi"));