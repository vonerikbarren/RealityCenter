class Budget {
 constructor(month, year) {
  this.month = month
  this.year = year
  this.storage = {
   storageLog: [],
  }
 }

 fxA00_printStorage = () => {console.log(this.storage)}


}



class BudgetEntry {
 constructor(Date, TimeStart, TimeFinish) {
  this.Date = Date
  this.TimeSart = TimeStart
  this.TimeFinish = TimeFinish
  this.Entry = [
   {
    Title: [],
    Account: [],
    Parent: [],
    Child: [],

   },
  ],
 }
}