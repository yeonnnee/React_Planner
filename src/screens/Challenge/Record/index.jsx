import React from "react";
import { connect } from "react-redux";

import RecordPresenter from "./RecordPresenter";

const Record = (recordProps) => {
  const { state } = recordProps;

  return <RecordPresenter selected={state.selected} />;
};

function mapStateToProps(state) {
  return { state: state.challengeReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => {
      dispatch();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
