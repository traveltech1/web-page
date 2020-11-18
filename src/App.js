import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/main';
import Payment from './pages/payment';
// import './App.css';

export default () => (
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
    </div>
  </Router>
);
