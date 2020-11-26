import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/main';
import Payment from './pages/payment';
import Confirmation from './pages/confirmation';
// import './App.css';

export default () => (
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/payment" component={Payment} />
        <Route path="/confirmation" component={Confirmation} />
        <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
