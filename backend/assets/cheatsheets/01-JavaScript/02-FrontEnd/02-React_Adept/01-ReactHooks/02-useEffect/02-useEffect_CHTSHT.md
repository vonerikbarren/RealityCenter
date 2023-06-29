# 00-useEffect_CHTSHT


## Overview

When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render. (We’ll talk more about how this compares to class lifecycles in Using the Effect Hook.)

Effects may also optionally specify how to “clean up” after them by returning a function.

Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them.


*What does useEffect do?*
By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

*Why is useEffect called inside a component?* 
Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

*Does useEffect run after every render?* 
Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.






## Templates


### JSX Template

``` jsx



```

### Practice Entry Template

#### Practice Template

**-----------------------------------------------------------**
Overview:



**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #2 ] --
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''



```

**-----------------------------------------------------------**
Notes:



**-----------------------------------------------------------**

# 01 - Syntax








# 02 - Practice Examples


## Practice #1 - Harvard Ex, mock fetch from an API

**-----------------------------------------------------------**
Overview:



**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #1 ] -- Mock Fetch from an API
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''
import React, { useState, useEffect } from "react";
import * as API from "./utils/API";
import "./App.css";

function App() {
  const [developerState, setDeveloperState] = useState({
    excitementLevel: 0,
    lifeLongLearner: true,
    mood: "",
    name: ""
  });

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getDeveloper.then((res) => {
      setDeveloperState(res);
      console.log("Developer State:");
      console.log(developerState);
    });
  }, []);

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
  );
}

export default App;


// ''''''''''''''''''''''''''''''
// ### [ Component: API.js] ###
// ''''''''''''''''''''''''''''''

// This code is meant to serve as a mock fetch from an API.
export const getDeveloper = new Promise(function(resolve) {
  setTimeout(() => {
    resolve({
      excitementLevel: 10000,
      lifeLongLearner: true,
      mood: "excited",
      name: "Alec"
    });
  }, 1000);
});


```

**-----------------------------------------------------------**
Notes:



**-----------------------------------------------------------**




## Practice #2 - updating items after reactDOM has been loaded.

**-----------------------------------------------------------**
Overview:

For example, this component sets the document title after React updates the DOM:

**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #2 ] -- 
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

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

**-----------------------------------------------------------**
Notes:

When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render. (We’ll talk more about how this compares to class lifecycles in Using the Effect Hook.)


**-----------------------------------------------------------**



## Practice #3 - subscription example

**-----------------------------------------------------------**
Overview:

For example, this component uses an effect to subscribe to a friend’s online status, and cleans up by unsubscribing from it:

**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #3 ] --
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''


import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}



```

**-----------------------------------------------------------**
Notes:

In this example, React would unsubscribe from our ChatAPI when the component unmounts, as well as before re-running the effect due to a subsequent render. (If you want, there’s a way to tell React to skip re-subscribing if the props.friend.id we passed to ChatAPI didn’t change.)


**-----------------------------------------------------------**


## Practice #4 - 

**-----------------------------------------------------------**
Overview:

Just like with useState, you can use more than a single effect in a component:


**-----------------------------------------------------------**

``` jsx

// =======================================================
// -- [ Practice #4 ] --
// =======================================================

// ''''''''''''''''''''''''''''''
// ### [ Component: App.js] ###
// ''''''''''''''''''''''''''''''

function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // ...

```

**-----------------------------------------------------------**
Notes:



**-----------------------------------------------------------**











