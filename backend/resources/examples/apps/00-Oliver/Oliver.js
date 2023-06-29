// [-+-Packages-+-]
const say = require('say');
const inquirer = require('inquirer');
const fs = require("fs");
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";

// [-=-=-=Imports-=-=-=]
const _SystemSettings = require('./Config/config');
const _ExecuteCommand = require('./Components/01-Execute/Execute');


const _StartUp = () => {
  console.log("\n" + divider);
  inquirer.prompt([
    {
      name: "_StartUp",
      type: "list",
      message: "Hello Sir, I am online and ready. Importing System Preferences from Home Interface. How can I help you sir",
      choices: ["SYSTEM SETTINGS", "EXECUTE COMMAND", "ASSIST LEARNING PROTOCOL", "HAVE CONVERSATION"]
    }

  ]).then((answer) => {
    if (answer._StartUp === "SYSTEM SETTINGS") {
      _SystemSettings();
    } else if (answer._StartUp === "EXECUTE COMMAND") {
      _ExecuteCommand();
    } else if (answer._StartUp === "ASSIST LEARNING PROTOCOL") {
      // _AssistLearnProtocol();
    } else if (answer._StartUp === "HAVE CONVERSATION") {
      // _Conversation();
    } else {
      console.log("sir there has been an error");
    }
  });

  say.speak(
    "Hello Sir, I am online and ready. Importing System Preferences from Home Interface. How can I help you sir",
    "Oliver",
    1.2);
  console.log("\n" + divider);
}








// ###### - [ Execution ] - #####
_StartUp();
