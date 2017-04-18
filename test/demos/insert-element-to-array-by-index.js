var expect = require('chai').expect;
var insertElementToArrayByIndex = require('../../demos/insert-element-to-array-by-index');

describe('insertElementToArrayByIndex', () => {

  it('test-1', () => {

    const a = [0, 0, 0];
    const b = [1, 1, 1];
    const rules = [2, 3, 6];

    const result = insertElementToArrayByIndex(a, b, rules);
    expect(result).to.be.eql([0, 1, 1, 0, 0, 1]);
    expect(a).to.be.eql([0, 0, 0]);
    expect(b).to.be.eql([1, 1, 1]);
    expect(rules).to.be.eql([2, 3, 6]);

  });

  it('test-2', () => {

    const a = [1, 2, 3];
    const b = [0, 0, 0];
    const rules = [4, 5, 6];

    const result = insertElementToArrayByIndex(a, b, rules);

    expect(result).to.be.eql([1, 2, 3, 0, 0, 0]);
    expect(a).to.be.eql([1, 2, 3]);
    expect(b).to.be.eql([0, 0, 0]);
    expect(rules).to.be.eql([4, 5, 6]);

  });

  it('test-3', () => {

    const a = [];
    const b = [1, 2, 3];
    const rules = [];
    const result = insertElementToArrayByIndex(a, b, rules);

    expect(result).to.be.eql([1, 2, 3]);
    expect(a).to.be.eql([]);
    expect(b).to.be.eql([1, 2, 3]);
    expect(rules).to.be.eql([]);

  });

  it('test-4', () => {

    const a = [1, 2];
    const b = [4, 5];
    const rules = [2, 3];

    const result = insertElementToArrayByIndex(a, b, rules);
    expect(result).to.be.eql([1, 4, 5, 2]);
    expect(a).to.be.eql([1, 2]);
    expect(b).to.be.eql([4, 5]);
    expect(rules).to.be.eql([2, 3]);

  });

  it('test-5', () => {
    const a = [1];
    const b = [0, 0];
    const rules = [1, 2, 3];

    const result = insertElementToArrayByIndex(a, b, rules);
    expect(result).to.be.eql([0, 0, 1]);
    expect(a).to.be.eql([1]);
    expect(b).to.be.eql([0, 0]);
    expect(rules).to.be.eql([1, 2, 3]);

  });

});
