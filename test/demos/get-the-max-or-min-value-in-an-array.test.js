/**
 * Created by dulin on 17/1/22.
 */
var module = require('../../demos/get-the-max-or-min-value-in-an-array.js');
var getMaxOfArray = module.getMaxOfArray;
var getMaxOfArrayBySpread = module.getMaxOfArrayBySpread;

var expect = require('chai').expect;

describe('getMaxOfArray', function() {

    it('返回数组中的最大值', function() {
        var numArray = [2, 2, 3, 6, 7, 7, 7, 7, 8, 9];

        expect(getMaxOfArray(numArray)).to.be.equal(9);
    });
});

describe('getMaxOfArrayBySpread', function() {

    it('返回数组中的最大值', function() {
        var numArray = [2, 2, 3, 6, 7, 7, 7, 7, 8, 9];

        expect(getMaxOfArrayBySpread(numArray)).to.be.equal(9);
    })
});