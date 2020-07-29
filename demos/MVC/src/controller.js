export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  initialize() {
    const _this = this;
    this.view.bindEvent({
      onSubmit: _this.onSubmit.bind(_this),
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const val = e.target.elements.search.value.trim();
    if (!val) return;
    this.model.search(val).then((books) => {
      this.showSearchResults(books);
    });
  }

  showSearchResults(books) {
    const _this = this;
    this.view.renderResults({
      datas: {
        books,
      },
      events: {
        onItemClick: _this.onItemClick,
      },
    });
  }

  onItemClick(e) {
    console.log(e);
  }
}
