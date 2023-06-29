class Vehicle {
  constructor(topSpeed = 120, brakeTap = -60) {
    this.speed = 0;
    this.topSpeed = topSpeed;
    this.breakTap = brakeTap;
    this.leftTurn = "speed decrease" + 15;
  }

  accelerate1(increase = 15) {
    console.log("Accelerating!");
    this.speed = Math.min(this.speed + increase, this.topSpeed);
    this.logSpeed();
  }

  accelerate2(increase = 30) {
    console.log("Accelerating More!");
    this.speed = Math.min(this.speed + increase, this.topSpeed);
    this.logSpeed();
  }

  brakeFull() {
    console.log("Hitting the brakes!");
    this.speed = 0;
    this.logSpeed();
  }

  logSpeed() {
    console.log(`Current Speed: ${this.speed}`);
  }
}

// Once the class is set up, we can start to use it by creating actual variables
// from the class with the new keyword. 

// var ford = new Vehicle();

// ford.logSpeed();
// ford.accelerate1();
// ford.accelerate1(25);
// ford.accelerate2();
// ford.brakeFull();


module.exports = Vehicle;
