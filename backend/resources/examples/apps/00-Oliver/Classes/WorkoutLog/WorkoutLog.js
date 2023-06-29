//  # 000 - WorkoutLog
/* 
  |- This app is speciically for logging in  workout Data. How it will be 
  |- structured will be in the pseudocode below.
*/

//  # Pseudocode 
// |- 



// [-+-Packages-+-]
const say = require('say');
const Oliver = require('inquirer');
const fs = require('fs');
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";



// # A00_WorkoutPlan
class A00_WorkoutPlan {
  constructor() {

    // ## Header
    this.Head = {
      Date: [],
      WorkoutFocus: [],
      WorkoutGoal: [],

      Preworkout: [],
      Postworkout: [],
      WaterBottle: []
    };

    // ## Data
    this.Data = {

      // ### Overview Data
      WorkoutPlan_Status: [],
      WorkoutDashboard: [],

      // ### Workout Details
      Workout_Cardio: [],
      Workout_WarmUp: [],
      Workout_Main: [],
      Workout_CoolDown: [],

      // ### Post-Workout Review
      WorkoutRatings: [],
      WorkoutSummary: [],
    }
  }

  // ## Print Functions
  fx00_PrintHead = (printItem) => {
    if (printItem === 'date') {
      console.log(this.Head.Date);
    } else if (printItem === 'focus') {
      console.log(this.Head.WorkoutFocus);
    } else {
      console.log('error \n' + Error);
    }
  }

  // ## Logic Functions
  // -----

  // # fx001_addDate 
  fx001_addDate = (dateData) => {
    this.Head.Date.push(dateData);
  }

  // ### fx002_add_WorkoutFocus
  fx002_add_WorkoutFocus = (focusData) => {
    this.Head.WorkoutFocus.push(focusData);
  }
}

// # A01_Workout_Dashboard
class A01_Workout_Dashboard {
  constructor() {
    this.Head = [];
    this.Data = {}
  }

  // ## Print Functions
  // ## Logic Functions
}

class B01_Cardio {
  constructor() {
    this.Head = [];
    this.Data = {}
  }

  // ## Print Functions
  // ## Logic Functions
}

class B02_WarmUp {
  constructor() {
    this.Head = [];
    this.Data = {}
  }

  // ## Print Functions
  // ## Logic Functions
}

class B03_Main_Workout {
  constructor() {
    this.Head = [];
    this.Data = {}
  }

  // ## Print Functions
  // ## Logic Functions
}

class A05_Cool_Down {
  constructor() {
    this.Head = [];
    this.Data = {}
  }

  // ## Print Functions
  // ## Logic Functions
}


// Data #########################################
// -----
var dateData_061821 = ['06.18.21'];

// Execute Program ##############################
// -----
const test_061821 = new A00_WorkoutPlan();


// Push Data ####################################
// -----
test_061821.fx001_addDate(dateData_061821);

// Print Functions ##############################
// -----
test_061821.fx00_PrintHead('date');
