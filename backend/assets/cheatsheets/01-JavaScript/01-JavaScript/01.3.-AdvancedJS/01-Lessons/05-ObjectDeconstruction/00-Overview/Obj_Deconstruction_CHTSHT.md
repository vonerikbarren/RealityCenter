# Object Deconstruction

``` js
// CONSOLE VARs
var separator = "***********************************";
var seperatorL = "######################################";
var seperatorSm = "-------------------";


// ######################################
// -- [ Array Deconstruction ] --
// ######################################
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6', '7']

// -- [ Example 1 ] --
// Note: Here is a basic example of destructuring an array
const [a, b] = alphabet;

console.log(a);
console.log(b);

// -- [ Example 2 ] --
// Note: If we wanted to simply get `A` & `C` ONLY we would do the following:

const [a, , c,] = alphabet;

console.log(a);
console.log(c);


// -- [ Example 3 ] --
// Note: the spread operator ... gets the rest of the array; 

const [a, , c, ...rest] = alphabet;

console.log(a);
console.log(c);
console.log(rest);


// -- [ Example 4 ] --
// Note: If we wanted to create a new array with the both the alphabet and numbers array, we do the following:

const newArray = [...alphabet, ...numbers];

console.log(newArray);



// -- [ Example 5 ] --
// Note: Functions can work the exact same: 

sumAndMultiply = (a, b) => {
  return [a + b, a * b]
}

const array = sumAndMultiply(2, 3);

console.log(array);


// NOTE: we can transform this into:

sumAndMultiply = (a, b) => {
  return [a + b, a * b]
}

const [sum, multiply] = sumAndMultiply(2, 3);

console.log(sum);
console.log(multiply);

// NOTE: we can add extra information as a defualt value, for example division, like the following:

sumAndMultiply = (a, b) => {
  return [a + b, a * b]
}

const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);

console.log(sum); // returns 5
console.log(multiply); // returns 6
console.log(division); // returns "No division"


// NOTE: however, if we added a parameter in the sumAndMultiply function in the return array for division, then it changes that default value:

sumAndMultiply = (a, b) => {
  return [a + b, a * b, a / b]
}

const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);

console.log(sum); // returns 5
console.log(multiply); // returns 6
console.log(division); // returns 0.6666666666666


// ######################################
// -- [ Object Deconstruction ] --
// ######################################

// DATA FOR DECONSTRUCTION
const personOne = {
  name: 'Kyle',
  age: 24,
  address: {
    city: 'Chicago',
    state: 'IL'
  },
}

const personTwo = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'Boston',
    state: 'MA'
  }
}

const personThree = {

  age: 45,
  address: {
    city: 'Detroit',
    state: 'MI'
  },
  favoriteDrink: "beer",
  favColor: 'red'
}

const personFour = {
  name: 'Bill',
  age: 19,
  address: {
    city: 'Tampa',
    state: 'FL'
  },
  favoriteFood: "rice",
  tokensForPlay: 30
}

// -- [ Example 1 ] --

const { name, age } = personTwo;

console.log(separator);
console.log("Example 1");
console.log(name);
console.log(age);

// -- [ Example 2 ] --
// Note: Here, we are renaming `name` to firstName it will still have the same value
// of name.

const { name: firstName, } = personTwo;

console.log(separator);
console.log("Example 2");
console.log(firstName);
console.log(age);

// -- [ Example 3 ] --
// Note: Here, we are adding favFood and a value so that this is the default even 
// though it isnt in our original object.
// Note: If we added a favFood key:value to the object, it will overwrite what we put 
// into the deconstruction parameter below. 

const { name, age, favFood = "rice" } = personTwo;


console.log(separator);
console.log("Example 3");
console.log(name);
console.log(age);
console.log(favFood);


// -- [ Example 4 ] --
// Note: Here, we are using the spread operator `...` and a variable which could be 
// anything, to get the rest of the object. This is very useful. 

const { name, ...rest } = personTwo;


console.log(separator);
console.log("Example 4");
console.log(name);
console.log(rest);


// -- [ Example 5 ] --
// Note: Here, we are getting the nested object values by creating another 
// destructuring parameter within the original descructuring parameter. 

const { name, address: { city } } = personTwo;

console.log(separator);
console.log("Example 5");
console.log(name);
console.log(city);


// -- [ Example 6 ] --
// Note: Here, we are combining or concatenating the objects where one value has the parameters that the other doesnt. So if the objects have similar key value pairs but one has additional key value pairs, then those extra key value pairs will be added to the object while the original key values overide the first. 

const personFive = { ...personThree, ...personFour };

console.log(separator);
console.log("Example 6");
console.log(personFive);


// -- [ Example 7 ] --


printUser = (user) => {
  console.log(`Name is: ${user.name}. Age is ${user.age}`);
}

printUser(personOne);


// Here we can simplify it even further by deconstructing in the parameter instead of inside of the function: 

printUser = ({ name, age }) => {
  console.log(`Name is: ${name}. Age is ${age}`);
}

printUser(personOne);


// Like in Example 3, and pretty much all of the previous examples, you can add a new key value pair to use within the function that goes to that object variable.

printUser = ({ name, age, favFood = 'Watermelon' }) => {
  console.log(`Name is: ${name}. Age is ${age}. Favorite Food is ${favFood}`);
}

printUser(personOne);




```