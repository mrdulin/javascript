/**
 * Created by dulin on 2015/12/14.
 */
describe('Test underscore difference method', function() {

    it('difference method spec', function() {

        var arr = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);

        expect(arr).toEqual([1, 3, 4]);

    });
});