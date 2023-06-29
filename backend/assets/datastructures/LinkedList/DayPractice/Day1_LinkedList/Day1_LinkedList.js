// Create a Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create Linked List with Create,Get,Remove Nodes
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node function
  insertFirst = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node function
  insertLast = (data) => {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt = (data, index) => {

    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get the index
  getAt = (index) => {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  removeAt = (index) => {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  clearList = () => {
    this.head = null;
    this.size = 0;
  }

  printListData = () => {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Class Inits
const Base = new LinkedList();
const Parent = new LinkedList();
const rr = new LinkedList();

Base.insertFirst({ Title: "Learn Japanese" });
Base.insertFirst(Parent);

Parent.insertFirst(
  {
    Build: "Parent",
    When: ["Jan", 7, "2021", "21:10"],
  },
  {
    Build: "Parent",
    When: ["Jan", 7, "2021", "21:10"],
  }
);

Parent.insertFirst([
  {
    Build: "Parent",
    When: ["Jan", 7, "2021", "21:13"]
  },
  {
    Build: "Parent",
    When: ["Jan", 7, "2021", "21:13"]
  },
  {
    Build: "Parent",
    When: ["Jan", 7, "2021", "21:13"]
  },
  {
    Build: "Parent",
    When: ["Jan", 7, "2021", "21:13"]
  },

]



);




// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Base.printListData();
console.log("------------------");
Parent.printListData();




