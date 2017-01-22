/**
 * Created by dulin on 17/1/22.
 */
var getUniqueArray = require('../../demos/find-unique-values-in-an-array');
var expect = require('chai').expect;

describe('getUniqueArray', function () {

    it('元素全部是Number类型的数组，应该返回去除数组中重复的元素后的数组', function () {

        var numArray = [2, 2, 3, 6, 7, 7, 7, 7, 8, 9];

        expect(getUniqueArray(numArray)).to.eql([2, 3, 6, 7, 8, 9]);

    });

    it('元素包含Number类型和String类型的数组, 应该返回去除数组中重复的元素后的数组', function () {

        var arr = [1, 1, '1', '1', 5, '6', '3', '5'];

        var result = getUniqueArray(arr);
        expect(result).to.eql([1, '1', 5, '6', '3', '5']);
    });

    it('元素包含null和undefined类型的数组, 应该返回去除数组中重复的元素后的数组', function() {

        var arr = [null, null, 1, undefined, undefined];

        var result = getUniqueArray(arr);
        expect(result).to.eql([null, 1, undefined]);
    });

    it('元素包含NaN、null、undefined类型的数组, 应该返回去除数组中重复的元素后的数组', function() {

        var arr = [NaN, null, NaN, null, undefined, 1, '2', undefined];

        var result = getUniqueArray(arr);
        expect(result).to.eql([NaN, null, undefined, 1, '2']);
    });
});