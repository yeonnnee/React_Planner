import React from "react";
import { connect } from "react-redux";
import { challengeApi } from "../../../api";
import { DELETE_CHALLENGE, UPDATE_RECORD } from "../../../redux/types";

import RecordPresenter from "./RecordPresenter";

const Record = (recordProps) => {
  const { state, location, history, updateRecord, deleteItem } = recordProps;

  const deleteChallenge = async (event) => {
    try {
      const challengeId = event.target.id;
      await challengeApi.deleteChallenge({ id: challengeId });
      history.push("/challenge");
      deleteItem();
    } catch (error) {
      const status = error.response.status;

      if (status === 500) {
        history.push("/500");
      } else if (status === 504) {
        history.push("/504");
      }
    }
  };
  const onConfirm = (event) => {
    alert("정말로 삭제하시겠습니까?");
    if (alert) {
      deleteChallenge(event);
    }
  };
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
    <RecordPresenter
      state={state}
      checkedList={checkedList}
      onConfirm={onConfirm}
    />
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
    deleteItem: () => {
      dispatch({ type: DELETE_CHALLENGE });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
