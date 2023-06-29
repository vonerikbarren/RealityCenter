// Copyright 2022 ALgoExpert LLC. All rights reserved.

// O(nlogn) time | O(1) space - where n is the number of students


function classPhotos(redShirtHeights, blueShirtHeights) {
   // Write your code here.
   redShirtHeights.sort((a, b ) => b - a)
   blueShirtHeights.sort((a, b) => b - a)
    
    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE' 
    for (let idx = 0; idx < redShirtHeights.length; idx++) {
       const redShirtHeight = redShirtHeights[idx]
       const blueShirtHeight = blueShirtHeights[idx]
       
       if (shirtColorInFirstRow === "RED") {
          if (redShirtHeight >= blueShirtHeight) return false
       } else if (blueShirtHeight >= redShirtHeight) return false
    }
    
    return true
 }
 
 // Do not edit the line below.
 exports.classPhotos = classPhotos;
 