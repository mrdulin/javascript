function flatten(arr, result) {
    var len = arr.length,
        i = 0,
        el;

    result = result || [];

    for(;i < len; i ++) {
        el = arr[i];
        if(el instanceof Array) {
            flatten(el, result);
        } else {
            result.push(el);
        }
    }

    return result;
}

var a = [1, [2, 3], [4, 5], [[6]], [[[6, 8], [10 ,11]]]];

console.log(flatten(a));