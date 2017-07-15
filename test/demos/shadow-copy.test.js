const expect = require('chai').expect;
const sc = require('../../demos/shadow-copy-and-deep-copy/shadow-copy');

describe('shadow copy - array', () => {

  describe('Array.prototype.slice', () => {


    it('t-1', () => {
      const a = [1, 2, 3];
      const b = sc.arrClone(a);

      expect(b).to.not.equal(a);
      expect(b).to.be.eql([1, 2, 3]);

      b[0] = 100;
      a[0] = 222;

      expect(b).to.be.eql([100, 2, 3]);
      expect(a).to.be.eql([222, 2, 3]);

    });

    it('t-2, 浅拷贝数组，如果数组中有引用类型的数据，则拷贝的是该引用类型的指针，当改变拷贝的数组b中该引用类型数据时，由于a,b都对该数据有相同的引用，因此a中数据也会变化', () => {

      const a = [1, 2, 3, { name: 'novaline' }];
      const b = sc.arrClone(a);

      expect(b).to.not.equal(a);
      expect(b).to.be.eql([1, 2, 3, { name: 'novaline' }]);

      b[3].name = 'emilie';
      expect(b).to.be.eql([1, 2, 3, { name: 'emilie' }]);

      expect(a[3].name).to.not.be.equal('novaline');
      expect(a[3].name).to.be.equal('emilie');

      expect(a[3]).to.be.equal(b[3]);

    });

  });

  describe('Array.prototype.concat', () => {

    it('t-1', () => {

      const a = [1, 2, 3];
      const b = sc.arrClone2(a);

      expect(b).to.not.equal(a);
      expect(b).to.be.eql([1, 2, 3]);

      b[0] = 100;
      a[0] = 222;

      expect(b).to.be.eql([100, 2, 3]);
      expect(a).to.be.eql([222, 2, 3]);

    });

    it('t-2, 浅拷贝数组，如果数组中有引用类型的数据，则拷贝的是该引用类型的指针，当改变拷贝的数组b中该引用类型数据时，由于a,b都对该数据有相同的引用，因此a中数据也会变化', () => {

      const a = [1, 2, 3, { name: 'novaline' }];
      const b = sc.arrClone2(a);

      expect(b).to.not.equal(a);
      expect(b).to.be.eql([1, 2, 3, { name: 'novaline' }]);

      b[3].name = 'emilie';
      expect(b).to.be.eql([1, 2, 3, { name: 'emilie' }]);

      expect(a[3].name).to.not.be.equal('novaline');
      expect(a[3].name).to.be.equal('emilie');

      expect(a[3]).to.be.equal(b[3]);

    });

  });

  describe('Object.values', () => {

    it('t-1', () => {

      const a = [1, 2, 3];
      const b = sc.arrClone3(a);

      expect(b).to.not.equal(a);
      expect(b).to.be.eql([1, 2, 3]);

    });

    it('t-2， 数组中含有引用类型数据时，浅拷贝前后数组中引用类型数据的引用相同', () => {

      const a = [{ name: 'novaline' }, { name: 'angular' }];
      const b = sc.arrClone3(a);

      expect(b).to.not.equal(a);
      expect(b[0]).to.be.eql({ name: 'novaline' });
      expect(b[0]).to.be.equal(a[0]);
    });

  });

});

describe('shadow copy - array and object', () => {

  describe('shadowClone', () => {

    it('t-1, should be return a shadow copy of an array', () => {
      const a = [1, 2, 3];
      const b = sc.shadowClone(a);

      expect(b).to.not.equal(a);
      expect(b).to.be.eql([1, 2, 3]);

      b[0] = 100;
      a[0] = 222;

      expect(b).to.be.eql([100, 2, 3]);
      expect(a).to.be.eql([222, 2, 3]);
    });

    it('t-2, should be return a shadow copy of an object', () => {

      const a = { name: 'emilie', age: 26, books: ['react', 'angular', 'jquery'] };
      const b = sc.shadowClone(a);

      expect(b).to.be.eql({ name: 'emilie', age: 26, books: ['react', 'angular', 'jquery'] });
      expect(b).to.not.equal(a);

      expect(b.books).to.be.equal(a.books);

      b.books.push('rxjs');
      expect(b.books).to.be.eql(['react', 'angular', 'jquery', 'rxjs']);
      expect(a.books).to.be.eql(['react', 'angular', 'jquery', 'rxjs']);

    });

  });


  describe('shadowClone2', () => {

    it('t-1, should be return a shadow copy of an array', () => {
      const a = [1, 2, 3];
      const b = sc.shadowClone2(a);

      expect(b).to.not.equal(a);
      expect(b).to.be.eql([1, 2, 3]);

      b[0] = 100;
      a[0] = 222;

      expect(b).to.be.eql([100, 2, 3]);
      expect(a).to.be.eql([222, 2, 3]);
    });

    it('t-2, should be return a shadow copy of an object', () => {

      const a = { name: 'emilie', age: 26, books: ['react', 'angular', 'jquery'] };
      const b = sc.shadowClone2(a);

      expect(b).to.be.eql({ name: 'emilie', age: 26, books: ['react', 'angular', 'jquery'] });
      expect(b).to.not.equal(a);

      expect(b.books).to.be.equal(a.books);

      b.books.push('rxjs');
      expect(b.books).to.be.eql(['react', 'angular', 'jquery', 'rxjs']);
      expect(a.books).to.be.eql(['react', 'angular', 'jquery', 'rxjs']);

    });

  });

});




