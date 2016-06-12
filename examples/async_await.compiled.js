"use strict";
require('babel-polyfill');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var timeout = function timeout(num) {
    var duration = arguments.length <= 1 || arguments[1] === undefined ? 5000 : arguments[1];

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(num + 10);
        }, duration);
    });
};

var asyncTimeout = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(duration) {
        var a, b;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return timeout(10, duration);

                    case 2:
                        a = _context.sent;
                        _context.next = 5;
                        return timeout(2, duration);

                    case 5:
                        b = _context.sent;
                        return _context.abrupt("return", [a, b]);

                    case 7:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function asyncTimeout(_x2) {
        return ref.apply(this, arguments);
    };
}();

var result = asyncTimeout(2000);

result.then(function (data) {
    process.stdout.write(data + "\n");
});
