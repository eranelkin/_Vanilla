class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

let list = new LinkedList();

LinkedList.prototype.insertAtBeginning = function (data) {
  let node = new Node(data);

  node.next = this.head;
  this.head = node;
  return this.head;
}

LinkedList.prototype.insertAtEnd = function (data) {
  const node = new Node(data);
  let tail = this.head;

  //moves the head pointer
  while (tail.next != null) {
    tail = tail.next;
  }
  tail.next = node;

  return this.head;
}
LinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;

  while (node) {
    if (counter === index) {
      return node;
    }
    node = node.next;
    counter++;
  }
  return null;
}

list.insertAtBeginning({ id: 1, type: 'flex' });
list.insertAtEnd({ id: 2, type: 'display' });
list.insertAtBeginning({ id: 3, type: 'grid' });
console.log(list);

//https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3