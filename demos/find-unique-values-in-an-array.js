function getUniqueArray(arr) {
    return arr.filter((element, index, selfArray) => {
        return selfArray.indexOf(element) === index;
    });
}

module.exports = getUniqueArray;
