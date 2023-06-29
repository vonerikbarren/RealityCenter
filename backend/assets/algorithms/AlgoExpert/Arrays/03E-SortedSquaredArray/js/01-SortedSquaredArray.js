// Copyright 2022 ALgoExpert LLC. All rights reserved.
//
// Header 
const logDivider = "------------------------------"
const Title01 = "|- # Time Complexity Results:";
const algoTime = "|- Time = O(nlogn)"
const algoSpace = "|- Space = O(n)"
const TimeSpaceComplexity = Title01 + "\n" + algoTime + "\n" + algoSpace + "\n" + logDivider

// Code Below:
const sortedSquaredArray = (array) => {
  const sortedSquares = new Array(array.length).fill(0);

  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sortedSquares[idx] = value * value;
  }

  sortedSquares.sort((a, b ) => a - b);
  return sortedSquares;
}

let myArray = [1,2,3,4,5,6,7,8,9]




// Automatic Log Info
console.log(TimeSpaceComplexity)
console.log("|- Results: ");
console.log(sortedSquaredArray(myArray));

