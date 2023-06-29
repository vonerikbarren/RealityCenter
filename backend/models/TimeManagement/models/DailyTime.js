// #####################
// Admin Notes
// #####################

// Root
class DailyTime {
   constructor() {
      this.DailyTimeContainer = []
   }

   addTimeEntry = (TimeEntry) => {
      this.DailyTimeContainer.push(TimeEntry)
   }

   printTimeEntry = () => {
      console.log(this.DailyTimeContainer)
   }
}


// Parent A
class DailyClock {
   constructor() {
      this.Hours = 24
      this.ClockStorage = []
   }

   addDailyClockEntry = (DailyClockEntry) => {
      this.DailyTimeContainer.push(DailyClockEntry)
   }

   printDailyClockEntry = () => {
      console.log(this.DailyTimeContainer)
   }

}

// Child A.1
class DailyTime_Entry {
   constructor(Hour, Minutes, Data) {
      this.Hour = Hour
      this.Minutes = Minutes
      this.Data = Data
   }

   initDailyTimeData = (input) => {
      let input = new DailyTimeData()
   }
}

// Child A.1.3
class DailyTime_Data {
   constructor(TitleData, HeaderData, TimeCoreData) {
      this.TitleData = TitleData
      this.HeaderData = HeaderData
      this.TimeCoreData = TimeCoreData
   }
}

// Child A.1.3.1
class TitleData {
   constructor() {
      this.Title = []
   }

   fxA01_init_Title = (input = String) => {
      this.Title.push(input)
   }
}

// Child A.1.3.2
class HeaderData {
   constructor() {
      this.Header = []
   }
   
   InitHeader = (input = String) => {
      this.Header.push(input)
   }
}

// Child A.1.3.3
class TimeCoreData {
   constructor(NumberOfActions, TimeStart, TimeFinish) {
      this.NumberOfActions = 0;
      this.TimeStart = Number
      this.TimeFinish = Number
   }
}



// TestsRun

const DailyTimeTest = new DailyTime()




const DailyClockTest = new DailyClock(
   02,
   30,
   "DailyTime_Data",
)



DailyTimeTest.addTimeEntry(DailyClockTest)
DailyTimeTest.printTimeEntry()