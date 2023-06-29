// [-+-Packages-+-]
const say = require('say');
const inquirer = require('inquirer');
const fs = require("fs");
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";


const _ExecuteCommand = () => {
  console.log("\n" + divider);
  inquirer.prompt([
    {
      name: "_ExecuteCommand",
      type: "input",
      message: "Hello sir, what command would  you like to execute?"
    }

  ]).then((answer) => {
    if (answer._ExecuteCommand === "test") {

      const _TestEquationPrompt = () => {
        inquirer.prompt([
          {
            name: "num1",
            type: "input",
            message: "Sir what is your first number"
          },

          {
            name: "num2",
            type: "input",
            message: "Sir what is your first number"
          },

        ]).then((answer) => {
          var num1 = answer.num1;
          var num2 = answer.num2;
          var sum = num1 + num2;
          console.log(`Sir, your answer is ${sum}`);
          say.speak(`Sir, your answer is ${sum}`, "Oliver", 1.2);
        });
      }

      console.log("\n" + divider);
      console.log("Test Being Executed Sir: ");
      _TestEquationPrompt();
      console.log("\n" + divider);

    } else {
      console.log("")
    }
  });

  say.speak("Hello sir, what command would  you like to execute?",
    "Oliver",
    1.2);
  console.log("\n" + divider);
}

module.exports = _ExecuteCommand;