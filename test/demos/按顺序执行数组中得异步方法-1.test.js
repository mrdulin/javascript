/**
 * Created by dulin on 17/1/22.
 */
var execAsyncSequence = require('../../demos/按顺序执行数组中得异步方法-1');
var expect = require('chai').expect;

describe('execAsyncSequence', function() {

    it('数组中的异步方法应该被按顺序执行', function() {
        const fnNames = ['a', 'b', 'c'];

        const asyncGenerator = (names = []) => names.map(name => {
            return cb => {
                setTimeout(() => {
                    cb(name + new Date().getTime());
                }, 2000);
            }
        });

        const asyncArrs = asyncGenerator(fnNames);

        execAsyncSequence(asyncArrs, (results) => {
            
        });

    });
});