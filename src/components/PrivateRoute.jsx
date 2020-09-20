/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./Loader";

const PrivateRoute = ({ component: Component, state, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.isLoading) {
          return <Loader />;
        } else if (!state.isAuthenticated) {
          return <Redirect to="/logIn" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}

export default connect(mapStateToProps)(PrivateRoute);
