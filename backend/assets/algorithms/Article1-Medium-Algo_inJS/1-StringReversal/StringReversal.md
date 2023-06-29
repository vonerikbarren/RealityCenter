# String Reversal 


*INSTRUCTIONS*
- Given a string of characters as input, write a function 
  that returns it with the characters reversed.

``` js

mocha.setup("bdd");
const { assert } = chai;

// This is the code that checks to see if the sibling code is true or false.
describe("String Reversal", () => {
  it("Should reverse string", () => {
    assert.equal(reverse("Hello World!"), "!dlroW olleH");
    assert.equal(_reverse("Hello World!"), "!dlroW olleH");
    assert.equal(__reverse("Hello World!"), "!dlroW olleH");
  });
});

mocha.run();

```


*ANALYSIS*

- If we know the “trick”, the solution is trivial. 
  That trick is to realize we can simply use the built-in 
  reverse method for an [array]. First, we use the split method 
  on a `string` to generate an [array] of characters, then we can 
  apply the reverse method before using the join method to combine 
  the characters back into a `string` again. 

- This solution can be written in just one line of code! 
  Though not as elegant, the problem can also be solved using 
  the latest syntax and helper method. With the new for of loop 
  that iterates through every character of any `string`, we can show 
  off our familiarity with the latest syntax. Alternatively, we 
  can also use the [array]’s reduce method which eliminates the need 
  to keep a temporary variable.

- Given a `string` of characters, every character needs to be 
  visited once. Though this happens multiple times, the time 
  complexity normalizes out to linear. And since no separate internal 
  data structure is kept, the space complexity is *constant*.



  