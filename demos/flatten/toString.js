//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
function parseInt10Radix(n) {
    return parseInt(n, 10);
}

function flatten(array) {
    // return array.toString().split(',').map(parseInt10Radix)
    // 或者
    return (array + '').split(',').map(parseInt10Radix);
}


module.exports = flatten;