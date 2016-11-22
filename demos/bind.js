function list() {
    return [].slice.call(arguments);
}

var list1 = list(1,2,3);
console.log(list1);

var list2 = list.bind(null, 37);
console.log(list2());
console.log(list2(1,2,3));

var obj = {
    list: function() {
        return [].slice.call(arguments, 1);
    },

    list2: function() {
        return 'Hello world';
    }
};

//可以使用Function.prototype.bind制造偏函数。
//此方法的唯一缺点是当你使用call()或者apply()调用函数时，不能重写函数内部this指向。
//list2是list.bind(null, 37)返回的函数，list2上调用call，尽管传入了obj作为上下文，但是无法修改this的指向。
console.log(list2.call(obj, 28));


console.log(list.call(obj, 22));