# Master Coding Notes (Basic)
<!-- 
<<=  [ "_" ]
   -=0-[+]-0=-
      _||_ -->

## A. Master Variable Types 
``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Variable Types
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=

var // global
let // scope
const // only once



```

## B. Master DataTypes 

``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Data Types [ Completed ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=

// Strings
// Numbers
// Booleans
// Arrays
// Objects
// typeOf Operator
// Undefined
// Empty Values 
// Null
// Primative Data
// Complex Data
// Method = .method()
// Property = .method

// Difference between null and undefined:
// --> Equal in Value, different in type
// --> Example:
// --> --> null !== undefined
// --> --> null == undefined 
// --> --> undefined === undefined
// --> --> null === object

```


## C. Master Arithmatic Operators 

``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Arithmatic Operators [ Completed ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=

// + [ Addition]
// - [ Subtraction]
// * [ Multiplier]
// ** [ Exponentializes ]
// / [ Divide ]
// % [ Modulus ]
// ++ [ Increment ]
// -- [ Decrement ]




```

## D. Master Assignment Operators 

``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Assignment Operators [ incomplete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=



// = [ Assignment ] = [ x = y ] = [ x = y ]
// += [ Plus Equal ] = [ x += y ] = [ x = x + y ]
// -= [ Minu Equal ] = [ x -= y ] = [ x = x - y ]
// *= [ Product Equal ] = 
// /= [ Divide Equal]
// %= [ Module Equal ]
// <<= [ "" ]
// <<= [ "" ]
// 

```

## E. Master Strings & String Methods 

``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Strings [ Complete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=

// \' = [ Single Quote ]
// \" = [ Double Quote ]
// \\ = [ Backslash ]
// \b = [ Backspace ]
// \f = [ Form Feed ]
// \n = [ New Line ]
// \r = [ Carriage Return ]
// \t = [ Horizontal Tab ]
// \v = [ Vertical Tab ]



```

> -=-=-=-= [ Section Separator ] -=-=-=-=-=


``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> String Methods [ Complete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=

// 1. String Length
// 2. Finding a String in a string
// 3. Finding the last "occurance" of a string in a string
// 4. Searching for a string in a string




// 1. String Length = [ string.length ]
// Example: 
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;


// 2. Finding a string in a string = [ indexOf() ]
// Example:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");



// 3. Finding the last "occurance" of a string in a string = [ lastIndexOf() ]
// Example: 
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);


// 4. Searching for a string in a string = [ search() ]
// Example: 
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

```


## F. Master Numbers & Number Methods 

``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Numbers [ incomplete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=

// Precision = [ up to 15 characters accurately ]
// numbers as strings = [ cant use + operator because it is also concatenation 
//                        for strings. ]

// infinity / -infinity = [ values larger than the largest value ]
// Hexadecimals = [ numbers following 0x ]
// Primative Values = [ values native to js like 3.14 ]


```

> -=-=-=-= [ Section Separator ] -=-=-=-=-=

``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Number Methods [ Complete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
var NMS = "Number Methods";
var GJSM = "Global Javascript Method";

// NMS:
isNaN(); // [NMS]: [ for checking to see if NaN = true or false ]
toString(); // [NMS]: [ returns number to string ]
toExponential(); // [NMS] : [Converts # to string with exponent]
toFixed(); // [NMS] : [Rounds dependent on parameter of decimal places]
toPrecision(); // [NMS] : [Length of decimal dependent on parameter number]
toValue(); // [NMS] : [Returns value of a variable if number == true]

// GJSMs: 
Number(); // [GJSM] : [Returns a number, converted from its argument]
parseFloat(); // [GJSM] : [Parses argument and returns a floating point number]
parseInt(); // [GJSM] : [Parses argument and returns an integer]


// Number Properties: 
// Note: Number Properties Cannot be Used on Variables
// Note Cont: Number properties belongs to the JavaScript's number object wrapper called Number.

MAX_VALUE // Returns the largest number possible in JavaScript
MIN_VALUE // Returns the smallest number possible in JavaScript
POSITIVE_INFINITY // Represents infinity (returned on overflow)
NEGATIVE_INFINITY // Represents negative infinity (returned on overflow)
NaN // Represents a "Not-a-Number" value


// ##### NUMBER METHODS EXAMPLES
// toExponential() example:
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

// toFixed() example: 
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

// toPrecision() example:
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600


// ##### GLOBAL METHODS EXAMPLES:
// Number() Examples
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

// Number() with Dates Example:
Number(new Date("2017-09-30"));    // returns 1506729600000


// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 


// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN


```

## G. Master Arrays & Array Methods


### G1-Array-Review
``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Array Review [ Complete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
var AMS = "Array Methods";
var GJSM = "Global Javascript Method";

// REVIEW OF ARRAYS
// Creating Arrays with the new property
var cars = new Array("Saab", "Volvo", "BMW");

// Access the Elements of an Array
var name = cars[0];
document.getElementById("demo").innerHTML = cars[0]; // DOM ex. 

// Changing an Array Element
cars[0] = "Opel";

// Access the Full Array
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars; // DOM ex.

// Array Elements Can Be Objects
/* JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:*/
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

```

### G2-Array-Properties
``` js

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Array Properties [ Complete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
var APS = "Array Properties";
var GJSM = "Global Javascript Method";

// Array Properties
// Based on the data below, the following array properties can be used:
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.length;   // [ property 1 : "The length of fruits is 4" ]

var first = fruits[0]; // [property 2 : "Accessing the first array element"]

var last = fruits[fruits.length - 1]; // [ property 3 : "Accessing the Last Array Element"]


// Technique 1: SAFEST way to LOOP arrays: 
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

```

### G3-Array-Methods-Part-A

``` js
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Array Methods Part A: [ Complete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
var AMS = "Array Methods";
var GJSM = "Global Javascript Method";

var vonsArray = ["Life", "Finances", "Personal", "Educational", "Professional"]

vonsArray.forEach();
// Example of Array.forEach();
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

//Adding new Elements to an Array:
vonsArray.push("Luxury"); // A1 - Pushes new element "Luxury" to array 
vonsArray[Array.length] = "Luxury"; // A2 - Adds new element "Luxury" to Array 
vonsArray[5] = "Luxury"; // A3 - Adds new element. 

// Note #1: **WARNING** - using "A3" Methods increases 
// the chances of bugs because if an 
// element is created and the index isnt correct, it can create holes
// in the array. 

// NOTE #2: Associative Arrays ( Not in js ):
// Arrays use numbered indexes ONLY in js.
// Arrays that use named indexes are associative arrays. 

// NOTE #3: The differences between Arrays and Objects:
// Arrays use numbered indexes, Objects use named indexes
// So: Use arrays when element names = numbers
// So: Use objects when element names = strings

// NOTE #4: DONT use new array, instead use empty array to a variable
var points = new Array();     // Bad
var points = [];              // Good 

// NOTE #5: How to recognize an Array, because array = object:
Array.isArray(fruits);   // 1st way: returns true

// 2nd way: create my own function
// The function below always returns true if the argument is an array.
// Or more precisely: it returns true if the object prototype contains the word /
// "Array".

function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}

// 3rd way: using the instanceOf operator
//The instanceof operator returns true if an object is created by a given constructor:
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array;   // returns true

``` 


### G4-Array-Methods-Part-B
``` js
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
// --> Array Methods Part B: [ incomplete ]
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=
var AMS = "Array Methods";
var GJSM = "Global Javascript Method";



toString(); // converts an array to a string of (comma separated) array values.
join(); // similar to toString, but I can initialize a string to seperate them.
pop(); // removes the last element from an array AND returns that value
push(); // adds a new element to an array (at the end) AND returns the new length
shift(); //  removes the 1st element AND "shifts" others to a lower index.
unshift(); // adds a new element(beginning), and "unshifts" older elements:
splice(); // add new items to an array & returns [] with deleted items.
concat(); // creates a new array by merging (concatenating) existing arrays:
slice(); // slices out a piece of an array into a new array.

sort();// sorts an array alphabetically:
reverse(); // reverses the elements in an array.
numericSort(); // same as sort() but used for numbers.

forEach(); // method calls a function (a callback function) once for each array element.
array.map(); // creates a "NEW" array, doesnt execute without values, doesnt change original array
array.filter(); // method creates a "NEW" array with array elements that passes a test.

array.reduce(); // method runs a function on each array element to produce (reduce it to) a single value 
                // by working left to right. Note: this does not reduce the original array. 

array.reduceRight(); // method runs a function on each array element to produce (reduce it to) a single value.
                     // works from right-to-left in the array. See also reduce().
                     // method does not reduce the original array.

array.every(); // method check if "ALL" array values pass a test.
array.some(); // method check if "SOME" array values pass a test.

array.indexOf(); // method searches an array for an element value and returns its position.
array.lastIndexOf(); // is the same as Array.indexOf(), but returns the position of the last occurrence of 
                    // the specified element.

array.find(); // method returns the value of the first array element that passes a test function.
array.findIndex(); // method returns the index of the first array element that passes a test function.



delete; // changes given index to undefined.


// Note #1: Using the splice() method pseudocode:
splice(whereAdded, #toBeRemoved, "toBeAdded", "toBeAdded", "etc.")

// Note #2: slice() does NOT remove elements it just creates a new
//          array for manipulating. 
//    --> This method also can take more than one argument. 

// Note #3: numericSort(): Ascending vs Descending
var points = [40, 100, 1, 5, 25, 10];

// --> Ascending: 
points.sort( function(a, b) {
  return a - b
  });

// --> Descending: 
points.sort( function(a, b) {
  return b - a
  });



// EXAMPLES of ARRAY METHODS

// toString():
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// join():
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

// pop():
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
// --> // Removes the last element ("Mango") from fruits
// --> // the value of x is "Mango"

// push():
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
// --> //  Adds a new element ("Kiwi") to fruits
// --> //  the value of x is 5

// shift():
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); 
// --> // Removes the first element "Banana" from fruits
// --> // the value of x is "Banana"

// unshift():
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
// --> // Adds a new element "Lemon" to fruits
// --> // Returns 5

// splice():
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// --> 1st parem = where new elements are added.
// --> 2nd parem = how many elements are removed from beginning
// --> 3rd parem = element to be added
// --> 4th parem = element to be added
// --> 5th parem = element to be added (etc.)

// concat():
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   
// --> Concatenates (joins) myGirls and myBoys
// --> method can take any number of array arguments:
// --> method can take any number of array arguments:
        var arr1 = ["Emil", "Tobias", "Linus"];
        var myChildren = arr1.concat("Peter");
          


// slice():
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3, 2);


// sort():
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();



// ###### Iterative Array Function Examples #####
// -------------------------------------------------

// forEach():
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

// forEach():
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}
// -------------------------------------------------

// .map():
// This example multiplies each array value by 2:
// Note that the function takes 3 arguments:
// [item value, item index, and the array itself.]

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

// When a callback function uses only the value parameter, the index and array parameters can be omitted:
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

// -------------------------------------------------

// array.filter():
// This example creates a new array from elements with a value larger than 18:
// Note that the function takes 3 arguments:
// - [ value, index, and the array itself ]

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} 

// In the example above, the callback function does not use the index and array parameters, so they can be omitted:
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}

// -------------------------------------------------
// array.reduce():
// This example finds the sum of all numbers in an array:
// Note that the function takes 4 arguments:
// [ The Total (Inital Value) , The Item Value, The Index, and the Array itself ]

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

// The example above does not use the index and array parameters. It can be rewritten to:
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

// The reduce() method can accept an initial value:
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

// -------------------------------------------------
// reduceRight():
// This example finds the sum of all numbers in an array:
// Note that the function takes 4 arguments:
// [ The total, item value, item index, array itself ]


var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}  

// The example above does not use the index and array parameters. It can be rewritten to:
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}

// -------------------------------------------------
// reduceRight(): 
// This example check if all array values are larger than 18:
// Note that the function takes 3 arguments:
// -> [ item value, index, array ]

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// When a callback function uses the first parameter only (value), the other parameters can be omitted:
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}


// -------------------------------------------------
// array.indexOf():
// Search an array for the item "Apple":

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

// array.indexOf(item, start)
// item - Required. The item to search for.
// item - Optional. Where to start the search. Negative values will start at the given 
//        position counting from the end, and search to the end.
// returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence.


var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

// -------------------------------------------------
// array.lastIndexOf():
// Search an array for the item "Apple":
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

// array.lastIndexOf(item, start): 
// item - Required. The item to search for
// start - Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning.


// -------------------------------------------------
// array.find():

// This example finds (--RETURNS THE VALUE OF--) the first element that is larger than 18:
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:
// [ The item value, item index, The array itself ]

// -------------------------------------------------
// This example [--FINDS--] the index of the first element that is larger than 18:

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:
// [ item value,  item index, array itself ]


// -------------------------------------------------

// delete: 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];











```

