/**
 * Created by dulin on 17/1/22.
 */
function config(fn) {
    return function setup() {
        return fn.apply(null, arguments);
    }
}

function initConfig(bool) {

    return bool ? 'closure' : 'mocha and chai';
}

var configSetup = config(initConfig);

module.exports = configSetup;
