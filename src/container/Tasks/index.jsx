/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { FETCH_SUCCESS, FETCH_FAILED, FETCH_START } from "../../redux/types";
import TasksPresenter from "../../presenter/TasksPresenter";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/msg/ErrorMessage";

const Tasks = ({ state, start, success, failed }) => {
  async function fetchData() {
    start();
    try {
      const fetchData = await axios.get("/api/tasks");

      success(fetchData.data);
    } catch (error) {
      failed("문제가 발생하였습니다. 잠시 후 다시 시도해주십시오");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {state.isLoading ? <Loader /> : null}
      {state.error !== "" ? <ErrorMessage {...state} /> : null}
      <TasksPresenter {...state} />
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.tasksReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    start: () => {
      dispatch({ type: FETCH_START });
    },
    success: (data) => {
      dispatch({ type: FETCH_SUCCESS, payload: data });
    },
    failed: (error) => {
      dispatch({ type: FETCH_FAILED, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
