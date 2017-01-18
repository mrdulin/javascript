console.log('a');

//Regular 2G网络模拟下
//a脚本在执行时，阻塞了后面脚本的下载(其他资源文件不能并行下载)以及页面的渲染
//控制台只输出了 a，并且页面上是空白
var sum = 0;
console.time('add start');
for(var i = 0; i < 1000000000; i++) {
    sum += i;
}
console.timeEnd('add end');

setTimeout(function() {
    console.log('async a');
});

//输出结果1:
//a
//async a
//b
//c

//输出结果2：
//a
//b
//c
//async a

//可见异步脚本的执行顺序是不确定的