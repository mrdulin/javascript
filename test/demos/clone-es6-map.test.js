var cloneMap = require('../../demos/shadow-clone-es6-Map');
var expect = require('chai').expect;

describe('clone es6 map', () => {

  it('t-0', () => {

    const simpleMap = new Map([
      [1, 'novaline'],
      [2, 'emilie'],
      [3, 'emily']
    ]);

    const simpleMapClone = cloneMap(simpleMap);

    expect(simpleMapClone).to.eql(new Map([
      [1, 'novaline'],
      [2, 'emilie'],
      [3, 'emily']
    ]));

    expect(simpleMapClone).to.not.equal(simpleMap);

  });


  it('t-1', () => {

    const complexMap = new Map([
      [1, {name: 'novaline', age: 26}],
      [2, {name: 'emilie', age: 28}],
      [3, {name: 'emily', age: 15}]
    ]);

    const complexMapClone = cloneMap(complexMap);

    expect(complexMapClone.get(1)).to.equal(complexMap.get(1));

    expect(complexMapClone).to.eql(new Map([
      [1, {name: 'novaline', age: 26}],
      [2, {name: 'emilie', age: 28}],
      [3, {name: 'emily', age: 15}]
    ]));

    complexMapClone.get(1).name = 'mrdulin';
    expect(complexMapClone.get(1).name).to.equal('mrdulin');
    expect(complexMap.get(1).name).to.equal('mrdulin');

    complexMapClone.set(1, {name: 'dj taka'});

    expect(complexMapClone.get(1)).to.eql({name: 'dj taka'});
    expect(complexMap.get(1)).to.eql({name: 'mrdulin', age: 26});


  });

});


