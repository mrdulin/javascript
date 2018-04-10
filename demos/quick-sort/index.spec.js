const quickSort = require('./');
const { expect } = require('chai');

describe('quickSort', () => {
  it('给定一个元素全是Number类型的数组，应该返回一个数组，其元素按照从小到大的顺序排列。', () => {
    const arr = [1, 5, 7, 23, 656, 23, 567, 231, 2, 23];
    const result = quickSort(arr);
    expect(result).to.be.a('array');
    expect(result).to.eql([1, 2, 5, 7, 23, 23, 23, 231, 567, 656]);
  });
});
