/**
 * 
 Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

思路： 遍历，声明一个空数组，如果找不到遍历出来的数字，将该数字push进声明的这个数组，如果找到了，再从这个数组中通过splice删除掉，
最终就能找到只出现了1次的那个数字。
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var arr = [];
    nums.forEach(function(num, index) {
        var idx = arr.indexOf(num);
        if(idx === -1) {
            arr.push(num);
        } else {
            arr.splice(idx, 1);
        }
    });
    
    return parseInt(arr.join(''), 10);
};