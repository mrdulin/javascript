(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller(view, model) {
    _classCallCheck(this, Controller);

    this.view = view;
    this.model = model;
  }

  _createClass(Controller, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;
      this.view.bindEvent({
        onSubmit: _this.onSubmit.bind(_this)
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var val = e.target.elements.search.value.trim();
      if (!val) return;
      this.model.search(val).then(function (books) {
        _this2.showSearchResults(books);
      });
    }
  }, {
    key: "showSearchResults",
    value: function showSearchResults(books) {
      var _this = this;
      this.view.renderResults({
        datas: {
          books: books
        },
        events: {
          onItemClick: _this.onItemClick
        }
      });
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e) {
      console.log(e);
    }
  }]);

  return Controller;
}();

exports.default = Controller;

},{}],2:[function(require,module,exports){
'use strict';

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = new _model2.default(XMLHttpRequest);
var view = new _view2.default();
var controller = new _controller2.default(view, model);

controller.initialize();

},{"./controller":1,"./model":3,"./view":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(Xhr) {
    _classCallCheck(this, Model);

    this.books = [];
    this.xhr = new Xhr();
  }

  _createClass(Model, [{
    key: 'search',
    value: function search(query, fn) {
      var _this = this;

      var books = ['angular', 'react', 'rxjs'];

      // TODO:
      // this.xhr.open('get')

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          _this.books = books;
          resolve(books);
        }, 2000);
      });
    }
  }]);

  return Model;
}();

exports.default = Model;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View(element) {
    _classCallCheck(this, View);

    this.doc = document;

    this.element = this.doc.getElementById('app');
    this.renderForm();
  }

  _createClass(View, [{
    key: 'bindEvent',
    value: function bindEvent(events) {
      this.formElement = this.element.querySelector('#search-form');
      this.formElement.addEventListener('submit', events.onSubmit);
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      var html = '\n      <section>\n        <form id=\'search-form\'>\n          <input name=\'search\' type="search" placeholder=\'\u8F93\u5165\u4E66\u540D\u641C\u7D22\'/>\n        </form>\n      </section>';
      this.element.insertAdjacentHTML('afterbegin', html);
    }
  }, {
    key: 'empty',
    value: function empty(el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    }
  }, {
    key: 'renderResults',
    value: function renderResults(opt) {
      var _opt$datas$books = opt.datas.books,
          books = _opt$datas$books === undefined ? [] : _opt$datas$books,
          events = opt.events;

      if (this.ulElement) {
        this.empty(this.ulElement);
      } else {
        var html = '\n      <section>\n        <ul id=\'book-list\'>\n        </ul>\n      </section>\n    ';
        this.element.insertAdjacentHTML('beforeend', html);
        this.ulElement = this.element.querySelector('#book-list');
        this.ulElement.addEventListener('click', events.onItemClick);
      }

      var fragment = this.doc.createDocumentFragment();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = books[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var book = _step.value;

          var li = document.createElement('li');
          li.textContent = book;
          fragment.appendChild(li);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.ulElement.appendChild(fragment);
    }
  }]);

  return View;
}();

