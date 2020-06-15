// 需求： es6 class 实现私有方法

//方法一： 使用es6模块系统，将私有方法定义在该模块中，而不是class类体中
function _say(name) {
  console.log(`Her name is ${name}`);
}

function status() {
  return 'I\'m glad to meet you!';
}

function _isBeautifull(name) {
  return name === 'emilie' && this.sex === 'female';
}

//方法二： 使用es6新增的Symbol数据类型
export const _getBookName = Symbol('_getBookName');

class MyFxxkClass{

  sex = 'female';

  constructor() {
    //私有，实例访问不到
    _say.bind(this);
    //公有，实例能访问到
    this.status = this::status;
  }

  isBeautifull(name) {
    //通过es7的函数绑定运算符绑定当前实例的this到私有方法_isBeautifull，这样，在_isBeautifull中就可以访问this
    return this::_isBeautifull(name);
  }

  [_getBookName]() {
    return 'react';
  }
}

export default MyFxxkClass;
