/**
 * Created by dulin on 17/1/22.
 */
var util = {
    foo: {
        bar: {
            baz: function() {}
        }
    }
};

var scale = 10000000;

setInterval(function() {
    nocache();
    cacheFoo();
    cacheBar();
    cacheBaz();
}, 1000);

function nocache() {
    console.time('no-cache');
    var result;
    //放大执行时间
    for (var i = 0; i < scale; i++) {
        result = util.foo.bar.baz();
    }
    console.timeEnd('no-cache');
}

var foo = util.foo;
function cacheFoo() {
    console.time('cache-foo');
    var result;
    for (var i = 0; i < scale; i++) {
        result = foo.bar.baz();
    }
    console.timeEnd('cache-foo');
}

var bar = util.foo.bar;
function cacheBar() {
    console.time('cache-bar');
    var result;
    for (var i = 0; i < scale; i++) {
        result = bar.baz();
    }
    console.timeEnd('cache-bar');
}

var baz = util.foo.bar.baz;
function cacheBaz() {
    console.time('cache');
    var result;
    for (var i = 0; i < scale; i++) {
        result = baz();
    }
    console.timeEnd('cache');
}