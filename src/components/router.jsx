/* eslint-disable react/display-name */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "../container/Tasks";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Tasks} />
      </Switch>
    </Router>
  );
};
