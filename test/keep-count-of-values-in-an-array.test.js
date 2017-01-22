/**
 * Created by dulin on 17/1/22.
 */
var getElementCountOfArray = require('../demos/keep-count-of-values-in-an-array');
var expect = require('chai').expect;

describe('getElementCountOfArray', function() {

    it('返回的结果中包含数组中每个元素的出现次数', function() {
        var numArray = [2, 2, 3, 6, 7, 7, 7, 7, 8, 9];

        var result = {
            2: 2,
            3: 1,
            6: 1,
            7: 4,
            8: 1,
            9: 1
        };

        expect(getElementCountOfArray(numArray)).to.eql(result);
    });
});