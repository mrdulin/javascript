const globalObj = {};

class Scheme{
  _handleQueue = [];
  _resolve;
  _reject;
  _promise = new Promise((resolve, reject) => {
    this._resolve = resolve;
    this._reject = reject;
  });

  constructor() {
    this._registerCallback();
  }

  _registerCallback() {
    globalObj.jsOnMessage = (opt) => {
      const handle = this._handleQueue.pop();
      handle && handle(opt);
      this._resolve(opt);
    }
  }

  pushCallbackToQueue(cb) {
    this._handleQueue.push(cb);
  }

  invoke(businessName, content, onMessageCallback) {

    let callback = onMessageCallback;

    if(arguments.length === 2 && typeof content === 'function') {
      callback = content;
    }

    this.pushCallbackToQueue(callback);

    // console.log('scheme invoke: ', content);

    return this._promise;
  }
}

const scheme = new Scheme();

scheme.invoke('pajk', (opt) => {
  console.log('pajk callback opt: ', opt);
});

scheme.invoke('xiaomi', {name: 'MI4'}).then(opt => {
  console.log('xiaomi callback opt: ', opt);
});


setTimeout(() => {
  globalObj.jsOnMessage({code: 1});
}, 1000);

setTimeout(() => {
  globalObj.jsOnMessage({code: 0});
}, 3000);
