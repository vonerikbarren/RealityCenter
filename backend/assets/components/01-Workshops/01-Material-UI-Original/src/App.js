import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './View/Home/Home';
import Register from './View/Register/Register';
import Login from './View/Login/Login';

import Dashboard from './View/Dashboard/Dashboard';

import ConsultingHome from './View/ConsultingSite/ConsultingHome/ConsultingHome';
import ConsultingPricing from './View/ConsultingSite/ConsultingPricing/ConsultingPricing';
import ConsultingServices from './View/ConsultingSite/ConsultingServices/ConsultingServices';


// Building a Form (Below)
// import Form from './components/Class/Form/Form';

//These are testing of bootstrap-themed components
// import HelloBootstrap from './components/Class/Bootstrap/HelloBootstrap';
// import FirstBootstrap from './components/Class/Bootstrap/FirstBootstrap';
// import Bootstrap1 from './components/Class/Bootstrap/BootStrap1';
// import BTSP12 from './components/Class/Bootstrap/BTSP12';


import { ThemeProvider } from '@material-ui/core';
import Theme from './components/MaterialUI/Theme';
import Grid from './components/MaterialUI/components/GridOne';
import Header from './components/MaterialUI/components/Header';
import Drawer1 from './components/MaterialUI/components/Drawer1';




function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Drawer1" component={Drawer1} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/ConsultingHome" component={ConsultingHome} />
          <Route exact path="/ConsultingPricing" component={ConsultingPricing} />
          <Route exact path="/ConsultingServices" component={ConsultingServices} />

        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;


// Follow these instructions for the new React App to hold the information in on the MasterJavascript React File.

// Step: 1 - Make sure all dependencies are downloaded.
// -- MaterialUI, D3, Three.js, p5, ReactRouter, etc.

// Step: 2 - Make sure to create the file system as follows:
// [ src ]
// - Components
// - Assets
// --> Videos
// --> Images
// --> SVGs
// -- 
// - Components
// - Pages
// - Notes
// - Libraries
// - Data
// - Logic
// - 