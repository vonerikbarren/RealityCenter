var inquirer = require("inquirer");

// Title
// Introduction
// PromptBox
// | 1stPromptBoxQuestion
// | 2ndPromptBoxQuestion
// CongratulationSpeech
// Welcome
// WakeUpInBed

// -=-=-=-= [ Title & Overview Variables ] =-=-=-=-
var title = "-----" + "Pokemon Basic Game Started" + "-----";
var separatorA = "---------------------------------------------";
var separatorB = "----------";

function start() {
  inquirer
    .prompt({
      type: "list",
      name: "Introduction",
      message: "Welcome to the World of Pokemon, here we aim to build for you the best that we can by helping you be the greatest trainer of all. I am professor Birch. I study pokemon you see, and I have been given this great opportunity to help you! So first, what do you identify as?",
      choices: ["Male", "Female", "Transexual", "Choosing not to state"]
    })
    .then(function (answer) {
      if (answer.Introduction === "Male") {
        malePlayer();
      } else if (answer.Introduction === "Female") {
        femalePlayer();
      } else {
        defaultPlayer();
      }
    });
}


function malePlayer(firstName, LastName) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "FirstName?",
        message: "Oh okay, excuse me sir, now that we have a solid understanding of what you are, what is your name if you dont mind me asking?"
      },
      {
        type: "input",
        name: "LastName?",
        message: "Awesome! What is your last name?"
      }
    ])
    .then(function (trainerAnswer) {
      console.log(
        "Oh okay! Pleasure to meet you!"
        + trainerAnswer.firstName
        + trainerAnswer.LastName
        + "Now your Adventure will begin shortly..."
        + "..."
        + "....."
        + "......." + "[Darkness]");
    })

}

function femalePlayer(firstName, LastName) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "FirstName?",
        message: "Oh okay, excuse me ma'am, now that we have a solid understanding of what you are, what is your name if you dont mind me asking?"
      },
      {
        type: "input",
        name: "LastName?",
        message: "Awesome! What is your last name?"
      }
    ])
    .then(function (trainerAnswer) {
      console.log(
        "Oh okay! Pleasure to meet you!"
        + trainerAnswer.firstName
        + trainerAnswer.LastName
        + "Now your Adventure will begin shortly..."
        + "..."
        + "....."
        + "......." + "[Darkness]");
    })

}

function DefaultPlayer(firstName, LastName) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "FirstName?",
        message: "Oh okay ... now that we have a solid understanding of what you are, what is your name if you dont mind me asking?"
      },
      {
        type: "input",
        name: "LastName?",
        message: "Awesome! What is your last name?"
      }
    ])
    .then(function (trainerAnswer) {
      console.log(
        "Oh okay! Pleasure to meet you!"
        + trainerAnswer.firstName
        + trainerAnswer.LastName
        + "Now your Adventure will begin shortly..."
        + "..."
        + "....."
        + "......." + "[Darkness]");
    })

}

start();
console.log(separatorA);


