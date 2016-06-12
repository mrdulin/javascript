# learn_ES7

_依赖及环境说明:_

* node版本v6.2.0

* npm版本v3.8.9

* 依赖都为本地安装，不是全局安装

_ES7特性示例:_

* `Object.observe` - Obsolete

* `async await`


_babel-cli命令解释:_

* `babel script.js` 编译`script.js`文件到标准输出`stdout`，编译后的代码输出在终端中，以`async_await.js`文件为例

```bash
../node_modules/.bin/babel async_await.js
```

* `babel script.js --out-file script-compiled.js` 输出编译后代码到指定文件，`--out-file`或者`-o`

```bash
../node_modules/.bin/babel async_await.js -o async_await.compiled.js
```

* `babel script.js --out-file --watch script-compiled.js` 使用`--watch`或者`-w`, 每当修改文件时编译


_其他:_

__执行未编译的文件，可以使用`babel-node`（不要在生产环境使用`babel-node`）__

`babel-node`会自动加载`babel-polyfill`

`examples/async_await.js`
```bash
../node_modules/.bin/babel-node async_await.js
```


__执行编译后的文件__

```bash
node async_await.compiled.js
```

报如下错误：
```bash
dulindeiMac:examples dulin$ node async_await.compiled.js
/Users/dulin/workspace/learn-es7/examples/async_await.compiled.js:16
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(duration) {
                                ^

ReferenceError: regeneratorRuntime is not defined
    at /Users/dulin/workspace/learn-es7/examples/async_await.compiled.js:16:33
    at Object.<anonymous> (/Users/dulin/workspace/learn-es7/examples/async_await.compiled.js:45:2)
    at Module._compile (module.js:541:32)
    at Object.Module._extensions..js (module.js:550:10)
    at Module.load (module.js:458:32)
    at tryModuleLoad (module.js:417:12)
    at Function.Module._load (module.js:409:3)
    at Function.Module.runMain (module.js:575:10)
    at startup (node.js:160:18)
    at node.js:449:3
dulindeiMac:examples dulin$
```

经阅读官方文档可知，编译后的 JavaScript 程序有时候需要依赖一些运行时polyfill，通过安装babel-polyfill模块来获得：

```bash
npm i babel-polyfill --save
```

需要修改编译后的文件async_await.compiled.js，在其首行加上以下代码来载入babel-polyfill:

```js
require('babel-polyfill');
```
