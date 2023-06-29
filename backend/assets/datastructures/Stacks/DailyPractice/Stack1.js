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
    return console.log(result);

    size = () => {
      return this.count
    }
  }

  // Returns the value at the end of the stack but doesnt remove.
  peek() {
    return console.log(this.storage[this.count - 1]);
  }

  view() {
    return [
      console.log("------------------------------------------"),
      console.log("Here is the all the info in this stack: "),
      console.log(this.storage),
      console.log("------------------------------------------")
    ];

  }
}

var Test = new Stack();
var Store = new Stack();

var GoodMorning = "おはよございます, いいお天気ですね！";

const dialogueA_English = {
  dialogueA: {
    Mary_1: "Excuse me, what time is it?",
    Takeshi_1: "Its half passed 12",
    Mary_2: "Thank you!",
    Takeshi_2: "You're Welcome"
  }
}

const { dialogueA, ...rest } = dialogueA_English;

// Stack Init
Store.push(dialogueA);
Store.push(GoodMorning);

// Stack Actions
Test.push(Store.storage);
Test.push(1);
Test.push(2);
Test.push(["Hello", "こんにちは"]);
Test.push(["Build", "Me"]);


Test.view();
Test.peek();
