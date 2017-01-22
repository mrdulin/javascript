/**
 * Created by dulin on 17/1/22.
 */
var P = require('../../demos/Promise-all');
var expect = require('chai').expect;

describe('P', function () {

    describe('#P.all', function () {

        it('传入P.all的参数是数组，并且数组中的元素都不是promise，在返回的promise.then的callback的参数是该数组', function () {

            var arr = [1, 2, 3, 4];

            return P.all(arr).then(results => {
                expect(results).to.eql([1, 2, 3, 4]);
            });

        });


        it('传入P.all的参数是数组，但包含有reject的元素, 在返回的promise.catch中捕获异常', function() {

            var test1 = [1, Promise.reject(new Error('Something bad happened!'))];

            return Promise.all(test1).then(results => {
                console.log(results);
            }).catch(e => {
                expect(e).to.eql(new Error('Something bad happened!'));
            });
        });

    });
});