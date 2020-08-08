/**
 * Created by dulin on 17/1/22.
 */
var configSetup = require('../../demos/closure');
var expect = require('chai').expect;

describe('configSetup', function() {

    it('多次调用，只需要穿参进去，即可得到配置', function() {

        var config1 = configSetup(true);
        var config2 = configSetup(false);

        expect(config1).to.equal('closure');
        expect(config2).to.equal('mocha and chai');
    });
});
