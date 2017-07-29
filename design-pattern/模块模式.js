var app = {};

//兼容commonjs模块定义和普通的闭包模块
(function (exports) {

  (function (exports) {
    var api = {
      sayName: function () {
        console.log('module pattern');
      }
    };

    return Object.assign(exports, api);
  }(typeof exports === 'undefined' ? window : exports));

}(app));


//如果环境支持AMD异步模块定义，则用AMD方式定义模块
if (typeof defined === 'function') {
  define([], function () {
    return api;
  });
}


app.sayName();
