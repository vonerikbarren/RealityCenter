class Person {
  constructor(exp, name, nationality, age, year, school, major, health = 3, maxExp = 300) {
    this.exp = 0;
    this.name = name;
    this.nationality = nationality;
    this.age = age;
    this.school = school;
    this.major = major;
    this.health = health;
    this.maxExp = maxExp;
  }

  studyLittle(expIncrease = 15) {
    console.log("---------------------------------");
    console.log('### [ Alert ] ###');
    console.log("Studying for a little");
    console.log("---------------------------------");
    this.exp = Math.min(this.exp + expIncrease,);
    this.logExp();
  }

  studyMore(expIncrease = 30) {
    console.log("---------------------------------");
    console.log('### [ Alert ] ###');
    console.log("Studying for an hour");
    console.log("---------------------------------");
    this.exp = Math.min(this.exp + expIncrease, this.maxExp);
    this.logExp();
  }

  studyHeavy(expIncrease = 75) {
    console.log("---------------------------------");
    console.log('### [ Alert ] ###');
    console.log("We are pulling an all Nighter");
    console.log("---------------------------------");
    this.exp = Math.min(this.exp + expIncrease, this.maxExp);
    this.logExp();
  }


  playVideoGameAllDay(expDecrease = -30) {
    console.log("---------------------------------");
    console.log('### [ Alert ] ###');
    console.log("Yeah! We are going to play smash!");
    console.log("---------------------------------");
    this.exp = Math.min(this.exp + expDecrease, this.maxExp);
    this.logExp();
  }

  nextGrade(exp, maxExp) {
    if (exp >= maxExp) {
      console.log('---------------------');
      console.log(`You have ${exp}, and you are ready for the next Grade`);
      console.log('---------------------');
    } else {
      console.log('---------------------');
      console.log(`you have ${exp}, and you are NOT ready for the next Grade`);
      console.log('---------------------');
    }
  }

  AdultElective(age) {
    if (age < 18) {
      console.log('------------------');
      console.log('STUDENT ELECTIVE: ');
      console.log('I am sorry you are still not old enough');
      console.log(`--- Your age is ${age}. `);
      console.log('------------------');
    } else {
      console.log('------------------');
      console.log('STUDENT ELECTIVE: ');
      console.log('You may Enter');
      console.log(`--- Your age is ${age}. `);
      console.log('------------------');
    }
  }

  logExp() {
    console.log("---------------------------------");
    console.log(`Current Exp: ${this.exp} `);
    console.log("---------------------------------");
  }

}

var student = new Person();

student.logExp();
student.studyLittle();
student.studyHeavy();
student.studyHeavy();
student.studyHeavy();
student.studyHeavy();
student.playVideoGameAllDay();
student.AdultElective(16);
student.AdultElective(21);
student.logExp();
