export default class View {
  doc = document;

  constructor(element) {
    this.element = this.doc.getElementById('app');
    this.renderForm();
  }

  bindEvent(events) {
    this.formElement = this.element.querySelector('#search-form');
    this.formElement.addEventListener('submit', events.onSubmit);
  }

  renderForm() {
    const html = `
      <section>
        <form id='search-form'>
          <input name='search' type="search" placeholder='输入书名搜索'/>
        </form>
      </section>`;
    this.element.insertAdjacentHTML('afterbegin', html);
  }

  empty(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  renderResults(opt) {
    const { datas: { books = [] }, events } = opt;
    if (this.ulElement) {
      this.empty(this.ulElement);
    } else {
      const html = `
      <section>
        <ul id='book-list'>
        </ul>
      </section>
    `;
      this.element.insertAdjacentHTML('beforeend', html);
      this.ulElement = this.element.querySelector('#book-list');
      this.ulElement.addEventListener('click', events.onItemClick);
    }

    const fragment = this.doc.createDocumentFragment();

    for (let book of books) {
      const li = document.createElement('li');
      li.textContent = book;
      fragment.appendChild(li);
    }

    this.ulElement.appendChild(fragment);
  }

}
