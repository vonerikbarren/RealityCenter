// Scenario: This is a starter grocery store in a small town. 
// --> They want me to create an application that tests for the inventory
// --> 3 main areas: [ Finances ], [inventory], and [customer sale preferences]
// --> My goal is to create 3 data objects to match these, then run tests with
// --> with Array, Math, and conditional functions and methods. 
// --> For Finances: [ Total Sales, Profit, and Projections ]
// --> For Inventory: [fruit, veggies, meat]
// --> For CSP: [Top 20 Purchases]


// Viewing Options in console:
let openingMessage = "Thank you for using this file sir...";
let openingTitle = "Basic JavaScript Array Method Practice";
let bigDivider = "##########################################";
let smallDivider = "----------------------------------------";
let sectionDivider = "-----------[ Section # ]--------------";
let miniDivider = "-----------";
let returnDivider = "\n";
let gridleft = "[-"
let gridright = "-]"
let gridDivider = "|";

// Master Data Object:

//--Store Finances
const storeFinances = {
  salesByMonth: {
    Jan: {
      Week1: 2500.30,
      Week2: 3023.98,
      Week3: 2930.67,
      Week4: 2310.87,
      Week5: 2230.23
    },
    Feb: {
      Week1: 2502.23,
      Week2: 3200.45,
      Week3: 2940.98,
      Week4: 2350.90,
      Week5: 0
    },
    Mar: {
      Week1: 2530.87,
      Week2: 3400.98,
      Week3: 2900.34,
      Week4: 2300.23,
      Week5: 2000.12
    },
    May: {
      Week1: 2522.34,
      Week2: 3200.23,
      Week3: 2950.98,
      Week4: 2340.55,
      Week5: 2980.33
    },
    Jun: {
      Week1: 2500.23,
      Week2: 3000.45,
      Week3: 2900.23,
      Week4: 2300.56,
      Week5: 200.65
    },
    Jul: {
      Week1: 1500.75,
      Week2: 3300.35,
      Week3: 2940.11,
      Week4: 2370.02,
      Week5: 2980.93
    },
    Aug: {
      Week1: 2598.34,
      Week2: 3786.97,
      Week3: 2956.23,
      Week4: 2388.24,
      Week5: 2334.64
    },
    Sep: {
      Week1: 2233.23,
      Week2: 4000.77,
      Week3: 3900.82,
      Week4: 4300.23,
      Week5: 3000.34
    },
    Oct: {
      Week1: 2890.24,
      Week2: 3340.35,
      Week3: 2888.12,
      Week4: 2309.35,
      Week5: 200.23
    },
    Nov: {
      Week1: 4534.45,
      Week2: 3455.65,
      Week3: 3998.24,
      Week4: 3334.35,
      Week5: 3897.23
    },
    Dec: {
      Week1: 4500.24,
      Week2: 3000.23,
      Week3: 2900.35,
      Week4: 4300.23,
      Week5: 3000.12
    },

  }
}

//--Store Produce
const storeProduce = {
  fruit: {
    oranges: .70,
    bananas: 1.00,
    grapes: 5.23,
    kiwi: .90,
    strawberries: 3.39,
    blueberries: 2.29,
    rasberries: 1.49,
    mango: 2.99
  },
  vegatables: {
    spinach: 1.00,
    brocoli: 3.29,
    peppers: 2.30,
    lettuce: 1.59,
    tomatoes: 2.49,
    corn: 1.20
  },
  meat: {
    chickenCooked: 4.99,
    chickenUncooked: 5.99,
    salmonBig: 21.00,
    salmonMedium: 12.89,
    salmonSmall: 4.89,
    beefGround: 3.34,
    beefSteak: 17.98,
    tunaGroup: 20.99,
    tunaCan: .99,
    chickenCan: 1.09,

  }
}


//--Store Customer Sale Preferences
const customerData = {
  customerAverage: {
    morningCustAvg: 250,
    afternoonCustAvg: 300,
    eveningCustAvg: 400,
  },
  customerGroupA: 4538.50,
  customerGroupB: 3245.69,
  customerGroupC: 5469.23,
  customerVolunteers: {
    Fabiola: {
      wallet: 40.00,
      itemTotal: 10
    },
    Lucy: {
      wallet: 50.00,
      itemTotal: 20
    },
    Marc: {
      wallet: 30.00,
      itemTotal: 30
    },
    Randee: {
      wallet: 70.00,
      itemTotal: 45,
    },
    VonErik: {
      wallet: 100.00,
      itemTotal: 50
    }

  }

}

