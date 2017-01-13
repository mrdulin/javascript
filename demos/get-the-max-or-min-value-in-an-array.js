/**
 * Created by elsa on 2017/1/13.
 */

//way. 1

var numArray = [2, 2, 3, 6, 7, 7, 7, 7, 8, 9];

const getMaxOfArray = (arr) => {
    return Math.max.apply(null, arr);
};

console.log('way 1: %d', getMaxOfArray(numArray));

//way. 2

console.log('way 2: %d', Math.max(...numArray));