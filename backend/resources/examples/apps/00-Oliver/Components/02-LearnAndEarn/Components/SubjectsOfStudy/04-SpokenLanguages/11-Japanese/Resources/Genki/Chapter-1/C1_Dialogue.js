// [-+-Packages-+-]
const say = require('say');
const Oliver = require('inquirer');
const chalk = require('chalk');
const fs = require("fs");
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";


const DialogueHandler = () => {
  setTimeout(Opening, 0);
  setTimeout(Dialogue, 3500);
}


const Dialogue = () => {
  setTimeout(phraseOne, 0);
  setTimeout(phraseTwo, 2500);
  setTimeout(phraseThree, 4500);
  setTimeout(phraseFour, 6000);
  setTimeout(phrase5, 7000);
  setTimeout(phrase6, 9500);
  setTimeout(phrase7, 12250);
  setTimeout(phrase8, 15000);
  setTimeout(AfterDialogueQuestions, 18000);

}

const Opening = () => {
  say.speak("Sir, please listen to this conversation.", "Oliver");
}

const phraseOne = () => {
  say.speak("すみません。　いま何時ですか？", "Kyoko");
  // Excuse me. What time is it now?
}

const phraseTwo = () => {
  say.speak("12時半です。", "Otoya");
  // It is half past twelve
}

const phraseThree = () => {
  say.speak("ありがとうございます！", "Kyoko");
  // Thank you very much!
}

const phraseFour = () => {
  say.speak("いいえ！", "Otoya");
  // You're Welcome
}

const phrase5 = () => {
  say.speak("あの、　りゅうがくせえですか？", "Otoya");
  // Um... are you an international student?
}

const phrase6 = () => {
  say.speak("ええ、アリゾナ大学のがくせえです。", "Kyoko");
  // Yes, I am a student at  the University of Arizona
}

const phrase7 = () => {
  say.speak("そうですか。　千個大和なんですか？", "Otoya");
  // I see. What is your major?
}

const phrase8 = () => {
  say.speak("日本語です。　いま2年生です。", "Kyoko");
  // Japanese. I am a sophomore now. 
}

const AfterDialogueQuestions = () => {
  console.log(chalk.bgMagentaBright("\n" + divider));
  Oliver.prompt([
    {
      name: "QuestionOne",
      type: "list",
      message: "Sir, now that you have heard this Dialogue, Where did Mary go to school?",
      choices: ["University of Arizona", "University of California", "University of Colombia"]
    }

  ]).then((answer) => {
    if (answer.QuestionOne === "University of Arizona") {
      console.log("That is correct sir");
      say.speak("That is correct sir", "Oliver");
    } else if (answer.QuestionOne !== "University of Arizona") {
      console.log("That is incorrect sir");
      say.speak("That is incorrect sir", "Oliver");
    } else {
      console.log("There has been an error sir");
    }
  });

  say.speak("Sir, now that you have heard this Dialogue, Where did Mary go to school?", "Oliver", 1.2);
  console.log(chalk.bgMagentaBright("\n" + divider));
}

DialogueHandler();



