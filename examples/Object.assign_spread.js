let a = {name: 'dulin'}

let b = Object.assign(
  {},
  a,
  {name: 'novaline'}
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
