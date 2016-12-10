/**
 * @param {number} n
 * @return {string[]}
 * Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */
var fizzBuzz = function (n) {
    var arr = [];
    
    for(var i = 1; i <= n; ++i) {
        var isMultipleOfThree = i % 3 === 0;
        var isMultipleOfFive = i % 5 === 0;
        var isMultipleOfThreeAndFive = isMultipleOfThree && isMultipleOfFive;
        
        //注意条件的顺序
        if(isMultipleOfThreeAndFive) {
            arr.push('FizzBuzz');
        } else if(isMultipleOfThree) {
            arr.push('Fizz');
        } else if(isMultipleOfFive) {
            arr.push('Buzz');
        } else {
            arr.push(i + '');
        }
        
    }
    
    return arr;
};

console.log(fizzBuzz(15))