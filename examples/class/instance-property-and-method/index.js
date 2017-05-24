//http://babeljs.io/docs/plugins/transform-class-properties/
//http://2ality.com/2015/02/es6-classes-final.html

class Scheme{
  name = 'emilie';
  age = 26;

  sayName() {
    console.log(this.name);
  }

  sayAge = () => {
    console.log(this.age);
  };
}

const scheme = new Scheme();
console.log(scheme.name, scheme.age);
scheme.sayName();
scheme.sayAge();
console.log(Scheme.prototype.name);
console.log(Scheme.prototype.age);
console.log(Scheme.prototype.sayName);
console.log(Scheme.prototype.sayAge);

console.log('--------------------------');

class SchemeV1{
  constructor() {
    this.name = 'emilie';
    this.age = 26;
  }

  sayName() {
    console.log(this.name);
  }

  sayAge = () => {
    console.log(this.age);
  };
}

const scheme_v1 = new SchemeV1();
console.log(scheme.name, scheme.age);
scheme_v1.sayName();
scheme_v1.sayAge();
console.log(SchemeV1.prototype.name);
console.log(SchemeV1.prototype.age);
console.log(SchemeV1.prototype.sayName);
console.log(SchemeV1.prototype.sayAge);