exports.default = View;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vcy9NVkMvc3JjL2NvbnRyb2xsZXIuanMiLCJkZW1vcy9NVkMvc3JjL2luZGV4LmpzIiwiZGVtb3MvTVZDL3NyYy9tb2RlbC5qcyIsImRlbW9zL01WQy9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBcUIsVTtBQUNuQixzQkFBWSxJQUFaLEVBQWtCLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxVQUFNLFFBQVEsSUFBZDtBQUNBLFdBQUssSUFBTCxDQUFVLFNBQVYsQ0FBb0I7QUFDbEIsa0JBQVUsTUFBTSxRQUFOLENBQWUsSUFBZixDQUFvQixLQUFwQjtBQURRLE9BQXBCO0FBR0Q7Ozs2QkFFUSxDLEVBQUc7QUFBQTs7QUFDVixRQUFFLGNBQUY7QUFDQSxVQUFNLE1BQU0sRUFBRSxNQUFGLENBQVMsUUFBVCxDQUFrQixNQUFsQixDQUF5QixLQUF6QixDQUErQixJQUEvQixFQUFaO0FBQ0EsVUFBSSxDQUFDLEdBQUwsRUFBVTtBQUNWLFdBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsR0FBbEIsRUFBdUIsSUFBdkIsQ0FBNEIsVUFBQyxLQUFELEVBQVc7QUFDckMsZUFBSyxpQkFBTCxDQUF1QixLQUF2QjtBQUNELE9BRkQ7QUFHRDs7O3NDQUVpQixLLEVBQU87QUFDdkIsVUFBTSxRQUFRLElBQWQ7QUFDQSxXQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCO0FBQ3RCLGVBQU87QUFDTDtBQURLLFNBRGU7QUFJdEIsZ0JBQVE7QUFDTix1QkFBYSxNQUFNO0FBRGI7QUFKYyxPQUF4QjtBQVFEOzs7Z0NBRVcsQyxFQUFHO0FBQ2IsY0FBUSxHQUFSLENBQVksQ0FBWjtBQUNEOzs7Ozs7a0JBcENrQixVOzs7OztBQ0FyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sUUFBUSxvQkFBVSxjQUFWLENBQWQ7QUFDQSxJQUFNLE9BQU8sb0JBQWI7QUFDQSxJQUFNLGFBQWEseUJBQWUsSUFBZixFQUFxQixLQUFyQixDQUFuQjs7QUFFQSxXQUFXLFVBQVg7Ozs7Ozs7Ozs7Ozs7SUNScUIsSztBQUNuQixpQkFBWSxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUssR0FBTCxHQUFXLElBQUksR0FBSixFQUFYO0FBQ0Q7Ozs7MkJBRU0sSyxFQUFPLEUsRUFBSTtBQUFBOztBQUNoQixVQUFNLFFBQVEsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixNQUFyQixDQUFkOztBQUVBO0FBQ0E7O0FBRUEsYUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3RDLG1CQUFXLFlBQU07QUFDZixnQkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGtCQUFRLEtBQVI7QUFDRCxTQUhELEVBR0csSUFISDtBQUlELE9BTE0sQ0FBUDtBQU1EOzs7Ozs7a0JBbEJrQixLOzs7Ozs7Ozs7Ozs7O0lDQUEsSTtBQUduQixnQkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsU0FGckIsR0FFcUIsR0FGZixRQUVlOztBQUNuQixTQUFLLE9BQUwsR0FBZSxLQUFLLEdBQUwsQ0FBUyxjQUFULENBQXdCLEtBQXhCLENBQWY7QUFDQSxTQUFLLFVBQUw7QUFDRDs7Ozs4QkFFUyxNLEVBQVE7QUFDaEIsV0FBSyxXQUFMLEdBQW1CLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsY0FBM0IsQ0FBbkI7QUFDQSxXQUFLLFdBQUwsQ0FBaUIsZ0JBQWpCLENBQWtDLFFBQWxDLEVBQTRDLE9BQU8sUUFBbkQ7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTSx1TUFBTjtBQU1BLFdBQUssT0FBTCxDQUFhLGtCQUFiLENBQWdDLFlBQWhDLEVBQThDLElBQTlDO0FBQ0Q7OzswQkFFSyxFLEVBQUk7QUFDUixhQUFPLEdBQUcsVUFBVixFQUFzQjtBQUNwQixXQUFHLFdBQUgsQ0FBZSxHQUFHLFVBQWxCO0FBQ0Q7QUFDRjs7O2tDQUVhLEcsRUFBSztBQUFBLDZCQUN5QixHQUR6QixDQUNULEtBRFMsQ0FDQSxLQURBO0FBQUEsVUFDQSxLQURBLG9DQUNRLEVBRFI7QUFBQSxVQUNjLE1BRGQsR0FDeUIsR0FEekIsQ0FDYyxNQURkOztBQUVqQixVQUFJLEtBQUssU0FBVCxFQUFvQjtBQUNsQixhQUFLLEtBQUwsQ0FBVyxLQUFLLFNBQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTSxnR0FBTjtBQU1BLGFBQUssT0FBTCxDQUFhLGtCQUFiLENBQWdDLFdBQWhDLEVBQTZDLElBQTdDO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsWUFBM0IsQ0FBakI7QUFDQSxhQUFLLFNBQUwsQ0FBZSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxPQUFPLFdBQWhEO0FBQ0Q7O0FBRUQsVUFBTSxXQUFXLEtBQUssR0FBTCxDQUFTLHNCQUFULEVBQWpCOztBQWhCaUI7QUFBQTtBQUFBOztBQUFBO0FBa0JqQiw2QkFBaUIsS0FBakIsOEhBQXdCO0FBQUEsY0FBZixJQUFlOztBQUN0QixjQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQSxhQUFHLFdBQUgsR0FBaUIsSUFBakI7QUFDQSxtQkFBUyxXQUFULENBQXFCLEVBQXJCO0FBQ0Q7QUF0QmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JqQixXQUFLLFNBQUwsQ0FBZSxXQUFmLENBQTJCLFFBQTNCO0FBQ0Q7Ozs7OztrQkF0RGtCLEkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHZpZXcsIG1vZGVsKSB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLnZpZXcuYmluZEV2ZW50KHtcbiAgICAgIG9uU3VibWl0OiBfdGhpcy5vblN1Ym1pdC5iaW5kKF90aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC5lbGVtZW50cy5zZWFyY2gudmFsdWUudHJpbSgpO1xuICAgIGlmICghdmFsKSByZXR1cm47XG4gICAgdGhpcy5tb2RlbC5zZWFyY2godmFsKS50aGVuKChib29rcykgPT4ge1xuICAgICAgdGhpcy5zaG93U2VhcmNoUmVzdWx0cyhib29rcyk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93U2VhcmNoUmVzdWx0cyhib29rcykge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLnZpZXcucmVuZGVyUmVzdWx0cyh7XG4gICAgICBkYXRhczoge1xuICAgICAgICBib29rc1xuICAgICAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvbkl0ZW1DbGljazogX3RoaXMub25JdGVtQ2xpY2tcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuXG59XG5cbiIsImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtb2RlbCA9IG5ldyBNb2RlbChYTUxIdHRwUmVxdWVzdCk7XG5jb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcih2aWV3LCBtb2RlbCk7XG5cbmNvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihYaHIpIHtcbiAgICB0aGlzLmJvb2tzID0gW107XG4gICAgdGhpcy54aHIgPSBuZXcgWGhyKCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnksIGZuKSB7XG4gICAgY29uc3QgYm9va3MgPSBbJ2FuZ3VsYXInLCAncmVhY3QnLCAncnhqcyddO1xuXG4gICAgLy8gVE9ETzpcbiAgICAvLyB0aGlzLnhoci5vcGVuKCdnZXQnKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmJvb2tzID0gYm9va3M7XG4gICAgICAgIHJlc29sdmUoYm9va3MpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBkb2MgPSBkb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgIHRoaXMucmVuZGVyRm9ybSgpO1xuICB9XG5cbiAgYmluZEV2ZW50KGV2ZW50cykge1xuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1mb3JtJyk7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudHMub25TdWJtaXQpO1xuICB9XG5cbiAgcmVuZGVyRm9ybSgpIHtcbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxmb3JtIGlkPSdzZWFyY2gtZm9ybSc+XG4gICAgICAgICAgPGlucHV0IG5hbWU9J3NlYXJjaCcgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPSfovpPlhaXkuablkI3mkJzntKInLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPmA7XG4gICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xuICB9XG5cbiAgZW1wdHkoZWwpIHtcbiAgICB3aGlsZSAoZWwuZmlyc3RDaGlsZCkge1xuICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUmVzdWx0cyhvcHQpIHtcbiAgICBjb25zdCB7IGRhdGFzOiB7IGJvb2tzID0gW10gfSwgZXZlbnRzIH0gPSBvcHQ7XG4gICAgaWYgKHRoaXMudWxFbGVtZW50KSB7XG4gICAgICB0aGlzLmVtcHR5KHRoaXMudWxFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8dWwgaWQ9J2Jvb2stbGlzdCc+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgYDtcbiAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgICAgdGhpcy51bEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stbGlzdCcpO1xuICAgICAgdGhpcy51bEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudHMub25JdGVtQ2xpY2spO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYWdtZW50ID0gdGhpcy5kb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgZm9yIChsZXQgYm9vayBvZiBib29rcykge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGkudGV4dENvbnRlbnQgPSBib29rO1xuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIHRoaXMudWxFbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgfVxuXG59XG4iXX0=
