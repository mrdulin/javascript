// 需求：var arr = [1,2,3,4,5]，写一个函数，执行函数，第一次立即执行，往后每隔2秒执行一次，依次将数组中的元素打印出来。

const arr = [1,2,3,4,5];

const queneInvoke = (arr, wait) => {
    var arrClone = arr.concat([]);
    var el = arrClone.shift();
    if(queneInvoke.first === undefined) {
        queneInvoke.first = true;
    }

    if(queneInvoke.first) {
        console.log(el);
        queneInvoke.first = false;
        queneInvoke(arrClone, wait);
    } else {
        setTimeout(function() {
            console.log(el);
        }, wait);
    }

};

