class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(data, position = this.length) {
    let node = new this.Node(data);
    if (this.head === null) {
      this.head = node;
      this.length++;
      return this.head;
    }
    let iter = 1;
    let currNode = this.head;
    while (currNode.next != null && iter < position) {
      currNode = currNode.next;
      iter++;
    }
    node.next = currNode.next;
    currNode.next = node;
    this.length++;
    return node;
  }

  remove(data, position = 0) {
    if (this.length === 0) {
      console.log("List is already empty");
      return;
    }
    this.length--;
    let currNode = this.head;
    if (position <= 0) {
      this.head = this.head.next;
    }
    else if (position >= this.length - 1) {
      while (currNode.next.next != null) {
        currNode = currNode.next;
      }
      currNode.next = null;
    }
    else {
      let iter = 0; while (iter < position) {
        currNode = currNode.next; iter++;
      }
      currNode.next = currNode.next.next;
    }
    return currNode;
  }
  display() {
    let currNode = this.head;
    while (currNode != null) {
      console.log(currNode.data + " -> ");
      currNode = currNode.next;
    }
  }
}

LinkedList.prototype.Node = class {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};






