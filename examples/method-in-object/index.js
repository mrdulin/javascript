//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

const obj = {
  next(val) {
    console.log(val);
  },
  throw(e) {
    console.log(e);
  }
}

obj.next('emilie');
