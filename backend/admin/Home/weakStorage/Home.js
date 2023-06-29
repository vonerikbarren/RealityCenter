var inquirer = require('inquirer');

const borderLight = "-----------------------------" 
const borderHeavy = "#############################"

class Home {
  constructor(TS, TF, Topic, Conclusion) {
    this.TS = TS
    this.TF = TF
    this.Topic = Topic
    this.Conclusion = Conclusion

    this.TimeData = [
      {TimeStart: []},
      {TimeFinish: []},
      {Topic: []},
      {Conclusion: []},
    ]

    this.LogBook = [];

    Home.prototype.printInfo = () => {
      console.log(
        borderHeavy + '\n' + '\n' + 
        "TimeStarted: " + this.TS + '\n' +
        "TimeFinished: " + this.TF + '\n' +
        "TopicData: " + this.Topic + '\n' + 
        "Conclusion: " + this.Conclusion + '\n' + '\n' + 
        borderHeavy
      )
    }
  }
}

/**
 * # Import Directions
 * |- const Home = require('')
 * |- const varName = new Home()
 */


module.exports = Home