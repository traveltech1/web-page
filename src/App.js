import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/main';
import Payment from './pages/payment';
// import './App.css';

export default () => (
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/payment" component={Payment} />
        <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
