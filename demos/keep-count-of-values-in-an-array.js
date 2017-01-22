function getElementCountOfArray(arr) {
    var countObj = {};
    arr.forEach((element) => {
        if(countObj[element]) {
            countObj[element] ++;
        } else {
            countObj[element] = 1;
        }
    });

    return countObj;
}

module.exports = getElementCountOfArray;
