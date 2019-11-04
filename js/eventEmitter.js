class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, cb) {
    if (this.events[eventName]) {
      this.events[eventName].push(cb);
    } else {
      this.events[eventName] = [cb];
    }
  }

  trigger(eventName, ...rest) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        cb.apply(this, rest);
      });
    }
  }
}

const ee = new EventEmitter();
ee.on('click', args => {
  console.log(...args);
});
ee.trigger('click', ['hello you', 'there']);
