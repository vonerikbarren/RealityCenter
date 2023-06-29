# 00-Title


## Overview

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.



## Templates


### JSX Template

``` jsx



```

### Practice Template

**-----------------------------------------------------------**
Overview:



**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice ] --
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''



```

**-----------------------------------------------------------**
Notes:



**-----------------------------------------------------------**



# 01-Syntax

``` jsx

const [state, dispatch] = useReducer(reducer, initialArg, init);

// '''''''''''''''''''''''''''''''''

/*
There are two different ways to initialize useReducer state. You may choose either one depending on the use case. The simplest way is to pass the initial state as a second argument:
*/

  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );


/*
You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action:
*/

function init(initialCount) { // used Here
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);  // used here
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init); // used here
  return (
    <div>
      Count: {state.count} 
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}> 
        Reset 
      </button> 
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}




```


# Practice Problems

## Practice #2 -  Example 1 React.js Site

**-----------------------------------------------------------**
Overview:

Here’s the counter example from the useState section, rewritten to use a reducer:

**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice ] --
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

```

**-----------------------------------------------------------**
Notes:
- React guarantees that dispatch function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.

- React doesn’t use the state = initialState argument convention popularized by Redux. The initial value sometimes needs to depend on props and so is specified from the Hook call instead. If you feel strongly about this, you can call useReducer(reducer, undefined, reducer) to emulate the Redux behavior, but it’s not encouraged.

**Bailing out of a dispatch**
If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)


**-----------------------------------------------------------**



## Practice #3  -  Example from Harvard

**-----------------------------------------------------------**
Overview:



**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice ] --
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''

import React, { useReducer } from "react";
import "./App.css";

function App() {
  const [count, dispatch] = useReducer((state, action) => {
    if (action === "add") {
      return state + 1;
    } else if (action === "subtract") {
      return state - 1;
    } else {
      return state;
    }
  }, 0);

  return (
    <div className="App">
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch("add")}>
        Add
      </button>
      <div>{count}</div>
      <button className="btn btn-danger mt-5" onClick={() => dispatch("subtract")}>
        Subtract
      </button>
    </div>
  );
}

export default App;




```

**-----------------------------------------------------------**
Notes:

The code does the same as React.js sites sample code but its written slightly... Look at the code and write notes below on the differences:

- 


**-----------------------------------------------------------**




## Practice #5 - Harvard Ex #2

**-----------------------------------------------------------**
Overview:



**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice ] --
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''

import React, { useReducer } from "react";
import "./App.css";

function Count() {
  const dogs = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg"
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg"
    }
  ];

  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action === "praiseHarry") {
        return { ...state, HarryPraises: state.HarryPraises + 1 };
      } else if (action === "praiseHermione") {
        return { ...state, HermionePraises: state.HermionePraises + 1 };
      } else {
        return state;
      }
    },
    { HarryPraises: 0, HermionePraises: 0 }
  );

  return (
    <div className="App">
      <h1>Praise your favorite dog!</h1>
      <div className="row mt-5">
        {dogs.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">
                {item.name} has been praised {state[item.name + "Praises"]} times!
              </p>
              <button className="btn btn-primary" onClick={() => dispatch("praise" + item.name)}>
                Praise
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;



```

**-----------------------------------------------------------**
Notes:



**-----------------------------------------------------------**