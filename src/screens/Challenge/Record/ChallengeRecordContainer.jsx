import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { challengeApi } from "../../../api";
import GatewayError from "../../../components/msg/GatewayError";
import ServerError from "../../../components/msg/ServerError";
import Loader from "../../../components/Loader";
import ChallengeRecordPresenter from "./ChallengeRecordPresenter";
import {
  CHALLENGE_ERROR,
  DELETE_CHALLENGE,
  FETCH_CHALLENGE,
  SELECT_CHALLENGE,
  UPDATE_RECORD,
} from "../../../redux/actions/challengeActions";

const ChallengeRecordContainer = (recordProps) => {
  const {
    state,
    location,
    history,
    updateRecord,
    deleteItem,
    setError,
    select,
  } = recordProps;

  const deleteChallenge = async (event) => {
    try {
      const challengeId = event.target.id;
      await challengeApi.deleteChallenge({ id: challengeId });
      history.push("/challenge");
      deleteItem();
    } catch (error) {
      const status = error.response.status;

      if (status === 500) {
        setError("500");
      } else if (status === 504) {
        setError("504");
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
        setError("500");
      } else if (status === 504) {
        setError("504");
      }
    }
  };

  const getRecord = useCallback(() => {
    const target = location.pathname.split("/")[2];
    select(target);
  }, [location.pathname, select]);

  useEffect(() => {
    getRecord();
  }, [getRecord]);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <ChallengeRecordPresenter
          state={state.selected}
          checkedList={checkedList}
          onConfirm={onConfirm}
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.challengeReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStart: () => {
      dispatch({ type: FETCH_CHALLENGE });
    },
    select: (challenge) => {
      dispatch({ type: SELECT_CHALLENGE, payload: challenge });
    },
    updateRecord: (data) => {
      dispatch({ type: UPDATE_RECORD, payload: data });
    },
    deleteItem: () => {
      dispatch({ type: DELETE_CHALLENGE });
    },
    setError: (error) => {
      dispatch({ type: CHALLENGE_ERROR, payload: error });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeRecordContainer);
