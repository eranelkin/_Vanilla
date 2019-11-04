class MyPromise {
  constructor(fn) {
    this.callback = null;
    this.value = null;
    fn(this.res.bind(this));
  }

  res(value) {
    this.value = value;
    if (!!this.callback) this.callback(this.value);
  }

  myThen(fn) {
    this.callback = fn;
    return this;
  }
}

// Creating a new custom promise of type "MyPromise"
var mp = new MyPromise(function (res) {
  setTimeout(() => {
    res('Eran');
  }, 2000);
});

// Once the async operation (setTimeout) is done the callback we send here will run with the result from the asyn operation.
mp.myThen(function (data) {
  console.log(data);
});
