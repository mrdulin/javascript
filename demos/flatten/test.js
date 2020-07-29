/**
 * Created by dulin on 17/1/22.
 */
var flatten = require("./");
var toStringFlatten = require("./toString");
var reduceFlatten = require("./reduce");
var expect = require("chai").expect;

describe("flatten 测试", function () {
  it("二维数组", function () {
    var arr = [
      [1, 2],
      [3, 4],
    ];
    var msg = "二维数组应该被扁平化成一维数组";
    var result = [1, 2, 3, 4];
    expect(flatten(arr), msg).to.eql(result);
    expect(toStringFlatten(arr), msg).to.eql(result);
    expect(reduceFlatten(arr), msg).to.eql(result);
  });

  it("三维数组", function () {
    var arr = [
      [1, 2, 3],
      [3, 4, [5]],
    ];
    var result = [1, 2, 3, 3, 4, 5];
    var cases = [flatten, toStringFlatten, reduceFlatten];

    for (var i = 0; i < cases.length; i++) {
      expect(cases[i](arr)).to.eql(result);
    }
  });

  it("三维以上数组", function () {
    var arr = [
      1,
      [2, 3],
      [4, 5],
      [[6]],
      [
        [
          [6, 8],
          [10, 11],
        ],
      ],
    ];
    var result = [1, 2, 3, 4, 5, 6, 6, 8, 10, 11];
    expect(flatten(arr)).to.eql(result);
    expect(toStringFlatten(arr)).to.eql(result);
    expect(reduceFlatten(arr)).to.eql(result);
  });

  it("expect第二个参数提供断言失败提示信息", function () {
    var a = false;
    expect(a, "a should be true").to.be.true;
  });
});
