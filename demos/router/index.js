const routeMap = {};
let el = null;
let current = null;

function route(path, templateId, controller) {
  routeMap[path] = { templateId, controller };
}

route('/', 'home', function HomeController() {
  this.title = 'This is home page';

  setTimeout(() => {
    this.title = 'This is fucking home page';
  }, 3000);
});

route('/about', 'about', function AboutController() {
  this.title = 'This is about page';
});

route('/contact', 'contact', function ContactController() {
  this.title = 'This is contact page';
});

function router() {
  el = el || document.getElementById('view');
  const url = location.hash.slice(1) || '/';
  const route = routeMap[url];

  if (current) {
    Object.unobserve(current.controller, current.render);
    current = null;
  }

  if (route.controller && el) {

    current = {
      controller: new route.controller,
      template: tmpl(route.templateId),
      render() {
        el.innerHTML = this.template(this.controller);
      }
    };

    current.render();
    Object.observe(current.controller, current.render.bind(current));

  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);


