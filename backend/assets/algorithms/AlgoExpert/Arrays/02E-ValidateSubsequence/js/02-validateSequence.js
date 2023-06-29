// Copyright 2022 ALgoExpert LLC. All rights reserved.
//
// Header 
const logDivider = "------------------------------"
const Title01 = "|- # Time Complexity Results:";
const algoTime = "|- Time = O(n^2)"
const algoSpace = "|- Space = O(1)"
const TimeSpaceComplexity = Title01 + "\n" + algoTime + "\n" + algoSpace + "\n" + logDivider

// Code Below:
const isValidSubsequence = (array, sequence) => {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdk === sequence.length  
}



// Automatic Log Info
console.log(TimeSpaceComplexity)

