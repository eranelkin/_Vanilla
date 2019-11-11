var SingletonFactory = (function () {
  function SingletonClass(name, age) {
    // Doing Stuff
    /*
    this.name = name;
    this.age = age;
    this.printAge = function () {
      console.log(this.age)
    }
    */
  }
  var instance;
  return {
    getInstance: function (name, age) {
      if (instance == null) {
        instance = new SingletonClass(name, age);
        // Hide the constructor so the returned object can't be new'd...
        instance.constructor = null;
      }
      return instance;
    }
  };
})();

var test = SingletonFactory.getInstance("Eran", 48);