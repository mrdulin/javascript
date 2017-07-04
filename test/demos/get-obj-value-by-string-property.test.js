const {findFirstSameElement, getObjValueByStringProperty} = require('../../demos/get-obj-value-by-string-property');
const expect = require('chai').expect;

describe('getObjValueByStringProperty test suites', () => {

  describe('findFirstSameElement', () => {

    it('should be return first element between two arrays with simple data type', () => {

      const a = [1, 2, 3, 3, 4];
      const b = [3, 4, 5];

      const actual = findFirstSameElement(a, b);
      console.log('actual', actual);
      expect(actual).to.equal(3);
    });

  });

  describe('getObjValueByStringProperty test suites', () => {

    it('should be return the value of an object specify property - t1', () => {

      const obj = {
        pet: {
          name: 'cat'
        }
      };

      const s = 'obj.pet.name';

      const actual = getObjValueByStringProperty(obj, s);
      expect(actual).to.equal('cat');

    });

    it('should be return the value of an object specify property - t2', () => {

      const obj = {
        pet: {
          name: 'cat'
        }
      };

      const s = 'pet.name';
      const actual = getObjValueByStringProperty(obj, s);

      expect(actual).to.equal('cat');

    });

    it('should be return the value of an object specify property - t3', () => {

      const obj = {
        pet: {
          name: 'cat'
        }
      };

      const s = 'name';
      const actual = getObjValueByStringProperty(obj, s);

      expect(actual).to.equal(undefined);

    });


  });

});


