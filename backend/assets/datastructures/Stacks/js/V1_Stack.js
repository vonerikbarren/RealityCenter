// Learn more from link(s) below:
// https://medium.com/better-programming/implementing-a-stack-in-javascript-73d1aa0483c1


class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }


  // Adds a value onto the end of the stack
  push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;

    size = () => {
      return this.count
    }
  }

  // Returns the value at the end of the stack but doesnt remove.
  peek() {
    return this.storage[this.count - 1];
  }
}

var myStack = new Stack();


myStack.push(1);
myStack.push(2);

console.log("class myStack - peeked the item at the top is: ");
console.log(myStack.peek());

console.log("class myStack - took off the thing we just put on: ")
console.log(myStack.pop());

console.log("class myStack - just peeked to see what is at the top of the stack: ")
console.log(myStack.peek());