'use strict';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

var obj = {
  next: function next(val) {
    console.log(val);
  },
  throw: function _throw(e) {
    console.log(e);
  }
};

obj.next('emilie');
