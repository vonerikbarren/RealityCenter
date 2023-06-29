import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from '../../View/Home/Home';
import Login from '../../View/Login/Login';
import Register from '../../View/Register/Register';



class Navigation extends Component {
  render() {
    return (
      <Router>
        <div className="Navigation">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default Navigation