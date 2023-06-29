// Copyright 2022 ALgoExpert LLC. All rights reserved.

// O(m * (n + m)) time | O(1) space - where n is the number of characters and m is the length of the document

function generateDocument(characters, document) {
   // Write your code here.
   for (const character of document) {
       const  documentFrequency = countCharacterFrequency(character, document)
       const charactersFrequency = countCharacterFrequency(character, characters)
       if (documentFrequency > charactersFrequency) return false
    }
    
    return true
 }
 
 function countCharacterFrequency(character, target) {
    let frequency = 0;
    for (const char of target ) {
       if (char === character) frequency++
    }
    
    return frequency
 }
 
 // Do not edit the line below.
 exports.generateDocument = generateDocument;
 