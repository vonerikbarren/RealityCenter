// Copyright 2022 ALgoExpert LLC. All rights reserved.
//
// Header 
const logDivider = "------------------------------"
const Title01 = "|- # Time Complexity Results:";
const algoTime = "|- Time = O(n) // n = num of competitions"
const algoSpace = "|- Space = O(n) // = num of teams"
const TimeSpaceComplexity = Title01 + "\n" + algoTime + "\n" + algoSpace + "\n" + logDivider

// Code Below:
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findCLosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest.
  }
}

// This is the input tree. 
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}




// Automatic Log Info
console.log(TimeSpaceComplexity)
console.log("|- Algorithm results: ")

// Export
module.exports = tournamentWinner;