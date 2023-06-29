// Copyright 2022 ALgoExpert LLC. All rights reserved.

// O(n) time | O(n) space 




function caesarCipherEncryptor(string, key) {
   // Write your code here.
    const newLetters = [];
    const newKey = key % 26
    
    for (const letter of string) {
       newLetters.push(getNewLetter(letter, newKey))
    }
    return newLetters.join('')
 }
 
 
 function getNewLetter(letter, key) {
    const newLetterCode = letter.charCodeAt() + key
    return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122))
 }
 
 // Do not edit the line below.
 exports.caesarCipherEncryptor = caesarCipherEncryptor;
 