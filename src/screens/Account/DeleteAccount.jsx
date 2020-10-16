import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Verification from "./Verification";

const DeleteAccount = (deleteAccountProps) => {
  const { state, user } = deleteAccountProps;
  return <h1>hello</h1>;
};
function mapStateToProps(state) {
  return { state: state.accountReducer, user: state.authReducer };
}
// function mapDispatchToProps(dispatch) {}
export default connect(mapStateToProps)(DeleteAccount);
