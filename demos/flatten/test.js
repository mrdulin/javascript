/**
 * Created by dulin on 17/1/22.
 */
var flatten = require('./');
var expect = require('chai').expect;

describe('flatten 测试', function () {

    it('二维数组', function () {

        var arr = [[1, 2], [3, 4]];
        expect(flatten(arr), '二维数组应该被扁平化成一维数组').to.eql([1, 2, 3, 4]);
    });

    it('三维数组', function () {
        var arr = [[1, 2, 3], [3, 4, [5]]];
        expect(flatten(arr)).to.eql([1, 2, 3, 3, 4, 5]);
    });

    it('三维以上数组', function () {
        var arr = [1, [2, 3], [4, 5], [[6]], [[[6, 8], [10, 11]]]];

        expect(flatten(arr)).to.eql([1, 2, 3, 4, 5, 6, 6, 8, 10, 11]);
    });

    it('expect第二个参数提供断言失败提示信息', function() {
        var a = false;
        expect(a, 'a should be true').to.be.true;
    })

});