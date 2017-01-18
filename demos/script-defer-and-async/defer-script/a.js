console.log('a');

var sum = 0;
console.time('add start');
for(var i = 0; i < 1000000000; i++) {
    sum += i;
}
console.timeEnd('add end');

setTimeout(function() {
    console.log('async a');
});
