import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import PreviewPresenter from "./PreviewPresenter";
import { taskApi, monthlyApi, challengeApi } from "../../api";
import { FETCH_CHALLENGE_SUCCESS } from "../../redux/actions/challengeActions";
import { FETCH_TASKS_SUCCESS } from "../../redux/actions/tasksActions";
import {
  FETCH_MONTHLY_SUCCESS,
  FETCH_MONTHLY,
  MONTHLY_ERROR,
} from "../../redux/actions/monthlyActions";

const PreviewContainer = (previewProps) => {
  const {
    tasksState,
    monthlyState,
    challengeState,
    fetch_start,
    fetch_tasks_success,
    fetch_monthly_success,
    fetch_challenge_success,
    setError,
  } = previewProps;

  const fetchData = useCallback(async () => {
    fetch_start();
    try {
      const tasks = await taskApi.getTasks();
      const monthly = await monthlyApi.getMonthly();
      const challenge = await challengeApi.getChallenges();
      console.log(monthly);
      fetch_tasks_success(tasks.data.tasks);
      fetch_monthly_success(monthly.data.monthly);
      fetch_challenge_success(challenge.data.challenges);
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        setError("500");
      } else if (status === 504) {
        setError("504");
      }
    }
  }, [
    fetch_start,
    fetch_tasks_success,
    fetch_monthly_success,
    fetch_challenge_success,
    setError,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <PreviewPresenter
      tasks={tasksState}
      monthly={monthlyState}
      challenge={challengeState}
    />
  );
};

function mapStateToProps(state) {
  return {
    tasksState: state.tasksReducer,
    monthlyState: state.monthlyReducer,
    challengeState: state.challengeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch_start: () => {
      dispatch({ type: FETCH_MONTHLY });
    },
    fetch_tasks_success: (tasks) => {
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: tasks });
    },
    fetch_monthly_success: (monthly) => {
      dispatch({ type: FETCH_MONTHLY_SUCCESS, payload: monthly });
    },
    fetch_challenge_success: (challenge) => {
      dispatch({ type: FETCH_CHALLENGE_SUCCESS, payload: challenge });
    },
    setError: (error) => {
      dispatch({ type: MONTHLY_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);
