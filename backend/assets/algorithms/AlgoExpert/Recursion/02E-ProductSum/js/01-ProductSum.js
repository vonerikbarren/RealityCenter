// Copyright 2022 ALgoExpert LLC. All rights reserved.

// O(n) time | O(d) space where n is the total number of elements in the array,
// including sub-elements, and d is the greatest depth of "Special" arrays in the array.  


// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, multiplier = 1) {
   // Write your code here.
    let sum = 0;
    for (const element of array) {
       if (Array.isArray(element)) {
          sum += productSum(element, multiplier + 1)
       } else {
          sum += element
       }
    }
    return sum * multiplier
 }
 
 // Do not edit the line below.
 module.exports = productSum;
 