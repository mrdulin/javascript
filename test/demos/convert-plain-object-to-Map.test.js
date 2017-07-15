const objToMap = require('../../demos/convert-plain-object-to-Map');
const expect = require('chai').expect;

describe('objToMap test suites', () => {

  describe('Object.entries', () => {

    it('t-1', () => {

      const obj = {1: 'react', 2: 'angular', 3: 'ionic'};
      const actualValue = objToMap(obj);

      expect(actualValue).to.be.an.instanceOf(Map);
      expect(actualValue.get('1')).to.be.equal('react');

    });

  });
});
