const { diff, diff2 } = require('./');
const { expect } = require('chai');

describe('array-diff', () => {
  const a = [1, 2, 3, 4];
  const b = [1, 2];

  const c = [{ name: 'react' }, { name: 'angular' }, { name: 'rxjs' }];
  const d = [{ name: 'react' }];

  describe('#diff()', () => {
    it('应该返回两个数组的差集，这两个数组包含基本类型的元素', () => {
      const actualValue = diff(a, b);
      const expectValue = [3, 4];
      expect(actualValue).to.eql(expectValue);
    });

    it.skip('应该返回两个数组的差集，这两个数组包含引用类型的元素', () => {
      const actualValue = diff(c, d);
      const expectValue = [{ name: 'angular' }, { name: 'rxjs' }];
      expect(actualValue).to.eql(expectValue);
    });
  });

  describe('#diff2()', () => {
    it('应该返回两个数组的差集，这两个数组包含基本类型的元素', () => {
      const actualValue = diff2(a, b);
      const expectValue = [3, 4];
      expect(actualValue).to.eql(expectValue);
    });

    it.skip('应该返回两个数组的差集，这两个数组包含引用类型的元素', () => {
      const actualValue = diff2(c, d);
      const expectValue = [{ name: 'angular' }, { name: 'rxjs' }];
      expect(actualValue).to.eql(expectValue);
    });
  });
});
