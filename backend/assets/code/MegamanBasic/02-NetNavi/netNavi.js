const inquirer = require("inquirer");

function naviProgramStart(NaviData, phraseOne) {

  inquirer.prompt([
    {
      type: "list",
      name: "NaviStart",
      message: "Hello sir, I am here and available for you. How may I be of service?",
      choices: ["[NAVI-STATUS-REPORT]", "[NAVI-STATUS]", "[NOTHING]"]
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ]).then(function (answer, NaviData) {

    var NaviData = {
      Intelligence: {
        spatial: 10,
        intrapersonal: 10,
        linguistic: 10,
        bodilyKinesthetic: 10,
        interpersonal: 10,
        existential: 10,
        logical: 10,
        musical: 10,
        naturalist: 10
      },
      Physical: {
        Health: 100,
        Attack: 20,
        Speed: 20,
        Defense: 20,
        Focus: 10,
        Charge: 10
      },
      Appearance: {
        armour: {
          color: "red",
          strength: 2,
          abilities: [
            "scanner",
            "speedIncrease",
            "counter"
          ],
          weapon: "blaster"
        },
        eyes: "hazel",
        build: "small",
        helmet: true
      },
      basicPhrases: {
        greeting1: "Hello Sir",
        greeting2: "How is everything with you?",
        greeting3: "Good morning!",
        greeting4: "おはよございます！"
      }

    }

    if (answer.confirm) {
      console.log("Sir here is my status report: " + NaviData.basicPhrases.greeting4 + "...The Report sir.");
      console.log();
    }
    else console.log("Sir, I am afraid there has been an error.");
  })
}

naviProgramStart();



