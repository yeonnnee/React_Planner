import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePresenter from "./HomePresenter";

const Home = (homeProps) => {
  const { state } = homeProps;
  return (
    <>{state.isAuthenticated ? <Redirect to="/tasks" /> : <HomePresenter />}</>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}

export default connect(mapStateToProps)(Home);
