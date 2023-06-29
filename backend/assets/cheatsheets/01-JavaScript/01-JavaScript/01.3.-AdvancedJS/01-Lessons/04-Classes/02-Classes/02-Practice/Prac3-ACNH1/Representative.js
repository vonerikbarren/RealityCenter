
class isleRep {
  constructor(pocket = 1, maxPocketSpaces = 40, health = 3, wallet = 0, item, bells, isleRepName) {
    this.pocketSpaces = 0;
    this.maxPocketSpaces = maxPocketSpaces;
    this.pocket = pocket;
    this.health = health;
    this.wallet = wallet;
    this.item = item;
    this.bells = bells;
    this.isleRepName = "";
  }

  // isleRepNameWrite(isleRepName) {
  //   if (isleRepName = "") {
  //     console.log()
  //   }
  // }

  isleRepNameChange(isleRepName) {
    this.isleRepName = isleRepName;
    console.log(isleRepName);
  }

  increasePocketCustomAmt(increase) {
    console.log('adding custom amount')
    this.pocketSpaces = this.pocketSpaces + increase
    this.pocketCheck();
  }

  increasePocketbyOne(increase = 1) {
    console.log("one item has been added");
    this.pocketSpaces = Math.min(this.pocketSpaces + increase, this.maxPocketSpaces);
    this.pocketCheck();
  }

  increasePocketByTwo(increase = 2) {
    console.log("two items have been added");
    this.pocketSpaces = Math.min(this.pocketSpaces + increase, this.maxPocketSpaces);
    this.pocketCheck();
  }

  decreasePocketbyOne(increase = 1) {
    console.log("one item has been added");
    this.pocketSpaces = Math.min(this.pocketSpaces - increase, this.maxPocketSpaces);
    this.pocketCheck();
  }

  decreasePocketByTwo(increase = 2) {
    console.log("two items have been added");
    this.pocketSpaces = Math.min(this.pocketSpaces - increase, this.maxPocketSpaces);
    this.pocketCheck();
  }

  pocketCheck() {

    console.log('-----------------------------');
    console.log(`Current Pocket used: ${this.pocketSpaces}`)
    console.log(`${this.isleRepName} has ${this.maxPocketSpaces - this.pocketSpaces} pockets left.`);
    console.log('-----------------------------');

    if (this.pocketSpaces >= 40) {
      console.log("Oh NO! My pockets seem to be full! Should I switch something out? ");
    } else {
      console.log("...");
    }
  }


}


var newIslandRep = new isleRep();
newIslandRep.isleRepNameChange("George");
newIslandRep.pocketCheck();
newIslandRep.increasePocketbyOne();
newIslandRep.increasePocketByTwo();
newIslandRep.increasePocketByTwo();
newIslandRep.increasePocketByTwo();

console.log('############################');

var Luke = new isleRep();
Luke.isleRepNameChange("Luke");
Luke.pocketCheck();
Luke.increasePocketByTwo();
Luke.increasePocketCustomAmt(33);
Luke.increasePocketCustomAmt(5);