const couponData = {
  fruitCouponCodeA: {
    code: "002S3D6G7",
    amount: -.30,
    message: "Congratulations! You entered your coupon and now have 30 cents off!"
  },
  fruitCouponCodeB: {
    code: "003S3D6G8",
    amount: -.40,
    message: "Congratulations! You entered your coupon and now have 40 cents off!"
  },
  fruitCouponCodeC: {
    code: "004S3D6G9",
    amount: -.50,
    message: "Congratulations! You entered your coupon and now have 50 cents off!"
  }


}



// --> [ initializing variables ] <--
// Dataset#1: storeFinances
// DataSet#2: storeProduce
// DataSet#3: customerData

// [ Financial Data Pulled from storeFinances ]
// ################################################################
// January's Financial Data: 
let JanWeek1 = storeFinances.salesByMonth.Jan.Week1;
let JanWeek2 = storeFinances.salesByMonth.Jan.Week2;
let JanWeek3 = storeFinances.salesByMonth.Jan.Week3;
let JanWeek4 = storeFinances.salesByMonth.Jan.Week4;
let JanWeek5 = storeFinances.salesByMonth.Jan.Week5;

let JanTotalsList = [JanWeek1, JanWeek2, JanWeek3, JanWeek4, JanWeek5];
let JanTotalsAmount = JanWeek1 + JanWeek2 + JanWeek3 + JanWeek4 + JanWeek5;

// February's Financial Data:
let FebWeek1 = storeFinances.salesByMonth.Feb.Week1;
let FebWeek2 = storeFinances.salesByMonth.Feb.Week2;
let FebWeek3 = storeFinances.salesByMonth.Feb.Week3;
let FebWeek4 = storeFinances.salesByMonth.Feb.Week4;
let FebWeek5 = storeFinances.salesByMonth.Feb.Week5;

let FebTotalsList = [FebWeek1, FebWeek2, FebWeek3, FebWeek4, FebWeek5];
let FebTotalsAmount = FebWeek1 + FebWeek2 + FebWeek3 + FebWeek4 + FebWeek5;

// March's Financial Data: 
let MarWeek1 = storeFinances.salesByMonth.Mar.Week1;
let MarWeek2 = storeFinances.salesByMonth.Mar.Week2;
let MarWeek3 = storeFinances.salesByMonth.Mar.Week3;
let MarWeek4 = storeFinances.salesByMonth.Mar.Week4;
let MarWeek5 = storeFinances.salesByMonth.Mar.Week5;

let MarTotalsList = [MarWeek1, MarWeek2, MarWeek3, MarWeek4, MarWeek5];
let MarTotalsAmount = MarWeek1 + MarWeek2 + MarWeek3 + MarWeek4 + MarWeek5;
// ################################################################

// [ produceItem information pulled from Object ]
// ################################################################
// Fruit 
let orangePrice = storeProduce.fruit.oranges;
let bananaPrice = storeProduce.fruit.bananas;
let grapesPrice = storeProduce.fruit.grapes;
let kiwiPrice = storeProduce.fruit.kiwi;
let strawberriesPrice = storeProduce.fruit.strawberries;
let blueberriesPrice = storeProduce.fruit.blueberries;
let rasberriesPrice = storeProduce.fruit.rasberries;
let mangoPrices = storeProduce.fruit.mango;

let fruitList = [orangePrice, bananaPrice, grapesPrice, kiwiPrice, strawberriesPrice, blueberriesPrice, rasberriesPrice, mangoPrices];

// -------
// Vegetables
let itemSpinach = storeProduce.vegatables[1];


let spinachPrice = storeProduce.vegatables.spinach;
let brocoliPrice = storeProduce.vegatables.brocoli;
let peppersPrice = storeProduce.vegatables.peppers;
let lettucePrice = storeProduce.vegatables.lettuce;
let tomatoePrice = storeProduce.vegatables.tomatoes;
let cornPrice = storeProduce.vegatables.corn;

