const insertArrayToArray = require('../../demos/insert-array-to-array');
const { expect } = require('chai');

describe('insertArrayToArray', () => {
  it('给指定数组的指定位置插入另外一个数组', () => {
    const src = [1, 1, 1, 1];
    const dest = [0, 0, 0];

    const result = insertArrayToArray(src, dest, 1, 0);

    expect(result).to.be.eql([1, 0, 0, 0, 1, 1, 1]);
  });

  it('删除指定数组的指定位置以后的2个元素，随后插入另外一个数组', () => {
    const src = [1, 1, 1, 1];
    const dest = [0, 0, 0];

    const result = insertArrayToArray(src, dest, 1, 2);
    expect(result).to.be.eql([1, 0, 0, 0, 1]);
  });
});
