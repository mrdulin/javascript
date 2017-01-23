function swap(arr, p1, p2) {
    var tmp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = tmp;
}

function selectSort(arr) {
    var len = arr.length;
    if(len <= 1) return arr;
    var arrClone = arr.concat([]);
    var min;

    for(var i = 0; i < len; i++) {

        min = i;

        for(var j = i + 1; j < len; j++) {

            if(arrClone[j] < arrClone[min]) {
                min = j;
            }

        }

        if(i !== min) {
            swap(arrClone, i, min);
        }

    }

    return arrClone;
}


module.exports = selectSort;