let vegatablePriceList = [spinachPrice, brocoliPrice, peppersPrice, lettucePrice, tomatoePrice, cornPrice]

// -------
// Meat
let chickenUncookedPrice = storeProduce.meat.chickenUncooked;
let chickenCookedPrice = storeProduce.meat.chickenCooked;
let salmonBigPrice = storeProduce.meat.salmonBig;
let salmonMediumPrice = storeProduce.meat.salmonMedium;
let salmonSmallPrice = storeProduce.meat.salmonSmall;
let beefGroundPrice = storeProduce.meat.beefGround;
let beefSteakPrice = storeProduce.meat.beefSteak;
let tunaCanPrice = storeProduce.meat.tunaCan;
let chickenCanPrice = storeProduce.meat.chickenCan;

let meatPriceList = [chickenUncookedPrice, chickenCookedPrice, salmonBigPrice, salmonMediumPrice, salmonSmallPrice, beefGroundPrice, beefSteakPrice, tunaCanPrice, chickenCanPrice];

// ################################################################


// [ customer Data ]
// ################################################################
let customerGroupA = customerData.customerGroupA;
let customerGroupB = customerData.customerGroupB;
let customerGroupC = customerData.customerGroupC;

let cvFabiolasWallet = customerData.customerVolunteers.Fabiola.wallet;
let cvFabiolasItemTotal = customerData.customerVolunteers.Fabiola.itemTotal;

let cvLucysWallet = customerData.customerVolunteers.Lucy.wallet;
let cvLucysItemTotal = customerData.customerVolunteers.Lucy.itemTotal;

let cvMarcWallet = customerData.customerVolunteers.Marc.wallet;
let cvMarcItemTotal = customerData.customerVolunteers.Marc.itemTotal;

let cvRandeesWallet = customerData.customerVolunteers.Randee.wallet;
let cvRandeesItemTotal = customerData.customerVolunteers.Randee.itemTotal;

let cvVonEriksWallet = customerData.customerVolunteers.VonErik.wallet;
let cvVonEriksItemTotal = customerData.customerVolunteers.VonErik.itemTotal;

// [ store Data ]
// ################################################################
let taxRate = 0.62
let saleRateXmas = 0.5
// ################################################################


// [ Joined Data ] - Test 1 - Check to see if sample customers wallet > customer group data

customerWalletsTotal = cvFabiolasWallet + cvLucysWallet + cvMarcWallet + cvRandeesWallet + cvVonEriksWallet;


// [ functional logic ]

function groupDataVerdict(groupData, Total) {
  if (groupData > Total) {
    return false;
  } else if (groupData < Total) {
    return true;
  }
}

function groupDataVerdict2(groupData, Total) {
  if (groupData > Total) {
    return console.log("Group Data is larger");
  } else if (groupData < Total) {
    return console.log("Group Data is smaller");
  }
}

function sale(customerWallet, itemPrice, quantity, taxRate, coupon) {
  if (itemPrice < customerWallet) {
    return itemPrice * quantity * taxRate + coupon;
  } else if (itemPrice > customerWallet) {
    return console.log("*ERROR* - Your Purchase cannot be completed.");
  }
}

function addItem(item, quantity) {

  function addItemData(item, quantity) {


    if (item != false) {
      return item * quantity
    }
    return
  }

  function addItemMessage(item, quantity) {
    if (item != false) {
      return console.log("item added to cart")
    }
    return
  }

  // return addItemData();
  // return addItemMessage();
}







// [ coupon Data ]
// ################################################################
let couponA = couponData.fruitCouponCodeA.amount;
let couponA_Code = couponData.fruitCouponCodeA.code;
let couponA_Message = couponData.fruitCouponCodeA.message;


// ################################################################







// [ Execution Section ]
// ################################################################
// ################################################################
// ----------------------------------------------------------------
console.log(bigDivider);
console.log(smallDivider);
console.log(openingMessage);
console.log(miniDivider);
console.log(returnDivider);
// Test everything below this --------------------------------

console.log("Testing Function - addItem");
console.log(itemSpinach);

// console.log(addItem("fish", 3));

// Test everything above this --------------------------------
console.log(returnDivider);
console.log(smallDivider);
console.log(bigDivider);

// ----------------------------------------------------------------
// ################################################################
// ################################################################






