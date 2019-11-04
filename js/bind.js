obj1 = {
  x: 1,
  print: function (num) {
    console.log(this.x);
    if (!!num) console.log(num)
  }
}

obj2 = {
  x: 5
}

obj3 = {
  x: 15
}

Function.prototype.bind = function (context) {
  // method is attached to the prototype, so just refer to it as this.
  const func = this;
  const previousArgs = [].slice.call(arguments, 1);

  return function () {
    const currentArgs = [].slice.call(arguments);
    const combinedArgs = [...previousArgs, ...currentArgs]; //[].concat(previousArgs, currentArgs);
    return func.apply(context, combinedArgs);
  };
};

const bindFunc = obj1.print.bind(obj3);
bindFunc(10);
bindFunc(20);