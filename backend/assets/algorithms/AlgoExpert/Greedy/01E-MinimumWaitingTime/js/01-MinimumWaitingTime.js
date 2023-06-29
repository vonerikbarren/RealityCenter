
// Copyright 2022 ALgoExpert LLC. All rights reserved.

// O(nlogn) time | O(1) space - where n is the number of queries

function minimumWaitingTime(queries) {
   // Write your code here.
    queries.sort((a, b) => a - b)
    
    let totalWaitingTime = 0
    for (let idx = 0; idx < queries.length; idx++) {
       const duration = queries[idx]
       const queriesLeft = queries.length - (idx + 1)
       totalWaitingTime += duration * queriesLeft
    }
    
   return totalWaitingTime;
 }
 
 // Do not edit the line below.
 exports.minimumWaitingTime = minimumWaitingTime;
 