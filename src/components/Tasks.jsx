import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import TasksInput from "../TasksInput";
import { FETCH_SUCCESS, FETCH_FAILED, FETCH_START } from "../redux/actions";
import TaskList from "./TaskList";

const Tasks = ({ state, start, success, failed }) => {
  async function fetchData() {
    start();
    try {
      const fetchData = await axios.get("/api/tasks");
      const data = await JSON.parse(fetchData.data);
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
    return (
      <div className="App">
        <h1>TASKS</h1>
        <TasksInput />
        <ul>
          <h3>PENDING</h3>
          {state.pendingList.map((task, index) => {
            return <TaskList {...task} key={index} />;
          })}
          <h3>FINISHED</h3>
          {state.finishedList.map((task, index) => {
            return <TaskList {...task} key={index} />;
          })}
        </ul>
      </div>
    );
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
    failed: () => {
      dispatch({ type: FETCH_FAILED });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
