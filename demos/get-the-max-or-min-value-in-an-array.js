const getMaxOfArray = (arr) => {
    return Math.max.apply(null, arr);
};

const getMaxOfArrayBySpread = (arr) => {
    return Math.max(...arr);
};

exports.getMaxOfArray = getMaxOfArray;
exports.getMaxOfArrayBySpread = getMaxOfArrayBySpread;

