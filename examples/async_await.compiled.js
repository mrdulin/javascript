'use strict';
require('babel-polyfill');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var timeout = function timeout(num) {
    var duration = arguments.length <= 1 || arguments[1] === undefined ? 5000 : arguments[1];

    return new Promise(function (resolve, reject) {
        if (num > 10) {
            reject('Num must be less than 10');
        } else {
            setTimeout(function () {
                resolve(num + 10);
            }, duration);
        }
    });
};

var asyncTimeout = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(duration) {
        var a, b;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return timeout(10, duration);

                    case 3:
                        a = _context.sent;
                        _context.next = 6;
                        return timeout(2, duration);

                    case 6:
                        b = _context.sent;
                        return _context.abrupt('return', [a, b]);

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context['catch'](0);
                        throw new Error(_context.t0);

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 10]]);
    }));

    return function asyncTimeout(_x2) {
        return ref.apply(this, arguments);
    };
}();

var result = asyncTimeout(1000);

result.then(function (data) {
    process.stdout.write(data + '\n');
}).catch(function (err) {
    console.log('promise catch error:', err);
});

//value map data
var feedbackTypes = {
    perfect: 'p',
    excellent: 'e',
    goodJob: 'g',
    notBad: 'n',
    keepTrying: 'k'
};

var internalUrls = {
    imgPerfect: 'ip',
    imgExcellent: 'ie',
    imgGoodJob: 'ig',
    imgNotBad: 'in',
    imgKeepTrying: 'ik'
};

// map = {};
// p --> ip
// e --> ie
// g --> ig
// n --> in
// k --> ik

// url = map[feedback];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var getValueMap = function getValueMap(feedbackTypes, internalUrls) {
    var valueMap = {};

    var feedbackTypesKeys = Object.keys(feedbackTypes);

    feedbackTypesKeys.forEach(function (feedbackTypesKey, index, self) {
        valueMap[feedbackTypes[feedbackTypesKey]] = internalUrls['img' + capitalizeFirstLetter(feedbackTypesKey)];
    });

    return valueMap;
};

var valueMap = getValueMap(feedbackTypes, internalUrls);

console.dir(JSON.stringify(valueMap), '\n');

var url = valueMap['p'] || 'defaultUrl';

console.log(url + '\n');
