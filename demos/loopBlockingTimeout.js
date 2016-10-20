const start = Date.now();
setTimeout(() => {
    const end = Date.now();
    console.log('Time elapsed:', end - start, 'ms');
}, 500);
while(Date.now() - start < 1000) {};


//结果
//Time elapsed: 1000 ms