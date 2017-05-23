const globalObj = {};

class Scheme{
  _handleQueue = [];
  _resolve;
  _reject;
  _promise = new Promise((resolve, reject) => {
    this._resolve = resolve;
    this._reject = reject;
  });
  _callbacks = {};

  constructor() {
    this._registerCallback();
  }

  _registerCallback() {
    globalObj.jsOnMessage = (opt) => {
      const cbObj = this._handleQueue.shift();
      this._executeCallbacks(opt);
      if(cbObj) {
        const {cb: handle, once, name} = cbObj;
        handle && handle(opt);
        this._resolve(opt);
      } else {
        this._reject('The callback queue is empty');
      }
    }
  }

  registerCallback(name, cb) {
    this._callbacks[name] = cb;
  }

  _executeCallbacks(opt) {
    Object.keys(this._callbacks).forEach((eventName, idx) => {
      const cb = this._callbacks[eventName];
      opt._eventName = eventName;
      cb && cb(opt);
    });
  }

  pushCallbackToQueue(name, cb, once = true) {
    this._handleQueue.push({name, cb, once});
  }

  invoke(businessName, content, onMessageCallback) {

    let callback = onMessageCallback;

    if(arguments.length === 2 && typeof content === 'function') {
      callback = content;
    }

    this.pushCallbackToQueue(businessName, callback);

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


scheme.registerCallback('location$city', (opt) => {
  console.log(opt);
});

scheme.registerCallback('Ilikeher', opt => {
  console.log(opt);
})
