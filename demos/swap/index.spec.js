const swap = require('./swap');
const { expect } = require('chai');

describe('swap', () => {
  let a;
  let b;
  beforeEach(() => {
    a = [1, 2, 3];
    b = [{ name: 'react' }, { name: 'angular' }, { name: 'rxjs' }];
  });
  it('应该交换数组两个元素的位置，该函数应该是纯函数，数组包含简单类型的元素', () => {
    const actualValue = swap(a, 0, 2);
    const expectValue = [3, 2, 1];
    expect(actualValue).to.eql(expectValue);
    expect(a).to.equal(a);
  });

  it('应该交换数组两个元素的位置，数组包含引用类型的元素', () => {
    const actualValue = swap(b, 0, 2);
    const expectValue = [{ name: 'rxjs' }, { name: 'angular' }, { name: 'react' }];
    expect(actualValue).to.eql(expectValue);
    expect(b).to.equal(b);
  });
});
