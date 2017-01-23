function swap(arr, p1, p2) {
    var tmp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = tmp;
}

/**
 * @desc 冒泡排序
 * @param arr
 * @returns {Array}
 */
function bubbleSort(arr) {
    var len = arr.length;
    if(len <= 1) return arr;
    var arrClone = arr.concat([]);

    for(var i = 0; i < len; i ++) {
        var rest = len - 1 - i;

        for(var j = 0; j < rest; j++) {
            if(arrClone[j] > arrClone[j + 1]) {
                swap(arrClone, j, j + 1);
            }
        }
    }

    return arrClone;

}

//[4, 3, 2, 1]

// round 1
// i = 0, j = 0, rest = 3 -> [3, 4, 2, 1]
// i = 0, j = 1, rest = 3 -> [3, 2, 4, 1]
// i = 0, j = 2, rest = 3 -> [3, 2, 1, 4]


// round 2
// i = 1, j = 0, rest = 2 -> [2, 3, 1, 4]
// i = 1, j = 1, rest = 2 -> [2, 1, 3, 4]

// round 3
// i = 2, j = 0, rest = 1 -> [1, 2, 3, 4]

module.exports = bubbleSort;