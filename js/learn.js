var filterObj = (obj, arrFields) => {
  var newObj = {};
  arrFields.forEach(item => {
    if (obj[item]) {
      newObj[item] = obj[item];
    }
  });
  return newObj;
}

console.log(filterObj({
  name: "Eran",
  age: 48,
  address: "star"
}, ['name', 'address']));

// function exc2() {
//   for (var i = 0; i < 5; i++) {
//     var button = document.createElement('button');
//     button.appendChild(document.createTextNode(i));
//     button.addEventListener('click', function(ev, i) {
//       console.log(ev, i);
//       console.log(this);
//     });
//     document.body.appendChild(button);
//   }
// }
// function exc3() {
//   for (var i = 0; i < 5; i++) {
//     var button = document.createElement('button');
//     button.appendChild(document.createTextNode(i));
//     button.addEventListener(
//       'click',
//       (function(i) {
//         return function() {
//           console.log(i);
//         };
//       })(i)
//     );
//     document.body.appendChild(button);
//   }
// }
// exc2();

// /*
// var Person = function(name) {
//   this._name = name;
// };
// Person.prototype.getName = function() {
//   return this._name;
// };
// var secretAgent = new Person('James');
// console.log(secretAgent.getName());
// */

// function scope() {
//   this.message = 'Hello';
//   setTimeout(function() {
//     console.log(this);
//     console.log(this.message);
//   }, 50);
// }

// scope();
// new scope();

//// Bind
// var obj1 = {
//   x: 8,
//   print: function() {
//     console.log(this.x);
//   }
// };

// var obj2 = {
//   x: 5
// };

// Function.prototype.attach = function(obj) {
//   this.print = obj1.print;
//   this.x = obj.x;

//   return () => {
//     this.print();
//   };
// };

// var attached = obj1.print.attach(obj2);

// attached(); //5

// // Call

// var obj = {
//   name: 'Eran'
// };

// var hello = function(lastName) {
//   console.log('Hello ' + this.name + ' ' + lastName);
// };

// // Code
// Function.prototype.run = function(context) {};

// // End

// hello.run({ name: 'Elad' }, 'Elkin'); // Hello Elad Elkin

// function changeName(obj) {
//   obj.name = 'Other dude';
//   return obj;
// }
// var guy1 = { name: 'Some Guy' };
// changeName(guy1);
// var guy2 = {
//   name: 'Some Guy'
// };
// guy2 = changeName(guy2);
// console.log(guy1.name);
// console.log(guy2.name);
