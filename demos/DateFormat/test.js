/**
 * Created by dulin on 17/1/22.
 */
var dateFormat = require('./');
var assert = require('chai').assert;

describe('dateFormat 测试', function () {

    it('test case 1', function () {
        var date = '2016/06/29';
        assert.equal(dateFormat(date), '29/06/2016', '2016/06/29 -> 29/06/2016');
    });

    it('test case 2', function() {
        var date = '2016/1/1';
        assert.equal(dateFormat(date), '01/01/2016', '2016/1/1 -> 01/01/2016');
    });

    it('test case 3', function() {
        var date = '17/1/1';
        assert.equal(dateFormat(date), '01/01/2017', '17/1/1 -> 01/01/2017');
    });
});