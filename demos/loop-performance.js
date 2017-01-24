var len = 100000000;

function test(fn, message) {
    console.time(message);
    fn();
    console.timeEnd(message);
}

test(function() {
    var b;
    for(var i = len; i--;) {
        b = i;
    }
    console.log(b);
}, 'for-loop optimize');

test(function() {
    var a;
    for(var i = 0; i < len; i ++) {
        a = i;
    }
    console.log(a);
}, 'for-loop non-optimize');

test(function() {
    var j = len, c;
    while(j--) {
        c = j;
    }
    console.log(c);
}, 'while-loop optimize');


test(function() {
    var k = 0, d;
    while(k < len) {
        d = k;
        k++;
    }
    console.log(d);
}, 'while-loop non-optimize');