// Copyright 2022 ALgoExpert LLC. All rights reserved.
//
// Header 
const logDivider = "------------------------------"
const Title01 = "# Time Complexity Results:";
const algoTime = "|- Time = O(n^2)"
const algoSpace = "|- Space = O(1)"
const TimeSpaceComplexity = Title01 + "\n" + algoTime + "\n" + algoSpace + "\n" + logDivider

// Code Below:
const twoNumberSum = (array, targetSum) => {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}


// Automatic Log Info
console.log(TimeSpaceComplexity)

console.log(twoNumberSum([2, 3], 13));