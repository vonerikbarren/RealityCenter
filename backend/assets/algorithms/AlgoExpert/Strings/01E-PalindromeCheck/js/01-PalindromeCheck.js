// Copyright 2022 ALgoExpert LLC. All rights reserved.

// O(n^2) time | O(n) space 


function isPalindrome(string) {
   // Write your code here.
    let reversedString = ''
    for (let i = string.length - 1; i >= 0; i--) {
       reversedString += string[i]
    }
    return string === reversedString; 
 }
 
 // Do not edit the line below.
 exports.isPalindrome = isPalindrome;
 