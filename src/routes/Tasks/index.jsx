import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { taskApi } from "../../api";
import TasksPresenter from "./TasksPresenter";
import Loader from "../../components/Loader";
import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_START,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_FAILED,
} from "../../redux/types";

const Tasks = (tasksProps) => {
  const { state, start, success, failed, add, setError } = tasksProps;
  const [tasks, setTasks] = useState({ content: "", id: "", status: "" });

  async function fetchData() {
    start();
    try {
      const res = await taskApi.getTasks();
      success(res.data.tasks);
    } catch (error) {
      console.log(error.response);
      failed("문제가 발생하였습니다. 잠시 후 다시 시도해주십시오");
    }
  }

  function onChange(event) {
    const value = event.target.value;
    setTasks({ content: value, id: uuidv4().toString(), status: "PENDING" });
    setError("");
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      if (tasks.content !== "") {
        await taskApi.postTask(tasks);
        add(tasks);
        setTasks({ content: "", id: "", status: "" });
      }
    } catch (error) {
      const res = error.response;
      if (res.status === 400) {
        setError(res.data.msg);
      } else {
        setError("문제가 발생했습니다. 잠시 후 다시 시도해주십시오");
        console.log(res);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : (
        <TasksPresenter
          {...state}
          {...tasks}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      )}
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
    add: (tasks) => {
      dispatch({
        type: ADD_TASKS_SUCCESS,
        payload: tasks,
      });
    },
    setError: (error) => {
      dispatch({ type: ADD_TASKS_FAILED, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
