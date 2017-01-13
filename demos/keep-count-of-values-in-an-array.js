/**
 * Created by elsa on 2017/1/13.
 */

const numArray = [2, 2, 3, 6, 7, 7, 7, 7, 8, 9];

const countObj = {};

numArray.forEach((element, index) => {
    if(countObj[element]) {
        countObj[element] ++;
    } else {
        countObj[element] = 1;
    }
});

console.log(countObj);
