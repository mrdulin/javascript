/**
 * Created by dulin on 17/1/22.
 */
var deepMerge = require('./deepMerge');
var expect = require('chai').expect;

describe('deepMerge 测试', function () {

  it('test case 1', function () {
    var target = {
      a: 1,
      b: 1
    };
    var source = {
      c: 1
    };
    expect(deepMerge(target, source)).to.deep.equal({ a: 1, b: 1, c: 1 });
    expect(target).to.eql(target);
    expect(source).to.eql(source);
  });

  it('test case 2', function () {
    var target = {
      a: 1,
      b: 1
    };
    var source = {
      a: 2,
      c: 1
    };

    expect(deepMerge(target, source)).to.deep.equal({ a: 2, b: 1, c: 1 });
    expect(target).to.eql(target);
    expect(source).to.eql(source);
  });

  it('test case 3', function () {
    var target = {
      a: 1,
      b: 1
    };

    var source = {
      a: { name: 'cat' },
      b: { name: 'dog' }
    };

    expect(deepMerge(target, source)).to.eql({
      a: { name: 'cat' },
      b: { name: 'dog' }
    });
  });

  it('test case 4', function () {

    var target = {
      a: {
        b: { name: 'cat' }
      }
    };

    var source = {
      a: {
        b: { name: 'dog' }
      }
    };

    expect(deepMerge(target, source)).to.eql({
      a: {
        b: { name: 'dog' }
      }
    });

  });

  it('test case 5', function () {

    var target = {
      a: {
        b: {
          c: {
            name: 'cat'
          },
          d: 1
        }
      }
    };

    var source = {
      a: {
        b: { name: 'dog' }
      }
    };

    expect(deepMerge(target, source)).to.eql({
      a: {
        b: {
          name: 'dog',
          c: {
            name: 'cat'
          },
          d: 1
        }
      }
    });
  });

});

