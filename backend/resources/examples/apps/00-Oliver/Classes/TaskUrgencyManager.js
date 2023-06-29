// [-+-Packages-+-]
const say = require('say');
const Oliver = require('inquirer');
const fs = require("fs");
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";

class IU_ProjectManager {
  constructor() {

    // The Urgent / Importance Matrix Object
    this.matrixIU = {
      Q1: {
        Matrix: ['Important', 'Urgent'],
        Section: 1,
        Action: "DO",
        StorageA: [],
        StorageB: [],
        StorageC: [],
      },

      Q2: {
        Matrix: ['Important', '!Urgent'],
        Section: 2,
        Action: "Plan",
        Storage: []
      },

      Q3: {
        Matrix: ['!Important', 'Urgent'],
        Section: 1,
        Action: "Delegate",
        Storage: []
      },

      Q4: {
        Matrix: ['!Important', '!Urgent'],
        Section: 1,
        Action: "Eliminate",
        Storage: []
      }
    }
  }

  initItem = (QNum, data) => {
    if (QNum === "Q1") {
      this.matrixIU.Q1.StorageA.push(data);
      console.log('Data Entered');

    } else if (QNum === "Q2") {
      this.matrixIU.Q2.Storage.push(data);
      console.log('Data Entered');

    } else if (QNum === "Q4") {
      this.matrixIU.Q3.Storage.push(data);
      console.log('Data Entered');

    } else if (QNum === "Q4") {
      this.matrixIU.Q4.Storage.push(data);
      console.log('Data Entered');

    }
  }

  peek = (QNum) => {
    if (QNum === "Q1") {
      console.log(this.matrixIU.Q1.Storage);
      say.speak("Your Important & Urgent List sir", "Oliver", "1.2");

    } else if (QNum === "Q2") {
      console.log(this.matrixIU.Q2.Storage);
      say.speak("Your Important but NOT Urgent List sir", "Oliver", "1.2");

    } else if (QNum === "Q4") {
      console.log(this.matrixIU.Q3.Storage);
      say.speak("Your NOT Important but Urgent List sir", "Oliver", "1.2");


    } else if (QNum === "Q4") {
      console.log(this.matrixIU.Q4.Storage);
      say.speak("Your Not Important Nor Urgent List sir", "Oliver", "1.2");

    } else if (QNum === "QAll") {
      console.log(this.matrixIU);
      say.speak("Your Whole Matrix sir", "Oliver", "1.2");
    }
  }
}


let test = new IU_ProjectManager();

test.initItem("Q1", '[item1]');
test.initItem("Q2", 'Use the Grid for 3D desktop');
test.initItem("Q1", '[item2]');

test.peek("QAll");
