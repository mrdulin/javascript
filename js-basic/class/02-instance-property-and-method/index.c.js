'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//http://babeljs.io/docs/plugins/transform-class-properties/

var Scheme = function () {
  function Scheme() {
    var _this = this;

    _classCallCheck(this, Scheme);

    this.name = 'emilie';
    this.age = 26;

    this.sayAge = function () {
      console.log(_this.age);
    };
  }

  _createClass(Scheme, [{
    key: 'sayName',
    value: function sayName() {
      console.log(this.name);
    }
  }]);

  return Scheme;
}();

var scheme = new Scheme();
console.log(scheme.name, scheme.age);
scheme.sayName();
scheme.sayAge();
console.log(scheme.prototype.sayName);
console.log(scheme.prototype.sayAge);

console.log('--------------------------');

var SchemeV1 = function () {
  function SchemeV1() {
    var _this2 = this;

    _classCallCheck(this, SchemeV1);

    this.sayAge = function () {
      console.log(_this2.age);
    };

    this.name = 'emilie';
    this.age = 26;
  }

  _createClass(SchemeV1, [{
    key: 'sayName',
    value: function sayName() {
      console.log(this.name);
    }
  }]);

  return SchemeV1;
}();

var scheme_v1 = new SchemeV1();
console.log(scheme.name, scheme.age);
scheme_v1.sayName();
scheme_v1.sayAge();
console.log(scheme_v1.prototype.sayName);
console.log(scheme_v1.prototype.sayAge);
