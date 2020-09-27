/* eslint-disable react/prop-types */
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePresenter from "../presenter/HomePresenter";

const Home = ({ state }) => {
  return (
    <>{state.isAuthenticated ? <Redirect to="/tasks" /> : <HomePresenter />}</>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}

export default connect(mapStateToProps)(Home);
