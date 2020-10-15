import React from "react";
import { connect } from "react-redux";

import CheckUser from "./CheckUser";

const DeleteAccount = (deleteAccountProps) => {
  const { state, user } = deleteAccountProps;
  return <>{state.check ? <h1>Hello</h1> : <CheckUser {...user} />}</>;
};
function mapStateToProps(state) {
  return { state: state.accountReducer, user: state.authReducer };
}
// function mapDispatchToProps(dispatch) {}
export default connect(mapStateToProps)(DeleteAccount);
