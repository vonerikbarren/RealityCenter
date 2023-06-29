// -=-=-=-=-= [ Pokemon Basic 1 ] -=-=-=-=-=-=-=
console.log("-=-=-=-=-=-=-=-=-=-= [Pokemon Basic ]=-=-=-=-=-=-=-=-=-=");

var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: "username",
      type: "input",
      message: "What is your name?"

    }
  ]).then(function (inquirerResponse) {
    if (inquirerResponse.username) {
      console.log("\n Welcome" + " " + inquirerResponse.username);
    }
  });




