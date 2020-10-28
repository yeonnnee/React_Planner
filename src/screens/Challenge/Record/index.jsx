import React from "react";
import { connect } from "react-redux";
import { challengeApi } from "../../../api";
import { UPDATE_RECORD } from "../../../redux/types";

import RecordPresenter from "./RecordPresenter";

const Record = (recordProps) => {
  const { state, location, history, updateRecord } = recordProps;

  const checkedList = async (event) => {
    try {
      const challengeId = location.pathname.split("/")[1];
      const recordId = event.target.id;
      const res = await challengeApi.checkDay({
        challenge: challengeId,
        record: recordId,
      });
      updateRecord(res.data.updatedRecord);
    } catch (error) {
      const status = error.response.status;

      if (status === 500) {
        history.push("/500");
      } else if (status === 504) {
        history.push("/504");
      }
    }
  };

  return (
    <RecordPresenter selected={state.selected} checkedList={checkedList} />
  );
};

function mapStateToProps(state) {
  return { state: state.challengeReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    updateRecord: (data) => {
      dispatch({ type: UPDATE_RECORD, payload: data });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
