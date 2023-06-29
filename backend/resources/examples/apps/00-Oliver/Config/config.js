// [-+-Packages-+-]
const say = require('say');
const inquirer = require('inquirer');
const fs = require("fs");
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";


const _SystemSettings = () => {
  console.log("\n" + divider);
  inquirer.prompt([
    {
      name: "_SystemSettings",
      type: "password",
      message: "Sir, You have selected System Settings. This is an Administrator Area, please enter password ",
    }

  ]).then((answer) => {
    const password0 = "0l!v3rTw!$ty!nY@ng92";
    const password1 = "password"

    if (answer._SystemSettings === password1) {
      // Administrator Authentication is correct: 
      inquirer.prompt([
        {
          name: "SystemSettingsMenu",
          type: "list",
          message: "Access Granted. What would you like to do sir?",
          choices: ["FIX VOICE", "NOTHING"]
        }

      ]).then((answer) => {
        if (answer.SystemSettingsMenu === "FIX VOICE") {
          console.log('Test Complete');
        } else if (answer.SystemSettingsMenu === "NOTHING") {
          console.log("Okay Nothing Result - Test");
        }
      })

      say.speak("Access Granted. What would you like to do sir?",
        "Oliver",
        1.2);
      console.log("\n" + divider);

    } else {
      // If Administrator Password is incorrect:
      console.log("ACCESS DENIED");
      say.speak("ACCESS DENIED!", "Oliver", 1.2);
    }
  });

  say.speak("Sir, You have selected System Settings. This is an Administrator Area, please enter password",
    "Oliver",
    "");
  console.log("\n" + divider);
}

module.exports = _SystemSettings;