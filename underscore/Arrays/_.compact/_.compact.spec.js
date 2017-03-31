/**
 * Created by dulin on 2015/12/14.
 */
describe('Test underscore _.compact method', function() {
    it('compact spec', function() {
        var arr = [0, 1, false, 2, '', 3];
       expect(_.compact(arr)).toEqual([1, 2, 3]);
    });
});