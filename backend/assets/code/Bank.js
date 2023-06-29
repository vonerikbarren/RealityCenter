const inquirer = require("inquirer");

function transactionStart() {
  inquirer.prompt([
    {
      type: "list",
      name: "intro",
      message: "You are outside the Bank, what are you going to do next?",
      choices: ["[ENTER]", "[USE ATM]", "[LEAVE]"]
    }
  ]).then(function (answer) {
    if (answer.intro === "[ENTER]") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You have now enter the bank");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      enterBankConfirm();

    } else if (answer.intro === "[USE ATM]") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You are now in front of the ATM");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    } else if (answer.intro === "[LEAVE]") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You decided to leave, so you get into your car");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    } else console.log("You did nothing, trying again...") && transactionStart();
  })
}

// --> Entering the Bank Confirmation Prompt
function enterBankConfirm() {
  inquirer.prompt([
    {
      type: "confirm",
      name: "enterBank",
      message: "You have entered the bank. Is this what you wanted to do?"
    },
  ]).then(function (answer) {
    if (answer.enterBank === true) {
      enterBank();
    } else {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log(" \n Ok, it seems like you made a mistake... Going back outside the Bank \n");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      transactionStart();
    }
  })
}

// --> Inside the Bank Movement Options
function enterBank() {
  inquirer.prompt([
    {
      type: "list",
      name: "bankMovementOptions",
      message: "Now that you are in the bank where do you want to go?",
      choices: ["Go to the Teller", "Go to an investment Banker", "Go to a loan Banker", "Go to a Banker to create an account", "Go to the bathroom", "Go back outside of the Bank"]
    }
  ]).then(function (answer) {
    // Necessary Data Here...

    // if Statement...
    if (answer.bankMovementOptions === "Go to the Teller") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You are now walking to the Teller");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    } else if (answer.bankMovementOptions === "Go to an investment Banker") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You are now walking to the Investment Banker");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    } else if (answer.bankMovementOptions === "Go to a loan Banker") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You are now walking to the Loan Banker");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    } else if (answer.bankMovementOptions === "Go to a Banker to create an Account") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You are now walking to the Banker");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    } else if (answer.bankMovementOptions === "Go to the bathroom") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You are now walking to the Bathroom");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    } else if (answer.bankMovementOptions === "Go back outside of the Bank") {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("You are now walking back outside the Bank");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

      transactionStart();
    }
  })
}

transactionStart();