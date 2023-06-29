# 00-Title


## Overview

*Purpose:*
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

*Overview*
In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

*When to use:*
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:

``` jsx

class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// Using context, we can avoid passing props through intermediate elements:
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}


```


*Before You Use Context*
Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

**If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.**

For example, consider a Page component that passes a user and avatarSize prop several levels down so that deeply nested Link and Avatar components can read it:

``` jsx

<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>


```

It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It’s also annoying that whenever the Avatar component needs more props from the top, you have to add them at all the intermediate levels too.

One way to solve this issue without context is to pass down the Avatar component itself so that the intermediate components don’t need to know about the user or avatarSize props:

``` jsx

function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}

```

With this change, only the top-most Page component needs to know about the Link and Avatar components’ use of user and avatarSize.

This inversion of control can make your code cleaner in many cases by reducing the amount of props you need to pass through your application and giving more control to the root components. However, this isn’t the right choice in every case: moving more complexity higher in the tree makes those higher-level components more complicated and forces the lower-level components to be more flexible than you may want.

You’re not limited to a single child for a component. You may pass multiple children, or even have multiple separate “slots” for children

``` jsx

function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  );
}

```

This pattern is sufficient for many cases when you need to decouple a child from its immediate parents. You can take it even further with render props if the child needs to communicate with the parent before rendering.

However, sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache.

## Templates




### JSX Template

``` jsx



```



# 03 - API
*React.createContext*
*-------------------*
``` jsx

const MyContext = React.createContext(defaultValue);

```

Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

*Context.Provider*
*-------------------*
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.

Changes are determined by comparing the new and old values using the same algorithm as Object.is.

*Class.contextType*
*-------------------*


*Context.Consumer*
*-------------------*
A React component that subscribes to context changes. This lets you subscribe to a context within a *function component*.

Requires a function as a child. The function receives the current context value and returns a React node. The `value` argument passed to the function will be equal to the `value` prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the `value` argument will be equal to the `defaultValue` that was passed to `createContext()`.



*Context.displayName*
*-------------------*
Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context.

For example, the following component will appear as MyDisplayName in the DevTools:

``` jsx

const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools

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

import React, { useState, useEffect } from "react";
import DeveloperInfo from "./components/Developer";
import MoodBtns from "./components/MoodBtns";
import Nav from "./components/Nav";
import * as API from "./utils/API";
import DeveloperContext from "./utils/DeveloperContext";
import "./App.css";

function App() {
  const [developerState, setDeveloperState] = useState({
    name: "",
    mood: "",
    lifeLongLearner: true,
    excitementLevel: 0
  });

  function changeMood(mood) {
    if(mood === "determined") {
      developerState.excitementLevel += 10000;
    }
    else {
      developerState.excitementLevel -= 10000;
    }
    setDeveloperState({
      ...developerState,
      mood
    });
  }

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getDeveloper.then((res) => {
      setDeveloperState(res);
    });
  }, []);

  return (
    <div className="container">
      <DeveloperContext.Provider value={developerState}>
        <Nav />
        <DeveloperInfo />
        <MoodBtns changeMood={changeMood} />
      </DeveloperContext.Provider>
    </div>
  );
}

export default App;

// ''''''''''''''''''''''''''''''''''
// ### [ Component: MoodBtbs.js] ###
// ''''''''''''''''''''''''''''''''''
import React from "react";

function MoodBtns({ changeMood }) {
  return (
    <div>
      <button onClick={() => changeMood("lazy")} className="btn btn-danger mx-4">
        Encourage Laziness
      </button>
      <button onClick={() => changeMood("determined")} className="btn btn-success mx-4">
        Fill with Determination
      </button>
    </div>
  );
}

export default MoodBtns;


// ''''''''''''''''''''''''''''''''''
// ### [ Component: Developer.js] ###
// ''''''''''''''''''''''''''''''''''



```

**-----------------------------------------------------------**
Notes:



**-----------------------------------------------------------**


#  01 - Syntax




# 02 - Practice Examples: 