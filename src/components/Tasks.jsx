import React, { useEffect } from "react";
import axios from "axios";

import TasksInput from "../TasksInput";

import { FETCH_SUCCESS, FETCH_FAILED, FETCH_START } from "../redux/actions";
import { connect } from "react-redux";

const Tasks = ({ state, start, success, failed }) => {
  async function fetchData() {
    start();
    try {
      const fetchData = await axios.get("/api/tasks");
      const data = JSON.parse(fetchData.data);
      success(data);
    } catch (error) {
      failed();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (state.isLoading) {
    return <h1>Loading...</h1>;
  } else {
    console.log("fetch", state);
    return (
      <div className="App">
        <h1>TASKS</h1>
        <TasksInput />
        <ul>
          {state.tasks.map((task, index) => {
            return <li key={index}>{task.text}</li>;
          })}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { state: state.fetchReducer };
}

function mapDisptachToProps(dispatch) {
  return {
    start: () => {
      dispatch({ type: FETCH_START });
    },
    success: (data) => {
      dispatch({ type: FETCH_SUCCESS, payload: data });
    },
    failed: () => {
      dispatch({ type: FETCH_FAILED });
    },
  };
}

export default connect(mapStateToProps, mapDisptachToProps)(Tasks);
