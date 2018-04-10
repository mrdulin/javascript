const getElementCountOfArray = require('./');
const { expect } = require('chai');

describe('getElementCountOfArray', () => {
  it('返回的结果中包含数组中每个元素的出现次数', () => {
    const numArray = [2, 2, 3, 6, 7, 7, 7, 7, 8, 9];

    const result = {
      2: 2,
      3: 1,
      6: 1,
      7: 4,
      8: 1,
      9: 1
    };

    expect(getElementCountOfArray(numArray)).to.eql(result);
  });
});
