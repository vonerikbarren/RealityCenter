// [-+-Packages-+-]
const say = require('say');
const Oliver = require('inquirer');
const fs = require("fs");
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";

// [-=-=-=Imports-=-=-=]
const Countries = require('./Countries');


// --- [ Test ] ---

const VocabTest = () => {
  console.log("\n" + divider);
  Oliver.prompt([
    {
      name: "Question1",
      type: "input",
      message: "Sir, how do you write Britain in Japanese?",
    }

  ]).then((answer) => {
    if (answer.Question1 === Countries.Britain[0]) {
      console.log("Sir, that question is correct! Congratulations");
      say.speak("Sir, that question is correct! Congratulations!", "Oliver", 1.2);
    } else if (answer.Question1 !== Countries.Britain[0]) {
      console.log("Sir, that question is incorrect! Please Try Again");
      say.speak("Sir, that question is incorrect! Please Try Again", "Oliver", 1.2);
    }
  });

  say.speak("Sir, how do you write Britain in Japanese?", "Oliver", "1.2");
  console.log("\n" + divider);
}

VocabTest();