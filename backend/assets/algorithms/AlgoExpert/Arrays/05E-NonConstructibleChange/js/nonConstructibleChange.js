// Copyright 2022 ALgoExpert LLC. All rights reserved.
//
// Header 
const logDivider = "------------------------------"
const Title01 = "|- # Time Complexity Results:";
const algoTime = "|- Time = O(nlogn) // n = number of coins"
const algoSpace = "|- Space = O(1) // "
const TimeSpaceComplexity = Title01 + "\n" + algoTime + "\n" + algoSpace + "\n" + logDivider

// Code Below:
const nonConstructibleChange(coins) => {
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;
  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated += coin
  }

  return currentChangedCreated + 1;

}





// Automatic Log Info
console.log(TimeSpaceComplexity)
console.log("|- Algorithm results: ")

// Export
module.exports = nonConstructibleChange;