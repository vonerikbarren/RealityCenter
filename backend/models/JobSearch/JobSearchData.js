class JobSearchData {
  constructor() {
    this.JobTitle = [];
    this.JobSalary = [];
    this.Apply = Boolean;
    this.RespondDate = [];
    this.Interview = Boolean;
    this.InterviewDate = [];
    this.JobVerdict = Boolean;
  }

  // Add Data Logic A
  _A1_addJobTitle = (data) => {
    this.JobTitle.push(data);
  }

  _A2_addJobSalary = (data) => {
    this.JobSalary.push(data);
  }

  _A3_addRespondDate = (data) => {
    this.RespondDate.push(data);
  }

  _A4_addInterviewDate = (data) => {
    this.InterviewDate.push(data);
  }

  // Init Boolean Logic 
  _B1_initApply = (data) => {
    if (data = true) {
      this.Apply = true;
    } else {
      this.Apply = false;
    }
  }

  _B2_initInterview = (data) => {
    if (data = true) {
      this.Interview = true;
    } else {
      this.Interview = false;
    }
  }

  _B3_initJobVerdict = (data) => {
    if (data = true) {
      this.JobVerdict = true;
    } else {
      this.JobVerdict = false;
    }
  }

  // Print Logic
  _C1_printAllData = (data) => {
    console.log(this.JobTitle);
    console.log(this.JobSalary);
    console.log(this.RespondDate);
    console.log(this.InterviewDate);
    console.log(this.Apply);
    console.log(this.Interview);
    console.log(this.JobVerdict);
  }

}

var id_001 = new JobSearchData;

id_001._A1_addJobTitle("Enhance IT");
id_001._A2_addJobSalary("Unknown");
id_001._A3_addRespondDate("Next Day - 05-05-21");
id_001._A4_addInterviewDate("Unknown");
id_001._B1_initApply();
id_001._B2_initInterview(false);
id_001._B3_initJobVerdict(false);
id_001._C1_printAllData();


