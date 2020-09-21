import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { FETCH_SUCCESS, FETCH_FAILED, FETCH_START } from "../../redux/types";
import TasksPresenter from "../../presenter/TasksPresenter";

const Tasks = ({ state, start, success, failed }) => {
  async function fetchData() {
    start();
    try {
      const fetchData = await axios.get("/api/tasks");

      success(fetchData.data);
    } catch (error) {
      failed(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (state.isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return <TasksPresenter {...state} />;
  }
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
