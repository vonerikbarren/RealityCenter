class ProgressLogChapter {
  constructor(
    masterDate,
    masterTimeStart,
    masterTimeFinish,
  )

  {
    this.masterDate = masterDate;
    this.masterTimeStart = timeStart;
    this.masterTimeFinish = timeFinish;
    this.LogbookChapter = [];
  }

  fx00_printLogBook = () => {
    console.log(this.Logbook)
  }

  fx01_addToLogbook = (
    entryTimeStart = Number,
    entryTimeFinish = Number,
    data = Object || String,
    notes = Object || String,
  ) => {
    const entry = {
      ts: entryTimeStart,
      tf: entryTimeFinish,
      data: data,
      notes: notes,
    }

    this.LogbookChapter.push(entry)
  }
}

module.exports = ProgressLogChapter