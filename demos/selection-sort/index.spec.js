var selectSort = require('../../demos/selection-sort');
var expect = require('chai').expect;

describe('selectionSort', function() {

    it('传入一个元素全部是Number类型的数组，应该返回一个数组，其元素按从小到大的顺序排列，不改变原数组', function() {

        var arr = [1, 5, 7, 23, 656, 23, 567, 231, 2, 23];
        var result = selectSort(arr);
        expect(result).to.be.a('array');
        expect(result).to.eql([1, 2, 5, 7, 23, 23, 23, 231, 567, 656]);
    });
});
