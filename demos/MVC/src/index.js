import Controller from './controller';
import Model from './model';
import View from './view';

const model = new Model(XMLHttpRequest);
const view = new View();
const controller = new Controller(view, model);

controller.initialize();
