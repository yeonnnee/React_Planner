/* eslint-disable react/display-name */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tasks from "../container/Tasks";
import Home from "../container/Home";
import LogIn from "../container/LogIn";
import SignUp from "../container/SignUp";

import Header from "./Header";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/tasks" component={Tasks} />
      </Switch>
    </Router>
  );
};
