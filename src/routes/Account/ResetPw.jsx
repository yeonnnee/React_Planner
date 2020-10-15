import React from "react";
import { connect } from "react-redux";

import CheckUser from "./CheckUser";

const ResetPw = (resetPwProps) => {
  const { state, user } = resetPwProps;

  return <>{state.check ? <h1>Reset</h1> : <CheckUser {...user} />}</>;
};
function mapStateToProps(state) {
  return { state: state.accountReducer, user: state.authReducer };
}
// function mapDispatchToProps(dispatch) {}
export default connect(mapStateToProps)(ResetPw);
