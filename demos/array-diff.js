function diff(a1, a2) {
  return a1.concat(a2).filter(function (val, index, arr) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

function diff2(a1, a2) {
  return a1.filter(val => {
    return a2.indexOf(val) === -1;
  })
}

//case 1
const a = [1, 2, 3, 4];
const b = [1, 2];

console.log('diff', diff(a, b));
console.log('diff2', diff2(a, b));

//case 2
// const c = [{ name: 'react' }, { name: 'angular' }, { name: 'rxjs' }]
// const d = [{ name: 'react' }];

// console.log(diff(c, d));
