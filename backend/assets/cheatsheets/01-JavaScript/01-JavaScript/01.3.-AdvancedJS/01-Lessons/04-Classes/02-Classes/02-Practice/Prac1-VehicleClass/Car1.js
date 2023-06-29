const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  constructor(model, topSpeed) {
    super(topSpeed);
    this.model = model;
  }

  logSpeed() {
    console.log(`${this.model} is going ${this.speed}`);
  }
}

const BMW = new Car("BMW", 300);

BMW.logSpeed();
BMW.accelerate1();
BMW.accelerate2();
BMW.brakeFull();