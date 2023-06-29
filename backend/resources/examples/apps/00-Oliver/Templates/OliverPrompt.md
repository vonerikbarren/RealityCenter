# Oliver Prompt Template

Use the following code for C&P for future prompts. Saves us a great deal of time!!


``` js

// # 
const say = require('say');
const Oliver = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

// # Assets
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";

const _FunctionNameOne = () => {
  console.log("\n" + divider);
  Oliver.prompt([
    {
      name: "",
      type: "",
      message: "",
      choices: ""
    }

  ]).then((answer) => {
    // call next function
  });

  say.speak("", "", "");
  console.log("\n" + divider);
}



```