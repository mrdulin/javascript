/**
 * Created by dulin on 17/1/23.
 */
var bubbleSort = require('../../demos/bubble-sort');
var expect = require('chai').expect;

describe('bubbleSort', function () {

    it('传入一个元素全部是Number类型的数组，应该返回一个数组，其元素按从小到大的顺序排列，不改变原数组', function () {

        var arr = [1, 23, 545, 334, 5, 345, 2, 12];
        var result = bubbleSort(arr);
        expect(result).to.be.a('array');
        expect(result).to.eql([1, 2, 5, 12, 23, 334, 345, 545]);

        //? 如何判断原数组是否改变？
        expect(arr).to.eql([1, 23, 545, 334, 5, 345, 2, 12]);

    });
});
