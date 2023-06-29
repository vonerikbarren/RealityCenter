# 00-useState Hook


## Overview


*What does calling useState do?* 
It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

*What do we pass to useState as an argument?* 
The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)




## Templates


### JSX Template

``` jsx



```


``` jsx
// =======================================================
// -- [ Topic ] --
// =======================================================


```



# 01-Syntax

- In this example we go over how the useState hook works. Usually from what I have seen so far, there is a verb for whatever the state is, then a setVerb as parameters. 

- Below, it is count and setCount. 

``` jsx
import React, { useState } from 'react';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


```

### Practice

#### -- [ Practice #1 ] useState, Object, Harvard

``` jsx

// =======================================================
// -- [ Practice #1 ] --
// =======================================================


import React, { useState } from 'react';

export default function App() {

  const [developerState, setDeveloperState] = useState({
    excitementLevel: 10000,
    lifeLongLerner: true,
    mood: "excited",
    name: "Alec"
  })

  return (
    <div className="card">
      <div>
        Name: {developerState.name}
      </div>
      <div>
        Status: {developerState.mood}
      </div>
      <div>
        Lifelong learner: {developerState.lifeLongLearner.toString()}
      </div>
      <div>
        Excitement Level: {developerState.excitementLevel}
      </div>
      <div className="btn-group">
        <button onClick={() => setDeveloperState({ ...developerState, mood: "lazy" })} className="btn btn-danger">
          Encourage Laziness
        </button>
        <button onClick={() => setDeveloperState({ ...developerState, mood: "determined" })} className="btn btn-success">
          Fill with Determination
        </button>
      </div>
    </div>
  )
}


```


#### -- [ Practice #2 ] - useState, multiple useStates

``` jsx

// =======================================================
// -- [ Practice #2 ] --
// =======================================================

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}

```




#### -- [ Practice #3 ] - useState with a boolearn

**Example: Show/Hide a Component (useState with a boolean)**
**----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #3 ] --
// =======================================================

// First: import useState. It's a named export from 'react'
// Or we could skip this step, and write React.useState
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// This component expects 2 props:
//   text - the text to display
//   maxLength - how many characters to show before "read more"
function LessText({ text, maxLength }) {
  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, just render it
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> read more</a>
      ) : (
        <a onClick={() => setHidden(true)}> read less</a>
      )}
    </span>
  );
}

ReactDOM.render(
  <LessText
    text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
    maxLength={35}
  />,
  document.querySelector('#root')
);

```



#### -- [ Practice #4 ] - useState with a number

**Example: Updating state based on previous state (useState with a number)**
**----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #3 ] --
// =======================================================

// Pseudocode to illustrate what React is doing

// Keep track of which component is being called
// And keep a list of hooks
currentComponent = YourComponent;
hooks[currentComponent] = []

// Call the component. If it calls useState,
// that'll update the `hooks` above
YourComponent();

// -------------------------------------------------------

import React, { useState } from 'react';

function StepTracker() {
  const [steps, setSteps] = useState(0);

  function increment() {
    setSteps(prevState => prevState + 1);
  }

  return (
    <div>
      Today you've taken {steps} steps!
      <br />
      <button onClick={increment}>
        I took another step
      </button>
    </div>
  );
}

ReactDOM.render(
  <StepTracker />,
  document.querySelector('#root')
);

```


#### -- [ Practice #5 ] - useState with an Array

**Example: useState with an array**
**----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #5 ] --
// =======================================================

// Remember: state can hold any kind of value! Here’s an example of useState holding an array.

// Typing into the box and hitting Enter will add an item to the list.

// -------------------------------------------------------

function ListOfThings() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = event => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName
      }
    ]);
    setItemName("");
  };

  return (
    <>
      <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );

```

**----------------------------------------------------------**
**Notes**

Notice we’re calling useState with an initial value of an empty array `[]`, and take a look at the `addItem` function.

The state updater (setItems, here) doesn’t “merge” new values with old – it overwrites the state with the new value. This is very different from how this.setState worked in classes!

So in order to add an item to the array, we’re using the ES6 spread operator ... to copy the existing items into the new array, and inserting the new item at the end.

Also, just to note, this example uses const and an arrow function instead of the function from the last example. I wanted to show that either way works.



**----------------------------------------------------------**




#### -- [ Practice #6A ] - useState with multiple calls

**----------------------------------------------------------**
**Example: multiple calls to useState**

If you want to store multiple values in a function component, you’ve got a couple options:

call `useState` more than once
shove everything into an object


There’s nothing wrong with calling useState multiple times, and in most cases, that’s how I store multiple values. Once you get over 4 or 5 useState calls it gets a bit unwieldy, but if you’re fine with it, React is too.

Let’s look at how you’d call useState a couple times to store a username and password.

**----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #6A ] --
// =======================================================

// Remember: state can hold any kind of value! Here’s an example of useState holding an array.

// Typing into the box and hitting Enter will add an item to the list.

// -------------------------------------------------------

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const printValues = e => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input
          value={username}
          onChange={event => setUsername(event.target.value)}
          name="username"
          type="text"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

```

**----------------------------------------------------------**
**Notes**

You can see it works pretty much the same as calling useState once. Each call creates a new piece of state and a setter for that state, and we store those in variables.

When the user types into the inputs, the onChange handler is called. It receives the input event and updates the appropriate piece of state with the new value for the username/password.



**----------------------------------------------------------**



#### -- [ Practice #6B ] - useState with an object

**----------------------------------------------------------**
**Example: useState with an object (multiple values, sorta)**

Let’s look at an example where state is an object. We’ll create the same login form with 2 fields. Compare both ways and pick your favorite.

To store multiple values in useState, you have to put them into a single object, and be careful about how you update the state.

**----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #6A ] --
// =======================================================

// Remember: state can hold any kind of value! Here’s an example of useState holding an array.

// Typing into the box and hitting Enter will add an item to the list.

// -------------------------------------------------------

function LoginForm() {
  const [form, setState] = useState({
    username: '',
    password: ''
  });

  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input
          value={form.username}
          name="username"
          onChange={updateField}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

```

**----------------------------------------------------------**
**Notes**

First up, we’re creating a piece of state and initializing it with an object:

This looks a lot like how you might initialize state in a class.

Then we have a function to handle the submission, which does a preventDefault to avoid a page refresh and prints out the form values.

(We called the updater setState, but you can call it whatever you like)

The updateField function is where the real work happens. It calls setState and passes an object, but it must be sure to copy in the existing state with ...form if it doesn’t want to overwrite it. Try taking out the ...form line and see what happens.

At the bottom we have a pretty standard-looking chunk of JSX to render the form and its inputs. Since we’ve passed a name prop to the inputs, the updateField function can use it to update the appropriate state. This way you can avoid having to write a handler function for each field.




**----------------------------------------------------------**
