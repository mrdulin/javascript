/**
 * Created by elsa on 2017/6/26.
 */
//每个类的实例都有自己的属性和方法
//类的属性和方法的值是在它的实例间共享的，类的属性和方法也叫静态属性和静态方法
//类的方法常常被作为工具函数使用

function MathHelper() {
  this.instanceProp = 'novaline';
}

//静态属性
MathHelper.PI = 3.1415926;

MathHelper.areaOfCircle = function(radius) {
  //可以在类方法中访问类属性或方法
  return radius * radius * this.PI;
};

MathHelper.someStaticMethod = function() {
  //不可以在类属性或方法中访问实例的属性或方法
  return this.instanceProp;
};

console.log(MathHelper.areaOfCircle(2));
console.log(MathHelper.someStaticMethod());
