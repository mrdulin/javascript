## 递归复杂度

_环境：_

`node`版本`6.6.0`

_几点注意：_

*   默认的，尾递归优化是不开启的。所以，使用`node xxx.js`，就算该递归函数是尾递归（尾调用函数调用自身），依旧会出现`RangeError: Maximum call stack size exceeded`错误。并且`call stack`中每调用第一次都会产生新的调用帧。

*   要开启尾递归优化，需要使用`node --harmony xxx.js`，并且，`xxx.js`必须开启严格模式，即在文件的开头加`"use strict";`。

*   如果使用`vscode`，需要调试，可以在`launch.json`文件中，设置如下：

```json
"runtimeArgs": [
    "--nolazy",
    "--harmony"
]
```

*   开启尾递归优化后，`call stack`中该递归函数的调用帧始终为1个，优化了不少内存。并且，以前会报`RangeError: Maximum call stack size exceeded`错误的情况，由于尾递归优化，`call stack`中不会再放入那么多得调用帧导致堆栈溢出。如果最后结果非常大，则给出`Infinity`。

