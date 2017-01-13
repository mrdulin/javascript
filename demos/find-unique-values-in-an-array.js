/**
 * Created by elsa on 2017/1/13.
 */
const numArray = [2, 2, 3, 6, 7, 7, 7, 7, 8, 9];

const uniqueArray = numArray.filter((element, index, selfArray) => {
    return selfArray.indexOf(element) === index;
});

console.log(uniqueArray);