const assert = require('chai').assert;
const dc = require('../../demos/shadow-copy-and-deep-copy/deep-copy');

describe('deep copy', () => {

  describe('deepClone', () => {

    it('t-1', () => {

      const a = [1, 2, 3, { name: 'novaline' }];
      const b = dc.deepClone(a);

      assert.deepEqual(b, [1, 2, 3, { name: 'novaline' }]);
      assert.notEqual(a, b);

      b[3].name = 'emilie';
      assert.deepEqual(b, [1, 2, 3, { name: 'emilie' }]);
      assert.deepEqual(a, [1, 2, 3, { name: 'novaline' }]);

      a[3].name = 'I like her';
      assert.deepEqual(a, [1, 2, 3, { name: 'I like her' }]);
      assert.deepEqual(b, [1, 2, 3, { name: 'emilie' }]);

      assert.notEqual(a[3], b[3]);

    });

  });

  describe('deepCopy', () => {

    it('t-1', () => {

      const a = [1, 2, 3, { name: 'novaline' }];
      const b = dc.deepCopy(a);

      assert.deepEqual(b, [1, 2, 3, { name: 'novaline' }]);
      assert.notEqual(a, b);

      b[3].name = 'emilie';
      assert.deepEqual(b, [1, 2, 3, { name: 'emilie' }]);
      assert.deepEqual(a, [1, 2, 3, { name: 'novaline' }]);

      a[3].name = 'I like her';
      assert.deepEqual(a, [1, 2, 3, { name: 'I like her' }]);
      assert.deepEqual(b, [1, 2, 3, { name: 'emilie' }]);

      assert.notEqual(a[3], b[3]);

    });

  });

})
