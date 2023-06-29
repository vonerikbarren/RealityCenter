// Copyright 2022 ALgoExpert LLC. All rights reserved.

// O(2^n) time | O(n) space 


function getNthFib(n) {
   // Write your code here.
    if (n === 2) {
       return 1
    } else if (n === 1) {
       return 0;
    } else {
       return getNthFib(n - 1) + getNthFib(n - 2)
    }
 }
 
 // Do not edit the line below.
 module.exports = getNthFib
 