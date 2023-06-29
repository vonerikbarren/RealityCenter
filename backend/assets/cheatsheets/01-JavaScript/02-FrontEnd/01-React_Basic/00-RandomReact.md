# React Level 1 Cheatsheet

## How to do the basics: 

Level One of React Covers:
- What is React
- How is it put together
- What tool do you use
- what is the syntax


### 02 - How to do a list

``` jsx

import React from "react";
// ################################################
// -- [ App.js  ] -- 
// ################################################

import React from "react";
import List from "./components/List";

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  },
  {
    id: 7,
    name: "Coffee",
    purchased: true
  }
];

function App() {
  return <List groceries={groceries} />;
}

export default App;




// How to do a list. Now the object containing the data is in a seperate

// ################################################
// -- [ List.js  ] -- 
// ################################################

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;



// ################################################
// -- [ List.js  ] -- BONUS
// ################################################
import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const notPurchased = props.groceries.filter(grocery => !grocery.purchased);

  return (
    <ul className="list-group">
      {notPurchased.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;




```

### 03 - How to build a counter (assign functions to buttons)


#### App.js

``` jsx
// ################################################
// -- [ App.js  ] -- 
// ################################################

import React from "react";
import Counter from "./components/Counter";

function App() {
  return <Counter />;
}

export default App;


```

#### Counter.js

``` jsx

// ################################################
// -- [ Counter.js  ] -- 
// ################################################

import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;





```


#### CounterBonus.js

``` jsx

// ################################################
// -- [ App.js  ] -- 
// ################################################

import React from "react";
import Counter from "./components/Counter";

function App() {
  return <Counter />;
}

export default App;


// ################################################
// -- [ Counter.js  ] -- 
// ################################################

import React from "react";
import CardBody from "./CardBody";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <CardBody
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;




// ################################################
// -- [ CardBody.js  ] -- 
// ################################################

import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Increment
      </button>{" "}
      <button className="btn btn-danger" onClick={props.handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default CardBody;




```