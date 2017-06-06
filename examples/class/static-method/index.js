class MyService{
  name = 'novaline';

  static getName() {
    //这里的this指向的MyService类，而不是实例
    console.log('getName this: ', this, this.name);
    //因此可以在一个static method中，通过this关键字，调用类的其他静态方法
    this.getAge();
  }

  static getAge = () => {
    console.log('getAge this: ', this);
  }


}

MyService.getName();

