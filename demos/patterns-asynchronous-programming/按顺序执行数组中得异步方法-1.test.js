/**
 * Created by dulin on 17/1/22.
 */
const execAsyncSequence = require('./按顺序执行数组中得异步方法-1');
const { expect } = require('chai');

describe('execAsyncSequence', function() {
  /**
   * 测试suite级别设置timeout参数，对该suite下的所有it有效
   */
  this.timeout(5000);

  it('数组中的异步方法应该被按顺序执行，应该输出一个数组，其中的元素是异步函数执行后的结果', function(done) {
    var fnNames = ['a', 'b', 'c'];

    var len = fnNames.length;
    var count = 0;
    /**
     * Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
     * Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于涉及异步操作的测试用例，这个时间往往是不够的，需要用-t或--timeout参数指定超时门槛。
     * https://mochajs.org/#timeouts
     */

    /**
     * Error: done() called multiple times
     */
    const asyncGenerator = (names = []) =>
      names.map(name => {
        return cb => {
          setTimeout(() => {
            cb(name);
            count++;
            if (len === count) {
              done();
            }
          }, 3000);
        };
      });

    const asyncArrs = asyncGenerator(fnNames);

    execAsyncSequence(asyncArrs, results => {
      expect(results).to.be.a('array');
      expect(results.length).to.equal(3);
      expect(results).to.eql(['a', 'b', 'c']);
    });
  });

  it('测试应该5000毫秒后结束', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      done(); // 通知Mocha测试结束
    };
    setTimeout(f, 4000);
  });
});
