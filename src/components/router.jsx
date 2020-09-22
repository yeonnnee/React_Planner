/* eslint-disable react/display-name */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tasks from "../container/Tasks";
import Monthly from "../container/Monthly";
import Home from "../container/Home";
import LogIn from "../container/LogIn";
import SignUp from "../container/SignUp";
import Header from "./Header";
import Navigation from "./Navigation";
import PrivateRoute from "./PrivateRoute";

export default () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <PrivateRoute exact path="/tasks" component={Tasks} />
        <PrivateRoute exact path="/monthly" component={Monthly} />
      </Switch>
    </Router>
  );
};
