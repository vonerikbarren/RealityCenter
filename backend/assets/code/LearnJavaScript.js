class LearnJavaScript {
  constructor() {
    this.ChA1_Admin = [];
    this.ChA2_WhereTo = [];
    this.ChA3_Output = [];
    this.ChA4_Statements = [];
    this.ChA5_Syntax = [];
    this.ChA6_Comments = [];
    this.ChA7_Variables = [];
  }

  _addData = (data, location) => {
    if (location === 'data1') {
      this.ChA1_Admin.push(data);
      console.log("data added to ChA1_Admin");
    } else if (location === 'data2') {
      this.ChA2_WhereTo.push(data);
      console.log("data added to ChA2_WhereTo");
    } else {
      console.log("test complete");
    }
  }
}

var test1 = new LearnJavaScript;

const dataSet = {
  myData1: true,
  myData2: false,
  myData3: 'string',
  myData4: 'Object',
  myData5: {
    childData1: true,
    childData2: false,
  }
}

test1._addData(dataSet, 'data1');

