/**
 * Created by dulin on 17/1/23.
 */
/**
 * @desc 快速排序法
 * @param arr
 * @returns {Array}
 */
function quickSort(arr) {
    if(arr.length <= 1) return arr;
    var baseIndex = Math.floor(arr.length / 2);
    var baseValue = arr.splice(baseIndex, 1)[0];
    var left = [], right = [];
    var len = arr.length;

    for(var i = 0; i < len; i++) {
        var el = arr[i];
        if(el < baseValue) {
            left.push(el)
        } else {
            right.push(el);
        }
    }

    return quickSort(left).concat([baseValue], quickSort(right));

}

module.exports = quickSort;