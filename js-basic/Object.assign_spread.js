let a = { name: 'dulin' }

let b = Object.assign(
  {},
  a,
  { name: 'novaline' }
)

console.log(b); //{"name":"novaline"}

let x = {
  pagination: {
    pageIndex: 1,
    pageSize: 10
  }
}

let m = Object.assign(
  {},
  x,
  {
    pagination: {
      pageIndex: 2
    }
  }
)

console.log(m)  //{"pagination":{"pageIndex":2}}

let n = {
  ...x,
  pagination: {
    ...x.pagination,
    pageIndex: 10
  }
}

console.log(n)  //{"pagination":{"pageIndex":10,"pageSize":10}}

const state = {
  books: [
    { id: 1, name: 'react' },
    { id: 2, name: 'angular' },
    { id: 3, name: 'rxjs' }
  ],
  names: ['react', 'angular', 'rxjs']
};

const newBooks = state.books.map((book) => {
  if (book.id === 1) {
    return Object.assign({}, book, { name: 'jquery' });
  } else {
    return book;
  }
});

const nextState = Object.assign({}, state, { books: newBooks });
console.log(nextState);
