export default class Model {
  constructor(Xhr) {
    this.books = [];
    this.xhr = new Xhr();
  }

  search(query, fn) {
    const books = ['angular', 'react', 'rxjs'];

    // TODO:
    // this.xhr.open('get')

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.books = books;
        resolve(books);
      }, 2000);
    });
  }
}
