// |- # These are the different ways to do a string reversal in javascript. 
// ||-- We need to remember to not remember it, but remember the components
// ||-- that make up the code. That is how we will become better, by 
// ||-- recognizing the patterns. 


// |- # [[Challenge: Given a string of characers as input, write a function] 
// ||-- [that returns it with the characters reversed. ]]


const reverse = string =>
  string
    .split("")
    .reverse()
    .join("");

const _reverse = string => {
  let result = "";
  for (let character of string) result = character + result;
  return result;
};

const __reverse = string =>
  string.split("").reduce((result, character) => character + result);


























