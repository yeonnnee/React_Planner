/* eslint-disable react/display-name */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tasks from "../container/Tasks";
import Header from "./Header";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Tasks} />
      </Switch>
    </Router>
  );
};
